interface TimeZone {
    id: string;
    offset: number;
    tz: string;
  }
  
  interface Venue {
    name: string;
    link: string;
    city: string;
    timeZone: TimeZone;
  }
  
  interface Division {
    id: number;
    name: string;
    link: string;
  }
  
  interface Conference {
    id: number;
    name: string;
    link: string;
  }
  
  interface Franchise {
    franchiseId: number;
    teamName: string;
    link: string;
  }
  
  interface Team {
    id: number;
    name: string;
    link: string;
    venue: Venue;
    abbreviation: string;
    teamName: string;
    locationName: string;
    firstYearOfPlay: string;
    division: Division;
    conference: Conference;
    franchise: Franchise;
    shortName: string;
    officialSiteUrl: string;
    franchiseId: number;
    active: boolean;
  }
  
  interface NHLData {
    copyright: string;
    teams: Team[];
  }