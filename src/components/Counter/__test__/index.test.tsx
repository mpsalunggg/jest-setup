import { render, fireEvent } from '@testing-library/react'
import Counter from '..'

test('renders the counter with initial state', () => {
  const { getByTestId } = render(<Counter />)
  const countElement = getByTestId('count')
  expect(countElement).toHaveTextContent('0')
})

test('increments the counter', () => {
  const { getByTestId } = render(<Counter />)
  const countElement = getByTestId('count')
  const incrementButton = getByTestId('increment')

  fireEvent.click(incrementButton)

  expect(countElement).toHaveTextContent('1')
})

test('decrements the counter', () => {
  const { getByTestId } = render(<Counter />)
  const countElement = getByTestId('count')
  const decrementButton = getByTestId('decrement')

  fireEvent.click(decrementButton)

  expect(countElement).toHaveTextContent('-1')
})
