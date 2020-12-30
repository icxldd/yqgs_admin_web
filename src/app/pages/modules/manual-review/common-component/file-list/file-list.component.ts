import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProductService } from 'src/app/pages/services/product.service';
import { fileBasicDto } from '../../../dtos/manual-review';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.scss']
})
export class FileListComponent {


  files: fileBasicDto[];
            
  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
    this.files = this.config.data;

   }

  ngOnInit() {
  }
  openUrl(file:fileBasicDto){
    window.open(file.url);
  }

}
