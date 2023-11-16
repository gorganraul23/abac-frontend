export enum PlanetStatus {
  TODO = 0,
  EN_ROUTE = 1,
  OK = 2,
  NOT_OK = 3
}

export interface PlanetToAdd {
  id: string,
  name: string,
  description: string,
  status: PlanetStatus,
  imagePath: string
}

export interface Planet {
  id: string,
  name: string,
  description: string,
  status: PlanetStatus,
  imagePath: string,
  robots: string[],
  captain: string
}

