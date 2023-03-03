import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroanonimoComponent } from './registroanonimo.component';

describe('RegistroanonimoComponent', () => {
  let component: RegistroanonimoComponent;
  let fixture: ComponentFixture<RegistroanonimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroanonimoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroanonimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
