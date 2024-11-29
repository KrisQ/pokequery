export interface Pokemon {
  name: string
  url: string
}

export interface PokemonDetails {
  name: string
  sprites: {
    front_default: string
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
  types: Array<{
    type: {
      name: string
    }
  }>
  stats: Array<{
    base_stat: number
    stat: {
      name: string
    }
  }>
} 