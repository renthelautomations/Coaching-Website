/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Zap, 
  FileText, 
  Repeat, 
  Database, 
  BarChart2, 
  ChevronRight, 
  Search, 
  Layers, 
  CheckCircle,
  Star,
  Users,
  Briefcase,
  ShieldCheck,
  MapPin,
  Phone,
  ArrowRight,
  Quote,
  Facebook,
  Instagram,
  Mail,
  Calendar,
  Sparkles,
  Clock,
  Compass
} from 'lucide-react';

// --- Data ---

const NAV_LINKS = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Testimonial', href: '#testimonials' },
  { name: 'Book a Call', href: '#booking' },
];

const SERVICES = [
  {
    icon: <Sparkles className="w-6 h-6 text-blue-400" />,
    title: 'Clarity Sessions',
    description: 'Untangle your thoughts and finally understand what you actually want.',
    highlight: false,
  },
  {
    icon: <Users className="w-6 h-6 text-[#4ADE80]" />,
    title: '1-on-1 Coaching',
    description: 'Work directly with Renthel to stop overthinking and start taking action. Small steps. Real progress.',
    highlight: true,
  },
  {
    icon: <Clock className="w-6 h-6 text-orange-400" />,
    title: 'Accountability Coaching',
    description: 'For when you know what to do… but you’re not doing it.',
    highlight: false,
  },
  {
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    title: 'Mindset Reset',
    description: 'Break the patterns that keep you stuck in the same place.',
    highlight: false,
  },
  {
    icon: <Compass className="w-6 h-6 text-teal-400" />,
    title: 'Career Direction',
    description: 'Figure out what path actually fits you, not just what looks good on paper.',
    highlight: false,
  },
  {
    icon: <Calendar className="w-6 h-6 text-purple-400" />,
    title: 'Life Planning Sessions',
    description: 'Turn “I should probably…” into a simple plan you can follow.',
    highlight: false,
  },
];

const WHY_CHOOSE_FEATURES = [
  {
    icon: <Users className="w-5 h-5 text-primary" />,
    title: 'It’s Personal',
    description: 'You’re not getting generic advice. You’re working directly with Renthel.',
  },
  {
    icon: <Zap className="w-5 h-5 text-primary" />,
    title: 'It’s Simple',
    description: 'We focus on what matters so you don’t stay stuck in overthinking.',
  },
  {
    icon: <BarChart2 className="w-5 h-5 text-primary" />,
    title: 'It Actually Moves You',
    description: 'Every session ends with clear next steps you can actually follow.',
  },
  {
    icon: <CheckCircle className="w-5 h-5 text-primary" />,
    title: 'It’s Honest',
    description: 'No fluff. No pretending. Just clarity you can use.',
  },
];

const INDUSTRIES = [
  { name: 'You feel stuck but don’t know why', icon: <Search className="w-4 h-4" /> },
  { name: 'You keep overthinking every decision', icon: <Repeat className="w-4 h-4" /> },
  { name: 'You want change but don’t know where to start', icon: <MapPin className="w-4 h-4" /> },
  { name: 'You’re tired of figuring everything out alone', icon: <Users className="w-4 h-4" /> },
  { name: 'You know you’re capable of more… but you’re not moving', icon: <Zap className="w-4 h-4" /> },
];

const TESTIMONIALS = [
  {
    quote: "I stopped going in circles. I finally knew what to do next.",
    name: "Mark",
    role: "Client",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&h=100&auto=format&fit=crop",
    emphasized: true,
  },
  {
    quote: "It felt like someone helped me organize my entire life in one conversation.",
    name: "Sarah",
    role: "Client",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&auto=format&fit=crop",
    emphasized: false,
  },
  {
    quote: "I didn’t need motivation. I needed clarity. That’s what I got.",
    name: "James",
    role: "Client",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&h=100&auto=format&fit=crop",
    emphasized: false,
  },
];

const FAQS = [
  {
    question: "What exactly is a Clarity Session?",
    answer: "It's a 60-minute deep dive where we untangle your current situation. We look at where you are, where you're stuck, and identify the single most important move you can make right now."
  },
  {
    question: "Do I need to have a specific goal before we start?",
    answer: "Not at all. In fact, most people come to me because they have too many goals or no clear direction. Figuring out the 'what' is part of the process."
  },
  {
    question: "How long does coaching usually last?",
    answer: "It varies. Some people get what they need in a single session, while others prefer ongoing accountability for 3-6 months. We decide what's best for you after the first call."
  },
  {
    question: "Is this like therapy?",
    answer: "No. While we might discuss your past to understand patterns, coaching is primarily future-focused and action-oriented. We focus on 'what's next' rather than 'why it happened'."
  }
];

const LOGOS = [
  { name: "TechFlow", icon: <Database size={24} /> },
  { name: "MindsetCo", icon: <Zap size={24} /> },
  { name: "GrowthLabs", icon: <BarChart2 size={24} /> },
  { name: "ClarityInc", icon: <Search size={24} /> },
  { name: "FuturePath", icon: <Compass size={24} /> },
];

// --- Components ---

const NoiseOverlay = () => <div className="noise-overlay" />;

const AmbientOrbs = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <div className="ambient-orb w-[600px] h-[600px] bg-accent -top-48 -left-48" />
    <div className="ambient-orb w-[500px] h-[500px] bg-accent bottom-0 -right-24 opacity-[0.02]" />
  </div>
);

const Button = ({ children, variant = 'primary', className = '', ...props }: any) => {
  const baseStyles = "px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";
  const variants: any = {
    primary: "bg-accent text-accent-foreground hover:brightness-110 hover:shadow-glow-sm",
    secondary: "bg-transparent text-foreground border border-white/15 hover:bg-white/5 hover:border-white/25",
    ghost: "bg-transparent text-foreground hover:bg-white/5",
    glass: "glass glass-hover text-foreground",
  };

  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const ref = React.useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.2;
    const y = (clientY - (top + height / 2)) * 0.2;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

const SectionLabel = ({ children }: any) => (
  <motion.div 
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="flex items-center gap-3 mb-6"
  >
    <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-glow-sm" />
    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{children}</span>
  </motion.div>
);

const GlassCard = ({ children, className = "", highlighted = false, delay = 0 }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ scale: 1.02 }}
    className={`glass p-8 rounded-xl transition-all duration-300 ${highlighted ? 'border-accent/20 shadow-glow-sm bg-muted/40' : 'glass-hover'} ${className}`}
  >
    {children}
  </motion.div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string, [key: string]: any }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-white/5 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group focus-visible:outline-none"
      >
        <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-accent' : 'group-hover:text-foreground'}`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-muted-foreground"
        >
          <ChevronRight size={20} />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-muted-foreground leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </div>
  );
};

const SocialLinks = ({ className = "" }) => (
  <div className={`flex items-center gap-6 ${className}`}>
    <a href="https://www.facebook.com/rnthlcueto" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors focus-visible:text-accent focus-visible:outline-none">
      <Facebook size={20} strokeWidth={1.5} />
    </a>
    <a href="https://www.instagram.com/rnthlcueto" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors focus-visible:text-accent focus-visible:outline-none">
      <Instagram size={20} strokeWidth={1.5} />
    </a>
    <a href="mailto:rnthlcueto@gmail.com" className="text-muted-foreground hover:text-accent transition-colors focus-visible:text-accent focus-visible:outline-none">
      <Mail size={20} strokeWidth={1.5} />
    </a>
  </div>
);

// --- Main App ---

export default function App() {
  const [imageError, setImageError] = React.useState<Record<string, boolean>>({});
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleImageError = (id: string) => {
    setImageError(prev => ({ ...prev, [id]: true }));
  };

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30 selection:text-accent overflow-x-hidden">
      <NoiseOverlay />
      <AmbientOrbs />
      
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass border-b border-white/5' : 'py-8'}`}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center">
          <div className="font-display font-bold text-2xl tracking-tight cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Renthel
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link, idx) => (
              <a 
                key={idx} 
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  if (link.href === '#') window.scrollTo({ top: 0, behavior: 'smooth' });
                  else scrollToSection(link.href.replace('#', ''));
                }}
                className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors focus-visible:text-accent focus-visible:outline-none"
              >
                {link.name}
              </a>
            ))}
            <Button variant="primary" className="px-6 py-2 text-sm" onClick={scrollToBooking}>
              Contact
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <motion.span 
                animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 9 : 0 }}
                className="w-full h-0.5 bg-foreground rounded-full"
              />
              <motion.span 
                animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                className="w-full h-0.5 bg-foreground rounded-full"
              />
              <motion.span 
                animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -9 : 0 }}
                className="w-full h-0.5 bg-foreground rounded-full"
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isMobileMenuOpen ? "auto" : 0, opacity: isMobileMenuOpen ? 1 : 0 }}
          className="md:hidden overflow-hidden glass border-b border-white/5"
        >
          <div className="flex flex-col gap-6 p-8">
            {NAV_LINKS.map((link, idx) => (
              <a 
                key={idx} 
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  if (link.href === '#') window.scrollTo({ top: 0, behavior: 'smooth' });
                  else scrollToSection(link.href.replace('#', ''));
                }}
                className="text-xl font-medium text-muted-foreground hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button variant="primary" className="w-full py-4" onClick={scrollToBooking}>
              Contact
            </Button>
          </div>
        </motion.div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex flex-col px-6 md:px-12 lg:px-24 pt-40 pb-24 md:pb-32 lg:py-40">

        {/* Hero Content Area */}
        <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 max-w-6xl mx-auto w-full">
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-8"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] max-w-[12ch] [text-wrap:balance]">
              You’re Not Lost. You’re Just Overthinking Your Next Move.
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-[480px]">
              If your life feels like 10 open tabs and none of them are loading, I help you slow down, get clear, and finally move.
            </p>
            
            <Button 
              className="self-start px-8 py-4 text-lg"
              onClick={scrollToBooking}
            >
              Let’s Figure It Out <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full aspect-square lg:aspect-auto h-full min-h-[400px] flex items-center justify-center"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Image Container with Glow */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="absolute inset-0 bg-accent/20 blur-[120px] rounded-full animate-pulse" />
                <img 
                  src={imageError['hero'] ? "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" : "https://storage.googleapis.com/test-media-studio/67fbe396e4b0000000000000/67fbe396e4b0000000000000_0.png"} 
                  alt="Renthel - Clarity Coach" 
                  className="relative z-10 w-full h-full object-cover object-top max-h-[600px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:scale-[1.02] rounded-2xl"
                  referrerPolicy="no-referrer"
                  onError={() => handleImageError('hero')}
                />
              </div>
              
              {/* Floating Badge 1 (Trust Badge) */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -left-4 md:-left-8 top-12 glass p-5 rounded-xl max-w-[240px] shadow-xl z-20"
              >
                <p className="text-sm leading-relaxed">
                  ⭐ 4.9 from people who stopped second-guessing themselves
                </p>
              </motion.div>

              {/* Floating Badge 2 (Identifier) */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -right-4 bottom-12 glass p-4 rounded-xl shadow-xl z-20"
              >
                <span className="font-semibold text-sm whitespace-nowrap flex items-center gap-2">
                  <CheckCircle className="text-accent w-4 h-4" /> Guided by Renthel
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- TRUSTED BY SECTION --- */}
      <section className="py-12 border-y border-white/5 bg-background-alt/50">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          <p className="w-full md:w-auto text-center md:text-left text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4 md:mb-0">
            Trusted by teams at
          </p>
          {LOGOS.map((logo, idx) => (
            <div key={idx} className="flex items-center gap-2">
              {logo.icon}
              <span className="font-display font-bold text-lg">{logo.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-24 md:py-32 lg:py-40 bg-background-alt relative">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left Column: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-accent/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <img 
              src={imageError['about'] ? "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop&crop=faces" : "https://storage.googleapis.com/test-media-studio/67fbe247e4b0000000000000/67fbe247e4b0000000000000_0.png"} 
              alt="Renthel - Clarity Coach" 
              className="relative z-10 w-full aspect-[4/5] object-cover object-top rounded-2xl border border-white/10 shadow-2xl transition-all duration-700 group-hover:scale-[1.02] group-hover:border-accent/20"
              referrerPolicy="no-referrer"
              onError={() => handleImageError('about')}
            />
          </motion.div>

          {/* Right Column: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8 items-start"
          >
            <SectionLabel>About Me</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold [text-wrap:balance]">
              Hi, I’m Renthel
            </h2>

            <div className="flex flex-col gap-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I work with people who feel stuck in between “I know I want more” and “I don’t know what to do next.”
              </p>
              <p className="font-semibold text-foreground">
                Not broken. Not lazy. Just overwhelmed.
              </p>
              <p>
                I’ve been in that place too. That’s why I focus on helping you clear the noise, understand what actually matters to you, and take the next step that makes sense.
              </p>
              <p>
                No complicated systems. Just real conversations that lead to real movement.
              </p>
            </div>
            
            <Button 
              variant="secondary"
              className="px-8 py-4"
              onClick={scrollToBooking}
            >
              See How I Can Help
            </Button>
          </motion.div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-24 md:py-32 lg:py-40 relative">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex flex-col gap-4 mb-16">
            <SectionLabel>Services</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold [text-wrap:balance]">
              Ways I Can Help You Move Forward
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <GlassCard 
                key={idx}
                highlighted={service.highlight}
                delay={idx * 0.1}
              >
                {service.highlight && (
                  <span className="bg-accent/20 text-accent text-[10px] uppercase tracking-widest px-3 py-1 rounded-full w-max mb-6 font-bold">
                    Main Offer
                  </span>
                )}
                
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-8 ${
                  service.highlight ? 'bg-accent/20 text-accent' : 'bg-white/5 text-muted-foreground'
                }`}>
                  {React.cloneElement(service.icon as React.ReactElement, { size: 24, strokeWidth: 1.5, className: "" })}
                </div>
                
                <h3 className={`font-bold mb-4 ${service.highlight ? 'text-2xl' : 'text-xl'}`}>
                  {service.title}
                </h3>
                
                <p className={`leading-relaxed mb-8 ${service.highlight ? 'text-foreground/80' : 'text-muted-foreground'}`}>
                  {service.description}
                </p>
                
                {service.highlight && (
                  <Button 
                    className="w-full mt-auto"
                    onClick={scrollToBooking}
                  >
                    Learn More
                  </Button>
                )}
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE SECTION --- */}
      <section className="py-24 md:py-32 lg:py-40 bg-background-alt relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div 
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group"
          >
            <img 
              src={imageError['why'] ? "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" : "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"} 
              alt="Why Renthel" 
              className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
              onError={() => handleImageError('why')}
            />
            <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          <div className="flex flex-col gap-8">
            <SectionLabel>Why This Works</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight [text-wrap:balance]">
              Because You Don’t Need More Advice. You Need Clarity.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Experience the difference of working with a dedicated professional who prioritizes your growth and clarity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">
              {WHY_CHOOSE_FEATURES.map((feature, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col gap-4"
                >
                  <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-accent">
                    {React.cloneElement(feature.icon as React.ReactElement, { size: 20, strokeWidth: 1.5 })}
                  </div>
                  <h3 className="text-base font-bold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <Button variant="secondary" className="self-start mt-4" onClick={scrollToBooking}>
              Start With One Conversation <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* --- FOR YOU IF SECTION --- */}
      <section className="py-24 md:py-32 lg:py-40 relative">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex flex-col items-center mb-16">
            <SectionLabel>This Is For You If…</SectionLabel>
            <div className="w-12 h-px bg-accent/30 mt-4" />
          </div>
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {INDUSTRIES.map((industry, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center gap-4 px-6 py-4 glass rounded-xl shadow-sm hover:border-accent/30 transition-all cursor-default group"
              >
                <div className="text-accent group-hover:scale-110 transition-transform">
                  {React.cloneElement(industry.icon as React.ReactElement, { size: 18, strokeWidth: 1.5 })}
                </div>
                <span className="text-sm font-medium">
                  {industry.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIAL SECTION --- */}
      <section id="testimonials" className="py-24 md:py-32 lg:py-40 bg-background-alt relative">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex flex-col items-center text-center mb-20">
            <SectionLabel>Testimonials</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold [text-wrap:balance]">
              What People Say After Working With Renthel
            </h2>
            <p className="text-muted-foreground max-w-[600px] mt-6 text-lg">
              Hear what our satisfied clients have to say about our journey together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, idx) => (
              <GlassCard 
                key={idx}
                highlighted={testimonial.emphasized}
                delay={idx * 0.1}
                className="flex flex-col gap-8"
              >
                <Quote className={`w-8 h-8 ${testimonial.emphasized ? 'text-accent' : 'text-muted-foreground/30'}`} strokeWidth={1.5} />
                <p className="text-lg leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4 mt-auto pt-8 border-t border-white/5">
                  <div className="relative w-12 h-12">
                    <img 
                      src={imageError[`avatar-${idx}`] ? `https://ui-avatars.com/api/?name=${testimonial.name}&background=F59E0B&color=0A0A0F` : testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-full h-full rounded-full object-cover border border-white/10"
                      referrerPolicy="no-referrer"
                      onError={() => handleImageError(`avatar-${idx}`)}
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          <div className="mt-20 text-center flex flex-col items-center gap-6">
            <p className="text-muted-foreground font-medium">
              Still unsure? Reach out and ask anything before you book.
            </p>
            <SocialLinks />
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 md:py-32 lg:py-40 relative">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Common Questions</h2>
            <p className="text-muted-foreground text-lg">Everything you need to know about starting your clarity journey.</p>
          </div>
          <div className="glass p-8 rounded-2xl border-white/5">
            {FAQS.map((faq, idx) => (
              <FAQItem key={idx} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* --- BOOKING SECTION --- */}
      <section id="booking" className="py-24 md:py-32 lg:py-40 bg-background-alt relative">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex flex-col items-center text-center mb-16">
            <SectionLabel>Booking</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold [text-wrap:balance]">
              Book Your Free Clarity Call
            </h2>
            <p className="text-muted-foreground max-w-[600px] mt-6 text-lg">
              Pick a time that works for you. No pressure, just a real conversation to help you get clear.
            </p>
          </div>

          <GlassCard className="min-h-[600px] flex flex-col md:flex-row gap-12 p-0 overflow-hidden border-white/10">
            {/* Calendar Visual */}
            <div className="flex-1 p-8 md:p-12 bg-white/5 border-r border-white/5">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold">April 2026</h3>
                <div className="flex gap-2">
                  <div className="w-8 h-8 glass rounded-full flex items-center justify-center text-muted-foreground"><ChevronRight className="rotate-180" size={16} /></div>
                  <div className="w-8 h-8 glass rounded-full flex items-center justify-center text-muted-foreground"><ChevronRight size={16} /></div>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-2 text-center text-xs font-mono text-muted-foreground mb-4">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, idx) => <div key={`${d}-${idx}`}>{d}</div>)}
              </div>
              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 30 }).map((_, i) => {
                  const day = i + 1;
                  const isAvailable = [13, 14, 15, 20, 21, 22].includes(day);
                  const isSelected = day === 13;
                  return (
                    <div 
                      key={i} 
                      className={`aspect-square flex items-center justify-center rounded-lg text-sm transition-all ${
                        isSelected ? 'bg-accent text-accent-foreground font-bold shadow-glow-sm' : 
                        isAvailable ? 'glass hover:border-accent/50 cursor-pointer' : 
                        'text-muted-foreground/20'
                      }`}
                    >
                      {day}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Time Slots Visual */}
            <div className="flex-1 p-8 md:p-12 flex flex-col gap-8">
              <div>
                <h3 className="text-xl font-bold mb-2">Monday, April 13</h3>
                <p className="text-sm text-muted-foreground">Select a time that works for you</p>
              </div>
              <div className="flex flex-col gap-3">
                {['09:00 AM', '10:30 AM', '01:00 PM', '02:30 PM', '04:00 PM'].map((time, i) => (
                  <div key={i} className="glass p-4 rounded-xl flex items-center justify-between group hover:border-accent/50 cursor-pointer transition-all">
                    <span className="font-medium">{time}</span>
                    <Button variant="ghost" className="opacity-0 group-hover:opacity-100 py-1 px-4 text-xs">Select</Button>
                  </div>
                ))}
              </div>
              <p className="mt-auto text-xs text-muted-foreground flex items-center gap-2">
                <Clock size={14} /> All times are in your local timezone
              </p>
            </div>
          </GlassCard>

          {/* Removed contact section as requested */}
        </div>
      </section>

      {/* --- FINAL CTA SECTION --- */}
      <section className="py-24 md:py-32 lg:py-40 bg-background-alt relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 blur-[120px] rounded-full -bottom-48 left-1/2 -translate-x-1/2" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center gap-10">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight [text-wrap:balance]">
            You Don’t Need Everything Figured Out.
          </h2>
          <p className="text-muted-foreground text-xl max-w-[500px] leading-relaxed">
            You just need a place to start. This could be it.
          </p>
          <div className="flex flex-col items-center gap-8">
            <Button className="px-10 py-5 text-xl" onClick={scrollToBooking}>
              Book Your Free Call
            </Button>
            <div className="flex flex-col gap-4">
              <p className="text-muted-foreground text-xs uppercase tracking-widest font-bold">
                Or message me here:
              </p>
              <div className="flex items-center gap-8 text-sm font-medium">
                <a href="https://www.facebook.com/rnthlcueto" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">Facebook</a>
                <a href="https://www.instagram.com/rnthlcueto" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">Instagram</a>
                <a href="mailto:rnthlcueto@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">Email</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-20 border-t border-white/5 relative z-10">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-16 items-center">
          <div className="flex flex-col gap-3">
            <h4 className="font-display font-bold text-2xl tracking-tight">Renthel</h4>
            <p className="text-muted-foreground text-sm">
              Helping you get clear and move forward
            </p>
          </div>

          <div className="flex justify-center">
            <SocialLinks />
          </div>

          <div className="flex flex-col md:items-end gap-3">
            <p className="text-muted-foreground text-xs font-mono">
              &copy; 2026 Renthel. All rights reserved.
            </p>
            <a href="mailto:rnthlcueto@gmail.com" className="text-muted-foreground hover:text-accent text-xs transition-colors font-mono">
              rnthlcueto@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
