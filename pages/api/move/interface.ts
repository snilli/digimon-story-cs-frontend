import { DigimonRef } from '../digimon/interface'

export interface Move {
  id: string
  name: string
  sp: number
  type: string
  power: number
  attribute: string
  inheritable: boolean
  description: string
}

export interface MoveInfo extends Move {
  digimon: Record<string, DigimonRef>
}
