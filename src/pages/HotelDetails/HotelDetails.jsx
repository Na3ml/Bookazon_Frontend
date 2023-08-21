import React from "react";
import HotelNavigate from "../../components/HotelDetailsComp/HotelNavigate/HotelNavigate";
import Location from "../../components/HotelDetailsComp/Location/Location";

const HotelDetails = () => {
  return (
    <div>
      <HotelNavigate />

      <section id="description" style={{ marginTop: "300px" }}>
        <h1> About</h1>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, nam!
          Iure officia aut esse tempore accusantium explicabo? Corporis deleniti
          ipsa fuga quas aut neque dicta nostrum laboriosam, iusto ullam minima
          est porro, totam saepe. Facilis aliquid praesentium, voluptates rem
          quibusdam sequi numquam illo eius adipisci eaque, necessitatibus
          consectetur, labore vero et ipsum. Officiis, ea vero. Praesentium, et.
          Enim, nostrum illo.
        </p>
      </section>

      <section id="amenities" style={{ marginTop: "300px" }}>
        <h1> amenities </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, nam!
          Iure officia aut esse tempore accusantium explicabo? Corporis deleniti
          ipsa fuga quas aut neque dicta nostrum laboriosam, iusto ullam minima
          est porro, totam saepe. Facilis aliquid praesentium, voluptates rem
          quibusdam sequi numquam illo eius adipisci eaque, necessitatibus
          consectetur, labore vero et ipsum. Officiis, ea vero. Praesentium, et.
          Enim, nostrum illo.
        </p>
      </section>

      <section id="room" style={{ marginTop: "300px" }}>
        <h1> room </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, nam!
          Iure officia aut esse tempore accusantium explicabo? Corporis deleniti
          ipsa fuga quas aut neque dicta nostrum laboriosam, iusto ullam minima
          est porro, totam saepe. Facilis aliquid praesentium, voluptates rem
          quibusdam sequi numquam illo eius adipisci eaque, necessitatibus
          consectetur, labore vero et ipsum. Officiis, ea vero. Praesentium, et.
          Enim, nostrum illo.
        </p>
      </section>

      <section id="rating-reviews" style={{ marginTop: "300px" }}>
        <h1> rating </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, nam!
          Iure officia aut esse tempore accusantium explicabo? Corporis deleniti
          ipsa fuga quas aut neque dicta nostrum laboriosam, iusto ullam minima
          est porro, totam saepe. Facilis aliquid praesentium, voluptates rem
          quibusdam sequi numquam illo eius adipisci eaque, necessitatibus
          consectetur, labore vero et ipsum. Officiis, ea vero. Praesentium, et.
          Enim, nostrum illo.
        </p>
      </section>
      <Location />
    </div>
  );
};

export default HotelDetails;
