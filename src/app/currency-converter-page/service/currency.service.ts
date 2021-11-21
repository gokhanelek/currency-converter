import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ConvertAmountRes, CurrenciesRes } from '../model/currency';


@Injectable({
    providedIn: 'root'
})
export class CurrencyService {
    protected url = environment.api_url;
    currencies: string = 'currencies';
    convert: string = 'convert'

    constructor(private http: HttpClient) { }

    createAuthorizationHeader(): HttpHeaders {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');

        return headers;
    }

    getCurrencies(): Observable<CurrenciesRes> {
        const fullPath = this.url + this.currencies + '?api_key=' + environment.api_key;
        const headers = this.createAuthorizationHeader();
        return this.http.get<CurrenciesRes>(fullPath, { headers: headers });
    }

    getConvertToAmount(fromCurrency: string, toCurrency: string, amount: number): Observable<ConvertAmountRes> {
        const fullPath = this.url + this.convert + `?from=${fromCurrency}&to=${toCurrency}&amount=${amount}&api_key=${environment.api_key}`;
        const headers = this.createAuthorizationHeader();
        return this.http.get<ConvertAmountRes>(fullPath, { headers: headers });
    }
}