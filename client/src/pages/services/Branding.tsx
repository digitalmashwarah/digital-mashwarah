import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Palette, Eye, Zap, Heart, CheckCircle, Target, Users, TrendingUp, Lightbulb } from "lucide-react";
import BackButton from "@/components/BackToHomeButton";

export default function Branding() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-[hsl(218,65%,32%)] via-[hsl(213,84%,55%)] to-[hsl(218,65%,32%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <BackButton />
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <Palette className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">Branding & Graphic Design</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Develop a strong brand identity with professional design that stands out from the competition and connects with your audience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Our Branding Services</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[hsl(213,90%,69%)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Logo Design</h3>
                      <p className="text-white/80 text-sm">Memorable logos that represent your brand's essence</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[hsl(213,90%,69%)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Brand Identity</h3>
                      <p className="text-white/80 text-sm">Complete visual identity systems and brand guidelines</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[hsl(213,90%,69%)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Print Design</h3>
                      <p className="text-white/80 text-sm">Business cards, brochures, packaging, and marketing materials</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[hsl(213,90%,69%)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Digital Assets</h3>
                      <p className="text-white/80 text-sm">Social media graphics, web banners, and digital campaigns</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[hsl(213,90%,69%)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Brand Strategy</h3>
                      <p className="text-white/80 text-sm">Positioning, messaging, and brand architecture</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Brand Benefits</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <Eye className="w-8 h-8 text-[hsl(213,90%,69%)] mx-auto mb-2" />
                    <h3 className="font-semibold text-white text-sm">Recognition</h3>
                    <p className="text-white/80 text-xs">Instant brand recall</p>
                  </div>
                  <div className="text-center">
                    <Heart className="w-8 h-8 text-[hsl(213,90%,69%)] mx-auto mb-2" />
                    <h3 className="font-semibold text-white text-sm">Trust</h3>
                    <p className="text-white/80 text-xs">Customer loyalty</p>
                  </div>
                  <div className="text-center">
                    <Zap className="w-8 h-8 text-[hsl(213,90%,69%)] mx-auto mb-2" />
                    <h3 className="font-semibold text-white text-sm">Differentiation</h3>
                    <p className="text-white/80 text-xs">Stand out</p>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="w-8 h-8 text-[hsl(213,90%,69%)] mx-auto mb-2" />
                    <h3 className="font-semibold text-white text-sm">Value</h3>
                    <p className="text-white/80 text-xs">Premium pricing</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Our Design Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-[hsl(213,90%,69%)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">1. Discovery</h3>
                <p className="text-white/80 text-sm">Understand your vision and goals</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[hsl(213,90%,69%)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">2. Strategy</h3>
                <p className="text-white/80 text-sm">Develop brand positioning</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[hsl(213,90%,69%)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">3. Design</h3>
                <p className="text-white/80 text-sm">Create visual concepts</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[hsl(213,90%,69%)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">4. Refine</h3>
                <p className="text-white/80 text-sm">Perfect and deliver</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Build Your Brand?</h2>
            <p className="text-white/90 text-lg mb-8">Let's create a brand identity that truly represents your business and resonates with your audience.</p>
            <Button className="bg-[hsl(213,90%,69%)] hover:bg-[hsl(213,90%,60%)] text-white px-8 py-4 rounded-full text-lg font-semibold">
              Start Brand Project
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}