import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, TrendingUp, Globe, FileText, Link, BarChart3, Target, Clock, CheckCircle } from "lucide-react";
import BackToHomeButton from "@/components/BackToHomeButton";

export default function SEO() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-[hsl(218,65%,32%)] via-[hsl(213,84%,55%)] to-[hsl(218,65%,32%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <BackToHomeButton />
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <Search className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">Search Engine Optimization</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Improve your website's visibility and rankings on search engines to drive organic traffic and grow your business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Our SEO Services</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[hsl(213,90%,69%)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Keyword Research & Strategy</h3>
                      <p className="text-white/80 text-sm">In-depth analysis to identify high-value keywords for your business</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[hsl(213,90%,69%)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">On-Page Optimization</h3>
                      <p className="text-white/80 text-sm">Optimize your website structure, content, and technical elements</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[hsl(213,90%,69%)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Technical SEO</h3>
                      <p className="text-white/80 text-sm">Fix crawling issues, improve site speed, and enhance user experience</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[hsl(213,90%,69%)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Link Building</h3>
                      <p className="text-white/80 text-sm">Build high-quality backlinks to increase domain authority</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[hsl(213,90%,69%)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Content Optimization</h3>
                      <p className="text-white/80 text-sm">Create and optimize content that ranks and converts</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">SEO Benefits</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <TrendingUp className="w-8 h-8 text-[hsl(213,90%,69%)] mx-auto mb-2" />
                    <h3 className="font-semibold text-white text-sm">Increased Traffic</h3>
                    <p className="text-white/80 text-xs">More organic visitors</p>
                  </div>
                  <div className="text-center">
                    <Globe className="w-8 h-8 text-[hsl(213,90%,69%)] mx-auto mb-2" />
                    <h3 className="font-semibold text-white text-sm">Better Visibility</h3>
                    <p className="text-white/80 text-xs">Higher search rankings</p>
                  </div>
                  <div className="text-center">
                    <Target className="w-8 h-8 text-[hsl(213,90%,69%)] mx-auto mb-2" />
                    <h3 className="font-semibold text-white text-sm">Quality Leads</h3>
                    <p className="text-white/80 text-xs">Targeted traffic</p>
                  </div>
                  <div className="text-center">
                    <BarChart3 className="w-8 h-8 text-[hsl(213,90%,69%)] mx-auto mb-2" />
                    <h3 className="font-semibold text-white text-sm">ROI Growth</h3>
                    <p className="text-white/80 text-xs">Long-term results</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Our SEO Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-[hsl(213,90%,69%)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">1. Audit</h3>
                <p className="text-white/80 text-sm">Comprehensive website analysis</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[hsl(213,90%,69%)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">2. Strategy</h3>
                <p className="text-white/80 text-sm">Custom SEO strategy development</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[hsl(213,90%,69%)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">3. Implementation</h3>
                <p className="text-white/80 text-sm">Execute optimization plan</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[hsl(213,90%,69%)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">4. Monitor</h3>
                <p className="text-white/80 text-sm">Track and report progress</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Dominate Search Results?</h2>
            <p className="text-white/90 text-lg mb-8">Let's improve your search rankings and drive more organic traffic to your website.</p>
            <Button className="bg-[hsl(213,90%,69%)] hover:bg-[hsl(213,90%,60%)] text-white px-8 py-4 rounded-full text-lg font-semibold">
              Get SEO Audit
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}