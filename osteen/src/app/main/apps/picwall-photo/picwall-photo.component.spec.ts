import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicwallPhotoComponent } from './picwall-photo.component';

describe('PicwallPhotoComponent', () => {
  let component: PicwallPhotoComponent;
  let fixture: ComponentFixture<PicwallPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicwallPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicwallPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
