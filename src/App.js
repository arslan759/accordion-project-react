import { useState } from "react";
import Accordionn from "./Accordion";
import questions from "./data";

function App() {
  const [question, setQuestion] = useState(questions);
  return (
    <main
      style={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <section className="bg-white w-md-50 px-4 py-3">
        <div className="d-md-flex">
          <div className="col-md-3">
            <h4>Questions And Answers About Login</h4>
          </div>
          <div className="col-md-9">
            <Accordionn question={question} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
