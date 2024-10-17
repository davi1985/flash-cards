'use client'
import { Progress, ProgressBar, ProgressIndicator } from '@repo/ui'
import { ArrowLeft } from 'lucide-react'
import { AnimatedCard } from './animated-card'
import { ShowAnswer } from './show-answer'
import { useFlashCards } from './useFlashCards'

const FlashCards = ({ params }: { params: { topic: string } }) => {
  const {
    shouldShowAnswer,
    currentQuestion,
    flashCardsCount,
    handleAnswerFlashCard,
    max,
  } = useFlashCards({ topic: params.topic })

  return (
    <div className="bg-gradient-to-t from-marine-600 to-marine-500 h-screen text-mirage-50 flex flex-col md:items-center">
      <div className="flex-1 flex flex-col self-stretch items-center px-6 py-16">
        <div className="absolute left-0 top-0 mt-2 ml-2">
          <a
            href="/"
            className="flex gap-2 items-center text-sm font-bold text-smoke-50"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to collections
          </a>
        </div>

        <div className="space-y-4">
          <span className="text-xl leading-heading font-bold">
            {params.topic} fundaments
          </span>

          <Progress now={flashCardsCount} max={max}>
            <ProgressBar />
            <ProgressIndicator />
          </Progress>
        </div>

        <AnimatedCard
          shouldShowAnswer={shouldShowAnswer}
          question={currentQuestion}
        />
      </div>

      <ShowAnswer onHandleAnswer={handleAnswerFlashCard} />
    </div>
  )
}

export default FlashCards
