"use client";
import React from 'react';
import data from '@/data/data.json'
import ProductDetail from '@/components/ProductDetail';

function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const product = data.products.find(p => p.id.trim() == id);
  return (
    <div className="w-full">
        {product && <ProductDetail {...product} />}
    </div>
  );
}

export default Page;