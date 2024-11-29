import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { Pokemon, PokemonDetails } from '../types/pokemon'
import {
  queryClient,
  pokemonListQuery,
  pokemonDetailQuery,
} from '../queries/pokemon'

export function usePokemonList(page: number) {
  useEffect(() => {
    queryClient.prefetchQuery(pokemonListQuery(page + 1))
  }, [page])

  return useQuery<{ results: Pokemon[] }>(pokemonListQuery(page))
}

export function usePokemonDetail(name: string) {
  return useQuery<PokemonDetails>(pokemonDetailQuery(name))
}
