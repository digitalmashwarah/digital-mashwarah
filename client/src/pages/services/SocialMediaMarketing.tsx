import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Instagram, Twitter, Linkedin, Youtube, TrendingUp, Users, MessageSquare, BarChart3, Target, Clock } from "lucide-react";
import BackToHomeButton from "@/components/BackToHomeButton";

export default function SocialMediaMarketing() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-[hsl(218,65%,32%)] via-[hsl(213,84%,55%)] to-[hsl(218,65%,32%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <BackToHomeButton />
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <Facebook className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">Social Media Marketing</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Build your brand presence across all major social platforms with engaging content and targeted campaigns that drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">What We Offer</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[hsl(213,90%,69%)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Content Strategy & Creation</h3>
                      <p className="text-white/80 text-sm">Custom content calendars and engaging posts tailored to your brand voice</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[hsl(213,90%,69%)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Platform Management</h3>
                      <p className="text-white/80 text-sm">Complete management of Facebook, Instagram, Twitter, LinkedIn, and YouTube</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[hsl(213,90%,69%)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Community Management</h3>
                      <p className="text-white/80 text-sm">24/7 engagement with your audience and reputation management</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[hsl(213,90%,69%)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Paid Social Advertising</h3>
                      <p className="text-white/80 text-sm">Targeted ad campaigns to reach your ideal customers</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Why Choose Our SMM Services?</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <TrendingUp className="w-8 h-8 text-[hsl(213,90%,69%)] mx-auto mb-2" />
                    <h3 className="font-semibold text-white text-sm">Growth Focused</h3>
                    <p className="text-white/80 text-xs">Data-driven strategies</p>
                  </div>
                  <div className="text-center">
                    <Users className="w-8 h-8 text-[hsl(213,90%,69%)] mx-auto mb-2" />
                    <h3 className="font-semibold text-white text-sm">Audience Building</h3>
                    <p className="text-white/80 text-xs">Genuine followers</p>
                  </div>
                  <div className="text-center">
                    <MessageSquare className="w-8 h-8 text-[hsl(213,90%,69%)] mx-auto mb-2" />
                    <h3 className="font-semibold text-white text-sm">Engagement</h3>
                    <p className="text-white/80 text-xs">Real interactions</p>
                  </div>
                  <div className="text-center">
                    <BarChart3 className="w-8 h-8 text-[hsl(213,90%,69%)] mx-auto mb-2" />
                    <h3 className="font-semibold text-white text-sm">Analytics</h3>
                    <p className="text-white/80 text-xs">Detailed reporting</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Social Media Platforms We Manage</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Facebook className="w-8 h-8 text-white" />
                </div>
                <p className="text-white font-semibold">Facebook</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
                <p className="text-white font-semibold">Instagram</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-sky-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Twitter className="w-8 h-8 text-white" />
                </div>
                <p className="text-white font-semibold">Twitter</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-700 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Linkedin className="w-8 h-8 text-white" />
                </div>
                <p className="text-white font-semibold">LinkedIn</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Youtube className="w-8 h-8 text-white" />
                </div>
                <p className="text-white font-semibold">YouTube</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-[hsl(213,90%,69%)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">1. Strategy</h3>
                <p className="text-white/80 text-sm">Define goals and target audience</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[hsl(213,90%,69%)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">2. Content</h3>
                <p className="text-white/80 text-sm">Create engaging content calendar</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[hsl(213,90%,69%)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">3. Execute</h3>
                <p className="text-white/80 text-sm">Schedule and publish content</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[hsl(213,90%,69%)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">4. Analyze</h3>
                <p className="text-white/80 text-sm">Monitor and optimize performance</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Boost Your Social Media Presence?</h2>
            <p className="text-white/90 text-lg mb-8">Let's create a social media strategy that drives real results for your business.</p>
            <Button className="bg-[hsl(213,90%,69%)] hover:bg-[hsl(213,90%,60%)] text-white px-8 py-4 rounded-full text-lg font-semibold">
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}