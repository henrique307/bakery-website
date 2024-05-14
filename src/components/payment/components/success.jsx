import { FooterComponent } from "../../home/footer/footer";
import { HeaderComponent } from "../../home/header/header";
import { SuccessIcon } from "../../../icons";
import { Link } from "react-router-dom";
import "./index.scss";

export function SuccessComponent({ clientEmail }) {
  return (
    <>
      <HeaderComponent />
      <section className="status success">
        <div className="status-container success-container">
          <SuccessIcon />
          <h1 className="status-title success-title">
            Pagamento efetuado com sucesso!
          </h1>
          <span className="status-message success-message">
            Obrigado pela preferência 😁 <br /> Foi enviado um email para{" "}
            {clientEmail} com os detalhes da compra
          </span>
          <Link className="action-button" to={"/"}>Voltar ao inicio</Link>
        </div>
      </section>
      <FooterComponent />
    </>
  );
}
