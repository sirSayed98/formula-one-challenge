import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import AttributDisplay from './AttributeDisplay'

describe('AttributDisplay Component', () => {
  it('renders the attribute and value correctly', () => {
    const attribute = 'Height'
    const value = '180cm'

    render(<AttributDisplay attribute={attribute} value={value} />)

    // Check if the attribute text is rendered with the correct style
    const attributeElement = screen.getByText(attribute)
    expect(attributeElement).toBeInTheDocument()
    expect(attributeElement).toHaveStyle('font-size: 24px')

    // Check if the value text is rendered 
    const valueElement = screen.getByText(value)
    expect(valueElement).toBeInTheDocument()
  })
})
