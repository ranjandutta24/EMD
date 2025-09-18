import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compressor5Component } from './compressor5.component';

describe('Compressor5Component', () => {
  let component: Compressor5Component;
  let fixture: ComponentFixture<Compressor5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Compressor5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Compressor5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
