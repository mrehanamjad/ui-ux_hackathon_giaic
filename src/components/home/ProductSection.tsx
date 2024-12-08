import React from 'react'
import { Button } from '../ui/button'
import Container from '../Container';

function ProductSection({title, description,btnText,children}:{title:string; description?:string; btnText:string;children: React.ReactNode; }) {
  return (
    <Container>
    <div className='w-full py-6 bg-white '>
        <div className='flex flex-col gap-5 justify-center items-center text-center mb-10'>
            <h2 className='font-medium text-4xl text-black'>{title}</h2>
            {description && <p className='text-[#9F9F9F] text-base font-medium'>{description}</p>}
            </div>
            <div className="w-full">{children}</div>
            <div className="flex items-center justify-center h-36">
                <Button variant={'fBtn1'} size={'lg'}>{btnText}</Button>
            </div>
    </div>
    </Container>
  )
}

export default ProductSection