import Error from './Error'
import Loading from './Loading'
import LaunchTile from './LaunchTile'
import debounce from 'lodash.debounce'
import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { IGraphQLResponse } from '../../typings'
import { ILaunchesPastResponse } from '../../typings'
import { SPACE_X_LAUNCHES_QUERY } from '../../graphQL/queries'
import { DEBOUNCE_TIME, FETCH_LIMIT } from '../../utils/constants'

import './style.sass'

const LaunchesList = () => {
  const query = useQuery<IGraphQLResponse>(SPACE_X_LAUNCHES_QUERY, {
    variables: { limit: FETCH_LIMIT },
    fetchPolicy: 'cache-and-network',
    notifyOnNetworkStatusChange: false
  })

  const [queryResultsRemaining, setQueryResultsRemaining] = useState(true)

  const onScroll = debounce((event: React.UIEvent<HTMLDivElement>) => {
    const { loading } = query

    if (loading) return
    if (!queryResultsRemaining) return

    const { scrollTop, scrollHeight, offsetHeight } = event.target as HTMLInputElement

    if (scrollTop + 20 < scrollHeight - offsetHeight) return

    const { fetchMore } = query

    fetchMore({
      variables: { offset: data!.launchesPast.length },
      updateQuery: (prev: any, { fetchMoreResult }) => {
        console.info(fetchMoreResult)

        if (!fetchMoreResult) return prev
        if (!fetchMoreResult || fetchMoreResult?.launchesPast.length < FETCH_LIMIT) setQueryResultsRemaining(false)

        return Object.assign({}, prev, { launchesPast: [...prev.launchesPast, ...fetchMoreResult.launchesPast] })
      }
    })
  }, DEBOUNCE_TIME)

  const { loading, error, data } = query

  if (error) return <Error error={error} />
  if (loading && !data) return <Loading loading={loading} />

  return (
    <div
      className={'tiles'}
      data-testid={'tiles'}
      onScroll={e => {
        e.persist()
        onScroll(e)
      }}>
      {data!.launchesPast.map((launch: ILaunchesPastResponse, idx: number) => (
        <LaunchTile key={idx} launch={launch} />
      ))}

      <Loading loading={loading} />
    </div>
  )
}

export default LaunchesList
