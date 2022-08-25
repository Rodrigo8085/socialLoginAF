import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivadoPageComponent } from './privado-page.component';

describe('PrivadoPageComponent', () => {
  let component: PrivadoPageComponent;
  let fixture: ComponentFixture<PrivadoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivadoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivadoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
