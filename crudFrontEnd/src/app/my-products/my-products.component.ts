import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css']
})
export class MyProductsComponent implements OnInit {

  isChange:boolean = false;
  productsData: any[] = [];
  productId: string = "";
  prodName: string = "";
  prodPrice: string = "";
  prodCategory: string = "";
  prodDesc: string = "";
  

  updateForm: FormGroup = new FormGroup({
    productName: new FormControl(null),
    productPrice: new FormControl(null),
    productCategory: new FormControl(null),
    productDesc: new FormControl(null)
  });

  constructor(public _AuthService: AuthService) { }

  ngOnInit(): void {

    this._AuthService.showProducts().subscribe((res) => {
      this.productsData = res.data;
      // console.log(this.productsData);
    })
  }

  subDeletProduct(id: string): void {
    this._AuthService.deletProduct(id).subscribe((res) => {
      this.ngOnInit()
    })
  }

  getProductData(id: string, productName: string, productPrice: string, productCategory: string, productDesc: string): void {
    this.productId = id;
    this.prodName = productName;
    this.prodPrice = productPrice;
    this.prodCategory = productCategory;
    this.prodDesc = productDesc;
    
    this.updateForm = new FormGroup({
      productName: new FormControl(this.prodName),
      productPrice: new FormControl(this.prodPrice),
      productCategory: new FormControl(this.prodCategory),
      productDesc: new FormControl(this.prodDesc)
    });
    
  }

  subUpdateProduct(updateForm: FormGroup): void {
    this._AuthService.updateProduct(this.productId, updateForm.value).subscribe((res) => {
      this.isChange = true;
      this.ngOnInit()
    })
  }




}
