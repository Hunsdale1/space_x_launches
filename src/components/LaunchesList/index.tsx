import React, { useState, useEffect, useRef, HTMLAttributes } from 'react'
import Error from './Error'
import gql from 'graphql-tag'
import Loading from './Loading'
import LaunchTile from './LaunchTile'
import { IQuery, ILaunchesPastResponse } from '../../typings'
import { useQuery } from '@apollo/react-hooks'

import './style.sass'
import { ApolloQueryResult } from 'apollo-boost'

const SPACE_X_LAUNCHES_QUERY = gql`
  query spaceXLaunchesQuery($offset: Int, $limit: Int) {
    launchesPast(limit: $limit, offset: $offset, sort: "launch_date_utc asc") {
      id
      mission_name
      launch_date_utc
      launch_site {
        site_name_long
      }
      links {
        article_link
        flickr_images
      }
      rocket {
        rocket_name
      }
      details
    }
  }
`

const LaunchesList = () => {
  const [limit, setLimit] = useState(10)
  const [offset, setOffset] = useState(0)
  const scrollViewRef = useRef<HTMLDivElement>(null)

  const query = useQuery(SPACE_X_LAUNCHES_QUERY, { variables: { offset, limit }, fetchPolicy: 'cache-and-network' })

  // useEffect(() => {
  //   debugger
  //   scrollViewRef.current?.addEventListener('scroll', (ev: Event) => {
  //     debugger

  //     if (scrollViewRef.current!.scrollTop + scrollViewRef.current?.clientHeight! >= scrollViewRef.current?.scrollHeight!) {
  //       setLimit(limit + 10)
  //       setOffset(offset + 10)
  //       query.refetch({ offset, limit }).then((value: ApolloQueryResult<any>) => {
  //         console.info(value)
  //         debugger
  //       })
  //     }
  //   })
  //   return () => {}
  // }, [limit, offset, query])

  const onScroll = (event: React.UIEvent<HTMLDivElement>) => {
    console.info(event)
    debugger
  }

  const { loading, error, data } = query

  debugger

  if (error) return <Error error={error} />
  if (loading && !data) return <p>Loading ... </p>

  return (
    <div className={'tiles'} ref={scrollViewRef} onScroll={onScroll}>
      {data.launchesPast.map((launch: ILaunchesPastResponse, idx: number) => (
        <LaunchTile key={idx} launch={launch} />
      ))}

      <Loading loading={loading} />
    </div>
  )
}

export default LaunchesList
