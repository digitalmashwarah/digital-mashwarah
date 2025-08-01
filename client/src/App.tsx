import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query
{ Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import About from "@/pages/About";
import NotFound from "@/pages/not-found";
import SocialMediaMarketing from "@/pages/services/SocialMediaMarketing";
import SEO from "@/pages/services/SEO";
import GoogleAds from "@/pages/services/GoogleAds";
import WebDesign from "@/pages/services/WebDesign";
import ContentMarketing from "@/pages/services/ContentMarketing";
import EmailMarketing from "@/pages/services/EmailMarketing";
import VideoProduction from "@/pages/services/VideoProduction";
import BrandingDesign from "@/pages/services/BrandingDesign";
import InfluencerMarketing from "@/pages/services/InfluencerMarketing";
import Analytics from "@/pages/services/Analytics";
import { useEffect } from "react";
import { initContentProtection } from "@/lib/contentProtection";

function Router() {
  const [location] = useLocation();
  
  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services/social-media-marketing" component={SocialMediaMarketing} />
      <Route path="/services/seo" component={SEO} />
      <Route path="/services/google-ads" component={GoogleAds} />
      <Route path="/services/web-design" component={WebDesign} />
      <Route path="/services/content-marketing" component={ContentMarketing} />
      <Route path="/services/email-marketing" component={EmailMarketing} />
      <Route path="/services/video-production" component={VideoProduction} />
      <Route path="/services/branding" component={BrandingDesign} />
      <Route path="/services/influencer-marketing" component={InfluencerMarketing} />
      <Route path="/services/analytics" component={Analytics} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    initContentProtection();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
