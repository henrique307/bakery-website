import { HeaderComponent } from "./components/home/header/header";
import { MainComponent } from "./components/home/main/main";
import { FooterComponent } from "./components/home/footer/footer";
import "./App.css";

function App() {
  return (
    <section className="App">
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />
    </section>
  );
}

export default App;
