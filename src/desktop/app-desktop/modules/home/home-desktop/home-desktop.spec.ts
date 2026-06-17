import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDesktop } from './home-desktop';

describe('HomeDesktop', () => {
  let component: HomeDesktop;
  let fixture: ComponentFixture<HomeDesktop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeDesktop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeDesktop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
