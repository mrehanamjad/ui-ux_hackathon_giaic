import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { Calendar, Clock } from 'lucide-react'

function BlogCard({imgSrc}:{imgSrc:string}) {
  return (
    <div className='h-[32rem] w-[22rem] max-md:w-72 max-md:h-[26rem] rounded-xl flex flex-col items-center justify-between '>
        <Image src={imgSrc} alt={'blog image'} width={1000} height={1000} className='' />
        <p className='md:mt-4 text-lg text-black/80'>Going all-in with millennial design</p>
        <Button className='' variant={'fBtn1'}>Read More</Button>
        <div className='flex  justify-center items-center gap-4 md:mt-3 text-sm text-gray-600'>
            <span className='flex gap-1 justify-center items-center'><Clock  size={15} color='black' className='mb-[2px]' /> 5 min</span>
            <span className='flex gap-1 justify-center items-center'><Calendar size={15}  color='black' className='mb-[2px]' /> 12th Oct 2022</span>
        </div>
    </div>
  )
}

export default BlogCard