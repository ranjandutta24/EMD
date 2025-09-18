import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compressor4Component } from './compressor4.component';

describe('Compressor4Component', () => {
  let component: Compressor4Component;
  let fixture: ComponentFixture<Compressor4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Compressor4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Compressor4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
