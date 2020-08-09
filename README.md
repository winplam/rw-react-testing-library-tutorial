Notes and code from [How to use React Testing Library Tutorial](https://www.robinwieruch.de/react-testing-library) <br>
collected into working app and test suites.

## React Testing Library: Search Variants
#### getByText
```
getByRole
getByLabelText
getByPlaceholderText
getByAltText
getByDisplayValue
```
#### If you assert for a missing element, use queryBy. Otherwise default to getBy
```
queryByText
queryByRole
queryByLabelText
queryByPlaceholderText
queryByAltText
queryByDisplayValue
```
#### For any element that isn't there yet but will be there eventually, use findBy over getBy or queryBy
```
findByText
findByRole
findByLabelText
findByPlaceholderText
findByAltText
findByDisplayValue
```

#### For multiple elements
```
getAllBy
queryAllBy
findAllBy
```
#### Assertive Functions
```
    toBeDisabled
    toBeEnabled
    toBeEmpty
    toBeEmptyDOMElement
    toBeInTheDocument
    toBeInvalid
    toBeNull
    toBeRequired
    toBeValid
    toBeVisible
    toContainElement
    toContainHTML
    toHaveAttribute
    toHaveClass
    toHaveFocus
    toHaveFormValues
    toHaveStyle
    toHaveTextContent
    toHaveValue
    toHaveDisplayValue
    toBeChecked
    toBePartiallyChecked
    toHaveDescription
```

## Text Match Options
Given the following HTML:<br>
`<div>Hello World</div>`

Will find the div:

// Matching a string:
```
getByText('Hello World') // full string match
getByText('llo Worl', { exact: false }) // substring match
getByText('hello world', { exact: false }) // ignore case
```
// Matching a regex:
```
getByText(/World/) // substring match
getByText(/world/i) // substring match, ignore case
getByText(/^hello world$/i) // full string match, ignore case
getByText(/Hello W?oRlD/i) // advanced regex
```

// Matching with a custom function:
```
getByText((content, element) => content.startsWith('Hello'))
```
