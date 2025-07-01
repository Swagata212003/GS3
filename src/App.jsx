import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WorkExample from "./components/WorkExample";
import ClientReviews from "./components/ClientReviews";
import Technologies from "./components/Technologies";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <Hero />
      <Services />
      <WorkExample />
      <ClientReviews />
      <Technologies />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
