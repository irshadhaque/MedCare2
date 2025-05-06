import { FaChevronDown } from "react-icons/fa";

const FAQItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className="faq-item">
      <div
        className="faq-question"
        onClick={onClick}
        style={{
          cursor: "pointer",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <FaChevronDown
            style={{
              transition: "transform 0.3s ease",
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
          {faq.question}
        </span>
      </div>
      {isOpen && (
        <div className="faq-answer" style={{ marginTop: "0.5rem", color: "#555" }}>
          {faq.answer}
        </div>
      )}
    </div>
  );
};

export default FAQItem;

  