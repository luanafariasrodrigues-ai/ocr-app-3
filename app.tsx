import { useState, useEffect } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { motion } from "framer-motion";
import { Shield, Building2, Home as HomeIcon, Store, CheckCircle2, ArrowRight, FileText, Users, Clock, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

import heroBg from "./assets/hero-bg.png";
import condoImg from "./assets/condo.png";
import houseImg from "./assets/house.png";
import storeImg from "./assets/store.png";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-sm py-4" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Shield className={`w-8 h-8 ${isScrolled ? "text-primary" : "text-white"}`} />
          <span className={`text-2xl font-bold font-serif tracking-tight ${isScrolled ? "text-slate-900" : "text-white"}`}>
            KAFF
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#servicos" className={`text-sm font-medium hover:opacity-80 transition-opacity ${isScrolled ? "text-slate-600" : "text-white"}`}>Serviços</a>
          <a href="#sobre" className={`text-sm font-medium hover:opacity-80 transition-opacity ${isScrolled ? "text-slate-600" : "text-white"}`}>Sobre Nós</a>
          <a href="#processo" className={`text-sm font-medium hover:opacity-80 transition-opacity ${isScrolled ? "text-slate-600" : "text-white"}`}>Como Funciona</a>
          <Button variant={isScrolled ? "default" : "secondary"} className={isScrolled ? "" : "bg-white text-primary hover:bg-white/90"} data-testid="nav-cta">
            Solicitar Orçamento
          </Button>
        </div>

        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="mobile-menu-toggle"
        >
          {mobileMenuOpen ? (
            <X className={`w-6 h-6 ${isScrolled ? "text-slate-900" : "text-white"}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? "text-slate-900" : "text-white"}`} />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col gap-4 md:hidden">
          <a href="#servicos" className="text-slate-600 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Serviços</a>
          <a href="#sobre" className="text-slate-600 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Sobre Nós</a>
          <a href="#processo" className="text-slate-600 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Como Funciona</a>
          <Button className="w-full mt-2" data-testid="mobile-nav-cta">Solicitar Orçamento</Button>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Modern building background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeIn} className="flex items-center gap-2 mb-6">
              <span className="bg-secondary/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold tracking-wide border border-secondary/30 backdrop-blur-sm">
                Especialistas em AVCB
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6">
              Sua segurança contra incêndio, <span className="text-blue-400">resolvida.</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              Gestão completa e descomplicada de AVCB para condomínios, residências e comércios. Sem burocracia, com total conformidade.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg h-14 px-8 bg-primary hover:bg-primary/90 text-white border-0" data-testid="hero-cta-quote">
                Solicitar Orçamento <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg h-14 px-8 bg-white/10 text-white border-white/20 hover:bg-white/20" data-testid="hero-cta-services">
                Conhecer Serviços
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const stats = [
    { icon: FileText, label: "Projetos Aprovados", value: "1.200+" },
    { icon: Building2, label: "Condomínios Seguros", value: "450+" },
    { icon: Users, label: "Clientes Satisfeitos", value: "98%" },
    { icon: Clock, label: "Anos de Experiência", value: "15+" },
  ];

  return (
    <section className="bg-white py-12 border-b border-slate-100 relative z-20 -mt-8 mx-4 md:mx-auto md:max-w-6xl rounded-2xl shadow-xl">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col items-center text-center ${index % 2 !== 0 ? 'pl-8' : ''} ${index > 0 ? 'md:pl-8' : ''}`}
            >
              <stat.icon className="w-8 h-8 text-primary mb-3 opacity-80" />
              <h3 className="text-3xl font-serif font-bold text-slate-900 mb-1">{stat.value}</h3>
              <p className="text-sm font-medium text-slate-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      title: "Prédios & Condomínios",
      description: "Gestão completa de vistorias e renovações. Cuidamos de toda a documentação para que o síndico tenha paz de espírito.",
      icon: Building2,
      image: condoImg,
      features: ["Renovação de AVCB", "Treinamento de Brigada", "Manutenção Preventiva"]
    },
    {
      title: "Comércio & Lojas",
      description: "Adequação rápida e técnica para garantir seu alvará de funcionamento sem atrasar a inauguração do seu negócio.",
      icon: Store,
      image: storeImg,
      features: ["Projetos Técnicos (PT)", "Laudos Específicos", "Aprovação Rápida"]
    },
    {
      title: "Casas & Residências",
      description: "Laudos técnicos e consultoria especializada para garantir a segurança da sua família e patrimônio.",
      icon: HomeIcon,
      image: houseImg,
      features: ["Consultoria de Risco", "Instalação de Equipamentos", "Laudos Técnicos"]
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Nossas Especialidades</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Soluções completas para cada necessidade</h3>
          <p className="text-lg text-slate-600">
            Não importa o tamanho do seu projeto, temos a expertise técnica necessária para garantir a sua certificação com agilidade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20 bg-white p-3 rounded-xl shadow-sm">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h4 className="text-2xl font-serif font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 mb-6 flex-1">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-sm font-medium text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-secondary mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors" data-testid={`service-cta-${index}`}>
                  Saiba Mais
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section id="sobre" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-secondary/10 blur-3xl rounded-full transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-8"
          >
            <div>
              <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Por que a KAFF?</h2>
              <h3 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                Engenharia séria, <br/>sem burocracia.
              </h3>
              <p className="text-lg text-slate-400 leading-relaxed">
                Entendemos que lidar com o Corpo de Bombeiros pode ser estressante. Nossa missão é assumir essa responsabilidade técnica para que você possa focar no que realmente importa: seu negócio ou sua casa.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Equipe Especializada", desc: "Engenheiros credenciados e com vasta experiência no setor." },
                { title: "Agilidade", desc: "Processos otimizados para aprovação no menor tempo possível." },
                { title: "Transparência", desc: "Acompanhamento de cada etapa do processo em tempo real." },
                { title: "Conformidade", desc: "Garantia de atendimento a todas as normas vigentes (ITs)." }
              ].map((item, index) => (
                <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                  <h4 className="font-bold text-lg mb-2 text-white">{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative w-full"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative border border-white/10 w-full">
              <img 
                src={heroBg} 
                alt="Corporate building" 
                className="w-full h-full object-cover filter grayscale opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">Certificação Garantida</p>
                    <p className="text-slate-300 text-sm">Mais de 1.200 AVCBs emitidos</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-primary rounded-3xl p-8 md:p-16 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

          <div className="max-w-2xl relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Pronto para regularizar seu imóvel?
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Fale com um de nossos engenheiros hoje mesmo. Orçamento rápido, sem compromisso e com a garantia de quem entende do assunto.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 relative z-10 shrink-0">
            <Button size="lg" className="bg-white text-primary hover:bg-slate-100 h-14 px-8 text-lg shadow-lg border-0" data-testid="final-cta-quote">
              Solicitar Orçamento
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 h-14 px-8 text-lg" data-testid="final-cta-call">
              <Phone className="w-5 h-5 mr-2" /> (11) 9999-9999
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Shield className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold font-serif tracking-tight text-slate-900">KAFF</span>
            </div>
            <p className="text-slate-600 max-w-sm mb-6">
              Sua parceira técnica de confiança para regularização e emissão de AVCB. Segurança contra incêndio levada a sério.
            </p>
            <div className="flex items-center gap-4 text-slate-600 font-medium">
              <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary"/> (11) 4000-0000</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Serviços</h4>
            <ul className="space-y-4 text-slate-600">
              <li><a href="#" className="hover:text-primary transition-colors">Condomínios</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Comércios e Lojas</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Residências</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Laudos Técnicos</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Empresa</h4>
            <ul className="space-y-4 text-slate-600">
              <li><a href="#" className="hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2024 KAFF - Segurança contra Incêndio. Todos os direitos reservados.</p>
          <p>CREA-SP: 123456789-0</p>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <WhyChooseUs />
      <CTA />
      <Footer />
    </div>
  );
}

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
