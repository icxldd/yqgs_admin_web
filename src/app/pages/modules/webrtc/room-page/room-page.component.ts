import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'
import { SocketWebrtcService } from '../../services/socket-webrtc.service';
import ReconnectingWebSocket from 'reconnecting-websocket';
@Component({
  selector: 'app-room-page',
  templateUrl: './room-page.component.html',
  styleUrls: ['./room-page.component.scss']
})

//https://github.com/yinuocode/WebSocket-WebRTC
export class RoomPageComponent implements OnInit {


  roomId:string;
  name:string;
  socket:any;


  mediaConstraints = {"audio": true,"video": true};
  

  chatSocket:any;
  // 本地流
  localStream = null;
  // 存储用户对象
  peerList = {};

  @ViewChild('videoMine') videoMine_:ElementRef;
  @ViewChild('videoBox') videoBox_:ElementRef;


  videoBox:any;
  localVideo:any;
  constructor(private route: ActivatedRoute) {

     this.route.queryParams.subscribe(x=>{
      let itemObj =x;
      this.roomId = itemObj.roomId;
      this.name = itemObj.name;
    });
   }

  



ngOnInit(){}

async  getUserMedia() {
  try {
    this.localStream = await navigator.mediaDevices.getUserMedia(this.mediaConstraints);
    this.localVideo.srcObject = this.localStream;
    this.sendMessage({
      userName: this.name,
      type: 'join'
    });
  } catch (error) {
    console.log('获取本地摄像头失败：'+error);
  }
}
// 收到offer请求
 handleVideoOfferMsg(v) {
  this.peerList[v.account] && this.peerList[v.account].setRemoteDescription(v.sdp, () => {
    this.peerList[v.account].createAnswer().then((desc) => {
        // console.log('send-answer', desc);
        this.peerList[v.account].setLocalDescription(desc, () => {
          this.sendMessage({
            type: 'video-answer',
            sdp: this.peerList[v.account].localDescription,
            account: v.account
          });
        });
    });
  }, () => {});
}

 createOffer(account, peer) {
  //发送offer，发送本地session描述
  peer.createOffer({
    offerToReceiveAudio: 1,
    offerToReceiveVideo: 1
  }).then((desc) => {
    peer.setLocalDescription(desc, () => {
      this.sendMessage({
        type: 'video-offer',
        sdp: peer.localDescription,
        account: account
      });
    });
  });
}

 sendMessage(msg) {
  msg.roomid = this.roomId;
  this.chatSocket.send(JSON.stringify(msg));
}

 getPeerConnection(v) {
  let iceServer:any = {
    "iceServers": [
      {
        "url": "stun:stun.l.google.com:19302"
      }
    ]
  };

  // var iceServer = {
  //   'iceServers': [{
  //     'urls': 'turn:116.62.190.90:3478',
  //     'credential': "username",
  //     'username': "password"
  //   }]
  // };
  // 创建
  var peer:any = new RTCPeerConnection(iceServer);
  //向 RTCPeerConnection 中加入需要发送的流
  peer.addStream(this.localStream);
  // 判断使用哪个方法监听流
  var hasAddTrack = (peer.addTrack !== undefined);
  // 如果检测到媒体流连接到本地，将其绑定到一个video标签上输出
  if (hasAddTrack) {
    peer.ontrack = (event) => {
      let videos:any ;
      try {
      videos = document.getElementById(v.account);
      }catch(e){}
      if (videos) {
        videos.srcObject = event.streams[0];
      } else {
        let video:any = document.createElement('video');
        video.controls = true;
        video.autoplay = 'autoplay';
        video.srcObject = event.streams[0];
        video.id = v.account;
        video.className = 'col-md-4';
        this.videoBox.append(video);
      }
    }
  } else {
    peer.onaddstream = (event) => {
      let videos:any ;

      try {
        videos = document.getElementById(v.account);
      }catch(e){}
      if (videos) {
        videos.srcObject = event.stream;
      } else {
        let video:any = document.createElement('video');
        video.controls = true;
        video.autoplay = 'autoplay';
        video.srcObject = event.stream;
        video.id = v.account;
        video.className = 'col-md-4';
        this.videoBox.append(video);
      }
    };
  }
  //发送ICE候选到其他客户端
  peer.onicecandidate = (event) => {
    if (event.candidate) {
      this.sendMessage({
        type: '__ice_candidate',
        candidate: event.candidate,
        account: v.account
      });
    }
  };
  this.peerList[v.account] = peer;
}
 userJoined(data, account) {
  // 当大于一个与用户时
  if (data.length> 1) {
    data.forEach(v => {
      let obj:any = {};
      let arr = [v, this.name];
      obj.account = arr.sort().join('-');
      if (!this.peerList[obj.account] && v !== this.name) {
        this.getPeerConnection(obj);
      }
    });
    // 当房间有人存在则向房间其它人发offer
    if (account === this.name) {
      // console.log('account', account);
      for (let k in this.peerList) {
        this.createOffer(k, this.peerList[k]);
      }
    }
  }
}
 websocketInit() {
  try {
    // 浏览器提供 WebSocket 对象
    this.chatSocket = new ReconnectingWebSocket('wss://116.62.190.90:3000');
    // this.chatSocket = new ReconnectingWebSocket('wss://192.168.31.114:3000');
  } catch (error) {
    console.log('发生错误：'+error);
  }
let self = this;
  // 监听消息
  this.chatSocket.onmessage = function(evt) {
    var msg = JSON.parse(evt.data);
    switch(msg.type) {
      case "joined":
        self.userJoined(msg.userList, msg.userName);
        break;
      case "__ice_candidate":
         //如果是一个ICE的候选，则将其加入到PeerConnection中
        if (msg.candidate) {
          self.peerList[msg.account] && self.peerList[msg.account].addIceCandidate(msg.candidate).catch(() => {}
          );
        }
        break;
      case "error":
        alert(msg.msg);
        break;
      case "text":
        break;
      // 信令消息:这些消息用于在视频通话之前的谈判期间交换WebRTC信令信息。
      case "video-offer":  // 发送 offer
      self.handleVideoOfferMsg(msg);
        break;
      case "video-answer":  // Callee已经答复了我们的报价
      self.peerList[msg.account] && self.peerList[msg.account].setRemoteDescription(msg.sdp, function(){}, () => {});
        break;
      case "disconnected": // 有人挂断了电话
        console.log(msg.account);
        let dom = document.getElementById([msg.account, self.name].sort().join('-'));
        if (dom) {
          dom.remove();
        }
        break;
      // 未知的信息;输出到控制台进行调试。
      default:
        console.log("未知的信息收到了:");
        console.log(msg);
    }
  };
  //连接成功建立的回调方法
  this.chatSocket.onopen = function (event) {
    console.log("onopen");
  }
  //连接关闭的回调方法
  this.chatSocket.onclose = function () {
    this.chatSocket.close();
    console.log("websocket.onclose");
  }
  //连接发生错误的回调方法
  this.chatSocket.onerror = function () {
    console.log("chatSocket.error");
  };
  window.onbeforeunload = function () {
    this.chatSocket.close();
  }
}

ngAfterViewInit() {
    // console.log(this.socket);
    let account = this.name;
    let roomid = this.roomId;
    this.videoBox= this.videoBox_.nativeElement;
    this.localVideo = this.videoMine_.nativeElement;



    this.websocketInit();
    this.getUserMedia();
  }

}
