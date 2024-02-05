import React from 'react'

interface buttonType{
    className?: string
    title: string
    link: string
}
export default function CustomButton({className, title, link, ...props}:buttonType) {
  return (
    <>
      <button className={`${className}`}>{title}</button>
    </>
  )
}
