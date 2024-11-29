import { Pokemon } from '../types/pokemon'
import { usePokemonList } from '../hooks/usePokemon'
import { queryClient, pokemonDetailQuery, PER_PAGE } from '../queries/pokemon'
import { useState } from 'react'

interface PokemonListProps {
  setSelectedPokemon: (pokemon: Pokemon) => void
}

export function PokemonList({ setSelectedPokemon }: PokemonListProps) {
  const [page, setPage] = useState(1)
  const { data, isLoading, isError, isPlaceholderData } = usePokemonList(page)

  if (isLoading) return <div className='text-gray-300'>Loading...</div>
  if (isError) return <div className='text-red-400'>Error</div>
  if (!data) return <div className='text-gray-300'>No data</div>

  return (
    <div className='flex-shrink-0'>
      <div className='bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700 shadow-[0_0_15px_rgba(255,255,255,0.07)] p-4 w-64'>
        <h1 className='text-4xl font-bold mb-6 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg text-center'>
          Pokédex
        </h1>

        <ul className='space-y-2 h-[calc(100vh-16rem)] overflow-y-auto custom-scrollbar'>
          {data.results.map((poke: Pokemon) => (
            <li
              key={poke.name}
              onClick={() => setSelectedPokemon(poke)}
              onMouseEnter={() =>
                queryClient.prefetchQuery(pokemonDetailQuery(poke.name))
              }
              className={`p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 
                          transition-colors duration-200 cursor-pointer
                          border border-gray-700/50 hover:border-gray-600
                          text-gray-300 hover:text-white
                          flex items-center gap-2 ${
                            isPlaceholderData ? 'opacity-50' : ''
                          }`}
            >
              <div
                className='w-6 h-6 flex items-center justify-center 
                            rounded-full bg-gray-700 text-xs text-gray-300'
              >
                {data.results.indexOf(poke) + 1 + (page - 1) * PER_PAGE}
              </div>
              <span className='font-medium'>
                {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
              </span>
            </li>
          ))}
        </ul>
        <div className='flex justify-center mt-4 gap-4'>
          <button
            onClick={() => setPage((prev) => prev - 1)}
            disabled={page === 1}
            className='bg-gray-700/50 hover:bg-gray-600/50 text-white px-4 py-2 rounded-md'
          >
            Previous
          </button>
          <button
            onClick={() => setPage((prev) => prev + 1)}
            className='bg-gray-700/50 hover:bg-gray-600/50 text-white px-4 py-2 rounded-md'
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
