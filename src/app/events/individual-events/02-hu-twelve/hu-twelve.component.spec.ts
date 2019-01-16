import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HuTwelveComponent } from './hu-twelve.component';

describe('HuTwelveComponent', () => {
  let component: HuTwelveComponent;
  let fixture: ComponentFixture<HuTwelveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuTwelveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuTwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
