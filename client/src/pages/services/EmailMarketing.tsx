import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Users, Target, TrendingUp, BarChart3, CheckCircle, Clock, DollarSign } from "lucide-react";
import BackButton from "@/components/BackToHomeButton";

export default function EmailMarketing() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-[hsl(218,65%,32%)] via-[hsl(213,84%,55%)] to-[hsl(218,65%,32%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <BackButton />
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <Mail className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">Email Marketing</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Build lasting relationships with your customers through personalized email campaigns that drive engagement and boost sales.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Our Email Services</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[hsl(213,90%,69%)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Newsletter Campaigns</h3>
                      <p className="text-white/80 text-sm">Regular updates to keep your audience engaged and informed</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[hsl(213,90%,69%)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Automated Sequences</h3>
                      <p className="text-white/80 text-sm">Welcome series, nurture campaigns, and follow-up sequences</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[hsl(213,90%,69%)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Promotional Campaigns</h3>
                      <p className="text-white/80 text-sm">Product launches, sales, and special offers</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[hsl(213,90%,69%)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">List Building</h3>
                      <p className="text-white/80 text-sm">Grow your subscriber base with lead magnets and opt-ins</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[hsl(213,90%,69%)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Segmentation</h3>
                      <p className="text-white/80 text-sm">Target specific audiences with personalized messages</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Email Marketing ROI</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <DollarSign className="w-8 h-8 text-[hsl(213,90%,69%)] mx-auto mb-2" />
                    <h3 className="font-semibold text-white text-sm">$42 ROI</h3>
                    <p className="text-white/80 text-xs">For every $1 spent</p>
                  </div>
                  <div className="text-center">
                    <Users className="w-8 h-8 text-[hsl(213,90%,69%)] mx-auto mb-2" />
                    <h3 className="font-semibold text-white text-sm">Direct Reach</h3>
                    <p className="text-white/80 text-xs">Your audience inbox</p>
                  </div>
                  <div className="text-center">
                    <Target className="w-8 h-8 text-[hsl(213,90%,69%)] mx-auto mb-2" />
                    <h3 className="font-semibold text-white text-sm">Personalized</h3>
                    <p className="text-white/80 text-xs">Targeted messages</p>
                  </div>
                  <div className="text-center">
                    <BarChart3 className="w-8 h-8 text-[hsl(213,90%,69%)] mx-auto mb-2" />
                    <h3 className="font-semibold text-white text-sm">Measurable</h3>
                    <p className="text-white/80 text-xs">Track everything</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Boost Your Email Marketing?</h2>
            <p className="text-white/90 text-lg mb-8">Let's create email campaigns that your customers actually want to read and act on.</p>
            <Button className="bg-[hsl(213,90%,69%)] hover:bg-[hsl(213,90%,60%)] text-white px-8 py-4 rounded-full text-lg font-semibold">
              Start Email Campaign
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}