import { Pokemon } from '../types/pokemon'
import { usePokemonDetail } from '../hooks/usePokemon'

interface PokemonDetailProps {
  pokemon: Pokemon
}

export function PokemonDetail({ pokemon }: PokemonDetailProps) {
  const { data, isLoading, isError } = usePokemonDetail(pokemon.name)

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error</div>
  if (!data) return <div>No data</div>

  return (
    <div className='flex-1'>
      <div className='bg-gray-900/50 backdrop-blur-sm rounded-xl shadow-lg p-6 w-full border border-gray-700 shadow-[0_0_15px_rgba(255,255,255,0.07)]'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold mb-2 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg'>
            {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
          </h2>

          <div className='relative'>
            <div className='absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50 rounded-full'></div>
            <img
              src={
                data.sprites.other['official-artwork'].front_default ||
                data.sprites.front_default
              }
              alt={data.name}
              className='w-48 h-48 mx-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]'
            />
          </div>

          <div className='mt-4 flex gap-2 justify-center'>
            {data.types.map((type) => (
              <span
                key={type.type.name}
                className='px-3 py-1 rounded-full text-sm font-semibold bg-gray-700 text-gray-100 shadow-inner'
              >
                {type.type.name}
              </span>
            ))}
          </div>

          <div className='mt-6 space-y-2'>
            {data.stats.map((stat) => (
              <div key={stat.stat.name} className='flex items-center'>
                <span className='w-32 text-left text-gray-300 text-sm'>
                  {stat.stat.name.replace('-', ' ')}:
                </span>
                <div className='flex-1 h-2 bg-gray-700/50 rounded-full'>
                  <div
                    className='h-2 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full shadow-[0_0_5px_rgba(59,130,246,0.5)]'
                    style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                  ></div>
                </div>
                <span className='w-12 text-right text-gray-300 text-sm'>
                  {stat.base_stat}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
