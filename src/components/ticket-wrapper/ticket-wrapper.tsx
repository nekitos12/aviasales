import React from 'react'

import PriceFilter from '../price-filter'
import TicketList from '../ticket-list'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'

import classes from './ticket-wrapper.module.scss'

interface TicketWrapperPropTypes {
  currentTransferFilter: Array<string | null>
  isLoading: boolean
}

const TicketWrapper = ({ currentTransferFilter, isLoading }: TicketWrapperPropTypes) => {
  const { tickets } = useTypedSelector(state => state.ticketsData)
  const { setPriceFilter } = useActions()
  const { priceFilter } = useTypedSelector(state => state)
  let currentPriceFilter
  for (const key in priceFilter) {
    if (priceFilter[key]) {
      currentPriceFilter = key
    }
  }
  return (
    <div className={classes['ticket-wrapper']}>
      <PriceFilter priceFilter={priceFilter} setPriceFilter={setPriceFilter} />
      <TicketList
        tickets={tickets}
        isLoading={isLoading}
        currentPriceFilter={currentPriceFilter}
        currentTransferFilter={currentTransferFilter}
      />
    </div>
  )
}

export default TicketWrapper
