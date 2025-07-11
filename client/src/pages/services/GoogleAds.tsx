import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Settings, Target, TrendingUp, DollarSign, BarChart3, Clock, CheckCircle, MousePointer } from "lucide-react";
import BackButton from "@/components/BackToHomeButton";

export default function GoogleAds() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-[hsl(218,65%,32%)] via-[hsl(213,84%,55%)] to-[hsl(218,65%,32%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <BackButton />
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <Settings className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">Google Ads (PPC)</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Maximize your ROI with targeted pay-per-click advertising campaigns on Google and other platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Our PPC Services</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[hsl(213,90%,69%)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Google Search Ads</h3>
                      <p className="text-white/80 text-sm">Target users actively searching for your products/services</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[hsl(213,90%,69%)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Google Display Network</h3>
                      <p className="text-white/80 text-sm">Reach potential customers across millions of websites</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[hsl(213,90%,69%)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Shopping Campaigns</h3>
                      <p className="text-white/80 text-sm">Showcase your products with images and prices</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[hsl(213,90%,69%)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">YouTube Ads</h3>
                      <p className="text-white/80 text-sm">Video advertising on the world's second largest search engine</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[hsl(213,90%,69%)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Remarketing</h3>
                      <p className="text-white/80 text-sm">Re-engage visitors who have shown interest in your business</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Why Choose Our PPC Services?</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <DollarSign className="w-8 h-8 text-[hsl(213,90%,69%)] mx-auto mb-2" />
                    <h3 className="font-semibold text-white text-sm">Cost Effective</h3>
                    <p className="text-white/80 text-xs">Maximum ROI</p>
                  </div>
                  <div className="text-center">
                    <Target className="w-8 h-8 text-[hsl(213,90%,69%)] mx-auto mb-2" />
                    <h3 className="font-semibold text-white text-sm">Precise Targeting</h3>
                    <p className="text-white/80 text-xs">Right audience</p>
                  </div>
                  <div className="text-center">
                    <Clock className="w-8 h-8 text-[hsl(213,90%,69%)] mx-auto mb-2" />
                    <h3 className="font-semibold text-white text-sm">Instant Results</h3>
                    <p className="text-white/80 text-xs">Immediate traffic</p>
                  </div>
                  <div className="text-center">
                    <BarChart3 className="w-8 h-8 text-[hsl(213,90%,69%)] mx-auto mb-2" />
                    <h3 className="font-semibold text-white text-sm">Measurable</h3>
                    <p className="text-white/80 text-xs">Clear metrics</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Campaign Types We Manage</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">Search Ads</h3>
                <p className="text-white/80 text-sm">Text ads on Google search results</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <MousePointer className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">Display Ads</h3>
                <p className="text-white/80 text-sm">Visual ads across the web</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">Shopping</h3>
                <p className="text-white/80 text-sm">Product listings with images</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">Performance Max</h3>
                <p className="text-white/80 text-sm">AI-driven campaigns</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Driving Immediate Results?</h2>
            <p className="text-white/90 text-lg mb-8">Let's create high-performing Google Ads campaigns that deliver qualified leads and sales.</p>
            <Button className="bg-[hsl(213,90%,69%)] hover:bg-[hsl(213,90%,60%)] text-white px-8 py-4 rounded-full text-lg font-semibold">
              Start Your Campaign
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}