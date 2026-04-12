export interface Country {
  name: {
    common: string;
    official: string;
  };
  cca3: string;
  flags: {
    svg: string;
  };
  capital?: string[];
  region: string;
  subregion?: string;
  population: number;
  languages?: { [key: string]: string };
  coatOfArms?: { svg?: string };
  maps?: { googleMaps: string };
}