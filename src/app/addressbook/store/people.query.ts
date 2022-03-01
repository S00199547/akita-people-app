import { Injectable } from '@angular/core';
import { PeopleStore, PeopleState } from './people.store';
import { QueryEntity } from '@datorama/akita';
import { QueryConfig,Order } from '@datorama/akita';


@Injectable({
  providedIn: 'root'
})
@QueryConfig({
  sortBy:'lastname',
  sortByOrder:Order.ASC
})
export class PeopleQuery extends QueryEntity<PeopleState> {

  selectArePeopleLoaded$ = this.select(state => {
    console.log(state.arePeopleLoaded);
    return state.arePeopleLoaded;
  });

 


  constructor(protected override store: PeopleStore) {
    super(store);




  }
 

 
}


