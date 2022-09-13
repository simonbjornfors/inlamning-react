import React, {useState, useEffect} from "react";
import ReactMarkdown from "markdown-to-jsx";
import ReadMeMarkdown from "../README.md";

const ReadMe = () => {
  let [readable, setReadable] = useState({ md: "" });

  useEffect(() => {
    fetch(ReadMeMarkdown)
      .then((res) => res.text())
      .then((md) => {
        setReadable({ md });
      });
  }, []);

  return (
    <div className="container">
      <ReactMarkdown children={readable.md} />
    </div>
  );
}
export default ReadMe