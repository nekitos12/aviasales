import { TicketActionTypes, TicketsAction, TicketsState } from '../../types/tickets'

const initialState = {
  tickets: null,
  errorCount: 0,
}

export const getTickets = (state: TicketsState = initialState, action: TicketsAction) => {
  switch (action.type) {
    case TicketActionTypes.SEARCH_ID:
      return { ...state, searchId: action.payload }
    case TicketActionTypes.FETCH_TICKETS_ERROR:
      return { ...state, errorCount: ++state.errorCount }
    case TicketActionTypes.FETCH_TICKETS_SUCCESS:
      return { ...state, tickets: [...(state.tickets || []), ...action.payload] }
    default:
      return { ...state }
  }
}
