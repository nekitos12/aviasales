import React, { useEffect, useState } from 'react'
import useStateWithCallback from 'use-state-with-callback'

import Transfer from '../transfer'
import TicketWrapper from '../ticket-wrapper'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'
import { useAsApi } from '../../hooks/useAsApi'

import classes from './app.module.scss'

const App = (): JSX.Element => {
  const [isLoading, setFetchLoading] = useState(true)
  const { apiGetSearchId } = useAsApi()
  const { getTickets } = useActions()
  const { errorCount } = useTypedSelector(state => state.ticketsData)
  const { transferFilter } = useTypedSelector(state => state)
  const [searchId, setSearchId] = useStateWithCallback('', () => {
    if (errorCount < 2) {
      getAuth()
    } else {
      setFetchLoading(false)
    }
  })
  const currentTransferFilter = Object.entries(transferFilter).map(([key, value]) => (value ? key : null))
  async function getAuth() {
    try {
      setFetchLoading(true)
      const res = await apiGetSearchId()
      setSearchId(res.searchId)
      await getTickets(res.searchId)
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    getAuth()
  }, [])
  return (
    <div className={classes.app}>
      <div className={classes.app__container}>
        <header className={classes.app__logo} />
        <main className={classes.main}>
          <Transfer transferFilter={transferFilter} />
          <TicketWrapper currentTransferFilter={currentTransferFilter} isLoading={isLoading} />
        </main>
      </div>
    </div>
  )
}

export default App
