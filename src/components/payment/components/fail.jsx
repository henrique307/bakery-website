import { FooterComponent } from "../../footer/footer";
import { HeaderComponent } from "../../header/header";
import { FailIcon } from "../../../icons";
import { Link } from "react-router-dom";
import "./index.scss";

export function FailComponent() {
  return (
    <>
      <HeaderComponent />
      <section className="status fail">
        <div className="status-container fail-container">
          <FailIcon />
          <h1 className="status-title fail-title">
            Pagamento recusado!
          </h1>
          <span className="status- message fail-message">
            Por favor <Link to={"/checkout"}>tente novamente</Link>, ou entre em
            contato com nossa equipe em: <br /> henrique.florencio307@gmail.com
          </span>
          <Link to={"/"}>Voltar ao inicio</Link>
        </div>
      </section>
      <FooterComponent />
    </>
  );
}
