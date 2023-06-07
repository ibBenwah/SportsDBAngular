interface LeagueRecord {
    wins: number;
    losses: number;
    ot: number;
    type: string;
  }
  
  interface Team {
    id: number;
    name: string;
    link: string;
  }
  
  interface Streak {
    streakType: string;
    streakNumber: number;
    streakCode: string;
  }
  
  interface TeamData {
    team: Team;
    leagueRecord: LeagueRecord;
    goalsAgainst: number;
    goalsScored: number;
    points: number;
    divisionRank: string;
    conferenceRank: string;
    leagueRank: string;
    wildCardRank: string;
    row: number;
    gamesPlayed: number;
    streak: Streak;
  }
  