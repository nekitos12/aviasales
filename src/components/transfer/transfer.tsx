import React from 'react'

import TransferList from './transter-list'
import classes from './transfer.module.scss'

interface TransferProps {
  transferFilter: {
    [key: string]: boolean
  }
}

const Transfer = ({ transferFilter }: TransferProps) => {
  return (
    <article className={classes.transfer}>
      <h2 className={classes.transfer__title}>Количество пересадок</h2>
      <TransferList filters={transferFilter} />
    </article>
  )
}

export default Transfer
