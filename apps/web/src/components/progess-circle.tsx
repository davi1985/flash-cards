type Props = {
  progress: number
}

export const ProgressCircle = ({ progress }: Props) => (
  <svg className="w-full h-full" viewBox="0 0 100 100">
    <circle
      className="text-smoke-400 stroke-current"
      strokeWidth="12"
      cx="50"
      cy="50"
      r="40"
      fill="transparent"
    ></circle>

    <circle
      className="text-mirage-500 progress-ring__circle stroke-current"
      strokeWidth="10"
      strokeLinecap="round"
      cx="50"
      cy="50"
      r="40"
      fill="transparent"
      strokeDashoffset={`calc(400 - (400 * 45) / 100)`}
    ></circle>
  </svg>
)
