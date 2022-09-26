import { Owner } from './Owner'
export interface Farm {
  id: number;
  name: string
  geometry: any
  area: number
  centroid: number[]
  creation_date?: Date
  owner: Owner
}
