import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import ControlBar from './ControlBar'

describe('ControlBar Component', () => {
  const mockEmitPageSize = jest.fn()
  const mockEmitPaginationPage = jest.fn()
  const mockEmitCardViewToggle = jest.fn()

  const defaultProps = {
    emitPageSize: mockEmitPageSize,
    emitPaginationPage: mockEmitPaginationPage,
    emitCardViewToggle: mockEmitCardViewToggle,
    isCardView: true,
    pageSize: 20,
    total: 100,
    offset: 1,
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders correctly with default props', () => {
    render(<ControlBar {...defaultProps} />)
    expect(screen.getByRole('button', { name: 'Card View' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'List View' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'page 1' })).toBeInTheDocument()
  })

  it('calculates pagination correctly', () => {
    render(<ControlBar {...defaultProps} />)

    const previousPageButton = screen.getByLabelText('Go to previous page');
    expect(previousPageButton).toBeInTheDocument();
    expect(previousPageButton).toBeDisabled();

    expect(screen.getByLabelText('page 1')).toBeInTheDocument();
    expect(screen.getByLabelText('Go to page 2')).toBeInTheDocument();
    expect(screen.getByLabelText('Go to page 3')).toBeInTheDocument();
    expect(screen.getByLabelText('Go to page 4')).toBeInTheDocument();
    expect(screen.getByLabelText('Go to page 5')).toBeInTheDocument();
  
    const nextPageButton = screen.getByLabelText('Go to next page');
    expect(nextPageButton).toBeInTheDocument();
    expect(nextPageButton).toBeEnabled();
  })
})
