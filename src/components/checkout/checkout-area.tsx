'use client';

import { useEffect, useState } from 'react';
import { useAppSelector } from '@/hooks/redux-hooks';
import {
  selectCartItems,
  selectCartTotal,
} from '@/redux/selectors/cart-selector';

const CheckoutArea = () => {
  const cartItems = useAppSelector(selectCartItems); // Selector to get cart items
  const cartTotal = useAppSelector(selectCartTotal);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className="checkout__area pt-95 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8">
            <div
              className="checkout__wrapper pb-10 it-fade-anim"
              data-fade-from="bottom"
              data-delay=".5"
            >
              <span>Billing Details:</span>
              <div className="checkout__content">
                <form action="#">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="checkout__input">
                        <input type="text" placeholder="First Name*" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="checkout__input">
                        <input type="text" placeholder="Last Name*" />
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12">
                      <div className="checkout__input">
                        <input type="email" placeholder="Email*" />
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12">
                      <div className="checkout__input">
                        <input type="text" placeholder="Company Name*" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div
              className="checkout__wrapper pb-30 it-fade-anim"
              data-fade-from="bottom"
              data-delay=".5"
            >
              <span>Billing Details:</span>
              <div className="checkout__content">
                <form action="#">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="checkout__input">
                        <input type="text" placeholder="Postcode*" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="checkout__input">
                        <input type="text" placeholder="City*" />
                      </div>
                    </div>
                    <div className="col-xl-12 col-12">
                      <div className="checkout__input">
                        <input type="email" placeholder="Email*" />
                      </div>
                    </div>
                    <div className="col-xl-12 col-12">
                      <div className="checkout__input">
                        <input type="text" placeholder="House No*" />
                      </div>
                    </div>
                    <div className="col-xl-12 col-12">
                      <div className="checkout-form-list create-acc">
                        <input id="box" type="checkbox" />
                        <label htmlFor="box">
                          I agree with the Team of service
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-4 it-fade-anim"
            data-fade-from="bottom"
            data-delay=".5"
          >
            <div className="checkout__summary-wrapper">
              <div className="checkout__item">
                <div className="checkout__list-item">
                  <b>Order summary:</b>
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="checkout__summary-list d-flex justify-content-between"
                    >
                      <span>
                        {item.title} - {item.quantity} x ${item.price}
                      </span>
                      <span>USD ${item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>
                <div className="checkout__bottom d-flex justify-content-between">
                  <span>Total</span>
                  <span>USD ${cartTotal}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="checkout__btn">
              <a className="it-btn-red black" href="#">
                <span>Tap To Pay</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CheckoutArea;
