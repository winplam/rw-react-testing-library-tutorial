import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import App from './AppStateUpdates'
import userEvent from '@testing-library/user-event'

// --------- React Testing Library: Search Variants (Continued from App.test.js) ---------
describe('App', () => {
  test('Text displayed before and after signing in', async () => {
    render(<App/>)
    // screen.debug()
    expect(screen.queryByText(/Signed in as/)).toBeNull()
    // screen.debug();
    expect(await screen.findByText(/Signed in as/)).toBeInTheDocument()
  })

// --------- React Testing Library: Fire Event ---------
  test('Show username after signing in', async () => {
    render(<App/>)
    // screen.debug()
    // wait for the user to resolve
    // needs only be used in our special case
    await screen.findByText(/Signed in as/)
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'JavaScript' },
    })
    // screen.debug()
  })

// ---------- React Testing Library: User Event ---------
// Whenever possible, use userEvent over fireEvent when using React Testing Library.
// At the time of writing this, userEvent doesn't include all the features of fireEvent
  test('renders App component', async () => {
    render(<App/>)
    // wait for the user to resolve
    await screen.findByText(/Signed in as/)
    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull()
    await userEvent.type(screen.getByRole('textbox'), 'JavaScript')
    // ToDo: Need to mock function to get toBeInTheDocument assertion to work
    // expect(screen.getByText(/Searches for JavaScript/)).toBeInTheDocument()
  })
})

// ---------- React Testing Library: Callback Handlers ---------
function Search ({ value, onChange, children }) {
  return (
    <div>
      <label htmlFor="search">{children}</label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

describe('Search', () => {
  test('calls the onChange callback handler', () => {
    const onChange = jest.fn()
    render(
      <Search value="" onChange={onChange}>
        Search:
      </Search>
    )
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'JavaScript' },
    })
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  test('calls the onChange callback handler', async () => {
    const onChange = jest.fn()
    render(
      <Search value="" onChange={onChange}>
        Search:
      </Search>
    )
    await userEvent.type(screen.getByRole('textbox'), 'JavaScript')
    expect(onChange).toHaveBeenCalledTimes(10)
  })
})

// ---------- React Testing Library: Asynchronous / Async ---------
