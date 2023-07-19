import { Hero } from "../../../components/Hero/Hero";
import { LinkCard } from "../../../components/LinkCard/LinkCard";
import mapAndPhoto from "../../../assets/images/map-photo.jpeg";
import questionsImg from "../../../assets/images/questions.jpeg";
import skyImg from "../../../assets/images/sky-1.jpeg";
import riversImg from "../../../assets/images/rivers.jpg";
import cloudySkyImg from "../../../assets/images/cloudy-sky.jpg";
import stormSkyImg from "../../../assets/images/storm-sky.webp";
import planetImg from "../../../assets/images/planet.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import "./Home.scss";

export const Home = () => {
  const homeLinksInfo = [
    {
      text: "Test",
      link: "/test",
      img: mapAndPhoto,
    },
    {
      text: "Savollar",
      link: "/questions",
      img: questionsImg,
    },
    {
      text: "Javoblarni birlashtiring",
      link: "/combine-answers",
      img: skyImg,
    },
    {
      text: "Daryolar",
      link: "/rivers",
      img: riversImg,
    },
    {
      text: "Dengizlar",
      link: "/seas",
      img: mapAndPhoto,
    },
    {
      text: "Azimut masalalar",
      link: "/azimuth-issues",
      img: cloudySkyImg,
    },
    {
      text: "Avstralia iqlimi",
      link: "/australian-climate",
      img: stormSkyImg,
    },
    {
      text: "Hind okeani nomenklaturasi",
      link: "/indian-ocean",
      img: planetImg,
    },
  ];

  return (
    <>
      <section className="site-home-tasks">
        <div className="container">
          <Hero />
          <ul className="site-home-tasks-list">
            <Swiper
              slidesPerView={3.6}
              spaceBetween={50}
              freeMode={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination, Autoplay]}
              className="mySwiper">
              {homeLinksInfo.map((item, index) => (
                <SwiperSlide>
                  <li className="site-home-tasks-item" key={index}>
                    <LinkCard obj={item} />
                  </li>
                </SwiperSlide>
              ))}
            </Swiper>
          </ul>
        </div>
      </section>
    </>
  );
};
