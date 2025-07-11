import Layout from "@/components/Layout";
import BackToHomeButton from "@/components/BackToHomeButton";
import { CheckCircle, Video, Play, Camera, Film } from "lucide-react";

export default function VideoProduction() {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BackToHomeButton />
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Video Production
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bring your brand to life with compelling video content that captivates and converts
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Visual Stories That Drive Action
              </h2>
              <p className="text-gray-600 mb-6">
                Our video production team creates high-quality, engaging videos that tell your brand story and drive meaningful connections with your audience.
              </p>
              <div className="space-y-4">
                {[
                  "Brand & Corporate Videos",
                  "Product Demonstrations",
                  "Social Media Video Content",
                  "Animated Explainer Videos",
                  "Video Marketing Campaigns"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Video className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">High Quality</h3>
                <p className="text-gray-600">Professional-grade video production with stunning visuals</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Play className="h-10 w-10 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Engaging Content</h3>
                <p className="text-gray-600">Videos that capture attention and drive viewer engagement</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Camera className="h-10 w-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Brand Storytelling</h3>
                <p className="text-gray-600">Compelling narratives that showcase your brand values</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Film className="h-10 w-10 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Multi-Platform</h3>
                <p className="text-gray-600">Videos optimized for all social media platforms</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Create Stunning Videos?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's produce video content that tells your story and drives results
            </p>
            <a
              href="https://wa.me/923104090921"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Start Your Video Project
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}