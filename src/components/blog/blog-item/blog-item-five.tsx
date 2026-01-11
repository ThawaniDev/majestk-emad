'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import blogImg from '@/assets/img/blog/blog-sidebar-1.jpg';
import { IBlogDT } from '@/types/blog-d-t';

import { getBlogDataFive } from '@/data/blog-data';
import { useLanguage } from '@/context/language-context';

// Prop Types
interface BlogItemProps {
  blog: IBlogDT;
  index: number;
}

const BlogItemFive = ({ blog, index }: BlogItemProps) => {
  const { t } = useLanguage();
  const blogDataFive = getBlogDataFive(t);
  // Swiper Slider Options
  const sliderOption: SwiperOptions = {
    speed: 1000,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
      delay: 2500,
    },
    effect: 'fade',
    navigation: {
      prevEl: '.postbox-arrow-prev',
      nextEl: '.postbox-arrow-next',
    },
  };
  return (
    <div
      className={`postbox__thumb-box ${
        index !== blogDataFive.length - 1 ? 'mb-80' : ''
      }`}
    >
      {blog?.images ? (
        <div className="it-postbox__wrapper p-relative mb-30">
          <div className="swiper-container postbox__thumb-slider-active">
            <Swiper
              modules={[Autoplay, Navigation, EffectFade]}
              {...sliderOption}
              className="swiper-wrapper"
            >
              {blog?.images.map((image, i) => (
                <SwiperSlide key={i} className="swiper-slide">
                  <div className="postbox__main-thumb">
                    <Image
                      className="image-height-auto"
                      src={image}
                      alt="blog-img"
                      width={740}
                      height={450}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="postbox__slider-arrow-wrap">
            <button className="postbox-arrow-prev">
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button className="postbox-arrow-next">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      ) : (
        <div className="postbox__main-thumb mb-30">
          <Image
            className="image-height-auto"
            src={blog.image || blogImg}
            alt="blog-img"
            width={740}
            height={450}
          />
        </div>
      )}

      <div className="postbox__content-box">
        <div className="postbox__meta">
          <span>
            <i className="fa-light fa-calendar-days"></i>
            {blog.publishedDate}
          </span>
          <span>
            <i className="fal fa-user"></i>
            {blog.author}
          </span>
        </div>
        <h4 className="postbox__details-title">
          <Link href={`/blog-details/${blog.id}`}>{blog.title}</Link>
        </h4>
        <Link className="it-btn-main mt-15" href={`/blog-details/${blog.id}`}>
          <span>{blog.btnText}</span>
        </Link>
      </div>
    </div>
  );
};
export default BlogItemFive;
