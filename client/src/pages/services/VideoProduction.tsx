import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Video, Camera, Edit3, Play, Film, Mic, CheckCircle, Users, TrendingUp, Clock } from "lucide-react";
import BackButton from "@/components/BackToHomeButton";

export default function VideoProduction() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-[hsl(218,65%,32%)] via-[hsl(213,84%,55%)] to-[hsl(218,65%,32%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <BackButton />
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <Video className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">Video Production</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Create compelling video content that tells your brand story and engages your audience across all platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Our Video Services</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[hsl(213,90%,69%)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Corporate Videos</h3>
                      <p className="text-white/80 text-sm">Professional brand videos and company presentations</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[hsl(213,90%,69%)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Product Demonstrations</h3>
                      <p className="text-white/80 text-sm">Showcase your products in action with detailed walkthroughs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[hsl(213,90%,69%)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Social Media Content</h3>
                      <p className="text-white/80 text-sm">Short-form videos optimized for social platforms</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[hsl(213,90%,69%)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Testimonial Videos</h3>
                      <p className="text-white/80 text-sm">Customer success stories and reviews</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[hsl(213,90%,69%)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Educational Content</h3>
                      <p className="text-white/80 text-sm">Training videos and how-to tutorials</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Video Impact</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <TrendingUp className="w-8 h-8 text-[hsl(213,90%,69%)] mx-auto mb-2" />
                    <h3 className="font-semibold text-white text-sm">Higher Engagement</h3>
                    <p className="text-white/80 text-xs">10x more shares</p>
                  </div>
                  <div className="text-center">
                    <Users className="w-8 h-8 text-[hsl(213,90%,69%)] mx-auto mb-2" />
                    <h3 className="font-semibold text-white text-sm">Better Retention</h3>
                    <p className="text-white/80 text-xs">95% retention rate</p>
                  </div>
                  <div className="text-center">
                    <Play className="w-8 h-8 text-[hsl(213,90%,69%)] mx-auto mb-2" />
                    <h3 className="font-semibold text-white text-sm">Conversion Boost</h3>
                    <p className="text-white/80 text-xs">80% increase</p>
                  </div>
                  <div className="text-center">
                    <Clock className="w-8 h-8 text-[hsl(213,90%,69%)] mx-auto mb-2" />
                    <h3 className="font-semibold text-white text-sm">Time on Site</h3>
                    <p className="text-white/80 text-xs">2x longer visits</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Our Production Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Edit3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">Pre-Production</h3>
                <p className="text-white/80 text-sm">Script, storyboard, planning</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">Production</h3>
                <p className="text-white/80 text-sm">Professional filming</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Film className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">Post-Production</h3>
                <p className="text-white/80 text-sm">Editing and effects</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">Delivery</h3>
                <p className="text-white/80 text-sm">Final video delivery</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Create Amazing Videos?</h2>
            <p className="text-white/90 text-lg mb-8">Let's bring your vision to life with professional video content that captivates and converts.</p>
            <Button className="bg-[hsl(213,90%,69%)] hover:bg-[hsl(213,90%,60%)] text-white px-8 py-4 rounded-full text-lg font-semibold">
              Start Video Project
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}