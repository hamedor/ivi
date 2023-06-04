import { makeAutoObservable, runInAction } from 'mobx';
import { enableStaticRendering } from 'mobx-react-lite';
import { useMemo } from 'react';
import { Movies } from '@/components/interfaces/movie';
import { toJS } from 'mobx';

interface Filter {
    name: string;
    id: string;
    nameRu: string;
  }

const isServer = typeof window === 'undefined';
enableStaticRendering(isServer);



class SSRStore {
    rootStore
    movies: Movies = {count: 0 , rows: []};

    drama: Movies = { count: 0, rows: [] };
    comedy: Movies = { count: 0, rows: [] };

    sortTypes:Filter[] =[];


    genres: Filter[] = [];
    countries: Filter[] = [];
    
    movie:any=[];
    similar:any=[];
    comments:any=[];
    persons:any=[];
    person:any=[];

    selectedFilters:any = {
      genres: [],
      countries: [],
      actors:[],
      directors:[],
      minRating:[],
      numRatings:[],
      order:[],
      page:[]
    };

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  setSimilar(similar) {
    this.similar = [...similar];
  }
  setComments(comments) {
    this.comments = [...comments];
   
  }
  setPersons(persons) {
    this.persons = [...persons];
  }
  setMovie(movie) {
    this.movie = movie;
  }


  setGenres(genres) {
    runInAction(() => {
    this.genres = [...genres];
});
  }
  setCountries(countries) {
    runInAction(() => {
    this.countries = [...countries];
});
  }

  setMovies(newData, propertyName, pagination = false) {

    runInAction(() => {
        if(pagination){
            this[propertyName].count = newData.count;
            this[propertyName].rows = [...this[propertyName].rows, ...newData.rows];
        }else{
            this[propertyName] = newData;
        }

    });
  }

  hydrate(data) {
    if (!data) return;


 
    Object.keys(data).forEach(key => {
      this[key] = toJS(data[key]);
    });


  }
}

interface InitialData {
  movie: any;
  similar: any;
  comments: any;
  persons: any;
}

let store;
export function initializeStore(initialData:any = null, rootStore) {

  //const _store = store ?? /* new SSRStore(rootStore); */ rootStore.ssrStore

 // console.log('initialData', initialData.genres)

  const _store = rootStore.ssrStore;

  if (initialData) {
    _store.hydrate(initialData);
  }
  if (isServer) return _store;
  if (!store) store = _store;

  return _store;
}

export function useStore(initialState = null, rootStore) {
    const store = useMemo(() => initializeStore(initialState, rootStore), [initialState, rootStore]);
  return store;
}

export {SSRStore}
