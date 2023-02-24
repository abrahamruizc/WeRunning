import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEventosComponent } from './card-eventos.component';

describe('CardEventosComponent', () => {
  let component: CardEventosComponent;
  let fixture: ComponentFixture<CardEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEventosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
