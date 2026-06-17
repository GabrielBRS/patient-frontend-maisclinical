import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarSenhaDesktop } from './recuperar-senha-desktop';

describe('RecuperarSenhaDesktop', () => {
  let component: RecuperarSenhaDesktop;
  let fixture: ComponentFixture<RecuperarSenhaDesktop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuperarSenhaDesktop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuperarSenhaDesktop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
