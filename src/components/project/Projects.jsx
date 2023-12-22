import "./Projects.css";
import CarouselImages from "../CarouselImages/CarouselImages";

const Project = () => {
  return (
    <>
      <div className="jumbotron" id="contact">
        <h2>Projects:</h2>
        <p>
          Take a moment to explore our diverse portfolio of completed projects.
          At Fox Valley Painters, we pride ourselves on our versatility,
          ensuring that no project is too big or small. From intricate designs
          to comprehensive renovations, our gallery exhibits a testament to our
          craftsmanship and commitment to excellence. We're here to bring your
          visions to life.
        </p>
        <h2>Proyectos:</h2>
        <p>
          Tómese un momento para explorar nuestro diverso portafolio de
          proyectos completados. En Fox Valley Painters, nos enorgullecemos de
          nuestra versatilidad, asegurando que ningún proyecto sea demasiado
          grande o pequeño. Desde diseños intrincados hasta renovaciones
          integrales, nuestra galería exhibe un testimonio de nuestra artesanía
          y compromiso con la excelencia. Estamos aquí para dar vida a sus
          visiones.
        </p>
      </div>
      <CarouselImages />
    </>
  );
};
export default Project;
