import { StoreType } from './store';

export type PageComponentType = (store: StoreType) => Promise<HTMLElement>;
