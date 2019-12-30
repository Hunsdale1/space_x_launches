import React from 'react'
import { render, act } from '@testing-library/react'
import { TEST_IDS } from '../../../../utils/constants'
import LaunchTile from '../../../../components/LaunchesList/LaunchTile'

export const launchPastTestData = {
  id: '86',
  rocket: { rocket_name: 'Falcon 9' },
  mission_name: 'JCSat 18 / Kacific 1',
  launch_date_utc: new Date('2019-12-17T00:10:00.000Z'),
  launch_site: { site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40' },
  links: {
    article_link: 'https://spaceflightnow.com/2019/12/17/startup-laun…llite-on-spacex-rocket-to-connect-pacific-islands',
    flickr_images: ['https://live.staticflickr.com/65535/48380511527_190682b573_o.jpg']
  },
  details:
    'SpaceX will launch the Boeing built dual payload satellite to geostationary transfer orbit from XXXX. JCSat 18 is a mobile broadband communications payload built for Sky Perfect JSAT Corporation of Japan and will service Asia Pacific. Kacific 1 is a high throughput broadband internet payload built for Kacific Broadband Satellites and will service certain high demand areas of Southeast Asia and the Pacific. Both payloads share a single chassis. The booster for this mission is expected to land on OCISLY.'
}

export const launchPastTestData_NoImages = {
  id: '86',
  rocket: { rocket_name: 'Falcon 9' },
  mission_name: 'JCSat 18 / Kacific 1',
  launch_date_utc: new Date('2019-12-17T00:10:00.000Z'),
  launch_site: { site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40' },
  links: {
    article_link: 'https://spaceflightnow.com/2019/12/17/startup-laun…llite-on-spacex-rocket-to-connect-pacific-islands',
    flickr_images: []
  },
  details:
    'SpaceX will launch the Boeing built dual payload satellite to geostationary transfer orbit from XXXX. JCSat 18 is a mobile broadband communications payload built for Sky Perfect JSAT Corporation of Japan and will service Asia Pacific. Kacific 1 is a high throughput broadband internet payload built for Kacific Broadband Satellites and will service certain high demand areas of Southeast Asia and the Pacific. Both payloads share a single chassis. The booster for this mission is expected to land on OCISLY.'
}

describe('<LaunchTile />', () => {
  let container: any

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    document.body.removeChild(container)
    container = null
  })

  it('renders', () => {
    const { queryByTestId } = render(<LaunchTile launch={launchPastTestData} />, container)
    expect(queryByTestId(TEST_IDS.TILE)).toBeInTheDocument()
  })

  it('renders with all children', () => {
    act(() => {
      const { queryByTestId } = render(<LaunchTile launch={launchPastTestData} />, container)
      expect(queryByTestId(TEST_IDS.TILE)).toBeInTheDocument()
      expect(queryByTestId(TEST_IDS.TILE_DETAILS)).toBeInTheDocument()
      expect(queryByTestId(TEST_IDS.TILE_FLICKR_IMAGE)).toBeInTheDocument()
      expect(queryByTestId(TEST_IDS.TILE_LAUNCH_DATE)).toBeInTheDocument()
      expect(queryByTestId(TEST_IDS.TILE_ROCKET_NAME)).toBeInTheDocument()
      expect(queryByTestId(TEST_IDS.TILE_SITE_NAME)).toBeInTheDocument()
      expect(queryByTestId(TEST_IDS.TILE_TITLE)).toBeInTheDocument()
      expect(queryByTestId(TEST_IDS.TILE_VIEW_ARTICLE)).toBeInTheDocument()
    })
  })

  it('renders null if image not supplied', () => {
    const { queryByTestId } = render(<LaunchTile launch={launchPastTestData_NoImages} />, container)

    expect(queryByTestId(TEST_IDS.TILE_FLICKR_IMAGE)).toBeNull()
  })
})
