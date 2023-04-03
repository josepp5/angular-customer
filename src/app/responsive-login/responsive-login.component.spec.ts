import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveLoginComponent } from './responsive-login.component';

describe('ResponsiveLoginComponent', () => {
  let component: ResponsiveLoginComponent;
  let fixture: ComponentFixture<ResponsiveLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsiveLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsiveLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
