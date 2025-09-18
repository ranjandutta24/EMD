import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compressor2Component } from './compressor2.component';

describe('Compressor2Component', () => {
  let component: Compressor2Component;
  let fixture: ComponentFixture<Compressor2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Compressor2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Compressor2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
