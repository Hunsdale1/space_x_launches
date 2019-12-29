import React from 'react'
import { render } from '@testing-library/react'
import Loading from '../../../../components/LaunchesList/Loading'

describe('<Loading />', () => {
  it('Renders "loading" text if loading', () => {
    const { getByText } = render(<Loading loading />)
    const text = getByText(/Loading/i)

    expect(text).toBeInTheDocument()
  })

  it('Appears if loading', () => {
    const { queryByTestId } = render(<Loading loading />)

    expect(queryByTestId('loading')).toBeInTheDocument()
  })

  it('Disappears if not loading', () => {
    const { queryByTestId } = render(<Loading loading={false} />)

    expect(queryByTestId('loading-hidden')).toBeInTheDocument()
  })
})
