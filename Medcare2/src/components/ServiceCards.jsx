const services = [
  { img: "src/assets/Homepage/bookappt_icon.svg", title: "Book Appointment" },
  { img: "src/assets/Homepage/report.svg", title: "Download Reports" },
  { img: "src/assets/Homepage/online.svg", title: "Consult Doctors Online" },
  { img: "src/assets/Homepage/buy.svg", title: "Buy Medicines" },
  { img: "src/assets/Homepage/hospital.svg", title: "Nearest Clinics and Hospitals" },
];

const ServiceCards = () => {
  return (
    <div className="services-container">
      {services.map((s, i) => (
        <div key={i} className="service-card">
          <img src={s.img} alt={s.title} className="service-img" />
          <p>{s.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;
