import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import PageSizeDropdown from './PageSizeDropdown'

describe('PageSizeDropdown Component', () => {
  it('displays the correct initial page size', () => {
    render(<PageSizeDropdown pageSize={20} onPageSizeChange={() => {}} />);


    const inputElement = screen.getByRole('combobox');
    expect(inputElement).toHaveTextContent('20');

  });
  it('renders the correct options', async () => {
    render(<PageSizeDropdown pageSize={5} onPageSizeChange={() => {}} />);

    const selectButton = screen.getByRole('combobox');
    fireEvent.mouseDown(selectButton);
    await waitFor(() => {
      expect(screen.getByText('10')).toBeInTheDocument();
      expect(screen.getByText('20')).toBeInTheDocument();
      expect(screen.getByText('50')).toBeInTheDocument();
      expect(screen.getByText('100')).toBeInTheDocument();
    });

  });
})
  
