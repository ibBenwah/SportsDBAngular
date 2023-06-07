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
  
  interface TeamData {
    leagueRecord: LeagueRecord;
    score: number;
    team: Team;
  }
  
  interface Status {
    abstractGameState: string;
    codedGameState: string;
    detailedState: string;
    statusCode: string;
    startTimeTBD: boolean;
  }
  
  interface Venue {
    name: string;
    link: string;
  }
  
  interface Game {
    gamePk: number;
    link: string;
    gameType: string;
    season: string;
    gameDate: string;
    status: Status;
    teams: {
      away: TeamData;
      home: TeamData;
    };
    venue: Venue;
    content: {
      link: string;
    };
  }
  
  interface DateData {
    date: string;
    totalItems: number;
    totalEvents: number;
    totalGames: number;
    totalMatches: number;
    games: Game[];
    events: any[]; // Assuming it's an array of any type
    matches: any[]; // Assuming it's an array of any type
  }
  
  interface NHLData {
    copyright: string;
    totalItems: number;
    totalEvents: number;
    totalGames: number;
    totalMatches: number;
    wait: number;
    dates: DateData[];
  }