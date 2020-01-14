import { StoreState } from '../utils/types';

type Selector = (store: StoreState) => any;

const armiesSelector: Selector = ({ armies }) => armies;
export default armiesSelector;
