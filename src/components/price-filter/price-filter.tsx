import React from 'react'

import { PriceFilterActionTypes, PriceFilterState } from '../../types/priceFilter'

import classes from './price-filter.module.scss'
import PriceItem from './price-item'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames')

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
    const cl = classNames([classes['price-filter__item']], {
      [classes['price-filter__item_checked']]: priceFilter?.[text],
    })
    return (
      <li className={cl} key={text}>
        <PriceItem text={text} name={name} onFilterClick={setPriceFilter} />
      </li>
    )
  })
  return <div className={classes['price-filter']}>{elements}</div>
}

export default PriceFilter
