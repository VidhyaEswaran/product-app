import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProductDetails } from '../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-insert-page',
  templateUrl: './product-insert-page.component.html',
  styleUrls: ['./product-insert-page.component.css'],
})
export class ProductInsertPageComponent implements OnInit, OnDestroy {
  productForm: FormGroup;
  group: {};
  formData: ProductDetails[];
  result: any;
  notifier = new Subject();

  constructor(private apiService: ApiService, private router: Router) {
    this.addProduct(
      this.router.getCurrentNavigation().extras.state?.definitionUrl
    );
  }

  ngOnInit(): void {}

  addProduct(definition: string) {
    this.apiService
      .getProductDetails(definition)
      .pipe(takeUntil(this.notifier))
      .subscribe((data: ProductDetails[]) => {
        if (data.length !== 0) {
          this.removeGroup();
          this.formData = data;
          this.group = {};
          data.forEach((formElement: ProductDetails) => {
            this.group[formElement.caption] = new FormControl(
              formElement.defaultValue,
              formElement.mandatory ? Validators.required : null
            );
          });
          this.productForm = new FormGroup(this.group);
        }
      });
  }

  onSubmit() {
    this.result = this.productForm.value;
  }

  removeGroup() {
    this.productForm = null;
  }

  clear() {
    this.productForm.reset();
    this.result = {};
  }

  back() {
    this.router.navigate(['/home']);
  }

  ngOnDestroy() {
    this.notifier.next();
    this.notifier.complete();
  }
}
