'use client';

import { useState } from 'react';
import { Empty, SearchNotFoundIcon, Button } from 'rizzui';
import ProductClassicCard from '@core/components/cards/product-classic-card';
import { useAtomValue } from 'jotai';
import { selectedCategoryAtom } from './pos-category-filters';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useFilteredPlans } from '@/app/api/plan/usePlan';

const PER_PAGE = 12;

export default function POSProductsFeed() {
  const [nextPage, setNextPage] = useState(PER_PAGE);
  const selectedCategory = useAtomValue(selectedCategoryAtom); // Ambil kategori terpilih

  const { data: products = [], isLoading } = useFilteredPlans();

  // Filter produk berdasarkan kategori terpilih
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.duration === selectedCategory)
    : products;

  // function handleLoadMore() {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //     setNextPage(nextPage + PER_PAGE);
  //   }, 600);
  // }
  const totalPlansLength = filteredProducts?.reduce((total, product) => {
    return total + (product.plans?.length || 0); // Tambahkan panjang setiap plans
  }, 0);

  if (isLoading) {
    return <p>Loading plans...</p>;
  }

  return (
    <>
      {totalPlansLength ? (
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 @md:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] @xl:gap-x-6 @xl:gap-y-12 @4xl:grid-cols-[repeat(auto-fill,minmax(270px,1fr))]">
          {filteredProducts[0].plans
            ?.slice(0, nextPage)
            ?.map((product) => (
              <ProductClassicCard key={product.id} product={product} />
            ))}
        </div>
      ) : (
        <Empty
          image={<SearchNotFoundIcon />}
          text="No Result Found"
          className="h-full justify-center"
        />
      )}

      {nextPage < filteredProducts?.length ? (
        <div className="mb-4 mt-5 flex flex-col items-center xs:pt-6 sm:pt-8">
          <Button isLoading={isLoading}>Load More</Button>
        </div>
      ) : null}
    </>
  );
}
