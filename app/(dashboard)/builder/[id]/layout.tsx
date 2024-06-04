import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function layout({children}: Props) {
  return (
    <div className='flex w-full  flex-grow mx-auto'>{children}</div>
  )
}