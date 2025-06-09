import { useState, useEffect } from 'react';

import {
    BookOpen,
    Brain,
    Users,
    Globe,
    // Star,
    CheckCircle,
    Menu,
    X,
    ChevronDown,
    Mail,
    Phone,
    MapPin,
    GraduationCap,
    Zap,
    Target,
    Award,
    SchoolIcon,
    Laptop,
    FileArchive,
    FileChartPie
} from 'lucide-react';
import logo from '../../assets/imgs/EDUWIZZMain.png'
import { SiStaffbase } from 'react-icons/si';
import { PiExam, PiVirtualReality } from 'react-icons/pi';
import { GiPortal } from 'react-icons/gi';
import { BsCashStack } from 'react-icons/bs';
import { LuGroup } from 'react-icons/lu';
import { CgCommunity } from 'react-icons/cg';
const LandingPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Navigation Component
    const Navigation = () => (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center space-x-2">
                        <img src={logo} alt="" className="w-48 " />

                    </div>

                    <div className="hidden md:flex space-x-8">
                        {['Home', 'Features', 'Services', 'About', 'FAQ', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className={` hover:text-purple-600 transition-colors duration-200 ${isScrolled ? 'text-black' : 'text-white'} font-medium`}
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    <button className="hidden md:block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                        Get Started
                    </button>

                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
                    <div className="px-4 py-6 space-y-4">
                        {['Home', 'Features', 'About', 'FAQ', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="block text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                        <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-full">
                            Get Started
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );

    // Hero Section
    const HeroSection = () => (
        <section id="home" className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <div className="animate-fade-in-up">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        The Future of
                        <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent block">
                            Education
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                        Empowering Schools for a Brighter Future
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-gradient-to-r from-yellow-400 to-pink-400 text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                            Get Started
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Floating stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in-up delay-500">
                    {[
                        { number: '10K+', label: 'Students' },
                        { number: '50+', label: 'Languages' },
                        { number: '500+', label: 'Courses' },
                        { number: '24/7', label: 'AI Support' }
                    ].map((stat, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                            <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                            <div className="text-gray-300">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

    // Features Section
    const FeaturesSection = () => {
        const features = [
            {
                icon: <Brain className="w-8 h-8" />,
                title: "AI Classroom",
                description: "Generative AI tutors that can teach any subject in any language, creating personalized lesson plans in real-time.",
                gradient: "from-purple-500 to-pink-500"
            },
            {
                icon: <GraduationCap className="w-8 h-8" />,
                title: "AI University",
                description: "World's first remote AI university powered by the largest LLM, teaching career-focused fundamentals.",
                gradient: "from-blue-500 to-cyan-500"
            },
            {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Interactive Learning",
                description: "Engaging modules with quizzes, simulations, and hands-on exercises tailored to your skill level.",
                gradient: "from-green-500 to-teal-500"
            },
            {
                icon: <Users className="w-8 h-8" />,
                title: "Expert Consultation",
                description: "Connect with AI and human intellectuals who are experts in your exam preparation area.",
                gradient: "from-orange-500 to-red-500"
            },
            {
                icon: <Globe className="w-8 h-8" />,
                title: "Multilingual Support",
                description: "Age-sensitive chatbot with advanced sentiment analysis supporting multiple languages.",
                gradient: "from-indigo-500 to-purple-500"
            },
            {
                icon: <Target className="w-8 h-8" />,
                title: "Career Advisor",
                description: "AI-powered career guidance analyzing your performance to predict optimal career paths.",
                gradient: "from-pink-500 to-rose-500"
            }
        ];

        return (
            <section id="features" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Powerful Features
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover the cutting-edge AI technologies that make learning more effective,
                            personalized, and accessible than ever before.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                            >
                                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    };

    // About Section
    const AboutSection = () => (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Revolutionizing Education with AI
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            We're transforming the educational landscape by integrating cutting-edge AI technology
                            into every aspect of learning. Our platform combines the power of generative AI with
                            human expertise to create personalized, engaging, and effective learning experiences.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Personalized learning paths powered by AI",
                                "Real-time adaptation to student needs",
                                "Global accessibility with multilingual support",
                                "Comprehensive exam preparation tools",
                                "Career guidance and skill development"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                                    <span className="text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>

                        <button className="mt-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                            Learn More About Us
                        </button>
                    </div>

                    <div className="relative">
                        <div className="bg-gradient-to-r from-purple-400 to-blue-400 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                            <div className="bg-white rounded-2xl p-8 transform -rotate-3">
                                <div className="grid grid-cols-2 gap-6">
                                    {[
                                        { icon: <Zap className="w-8 h-8" />, title: "Fast Learning", value: "3x Faster" },
                                        { icon: <Award className="w-8 h-8" />, title: "Success Rate", value: "95%" },
                                        { icon: <Users className="w-8 h-8" />, title: "Students", value: "10,000+" },
                                        { icon: <Globe className="w-8 h-8" />, title: "Countries", value: "50+" }
                                    ].map((stat, index) => (
                                        <div key={index} className="text-center">
                                            <div className="text-purple-600 mb-2 flex justify-center">
                                                {stat.icon}
                                            </div>
                                            <div className="text-2xl font-bold text-gray-900 mb-1">
                                                {stat.value}
                                            </div>
                                            <div className="text-sm text-gray-600">
                                                {stat.title}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

    const ServiceSection = () => {
        return (<section id='Services' className='p-3 flex flex-col'>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Services
                    </h2>
                    <p className="text-xl text-gray-600">
                        Our services and Features
                    </p>
                </div>
            </div>
            <div className='banner w-full rounded-3xl p-3 min-h-[350px] grid grid-cols-2 md:grid-cols-6  gap-2'>

                <div className='p-2 rounded glassMorphism flex flex-col  justify-content-center align-items-center text-white text-center font-700'>
                    <SchoolIcon className='text-3xl w-32' />
                    <p> Student Management</p>
                </div>
                <div className='p-2 rounded glassMorphism flex flex-col justify-content-center align-items-center text-white text-center font-700'>
                    <SiStaffbase className='text-3xl w-32' />
                    <p> Staff Management</p>
                </div>
                <div className='p-2 rounded glassMorphism flex flex-col justify-content-center align-items-center text-white text-center font-700'>
                    <Laptop className='text-3xl w-32' />
                    <p> Computer-Based Testing (CBT)</p>
                </div>
                <div className='p-2 rounded glassMorphism flex flex-col justify-content-center align-items-center text-white text-center font-700'>
                    <PiVirtualReality className='text-3xl w-32' />
                    <p>  Virtual Classroom Capabilities </p>
                </div>
                <div className='p-2 rounded glassMorphism flex flex-col justify-content-center align-items-center text-white text-center font-700'>
                    <CgCommunity className='text-3xl w-32' />
                    <p>   Interactive Online Learning Modules

                    </p>
                </div>
                <div className='p-2 rounded glassMorphism flex flex-col justify-content-center align-items-center text-white text-center font-700'>
                    <GiPortal className='text-3xl w-32' />
                    <p>   Admission Portal   </p>
                </div>
                <div className='p-2 rounded glassMorphism flex flex-col justify-content-center align-items-center text-white text-center font-700'>
                    <BsCashStack className='text-3xl w-32' />
                    <p>   Accounting System   </p>
                </div>
                <div className='p-2 rounded glassMorphism flex flex-col justify-content-center align-items-center text-white text-center font-700'>
                    <FileArchive className='text-3xl w-32' />
                    <p>   Online Result Portal   </p>
                </div>
                <div className='p-2 rounded glassMorphism flex flex-col justify-content-center align-items-center text-white text-center font-700'>
                    <FileChartPie className='text-3xl w-32' />
                    <p>   Advanced Data Reporting Tools   </p>
                </div>
                <div className='p-2 rounded glassMorphism flex flex-col justify-content-center align-items-center text-white text-center font-700'>
                    <PiExam className='text-3xl w-32' />
                    <p>   Preparation Modules for JAMB, GCE, WAEC, NECO, and TOEFL   </p>
                </div>
                <div className='p-2 rounded glassMorphism flex flex-col justify-content-center align-items-center text-white text-center font-700'>
                    <LuGroup className='text-3xl w-32' />
                    <p>   Online Community Learning   </p>
                </div>
                <div className='p-2 rounded glassMorphism flex flex-col justify-content-center align-items-center text-white text-center font-700'>
                    <PiVirtualReality className='text-3xl w-32' />
                    <p>   Coding and Programming Tools   </p>
                </div>
            </div>
        </section>)
    }
    // FAQ Section
    const FAQSection = () => {
        const faqs: { question: string, answer: string }[] = [
            {
                question: "How does the AI classroom work?",
                answer: "Our AI classroom uses advanced generative AI to create personalized lesson plans for any subject and topic. The AI tutor can teach in any language and adapts to your learning pace and style in real-time."
            },
            {
                question: "What makes EduAI University different?",
                answer: "EduAI University is the world's first remote AI university powered by the largest language model. It focuses on teaching practical skills and fundamentals needed to excel in your chosen career path."
            },
            {
                question: "Can I prepare for specific exams like JAMB, WAEC?",
                answer: "Yes! Our comprehensive exam preparation module supports JAMB, WAEC, NECO, GCE, TOEFL, and many other exams with CBT simulations and AI-generated practice tests."
            },
            {
                question: "Is the platform available in multiple languages?",
                answer: "Absolutely! Our AI chatbot and learning modules support multiple languages with age-sensitive responses and cultural context awareness."
            },
            {
                question: "How does the career advisor work?",
                answer: "Our AI career advisor analyzes your performance across subjects, identifies your strengths, and provides personalized career recommendations with detailed guidance on skill development."
            }
        ];

        return (
            <section id="faq" className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-xl text-gray-600">
                            Get answers to common questions about our AI-powered learning platform.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-md overflow-hidden"
                            >
                                <button
                                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                                    onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                                >
                                    <span className="text-lg font-semibold text-gray-900">
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-6 h-6 text-gray-500 transition-transform duration-200 ${activeAccordion === index ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>
                                {activeAccordion === index && (
                                    <div className="px-8 pb-6">
                                        <p className="text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    };

    // Contact Section
    const ContactSection = () => (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Get in Touch
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Ready to revolutionize your learning experience? Contact us to learn more
                        about our AI-powered educational platform.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">
                            Contact Information
                        </h3>

                        <div className="space-y-6">
                            {[
                                { icon: <Mail className="w-6 h-6" />, title: "Email", info: "social@eduwhizz.com.ng" },
                                { icon: <Phone className="w-6 h-6" />, title: "Phone", info: "+234-903-759-8947" },
                                { icon: <MapPin className="w-6 h-6" />, title: "Address", info: "No. 1 Geoffrey Close, AbuleOsurun, Ibeshe, Ikorodu, Lagos" }
                            ].map((contact, index) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                                        {contact.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-1">
                                            {contact.title}
                                        </h4>
                                        <p className="text-gray-600">
                                            {contact.info}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-3xl p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">
                            Send us a Message
                        </h3>

                        <div className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                                        placeholder="Your first name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                                        placeholder="Your last name"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                                    placeholder="Tell us about your learning goals..."
                                ></textarea>
                            </div>

                            <button
                                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                            >
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

    // Footer
    const Footer = () => (
        <footer className="bg-gray-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                                <Brain className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold">EduAI</span>
                        </div>
                        <p className="text-gray-400 mb-6 max-w-md">
                            Revolutionizing education through AI-powered learning experiences.
                            Join thousands of students already transforming their futures.
                        </p>
                        <div className="flex space-x-4">
                            {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                                <div key={social} className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors duration-200 cursor-pointer">
                                    <span className="text-sm">{social[0]}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6">Features</h4>
                        <ul className="space-y-4 text-gray-400">
                            {['AI Classroom', 'AI University', 'Career Advisor', 'Exam Prep', 'Multilingual'].map((item) => (
                                <li key={item} className="hover:text-white transition-colors duration-200 cursor-pointer">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6">Company</h4>
                        <ul className="space-y-4 text-gray-400">
                            {['About Us', 'Contact', 'Privacy', 'Terms', 'Support'].map((item) => (
                                <li key={item} className="hover:text-white transition-colors duration-200 cursor-pointer">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 EduAI. All rights reserved. Powered by cutting-edge AI technology.</p>
                </div>
            </div>
        </footer>
    );

    return (
        <div className="min-h-screen">
            <Navigation />
            <HeroSection />
            <FeaturesSection />
            <AboutSection />
            <ServiceSection />
            <FAQSection />
            <ContactSection />
            <Footer />
        </div>
    );
};

export default LandingPage;