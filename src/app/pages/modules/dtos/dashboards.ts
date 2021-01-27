import { auditableItemDto, fileBasicDto } from "./manual-review"

export class  MapperDto {
    static listAssign = (arrA, arrB) => Object.keys(arrA).forEach(key => { arrA[key] = arrB[key] || arrA[key]});
    
    static informationsToLivecastDto(informations:informationDto[]):livecastDto[]{

        let livecasts:livecastDto[]=[];
        informations.forEach((x,i)=>{
            let live :livecastDto =new livecastDto();
            this.listAssign(live,x);
            live.livecastId = x.informationId;
            livecasts.push(live);
        });

        return livecasts;
    }

    static informationsToDiscussDto(informations:informationDto[]):discussDto[]{

        let discussDtos:discussDto[]=[];
        informations.forEach((x,i)=>{
            let discuss :discussDto =new discussDto();
            this.listAssign(discuss,x);
            discuss.discussId = x.informationId;
            discussDtos.push(discuss);
        });

        return discussDtos;
 
    }

    static informationsToNotificationDto(informations:informationDto[]):notificationDto[]{
        let notifications:notificationDto[]=[];
        informations.forEach((x,i)=>{
            let _notification :notificationDto =new notificationDto();
            this.listAssign(_notification,x);
            _notification.notificationId = x.informationId;
            notifications.push(_notification);
        });

        return notifications;
      
    }

}

export class GuildDto {
    guildId:string
    displayName:string
    description:string
    avatarUrl:string
    coverUrl:string
    hasAudited:boolean//是否审核
    address:string
    isPublic:boolean
    joinMode:number// 加入群组的方式。（0: 不允许加入; 1: 需要所有者或管理员同意; 2: 直接加入）
    status:number// 状态。（-3: 已解散; -2: 已屏蔽; -1: 已删除; 0: 正常; 1: 等待审核）
    ownerId:string
    violationCount:number// 违规次数。
    membersCount:number//成员人数
    isCanNewJoin:boolean
    files:fileBasicDto[]
    auditables:auditableItemDto[]
    guildmembers:guildMemberDto[]
    informations:informationDto[]

    notificationCount:number
    discussCount:number
    livecastCount:number
}

export class guildMemberAdminDto {


    guildId:string
    guildName:string
    guildAvatarUrl:string
    guildAddress:string
    guildMembersCount:string

    guildMembersDto:guildMemberDto[]
}




export class accountAdminDto {
    userAuthId:string
    nickName:string
    avatarUrl:string
    ownerGuildCount:number
    joinGuildCount:number
    isCloudChurchAdmin:boolean
    lastUsingGuildId:string
    userCreatedTime:string
    notificationPublishCount:number
    discussPublishCount:number
    livecastPublishCount:number
    violationCount:number
    phoneNumber:string
    files:fileBasicDto[]
}


export class accountDetailDto {
   createdGuilds:GuildDto[]
   joinGuilds:GuildDto[]
   publishNotification:notificationDto[]
   publishDiscuss:discussDto[]
   publishLivecast:livecastDto[]
}



export class guildMemberDto {
    memberId:string
    guildId:string
    nickname:string
    avatarUrl:string
    phoneNumber:string
    role:boolean// 角色。（0: 信徒; 1: 同工; 2: 牧者）
    status:number// 状态。（-3：已拒绝; -2: 已屏蔽; -1: 已退出; 0: 正常; 1: 等待审核; 2: 已邀请等待加入）
    modifiedDate:string
}


export class  livecastDto {
    livecastId:string
    guildId:string
    title:string
    description:string
    avatarUrl:string
    rtmpPlayUrl:string
    hlsPlayUrl:string
    recordUrl:string
    status:number //状态。（-2: 已屏蔽; -1: 已删除; 0: 进行中; 1: 未开始; 2: 已结束; 3: 已中断）
    creatorId:string
    createdDate:string
    beginDate:string
    endDate:string
    flux:number
    viewedReceiversCount:number
    unviewedReceiversCount:number
    files:fileBasicDto[]
    hasViewMembers:guildMemberDto[]
    noViewMembers:guildMemberDto[]
    
    constructor(){
        this.livecastId = '';
        this.guildId = '';
        this.title = '';
        this.description = '';
        this.avatarUrl = '';
        this.rtmpPlayUrl = '';
        this.hlsPlayUrl = '';
        this.recordUrl = '';
        this.status = 0;
        this.creatorId = '';
        this.createdDate = '';
        this.beginDate = '';
        this.endDate = '';
        this.viewedReceiversCount = 0;
        this.unviewedReceiversCount = 0;
        this.files = [];
        this.hasViewMembers = [];
        this.noViewMembers = [];
    }

    get isInLive(){
        return this.status==0?1:0;
    }

}


export class  discussDto {
    discussId:string
    guildId:string
    title:string
    description:string
    avatarUrl:string
    status:number //状态。（-2: 已屏蔽; -1: 已删除; 0: 进行中; 1: 未开始; 2: 已结束; 3: 已中断）
    creatorId:string
    createdDate:string
    beginDate:string
    endDate:string
    viewedReceiversCount:number// 已查看
    unviewedReceiversCount:number//未查看人数
    files:fileBasicDto[]
    hasViewMembers:guildMemberDto[]
    noViewMembers:guildMemberDto[]

    // constructor(){
    //     this.discussId = '';
    //     this.guildId = '';
    //     this.title = '';
    //     this.description = '';
    //     this.avatarUrl = '';
    //     this.status = 0;
    //     this.creatorId = '';
    //     this.createdDate = '';
    //     this.beginDate = '';
    //     this.endDate = '';
    //     this.viewedReceiversCount = 0;
    //     this.unviewedReceiversCount = 0;
    //     this.files = [];
    //     this.hasViewMembers = [];
    //     this.noViewMembers = [];
    // }
}


export class  notificationDto {
    notificationId:string
    guildId:string
    title:string
    description:string
    avatarUrl:string
    status:number //状态。（-2: 已屏蔽; -1: 已删除; 0: 进行中; 1: 未开始; 2: 已结束; 3: 已中断）
    creatorId:string
    createdDate:string
    beginDate:string
    endDate:string
    viewedReceiversCount:number// 已查看
    unviewedReceiversCount:number//未查看人数
    files:fileBasicDto[]
    hasViewMembers:guildMemberDto[]
    noViewMembers:guildMemberDto[]

    // constructor(){
    //     this.notificationId = '';
    //     this.guildId = '';
    //     this.title = '';
    //     this.description = '';
    //     this.avatarUrl = '';
    //     this.status = 0;
    //     this.creatorId = '';
    //     this.createdDate = '';
    //     this.beginDate = '';
    //     this.endDate = '';
    //     this.viewedReceiversCount = 0;
    //     this.unviewedReceiversCount = 0;
    //     this.files = [];
    //     this.hasViewMembers = [];
    //     this.noViewMembers = [];
    // }
}


export interface  informationDto {
    informationId:string
    guildId:string
    title:string
    description:string
    avatarUrl:string
    status:number //状态。（-2: 已屏蔽; -1: 已删除; 0: 进行中; 1: 未开始; 2: 已结束; 3: 已中断）
    type:number
    creatorId:string
    createdDate:string
    beginDate:string
    endDate:string
    viewedReceiversCount:number// 已查看
    unviewedReceiversCount:number//未查看人数
    files:fileBasicDto[]
    hasViewMembers:guildMemberDto[]
    noViewMembers:guildMemberDto[]
}



export class guildTotalAmountDto{
    guildId:string
    chargeMoney:number
    consumeMoney:number
    remainMoney:number
    chargeFlux:number
    consumeFlux:number
    remainFlux:number
}

export class guildChargeDto{
    chargeId:string
    type:number
    typeName:string
    consumedMoney:number
    amount:number
    remark:string
    ownerId:string
    createdDate:string
}


export class guildConsumeDto{
    consumeId:string
    type:number
    typeName:string
    amount:number
    remark:string
    ownerId:string
    createdDate:string
}

