import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import ActionDisplay from './ActionDisplay' // adjust the import path if necessary

describe('ActionDisplay Component', () => {
  it('renders a button with the correct link and attributes', () => {
    const url = 'https://example.com'

    render(<ActionDisplay url={url} />)

    const button = screen.getByRole('link', { name: /learn more/i })
    expect(button).toBeInTheDocument()

    expect(button).toHaveAttribute('href', url)

    expect(button).toHaveAttribute('target', '_blank')

    expect(button).toHaveAttribute('data-target', 'learn-more')

    expect(button).toHaveTextContent('Learn More')
  })

  it('renders the button with the correct size', () => {
    const url = 'https://example.com'

    render(<ActionDisplay url={url} />)

    const button = screen.getByRole('link', { name: /learn more/i })
    expect(button).toHaveClass('MuiButton-sizeSmall')
  })
})
