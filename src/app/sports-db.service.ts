import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { League } from './interfaces/league';

@Injectable({
  providedIn: 'root'
})
export class SportsDbService {
  [x: string]: any;
  backEndBaseUrl: string = 'https://localhost:7089/swagger/index.html'
  
  constructor(private httpClient: HttpClient) { }

  getAllLeagues =() => {
    return this.httpClient.get<League[]>(this.backEndBaseUrl + "/leagues");
  }

  getAllPlayers = () => {
    return this.httpClient.get<League[]>(this.backEndBaseUrl + "/players")
  }
  
}
