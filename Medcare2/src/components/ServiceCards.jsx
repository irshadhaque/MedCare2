import bookApptIcon from "../assets/Homepage/bookappt_icon.svg";
import reportIcon from "../assets/Homepage/report.svg";
import onlineIcon from "../assets/Homepage/online.svg";
import buyIcon from "../assets/Homepage/buy.svg";
import hospitalIcon from "../assets/Homepage/hospital.svg";

const services = [
  { img: bookApptIcon, title: "Book Appointment" },
  { img: reportIcon, title: "Download Reports" },
  { img: onlineIcon, title: "Consult Doctors Online" },
  { img: buyIcon, title: "Buy Medicines" },
  { img: hospitalIcon, title: "Nearest Clinics and Hospitals" },
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
