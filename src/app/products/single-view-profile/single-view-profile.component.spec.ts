import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleViewProfileComponent } from './single-view-profile.component';

describe('SingleViewProfileComponent', () => {
  let component: SingleViewProfileComponent;
  let fixture: ComponentFixture<SingleViewProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleViewProfileComponent]
    });
    fixture = TestBed.createComponent(SingleViewProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
