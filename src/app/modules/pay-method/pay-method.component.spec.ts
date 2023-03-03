import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayMethodComponent } from './pay-method.component';

describe('PayMethodComponent', () => {
  let component: PayMethodComponent;
  let fixture: ComponentFixture<PayMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayMethodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
