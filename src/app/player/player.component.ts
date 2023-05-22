import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Player } from '../interfaces/league';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})

export class PlayerComponent {
  players: any[] | undefined;

  constructor(private http: HttpClient) { }

  getAllPlayers() {
    this.http.get<any[]>('https://api.example.com/players').subscribe(
      (response) => {
        this.players = response;
      },
      (error) => {
        console.error('Error occurred while fetching players:', error);
      }
    );
  }
}
