import { useState, useContext } from "react";
import { Lupa, Carrinho, SideBar, Coracao } from "../../icons";
import { SideContentComponent } from "../utils/sideContent/SideContent.jsx";
import { CarrinhoComponent } from "./components/carrinho/carrinho.jsx";
// import { FavComponent } from "./components/fav/fav.jsx";
import { Logo } from "../utils/logo/Logo.component.jsx";
import "./header.scss";

export function HeaderComponent() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [carrinhoTabOpen, setCarrinhoTabOpen] = useState(false);
  const [favTabOpen, setFavTabOpen] = useState(false);

  return (
    <section className="header w-full p-5 text-white">
      <div className="header-container w-full mx-auto flex justify-between">
        <SideBar onClick={() => setMobileNavOpen(!mobileNavOpen)} />
        <Logo />
        <ul className={`nav flex ${mobileNavOpen ? "open" : ""}`}>
          <div className="mobile-nav-header hidden">
            <Logo />
            <Coracao />
          </div>
          <li className="text-lg p-1">Home</li>
          <li className="text-lg p-1">Catalogo</li>
          <li className="text-lg p-1">Sobre</li>
          <li className="text-lg p-1">Blog</li>
        </ul>
        <div
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className={`${mobileNavOpen ? "" : "hidden"} mobile-overlay`}
        ></div>
        <SideContentComponent
          open={carrinhoTabOpen}
          setOpen={setCarrinhoTabOpen}
        >
          <CarrinhoComponent />
        </SideContentComponent>
        {/* <SideContentComponent
          open={favTabOpen}
          setOpen={setFavTabOpen}
        >
          <FavComponent />
        </SideContentComponent> */}
        <div className="icons-container flex">
          <Lupa />
          <Carrinho onClick={() => setCarrinhoTabOpen(true)} />
          <Coracao />
        </div>
      </div>
    </section>
  );
}
