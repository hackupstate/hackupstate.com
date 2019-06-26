import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HuFourteenComponent } from './hu-fourteen.component';

describe('HuFourteenComponent', () => {
  let component: HuFourteenComponent;
  let fixture: ComponentFixture<HuFourteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuFourteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuFourteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
