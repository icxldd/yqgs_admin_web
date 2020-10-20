import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Post, Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { ImageUploadOssService } from '../../services/ImageUploadOss.service';


@Component({
  selector: 'app-post_',
  templateUrl: './post_.component.html',
  styleUrls: ['./post_.component.scss']
})
export class Post_Component implements OnInit {


  productDialog: boolean;

  products: Post[];

  product: Post;

  selectedProducts: Post[];

  submitted: boolean;

  url:string;



  constructor(private productService: ProductService, private messageService: MessageService, private confirmationService: ConfirmationService,private osssrc:ImageUploadOssService) { }

  ngOnInit() {
      this.productService.getProducts().subscribe((x:any)=>{
        this.products = x.post
      })
      this.url = 'www.baidu.com'
  }

  openNew() {
      this.product = {};
      this.submitted = false;
      this.productDialog = true;
  }

  deleteSelectedProducts() {
      this.confirmationService.confirm({
          message: 'Are you sure you want to delete the selected products?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.products = this.products.filter(val => !this.selectedProducts.includes(val));
              this.productService.DeleteProducts(JSON.stringify(this.selectedProducts.map(x=>x.postId).join(','))).subscribe(x=>{
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
                this.selectedProducts = null;
              })
          }
      });
  }

  editProduct(product: Post) {
      this.product = {...product};
      this.productDialog = true;
  }

  deleteProduct(product: Post) {
      this.confirmationService.confirm({
          message: 'Are you sure you want to delete ' + product.title + '?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.products = this.products.filter(val => val.postId !== product.postId);
              this.productService.DeleteProducts(product.postId).subscribe(x=>{
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
              })
              this.product = {};
          }
      });
  }

  hideDialog() {
      this.productDialog = false;
      this.submitted = false;
  }

  @ViewChild('save') save: ElementRef;
  saveProductkeydown(event){
    
    if(event.keyCode==13){
      this.save.nativeElement.click()
    }
  }
  saveProduct() {
      this.submitted = true;

      if (this.product.title.trim()&&this.product.actionUrl.toString().trim()) {
          if (this.product.postId) {
              this.products[this.findIndexById(this.product.postId)] = this.product;     
              
              
              this.productService.PutProducts(this.product).subscribe(x=>{
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
              })
              
          }
          else {
              this.product.postId = this.createId();
              this.productService.PostProducts(this.product).subscribe(x=>{
                this.products.push(x.post);
              })
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
          }

          this.products = [...this.products];
          this.productDialog = false;
          this.product = {};
      }
  }
  onBasicUploadAuto(event){
    this.osssrc.PostImageUploadOss(event.files[0]).subscribe(x=>{
        this.product.avatarUrl = x.url
        this.messageService.add({severity:'success', summary: 'Successful', detail: '图片上传成功', life: 3000});
    })

  }

  
  onUpload(event){
   
  }
  findIndexById(id: string): number {
      let index = -1;
      for (let i = 0; i < this.products.length; i++) {
          if (this.products[i].postId === id) {
              index = i;
              break;
          }
      }

      return index;
  }

  createId(): string {
      let id = '';
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for ( var i = 0; i < 5; i++ ) {
          id += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return id;
  }


}
