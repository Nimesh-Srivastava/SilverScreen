import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type CategoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MovieMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SeasonMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EpisodeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Category {
  readonly id: string;
  readonly title: string;
  readonly movies?: (Movie | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Category, CategoryMetaData>);
  static copyOf(source: Category, mutator: (draft: MutableModel<Category, CategoryMetaData>) => MutableModel<Category, CategoryMetaData> | void): Category;
}

export declare class Movie {
  readonly id: string;
  readonly title: string;
  readonly year?: number | null;
  readonly numberOfSeasons?: number | null;
  readonly poster: string;
  readonly plot?: string | null;
  readonly cast?: string | null;
  readonly creator?: string | null;
  readonly categoryID: string;
  readonly seasons?: (Season | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Movie, MovieMetaData>);
  static copyOf(source: Movie, mutator: (draft: MutableModel<Movie, MovieMetaData>) => MutableModel<Movie, MovieMetaData> | void): Movie;
}

export declare class Season {
  readonly id: string;
  readonly name: string;
  readonly movie?: Movie | null;
  readonly episodes?: (Episode | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Season, SeasonMetaData>);
  static copyOf(source: Season, mutator: (draft: MutableModel<Season, SeasonMetaData>) => MutableModel<Season, SeasonMetaData> | void): Season;
}

export declare class Episode {
  readonly id: string;
  readonly title: string;
  readonly poster: string;
  readonly duration: string;
  readonly plot?: string | null;
  readonly video: string;
  readonly season?: Season | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Episode, EpisodeMetaData>);
  static copyOf(source: Episode, mutator: (draft: MutableModel<Episode, EpisodeMetaData>) => MutableModel<Episode, EpisodeMetaData> | void): Episode;
}