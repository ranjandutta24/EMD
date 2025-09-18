import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compressor6Component } from './compressor6.component';

describe('Compressor6Component', () => {
  let component: Compressor6Component;
  let fixture: ComponentFixture<Compressor6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Compressor6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Compressor6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
