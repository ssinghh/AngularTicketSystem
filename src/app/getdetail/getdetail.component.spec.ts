import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetdetailComponent } from './getdetail.component';

describe('GetdetailComponent', () => {
  let component: GetdetailComponent;
  let fixture: ComponentFixture<GetdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
