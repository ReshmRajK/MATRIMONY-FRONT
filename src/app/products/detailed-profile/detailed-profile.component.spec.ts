import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedProfileComponent } from './detailed-profile.component';

describe('DetailedProfileComponent', () => {
  let component: DetailedProfileComponent;
  let fixture: ComponentFixture<DetailedProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailedProfileComponent]
    });
    fixture = TestBed.createComponent(DetailedProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
