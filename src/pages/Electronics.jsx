import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import ProductCard from '../components/ProductCard';

const Electronics = () => {
  const [sortValue, setSortValue] = useState('');

  const {
    data: products = [],
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ['products'],
    queryFn: () =>
      fetch(
        'https://kinun-server.vercel.app/products/category/electronics'
      ).then(res => res.json()),
  });

  if (isFetching) {
    return <LoadingSpinner />;
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const handleSort = async event => {
    const value = event.target.value;
    setSortValue(value);
    refetch();
  };

  if (sortValue === 'Price (Low to High)') {
    return (
      <div>
        <div className="bg-white px-2 mb-2 flex items-center justify-between rounded-lg shadow">
          <h2 className="text-lg font-bold">Electronic Products</h2>
          <div className="flex items-center">
            <p className="font-bold">Sort By: </p>
            <form action="">
              <select
                className="border-none pr-8"
                onChange={handleSort}
                value={sortValue}
              >
                <option>Default</option>
                <option>Price (Low to High)</option>
                <option>Price (Hign to Low)</option>
              </select>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products
            .sort((a, b) => a.price - b.price)
            .map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    );
  }

  if (sortValue === 'Price (Hign to Low)') {
    return (
      <div>
        <div className="bg-white px-2 mb-2 flex items-center justify-between rounded-lg shadow">
          <h2 className="text-lg font-bold">Electronic Products</h2>
          <div className="flex items-center">
            <p className="font-bold">Sort By: </p>
            <form action="">
              <select
                className="border-none pr-8"
                onChange={handleSort}
                value={sortValue}
              >
                <option>Default</option>
                <option>Price (Low to High)</option>
                <option>Price (Hign to Low)</option>
              </select>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products
            .sort((a, b) => b.price - a.price)
            .map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    );
  }

  if (sortValue === 'Default') {
    return (
      <div>
        <div className="bg-white px-2 mb-2 flex items-center justify-between rounded-lg shadow">
          <h2 className="text-lg font-bold">Electronic Products</h2>
          <div className="flex items-center">
            <p className="font-bold">Sort By: </p>
            <form action="">
              <select
                className="border-none pr-8"
                onChange={handleSort}
                value={sortValue}
              >
                <option>Default</option>
                <option>Price (Low to High)</option>
                <option>Price (Hign to Low)</option>
              </select>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-white px-2 mb-2 flex items-center justify-between rounded-lg shadow">
        <h2 className="text-lg font-bold">Electronic Products</h2>
        <div className="flex items-center">
          <p className="font-bold">Sort By: </p>
          <form action="">
            <select
              className="border-none pr-8"
              onChange={handleSort}
              value={sortValue}
            >
              <option>Default</option>
              <option>Price (Low to High)</option>
              <option>Price (Hign to Low)</option>
            </select>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Electronics;
