import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { addQuote } from "./quotesSlice";
import { useDispatch } from "react-redux";

function QuoteForm() {
  const id = uuid()
  const [formData, setFormData] = useState({
      content: '',
      author: '',
      id: id
  });

  const dispatch = useDispatch()

  function handleChange(event) {
    setFormData({
      content: event.target.name === "content" ? event.target.value : formData.content,
      author: event.target.name === "author" ? event.target.value : formData.author,
      id: id
  })
  }

  function handleSubmit(event) {
    event.preventDefault()
    dispatch(addQuote(formData))
    setFormData({
      content: '',
      author: ''
    })
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="panel panel-default">
            <div className="panel-body">
              <form className="form-horizontal"  onSubmit={handleSubmit} >
                <div className="form-group">
                  <label htmlFor="content" className="col-md-4 control-label">
                    Quote
                  </label>
                  <div className="col-md-5">
                    <textarea
                      className="form-control"
                      name="content"
                      id="content"
                      value={formData.content}
                      onChange={e => handleChange(e)}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="author" className="col-md-4 control-label">
                    Author
                  </label>
                  <div className="col-md-5">
                    <input
                      className="form-control"
                      type="text"
                      id="author"
                      name="author"
                      value={formData.author}
                      onChange={e => handleChange(e)}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-md-6 col-md-offset-4">
                    <button type="submit" className="btn btn-default">
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuoteForm;
