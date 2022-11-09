export interface TicketsState {
  tickets: Array<TicketType> | null
  errorCount: number
  stop?: boolean
}

export interface TicketType {
  price: number
  carrier: string
  segments: [
    {
      origin: string
      destination: string
      date: string
      stops: string[]
      duration: number
    },
    {
      origin: string
      destination: string
      date: string
      stops: string[]
      duration: number
    }
  ]
}

export enum TicketActionTypes {
  FETCH_TICKETS_SUCCESS = 'FETCH_TICKETS_SUCCESS',
  FETCH_TICKETS_ERROR = 'FETCH_TICKETS_ERROR',
  SEARCH_ID = 'SEARCH_ID',
}
interface SearchIdAction {
  type: TicketActionTypes.SEARCH_ID
  payload: string
}

interface FetchTicketsSuccessAction {
  type: TicketActionTypes.FETCH_TICKETS_SUCCESS
  payload: string
}

interface FetchTicketsErrorAction {
  type: TicketActionTypes.FETCH_TICKETS_ERROR
  payload: string
}

export type TicketsAction = FetchTicketsSuccessAction | FetchTicketsErrorAction | SearchIdAction
