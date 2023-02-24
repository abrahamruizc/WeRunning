import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEventosComponent } from './lista-eventos.component';

describe('ListaEventosComponent', () => {
  let component: ListaEventosComponent;
  let fixture: ComponentFixture<ListaEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEventosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
