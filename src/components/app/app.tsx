import React, { useCallback, useEffect, useState } from 'react'

import Transfer from '../transfer'
import TicketWrapper from '../ticket-wrapper'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'

import classes from './app.module.scss'

const App = (): JSX.Element => {
  const [searchId, getSearchId] = useState('')
  const [isLoading, setFetchLoading] = useState(true)
  const { getTickets } = useActions()
  const { errorCount } = useTypedSelector(state => state.ticketsData)
  const transferFilter = useTypedSelector(state => state.transferFilter)
  const currentTransferFilter = Object.entries(transferFilter).map(([key, value]) => (value ? key : null))

  const getAuthCallback = useCallback(() => {
    async function getAuth() {
      try {
        setFetchLoading(true)
        const response = await fetch('https://front-test.dev.aviasales.ru/search')
        const res = await response.json()
        getSearchId(res.searchId)
        await getTickets(res.searchId)
      } catch (e) {
        console.log(e)
      }
    }

    getAuth()
  }, [searchId])

  useEffect(() => {
    if (errorCount < 2) {
      return getAuthCallback()
    } else {
      setFetchLoading(false)
      console.log('всё кончено')
    }
  }, [getAuthCallback])
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
