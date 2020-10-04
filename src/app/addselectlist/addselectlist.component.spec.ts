import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddselectlistComponent } from './addselectlist.component';

describe('AddselectlistComponent', () => {
  let component: AddselectlistComponent;
  let fixture: ComponentFixture<AddselectlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddselectlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddselectlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
