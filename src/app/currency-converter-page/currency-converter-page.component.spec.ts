import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyConverterPageComponent } from './currency-converter-page.component';

describe('CurrencyConverterPageComponent', () => {
  let component: CurrencyConverterPageComponent;
  let fixture: ComponentFixture<CurrencyConverterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyConverterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyConverterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
