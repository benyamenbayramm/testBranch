import { open, closed } from "../pages/reducers/modelSlice";
import { useDispatch } from "react-redux";
import { clearCart } from "../pages/reducers/cartSlice";
const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button
            type="button"
            onClick={() => {
              dispatch(closed());
              dispatch(clearCart());
            }}
            className="btn confirm-btn"
          >
            confirm
          </button>
          <button
            type="button"
            onClick={() => dispatch(closed())}
            className="btn clear-btn"
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};
export default Modal;
