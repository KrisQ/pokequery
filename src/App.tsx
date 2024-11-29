import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react'
import { queryClient } from './queries/pokemon'
import { PokemonList } from './components/PokemonList'
import { PokemonDetail } from './components/PokemonDetail'
import { Pokemon } from './types/pokemon'

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null)

  return (
    <QueryClientProvider client={queryClient}>
      <div className='min-h-screen bg-gray-950'>
        <div className='container mx-auto p-8 flex gap-8'>
          <PokemonList setSelectedPokemon={setSelectedPokemon} />
          {selectedPokemon && <PokemonDetail pokemon={selectedPokemon} />}
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
