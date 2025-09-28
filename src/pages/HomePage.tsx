import { Zap, ShieldCheck, Wind, Atom, BrainCircuit, Lightbulb, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Toaster } from '@/components/ui/sonner';
import { KascleanHeader } from '@/components/KascleanHeader';
import { KascleanFooter } from '@/components/KascleanFooter';
import { ContactForm } from '@/components/ContactForm';
import { AnimatedSection } from '@/components/AnimatedSection';
const features = [
  {
    icon: Zap,
    title: 'UV-C Sterilizasyonu',
    description: 'Güçlü, medikal seviye UV-C ışığı ile bakteri ve virüslerin %99.9\'unu ortadan kaldırır.',
  },
  {
    icon: Wind,
    title: 'Vortex Hava Kurutma',
    description: 'Filtrelenmiş havadan oluşan nazik ama güçlü bir girdap, kaskınızın astarını tamamen kurutarak küf oluşumunu önler.',
  },
  {
    icon: ShieldCheck,
    title: 'Koku Nötralizasyonu',
    description: 'Gelişmiş iyon teknolojisi, kokuya neden olan molekülleri parçalayarak kaskınızın taze kokmasını sağlar.',
  },
];
const howItWorksSteps = [
  {
    step: 1,
    title: 'Kaskınızı Yerleştirin',
    description: 'Kaskınızı baş aşağı KASCLEAN platformuna yerleştirmeniz yeterlidir.',
  },
  {
    step: 2,
    title: 'Döngüyü Başlatın',
    description: 'Tek bir dokunuşla 30 dakikalık temizleme ve kurutma döngüsünü başlatın.',
  },
  {
    step: 3,
    title: 'Tazeliğin Keyfini Çıkarın',
    description: 'Bir sonraki sürüşünüze hazır, mükemmel temiz, kuru ve taze kokan kaskınızı alın.',
  },
];
const technologyItems = [
    { icon: Atom, title: 'QuantumClean UV-C', description: 'Özel olarak tasarlanmış UV-C lambalarımız, malzemelere zarar vermeden maksimum mikrop öldürücü etki için en uygun 254nm dalga boyunda yayılım yapar.' },
    { icon: BrainCircuit, title: 'SmartSense AI', description: 'Dahili bir yapay zeka çipi, nem ve sıcaklığı izleyerek kurutma döngüsünü optimum verimlilik ve güvenlik için dinamik olarak ayarlar.' },
    { icon: Lightbulb, title: 'Foto-İyon Plazma', description: 'Koku bileşiklerini basit maskeleme kokularının aksine moleküler düzeyde aktif olarak nötralize eden düşük konsantrasyonlu bir plazma alanı oluşturur.' },
]
export function HomePage() {
  return (
    <div className="bg-background text-foreground font-sans">
      <KascleanHeader />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-background z-0"></div>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at center, #00FF8C 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          <AnimatedSection className="relative z-10 max-w-4xl mx-auto px-4">
            <h1 className="font-display text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
              Kask Hijyeninin Geleceği
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              KASCLEAN, gelişmiş UV-C ışığı ve vortex kurutma teknolojisi kullanarak kaskınızı dakikalar içinde sterilize eder ve tazeler, her zaman temiz, güvenli ve konforlu bir sürüş sağlar.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <a href="#features">
                <Button size="lg" className="bg-brand-green text-background font-bold hover:bg-brand-green/90 shadow-glow hover:shadow-glow-lg transition-all duration-300 transform hover:scale-105">
                  Daha Fazla Bilgi
                </Button>
              </a>
            </div>
          </AnimatedSection>
        </section>
        {/* Features Section */}
        <section id="features" className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center">
              <h2 className="font-display text-4xl md:text-5xl font-bold">Devrim Niteliğinde Temizleme Gücü</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Zirve performans ve hijyen için tasarlanmış teknoloji ile yeni bir temizlik standardını deneyimleyin.
              </p>
            </AnimatedSection>
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <AnimatedSection key={feature.title} delay={index * 0.1}>
                  <Card className="bg-white/5 border-white/10 h-full text-center hover:bg-white/10 hover:-translate-y-2 transition-all duration-300">
                    <CardHeader className="items-center">
                      <div className="p-4 bg-brand-green/10 rounded-full">
                        <feature.icon className="h-8 w-8 text-brand-green" />
                      </div>
                      <CardTitle className="mt-4 font-display text-2xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
        {/* How It Works Section */}
        <section id="how-it-works" className="py-24 md:py-32 bg-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center">
              <h2 className="font-display text-4xl md:text-5xl font-bold">Basit, Hızlı ve Etkili</h2>
              <p className="mt-4 text-lg text-muted-foreground">Kusursuz bir kask için üç kolay adım.</p>
            </AnimatedSection>
            <div className="mt-20 relative">
                <div className="absolute left-1/2 top-10 bottom-10 w-0.5 bg-brand-green/20 hidden md:block" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    {howItWorksSteps.map((step, index) => (
                        <AnimatedSection key={step.step} delay={index * 0.1} className="flex flex-col items-center text-center">
                            <div className="relative z-10 flex items-center justify-center h-16 w-16 rounded-full bg-background border-2 border-brand-green shadow-glow">
                                <span className="font-display text-2xl text-brand-green">{step.step}</span>
                            </div>
                            <h3 className="mt-6 font-display text-2xl font-semibold">{step.title}</h3>
                            <p className="mt-2 text-muted-foreground">{step.description}</p>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
          </div>
        </section>
        {/* Technology Section */}
        <section id="technology" className="py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center">
                    <h2 className="font-display text-4xl md:text-5xl font-bold">Temizliğin Bilimi</h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        KASCLEAN, kask bakımında yeni bir ölçüt belirleyen bir dizi tescilli teknoloji ile güçlendirilmiştir.
                    </p>
                </AnimatedSection>
                <div className="mt-20 max-w-4xl mx-auto space-y-8">
                    {technologyItems.map((item, index) => (
                        <AnimatedSection key={item.title} delay={index * 0.1}>
                            <div className="group flex items-start gap-6 p-6 rounded-lg border border-white/10 hover:bg-white/5 transition-colors duration-300">
                                <div className="p-3 bg-brand-green/10 rounded-lg">
                                    <item.icon className="h-7 w-7 text-brand-green" />
                                </div>
                                <div>
                                    <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                                    <p className="mt-1 text-muted-foreground">{item.description}</p>
                                </div>
                                <ChevronRight className="h-6 w-6 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
        {/* Contact Section */}
        <section id="contact" className="py-24 md:py-32 bg-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center">
              <h2 className="font-display text-4xl md:text-5xl font-bold">İletişime Geçin</h2>
              <p className="mt-4 text-lg text-muted-foreground">Sorularınız mı var? Sizden haber almak isteriz.</p>
            </AnimatedSection>
            <AnimatedSection className="mt-16 max-w-2xl mx-auto" delay={0.2}>
              <ContactForm />
            </AnimatedSection>
          </div>
        </section>
      </main>
      <KascleanFooter />
      <Toaster theme="dark" richColors />
    </div>
  );
}