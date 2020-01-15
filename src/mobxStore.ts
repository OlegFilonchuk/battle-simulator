import { observable } from 'mobx';
import { StoreState } from './utils/types';

const store: StoreState = observable.object({
  armies: [],
});

export default store;
