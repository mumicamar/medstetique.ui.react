import c1 from '../assets/c1.webp';
import c2 from '../assets/c2.webp';
import c3 from '../assets/c3.webp';
import c4 from '../assets/c4.webp';
import c5 from '../assets/c5.webp';
import c6 from '../assets/c6.webp';
import c7 from '../assets/c7.webp';
import c8 from '../assets/c8.webp';
import c9 from '../assets/c9.webp';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation, Autoplay, Thumbs } from 'swiper/modules';
import { useMediaQuery } from 'react-responsive';

import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css';
import '../theme/Swiper.css';
import { Box } from '@mui/material';

export default function HomePageCarousel() {
  const [thumbsSwiper, setThumbsSwiper] = React.useState<SwiperType | null>(null);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  function StyledImage({ src, alt }: { src: string; alt: string }) {
    return (
      <img
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '10px',
        }}
        src={src}
        alt={alt}
      />
    );
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '100%' }}>
      <Swiper
        loop
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
          marginBottom: '5px',
          maxWidth: '100%',
        }}
        navigation={!isMobile}
        modules={[Navigation, Autoplay, Thumbs]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        spaceBetween={5}
        centeredSlides
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
      >
        <SwiperSlide>
          <StyledImage src={c1} alt="c1" />
        </SwiperSlide>
        <SwiperSlide>
          <StyledImage src={c2} alt="c2" />
        </SwiperSlide>
        <SwiperSlide>
          <StyledImage src={c3} alt="c3" />
        </SwiperSlide>
        <SwiperSlide>
          <StyledImage src={c4} alt="c4" />
        </SwiperSlide>
        <SwiperSlide>
          <StyledImage src={c5} alt="c5" />
        </SwiperSlide>
        <SwiperSlide>
          <StyledImage src={c6} alt="c6" />
        </SwiperSlide>
        <SwiperSlide>
          <StyledImage src={c7} alt="c7" />
        </SwiperSlide>
        <SwiperSlide>
          <StyledImage src={c8} alt="c8" />
        </SwiperSlide>
        <SwiperSlide>
          <StyledImage src={c9} alt="c9" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={5}
        slidesPerView={isMobile ? 3 : 4}
        watchSlidesProgress={true}
        modules={[Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <StyledImage src={c1} alt="c1" />
        </SwiperSlide>
        <SwiperSlide>
          <StyledImage src={c2} alt="c2" />
        </SwiperSlide>
        <SwiperSlide>
          <StyledImage src={c3} alt="c3" />
        </SwiperSlide>
        <SwiperSlide>
          <StyledImage src={c4} alt="c4" />
        </SwiperSlide>
        <SwiperSlide>
          <StyledImage src={c5} alt="c5" />
        </SwiperSlide>
        <SwiperSlide>
          <StyledImage src={c6} alt="c6" />
        </SwiperSlide>
        <SwiperSlide>
          <StyledImage src={c7} alt="c7" />
        </SwiperSlide>
        <SwiperSlide>
          <StyledImage src={c8} alt="c8" />
        </SwiperSlide>
        <SwiperSlide>
          <StyledImage src={c9} alt="c9" />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
