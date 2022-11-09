import { PriceFilterAction, PriceFilterActionTypes, PriceFilterState, PriceFilterTitle } from '../../types/priceFilter'

const initialState: PriceFilterState = {
  [PriceFilterTitle.mostQuick]: false,
  [PriceFilterTitle.mostCheap]: false,
  [PriceFilterTitle.optimal]: false,
}

const checkCurrent = (checkedItem: string, obj: PriceFilterState): PriceFilterState => {
  const a = { ...obj }
  for (const key in a) {
    if (key === checkedItem) {
      a[checkedItem] = true
    } else {
      a[key] = false
    }
  }
  return a
}

export const setPriceFilter = (state: PriceFilterState = initialState, action: PriceFilterAction): PriceFilterState => {
  switch (action.type) {
    case PriceFilterActionTypes.MOST_CHEAP:
      return checkCurrent(action.payload, state)
    case PriceFilterActionTypes.MOST_QUICK:
      return checkCurrent(action.payload, state)
    case PriceFilterActionTypes.OPTIMAL:
      return checkCurrent(action.payload, state)
    default:
      return { ...state }
  }
}
