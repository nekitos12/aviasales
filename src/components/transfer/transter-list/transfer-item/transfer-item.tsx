import React from 'react'

import { useActions } from '../../../../hooks/useActions'
import { TransferFilterActionTypes } from '../../../../types/transferFilter'

import classes from './transfer-item.module.scss'

type TransferItemPropsType = {
  label: string
  value: TransferFilterActionTypes
  filters: {
    [key: string]: boolean
  }
  id: string
}

const TransferItem = ({ label, value, filters, id }: TransferItemPropsType) => {
  const { setTransferFilter } = useActions()
  return (
    <label className={classes['transfer-item']}>
      <input
        type='checkbox'
        value={value}
        tabIndex={-1}
        checked={filters?.[id]}
        onChange={() => setTransferFilter(value, id)}
        className={classes['transfer-item__input']}
      />
      <span tabIndex={1} className={classes['transfer-item__checkbox']}></span>
      {label}
    </label>
  )
}

export default TransferItem
