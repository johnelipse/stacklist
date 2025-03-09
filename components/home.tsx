"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, Heart, Share2, Plus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FeatureCard } from "@/components/feature-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { Footer } from "@/components/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedBackground } from "./animated-background";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const navItems = [
    { name: "Apps", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Podcast", href: "#" },
    {
      name: "Discover",
      href: "#",
      icon: <Star className="w-4 h-4 ml-1 fill-yellow-400 text-yellow-400" />,
    },
    { name: "Support", href: "#" },
    { name: "Login", href: "#" },
  ];

  const features = [
    {
      title: "Create Collections",
      description:
        "Organize your favorite products, services, and experiences into beautiful collections.",
      icon: <Plus className="w-6 h-6 text-[#7b68ee]" />,
      delay: 0.1,
    },
    {
      title: "Share with Friends",
      description:
        "Share your collections with friends, family, or followers with just a few clicks.",
      icon: <Share2 className="w-6 h-6 text-[#7b68ee]" />,
      delay: 0.2,
    },
    {
      title: "Save Favorites",
      description:
        "Save your favorite items from around the web to revisit and share later.",
      icon: <Heart className="w-6 h-6 text-[#7b68ee]" />,
      delay: 0.3,
    },
  ];

  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Travel Blogger",
      content:
        "Stacklist has completely changed how I share travel recommendations with my audience. It's so much more visual and engaging than a simple list.",
      avatar: "/placeholder.svg?height=80&width=80",
      delay: 0.1,
    },
    {
      name: "Sarah Chen",
      role: "Product Designer",
      content:
        "I use Stacklist to keep track of design inspiration and share resources with my team. The visual layout makes it easy to browse and discover new things.",
      avatar: "/placeholder.svg?height=80&width=80",
      delay: 0.2,
    },
    {
      name: "Michael Rodriguez",
      role: "Food Enthusiast",
      content:
        "Creating food guides for different cities has never been easier. I love how I can organize restaurants by neighborhood and cuisine type.",
      avatar: "/placeholder.svg?height=80&width=80",
      delay: 0.3,
    },
  ];

  const faqs = [
    {
      question: "What is Stacklist?",
      answer:
        "Stacklist is a platform that lets you curate and share collections of your favorite products, services, and experiences. Think of it as a visual way to organize recommendations and share them with friends, family, or followers.",
    },
    {
      question: "Is Stacklist free to use?",
      answer:
        "Yes, Stacklist is free to use with our basic plan. We also offer premium features for power users who want additional customization options and analytics.",
    },
    {
      question: "How do I create my first Stack?",
      answer:
        "After signing up, click the 'Create Stack' button on your dashboard. You can then add items to your stack by pasting URLs, uploading images, or searching our database of products and services.",
    },
    {
      question: "Can I make my Stacks private?",
      answer:
        "Yes, you can choose to make your Stacks private, share them only with specific people, or make them public for anyone to see.",
    },
    {
      question: "How do I share my Stacks with others?",
      answer:
        "Each Stack has a unique shareable link that you can send to others. You can also share directly to social media platforms or embed your Stacks on your website or blog.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b py-4 relative z-10">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center">
              <div className="relative h-8 w-8 mr-2">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-full h-full text-[#7b68ee]"
                >
                  <motion.path
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    d="M4 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5z"
                    fill="currentColor"
                  />
                  <motion.path
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 0.7, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                    d="M4 11a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2z"
                    fill="currentColor"
                    fillOpacity=".7"
                  />
                  <motion.path
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 0.4, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                    d="M4 17a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2z"
                    fill="currentColor"
                    fillOpacity=".4"
                  />
                </svg>
              </div>
              <span className="text-[#7b68ee] text-2xl font-medium">
                stacklist
              </span>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5, ease: "easeOut" }}
                className="text-xs text-[#7b68ee] bg-[#f0f0ff] px-1.5 py-0.5 rounded ml-1 uppercase font-medium"
              >
                beta
              </motion.span>
            </Link>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                custom={i}
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={navItemVariants}
              >
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-[#7b68ee] flex items-center group"
                >
                  <span className="relative">
                    {item.name}
                    <motion.span
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7b68ee]"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  </span>
                  {item.icon}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black rounded-full px-6">
                Signup
              </Button>
            </motion.div>
          </nav>

          <motion.div
            className="md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          >
            <Button variant="ghost" size="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </Button>
          </motion.div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <AnimatedBackground />

          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                className="max-w-xl"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.h1
                  className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
                  variants={itemVariants}
                >
                  Find.
                  <br />
                  Stack.
                  <br />
                  Share.
                </motion.h1>
                <motion.p
                  className="mt-6 text-lg text-gray-700"
                  variants={itemVariants}
                >
                  You curate your life with the products, services, and
                  experiences you love.
                </motion.p>
                <motion.p
                  className="mt-4 text-lg text-gray-700"
                  variants={itemVariants}
                >
                  Make Stacks of your favorite things and send them to friends,
                  family, or followers.
                </motion.p>
                <motion.div className="mt-8" variants={itemVariants}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="bg-yellow-400 hover:bg-yellow-500 text-black rounded-full px-8 py-6 text-lg">
                      Get started for free
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
              >
                <motion.div
                  className="relative z-10 rounded-lg shadow-xl overflow-hidden border border-gray-200"
                  whileHover={{
                    y: -5,
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Stacklist App Interface"
                    width={600}
                    height={600}
                    className="w-full h-auto"
                    priority
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How Stacklist Works
              </h2>
              <p className="text-lg text-gray-600">
                Stacklist makes it easy to organize and share the things you
                love in a beautiful, visual way.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  delay={feature.delay}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Example Stacks Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Discover Popular Stacks
              </h2>
              <p className="text-lg text-gray-600">
                Browse collections created by our community or create your own.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.5,
                    delay: item * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -5 }}
                >
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={`/placeholder.svg?height=300&width=400&text=Stack+${item}`}
                      alt={`Example Stack ${item}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-lg mb-2">
                      {item === 1
                        ? "Travel Essentials"
                        : item === 2
                        ? "Home Office Setup"
                        : "Favorite Recipes"}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {item === 1
                        ? "My must-have items for international travel"
                        : item === 2
                        ? "Everything you need for a productive workspace"
                        : "Quick and easy dinner ideas for busy weeknights"}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                          <Image
                            src="/placeholder.svg?height=32&width=32"
                            alt="User Avatar"
                            width={32}
                            height={32}
                            className="object-cover"
                          />
                        </div>
                        <span className="text-sm text-gray-700">
                          {item === 1
                            ? "@traveler"
                            : item === 2
                            ? "@workfromhome"
                            : "@foodie"}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Heart className="w-4 h-4 mr-1" />
                        <span>{item * 24 + 12}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <Button
                variant="outline"
                className="rounded-full px-6 py-5 text-[#7b68ee] border-[#7b68ee] hover:bg-[#f0f0ff]"
              >
                Explore more stacks <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Our Users Say
              </h2>
              <p className="text-lg text-gray-600">
                Join thousands of people who use Stacklist to share their
                favorite things.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  name={testimonial.name}
                  role={testimonial.role}
                  content={testimonial.content}
                  avatar={testimonial.avatar}
                  delay={testimonial.delay}
                />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Everything you need to know about Stacklist.
              </p>
            </motion.div>

            <motion.div
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium text-lg">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#7b68ee] text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to start sharing?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of people who use Stacklist to curate and share
                their favorite things.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black rounded-full px-8 py-6 text-lg">
                  Get started for free
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Badges Section */}
        <section className="py-16 container mx-auto px-4">
          <motion.div
            className="flex flex-wrap justify-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{
                y: -5,
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <Link
                href="#"
                className="flex items-center border border-red-200 rounded-lg px-4 py-2 hover:bg-gray-50"
              >
                <div className="mr-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="24" rx="4" fill="#FF6154" />
                    <path
                      d="M8.5 7L12 10.5L15.5 7"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <path
                      d="M8.5 13.5L12 17L15.5 13.5"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500">FEATURED ON</div>
                  <div className="font-semibold">Product Hunt</div>
                </div>
                <div className="ml-4 text-red-500 font-semibold">291</div>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{
                y: -5,
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <Link
                href="#"
                className="flex items-center border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-50"
              >
                <div className="bg-black text-white p-1 rounded mr-2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="24" rx="4" fill="black" />
                    <path
                      d="M6 8H18M6 12H18M6 16H18"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="font-semibold">BetaList</div>
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
