import { motion } from 'framer-motion';
import { FaSchool, FaUserGraduate, FaChartBar, FaSms, FaChalkboardTeacher, FaUsers, FaCheckCircle, FaRegStar, FaRocket, FaLock, FaMobileAlt, FaEnvelope, FaGlobe, FaCogs, FaBars, FaTimes } from 'react-icons/fa';
// import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { useState } from 'react';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#footer' },
];

const specialServices = [
  {
    title: "School Management",
    desc: "Configure academic years, terms, and school levels. Set up sessions and manage the academic calendar with ease.",
    icon: <FaCogs className="text-cyan-400 w-10 h-10" />,
    number: "01",
  },
  {
    title: "Student Management",
    desc: "Add, edit, and filter students. Manage profiles, guardians, and empower students with their own dashboards.",
    icon: <FaUserGraduate className="text-cyan-400 w-10 h-10" />,
    number: "02",
  },
  {
    title: "Result Management",
    desc: "Set grading systems, divisions, and automate result computation. Secure, digital, and always accessible.",
    icon: <FaChartBar className="text-cyan-400 w-10 h-10" />,
    number: "03",
  },
  {
    title: "SMS Management",
    desc: "Send instant SMS to parents and staff. Track delivery and account history in real time.",
    icon: <FaSms className="text-cyan-400 w-10 h-10" />,
    number: "04",
  },
  {
    title: "Class Management",
    desc: "Create, edit, and organize classes and streams. Teachers can view and manage their class rosters effortlessly.",
    icon: <FaChalkboardTeacher className="text-cyan-400 w-10 h-10" />,
    number: "05",
  },
  {
    title: "Staff Management",
    desc: "Store staff details, evaluate performance, and streamline HR processes for your school.",
    icon: <FaUsers className="text-cyan-400 w-10 h-10" />,
    number: "06",
  },
];

const features = [
  {
    title: 'AI Insights',
    desc: 'Harness artificial intelligence for predictive analytics and actionable insights.',
    icon: <FaRocket className="text-purple-400 w-12 h-12 drop-shadow-neon" />,
  },
  {
    title: 'Bank-Grade Security',
    desc: 'All data is encrypted and protected with industry-leading security protocols.',
    icon: <FaLock className="text-purple-400 w-12 h-12 drop-shadow-neon" />,
  },
  {
    title: 'Mobile First',
    desc: 'Access EduWhizz on any device, anywhere, anytime.',
    icon: <FaMobileAlt className="text-purple-400 w-12 h-12 drop-shadow-neon" />,
  },
  {
    title: 'Global Access',
    desc: 'Multi-language, multi-currency, and timezone support for international schools.',
    icon: <FaGlobe className="text-purple-400 w-12 h-12 drop-shadow-neon" />,
  },
  {
    title: 'Automated Communication',
    desc: 'Automated emails, SMS, and in-app notifications keep everyone in the loop.',
    icon: <FaEnvelope className="text-purple-400 w-12 h-12 drop-shadow-neon" />,
  },
  {
    title: 'Custom Integrations',
    desc: 'Integrate with your favorite tools and platforms seamlessly.',
    icon: <FaCogs className="text-purple-400 w-12 h-12 drop-shadow-neon" />,
  },
];

const plans = [
  {
    name: 'Starter',
    price: '₦100',
    period: '/scoresheet',
    features: [
      'Up to 50 students',
      'Basic analytics',
      'Email & SMS support',
      'Secure fee collection',
    ],
    highlight: false,
  },
  {
    name: 'Pro',
    price: '₦80',
    period: '/scoresheet',
    features: [
      'Up to 5000 students',
      'Advanced analytics',
      'Priority support',
      'Parent engagement tools',
      'All Starter features',
    ],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Contact Us',
    period: '',
    features: [
      'Unlimited students',
      'Custom integrations',
      'Dedicated manager',
      'All features included',
    ],
    highlight: false,
  },
];

const testimonials = [
  {
    text: 'EduWhizz transformed our school. The automation and analytics are next-level.',
    name: 'Femi Akinlade',
    school: 'Start-Rite International School, Abuja',
    img: '/images/Screenshot 2025-06-25 125235.png',
    rating: 5,
  },
  {
    text: 'The payment integration is seamless and reliable. Parents love the convenience!',
    name: 'Ngozi Okafor',
    school: 'Queens College, Lagos',
    img: '/images/Screenshot 2025-06-25 125654.png',
    rating: 5,
  },
  {
    text: 'Performance tracking and communication tools are top-notch. Highly recommended.',
    name: 'Ayo Balogun',
    school: 'Federal Government College, Ibadan',
    img: '/images/image.png',
    rating: 4,
  },
];

const stats = [
  { label: "Schools", value: "100+", icon: <FaSchool className="text-cyan-400 w-8 h-8" /> },
  { label: "Students", value: "50,000+", icon: <FaUserGraduate className="text-cyan-400 w-8 h-8" /> },
  { label: "Uptime", value: "99.99%", icon: <FaCheckCircle className="text-cyan-400 w-8 h-8" /> },
  { label: "Support", value: "24/7", icon: <FaEnvelope className="text-cyan-400 w-8 h-8" /> },
];

const footerLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#footer' },
];

const gradientText = "bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent";

const LandingPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-[#0a0a23] min-h-screen font-sans text-gray-100">
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 bg-[#0a0a23]/80 backdrop-blur border-b border-[#18182f]">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          <div className="flex items-center gap-2">
            <img src="/images/EDUWIZZ.png" alt="EduWhizz Logo" className="w-10 h-10" />
            <span className={`font-bold text-2xl ${gradientText}`}>EduWhizz</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-6 font-medium text-gray-300">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="relative hover:text-cyan-400 transition after:block after:h-0.5 after:bg-cyan-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left after:duration-300">{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-[#0a0a23]/95 backdrop-blur border-t border-[#18182f]"
        >
          <nav className="px-6 py-4">
            <ul className="flex flex-col gap-4 font-medium text-gray-300">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href} 
                    className="block py-2 hover:text-cyan-400 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      </header>

      {/* HERO SECTION */}
      <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-[#18182f] to-[#0a0a23] overflow-hidden">
        {/* Animated background blobs */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-cyan-900 rounded-full opacity-30 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, 40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-900 rounded-full opacity-30 blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-6 py-16">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            The Future of School Management
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl px-4"
          >
            Automate. Analyze. Engage. <span className="text-cyan-400 font-bold">EduWhizz</span> is the all-in-one platform for next-generation schools.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center w-full max-w-md">
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg transition"
            >
              Start Free Trial
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white/10 hover:bg-white/20 text-cyan-300 font-bold py-3 px-8 rounded-lg text-lg border border-cyan-400 transition"
            >
              Book a Demo
            </motion.button>
          </div>
          <div className="grid grid-cols-2 md:flex md:gap-8 gap-4 mt-4 justify-center w-full max-w-md">
            {/* Example stats or floating icons */}
            <div className="flex flex-col items-center">
              <span className="text-cyan-400 text-2xl md:text-3xl font-bold">100+</span>
              <span className="text-xs text-gray-400">Schools</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-cyan-400 text-2xl md:text-3xl font-bold">50K+</span>
              <span className="text-xs text-gray-400">Students</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-cyan-400 text-2xl md:text-3xl font-bold">99.9%</span>
              <span className="text-xs text-gray-400">Uptime</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-cyan-400 text-2xl md:text-3xl font-bold">24/7</span>
              <span className="text-xs text-gray-400">Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-16 md:py-20 px-4 bg-[#18182f] border-b border-[#23234a]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${gradientText}`}>About EduWhizz</h2>
          <p className="text-base md:text-lg text-gray-300 mb-6 px-4">
            EduWhizz is dedicated to simplifying school administration and amplifying learning through innovative technology. Our mission is to empower educators, engage parents, and help students thrive in a digital world.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 px-4">
            <div className="bg-cyan-900/30 border border-cyan-800 rounded-xl px-4 md:px-6 py-3 md:py-4 text-cyan-300 font-semibold text-sm md:text-base">AI-powered Insights</div>
            <div className="bg-cyan-900/30 border border-cyan-800 rounded-xl px-4 md:px-6 py-3 md:py-4 text-cyan-300 font-semibold text-sm md:text-base">Seamless Automation</div>
            <div className="bg-cyan-900/30 border border-cyan-800 rounded-xl px-4 md:px-6 py-3 md:py-4 text-cyan-300 font-semibold text-sm md:text-base">Next-generation Security</div>
            <div className="bg-cyan-900/30 border border-cyan-800 rounded-xl px-4 md:px-6 py-3 md:py-4 text-cyan-300 font-semibold text-sm md:text-base">Parent Engagement</div>
          </div>
        </div>
      </section>

      {/* SPECIAL SERVICES */}
      <section id="services" className="py-16 md:py-24 px-4 bg-gradient-to-br from-[#18182f] to-[#0a0a23] border-b border-[#23234a]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16 text-center">
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${gradientText}`}>Special Services</h2>
            <p className="text-base md:text-lg text-gray-400 px-4">Discover the unique features that set EduWhizz apart for schools, students, and staff.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {specialServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="relative bg-[#18182f]/80 border border-cyan-900 rounded-2xl shadow-lg p-6 md:p-8 flex flex-col items-start backdrop-blur-lg"
              >
                <span className="absolute -top-4 md:-top-6 left-4 md:left-6 text-3xl md:text-4xl font-extrabold text-cyan-900/30 drop-shadow-lg select-none">{service.number}</span>
                <div className="mb-4">{service.icon}</div>
                <h3 className="font-bold text-xl md:text-2xl mb-2 mt-2 text-cyan-300">{service.title}</h3>
                <p className="text-gray-300 text-sm md:text-base">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DEMO SECTION */}
      <section id="demo" className="py-16 md:py-24 px-4 bg-gradient-to-br from-[#18182f] to-[#0a0a23] border-b border-[#23234a]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">See EduWhizz in Action</h2>
            <p className="text-base md:text-lg text-gray-400 px-4">Explore our platform&apos;s interface and features through these live demo shots.</p>
          </div>
          <div className="flex flex-col gap-12 md:gap-20">
            {[
              {
                img: '/images/dashboard.png',
                desc: 'Dashboard overview: Get a bird\'s-eye view of your school\'s performance and key metrics.'
              },
              {
                img: '/images/result.png',
                desc: 'Student results: Instantly access, analyze, and share student performance reports.'
              },
              {
                img: '/images/performance.jpg',
                desc: 'Performance analytics: Visualize trends and insights with beautiful, easy-to-read charts.'
              },
              {
                img: '/images/student reg (1).png',
                desc: 'Student registration: Effortlessly add and manage student profiles with all necessary details.'
              },
              {
                img: '/images/manage-class.png',
                desc: 'A class management platform that allows form teachers to easily organize and manage student information within their assigned class.'
              },
              {
                img: '/images/sms.png',
                desc: 'With this fuction you can send sms to both staffs,parents without stress...'
              },
              {
                img: '/images/reg.jpg',
                desc: 'Fee collection: Secure, automated payment processing and tracking.'
              }
            ].map((demo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-6 md:gap-10 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <img src={demo.img} alt={demo.desc} className="rounded-2xl w-full md:w-1/2 h-48 md:h-64 object-cover border-2 border-cyan-800 shadow-lg" />
                <div className="flex-1 text-center md:text-left">
                  <p className="text-gray-200 text-lg md:text-xl font-semibold mb-4">{demo.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES SWIPER SECTION */}
      <section id="features" className="py-16 md:py-24 px-4 bg-[#0a0a23] border-b border-[#23234a]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16 text-center">
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${gradientText}`}>Features</h2>
            <p className="text-base md:text-lg text-gray-400 px-4">Everything you need to run your school efficiently.</p>
          </div>
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            navigation
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Navigation, Pagination]}
            className="w-full max-w-4xl"
          >
            {features.map((f, i) => (
              <SwiperSlide key={i}>
                <div className="bg-[#18182f]/80 border border-purple-900 rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col items-center text-center backdrop-blur-lg mx-2 transition-transform duration-300 hover:scale-105"
                  style={{ boxShadow: '0 0 40px 0 #a855f7, 0 2px 16px 0 #0008' }}>
                  <div className="mb-6">{f.icon}</div>
                  <h3 className="font-bold text-xl md:text-2xl mb-3 text-purple-200 drop-shadow-neon">{f.title}</h3>
                  <p className="text-gray-300 text-base md:text-lg font-medium">{f.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* IMPACT / STATS / TESTIMONIALS */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-[#18182f] to-[#0a0a23] border-b border-[#23234a]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 md:mb-16 text-center">
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${gradientText}`}>Our Impact</h2>
            <p className="text-base md:text-lg text-gray-400 px-4">Trusted by leading schools and educators across Nigeria and beyond.</p>
          </div>
          <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-6 md:gap-12 mb-12 md:mb-16">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                {stat.icon}
                <div className="text-2xl md:text-3xl font-bold text-cyan-300 mt-2">{stat.value}</div>
                <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="bg-[#18182f]/80 border border-cyan-900 rounded-2xl shadow-lg p-6 md:p-8 flex flex-col items-center text-center backdrop-blur-lg"
              >
                <img src={t.img} alt={t.name} className="w-16 h-16 object-cover rounded-full mb-4 border-2 border-cyan-400" />
                <div className="flex mb-2">
                  {[...Array(t.rating)].map((_, j) => (
                    <FaRegStar key={j} className="text-yellow-400 text-lg" />
                  ))}
                </div>
                <p className="text-gray-200 mb-4 text-sm md:text-base">"{t.text}"</p>
                <div className="font-bold text-cyan-300 text-sm md:text-base">{t.name}</div>
                <div className="text-gray-400 text-xs md:text-sm">{t.school}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-16 md:py-24 px-4 bg-[#0a0a23] border-b border-[#23234a]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className={`text-3xl md:text-4xl font-bold mb-2 ${gradientText}`}>Pricing</h2>
            <p className="text-gray-400 text-base md:text-lg">Simple, transparent pricing for every school size.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className={`rounded-2xl border shadow-lg p-6 md:p-8 flex flex-col items-center text-center backdrop-blur-lg ${plan.highlight ? 'border-cyan-400 bg-cyan-900/30' : 'border-gray-700 bg-[#18182f]/80'}`}
              >
                <h3 className="font-bold text-xl md:text-2xl mb-2 text-cyan-300">{plan.name}</h3>
                <div className="text-3xl md:text-4xl font-extrabold mb-2 text-white">{plan.price} <span className="text-base md:text-lg font-normal text-gray-400">{plan.period}</span></div>
                <ul className="mb-6 text-gray-300 text-left space-y-2 text-sm md:text-base">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center"><FaCheckCircle className="text-cyan-400 mr-2" />{f}</li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-bold transition-all duration-300 text-sm md:text-base ${plan.highlight ? 'bg-cyan-500 text-white hover:bg-cyan-600' : 'bg-white/10 text-cyan-300 border border-cyan-400 hover:bg-white/20'}`}>Get Started</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-br from-[#18182f] to-[#0a0a23] border-b border-[#23234a]">
        <div className="max-w-xl mx-auto text-center">
          <h3 className={`text-xl md:text-2xl font-bold mb-2 ${gradientText}`}>Join 100+ Subscribers</h3>
          <p className="text-gray-400 mb-6 text-sm md:text-base">Stay in the loop with everything you need to know.</p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Email address"
              className="border border-cyan-700 bg-[#18182f] text-cyan-200 rounded-lg px-4 py-3 flex-1 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm md:text-base"
            />
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-6 md:px-8 py-3 rounded-lg transition text-sm md:text-base">Subscribe</button>
          </form>
          <p className="text-xs text-gray-500 mt-2">We care about your data in our privacy policy.</p>
        </div>
      </section>

      {/* CONTACT US SECTION */}
      <section id="contact" className="py-16 md:py-24 px-4 bg-gradient-to-br from-[#18182f] to-[#0a0a23] border-b border-[#23234a]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Get In Touch</h2>
            <p className="text-base md:text-lg text-gray-400 px-4">Ready to transform your school? Let's start the conversation.</p>
          </div>
          
          <motion.form 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#18182f]/80 border border-cyan-900 rounded-3xl shadow-2xl p-6 md:p-8 lg:p-12 backdrop-blur-lg"
            style={{ boxShadow: '0 0 40px 0 #0891b2, 0 2px 16px 0 #0008' }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  className="w-full bg-[#0a0a23]/50 border border-cyan-800 rounded-xl px-4 py-3 md:py-4 text-cyan-200 placeholder-transparent focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 peer text-sm md:text-base"
                  placeholder="Your Name"
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 top-3 md:top-4 text-gray-400 transition-all duration-300 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-cyan-400 peer-focus:text-sm peer-[-webkit-autofill]:-top-2 peer-[-webkit-autofill]:left-2 peer-[-webkit-autofill]:text-cyan-400 peer-[-webkit-autofill]:text-sm text-sm md:text-base"
                >
                  Your Name
                </label>
              </div>
              
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  className="w-full bg-[#0a0a23]/50 border border-cyan-800 rounded-xl px-4 py-3 md:py-4 text-cyan-200 placeholder-transparent focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 peer text-sm md:text-base"
                  placeholder="Your Email"
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-3 md:top-4 text-gray-400 transition-all duration-300 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-cyan-400 peer-focus:text-sm peer-[-webkit-autofill]:-top-2 peer-[-webkit-autofill]:left-2 peer-[-webkit-autofill]:text-cyan-400 peer-[-webkit-autofill]:text-sm text-sm md:text-base"
                >
                  Your Email
                </label>
              </div>
            </div>
            
            <div className="relative mb-6 md:mb-8">
              <input
                type="text"
                id="subject"
                className="w-full bg-[#0a0a23]/50 border border-cyan-800 rounded-xl px-4 py-3 md:py-4 text-cyan-200 placeholder-transparent focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 peer text-sm md:text-base"
                placeholder="Subject"
              />
              <label
                htmlFor="subject"
                className="absolute left-4 top-3 md:top-4 text-gray-400 transition-all duration-300 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-cyan-400 peer-focus:text-sm peer-[-webkit-autofill]:-top-2 peer-[-webkit-autofill]:left-2 peer-[-webkit-autofill]:text-cyan-400 peer-[-webkit-autofill]:text-sm text-sm md:text-base"
              >
                Subject
              </label>
            </div>
            
            <div className="relative mb-6 md:mb-8">
              <textarea
                id="message"
                rows={6}
                className="w-full bg-[#0a0a23]/50 border border-cyan-800 rounded-xl px-4 py-3 md:py-4 text-cyan-200 placeholder-transparent focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 peer resize-none text-sm md:text-base"
                placeholder="Your Message"
              />
              <label
                htmlFor="message"
                className="absolute left-4 top-3 md:top-4 text-gray-400 transition-all duration-300 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-cyan-400 peer-focus:text-sm peer-[-webkit-autofill]:-top-2 peer-[-webkit-autofill]:left-2 peer-[-webkit-autofill]:text-cyan-400 peer-[-webkit-autofill]:text-sm text-sm md:text-base"
              >
                Your Message
              </label>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-xl text-base md:text-lg shadow-lg transition-all duration-300 transform hover:shadow-cyan-500/25"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="footer" className="bg-[#18182f] text-gray-400 py-8 md:py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          <div className="text-center md:text-left">
            <img src="/images/EDUWIZZ.png" alt="EduWhizz Logo" className="w-24 md:w-32 mb-4 mx-auto md:mx-0" />
            <p className="text-gray-500 text-xs md:text-sm max-w-xs mb-4">Simplifying administration and amplifying learning through technology.</p>
            <div className="flex gap-2 justify-center md:justify-start">
              <img src="/images/google-play.png" alt="Google Play" className="w-6 md:w-8 h-6 md:h-8" />
              <img src="/images/app-store.png" alt="App Store" className="w-6 md:w-8 h-6 md:h-8" />
              <span className="text-xs text-gray-500 ml-2">Mobile App's Coming Soon</span>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <nav className="mb-4">
              <ul className="flex flex-wrap gap-3 md:gap-4 text-sm md:text-base">
                {footerLinks.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="hover:text-cyan-400">{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <p className="text-xs text-gray-600">© 2024 EduWhizz. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage; 