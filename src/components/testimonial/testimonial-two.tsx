'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { getTestimonialDataTwo } from '@/data/testimonial-data';
import { useLanguage } from '@/context/language-context';

import shapeImg from '@/assets/img/testimonial/shape-2-3.png';
import bgImg from '@/assets/img/testimonial/test-bg.png';
import avatarImg from '@/assets/img/avata/avata-1.png';

const TestimonialTwo = () => {
  const { t } = useLanguage();
  const testimonialDataTwo = getTestimonialDataTwo(t);
  const topSliderRef = useRef<Slider | null>(null);
  const bottomSliderRef = useRef<Slider | null>(null);
  const [topSlider, setTopSlider] = useState<Slider | undefined>(undefined);
  const [bottomSlider, setBottomSlider] = useState<Slider | undefined>(
    undefined
  );

  useEffect(() => {
    setTopSlider(topSliderRef.current || undefined);
    setBottomSlider(bottomSliderRef.current || undefined);
  }, []);

  // Slider Options for top
  const topSliderOptions = {
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    focusOnSelect: true,
    centerPadding: '0',
    centerMode: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  // Slider Options for bottom
  const bottomSliderOptions = {
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    dots: true,
  };

  return (
    <div className="it-testimonial-2-area p-relative theme-bg pt-120 pb-120">
      <div className="it-testimonial-2-shape-1 d-none d-xxl-block">
        <Image src={shapeImg} alt="shape-img" width={250} height={225} />
      </div>
      <div className="it-testimonial-2-bg">
        <Image
          className="image-height-auto"
          src={bgImg}
          alt="testimonial-bg"
          width={1920}
          height={596}
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="it-testimonial-2-top-wrap it-testimonial-2-top-slider-active">
              <Slider
                asNavFor={bottomSlider}
                ref={topSliderRef}
                {...topSliderOptions}
              >
                {testimonialDataTwo.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="it-testimonial-main-wrap"
                  >
                    <div className="it-testimonial-2-top-slider-item d-flex justify-content-center align-items-center">
                      <div className="it-testimonial-2-avatar">
                        <Image
                          src={testimonial.avatar || avatarImg}
                          alt="avatar"
                          width={60}
                          height={60}
                        />
                      </div>
                      <div className="it-testimonial-2-content">
                        <h4 className="it-testimonial-2-title">
                          {testimonial.author}
                        </h4>
                        <span>{testimonial.designation}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="it-testimonial-2-bottom-wrap it-testimonial-2-bottom-slider-active">
              <Slider
                asNavFor={topSlider}
                ref={bottomSliderRef}
                {...bottomSliderOptions}
              >
                {testimonialDataTwo.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="it-testimonial-2-bottom-slider-item"
                  >
                    <p>{testimonial.description}</p>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestimonialTwo;
