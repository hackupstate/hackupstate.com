import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HuTenComponent } from './hu-ten.component';

describe('HuTenComponent', () => {
  let component: HuTenComponent;
  let fixture: ComponentFixture<HuTenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuTenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
