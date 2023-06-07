interface Conference {
    id: number;
    name: string;
    link: string;
  }
  
  interface Division {
    id: number;
    name: string;
    link: string;
    abbreviation: string;
    conference: Conference;
    active: boolean;
  }
  
  interface NHLData {
    copyright: string;
    divisions: Division[];
  }