import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageByCityComponent } from './image-by-city.component';

describe('ImageByCityComponent', () => {
  let component: ImageByCityComponent;
  let fixture: ComponentFixture<ImageByCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageByCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageByCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
