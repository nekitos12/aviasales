import { Dispatch } from 'redux'

import { TransferFilterAction, TransferFilterActionTypes } from '../../types/transferFilter'

export const setTransferFilter = (type: TransferFilterActionTypes, payload: string) => {
  return (dispatch: Dispatch<TransferFilterAction>) => {
    dispatch({ type, payload })
  }
}
