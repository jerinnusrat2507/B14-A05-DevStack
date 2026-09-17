export default function Hero() {
  return (
    <section id="home" className="max-w-7xl mx-auto px-5 md:px-8 pt-14 md:pt-20 pb-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900">
          Build Your Ideal
          <br />
          <span className="brand-gradient-text">Development Stack</span>
        </h1>
        <p className="mt-5 text-gray-500 text-base sm:text-lg max-w-md">
          Explore frontend, backend, database, and tooling options, compare them side by side, and
          put together the stack that fits your next project.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#technologies"
            className="brand-gradient-bg text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Explore Technologies
          </a>
          <a
            href="#about"
            className="border border-gray-300 font-semibold px-6 py-3 rounded-lg text-gray-800 hover:bg-gray-50 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
        <img
          src="https://api.iconify.design/fluent-emoji-flat:motherboard.svg"
          alt="Development stack illustration"
          className="w-64 sm:w-80 md:w-96 drop-shadow-2xl"
        />
      </div>
    </section>
  );
}
