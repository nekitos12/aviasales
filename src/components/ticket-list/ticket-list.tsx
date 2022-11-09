import React from 'react'

import { TicketType } from '../../types/tickets'

import classes from './ticket-list.module.scss'
import Ticket from './ticket'

interface TicketListProps {
  tickets: TicketType[] | null
  currentPriceFilter: string | undefined
  currentTransferFilter: Array<string | null>
  isLoading: boolean
}

const TicketList = ({ tickets, currentPriceFilter, currentTransferFilter, isLoading }: TicketListProps) => {
  if (!currentTransferFilter.join('')) {
    return <div className={classes['ticket-list__error']}>Рейсов, подходящих под заданные фильтры, не найдено</div>
  }
  if (!(tickets || isLoading)) {
    return <div className={classes['ticket-list__error']}>Произошла ошибка в получении списка билетов</div>
  }
  const checkTransferFilter = (t: TicketType) => {
    return (
      currentTransferFilter.includes('all') ||
      currentTransferFilter.includes(String(t.segments[0].stops.length)) ||
      currentTransferFilter.includes(String(t.segments[1].stops.length))
    )
  }
  const getDuration = (t: TicketType) => {
    return t.segments[0].duration + t.segments[1].duration
  }
  const getTicketList = (): TicketType[] | null | TicketType => {
    if (!tickets) return null
    switch (currentPriceFilter) {
      case 'самый дешевый':
        return [...tickets].reduce((cheapestTicket: TicketType, ticket: TicketType) => {
          return cheapestTicket.price > ticket.price && checkTransferFilter(ticket) ? ticket : cheapestTicket
        })
      case 'самый быстрый':
        return [...tickets].reduce((quickestTicket: TicketType, ticket: TicketType) => {
          return getDuration(quickestTicket) > getDuration(ticket) && checkTransferFilter(ticket)
            ? ticket
            : quickestTicket
        })
      case 'оптимальный':
        return [...tickets].reduce((quickestTicket: TicketType, ticket: TicketType) => {
          return quickestTicket.price * getDuration(quickestTicket) > ticket.price * getDuration(ticket) &&
            checkTransferFilter(ticket)
            ? ticket
            : quickestTicket
        })
      default:
        return [...tickets].filter(ticket => checkTransferFilter(ticket))
    }
  }
  const filteredTickets = getTicketList()
  const elements = Array.isArray(filteredTickets) ? (
    filteredTickets
      .filter((_, index) => index < 5)
      .map((ticket, index) => {
        return (
          <li className={classes['ticket-list__item']} key={index}>
            <Ticket ticket={ticket} />
          </li>
        )
      })
  ) : (
    <li className={classes['ticket-list__item']}>
      <Ticket ticket={filteredTickets} />
    </li>
  )
  return (
    <>
      {isLoading ? (
        <div>Идет загрузка, получено {tickets ? [...tickets].length : '0'} билетов</div>
      ) : (
        <div>Получено {tickets ? [...tickets].length : '0'} билетов </div>
      )}
      <ul>{elements}</ul>
      {tickets && currentTransferFilter.join('') && !currentPriceFilter ? (
        <button className={classes['show-more']}>Показать ещё 5 билетов</button>
      ) : null}
    </>
  )
}

export default TicketList
