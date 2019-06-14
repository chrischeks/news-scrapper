import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunchDisplayComponent } from './punch-display.component';

describe('PunchDisplayComponent', () => {
  let component: PunchDisplayComponent;
  let fixture: ComponentFixture<PunchDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunchDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunchDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
