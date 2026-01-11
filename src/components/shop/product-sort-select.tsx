'use client';

import { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';

import {
  resetSortOrder,
  setSortOrder,
} from '@/redux/slices/product-sort-slice';
import { selectSortOrder } from '@/redux/selectors/product-sort-selector';

// Type for Sort Options
type SortOrder = 'default' | 'low-to-high' | 'high-to-low';

const SORT_OPTIONS: { label: string; value: SortOrder }[] = [
  { label: 'Default Sorting', value: 'default' },
  { label: 'Low to High', value: 'low-to-high' },
  { label: 'High to Low', value: 'high-to-low' },
];

const ProductSortSelect = () => {
  const sortOrder = useAppSelector(selectSortOrder); // Fetching the current sortOrder from Redux state
  const dispatch = useAppDispatch();

  // Reset sort order to default when this component mounts
  useEffect(() => {
    dispatch(resetSortOrder());
  }, [dispatch]);

  // Memoize options to avoid recalculating them
  const sortOptions = useMemo(() => SORT_OPTIONS, []);

  // Dispatch the action to update the sortOrder in Redux state
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortOrder(e.target.value)); // Dispatch selected sort value
  };

  return (
    <select
      className="custom-select"
      onChange={handleSortChange}
      value={sortOrder}
    >
      {sortOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default ProductSortSelect;
