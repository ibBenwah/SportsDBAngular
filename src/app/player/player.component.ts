import { Component, OnInit } from '@angular/core';
import { PlayerAPIResponse } from '../API-Response/player-api-response';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  playerAPIResponse: PlayerAPIResponse = {
      "copyright": "NHL and the NHL Shield are registered trademarks of the National Hockey League. NHL and NHL team marks are the property of the NHL and its teams. © NHL 2018. All Rights Reserved.",
      "people": 
      [
        {
          "id": 8477474,
          "fullName": "Madison Bowey",
          "link": "/api/v1/people/8477474",
          "firstName": "Madison",
          "lastName": "Bowey",
          "primaryNumber": "22",
          "birthDate": "1995-04-22",
          "currentAge": 22,
          "birthCity": "Winnipeg",
          "birthStateProvince": "MB",
          "birthCountry": "CAN",
          "nationality": "CAN",
          "height": "6' 2\"",
          "weight": 198,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": true,
          "shootsCatches": "R",
          "rosterStatus": "Y",
          "currentTeam": 
          {
            "id": 15,
            "name": "Washington Capitals",
            "link": "/api/v1/teams/15"
          },
          
          "primaryPosition": 
          {
            "code": "D",
            "name": "Defenseman",
            "type": "Defenseman",
            "abbreviation": "D"
          }
        }
      ]
    }
    
      


  constructor() { }

  ngOnInit(): void {
  }
}
