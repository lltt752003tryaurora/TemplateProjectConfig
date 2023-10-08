import clsx from 'clsx';
import React from 'react'

type WrapperProps = {
    children: React.ReactNode;
    className?: string;
}   

const Wrapper: React.FC<WrapperProps> = ({children, className}) => {
  return (
    <section className={clsx(`relative container py-8 max-[767px]:max-w-full`, className)}>
    {children}
  </section>
  )
}

export default Wrapper