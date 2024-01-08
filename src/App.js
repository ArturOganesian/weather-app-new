import Children from "components/Children";
import Header from "./components/header/Header";
import Footer from "components/footer/Footer";
function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Children />
        <Footer />
      </main>
    </div>
  );
}

export default App;
