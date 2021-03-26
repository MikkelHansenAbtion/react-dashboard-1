import Header from "./components/Header";
import Footer from "./components/Footer";
import Matrix from "./components/Matrix";

import "./assets/reset.scss";
import "./assets/global.scss";

function App() {
    return (
        <>
            <Header />
            <div className='content'>
                <Matrix />
            </div>
            <Footer />
        </>
    );
}

export default App;
