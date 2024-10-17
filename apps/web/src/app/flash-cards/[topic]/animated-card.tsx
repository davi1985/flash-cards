import { AnimatePresence, motion } from 'framer-motion'
import { Question } from './useFlashCards'

type Props = {
  shouldShowAnswer: boolean
  question: Question
}

export const AnimatedCard = ({ question, shouldShowAnswer }: Props) => {
  return (
    <div className="relative mt-20 w-full max-w-[420px] min-h-[416px]">
      <motion.div
        className="rounded-lg relative inset-0 h-full bg-mirage-50 w-full py-6 px-6 z-20"
        transition={{ duration: 0.25 }}
        animate={
          shouldShowAnswer
            ? {
                rotateY: 180,
              }
            : {}
        }
      />

      <div className="absolute z-30 top-1/2 -translate-y-1/2 w-full text-center">
        <AnimatePresence>
          {shouldShowAnswer ? (
            <motion.p
              key="card-result"
              className="text-smoke-950 leading-base text-center flex justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.25 }}
            >
              {question.answer}
            </motion.p>
          ) : (
            <motion.p
              key="card-question"
              className="text-smoke-950 leading-base text-center flex justify-center items-center px-2"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {question.question}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div className="z-10 rounded-lg bg-mirage-50/60 mx-6 left-4 right-4 absolute h-20 -bottom-4" />
    </div>
  )
}
