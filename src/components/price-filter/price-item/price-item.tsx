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
        defaultChecked={priceFilter[label]}
        className={classes['price-item__input']}
      />
      {/*<span className={classes['price-item__checkbox']}></span>*/}
      {label}
    </label>
  )
}

export default PriceItem
