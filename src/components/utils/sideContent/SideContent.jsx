import { useEffect } from "react";
import { Close } from "../../../icons/index";
import "./sideContent.scss";

export function SideContentComponent(props) {
  useEffect(() => {
    if (props.open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [props.open]);

  return (
    <section className="sideContent-container">
      <div className={`sideContent ${props.open ? "open" : ""}`}>
        <span className="empty">{props.isEmpty.message}</span>

        <Close onClick={() => props.setOpen(false)} />

        {props.children}
      </div>

      <div
        onClick={() => props.setOpen(false)}
        className={`overlay ${props.open ? "" : "hidden"}`}
      />
    </section>
  );
}
