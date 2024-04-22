import { Close } from "../../../icons/index";
import "./sideContent.scss";

export function SideContentComponent(props) {
  //   const [open, setOpen] = useState(true);

  return (
    <section className="sideContent-container">
      <div className={`sideContent ${props.open ? "open" : ""}`}>
      <Close onClick={() => props.setOpen(false)} />
        {props.children}
      </div>
      <div
        onClick={() => props.setOpen(false)}
        className={`overlay ${props.open ? "" : "hidden"}`}
      ></div>
    </section>
  );
}
