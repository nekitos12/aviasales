import React from 'react'

import classes from './ticket-tag.module.scss'

type TicketTagPropsType = {
  tagTitle: string
  tagDescr: string | number
}

const TicketTag = ({ tagTitle, tagDescr }: TicketTagPropsType) => {
  return (
    <div className={classes.tag}>
      <span className={classes.tag__title}>{tagTitle}</span>
      <span className={classes.tag__descr}>{tagDescr}</span>
    </div>
  )
}

export default TicketTag
