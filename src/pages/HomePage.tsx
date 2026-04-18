import React from 'react'
import { motion } from 'framer-motion'
import { ChatInterface } from '../components/ChatInterface'
import { CAMPSidebar } from '../components/CAMPSidebar'
import { TiledImages } from '../components/TiledImages'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Users, Building, TrendingUp, Crown, Briefcase, BarChart3, Shield } from 'lucide-react'
import { Button } from '../components/ui/button'

export const HomePage: React.FC = () => {
  // Stats removed per user requirements

  return (
    <div className="flex min-h-screen">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="flex-1 flex items-center justify-center px-6 py-20">
          <div className="w-full max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center space-x-3 bg-accent-blue/10 border border-accent-blue/30 rounded-full px-6 py-2 mb-6"
              >
                <Crown className="w-5 h-5 text-accent-gold" />
                <span className="text-sm font-medium text-accent-blue">Free to use — no sign-up required</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-4"
              >
                I am <span className="text-accent-blue">OpenChief</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-text-secondary max-w-2xl mx-auto mb-8"
              >
                Your C-Suite of AI Experts — ready to help you build, manage, and grow your business.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <a
                  href="https://coachai-camp-ecosystem.web.app/tech-camp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-transparent border border-accent-blue text-accent-blue hover:bg-accent-blue/10 transition-all duration-200 rounded-md px-6 py-3 font-medium text-base"
                >
                  View Tech Camp Curriculum
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>

            {/* Chat Interface */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-16"
            >
              <ChatInterface />
            </motion.div>

            {/* Powered by Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-12"
            >
              <div className="bg-navy-deep/80 border border-accent-blue/30 rounded-xl p-6 max-w-2xl mx-auto text-center">
                <h3 className="text-xl font-heading font-bold text-white mb-2">
                  Powered by Qwen 3.6 with RAG Intelligence
                </h3>
                <p className="text-text-secondary">
                  Your OpenChief C-Suite runs on advanced open-weight AI with retrieval-augmented generation
                </p>
              </div>
            </motion.div>

            {/* C-Suite Intro Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-16"
            >
              <h2 className="text-2xl font-heading font-bold text-text-primary mb-6 text-center">
                Meet Your C-Suite
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                <div className="bg-navy-deep/60 border border-accent-blue/20 rounded-lg p-4 text-center">
                  <Briefcase className="w-8 h-8 text-accent-blue mx-auto mb-2" />
                  <p className="text-sm font-semibold text-text-primary">CEO</p>
                  <p className="text-xs text-text-secondary">Strategy</p>
                </div>
                <div className="bg-navy-deep/60 border border-camp-green/20 rounded-lg p-4 text-center">
                  <BarChart3 className="w-8 h-8 text-camp-green mx-auto mb-2" />
                  <p className="text-sm font-semibold text-text-primary">CFO</p>
                  <p className="text-xs text-text-secondary">Finance</p>
                </div>
                <div className="bg-navy-deep/60 border border-purple-400/20 rounded-lg p-4 text-center">
                  <Sparkles className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-text-primary">CMO</p>
                  <p className="text-xs text-text-secondary">Marketing</p>
                </div>
                <div className="bg-navy-deep/60 border border-accent-gold/20 rounded-lg p-4 text-center">
                  <Shield className="w-8 h-8 text-accent-gold mx-auto mb-2" />
                  <p className="text-sm font-semibold text-text-primary">CTO</p>
                  <p className="text-xs text-text-secondary">Technology</p>
                </div>
              </div>
              <p className="text-center text-text-secondary mt-4 max-w-2xl mx-auto">
                Ask anything — OpenChief routes your question to the right expert and gets to work.
              </p>
            </motion.div>

            {/* Gallery Divider - Above */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="mb-8 text-center"
            >
              <div className="flex items-center max-w-3xl mx-auto mb-4">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent to-accent-blue/40"></div>
                <span className="px-4 text-sm text-text-secondary">OpenChief Ecosystem</span>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent to-accent-blue/40"></div>
              </div>
              <p className="text-text-secondary max-w-2xl mx-auto">
                OpenChief is your host and ecosystem manager for CoachAI Tech Camps.{' '}
                <Link to="/camp-alpha" className="text-accent-blue hover:underline">
                  Learn more →
                </Link>
              </p>
            </motion.div>

            {/* Tiled Images Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-8"
            >
              <TiledImages />
            </motion.div>

            {/* Gallery Divider - Below */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="mb-16 text-center"
            >
              <div className="flex items-center max-w-3xl mx-auto mb-4">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent to-accent-blue/40"></div>
                <div className="w-2 h-2 rounded-full bg-accent-blue/40 mx-2"></div>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent to-accent-blue/40"></div>
              </div>
              <p className="text-lg text-text-secondary italic max-w-2xl mx-auto">
                Let me drive your business, so you can be more creative.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="bg-navy-deep/50 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              
              {/* OpenChief + Camp Alpha CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-navy-deep/80 border border-accent-blue/30 rounded-xl p-8 max-w-4xl mx-auto mb-8"
              >
                <h3 className="text-2xl font-heading font-bold text-white mb-4">
                  Experience OpenChief Free — Upgrade to CAMP Alpha
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  You're talking to OpenChief right now — powered by Qwen 3.6 with RAG intelligence
                  trained on the CAMP ecosystem. Get instant strategy, financial analysis, marketing plans,
                  and technical guidance. Ready for the full suite? CAMP Alpha unlocks unlimited access,
                  custom agents, and priority support for your business.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/camp-alpha">
                    <Button className="bg-accent-blue text-white hover:bg-blue-600 transition-all duration-200">
                      Explore CAMP Alpha
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <Link to="/our-ai-technology">
                    <Button className="bg-transparent border border-accent-blue text-accent-blue hover:bg-accent-blue/10 transition-all duration-200">
                      How OpenChief Works
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-navy-deep/80 border border-navy-light/50 rounded-lg p-6 text-center"
              >
                <Building className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-text-primary mb-2">
                  Real World Assets
                </h3>
                <p className="text-text-secondary">
                  Expert guidance on RWA tokenization, property investment, and blockchain integration.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-navy-deep/80 border border-navy-light/50 rounded-lg p-6 text-center"
              >
                <Users className="w-12 h-12 text-camp-green mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-text-primary mb-2">
                  Tech Education
                </h3>
                <p className="text-text-secondary">
                  Insights into our revolutionary tech boot camp model and educational innovation.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-navy-deep/80 border border-navy-light/50 rounded-lg p-6 text-center"
              >
                <Sparkles className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-text-primary mb-2">
                  Investment Opportunities
                </h3>
                <p className="text-text-secondary">
                  Analysis of Founders Club benefits, ROI projections, and investment strategies.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-12"
            >
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/camp-alpha">
                  <Button className="bg-accent-blue text-white hover:bg-blue-600 text-lg px-8 py-4 transition-all duration-200">
                    Get Started with CAMP Alpha
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/founders-club">
                  <Button className="bg-navy-deep text-white hover:bg-navy-light border border-accent-blue/30 hover:border-accent-blue/60 text-lg px-8 py-4 transition-all duration-200">
                    Founders Club
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* CAMP Ecosystem Sidebar */}
      <CAMPSidebar />
    </div>
  )
}
