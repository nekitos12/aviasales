import React from 'react'

import { TicketType } from '../../../types/tickets'

import classes from './ticket.module.scss'
import TicketTag from './ticket-tag'

type TicketPropsType = {
  ticket: TicketType | null
}

const Ticket = ({ ticket }: TicketPropsType) => {
  if (!ticket) return null
  const getChangeCount = (count: number): string => {
    switch (count) {
      case 0:
        return '0 пересадок'
      case 1:
        return '1 пересадка'
      default:
        return `${count} пересадки`
    }
  }
  const revertTime = (time: number): string => {
    return `${Math.floor(time / 60)}ч ${time - Math.floor(time / 60) * 60}м`
  }
  const getFormatDate = (d: string): string => {
    const date = new Date(d)
    const hours = date.getHours()
    const minutes = date.getMinutes()
    return `${hours}:${minutes <= 9 ? '0' + minutes : minutes}`
  }
  const getTravelTime = (d1: string, duration: number): string => {
    const date: any = new Date(d1)
    const d2 = date.setSeconds(date.getSeconds() + duration * 60)
    return `${getFormatDate(d1)} - ${getFormatDate(d2)}`
  }
  return (
    <div className={classes.ticket}>
      <div className={classes.ticket__header}>
        <div className={classes.ticket__price}>{`${ticket.price.toLocaleString('ru-RU')}р`}</div>
        <div className={classes.ticket__carrier}>{ticket.carrier}</div>
      </div>
      <div className={classes.ticket__main}>
        {[0, 1].map(tagRowIndex => {
          const { date, duration, origin, stops, destination } = ticket.segments[tagRowIndex]
          return (
            <div className={classes.ticket__row} key={date}>
              <TicketTag tagTitle={`${origin} - ${destination}`} tagDescr={getTravelTime(date, duration)} />
              <TicketTag tagTitle='В ПУТИ' tagDescr={revertTime(duration)} />
              <TicketTag tagTitle={getChangeCount(stops.length)} tagDescr={stops.join(', ')} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Ticket
