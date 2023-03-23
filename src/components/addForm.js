// import axios from "axios";
import { useState } from "react";
import "./addForm.css";

export const Form = (props) => {
  const [name, setname] = useState("");
  const [desc, setdesc] = useState("");
  const [price, setprice] = useState("");
//   const [image, setimage] = useState();
  const submit = (e) => {
    e.preventDefault();
    console.log(name, desc, price);
    props.addBook(name, desc, price);

    // const formData = new FormData();
    // formData.append("name",name)
    // formData.append("name",name)

    setname("");
    setdesc("");
    setprice("");
  };
  return (
    <form className="form" onSubmit={submit}>
      <label htmlFor="title">Book Name</label>
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Title.."
        value={name}
        onChange={(e) => setname(e.target.value)}
      />

      <label htmlFor="description">Description</label>
      <br />
      <textarea
        name="description"
        id="description"
        cols="172"
        rows="10"
        placeholder="Enter Description"
        value={desc}
        onChange={(e) => setdesc(e.target.value)}
      ></textarea>
      <br />

      <label htmlFor="price">Price</label>
      <input
        value={price}
        onChange={(e) => setprice(e.target.value)}
        type="text"
        id="price"
        name="price"
        placeholder="Price.."
      />

      {/* <div className="imgurl">
        <label htmlFor="image">Image for Book</label>
        <input
          type="file"
          name="image"
          id="image"
          value={image}
          onChange={(e) => setimage(e.target.files[0])}
        />
      </div> */}
      <input type="submit" value="Submit"></input>
    </form>
  );
};
