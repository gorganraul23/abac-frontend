export enum ExplorerType {
  Captain = '0',
  Robot = '1',
}

export interface Explorer {
  id: string,
  name: string,
  type: ExplorerType
}
