import './style.sass'
import React from 'react'
import moment from 'moment'
import { ILaunchesPastResponse } from '../../../typings'

const LaunchTile = ({ launch }: { launch: ILaunchesPastResponse }) => {
  const { id, details, launch_date_utc, launch_site, links, mission_name, rocket } = launch
  const { site_name_long } = launch_site
  const { article_link, flickr_images } = links
  const { rocket_name } = rocket

  return (
    <div className={'tile'}>
      <h3 className={'tile-title'}>{mission_name}</h3>

      <div className={'tile-details'}>
        <span className={'detail'}>
          <p>{moment(launch_date_utc).format('dddd, MMMM Do YYYY')}</p>
        </span>

        <span className={'detail'}>
          Rocket Name<p>{rocket_name}</p>
        </span>

        <span className={'detail'}>
          Site Name<p>{site_name_long}</p>
        </span>

        <span className={'detail'} style={flickr_images[0] ? {} : { display: 'none' }}>
          <img src={flickr_images[0]} alt={id} height={200} style={{ borderRadius: 10 }} />
        </span>

        <span className={'detail'}>
          <a href={article_link}>View Article</a>
        </span>
      </div>
    </div>
  )
}

export default LaunchTile
