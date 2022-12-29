import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Accordionn = ({ question }) => {
  return (
    <Accordion className="container">
      {question.map((item) => {
        return (
          <Accordion.Item
            className="mb-3 shadow-sm"
            key={item.id}
            eventKey={item.id}
          >
            <Accordion.Header>{item.title}</Accordion.Header>
            <Accordion.Body>{item.info}</Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};

export default Accordionn;
