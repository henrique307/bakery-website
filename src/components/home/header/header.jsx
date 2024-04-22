import { useState } from "react";
import { Carrinho, SideBar, Coracao } from "../../../icons";
import { SideContentComponent } from "../../utils/sideContent/SideContent.jsx";
import { CarrinhoComponent } from "./components/carrinho/carrinho.jsx";
import { FavsComponent } from "./components/favComponent/favs.jsx";
// import { FavComponent } from "./components/fav/fav.jsx";
import { Logo } from "../../utils/logo/Logo.component.jsx";
import "./header.scss";
import { Link } from "react-router-dom";

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
          </div>
          <Link to="/bakery-website">
            <li className="text-lg p-1">Home</li>
          </Link>
          <a href="#products">
            <li className="text-lg p-1">Products</li>
          </a>
          <a href="#about">
            <li className="text-lg p-1">About</li>
          </a>{" "}
          {/*faz pagina de about depois*/}
          <a href="#blog">
            <li className="text-lg p-1">Blog</li>
          </a>
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
        <SideContentComponent
          open={favTabOpen}
          setOpen={setFavTabOpen}
        >
          <FavsComponent />
        </SideContentComponent>
        <div className="icons-container flex">
          <Carrinho onClick={() => setCarrinhoTabOpen(true)} />
          <Coracao onClick={() => setFavTabOpen(true)} />
        </div>
      </div>
    </section>
  );
}
