import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponHomeComponent } from './compon-home.component';

describe('ComponHomeComponent', () => {
  let component: ComponHomeComponent;
  let fixture: ComponentFixture<ComponHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
