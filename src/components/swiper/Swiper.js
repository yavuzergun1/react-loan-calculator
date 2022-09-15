import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./swiper.scss";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      breakpoints={{
        1500: { slidesPerView: 4, spaceBetween: 5 },
        1190: { slidesPerView: 3, spaceBetween: 5 },
        870: { slidesPerView: 2, spaceBetween: 5 },
        450: { slidesPerView: 1, spaceBetween: 5 },
      }}
    >
      <SwiperSlide>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREVwRYPT8xJOdxUoO6UiWDw0bL3eHOPEX7mA&usqp=CAU"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQmyRUcYt383qhkO5H5MF8BAxxP0Q3c2JaFw&usqp=CAU"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgqtu4FefiCEGOc4xBk0vb-9pZjEGCtQC_mQ&usqp=CAU"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQlQFqvjOzL4ceNPN2DE-VXK-CltEZSHYlGw&usqp=CAU"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1m66LwYRXwlVxLjVWxBuXUrphF_cXBSE8wQ&usqp=CAU"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMepK5pmPCseUFcB-BZNOjh9fksbdM92rGPA&usqp=CAU"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIzjaHHMNQfbyuZkX_am9Ph4E1oyCO80JvlA&usqp=CAU"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgqtu4FefiCEGOc4xBk0vb-9pZjEGCtQC_mQ&usqp=CAU"
          alt=""
        />
      </SwiperSlide>
      ...
    </Swiper>
  );
};
