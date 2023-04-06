import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListComponentComponent } from './customer-list-component.component';

describe('CustomerListComponentComponent', () => {
  let component: CustomerListComponentComponent;
  let fixture: ComponentFixture<CustomerListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerListComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
