import { IntruductionComponent } from "./components/introduction/introduction.jsx";
import { ServicesComponent } from "./components/service/service.jsx";
import { ProductsComponent } from "./components/products/products.jsx";
import { InspirationComponent } from "./components/inspiration/inspiration.jsx";
import { InstagramComponent } from "./components/instagram/instagram.jsx";
import "./main.scss";

export function MainComponent() {
  return (
    <main>
      <IntruductionComponent />
      <ServicesComponent />
      <ProductsComponent />
      <InspirationComponent />
      <InstagramComponent />
    </main>
  );
}
