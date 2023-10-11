import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewProfilesComponent } from './admin-view-profiles.component';

describe('AdminViewProfilesComponent', () => {
  let component: AdminViewProfilesComponent;
  let fixture: ComponentFixture<AdminViewProfilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminViewProfilesComponent]
    });
    fixture = TestBed.createComponent(AdminViewProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
