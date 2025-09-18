import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compressor1Component } from './compressor1.component';

describe('Compressor1Component', () => {
  let component: Compressor1Component;
  let fixture: ComponentFixture<Compressor1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Compressor1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Compressor1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
