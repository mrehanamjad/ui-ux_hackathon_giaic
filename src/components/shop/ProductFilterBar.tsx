import React from 'react'
import Container from '../Container'
import { SlidersHorizontal } from 'lucide-react'

function ProductFilterBar() {
  return (
    <Container>
    <div className='w-full h-24 flex items-center justify-center my-10 bg-[#FAF4F4]'>
        <div>

         <span className='flex items-center text-xl'><SlidersHorizontal /> Filter</span>
        </div> 
    </div>
    </Container>
  )
}

export default ProductFilterBar