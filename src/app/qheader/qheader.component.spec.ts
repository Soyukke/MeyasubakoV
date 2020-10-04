import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QheaderComponent } from './qheader.component';

describe('QheaderComponent', () => {
  let component: QheaderComponent;
  let fixture: ComponentFixture<QheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
