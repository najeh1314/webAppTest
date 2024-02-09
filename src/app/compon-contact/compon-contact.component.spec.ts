import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponContactComponent } from './compon-contact.component';

describe('ComponContactComponent', () => {
  let component: ComponContactComponent;
  let fixture: ComponentFixture<ComponContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
