import './style.sass'
import React from 'react'
import moment from 'moment'
import { TEST_IDS } from '../../../utils/constants'
import { ILaunchesPastResponse } from '../../../typings'

const LaunchTile = ({ launch }: { launch: ILaunchesPastResponse }) => {
  const { id, launch_date_utc, launch_site, links, mission_name, rocket } = launch
  const { site_name_long } = launch_site
  const { article_link, flickr_images } = links
  const { rocket_name } = rocket

  return (
    <div className={'tile'} data-testid={TEST_IDS.TILE}>
      <h3 className={'tile-title'} data-testid={TEST_IDS.TILE_TITLE}>
        {mission_name}
      </h3>

      <div className={'tile-details'} data-testid={TEST_IDS.TILE_DETAILS}>
        <LaunchDate launch_date_utc={launch_date_utc} />

        <RocketName rocket_name={rocket_name} />

        <SiteName site_name={site_name_long} />

        <FlickrImage flickr_image={flickr_images[0]} id={id} />

        <ArticleLink article_link={article_link} />
      </div>
    </div>
  )
}

export default LaunchTile

const LaunchDate = ({ launch_date_utc }: { launch_date_utc: Date | undefined }) =>
  launch_date_utc ? (
    <span className={'detail'} data-testid={TEST_IDS.TILE_LAUNCH_DATE}>
      <p>{moment(launch_date_utc).format('dddd, MMMM Do YYYY')}</p>
    </span>
  ) : null

const RocketName = ({ rocket_name }: { rocket_name: string | undefined }) =>
  rocket_name ? (
    <span className={'detail'} data-testid={TEST_IDS.TILE_ROCKET_NAME}>
      Rocket Name<p>{rocket_name}</p>
    </span>
  ) : null

const SiteName = ({ site_name }: { site_name: string | undefined }) =>
  site_name ? (
    <span className={'detail'} data-testid={TEST_IDS.TILE_SITE_NAME}>
      Site Name<p>{site_name}</p>
    </span>
  ) : null

const FlickrImage = ({ flickr_image, id }: { flickr_image: string | undefined; id: string }) =>
  flickr_image ? (
    <span className={'detail'} data-testid={TEST_IDS.TILE_FLICKR_IMAGE}>
      <img src={flickr_image} alt={id} height={200} style={{ borderRadius: 10 }} />
    </span>
  ) : null

const ArticleLink = ({ article_link }: { article_link: string | undefined }) =>
  article_link ? (
    <span className={'detail'} data-testid={TEST_IDS.TILE_VIEW_ARTICLE}>
      <a href={article_link}>View Article</a>
    </span>
  ) : null
