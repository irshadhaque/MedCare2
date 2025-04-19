const FAQSection = () => {
  const faqs = [
      {
        question: "How do I book an appointment?",
        answer: "You can easily book an appointment by navigating to our booking section, selecting your preferred clinic or hospital, choosing a date and time, and filling out the required information."
      },
      {
        question: "Can I access my medical reports online?",
        answer: "Yes! Once your tests are completed, you will receive an email notification, and you can access your reports directly through our website in your account."
      },
      {
        question: "What should I do if I have trouble accessing my reports?",
        answer: "If you're experiencing any issues, please reach out to our customer support team through the contact page, and we’ll assist you promptly."
      },
      {
        question: "Are online consultations available?",
        answer: "Absolutely! We offer online consultations with qualified healthcare professionals. Simply choose the 'Online Consultation' option and select a suitable time for your appointment."
      },
      {
        question: "Is there a fee for online consultations?",
        answer: "Yes, online consultations may have a fee, which will be displayed during the booking process. We strive to keep our rates competitive and transparent."
      },
      {
        question: "What types of clinics and hospitals can I book through your site?",
        answer: "We partner with various clinics and hospitals, including general practice, specialists, and diagnostic centers. You can browse our extensive list to find the right provider for your needs."
      },
      {
        question: "How do I change or cancel my appointment?",
        answer: "To change or cancel your appointment, go to your account dashboard, locate your upcoming appointments, and follow the prompts to make adjustments."
      },
      {
        question: "Can I book appointments for someone else?",
        answer: "Yes, you can book appointments on behalf of family members or friends. Just provide their details during the booking process."
      },
      {
        question: "Is my personal information safe with your website?",
        answer: "Yes, we take your privacy seriously. All personal information is encrypted and stored securely in accordance with data protection regulations."
      },
      {
        question: "How can I contact customer support?",
        answer: "You can reach our customer support team through the contact form on our website, or by emailing us directly at [your email address]. We’re here to help!"
      }
    
  ];

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, i) => (
        <details key={i}>
          <summary>{faq.question}</summary>
          <p>{faq.answer}</p>
        </details>
      ))}
    </div>
  );
};
export default FAQSection;
