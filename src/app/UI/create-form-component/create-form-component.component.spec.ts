import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFormComponentComponent } from './create-form-component.component';

describe('CreateFormComponentComponent', () => {
  let component: CreateFormComponentComponent;
  let fixture: ComponentFixture<CreateFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFormComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
