import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoEventosComponent } from './historico-eventos.component';

describe('HistoricoEventosComponent', () => {
  let component: HistoricoEventosComponent;
  let fixture: ComponentFixture<HistoricoEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoEventosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricoEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
