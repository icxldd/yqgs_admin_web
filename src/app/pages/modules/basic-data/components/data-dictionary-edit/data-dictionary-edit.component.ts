import { Component, OnInit } from '@angular/core';
import { DataDictionaryCreateOrUpdate, DataDictionaryDto, EContentType } from '@app/api/ddd-api/models';
import { BlocDataDictionaryService } from '@app/api/ddd-api/services';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { throwError } from 'rxjs';
import { ContentType } from '../../models/content-type';

@Component({
  selector: 'app-data-dictionary-edit',
  templateUrl: './data-dictionary-edit.component.html',
  styleUrls: ['./data-dictionary-edit.component.scss']
})
export class DataDictionaryEditComponent implements OnInit {

  dto: DataDictionaryDto;

  isAdd: boolean;

  types: ContentType[];

  selectedtype: ContentType;

  constructor(public config: DynamicDialogConfig, public ref: DynamicDialogRef, private dictionarySrc: BlocDataDictionaryService) { }

  initTypes() {
    let types_ = [{ name: '文本', code: 0 }, { name: 'URL', code: 1 }, { name: 'HTML', code: 2 }, { name: 'JSON', code: 3 }] as ContentType[];
    this.types = types_;
    this.selectedtype = { name: '文本', code: 0 };
  }

  ngOnInit() {
    this.initTypes();
    if (this.config.data == null) {
      this.isAdd = true;
    } else {
      this.isAdd = false;
    }
    this.dto = this.config.data

    if (this.dto == null) {
      this.dto = {} as DataDictionaryDto;
    }
  }
  isUrl(URL) {
    var str = URL;
    //判断URL地址的正则表达式为:http(s)?://([\w-]+\.)+[\w-]+(/[\w- ./?%&=]*)?
    //下面的代码中应用了转义字符"\"输出一个字符"/"
    var Expression = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
    var objExp = new RegExp(Expression);
    if (objExp.test(str) == true) {
        return true;
    } else {
        return false;
    }
}

  checkJSON(str) {
    if (typeof str == 'string') {
      try {
        var obj = JSON.parse(str);
        if (typeof obj == 'object' && obj) {
          return true;
        } else {
          return false;
        }
      } catch (e) {
        return false;
      }
    }
    return false;
  }

  verifyData() {
    let obj = this.dto;
    if (!obj.name || !obj.key || !obj.content) {
      alert('请先填好必填项');
      throw "请先填好必填项";
    }
    let content = obj.content;
    if (obj.content) {
      switch (this.selectedtype.code) {
        case 0:

          break;

        case 1:
          if (!this.isUrl(content)) {
            alert("内容必须为合法的url");
            throw "内容必须为合法的url";
          }
          break;
        case 2:

          break;
        case 3:
          let obj_json = this.checkJSON(content);
          if (!obj_json) {
            alert("内容必须为合法的json");
            throw "内容必须为合法的json";
          }
          break;
        default:
          break;
      }
    }

  }
  submit() {
    this.verifyData();
    let curentSeelctedType = this.selectedtype.code;
    if (!this.isAdd) {
      let dto = this.dto as DataDictionaryCreateOrUpdate;
      dto.eContentType = curentSeelctedType;
      this.ref.close(dto);
    } else {
      let dto = this.dto as DataDictionaryCreateOrUpdate;
      dto.eContentType = curentSeelctedType;
      this.ref.close(dto);
    }
  }

}
