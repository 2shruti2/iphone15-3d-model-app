import * as Sentry from "@sentry/react";

import Hero from "./components/Hero"
import Hightlights from "./components/Hightlights"
import Model from "./components/Model"
import Navbar from "./components/Navbar"

const App =() => {

  // return <button onClick={() => methodDoesNotExist()}>Break the world</button>;
  
  return (
    <main className="bg-black">
      <Navbar/>
      <Hero/>
      <Hightlights/>
      <Model/>
    </main>
  )
}

export default Sentry.withProfiler(App);
