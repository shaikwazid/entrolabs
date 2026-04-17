import React from "react";
import "./Clients.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import SectionTitle from "../SectionTitle/SectionTitle";

// ✅ Load all images from folder (CRA only)
function importAll(r) {
  return r.keys().map(r);
}

const clients = importAll(
  require.context("../../assets/clients", false, /\.(png|jpe?g|svg)$/)
);

// chunk into 12
const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const groupedClients = chunkArray(clients, 12);

const Clients = () => {
  return (
    <div className="clients-wrapper">
      <SectionTitle
        badge="Our Clients"
        title="Companies That Trust"
        highlight="Us"
      />



      <div className="container">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        >
          {groupedClients.map((group, index) => (
            <SwiperSlide key={index}>
              <div className="grid">
                {group.map((logo, i) => (
                  <div className="card" key={i}>
                    <div className="card-body">
                      <img src={logo} alt="client" />
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  );
};

export default Clients;