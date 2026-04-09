import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import About from "@/pages/About";
import WhatIsColourAnalysis from "@/pages/WhatIsColourAnalysis";
import Testimonials from "@/pages/Testimonials";
import Contact from "@/pages/Contact";
import ColourAnalysisInPerson from "@/pages/services/ColourAnalysisInPerson";
import ColourAnalysisWithFriends from "@/pages/services/ColourAnalysisWithFriends";
import WardrobeDeclutter from "@/pages/services/WardrobeDeclutter";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import PubInThePark from "@/pages/PubInThePark";
import NotFound from "@/pages/not-found";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);
  return null;
}

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <div className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/services/colour-analysis-in-person" component={ColourAnalysisInPerson} />
          <Route path="/services/colour-analysis-with-friends" component={ColourAnalysisWithFriends} />
          <Route path="/services/wardrobe-declutter" component={WardrobeDeclutter} />
          <Route path="/about" component={About} />
          <Route path="/what-is-colour-analysis" component={WhatIsColourAnalysis} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/contact" component={Contact} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/pub-in-the-park-marlow" component={PubInThePark} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
    </WouterRouter>
  );
}

export default App;
