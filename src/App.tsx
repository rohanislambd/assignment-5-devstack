import { Suspense, useState } from "react";
import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import Technologies from "./components/technologies/Technologies"
import type { ITechnologies } from "./types/type";
import Footer from "./components/Footer";

const technologyFetch =async ():Promise<ITechnologies[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
}

function App() {
  // const technologiesPromise = technologyFetch();
  const [technologiesPromise] = useState(() => technologyFetch())

  return (
    <>
    <Navbar/>
    <Banner/>
    <Suspense fallback={<div className="text-center text-5xl text-red-600">Looding........................</div>}>
       <Technologies technologiesPromise={technologiesPromise} />
    </Suspense>
    <Footer/>
    
    </>
  )
}

export default App
