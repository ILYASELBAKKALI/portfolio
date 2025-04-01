import React from "react";
// import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const testimonials = [
  {
    name: "Matias Butt",
    job: "Photographer, Paris",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    name: "Romeo Herbert",
    job: "CEO, Munich",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    name: "Jack Costa",
    job: "Director of THR, London",
    text: "Cupiditate voluptatum enim nemo quod amet dolorum aliquam.",
  },
  {
    name: "Reiss Mccartney",
    job: "Engineer, San Francisco",
    text: "Perspiciatis ab incidunt, dicta quam inventore ipsum dolor.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h3 className="title">What People Say</h3>
      <Swiper navigation={true} modules={[Navigation]}>
        {testimonials.map((t, index) => (
          <SwiperSlide key={index} className="review">
            <p className="review-text">{t.text}</p>
            <h3 className="review-name">{t.name}</h3>
            <h5 className="review-job">{t.job}</h5>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;