import React from 'react'

import { PriceFilterActionTypes } from '../../../types/priceFilter'

import classes from './price-item.module.scss'

type PriceItemPropsType = {
  label: string
  value: PriceFilterActionTypes
  onFilterClick: (value: PriceFilterActionTypes, label: string) => void
}

const PriceItem = ({ value, label, onFilterClick }: PriceItemPropsType) => {
  return (
    <label className={classes['price-item']}>
      <input
        type='checkbox'
        name='price'
        value={value}
        onInput={() => onFilterClick(value, label)}
        className={classes['price-item__input']}
      />
      <span className={classes['price-item__checkbox']}></span>
      {label}
    </label>
  )
}

export default PriceItem
