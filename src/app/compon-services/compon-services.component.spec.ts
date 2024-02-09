import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponServicesComponent } from './compon-services.component';

describe('ComponServicesComponent', () => {
  let component: ComponServicesComponent;
  let fixture: ComponentFixture<ComponServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
