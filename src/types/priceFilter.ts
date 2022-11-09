export interface PriceFilterState {
  [key: string]: boolean
}

export enum PriceFilterActionTypes {
  MOST_CHEAP = 'MOST_CHEAP',
  MOST_QUICK = 'MOST_QUICK',
  OPTIMAL = 'OPTIMAL',
}

export enum PriceFilterTitle {
  mostCheap = 'самый дешевый',
  mostQuick = 'самый быстрый',
  optimal = 'оптимальный',
}

interface MostCheapAction {
  type: PriceFilterActionTypes.MOST_CHEAP
  payload: string
}

interface MostQuickAction {
  type: PriceFilterActionTypes.MOST_QUICK
  payload: string
}

interface OptimalAction {
  type: PriceFilterActionTypes.OPTIMAL
  payload: string
}

export type PriceFilterAction = MostCheapAction | MostQuickAction | OptimalAction
