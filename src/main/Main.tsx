import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Gallery from "./components/Gallery";
import CircularGallery from "./components/CircularGallery";
import CarsContent from "./components/CarsContent";
import structures from "../data"; 

function Main() {
    return (
        <div>
            <Navbar active="1" />
            <Gallery />
            <CircularGallery items={structures.slice(0, 3)} />
            <CarsContent />
            <Footer />
        </div>
    );
}

export default Main;