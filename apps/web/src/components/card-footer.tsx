'use client'

import { Button, ButtonText, ButtonIcon } from '@repo/ui'
import { MoveRight } from 'lucide-react'
import { ProgressCircle } from './progress-circle'

export const CardFooter = ({
  length,
  category,
}: {
  length: number
  category: string
}) => (
  <div className="flex items-center justify-between">
    <Button>
      <a href={`/flash-cards/${category}`}>
        <ButtonText>Acessar coleção</ButtonText>
      </a>

      <ButtonIcon icon={MoveRight} />
    </Button>

    <div className="flex items-center gap-2">
      <div className="w-6 h-6">
        <ProgressCircle progress={0} />
      </div>
      <span className="text-smoke-600 text-sm leading-base">4/{length}</span>
    </div>
  </div>
)
