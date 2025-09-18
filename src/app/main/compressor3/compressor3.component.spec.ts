import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compressor3Component } from './compressor3.component';

describe('Compressor3Component', () => {
  let component: Compressor3Component;
  let fixture: ComponentFixture<Compressor3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Compressor3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Compressor3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
