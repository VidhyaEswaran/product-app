import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInsertPageComponent } from './product-insert-page.component';

describe('ProductInsertPageComponent', () => {
  let component: ProductInsertPageComponent;
  let fixture: ComponentFixture<ProductInsertPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductInsertPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInsertPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
