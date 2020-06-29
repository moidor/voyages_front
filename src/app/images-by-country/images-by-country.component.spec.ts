import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesByCountryComponent } from './images-by-country.component';

describe('ImagesByCountryComponent', () => {
  let component: ImagesByCountryComponent;
  let fixture: ComponentFixture<ImagesByCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesByCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesByCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
