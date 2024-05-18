import * as Sentry from "@sentry/react";

import Hero from "./components/Hero"
import Hightlights from "./components/Hightlights"
import Model from "./components/Model"
import Navbar from "./components/Navbar"
import Features from "./components/Features";

const App =() => {
  
  return (
    <main className="bg-black">
      <Navbar/>
      <Hero/>
      <Hightlights/>
      <Model/>
      <Features/>
    </main>
  )
}

export default Sentry.withProfiler(App);
