import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopycomponentComponent } from './copycomponent.component';

describe('CopycomponentComponent', () => {
  let component: CopycomponentComponent;
  let fixture: ComponentFixture<CopycomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopycomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopycomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
