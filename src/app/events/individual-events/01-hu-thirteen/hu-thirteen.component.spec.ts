import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HuThirteenComponent } from './hu-thirteen.component';

describe('HuThirteenComponent', () => {
  let component: HuThirteenComponent;
  let fixture: ComponentFixture<HuThirteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuThirteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuThirteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
