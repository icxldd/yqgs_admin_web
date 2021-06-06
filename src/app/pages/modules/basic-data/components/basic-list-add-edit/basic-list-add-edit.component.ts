import { Component, OnInit } from '@angular/core';
import { CreateTreeDto, DataDictionaryTreeDto, UpdateInputTree } from '@app/api/ddd-api/models';
import { BlocDataDictionaryTreeService } from '@app/api/ddd-api/services';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CreateTreeEditDto } from '../../models/create-tree-edit-dto';

@Component({
  selector: 'app-basic-list-add-edit',
  templateUrl: './basic-list-add-edit.component.html',
  styleUrls: ['./basic-list-add-edit.component.scss']
})
export class BasicListAddEditComponent implements OnInit {


  dto: DataDictionaryTreeDto;

  constructor(public config: DynamicDialogConfig, public ref: DynamicDialogRef, private dictionaryTreeSrc: BlocDataDictionaryTreeService) {

    this.dto = this.config.data
  }

  ngOnInit() {
  }

  submit() {
    if (this.dto.id) {
      this.dictionaryTreeSrc.BlocDataDictionaryTreeUpdate({ id: this.dto.id, description: this.dto.description, name: this.dto.name } as UpdateInputTree).subscribe(x => {
        alert('更新成功');
      });
    } else {
      this.dictionaryTreeSrc.BlocDataDictionaryTreeCreate({ parentId: this.dto.parentId, description: this.dto.description, name: this.dto.name } as CreateTreeDto).subscribe(x => {
        this.ref.close(x);
      });
    }
  }

}
