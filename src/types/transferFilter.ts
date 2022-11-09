export interface FilterState {
  [key: string]: boolean
}

export enum TransferFilterActionTypes {
  CHECK_FILTER = 'CHECK_FILTER',
  CHECK_ALL_FILTER = 'CHECK_ALL_FILTER',
}

interface CheckFilter {
  type: TransferFilterActionTypes.CHECK_FILTER
  payload: string
}

interface CheckAllFilter {
  type: TransferFilterActionTypes.CHECK_ALL_FILTER
  payload: string
}

export type TransferFilterAction = CheckFilter | CheckAllFilter
