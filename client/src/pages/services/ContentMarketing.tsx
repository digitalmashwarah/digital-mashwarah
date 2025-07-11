import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PenTool, FileText, Video, Mic, Image, TrendingUp, CheckCircle, Users, Target, Clock } from "lucide-react";

export default function ContentMarketing() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-[hsl(218,65%,32%)] via-[hsl(213,84%,55%)] to-[hsl(218,65%,32%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <PenTool className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">Content Marketing</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Engage your audience with high-quality, valuable content that drives traffic, builds trust, and converts visitors into customers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Our Content Services</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[hsl(213,90%,69%)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Blog Writing</h3>
                      <p className="text-white/80 text-sm">SEO-optimized blog posts that educate and engage your audience</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[hsl(213,90%,69%)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Social Media Content</h3>
                      <p className="text-white/80 text-sm">Engaging posts, stories, and campaigns for all social platforms</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[hsl(213,90%,69%)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Video Content</h3>
                      <p className="text-white/80 text-sm">Compelling video scripts and production for marketing campaigns</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[hsl(213,90%,69%)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Email Campaigns</h3>
                      <p className="text-white/80 text-sm">Persuasive email content that nurtures leads and drives sales</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[hsl(213,90%,69%)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Content Strategy</h3>
                      <p className="text-white/80 text-sm">Comprehensive content planning and editorial calendars</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Content Marketing Benefits</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <TrendingUp className="w-8 h-8 text-[hsl(213,90%,69%)] mx-auto mb-2" />
                    <h3 className="font-semibold text-white text-sm">Brand Awareness</h3>
                    <p className="text-white/80 text-xs">Increased visibility</p>
                  </div>
                  <div className="text-center">
                    <Users className="w-8 h-8 text-[hsl(213,90%,69%)] mx-auto mb-2" />
                    <h3 className="font-semibold text-white text-sm">Audience Growth</h3>
                    <p className="text-white/80 text-xs">Engaged community</p>
                  </div>
                  <div className="text-center">
                    <Target className="w-8 h-8 text-[hsl(213,90%,69%)] mx-auto mb-2" />
                    <h3 className="font-semibold text-white text-sm">Lead Generation</h3>
                    <p className="text-white/80 text-xs">Quality prospects</p>
                  </div>
                  <div className="text-center">
                    <Clock className="w-8 h-8 text-[hsl(213,90%,69%)] mx-auto mb-2" />
                    <h3 className="font-semibold text-white text-sm">Long-term Value</h3>
                    <p className="text-white/80 text-xs">Lasting results</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Content Types We Create</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">Blog Posts</h3>
                <p className="text-white/80 text-sm">Informative articles</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">Videos</h3>
                <p className="text-white/80 text-sm">Engaging visuals</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Image className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">Infographics</h3>
                <p className="text-white/80 text-sm">Visual storytelling</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Mic className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">Podcasts</h3>
                <p className="text-white/80 text-sm">Audio content</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <PenTool className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">Copywriting</h3>
                <p className="text-white/80 text-sm">Sales content</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Tell Your Story?</h2>
            <p className="text-white/90 text-lg mb-8">Let's create compelling content that connects with your audience and drives your business forward.</p>
            <Button className="bg-[hsl(213,90%,69%)] hover:bg-[hsl(213,90%,60%)] text-white px-8 py-4 rounded-full text-lg font-semibold">
              Start Content Strategy
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}