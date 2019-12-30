import React from 'react'
import { TEST_IDS } from '../../../utils/constants'

import './style.sass'

const Loading = ({ loading }: { loading: boolean }) => {
  if (loading)
    return (
      <div data-testid={TEST_IDS.LOADING} className={'loading'}>
        Loading
      </div>
    )

  return (
    <div data-testid={TEST_IDS.LOADING_HIDDEN} className={'loading hidden'}>
      Loading
    </div>
  )
}

export default Loading
