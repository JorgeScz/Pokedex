import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product3Component } from './product3.component';

describe('Product3Component', () => {
  let component: Product3Component;
  let fixture: ComponentFixture<Product3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Product3Component]
    });
    fixture = TestBed.createComponent(Product3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});