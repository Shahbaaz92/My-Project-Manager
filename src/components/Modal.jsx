import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

import Button from "./Button";

function Modal({ children, ref }) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 bg-stone-200 text-stone-800 p-8 rounded-md shadow-lg m-auto"
    >
      {children}
      <form mathod="dialog" className="mt-4 text-right">
        <Button>Close</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
}

export default Modal;
