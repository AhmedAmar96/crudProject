import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isAdd:boolean = false;
  
  crudForm: FormGroup = new FormGroup({
    productName: new FormControl(null, [Validators.required]),
    productPrice: new FormControl(null, [Validators.required]),
    productCategory: new FormControl(null, [Validators.required]),
    productDesc: new FormControl(null, [Validators.required])
  });

  constructor(public _AuthService: AuthService) { }

  ngOnInit(): void {
  }

  subCrudForm(crudForm: FormGroup) {

    if (crudForm.valid) {
      this._AuthService.addProduct(crudForm.value).subscribe((res) => {
        if (res.message == "success") {
          this.isAdd = true;
          this.crudForm = new FormGroup({
            productName: new FormControl(null, [Validators.required]),
            productPrice: new FormControl(null, [Validators.required]),
            productCategory: new FormControl(null, [Validators.required]),
            productDesc: new FormControl(null, [Validators.required])
          });
        }
      })
    }

  }

}
