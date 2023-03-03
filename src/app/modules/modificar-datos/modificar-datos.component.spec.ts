import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarDatosComponent } from './modificar-datos.component';

describe('ModificarDatosComponent', () => {
  let component: ModificarDatosComponent;
  let fixture: ComponentFixture<ModificarDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarDatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
