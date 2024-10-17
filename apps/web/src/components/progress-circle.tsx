'use client'

type Props = {
  progress: number
}

export const ProgressCircle = (props: Props) => (
  <svg className="w-full h-full" viewBox="0 0 100 100" {...props}>
    <circle
      className="text-smoke-400 stroke-current"
      strokeWidth="10"
      cx="50"
      cy="50"
      r="40"
      fill="transparent"
    ></circle>

    <circle
      className="text-mirage-500 progress-ring__circle stroke-current"
      strokeWidth="12"
      strokeLinecap="round"
      cx="50"
      cy="50"
      r="40"
      fill="transparent"
      strokeDashoffset={`calc(400 - (400 * 25) / 100)`}
    ></circle>
  </svg>
)
