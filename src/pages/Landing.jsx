import React from 'react';
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import PartnersSection from "../components/PartnersSection"; 
import CoursesSection from "../components/CoursesSection";   
import FeaturedCourses from "../components/FeaturedCourses"; 
import InstructorsSection from "../components/instructorsSection"; 
import TestimonialsSection from '../components/TestimonialsSection';
import ArticlesSection from "../components/ArticlesSection";
import ContactBanner from '../components/ContactBanner';
export default function Landing() {
  return (
    <div className="landing-page-main">
      <HeroSection />
      <AboutSection />
      <PartnersSection /> 
      <CoursesSection />
       <FeaturedCourses />
      <InstructorsSection/>
      <TestimonialsSection />
      <ArticlesSection />
      <ContactBanner />
    </div>
  );
}