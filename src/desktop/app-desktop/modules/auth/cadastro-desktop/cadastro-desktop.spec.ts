import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDesktop } from './cadastro-desktop';

describe('CadastroDesktop', () => {
  let component: CadastroDesktop;
  let fixture: ComponentFixture<CadastroDesktop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroDesktop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroDesktop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
