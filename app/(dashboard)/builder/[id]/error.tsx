'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React, { useEffect } from 'react'

type Props = {
  error: Error
}

export default function ErrorPage({error}: Props) {

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className='flex w-full h-full flex-col items-center justify-center gap-4'>
      <h2 className='text-4xl'>Something went wrong!</h2>
      <Button variant={`link`}>
        <Link href={'/'}>Go to home</Link>
      </Button>
    </div>
  )
}
