export default function About() {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-700 py-16">
      <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full">
        <div
          className="relative mx-auto h-full max-w-prose text-lg"
          aria-hidden="true"
        >
          <svg
            className="absolute top-12 left-full translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            className="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute bottom-12 left-full translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-prose text-lg">
          <h1>
            <span className="block text-center text-lg font-semibold text-indigo-600">
              Introducing
            </span>
            <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              E-Trends
            </span>
          </h1>
          <p className="mt-8 text-xl leading-8 text-gray-500 dark:text-gray-300">
            I created this website with the intention of learning and exploring
            various technologies. My primary focus has been on Vite, React, and
            Tailwind CSS. These cutting-edge technologies have empowered me to
            build a dynamic and interactive platform that provides valuable
            insights.
          </p>
        </div>
        <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500 dark:text-gray-300">
          <p>
            To bring you the latest trends and search data, I utilized the
            Google Trends Wrapper API, which can be found at{" "}
            <a
              href="https://github.com/pat310/google-trends-api"
              target="_blank"
            >
              https://github.com/pat310/google-trends-api
            </a>
            . This API enables me to fetch real-time data, allowing you to stay
            updated with the most relevant and popular search queries.
          </p>
          <p>Here's a breakdown of the different data components I provide:</p>
          <ul role="list">
            <li>
              Interest Over Time:
              <p>
                Interest Over Time represents the search interest relative to
                the highest point on the chart for the given region and time. A
                value of 100 indicates the peak popularity for the term. This
                metric helps you gauge the popularity of a particular search
                term over a specific period.
              </p>
            </li>
            <li>
              Related Topics:{" "}
              <p>
                Related Topics are the most significant increases in search
                frequency since the last time period. Topics with high values
                have experienced a tremendous surge in popularity, often due to
                being new or having few prior searches.
              </p>
            </li>
            <li>
              Search Results:{" "}
              <p>
                Search Results present the most popular search queries. The
                scoring is based on a relative scale, where a value of 100
                denotes the most commonly searched query. A value of 50
                signifies a query searched half as often as the most popular
                query, and so on.
              </p>
            </li>
          </ul>
          <p>
            Through my website, I aim to provide you with valuable insights into
            search trends, helping you stay informed about the latest topics and
            interests. Furthermore, it is essential to highlight that this
            platform has been developed as a means to learn JavaScript and
            React. It serves as a practical application of my knowledge in these
            technologies, allowing me to continually improve and expand my
            skills.
          </p>
        </div>
      </div>
    </div>
  );
}
