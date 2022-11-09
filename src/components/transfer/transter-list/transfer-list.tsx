import React from 'react'

import { TransferFilterActionTypes } from '../../../types/transferFilter'

import TransferItem from './transfer-item'
import classes from './transfer-list.module.scss'

interface TransferI {
  text: string
  name: TransferFilterActionTypes
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
      text: 'Все',
      name: TransferFilterActionTypes.CHECK_ALL_FILTER,
      id: 'all',
    },
    {
      text: 'Без пересадок',
      name: TransferFilterActionTypes.CHECK_FILTER,
      id: '0',
    },
    {
      text: '1 пересадка',
      name: TransferFilterActionTypes.CHECK_FILTER,
      id: '1',
    },
    {
      text: '2 пересадки',
      name: TransferFilterActionTypes.CHECK_FILTER,
      id: '2',
    },
    {
      text: '3 пересадки',
      name: TransferFilterActionTypes.CHECK_FILTER,
      id: '3',
    },
  ]

  const transferList = transferTexts.map(({ text, name, id }) => {
    return (
      <li key={id} className={classes['transfer-list__item']}>
        <TransferItem text={text} name={name} filters={filters} id={id} />
      </li>
    )
  })
  return <ul className={classes['transfer-list']}>{transferList}</ul>
}

export default TransferList
