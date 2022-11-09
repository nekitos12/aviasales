import { Dispatch } from 'redux'

import { TicketActionTypes, TicketsAction } from '../../types/tickets'

export const getTickets = (id: string) => {
  return async function (dispatch: Dispatch<TicketsAction>) {
    try {
      const response = await fetch(`https://front-test.dev.aviasales.ru/tickets?searchId=${id}`)
      const res = await response.json()
      dispatch({ type: TicketActionTypes.FETCH_TICKETS_SUCCESS, payload: res.tickets })
    } catch (e) {
      dispatch({
        type: TicketActionTypes.FETCH_TICKETS_ERROR,
        payload: 'Произошла ошибка при загрузке',
      })
    }
  }
}
