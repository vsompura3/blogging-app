import { useEffect, useState } from 'react'

function App() {
  const [user, setUser] = useState([])

  useEffect(() => {
    fetch(import.meta.env.VITE_BASE_URL + '/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id: '64b8280f25c0e6ae1f91a60e' }),
    })
      .then(res => res.json())
      .then(data => setUser(data))
  }, [])

  return (
    <>
      <div className="max-w-screen min-h-screen mx-auto">
        <section className="relative text-center">
          <h1 className="text-2xl py-2 sm:text-4xl md:text-6xl bg-clip-text text-transparent font-bold  bg-gradient-to-r from-indigo-700 to-sky-700">
            Blog
          </h1>
          <p>one blog to rule them all.</p>
        </section>
        <div className="absolute inset-x-0 top-0 h-96 rotate-180 text-gray-500/20 opacity-60 [mask-image:linear-gradient(to_bottom,transparent,white)]">
          <svg
            className="absolute inset-0 h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="grid-pattern"
                width="32"
                height="32"
                patternUnits="userSpaceOnUse"
                x="50%"
                y="100%"
                patternTransform="translate(0 -1)"
              >
                <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)"></rect>
          </svg>
        </div>
        <div>{JSON.stringify(user, null, 2)}</div>
        {user.map(u => (
          <div key={u._id} className="m-24">
            <h2>{u.name}</h2>
            <p>{u.bio}</p>
            <img src={u.profilePhoto} className="w-24 h-24 aspect-square" />
          </div>
        ))}
      </div>
    </>
  )
}

export default App
