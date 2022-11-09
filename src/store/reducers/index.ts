import { combineReducers } from 'redux'

import { getTickets } from './getTickets'
import { setTransferFilter } from './transferFilter'
import { setPriceFilter } from './priceFilter'

export const rootReducer = combineReducers({
  ticketsData: getTickets,
  transferFilter: setTransferFilter,
  priceFilter: setPriceFilter,
})

export type RootState = ReturnType<typeof rootReducer>
