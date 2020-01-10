import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HuFifteenComponent } from './hu-fifteen.component';

describe('HuFifteenComponent', () => {
  let component: HuFifteenComponent;
  let fixture: ComponentFixture<HuFifteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuFifteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuFifteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
