// import { useState } from "react";

function Modal({ children, isOpen }) {
  //   const [isOpen, setIsOpen] = useState(false);
  return <>{isOpen && <div className="modal">{children}</div>}</>;
}

export default Modal;
