import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar, 
  User, 
  ChevronRight, 
  HeartPulse, 
  Stethoscope, 
  Brain, 
  Bone, 
  Baby, 
  Ambulance, 
  Menu, 
  X, 
  Star,
  CheckCircle2,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [isScrolled, setIsScrolled] = useState(false);
  const [bookingStatus, setBookingStatus] = useState(null);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { id: 'cardiology', title: 'Cardiology', icon: <HeartPulse className="w-8 h-8" />, desc: 'Advanced heart care focusing on prevention, diagnosis, and treatment of cardiovascular diseases.' },
    { id: 'neurology', title: 'Neurology', icon: <Brain className="w-8 h-8" />, desc: 'Expert care for complex neurological conditions including stroke, epilepsy, and neurodegenerative disorders.' },
    { id: 'orthopedics', title: 'Orthopedics', icon: <Bone className="w-8 h-8" />, desc: 'Specialized treatment for bone, joint, and muscle conditions ranging from sports injuries to total replacements.' },
    { id: 'pediatrics', title: 'Pediatrics', icon: <Baby className="w-8 h-8" />, desc: 'Comprehensive healthcare for infants, children, and adolescents in a warm, friendly environment.' },
    { id: 'emergency', title: 'Emergency Care', icon: <Ambulance className="w-8 h-8" />, desc: '24/7 rapid response and life-saving medical intervention for critical health emergencies.' },
    { id: 'general', title: 'General Medicine', icon: <Stethoscope className="w-8 h-8" />, desc: 'Primary healthcare services focusing on overall wellness and chronic disease management.' },
  ];

  const doctors = [
    { name: 'Dr. Sarah Mitchell', specialty: 'Chief of Cardiology', img: 'https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=400', education: 'MD, Harvard Medical' },
    { name: 'Dr. James Wilson', specialty: 'Senior Neurologist', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400', education: 'MD, Johns Hopkins' },
    { name: 'Dr. Elena Rodriguez', specialty: 'Pediatric Specialist', img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400', education: 'MD, Stanford University' },
    { name: 'Dr. Michael Chen', specialty: 'Orthopedic Surgeon', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400', education: 'MD, Yale Medicine' },
  ];

  const handleBooking = (e) => {
    e.preventDefault();
    setBookingStatus('submitting');
    setTimeout(() => {
      setBookingStatus('success');
      setTimeout(() => setBookingStatus(null), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Top Banner */}
      <div className="bg-blue-900 text-white py-2 px-4 text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center"><Phone className="w-4 h-4 mr-2 text-blue-300" /> Emergency: (555) 911-0000</span>
            <span className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-blue-300" /> 123 Healthcare Way, Metro City</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center"><Clock className="w-4 h-4 mr-2 text-blue-300" /> 24/7 Emergency Services</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-white py-5'}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <HeartPulse className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900">St Thomas' <span className="text-blue-600">Hospital</span></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8 font-medium">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#doctors" className="hover:text-blue-600 transition-colors">Specialists</a>
            <a href="#testimonials" className="hover:text-blue-600 transition-colors">Patient Care</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            <a href="#book" className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">Book Appointment</a>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 absolute w-full left-0 p-4 space-y-4 shadow-xl">
            <a href="#about" className="block py-2 text-lg font-medium" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#services" className="block py-2 text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#doctors" className="block py-2 text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Specialists</a>
            <a href="#book" className="block py-3 text-center bg-blue-600 text-white rounded-xl font-bold" onClick={() => setIsMenuOpen(false)}>Book Appointment</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-12 pb-20 md:pt-24 md:pb-32">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 transform origin-top translate-x-1/2 -z-10 hidden md:block"></div>
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-bold border border-blue-100">
              <CheckCircle2 className="w-4 h-4 mr-2" /> Accredited Medical Center
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight">
              Compassionate Care. <br />
              <span className="text-blue-600">Advanced Medicine.</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
              At St Thomas' Hospital, we combine world-class medical expertise with personalized attention to ensure every patient receives the highest quality of care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#book" className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-center hover:bg-blue-700 transition-all transform hover:-translate-y-1 shadow-xl shadow-blue-200">
                Book Appointment
              </a>
              <a href="#doctors" className="px-8 py-4 bg-white text-slate-900 border-2 border-slate-200 rounded-2xl font-bold text-center hover:border-blue-600 hover:text-blue-600 transition-all">
                Find a Doctor
              </a>
            </div>
            <div className="flex items-center space-x-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-slate-900">25+</p>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Years Exp.</p>
              </div>
              <div className="w-px h-10 bg-slate-200"></div>
              <div>
                <p className="text-3xl font-bold text-slate-900">150+</p>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Specialists</p>
              </div>
              <div className="w-px h-10 bg-slate-200"></div>
              <div>
                <p className="text-3xl font-bold text-slate-900">98%</p>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="relative animate-in fade-in slide-in-from-right duration-1000">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800" 
                alt="Modern Hospital Interior" 
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur px-6 py-4 rounded-2xl shadow-lg border border-white/50">
                <div className="flex items-center space-x-4">
                  <div className="bg-emerald-100 p-2 rounded-full">
                    <Clock className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Emergency Services</p>
                    <p className="text-xs text-slate-500 font-medium">Available 24 hours a day, 7 days a week</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating Card */}
            <div className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden lg:flex items-center space-x-4 animate-bounce-slow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Stethoscope className="text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Online Consultation</p>
                <p className="text-xs text-slate-500">Video call with specialists</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=400" 
                alt="Lab tech" 
                className="rounded-2xl shadow-md mt-12"
              />
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400" 
                alt="Doctor" 
                className="rounded-2xl shadow-md mb-12"
              />
            </div>
            <div className="space-y-6">
              <h4 className="text-blue-600 font-bold tracking-widest uppercase text-sm">About Our Hospital</h4>
              <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">Setting the Standard in Healthcare Excellence Since 1998</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                St Thomas' Hospital has been a cornerstone of the community for over two decades. We believe that medical care should be as compassionate as it is clinically advanced.
              </p>
              <div className="space-y-4 pt-4">
                {[
                  "Patient-centric approach to treatment plans",
                  "State-of-the-art diagnostic equipment",
                  "Global network of medical research partners",
                  "Comprehensive post-operative support"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="bg-emerald-100 rounded-full p-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <button className="text-blue-600 font-bold flex items-center group pt-4">
                Learn more about our mission <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h4 className="text-blue-600 font-bold tracking-widest uppercase text-sm">Our Medical Services</h4>
            <h2 className="text-4xl font-extrabold text-slate-900">Comprehensive Medical Solutions</h2>
            <p className="text-slate-600 text-lg">We provide a wide range of specialized medical services, utilizing the latest technology and treatment methodologies to care for you and your family.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 group">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.desc}</p>
                <a href="#" className="flex items-center text-sm font-bold text-blue-600 hover:text-blue-800">
                  LEARN MORE <ChevronRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialists */}
      <section id="doctors" className="py-24 bg-blue-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl space-y-4">
              <h4 className="text-blue-600 font-bold tracking-widest uppercase text-sm">Expert Doctors</h4>
              <h2 className="text-4xl font-extrabold text-slate-900">Meet Our World-Class Specialists</h2>
              <p className="text-slate-600 text-lg">Our doctors are leaders in their fields, bringing years of clinical experience and a commitment to patient wellbeing.</p>
            </div>
            <button className="px-6 py-3 bg-white border border-slate-200 rounded-xl font-bold hover:border-blue-600 transition-colors">
              View All Doctors
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doc, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-72 overflow-hidden">
                  <img src={doc.img} alt={doc.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-slate-900">{doc.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{doc.specialty}</p>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-tighter">{doc.education}</p>
                  <div className="flex justify-center space-x-3 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <button className="p-2 bg-slate-100 rounded-full hover:bg-blue-600 hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></button>
                    <button className="p-2 bg-slate-100 rounded-full hover:bg-blue-600 hover:text-white transition-colors"><Mail className="w-4 h-4" /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities & Patient Care */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-blue-900 rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800 rounded-full blur-3xl opacity-20 -mr-32 -mt-32"></div>
            <div className="lg:w-1/2 space-y-8 relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">Modern Facilities for Better Healing</h2>
              <p className="text-blue-100 text-lg leading-relaxed">
                We've designed our hospital with patient comfort and clinical efficiency in mind. Our facilities are equipped with the latest technology to ensure accurate diagnosis and successful treatment.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Smart Rooms", desc: "Equipped with automated lighting and nurse call systems" },
                  { title: "Advanced Imaging", desc: "Next-gen MRI, CT Scan, and Digital X-ray tech" },
                  { title: "Private Suites", desc: "Quiet, comfortable environments for recovery" },
                  { title: "Family Lounges", desc: "Welcoming spaces for relatives and visitors" }
                ].map((item, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/10 p-5 rounded-2xl">
                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                    <p className="text-blue-200 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <img 
                src="https://images.unsplash.com/photo-1519494083200-9037c4974489?auto=format&fit=crop&q=80&w=800" 
                alt="Hospital facility" 
                className="rounded-3xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-8 -left-8 bg-emerald-500 text-white p-8 rounded-3xl z-20 shadow-xl hidden md:block">
                <p className="text-4xl font-black mb-1">100%</p>
                <p className="text-sm font-bold uppercase tracking-wider">Sterile Environments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h4 className="text-blue-600 font-bold tracking-widest uppercase text-sm">Patient Stories</h4>
            <h2 className="text-4xl font-extrabold text-slate-900">What Our Patients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                text: "The level of care I received at St Thomas' was exceptional. From the nursing staff to the surgeons, everyone treated me with such kindness and professionalism.",
                author: "Robert Hammond",
                role: "Cardiology Patient"
              },
              { 
                text: "Being a new parent is stressful, but the pediatrics team here made us feel so supported. They took the time to explain everything clearly and really listened to our concerns.",
                author: "Jennifer Clarke",
                role: "Parent"
              },
              { 
                text: "After my knee replacement, the rehabilitation facilities helped me get back on my feet faster than I ever expected. The physical therapists are truly world-class.",
                author: "David Vance",
                role: "Orthopedic Patient"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between h-full">
                <div>
                  <div className="flex text-amber-400 mb-6">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-slate-600 italic mb-8 leading-relaxed">"{testimonial.text}"</p>
                </div>
                <div className="flex items-center space-x-4 pt-6 border-t border-slate-50">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{testimonial.author}</p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section id="book" className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row">
            <div className="lg:w-2/5 bg-blue-600 p-10 md:p-16 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-bold mb-6">Schedule Your Visit</h2>
                <p className="text-blue-100 mb-8 leading-relaxed">
                  Book your appointment online today. Our medical team will confirm your details within 2 hours.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 p-2 rounded-lg mt-1"><Phone className="w-5 h-5" /></div>
                    <div>
                      <p className="font-bold">Call Us Directly</p>
                      <p className="text-blue-100">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 p-2 rounded-lg mt-1"><Mail className="w-5 h-5" /></div>
                    <div>
                      <p className="font-bold">Email Inquiries</p>
                      <p className="text-blue-100">info@stthomas.hospital</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 p-2 rounded-lg mt-1"><MapPin className="w-5 h-5" /></div>
                    <div>
                      <p className="font-bold">Main Location</p>
                      <p className="text-blue-100">123 Healthcare Way, Metro City, ST 90210</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-12">
                <p className="text-sm font-medium text-blue-200 uppercase tracking-widest mb-4">Emergency Contact</p>
                <div className="bg-red-500 text-white px-6 py-4 rounded-2xl flex items-center justify-between font-bold">
                  <span>24/7 Hotline</span>
                  <span>(555) 911-0000</span>
                </div>
              </div>
            </div>

            <div className="lg:w-3/5 p-10 md:p-16">
              {bookingStatus === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-20">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Request Received!</h3>
                  <p className="text-slate-600 max-w-sm">Thank you for choosing St Thomas'. A representative will call you shortly to confirm your specific appointment time.</p>
                  <button 
                    onClick={() => setBookingStatus(null)} 
                    className="mt-6 px-8 py-3 bg-slate-100 text-slate-900 rounded-xl font-bold hover:bg-slate-200 transition-colors"
                  >
                    Book another appointment
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBooking} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                        <input required type="text" placeholder="John Doe" className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                        <input required type="email" placeholder="john@example.com" className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                        <input required type="tel" placeholder="(555) 000-0000" className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Medical Service</label>
                      <select required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all appearance-none">
                        <option value="">Select Department</option>
                        {services.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Preferred Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                        <input required type="date" className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Preferred Time Slot</label>
                      <div className="relative">
                        <Clock className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                        <select required className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all appearance-none">
                          <option value="">Select Time</option>
                          <option value="morning">Morning (08:00 - 12:00)</option>
                          <option value="afternoon">Afternoon (12:00 - 16:00)</option>
                          <option value="evening">Evening (16:00 - 20:00)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Brief Note / Symptoms</label>
                    <textarea placeholder="Tell us how we can help..." rows="3" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"></textarea>
                  </div>

                  <button 
                    disabled={bookingStatus === 'submitting'}
                    type="submit" 
                    className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all transform hover:-translate-y-1 shadow-xl shadow-blue-200 flex items-center justify-center"
                  >
                    {bookingStatus === 'submitting' ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Processing...
                      </>
                    ) : (
                      'Request Appointment'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Map Strip */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[2rem] shadow-sm flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-2">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Our Location</h3>
              <p className="text-slate-600">123 Healthcare Way, Metro City,<br />ST 90210, United States</p>
              <a href="#" className="text-blue-600 font-bold underline">Get Directions</a>
            </div>
            <div className="bg-white p-10 rounded-[2rem] shadow-sm flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-2">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Working Hours</h3>
              <p className="text-slate-600">Mon - Fri: 8:00 AM - 9:00 PM<br />Sat - Sun: 9:00 AM - 6:00 PM</p>
              <p className="text-sm font-bold text-emerald-600">Emergency: 24 Hours</p>
            </div>
            <div className="bg-white p-10 rounded-[2rem] shadow-sm flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-2">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Contact Us</h3>
              <p className="text-slate-600">General: (555) 123-4567<br />Billing: (555) 123-4568</p>
              <p className="text-slate-600">info@stthomas.hospital</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-20 pb-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="bg-blue-600 p-1.5 rounded-lg">
                  <HeartPulse className="text-white w-6 h-6" />
                </div>
                <span className="text-2xl font-bold tracking-tight">St Thomas'</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Leading the way in medical excellence with a focus on patient comfort, advanced diagnostics, and compassionate recovery.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"><Linkedin className="w-5 h-5" /></a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Our History</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Medical Team</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Career Opportunities</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Annual Reports</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Medical Services</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Cardiology</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Neurology</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pediatrics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Diagnostic Imaging</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cancer Center</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Subscribe</h4>
              <p className="text-slate-400 mb-6">Get the latest healthcare news and tips from our specialists.</p>
              <div className="flex bg-white/5 p-1 rounded-xl">
                <input type="email" placeholder="Your Email" className="bg-transparent border-none focus:outline-none flex-grow px-4 py-2 text-sm" />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-sm">Join</button>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 gap-4">
            <p>© 2025 St Thomas' Medical Group. All rights reserved.</p>
            <div className="flex space-x-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Emergency Button (Mobile Only) */}
      <div className="fixed bottom-6 right-6 lg:hidden z-40">
        <a href="tel:911" className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center shadow-2xl animate-pulse">
          <Ambulance className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
};

export default App;
