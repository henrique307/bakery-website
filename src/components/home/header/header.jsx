import { useState } from "react";
import { Carrinho, SideBar, Coracao } from "../../../icons";
import { SideContentComponent } from "../../utils/sideContent/SideContent.jsx";
import { CarrinhoComponent } from "./components/carrinho/carrinho.jsx";
import { FavsComponent } from "./components/favComponent/favs.jsx";
// import { FavComponent } from "./components/fav/fav.jsx";
import { Logo } from "../../utils/logo/Logo.component.jsx";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { HashLink } from "react-router-hash-link";
import "./header.scss";

export function HeaderComponent() {
  const carrinho = useSelector((state) => state.carrinho);
  const favs = useSelector((state) => state.fav);

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [carrinhoTabOpen, setCarrinhoTabOpen] = useState(false);
  const [favTabOpen, setFavTabOpen] = useState(false);

  function closeMobileNav() {
    setMobileNavOpen(false);
  }

  return (
    <section className="header w-full p-5 text-white">
      <div className="header-container w-11/12 mx-auto flex justify-between">
        <SideBar onClick={() => setMobileNavOpen(!mobileNavOpen)} />
        <Logo />
        <ul className={`nav flex ${mobileNavOpen ? "open" : ""}`}>
          <div className="mobile-nav-header hidden">
            <Logo />
            <Coracao
              onClick={() => {
                setFavTabOpen(true);
                closeMobileNav();
              }}
            />
          </div>
          <Link className="flex align-center" to="/">
            <li onClick={closeMobileNav} className="w-full text-sm p-1">Home</li>
          </Link>
          <HashLink className="flex align-center" smooth to="#products">
            <li onClick={closeMobileNav} className="w-full text-sm p-1">Products</li>
          </HashLink>
          <HashLink className="flex align-center" smooth to="#about">
            <li onClick={closeMobileNav} className="w-full text-sm p-1">About</li>
          </HashLink>
          {/*faz pagina de about depois*/}
          <HashLink className="flex align-center" smooth to="#blog">
            <li onClick={closeMobileNav} className="w-full text-sm p-1">Blog</li>
          </HashLink>
        </ul>
        <div
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className={`${mobileNavOpen ? "" : "hidden"} mobile-overlay`}
        ></div>
        <SideContentComponent
          open={carrinhoTabOpen}
          
          setOpen={setCarrinhoTabOpen}
          isEmpty={{
            message: carrinho.items.length ? "" : "Your cart is empty",
          }}
        >
          <CarrinhoComponent closeCarrinhoTab={() => setCarrinhoTabOpen(false)}/>
        </SideContentComponent>
        <SideContentComponent
          open={favTabOpen}
          setOpen={setFavTabOpen}
          isEmpty={{
            message: favs.list.length
              ? ""
              : "You haven't chosen a favorite item yet",
          }}
        >
          <FavsComponent />
        </SideContentComponent>
        <div className="w-40 icons-container flex gap-4 justify-center">
          <Carrinho
            qtd={carrinho.qtd}
            onClick={() => setCarrinhoTabOpen(true)}
          />
          <Coracao onClick={() => setFavTabOpen(true)} />
        </div>
      </div>
    </section>
  );
}
