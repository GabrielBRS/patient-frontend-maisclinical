import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDesktop } from './app-desktop';

describe('AppDesktop', () => {
  let component: AppDesktop;
  let fixture: ComponentFixture<AppDesktop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppDesktop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppDesktop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
