import App from '../App'
import React from 'react'
import { render } from '@testing-library/react'

test('renders main app header', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/SpaceX Launches/i)
  expect(linkElement).toBeInTheDocument()
})
