import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HuSixComponent } from './hu-six.component';

describe('HuSixComponent', () => {
  let component: HuSixComponent;
  let fixture: ComponentFixture<HuSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
