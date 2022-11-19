import { FilterState, TransferFilterAction, TransferFilterActionTypes } from '../../types/transferFilter'

const initialState: FilterState = {
  '0': true,
  '1': true,
  '2': true,
  '3': true,
  all: true,
}
const allFiltersBool = (bool: boolean, obj: FilterState): FilterState => {
  const a: FilterState = { ...obj }
  for (const key in a) {
    a[key] = bool
  }
  return a
}

const isEveryTrue = (obj: FilterState, b: string) => {
  for (const key in obj) {
    if (((b === key && obj[b]) || (b !== key && !obj[key])) && key !== 'all') return false
  }
  return true
}

export const setTransferFilter = (state: FilterState = initialState, action: TransferFilterAction) => {
  switch (action.type) {
    case TransferFilterActionTypes.CHECK_ONE_FILTER:
      return {
        ...state,
        [action.payload]: !state[action.payload],
        all: isEveryTrue(state, action.payload),
      }
    case TransferFilterActionTypes.CHECK_ALL_FILTER:
      return allFiltersBool(!state.all, state)
    default:
      return { ...state }
  }
}
