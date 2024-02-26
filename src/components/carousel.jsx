'use client';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel({children, className, settings}) {
  return (
    <Slider className={className} {...settings}>
      {children}
    </Slider>
  );
}