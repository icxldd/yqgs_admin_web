import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {



  datalist:any=[];
  str:string;
  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  keyup(event){
    
    console.log(this.str);
    this.productService.getInformations(0,10,this.str).subscribe(x=>{
      this.datalist = x.data;
      console.log(x)
    });

  }





}
