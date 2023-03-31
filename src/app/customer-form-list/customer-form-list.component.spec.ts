import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFormListComponent } from './customer-form-list.component';

describe('CustomerFormListComponent', () => {
  let component: CustomerFormListComponent;
  let fixture: ComponentFixture<CustomerFormListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerFormListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
