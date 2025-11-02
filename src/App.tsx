import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="">
      <Banner />
      <Header />
      <main className="lg:bg-[#e5e5e5]">
        <Home />
      </main>
      <Footer />
    </div>
  );
}
export default App;
