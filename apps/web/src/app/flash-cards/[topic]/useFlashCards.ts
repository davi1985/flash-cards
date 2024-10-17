import { useEffect, useState } from 'react'
import { questionsMock } from '../../../data/mock'

export type Question = {
  id: number
  question: string
  answer: string
}

export const useFlashCards = ({ topic }: { topic: string }) => {
  const [questions, setQuestions] = useState<Question[]>([])
  const [flashCardsCount, setFlashCardsCount] = useState(0)
  const [shouldShowAnswer, setShouldShowAnswer] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState<Question>(
    {} as Question,
  )

  useEffect(() => {
    const questions = questionsMock.filter(
      (collection) => collection.category === topic,
    )

    setQuestions(questions[0]?.questions as Question[])
  }, [topic])

  const handleAnswerFlashCard = () => {
    console.log({
      shouldShowAnswer,
    })

    if (!shouldShowAnswer) {
      setShouldShowAnswer(true)
    } else {
      if (flashCardsCount < questions.length - 1) {
        setFlashCardsCount((prev) => prev + 1)
        setShouldShowAnswer(false)
      } else {
        setFlashCardsCount(questions.length)
      }
    }
  }

  useEffect(() => {
    if (flashCardsCount < questions.length) {
      setCurrentQuestion(questions[flashCardsCount] ?? ({} as Question))
    }
  }, [flashCardsCount, questions])

  return {
    shouldShowAnswer,
    currentQuestion,
    handleAnswerFlashCard,
    flashCardsCount,
    max: questions.length,
  }
}
