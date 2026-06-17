import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMedical } from './my-medical';

describe('MyMedical', () => {
  let component: MyMedical;
  let fixture: ComponentFixture<MyMedical>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyMedical]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyMedical);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
