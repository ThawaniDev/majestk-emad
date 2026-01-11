'use client';

import { useCallback, useEffect, useState } from 'react';
import { selectSortOrder } from '@/redux/selectors/product-sort-selector';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { sortProducts } from '@/utils/sorting';
import { IProductDT } from '@/types/product-d-t';
import { getProductData } from '@/data/product-data';
import ShopItem from './shop-item';
import ProductSortSelect from './product-sort-select';
import { selectSearchQuery } from '@/redux/selectors/product-search-selector';
import { setSearchQuery } from '@/redux/slices/product-search-slice';
import { useLanguage } from '@/context/language-context';

const ShopArea = () => {
  const { t } = useLanguage();
  const productData = getProductData(t);
  const [sortedProducts, setSortedProducts] = useState<IProductDT[]>([]);
  const sortOrder = useAppSelector(selectSortOrder);
  const searchQuery = useAppSelector(selectSearchQuery);
  const dispatch = useAppDispatch();

  // Memoize sorting logic
  const sortedData = useCallback(
    () => sortProducts(productData, sortOrder),
    [sortOrder]
  );

  // Handle search query change
  const handleSearchQueryChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setSearchQuery(e.target.value));
    },
    [dispatch]
  );

  // Update sorted products when sortOrder changes
  useEffect(() => {
    setSortedProducts(sortedData());
  }, [sortedData]);

  // Filter products based on search query
  const filteredProducts = sortedProducts.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="it-shop-area black-bg pt-120 pb-120">
      <div className="container">
        <div className="it-shop-top-wrap">
          <div className="row">
            {/* Sorting Dropdown */}
            <div
              className="col-xl-4 col-lg-4 col-md-12 mb-30 it-fade-anim"
              data-fade-from="bottom"
              data-delay=".3"
            >
              <div className="it-shop__filter it-shop-select">
                <ProductSortSelect />
              </div>
            </div>

            {/* Result Count */}
            <div
              className="col-xl-4 col-lg-4 col-md-12 mb-30 it-fade-anim"
              data-fade-from="bottom"
              data-delay=".5"
            >
              <div className="it-shop__input-box">
                <span>
                  Showing {filteredProducts.length} of {productData.length}{' '}
                  products
                </span>
              </div>
            </div>

            {/* Search Input */}
            <div
              className="col-xl-4 col-lg-4 col-md-12 mb-30 it-fade-anim"
              data-fade-from="bottom"
              data-delay=".7"
            >
              <div className="it-shop__input">
                <input
                  type="text"
                  placeholder="Search your product..."
                  value={searchQuery}
                  onChange={handleSearchQueryChange}
                />
                <button className="it-shop__search">
                  <i className="fa-light fa-magnifying-glass"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Products Display */}
        <div className="row">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, i) => (
              <div
                key={product.id}
                className="col-xl-4 col-lg-6 col-md-6 it-fade-anim"
                data-fade-from="bottom"
                data-delay={0.3 + 0.2 * i}
              >
                <ShopItem product={product} />
              </div>
            ))
          ) : (
            <p className="text-center text-white w-100">No products found</p>
          )}

          {/* Pagination */}
          <div className="col-xl-12">
            <div className="it-pagination text-center">
              <nav>
                <ul>
                  <li>
                    <a href="blog.html">1</a>
                  </li>
                  <li>
                    <a href="blog.html">2</a>
                  </li>
                  <li>
                    <a href="blog.html">3</a>
                  </li>
                  <li>
                    <a className="color" href="blog.html">
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopArea;
