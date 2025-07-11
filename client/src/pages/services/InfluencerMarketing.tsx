import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Users, TrendingUp, Heart, CheckCircle, Target, DollarSign, Camera } from "lucide-react";

export default function InfluencerMarketing() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-[hsl(218,65%,32%)] via-[hsl(213,84%,55%)] to-[hsl(218,65%,32%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <Star className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">Influencer Marketing</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Connect with your target audience through authentic influencer partnerships and collaborations that drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Our Influencer Services</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[hsl(213,90%,69%)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Influencer Discovery</h3>
                      <p className="text-white/80 text-sm">Find the perfect influencers for your brand and niche</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[hsl(213,90%,69%)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Campaign Strategy</h3>
                      <p className="text-white/80 text-sm">Develop comprehensive influencer marketing strategies</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[hsl(213,90%,69%)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Partnership Management</h3>
                      <p className="text-white/80 text-sm">Handle negotiations, contracts, and relationship management</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[hsl(213,90%,69%)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Content Collaboration</h3>
                      <p className="text-white/80 text-sm">Work with influencers to create authentic, engaging content</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[hsl(213,90%,69%)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Campaign Tracking</h3>
                      <p className="text-white/80 text-sm">Monitor performance and measure ROI</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Influencer Marketing Benefits</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <Heart className="w-8 h-8 text-[hsl(213,90%,69%)] mx-auto mb-2" />
                    <h3 className="font-semibold text-white text-sm">Authenticity</h3>
                    <p className="text-white/80 text-xs">Genuine endorsements</p>
                  </div>
                  <div className="text-center">
                    <Users className="w-8 h-8 text-[hsl(213,90%,69%)] mx-auto mb-2" />
                    <h3 className="font-semibold text-white text-sm">Reach</h3>
                    <p className="text-white/80 text-xs">Massive audience</p>
                  </div>
                  <div className="text-center">
                    <Target className="w-8 h-8 text-[hsl(213,90%,69%)] mx-auto mb-2" />
                    <h3 className="font-semibold text-white text-sm">Targeted</h3>
                    <p className="text-white/80 text-xs">Specific demographics</p>
                  </div>
                  <div className="text-center">
                    <DollarSign className="w-8 h-8 text-[hsl(213,90%,69%)] mx-auto mb-2" />
                    <h3 className="font-semibold text-white text-sm">Cost-Effective</h3>
                    <p className="text-white/80 text-xs">Better ROI</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Types of Influencers We Work With</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">Mega Influencers</h3>
                <p className="text-white/80 text-sm">1M+ followers</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">Macro Influencers</h3>
                <p className="text-white/80 text-sm">100K-1M followers</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">Micro Influencers</h3>
                <p className="text-white/80 text-sm">10K-100K followers</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">Nano Influencers</h3>
                <p className="text-white/80 text-sm">1K-10K followers</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Partner with Influencers?</h2>
            <p className="text-white/90 text-lg mb-8">Let's connect your brand with the right influencers to amplify your message and reach new audiences.</p>
            <Button className="bg-[hsl(213,90%,69%)] hover:bg-[hsl(213,90%,60%)] text-white px-8 py-4 rounded-full text-lg font-semibold">
              Find Influencers
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}