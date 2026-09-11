import { Suspense } from "react";
import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import Technologies from "./components/technologies/Technologies"
import type { ITechnologies } from "./types/type";

const technologyFetch =async ():Promise<ITechnologies[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
}

function App() {
  const technologiesPromise = technologyFetch();

  return (
    <>
    <Navbar/>
    <Banner/>
    <Suspense fallback={<div>Looding......</div>}>
       <Technologies technologiesPromise={technologiesPromise} />
    </Suspense>
    
    </>
  )
}

export default App
