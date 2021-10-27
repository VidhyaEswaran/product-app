import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Products } from '../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  products: Products[];
  notifier = new Subject();

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.apiService
      .getProducts()
      .pipe(takeUntil(this.notifier))
      .subscribe((data: Products[]) => (this.products = data));
  }

  addProduct(definition: string) {
    this.router.navigateByUrl('/products', {
      state: { definitionUrl: definition },
    });
  }

  ngOnDestroy() {
    this.notifier.next();
    this.notifier.complete();
  }
}
