import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomsCardComponent } from './symptoms-card.component';

describe('SymptomsCardComponent', () => {
  let component: SymptomsCardComponent;
  let fixture: ComponentFixture<SymptomsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
