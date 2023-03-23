import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Signin } from "./components/signin";
import { Login } from "./components/login";
import { Form } from "./components/addForm";
import { List } from "./components/list";
import { Nav } from "./components/navigate";
import { useState, useEffect } from "react";

function App() {
  const isLoggedIn = false;
  const [data, setdata] = useState([]);

  const fetchData = () => {
    axios.get("http://172.16.16.147:3100/listbook").then((responses) => {
      console.log("response->", responses.data.data);
      setdata(responses.data.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addBook = async (name, desc, price) => {
    console.log(name, desc, price);
    const payload = {
      title: name,
      description: desc,
      price: price,
    };
    await axios({
      method: "post",
      url: "http://172.16.16.147:3100/addBook",
      data: payload, // you are sending body instead
      headers: {
        "Content-Type": "application/json",
      },
    });
    fetchData();
  };

  if (isLoggedIn) {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Signin />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  } else {
    return (
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Form addBook={addBook} />} />
            <Route path="/view" element={<List data={data} />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
