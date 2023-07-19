function App() {
  return (
    <>
      <div className="max-w-screen min-h-screen mx-auto p-2 bg-clip-text text-transparent text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-center mt-24 bg-gradient-to-r from-fuchsia-700 to-red-700">
        <h1>Blog App</h1>
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
    </>
  )
}

export default App
