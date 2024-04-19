import { HeaderComponent } from "./components/header/header";
import { MainComponent } from "./components/main/main";
import { FooterComponent } from "./components/footer/footer";
import "./App.css"

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
