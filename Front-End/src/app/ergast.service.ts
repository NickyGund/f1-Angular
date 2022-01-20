import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErgastService {
  constructor(private http: HttpClient){
  }
        getDriverList(year: number): Observable<any>{
            return this.http.get('http://ergast.com/api/f1/'+ year.toString()+ '/drivers.json');
        }

        getYearStandings(year: string): Observable<any>{
            return this.http.get('https://ergast.com/api/f1/'+ year+'/driverStandings.json')
        }
  
}
