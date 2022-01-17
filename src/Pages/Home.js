
import Services from "../Components/Services"
import Skills from "../Components/Skills"
import Projects from "../Components/Projects"
import Header from "../Components/HomeHeader"

function App() {
    return (
        <div className="Home">
            <Header />
            <Services />
            <Skills />
            <Projects />
        </div>
    );
}

export default App;
