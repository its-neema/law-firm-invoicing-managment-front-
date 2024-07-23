import React from 'react'
import { FaBalanceScale, FaFileInvoiceDollar, FaClipboardCheck, FaGavel } from "react-icons/fa";
import Title from './Title';

const Services = () => {
    const service = {
      services: [
        {
          icon: <FaBalanceScale color='blue' size={42}/>,
          title: "Legal Consultation",
          info: "Get expert legal advice and consultation tailored to your specific needs.",
        },
        {
          icon: <FaFileInvoiceDollar color='blue' size={42}/>,
          title: "Transparent Invoicing",
          info: "Experience transparent and accurate invoicing for all legal services rendered.",
        },
        {
          icon: <FaClipboardCheck color='blue' size={42}/>,
          title: "Compliance Assurance",
          info: "Ensure compliance with legal regulations and standards with our comprehensive services.",
        },
        {
          icon: <FaGavel color='blue' size={42}/>,
          title: "Litigation Support",
          info: "Receive dedicated support and representation in legal disputes and litigation processes.",
        },
      ],
    };
    return (
      <div className="container-fluid services">
        <Title title="Services" />
        <div className="row">
          {service.services.map((item, index) => {
            return (
              <div
                className="col-md-4 col-lg-3 col-12 mx-auto my-3"
                key={index}
              >
                <div className="card shadow-lg border-0 p-4">
                  <article className="service">
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                  </article>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
}

export default Services
