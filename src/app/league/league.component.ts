import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent {

  leagues: any[] |undefined;

  constructor(private http: HttpClient) {}

  getLeague(){
    this.http.get<any[]>('http://api.example.com/leagues').subscribe(
      (response) => {
        this.leagues = response;
      },
      (error) => {
        console.error('Error occured while fetching players: ', error);
      }
    );
  }
}
