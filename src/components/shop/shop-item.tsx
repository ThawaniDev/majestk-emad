'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { selectIsProductInCart } from '@/redux/selectors/cart-selector';
import { addItemToCart } from '@/redux/slices/cart-slice';
import { IProductDT } from '@/types/product-d-t';

interface ShopItemProps {
  product: IProductDT;
}

const ShopItem = ({ product }: ShopItemProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const isProductInCart = useAppSelector((state) =>
    selectIsProductInCart(state, product.id)
  ); // selector to check if the product is in Cart

  // Dispatch action to add item to cart with initial quantity of 1
  const handleAddToCart = (product: IProductDT, quantity: number = 1) => {
    dispatch(addItemToCart({ product, quantity }));
  };

  // Handler to Navigate to the cart page
  const handleViewCart = () => {
    router.push('/cart');
  };

  return (
    <div className="it-shop-item mb-50">
      <div className="it-shop-thumb p-relative">
        <Image src={product.image} alt="" />
        <div className="it-shop-btn-cart">
          <button
            className="it-btn-black"
            onClick={() => {
              if (isProductInCart) {
                handleViewCart();
              } else {
                handleAddToCart(product);
              }
            }}
          >
            {isProductInCart ? 'View Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
      <div className="it-shop-content-wrap d-flex justify-content-between align-items-end">
        <div className="it-shop-content">
          <h4 className="it-shop-title">
            <Link href={`/shop-details/${product.id}`}>{product.title}</Link>
          </h4>
          <span>${product.price.toFixed(2)}</span>
        </div>
        <div className="it-shop-ratting">
          {Array.from({ length: 5 }).map((_, starIndex) => (
            <span key={starIndex}>
              <i className="fa-solid fa-star"></i>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ShopItem;
