'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAppDispatch } from '@/hooks/redux-hooks';
import { addItemToCart } from '@/redux/slices/cart-slice';
import { IProductDT } from '@/types/product-d-t';
import productImg from '@/assets/img/shop/shop-10.jpg';
import { Star } from '@/components/svg';
import DetailsReviewBox from './details-review-box';
import DetailsContact from './details-contact';
import DetailsDescription from './details-description';

interface ShopDetailsProps {
  product: IProductDT;
}

const ShopDetailsArea = ({ product }: ShopDetailsProps) => {
  const {
    title = 'Unknown Product',
    price = 0,
    reviewCount = 0,
    sku = '0',
    category = 'no category',
    tag = 'no tag',
    detailsImg = productImg,
    description = 'No Description',
    socials = [],
  } = product || {};
  const [quantity, setQuantity] = useState<number>(1);
  const dispatch = useAppDispatch();

  // handler to increment quantity
  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  // handler to Decrement quantity
  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  // Handler to add item to cart
  const handleAddToCart = () => {
    if (product) {
      dispatch(addItemToCart({ product: product, quantity }));
      setQuantity(1);
    }
  };

  return (
    <div className="it-shop-details__area black-bg pt-120 pb-120">
      <div className="container">
        <div className="it-shop-details__top-wrap">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="it-shop-details__thumb-box">
                <Image
                  className="image-height-auto"
                  src={detailsImg}
                  alt={title}
                  width={570}
                  height={576}
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="it-shop-details__right-wrap">
                <h3 className="it-shop-details__title-sm">{title}</h3>
                <div className="it-shop-details__price">
                  <div className="it-shop-details__ratting">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <span key={starIndex}>
                        <Star />
                      </span>
                    ))}
                    <span className="review-text">
                      ({reviewCount} Customer reviews)
                    </span>
                  </div>
                  <span>${price.toFixed(2)}</span>
                </div>
                <div className="it-shop-details__text pb-20">
                  <p dangerouslySetInnerHTML={{ __html: description }}></p>
                </div>
                <div className="it-shop-details__quantity-wrap">
                  <div className="it-shop-details__quantity-box d-flex align-items-center">
                    <span>Quantity</span>
                    <div className="it-shop-details__quantity">
                      <div
                        className="cart-minus"
                        onClick={() => handleDecrement()}
                      >
                        <i className="fal fa-minus"></i>
                      </div>
                      <input
                        type="text"
                        id="quantity"
                        min="1"
                        value={quantity}
                        readOnly
                      />
                      <div
                        className="cart-plus"
                        onClick={() => handleIncrement()}
                      >
                        <i className="fal fa-plus"></i>
                      </div>
                    </div>
                    <div className="it-shop-details__btn">
                      <button
                        className="it-btn-red"
                        onClick={() => {
                          handleAddToCart();
                        }}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                  <div className="it-shop-details__text-2 pb-15">
                    <span>
                      <strong>SKU:</strong> {sku}
                    </span>
                    <span>
                      <strong>Category: </strong> {category}
                    </span>
                    <span>
                      <strong>Tag: </strong> {tag}
                    </span>
                  </div>
                  <div className="it-shop-details__social">
                    <span>Share:</span>
                    {socials.map((social, i) => (
                      <Link key={i} href={social.link}>
                        <i className={social.icon}></i>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xl-12">
            <DetailsDescription />
          </div>
          <div className="col-xl-12">
            <DetailsReviewBox />
          </div>
          <div className="col-xl-12">
            <DetailsContact />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShopDetailsArea;
