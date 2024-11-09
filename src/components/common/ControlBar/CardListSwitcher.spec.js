import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import CardListSwitcher from './CardListSwitcher';

describe('CardListSwitcher Component', () => {
  it('calls onToggle when either button is clicked', () => {
    const onToggle = jest.fn();
    render(<CardListSwitcher isCardView={true} onToggle={onToggle} />);

    const cardViewButton = screen.getByLabelText('Card View');
    const listViewButton = screen.getByLabelText('List View');

    fireEvent.click(listViewButton);
    expect(onToggle).toHaveBeenCalledTimes(1);

    fireEvent.click(cardViewButton);
    expect(onToggle).toHaveBeenCalledTimes(2);
  });
});
