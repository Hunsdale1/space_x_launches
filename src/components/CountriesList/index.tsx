import React from 'react'
import Error from './Error'
import gql from 'graphql-tag'
import Country from './Country'
import Loading from './Loading'
import { useQuery } from '@apollo/react-hooks'

const COUNTRIES = gql`
  {
    countries {
      name
      native
      phone
      continent {
        name
      }
      currency
      languages {
        name
        native
      }
      emoji
    }
  }
`

const CountriesList = (props: { props: any }) => {
  const { loading, error, data } = useQuery(COUNTRIES)

  if (loading) return
  if (error) return <Error />

  return (
    <div>
      {data.countries.map((country: any, idx: number) => (
        <Country key={idx} country={country} />
      ))}

      <Loading loading={loading} />
    </div>
  )
}

export default CountriesList
