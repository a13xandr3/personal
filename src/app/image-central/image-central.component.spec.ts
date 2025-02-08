import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCentralComponent } from './image-central.component';

describe('ImageCentralComponent', () => {
  let component: ImageCentralComponent;
  let fixture: ComponentFixture<ImageCentralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageCentralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageCentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
