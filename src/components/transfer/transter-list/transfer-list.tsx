import React from 'react'

import { TransferFilterActionTypes } from '../../../types/transferFilter'

import TransferItem from './transfer-item'
import classes from './transfer-list.module.scss'

interface TransferI {
  label: string
  value: TransferFilterActionTypes
  id: string
}
interface TransferListProps {
  filters: {
    [key: string]: boolean
  }
}
const TransferList = ({ filters }: TransferListProps) => {
  const transferTexts: TransferI[] = [
    {
      label: 'Все',
      value: TransferFilterActionTypes.CHECK_ALL_FILTER,
      id: 'all',
    },
    {
      label: 'Без пересадок',
      value: TransferFilterActionTypes.CHECK_ONE_FILTER,
      id: '0',
    },
    {
      label: '1 пересадка',
      value: TransferFilterActionTypes.CHECK_ONE_FILTER,
      id: '1',
    },
    {
      label: '2 пересадки',
      value: TransferFilterActionTypes.CHECK_ONE_FILTER,
      id: '2',
    },
    {
      label: '3 пересадки',
      value: TransferFilterActionTypes.CHECK_ONE_FILTER,
      id: '3',
    },
  ]

  const transferList = transferTexts.map(({ label, value, id }) => {
    return (
      <li key={id} className={classes['transfer-list__item']}>
        <TransferItem label={label} value={value} filters={filters} id={id} />
      </li>
    )
  })
  return <ul className={classes['transfer-list']}>{transferList}</ul>
}

export default TransferList
