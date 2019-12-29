import React from 'react'

import './style.sass'

const Loading = ({ loading }: { loading: boolean }) => <div className={loading ? 'loading' : 'loading hidden'}>Loading</div>

export default Loading
