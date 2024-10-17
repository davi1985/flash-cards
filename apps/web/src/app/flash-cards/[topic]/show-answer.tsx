'use client'

export const ShowAnswer = ({
  onHandleAnswer,
}: {
  onHandleAnswer: () => void
}) => (
  <button
    onClick={onHandleAnswer}
    className="bg-mirage-50 text-marine-500 py-8 w-full uppercase font-bold hover:bg-mirage-50/90 md:w-[320px] md:mb-16 md:rounded-full md:py-6 "
  >
    Show answer
  </button>
)
