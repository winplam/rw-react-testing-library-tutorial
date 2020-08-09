// --------- Jest only testing examples ---------
/*
describe('true is truthy and false is falsy', () => {
  test('true is truthy', () => {
    expect(true).toBe(true)
  })

  test('false is falsy', () => {
    expect(false).toBe(false)
  })
})

import sum from './math'

describe('sum', () => {
  test('sums up two values', () => {
    expect(sum(2, 4)).toBe(6)
  })
})
*/

// --------- React Testing Library: Selecting Elements ---------
import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  test('Verify the text "Search:" and "/Search/" is displayed', () => {
    render(<App/>)
    // screen.debug()
    screen.getByText('Search:')

    // fails
    // expect(screen.getByText('Search')).toBeInTheDocument();

    // succeeds
    expect(screen.getByText('Search:')).toBeInTheDocument()

    // succeeds
    expect(screen.getByText(/Search/)).toBeInTheDocument()
    // expect(screen.getAllByText(/Search/)[1]).toBeInTheDocument();
  })

// --------- React Testing Library: Search Types ---------
  test('Textbox is rendered', () => {
    render(<App/>)
    // screen.getByRole('')
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    // LabelText: getByLabelText: <label for="search" />
    // PlaceholderText: getByPlaceholderText: <input placeholder="Search" />
    // AltText: getByAltText: <img alt="profile" />
    // DisplayValue: getByDisplayValue: <input value="JavaScript" />
  })

// --------- React Testing Library: Search Variants ---------
  test('Certain text is NOT displayed', () => {
    render(<App/>)
    // screen.debug()
    // fails
    // expect(screen.getByText(/Searches for JavaScript/)).toBeNull()
    // assert that an element isn't there
    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull()
  })
})
