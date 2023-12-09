import "./contact.css";

const Contact = () => {
  return (
    <div className="jumbotron" id="contact">
      <p>
        Contact us today to schedule an appointment and receive a comprehensive
        estimate tailored to your project needs.
      </p>
      <p>
        Contáctenos hoy para programar una cita y recibir un presupuesto
        integral adaptado a las necesidades de su proyecto.
      </p>

      <div>
        <h2>Business Hours/ Horario</h2>

        <ul>Monday/Lunes: 8:00 AM - 6:00 PM </ul>
        <ul>Tuesday/Martes: 8:00 AM - 6:00 PM </ul>
        <ul>Wednesday/Miercoles: 8:00 AM - 6:00 PM</ul>
        <ul>Thursday/Jueves: 8:00 AM - 6:00 PM</ul>
        <ul>Friday/Viernes: 8:00 AM - 6:00 PM</ul>
        <ul>Saturday/Sabado: 8:00 AM - 6:00 PM</ul>
      </div>
      <a href="mailto:foxvalleypainters21@gmail.com">
        Contact us via Email: foxvalleypainters21@gmail.com
      </a>
      <br />
      <a href="tel:+18473466654">Call us: 847-346-6654</a>
    </div>
  );
};
export default Contact;
