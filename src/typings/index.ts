export interface ILaunchesPastResponse {
  id: string
  mission_name: string
  launch_date_utc: Date
  launch_site: {
    site_name_long: string
  }
  links: {
    article_link: string
    flickr_images: string[]
  }
  rocket: {
    rocket_name: string
  }
  details: string
}

export interface IQuery {
  sort: string
  limit: number
  order: string
  offset: number
}
