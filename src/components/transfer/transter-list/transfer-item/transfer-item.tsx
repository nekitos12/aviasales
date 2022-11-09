import React from 'react'

import { useActions } from '../../../../hooks/useActions'
import { TransferFilterActionTypes } from '../../../../types/transferFilter'

import classes from './transfer-item.module.scss'

type TransferItemPropsType = {
  text: string
  name: TransferFilterActionTypes
  filters: {
    [key: string]: boolean
  }
  id: string
}

const TransferItem = ({ text, name, filters, id }: TransferItemPropsType) => {
  const { setTransferFilter } = useActions()
  return (
    <label className={classes['transfer-item']}>
      <input
        type='checkbox'
        checked={filters?.[id]}
        onChange={() => setTransferFilter(name, id)}
        className={classes['transfer-item__input']}
      />
      <span className={classes['transfer-item__checkbox']}></span>
      {text}
    </label>
  )
}

export default TransferItem
