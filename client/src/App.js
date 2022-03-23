import Footer from "./components/Footer";

function App() {
  const display = () => {
    // const route = window.location.pathname
    //   if(route.includes("/about")){
    //     return <About />
    //   } else if(route.includes("/threed")){
    //     return <ThreeD />
    //   } else if(route.includes("/fabrics")){
    //     return <Fabrics />
    //   } else if(route.includes("/yarn")){
    //     return <Yarn />
    //   } else if(route.includes("/myubam")){
    //     return <MyUbam />
    //   } else if(route.includes("/contact")){
    //     return <Contact />
    //   }
  }
  return (
    <>
      {display()}
      <Footer year={new Date().getFullYear()} />
    </>
  );
}

export default App;
