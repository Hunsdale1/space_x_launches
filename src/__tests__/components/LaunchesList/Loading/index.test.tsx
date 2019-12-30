import React from 'react'
import { render } from '@testing-library/react'
import { TEST_IDS } from '../../../../utils/constants'
import Loading from '../../../../components/LaunchesList/Loading'

describe('<Loading />', () => {
  let container: any

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    document.body.removeChild(container)
    container = null
  })

  it('Renders "loading" text if loading', () => {
    const { getByText } = render(<Loading loading />, container)
    const text = getByText(/Loading/i)

    expect(text).toBeInTheDocument()
  })

  it('Appears if loading', () => {
    const { queryByTestId } = render(<Loading loading />, container)

    expect(queryByTestId(TEST_IDS.LOADING)).toBeInTheDocument()
  })

  it('Disappears if not loading', () => {
    const { queryByTestId } = render(<Loading loading={false} />, container)

    expect(queryByTestId(TEST_IDS.LOADING_HIDDEN)).toBeInTheDocument()
  })
})
