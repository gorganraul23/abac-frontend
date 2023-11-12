export enum PlanetStatus {
  OK = 'OK',
  NOT_OK = '!OK',
  TODO = 'TODO',
  EN_ROUTE = 'EN_ROUTE'
}


export interface Planet {
  id: string,
  name: string,
  description: string,
  status: PlanetStatus,
}
