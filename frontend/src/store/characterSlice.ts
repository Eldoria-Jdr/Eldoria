import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Character {
  id?: string
  name: string
  class: string
  race: string
  level: number
  experience: number
  health: number
  maxHealth: number
  mana: number
  maxMana: number
  stats: Stats
}

export interface Stats {
  strength: number
  dexterity: number
  constitution: number
  intelligence: number
  wisdom: number
  charisma: number
  armor: number
}

const initialStats: Stats = {
  strength: 10,
  dexterity: 10,
  constitution: 10,
  intelligence: 10,
  wisdom: 10,
  charisma: 10,
  armor: 0,
}

const initialState: Character = {
  name: '',
  class: '',
  race: '',
  level: 1,
  experience: 0,
  health: 100,
  maxHealth: 100,
  mana: 50,
  maxMana: 50,
  stats: initialStats,
}

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    updateCharacter: (state, action: PayloadAction<Partial<Character>>) => {
      return { ...state, ...action.payload }
    },
    updateStats: (state, action: PayloadAction<Partial<Stats>>) => {
      state.stats = { ...state.stats, ...action.payload }
    },
    resetCharacter: () => initialState,
    setCharacter: (state, action: PayloadAction<Character>) => {
      return action.payload
    },
  },
})

export const { updateCharacter, updateStats, resetCharacter, setCharacter } =
  characterSlice.actions
export default characterSlice.reducer
