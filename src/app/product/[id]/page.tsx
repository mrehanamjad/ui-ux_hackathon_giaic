"use client";
import React from 'react';
import data from '@/data/data.json'
import ProductDetail from '@/components/ProductDetail';
import ProductSection from '@/components/home/ProductSection';
import ProductCard from '@/components/ProductCard';

function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const product = data.products.find(p => p.id.trim() == id);
  const relatedProduct = data.products.filter(item => item.id !== id).slice(0, 4);
  return (
    <div className="w-full">
        {product && <ProductDetail {...product} />}
        <ProductSection title="Related Products" btnText="View More" >
        <div className="flex justify-between  overflow-x-scroll w-full py-4 sm:overflow-x-auto">
              {relatedProduct.map((product, index) => (
                <div key={index} className="">
                 <ProductCard {...product} />
                </div>
              ))}
            </div>
        </ProductSection>
    </div>
  );
}

export default Page;