import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Navbar from "./components/ui/Navbar";
function App(){

  return (
    <div className="bg-[url(assets/Moon.svg)] bg-center bg-no-repeat bg-cover bf bg-fixed">
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App;