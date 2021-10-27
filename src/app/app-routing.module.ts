import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductInsertPageComponent } from './product-insert-page/product-insert-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'products', component: ProductInsertPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
