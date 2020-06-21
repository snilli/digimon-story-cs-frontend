import { Ability } from '../ability/interface'
import { Move } from '../move/interface'

export interface Stat {
  id: string
  no: number
  name: string
  stage: string
  type: string
  attribute: string
  memory: number
  equipSlot: number
  hp: number
  sp: number
  atk: number
  def: number
  int: number
  spd: number
  icon: string
}

export interface StatInfo extends Stat {
  img: string
  icon: string
  ability: Ability
  evoFrom: Record<string, EvoFrom>
  evoTo: Record<string, RequireStat>
  move: Record<string, MoveReq>
  stat: Record<string, StatLevel>
}

export interface RequireStat {
  id: string
  name: string
  icon: string
  level: number
  hp?: number
  sp?: number
  atk?: number
  def?: number
  int?: number
  spd?: number
  cam?: number
  jogress?: Record<string, EvoFrom>
}

export interface EvoFrom {
  id: string
  name: string
  icon: string
}

export type Jogress = EvoFrom
export interface DigimonRef {
  id: string
  name: string
  icon: string
}

export interface MoveReq extends Move {
  level: number
}

export interface StatLevel {
  hp: number
  sp: number
  atk: number
  def: number
  int: number
  spd: number
}
