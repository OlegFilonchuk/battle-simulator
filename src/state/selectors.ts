import { StoreState } from '../utils/types';

type Selector = (store: StoreState) => any;

export const armiesSelector: Selector = ({ armies }) => armies;
export const armiesCounterSelector: Selector = ({ armies }) => ({
  armiesCount: armies.length,
});
