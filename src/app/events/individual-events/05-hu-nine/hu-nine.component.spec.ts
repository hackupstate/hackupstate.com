import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HuNineComponent } from './hu-nine.component';

describe('HuNineComponent', () => {
  let component: HuNineComponent;
  let fixture: ComponentFixture<HuNineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuNineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
