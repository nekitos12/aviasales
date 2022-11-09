import React from 'react'

import { PriceFilterActionTypes } from '../../../types/priceFilter'

import classes from './price-item.module.scss'

type PriceItemPropsType = {
  text: string
  name: PriceFilterActionTypes
  onFilterClick: (name: PriceFilterActionTypes, text: string) => void
}

const PriceItem = ({ name, text, onFilterClick }: PriceItemPropsType) => {
  return (
    <label className={classes['price-item']}>
      <input
        type='checkbox'
        name='price'
        onInput={() => onFilterClick(name, text)}
        className={classes['price-item__input']}
      />
      <span className={classes['price-item__checkbox']}></span>
      {text}
    </label>
  )
}

export default PriceItem
