export type TPokemonType =
  | "bug"
  | "dark"
  | "dragon"
  | "eletric"
  | "fairy"
  | "fighting"
  | "fire"
  | "flying"
  | "ghost"
  | "grass"
  | "ground"
  | "ice"
  | "normal"
  | "poison"
  | "psychic"
  | "rock"
  | "steel"
  | "water";

export interface IPokemonFetch {
  name: string;
  url: string;
}

export interface IPokemonAbilities {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface IPokemonForms {
  name: string;
  url: string;
}

export interface IPokemonGameIndices {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
}

export interface IPokemonHeldItemsVersionDetails {
  rarity: number;
  version: {
    name: string;
    url: string;
  };
}

export interface IPokemonHeldItems {
  item: {
    name: string;
    url: string;
  };
  version_details: IPokemonHeldItemsVersionDetails[];
}

export interface IPokemonMovesVersionGroupDetails {
  level_learned_at: number;
  move_learn_method: {
    name: string;
    url: string;
  };
  version_group: {
    name: string;
    url: string;
  };
}

export interface IPokemonMoves {
  move: {
    name: string;
    url: string;
  };
  version_group_details: IPokemonMovesVersionGroupDetails[];
}

export interface IPokemonStats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface IPokemonTypes {
  slot: number;
  type: {
    name: TPokemonType;
    url: string;
  };
}

export interface PokemonTypes {
  slot: number
  type: IPokemonFetch
}

export interface IPokemon {
  abilities: IPokemonAbilities[];
  base_experience: number;
  forms: IPokemonForms[];
  game_indices: IPokemonGameIndices[];
  height: number;
  held_items: IPokemonHeldItems[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: IPokemonMoves[];
  name: string;
  order: number;
  past_types: any[];
  species: {
    name: string;
    url: string;
  };
  sprites: {
    back_default?: string;
    back_female?: string;
    back_shiny?: string;
    back_shiny_female?: string;
    front_default?: string;
    front_female?: string;
    front_shiny?: string;
    front_shiny_female?: string;
    other?: {
      dream_world?: {
        front_default?: string;
        front_female?: string;
      };
      home?: {
        front_default?: string;
        front_female?: string;
        front_shiny?: string;
        front_shiny_female?: string;
      };
      "official-artwork"?: {
        front_default?: string;
      };
    };
    versions?: {
      "generation-i"?: {
        "red-blue"?: {
          back_default?: string;
          back_gray?: string;
          back_transparent?: string;
          front_default?: string;
          front_gray?: string;
          front_transparent?: string;
        };
        yellow?: {
          back_default?: string;
          back_gray?: string;
          back_transparent?: string;
          front_default?: string;
          front_gray?: string;
          front_transparent?: string;
        };
      };
      "generation-ii"?: {
        crystal?: {
          back_default?: string;
          back_shiny?: string;
          back_shiny_transparent?: string;
          back_transparent?: string;
          front_default?: string;
          front_shiny?: string;
          front_shiny_transparent?: string;
          front_transparent?: string;
        };
        gold?: {
          back_default?: string;
          back_shiny?: string;
          front_default?: string;
          front_shiny?: string;
          front_transparent?: string;
        };
        silver?: {
          back_default?: string;
          back_shiny?: string;
          front_default?: string;
          front_shiny?: string;
          front_transparent?: string;
        };
      };
      "generation-iii"?: {
        emerald?: {
          front_default?: string;
          front_shiny?: string;
        };
        "firered-leafgreen"?: {
          back_default?: string;
          back_shiny?: string;
          front_default?: string;
          front_shiny?: string;
        };
        "ruby-sapphire"?: {
          back_default?: string;
          back_shiny?: string;
          front_default?: string;
          front_shiny?: string;
        };
      };
      "generation-iv"?: {
        "diamond-pearl"?: {
          back_default?: string;
          back_female?: string;
          back_shiny?: string;
          back_shiny_female?: string;
          front_default?: string;
          front_female?: string;
          front_shiny?: string;
          front_shiny_female?: string;
        };
        "heartgold-soulsilver"?: {
          back_default?: string;
          back_female?: string;
          back_shiny?: string;
          back_shiny_female?: string;
          front_default?: string;
          front_female?: string;
          front_shiny?: string;
          front_shiny_female?: string;
        };
        platinum?: {
          back_default?: string;
          back_female?: string;
          back_shiny?: string;
          back_shiny_female?: string;
          front_default?: string;
          front_female?: string;
          front_shiny?: string;
          front_shiny_female?: string;
        };
      };
      "generation-v"?: {
        "black-white"?: {
          animated?: {
            back_default?: string;
            back_female?: string;
            back_shiny?: string;
            back_shiny_female?: string;
            front_default?: string;
            front_female?: string;
            front_shiny?: string;
            front_shiny_female?: string;
          };
          back_default?: string;
          back_female?: string;
          back_shiny?: string;
          back_shiny_female?: string;
          front_default?: string;
          front_female?: string;
          front_shiny?: string;
          front_shiny_female?: string;
        };
      };
      "generation-vi"?: {
        "omegaruby-alphasapphire"?: {
          front_default?: string;
          front_female?: string;
          front_shiny?: string;
          front_shiny_female?: string;
        };
        "x-y"?: {
          front_default?: string;
          front_female?: string;
          front_shiny?: string;
          front_shiny_female?: string;
        };
      };
      "generation-vii"?: {
        icons?: {
          front_default?: string;
          front_female?: string;
        };
        "ultra-sun-ultra-moon"?: {
          front_default?: string;
          front_female?: string;
          front_shiny?: string;
          front_shiny_female?: string;
        };
      };
      "generation-viii"?: {
        icons?: {
          front_default?: string;
          front_female?: string;
        };
      };
    };
  };
  stats: IPokemonStats[];
  types: IPokemonTypes[];
  weight: number;
}

export interface ISignIn{
  email: string;
  password: string;
}

interface PokemonAbilities {
  ability: IPokemonFetch
  is_hidden: boolean
}
export interface PokemonTypes {
  slot: number
  type: IPokemonFetch
}

interface PokemonStats {
  base_stat: number
  effort: number
  stat: IPokemonFetch
}


export interface PokemonDataInterface {
  abilities: PokemonAbilities[]
  base_experience: number
  height: number
  id: number
  name: string
  species: IPokemonFetch
  types: string[]
  weight: number
  stats: PokemonStats[]
  sprite: string
}

interface FlavorTextEntry {
  flavor_text: string
  language: { name: string; url: string }
}

interface Genera {
  genus: string
  language: {
    name: string
    url: string
  }
}

 
export interface PokemonData {
  id: number;
  name: string;
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  height: number;
  weight: number;
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
  base_experience: number;
  species: {
    name: string;
    url: string;
    genera: {
      genus: string;
      language: {
        name: string;
        url: string;
      };
    }[];
    flavor_text_entries: {
      flavor_text: string;
      language: {
        name: string;
        url: string;
      };
      version: {
        name: string;
        url: string;
      };
    }[];
  };
  forms: {
    name: string;
    url: string;
  }[];
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
} 
