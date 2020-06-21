import { DigimonRef } from '../digimon/interface'

export interface Ability {
  id: string
  name: string
  description: string
}

export interface AbilityInfo extends Ability {
  digimon: Record<string, DigimonRef>
}
