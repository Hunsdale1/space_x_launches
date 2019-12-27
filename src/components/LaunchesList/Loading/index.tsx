import React from 'react'

import './style'

const Loading = ({ loading }: { loading: boolean }) => (loading ? <div className={'loading'}>Loading ...</div> : <></>)

export default Loading
