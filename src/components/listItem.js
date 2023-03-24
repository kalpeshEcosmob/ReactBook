import "../components/listItem.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const ListItem = ({ todo }) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header>
          <Modal.Title>{todo.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <article className="card product-item">
            <div className="card__header">
              <h1 className="product__title">{todo.title}</h1>
            </div>
            <div className="card__image">
              <img src="" alt="nothing to display" />
            </div>
            <div className="card__content">
              <h2 className="product__price">{todo.price}</h2>
              <p className="product__description">{todo.description}</p>
            </div>
          </article>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <article className="card product-item">
        <div className="card__header">
          <h1 className="product__title">{todo.title}</h1>
        </div>
        <div className="card__image">
          <img src="" alt="nothing to display" />
        </div>
        <div className="card__content">
          <h2 className="product__price">{todo.price}</h2>
          <p className="product__description">{todo.description}</p>
        </div>
        <div className="card__actions">
          <button
            href=""
            className="btn"
            onClick={() => {
              setShow(!show);
              console.log("===", show);
            }}
          >
            Details
          </button>
          <button className="btnew" type="submit">
            Add to Cart
          </button>
        </div>
      </article>
    </div>
  );
};
