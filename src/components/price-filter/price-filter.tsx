import React from 'react'

import { PriceFilterActionTypes, PriceFilterState, PriceFilterTitle } from '../../types/priceFilter'

import classes from './price-filter.module.scss'
import PriceItem from './price-item'

interface PriceI {
  text: string
  name: PriceFilterActionTypes
}
interface PriceFilterProps {
  priceFilter: PriceFilterState
  setPriceFilter: (name: PriceFilterActionTypes, text: string) => void
}

const PriceFilter = ({ priceFilter, setPriceFilter }: PriceFilterProps) => {
  const priceFilters: PriceI[] = [
    {
      text: 'самый дешевый',
      name: PriceFilterActionTypes.MOST_CHEAP,
    },
    { text: 'самый быстрый', name: PriceFilterActionTypes.MOST_QUICK },
    {
      text: 'оптимальный',
      name: PriceFilterActionTypes.OPTIMAL,
    },
  ]
  const elements = priceFilters.map(({ name, text }) => {
    let cl = classes['price-filter__item']
    cl += priceFilter?.[text] ? ` ${classes['price-filter__item_checked']}` : ''
    return (
      <li className={cl} key={text}>
        <PriceItem text={text} name={name} onFilterClick={setPriceFilter} />
      </li>
    )
  })
  return <div className={classes['price-filter']}>{elements}</div>
}

export default PriceFilter
