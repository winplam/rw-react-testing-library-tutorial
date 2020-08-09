import React from 'react'

function getUser () {
  return Promise.resolve({ id: '1', name: 'Robin' })
}

function AppWithSateUpdates () {
  const [search, setSearch] = React.useState('')
  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    const loadUser = async () => {
      const user = await getUser()
      setUser(user)
    }

    loadUser()
  }, [])

  function handleChange (event) {
    setSearch(event.target.value)
  }

  return (
    <div>
      {user ? <p>Signed in as {user.name}</p> : null}
      <Search value={search} onChange={handleChange}>
        Search:
      </Search>

      <p>Results for {search ? search : '...'}</p>
    </div>
  )
}

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

export default AppWithSateUpdates
