// import React from "react";
import "./about.css";
import fvpTruck from "../../assets/images/fvpTruck.jpeg";

const About = () => {
  return (
    <div className="jumbotron" id="about">
      <h2>About Us:</h2>
      <p>
        With over 15 years of experience in the contracting industry, our team
        proudly serves the Chicago land area, offering exceptional services in
        both Spanish and English. We have established ourselves as specialists
        in a wide array of services, including General Remodeling, Electric
        Work, Plumbing, Painting, Drywall, Framing, Wood Floor Installation, and
        Tile Installation. Our commitment to excellence drives us to deliver
        top-notch craftsmanship, ensuring each project is handled with precision
        and care. We take pride in transforming spaces and exceeding
        expectations, bringing your visions to life.
      </p>
      <h2>Nosotros:</h2>
      <p>
        Con más de 15 años de experiencia en la industria de la contratación,
        nuestro equipo sirve con orgullo el área metropolitana de Chicago,
        ofreciendo servicios excepcionales en español e inglés. Nos hemos
        establecido como especialistas en una amplia gama de servicios, que
        incluyen Remodelación General, Trabajos Eléctricos, Enmarcar, Plomeria,
        Pintura, Instalación de Tablaroca, Estructuras, Instalación de Pisos de
        Madera e Instalación de Azulejos. Nuestro compromiso con la excelencia
        nos impulsa a entregar artesanía de primera calidad, asegurando que cada
        proyecto sea manejado con precisión y cuidado. Nos enorgullecemos de
        transformar espacios y superar expectativas, dando vida a sus visiones.
      </p>

      <img src={fvpTruck} />
    </div>
  );
};
export default About;
