import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Doencas } from './doencas';

describe('Doencas', () => {
  let component: Doencas;
  let fixture: ComponentFixture<Doencas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Doencas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Doencas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
