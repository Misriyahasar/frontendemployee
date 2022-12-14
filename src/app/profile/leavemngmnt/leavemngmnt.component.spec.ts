import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavemngmntComponent } from './leavemngmnt.component';

describe('LeavemngmntComponent', () => {
  let component: LeavemngmntComponent;
  let fixture: ComponentFixture<LeavemngmntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeavemngmntComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeavemngmntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
