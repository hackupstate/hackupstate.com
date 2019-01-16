import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HuElevenComponent } from './hu-eleven.component';

describe('HuElevenComponent', () => {
  let component: HuElevenComponent;
  let fixture: ComponentFixture<HuElevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuElevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
