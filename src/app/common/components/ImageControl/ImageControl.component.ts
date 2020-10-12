import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-ImageControl',
  templateUrl: './ImageControl.component.html',
  styleUrls: ['./ImageControl.component.css']
})
export class ImageControlComponent implements OnInit {

  @Input() img: string;
  constructor() { }

  ngOnInit() {
  }

}
