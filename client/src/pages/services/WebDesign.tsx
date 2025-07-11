import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Smartphone, Zap, Shield, Palette, Globe, CheckCircle, Monitor } from "lucide-react";

export default function WebDesign() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-[hsl(218,65%,32%)] via-[hsl(213,84%,55%)] to-[hsl(218,65%,32%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <Code className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">Web Design & Development</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Create stunning, responsive websites that convert visitors into customers with modern design and cutting-edge technology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Our Web Services</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[hsl(213,90%,69%)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Custom Website Design</h3>
                      <p className="text-white/80 text-sm">Unique designs tailored to your brand and business goals</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[hsl(213,90%,69%)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Responsive Development</h3>
                      <p className="text-white/80 text-sm">Mobile-first approach ensuring perfect display on all devices</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[hsl(213,90%,69%)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">E-commerce Solutions</h3>
                      <p className="text-white/80 text-sm">Full-featured online stores with secure payment integration</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[hsl(213,90%,69%)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">CMS Integration</h3>
                      <p className="text-white/80 text-sm">Easy-to-use content management systems for easy updates</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[hsl(213,90%,69%)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Performance Optimization</h3>
                      <p className="text-white/80 text-sm">Fast loading times and superior user experience</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Why Choose Our Web Design?</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <Smartphone className="w-8 h-8 text-[hsl(213,90%,69%)] mx-auto mb-2" />
                    <h3 className="font-semibold text-white text-sm">Mobile First</h3>
                    <p className="text-white/80 text-xs">Responsive design</p>
                  </div>
                  <div className="text-center">
                    <Zap className="w-8 h-8 text-[hsl(213,90%,69%)] mx-auto mb-2" />
                    <h3 className="font-semibold text-white text-sm">Fast Loading</h3>
                    <p className="text-white/80 text-xs">Optimized performance</p>
                  </div>
                  <div className="text-center">
                    <Shield className="w-8 h-8 text-[hsl(213,90%,69%)] mx-auto mb-2" />
                    <h3 className="font-semibold text-white text-sm">Secure</h3>
                    <p className="text-white/80 text-xs">SSL & security</p>
                  </div>
                  <div className="text-center">
                    <Palette className="w-8 h-8 text-[hsl(213,90%,69%)] mx-auto mb-2" />
                    <h3 className="font-semibold text-white text-sm">Modern Design</h3>
                    <p className="text-white/80 text-xs">Latest trends</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Technologies We Use</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">HTML5/CSS3</h3>
                <p className="text-white/80 text-sm">Modern web standards</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">React/Vue</h3>
                <p className="text-white/80 text-sm">Interactive interfaces</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">WordPress</h3>
                <p className="text-white/80 text-sm">Content management</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">E-commerce</h3>
                <p className="text-white/80 text-sm">Online stores</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Build Your Dream Website?</h2>
            <p className="text-white/90 text-lg mb-8">Let's create a website that not only looks amazing but also drives results for your business.</p>
            <Button className="bg-[hsl(213,90%,69%)] hover:bg-[hsl(213,90%,60%)] text-white px-8 py-4 rounded-full text-lg font-semibold">
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}