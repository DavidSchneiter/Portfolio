
import { Layout } from "./Layout";
import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Introduction } from "./Introduction";


function App() {


  return (
    <Layout>
        <Introduction />
        <About />
        <Skills />
        <Projects />
      </Layout>
  );
}

export default App;
