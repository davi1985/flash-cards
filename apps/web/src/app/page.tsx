import { CardFooter } from '../components/card-footer'
import { questionsMock } from '../data/mock'

const Home = () => (
  <div>
    <div className="bg-gradient-to-t from-marine-600 to-marine-500 px-6 py-5 flex flex-col gap-8 md:flex-row-reverse md:justify-between md:items-center">
      <img
        src="https://github.com/davi1985.png"
        alt=""
        className="rounded-full h-16 w-16 self-end"
      />
      <span className="text-2xl font-bold leading-heading text-mirage-50">
        Dashboard
      </span>
    </div>

    <main className="p-6 flex flex-col gap-4">
      <span className="text-lg font-bold leading-heading">Collections</span>

      <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
        {questionsMock.map(({ category, description, questions }) => (
          <div
            key={category}
            className="flex flex-col gap-5 py-6 px-5 rounded-lg border border-mirage-100 bg-mirage-50 shadow-lg hover:scale-[] transition-transform duration-300"
          >
            <span className="font-bold text-sm text-mirage-600 leading-heading uppercase">
              {category}
            </span>

            <div className="space-y-2">
              <h2 className="font-bold leading-heading">
                Fundaments of {category}
              </h2>

              <p className="text-smoke-800 text-sm leading-base">
                {description}
              </p>
            </div>

            <CardFooter category={category} length={questions.length} />
          </div>
        ))}
      </div>
    </main>
  </div>
)

export default Home
