import MyNavbar from "./components/navbar";
import Layout from "./components/layout";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Snowfall from "./components/snowfall";

function App() {
  return (
    <>
      <Snowfall count={100} />
      <div
        className="bg-slate-600"
        // style={{ height: "100vh", zIndex: -1, background: "#1F1F1F" }}
        style={{
          position: "relative",
          zIndex: 1,
          color: "white",
          // textAlign: "center",
          // paddingTop: "50vh",
          // marginTop: "-100vh",
        }}
      >
        <MyNavbar />
        <Layout />
        <Home />
        <About />
        <Projects />
      </div>
    </>
  );
}

export default App;
