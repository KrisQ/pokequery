import { QueryClient } from '@tanstack/react-query'
import { Pokemon, PokemonDetails } from '../types/pokemon'

export const PER_PAGE = 20

export const queryClient = new QueryClient()

export const pokemonListQuery = (page: number) => ({
  queryKey: ['pokemon', page],
  queryFn: () =>
    new Promise<{ results: Pokemon[] }>((resolve) =>
      setTimeout(() => {
        fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=${PER_PAGE}&offset=${
            (page - 1) * PER_PAGE
          }`
        )
          .then((res) => res.json())
          .then(resolve)
      }, 2000)
    ),
  staleTime: Infinity,
  placeholderData: (previousData: { results: Pokemon[] } | undefined) =>
    previousData,
})

export const pokemonDetailQuery = (name: string) => ({
  queryKey: ['pokemon', name],
  queryFn: () =>
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) =>
      res.json()
    ),
  staleTime: 1000 * 10,
  placeholderData: queryClient.getQueryData<PokemonDetails>(['pokemon', name]),
})
