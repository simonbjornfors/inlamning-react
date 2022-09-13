import { useState } from "react";
import "../css/style.css"

const UserForm = () => {

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Mario");

  const handleSubmit = (e) => {
    e.preventDefault()
    const formInput = {title, body, author}
    console.log(formInput)
  }

  return (
    <div className="container">
      <h2>Contact form</h2>
      <form className="sub-container" onSubmit={handleSubmit}>
        <div className="form-subject">
          <label for="subject">Subject</label>
          <input 
            id="subject"
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
        </div>
        <div className="form-body">
          <label for="body">Message</label>
          <textarea
          id="body"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows="10"
          ></textarea>
        </div>
        <div className="form-author">
          <label for="author">author</label>
          <select
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="Mario">Mario</option>
            <option value="Lugi">Lugi</option>
            <option value="Yoshi">Yoshi</option>
          </select>
        </div>
        <button className="add-btn">Send</button>
      </form>
    </div>
  );
}
export default UserForm