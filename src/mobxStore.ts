import { observable } from 'mobx';
import { StoreState } from './utils/types';
import Battle from './classes/Battle';

const battle: Battle = new Battle();
const store: StoreState = observable.object({
  battle,
});

export default store;
