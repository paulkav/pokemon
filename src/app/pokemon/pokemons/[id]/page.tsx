'use client';

import { Pokemon } from '@/types/pokemon';
import { getPokemonById } from '@/services/pokemonService';

async function getPokemon(id: string) {
  try {
    const pokemon = await getPokemonById(id);
    if (!pokemon) {
      throw new Error('Pokemon not found');
    }
    return pokemon;
  } catch (error) {
    throw new Error('Failed to fetch pokemon');
  }
}

export default async function PokemonDetails({
  params,
}: {
  params: { id: string };
}) {
  const pokemon = await getPokemon(params.id);

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center items-center">
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              className="w-64 h-64 object-contain"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold capitalize mb-4">{pokemon.name}</h1>
            <div className="flex gap-2 mb-4">
              {pokemon.types.map((type) => (
                <span
                  key={type.type.name}
                  className="px-4 py-1 rounded-full text-sm bg-gray-200 text-gray-700"
                >
                  {type.type.name}
                </span>
              ))}
            </div>
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-semibold mb-2">Stats</h2>
                <div className="space-y-2">
                  {pokemon.stats.map((stat) => (
                    <div key={stat.stat.name} className="flex items-center">
                      <span className="w-32 capitalize">{stat.stat.name}:</span>
                      <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-500"
                          style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                        />
                      </div>
                      <span className="ml-2 w-12">{stat.base_stat}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Abilities</h2>
                <div className="flex flex-wrap gap-2">
                  {pokemon.abilities.map((ability) => (
                    <span
                      key={ability.ability.name}
                      className="px-3 py-1 bg-gray-100 rounded-full capitalize"
                    >
                      {ability.ability.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
