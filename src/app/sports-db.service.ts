import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SportsDbService {
  [x: string]: any;
  backEndBaseUrl: string = 'https://localhost:7089/swagger/index.html'
  
  constructor(private httpClient: HttpClientModule) { }

  
}
