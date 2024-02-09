import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponProductsComponent } from './compon-products.component';

describe('ComponProductsComponent', () => {
  let component: ComponProductsComponent;
  let fixture: ComponentFixture<ComponProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
