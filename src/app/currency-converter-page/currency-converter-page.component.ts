import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators/'
import { CurrencyService } from './service/currency.service';
import { CurrenciesRes } from '../currency-converter-page/model/currency';

export interface historyObject {
  [key: number]: number;
}

@Component({
  selector: 'app-currency-converter-page',
  templateUrl: './currency-converter-page.component.html',
  styleUrls: ['./currency-converter-page.component.scss']
})
export class CurrencyConverterPageComponent implements OnInit {
  symbols$ = new Observable<CurrenciesRes>();
  currencySymbols: CurrenciesRes;
  currencies: string[];
  result: {};
  histories: {}[] = [];
  isStatusSymbol: boolean = false;
  fromCurrency: string = 'USD';
  toCurrency: string = 'TRY';
  amount: number = 1;

  constructor(private currencyService: CurrencyService) {
    this.symbols$ = this.currencyService.getCurrencies().pipe(map(res => {
      this.currencySymbols = res;
      this.currencies = Object.keys(this.currencySymbols.currencies)
      this.isStatusSymbol = true;
      return this.currencySymbols;
    }));
  }

  ngOnInit(): void { }

  enterAmount() {
    this.changeCurrency();
  }

  changeCurrencies() {
    let _currency: string = this.toCurrency;
    this.toCurrency = this.fromCurrency;
    this.fromCurrency = _currency;
    this.changeCurrency();
  }

  changeCurrency() {
    this.currencyService.getConvertToAmount(this.fromCurrency, this.toCurrency, this.amount).subscribe((res) => {
      this.result = res.result;
      this.histories = [...this.histories, this.result].reverse();
    });
  }
}
