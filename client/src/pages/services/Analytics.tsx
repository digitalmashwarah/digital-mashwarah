import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, TrendingUp, Target, PieChart, CheckCircle, Clock, DollarSign, Users } from "lucide-react";
import BackButton from "@/components/BackToHomeButton";

export default function Analytics() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-[hsl(218,65%,32%)] via-[hsl(213,84%,55%)] to-[hsl(218,65%,32%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <BackButton />
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <BarChart3 className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">Analytics & Reporting</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Track performance and gain valuable insights with comprehensive analytics and detailed reports that drive data-driven decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Our Analytics Services</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[hsl(213,90%,69%)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Performance Tracking</h3>
                      <p className="text-white/80 text-sm">Monitor all your marketing campaigns and channels</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[hsl(213,90%,69%)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Custom Dashboards</h3>
                      <p className="text-white/80 text-sm">Tailored reporting dashboards for your business needs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[hsl(213,90%,69%)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Data Integration</h3>
                      <p className="text-white/80 text-sm">Connect all your marketing tools and platforms</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[hsl(213,90%,69%)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">ROI Analysis</h3>
                      <p className="text-white/80 text-sm">Measure return on investment for all campaigns</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[hsl(213,90%,69%)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Competitive Analysis</h3>
                      <p className="text-white/80 text-sm">Benchmark against your competitors</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Analytics Benefits</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <TrendingUp className="w-8 h-8 text-[hsl(213,90%,69%)] mx-auto mb-2" />
                    <h3 className="font-semibold text-white text-sm">Data-Driven</h3>
                    <p className="text-white/80 text-xs">Smart decisions</p>
                  </div>
                  <div className="text-center">
                    <Target className="w-8 h-8 text-[hsl(213,90%,69%)] mx-auto mb-2" />
                    <h3 className="font-semibold text-white text-sm">Optimization</h3>
                    <p className="text-white/80 text-xs">Continuous improvement</p>
                  </div>
                  <div className="text-center">
                    <DollarSign className="w-8 h-8 text-[hsl(213,90%,69%)] mx-auto mb-2" />
                    <h3 className="font-semibold text-white text-sm">Cost Savings</h3>
                    <p className="text-white/80 text-xs">Better budget allocation</p>
                  </div>
                  <div className="text-center">
                    <Users className="w-8 h-8 text-[hsl(213,90%,69%)] mx-auto mb-2" />
                    <h3 className="font-semibold text-white text-sm">User Insights</h3>
                    <p className="text-white/80 text-xs">Understand customers</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">What We Track</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">Website Traffic</h3>
                <p className="text-white/80 text-sm">Visitors, sessions, behavior</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">Conversions</h3>
                <p className="text-white/80 text-sm">Sales, leads, goals</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">Social Media</h3>
                <p className="text-white/80 text-sm">Engagement, reach, growth</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <PieChart className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">Campaign ROI</h3>
                <p className="text-white/80 text-sm">Cost per acquisition</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Make Data-Driven Decisions?</h2>
            <p className="text-white/90 text-lg mb-8">Let's set up comprehensive tracking and reporting to optimize your marketing performance.</p>
            <Button className="bg-[hsl(213,90%,69%)] hover:bg-[hsl(213,90%,60%)] text-white px-8 py-4 rounded-full text-lg font-semibold">
              Setup Analytics
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}