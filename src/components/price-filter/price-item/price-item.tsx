import React from 'react'

import { PriceFilterActionTypes, PriceFilterState } from '../../../types/priceFilter'

import classes from './price-item.module.scss'

type PriceItemPropsType = {
  label: string
  value: PriceFilterActionTypes
  priceFilter: PriceFilterState
  onFilterClick: (value: PriceFilterActionTypes, label: string) => void
}

const PriceItem = ({ priceFilter, value, label, onFilterClick }: PriceItemPropsType) => {
  return (
    <label className={classes['price-item']}>
      <input
        type='radio'
        name='price'
        value={value}
        tabIndex={2}
        onClick={() => onFilterClick(value, label)}
        defaultChecked={priceFilter[label]}
        className={classes['price-item__input']}
      />
      <span className={classes['price-item__checkbox']}>{label}</span>
    </label>
  )
}

export default PriceItem
