import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HuSevenComponent } from './hu-seven.component';

describe('HuSevenComponent', () => {
  let component: HuSevenComponent;
  let fixture: ComponentFixture<HuSevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuSevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
