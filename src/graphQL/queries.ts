import gql from 'graphql-tag'

export const SPACE_X_LAUNCHES_QUERY = gql`
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
