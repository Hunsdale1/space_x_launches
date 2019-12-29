import React from 'react'

import './style.sass'

const Loading = ({ loading }: { loading: boolean }) => {
  if (loading)
    return (
      <div data-testid={'loading'} className={'loading'}>
        Loading
      </div>
    )

  return (
    <div data-testid={'loading-hidden'} className={'loading hidden'}>
      Loading
    </div>
  )
}

export default Loading
