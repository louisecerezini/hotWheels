import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import CarForm from './CarForm';

const mockOnAddCar = jest.fn();

describe('CarForm component', () => {
  test('renders the CarForm component', () => {
    render(<Router><CarForm onAddCar={mockOnAddCar} /></Router>);

    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Brand')).toBeInTheDocument();
    expect(screen.getByLabelText('Color')).toBeInTheDocument();
    expect(screen.getByLabelText('Year')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /add/i })).toBeInTheDocument();
  });

  test('handles input change correctly', () => {
    render(<Router><CarForm onAddCar={mockOnAddCar} /></Router>);

    const nameInput = screen.getByLabelText('Name');
    fireEvent.change(nameInput, { target: { value: 'Test Car' } });
    expect(nameInput).toHaveValue('Test Car');

    const brandInput = screen.getByLabelText('Brand');
    fireEvent.change(brandInput, { target: { value: 'Test Brand' } });
    expect(brandInput).toHaveValue('Test Brand');

    const colorInput = screen.getByLabelText('Color');
    fireEvent.change(colorInput, { target: { value: 'Test Color' } });
    expect(colorInput).toHaveValue('Test Color');

    const yearInput = screen.getByLabelText('Year');
    fireEvent.change(yearInput, { target: { value: '2022' } });
    expect(yearInput).toHaveValue('2022');
  });

  test('calls onAddCar with correct data and resets the form on submission', () => {
    render(<Router><CarForm onAddCar={mockOnAddCar} /></Router>);

    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Test Car' } });
    fireEvent.change(screen.getByLabelText('Brand'), { target: { value: 'Test Brand' } });
    fireEvent.change(screen.getByLabelText('Color'), { target: { value: 'Test Color' } });
    fireEvent.change(screen.getByLabelText('Year'), { target: { value: '2022' } });

    fireEvent.submit(screen.getByRole('button', { name: /add/i }));

    expect(mockOnAddCar).toHaveBeenCalledWith({
      id: 0,
      name: 'Test Car',
      brand: 'Test Brand',
      color: 'Test Color',
      year: '2022'
    });

    expect(screen.getByLabelText('Name')).toHaveValue('');
    expect(screen.getByLabelText('Brand')).toHaveValue('');
    expect(screen.getByLabelText('Color')).toHaveValue('');
    expect(screen.getByLabelText('Year')).toHaveValue('');
  });
});
