interface Stat {
    assists: number;
    goals: number;
    pim: number;
    shots: number;
    games: number;
    powerPlayGoals: number;
    powerPlayPoints: number;
    penaltyMinutes: string;
    shotPct: number;
    gameWinningGoals: number;
    overTimeGoals: number;
    shortHandedGoals: number;
    shortHandedPoints: number;
    plusMinus: number;
    points: number;
    timeOnIce?: string;
    hits?: number;
    powerPlayTimeOnIce?: string;
    evenTimeOnIce?: string;
    faceOffPct?: number;
    shortHandedTimeOnIce?: string;
    blocked?: number;
    shifts?: number;
    timeOnIcePerGame?: string;
    evenTimeOnIcePerGame?: string;
    shortHandedTimeOnIcePerGame?: string;
    powerPlayTimeOnIcePerGame?: string;
  }
  
  interface Split {
    season: string;
    stat: Stat;
    isHome?: boolean;
  }
  
  interface StatData {
    type: {
      displayName: string;
    };
    splits: Split[];
  }
  