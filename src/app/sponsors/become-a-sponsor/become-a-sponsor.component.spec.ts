import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeASponsorComponent } from './become-a-sponsor.component';

describe('BecomeASponsorComponent', () => {
  let component: BecomeASponsorComponent;
  let fixture: ComponentFixture<BecomeASponsorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecomeASponsorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomeASponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
