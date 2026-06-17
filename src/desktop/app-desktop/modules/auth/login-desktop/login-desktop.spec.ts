import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDesktop } from './login-desktop';

describe('LoginDesktop', () => {
  let component: LoginDesktop;
  let fixture: ComponentFixture<LoginDesktop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginDesktop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginDesktop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
