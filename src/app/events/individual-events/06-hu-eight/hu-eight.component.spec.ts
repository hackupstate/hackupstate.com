import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HuEightComponent } from './hu-eight.component';

describe('HuEightComponent', () => {
  let component: HuEightComponent;
  let fixture: ComponentFixture<HuEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
