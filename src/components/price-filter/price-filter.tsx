import React from 'react'
import cn from 'classnames'

import { PriceFilterActionTypes, PriceFilterState } from '../../types/priceFilter'

import classes from './price-filter.module.scss'
import PriceItem from './price-item'

interface PriceI {
  label: string
  value: PriceFilterActionTypes
}
interface PriceFilterProps {
  priceFilter: PriceFilterState
  setPriceFilter: (value: PriceFilterActionTypes, label: string) => void
}

const PriceFilter = ({ priceFilter, setPriceFilter }: PriceFilterProps) => {
  const priceFilters: PriceI[] = [
    {
      label: 'самый дешевый',
      value: PriceFilterActionTypes.MOST_CHEAP,
    },
    { label: 'самый быстрый', value: PriceFilterActionTypes.MOST_QUICK },
    {
      label: 'оптимальный',
      value: PriceFilterActionTypes.OPTIMAL,
    },
  ]
  const elements = priceFilters.map(({ value, label }) => {
    const cl = cn([classes['price-filter__item']], {
      [classes['price-filter__item_checked']]: priceFilter?.[label],
    })
    return (
      <li className={cl} key={label}>
        <PriceItem label={label} value={value} onFilterClick={setPriceFilter} />
      </li>
    )
  })
  return <div className={classes['price-filter']}>{elements}</div>
}

export default PriceFilter
