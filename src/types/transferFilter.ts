export interface FilterState {
  [key: string]: boolean
}

export enum TransferFilterActionTypes {
  CHECK_ONE_FILTER = 'CHECK_ONE_FILTER',
  CHECK_ALL_FILTER = 'CHECK_ALL_FILTER',
}

interface CheckOneFilter {
  type: TransferFilterActionTypes.CHECK_ONE_FILTER
  payload: string
}

interface CheckAllFilter {
  type: TransferFilterActionTypes.CHECK_ALL_FILTER
  payload: string
}

export type TransferFilterAction = CheckOneFilter | CheckAllFilter
