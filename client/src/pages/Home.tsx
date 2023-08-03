import DemoForm from '../DemoForm'

export default function Home() {
  return (
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
      <DemoForm />
    </div>
  )
}
