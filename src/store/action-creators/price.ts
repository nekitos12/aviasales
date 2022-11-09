import { Dispatch } from 'redux'

import { PriceFilterAction, PriceFilterActionTypes } from '../../types/priceFilter'

export const setPriceFilter = (type: PriceFilterActionTypes, payload: string) => {
  return (dispatch: Dispatch<PriceFilterAction>) => {
    dispatch({ type, payload })
  }
}
