import { Dispatch } from 'redux'

import { TicketActionTypes, TicketsAction } from '../../types/tickets'
import { useAsApi } from '../../hooks/useAsApi'

export const getTickets = (id: string) => {
  return async function (dispatch: Dispatch<TicketsAction>) {
    try {
      const { apiGetTickets } = useAsApi()
      const res = await apiGetTickets(id)
      console.log(res)
      dispatch({ type: TicketActionTypes.FETCH_TICKETS_SUCCESS, payload: res.tickets })
    } catch (e) {
      dispatch({
        type: TicketActionTypes.FETCH_TICKETS_ERROR,
        payload: 'Произошла ошибка при загрузке',
      })
    }
  }
}
