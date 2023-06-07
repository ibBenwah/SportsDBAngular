interface Conference {
    id: number;
    name: string;
    link: string;
    abbreviation: string;
    shortName: string;
    active: boolean;
  }
  
  interface NHLData {
    copyright: string;
    conferences: Conference[];
  }