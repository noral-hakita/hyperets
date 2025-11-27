export default function Home() {
  return (
    <div className="min-h-screen bg-animated text-white bg-minecraft-pixels">
      <ParticleBackground />
      <HyperETS />
    </div>
  );
}

function ParticleBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 water-particles"></div>
    </div>
  );
}

function HyperETS() {
  return (
    <div className="relative">
      {/* Header - Fixed */}
      <header className="fixed top-0 left-0 right-0 z-50 px-8 md:px-24 py-4 border-b border-green-700/50 backdrop-blur-sm bg-gray-900/95">
        <nav className="flex justify-between items-center">
          <div className="text-3xl font-extrabold text-green-400 tracking-wider glow rounded-lg px-2">
            HyperETS
          </div>
          <div className="space-x-6 text-lg font-medium text-gray-400 hidden md:flex">
            <a href="#plans" className="hover:text-green-400 transition hover-lift px-3 py-1 rounded">
              Plans
            </a>
            <a href="#features" className="hover:text-green-400 transition hover-lift px-3 py-1 rounded">
              Features
            </a>
            <a href="#modpacks" className="hover:text-green-400 transition hover-lift px-3 py-1 rounded">
              Modpacks
            </a>
            <a href="#deep-dive" className="hover:text-green-400 transition hover-lift px-3 py-1 rounded">
              Tech Deep Dive
            </a>
            <a href="#contact" className="hover:text-green-400 transition hover-lift px-3 py-1 rounded">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Add padding to account for fixed header */}
      <div className="pt-20">

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-24 py-24 space-y-12 md:space-y-0">
        <div className="text-center md:text-left space-y-6 max-w-3xl">
          <h1 className="text-7xl font-black text-green-400 drop-shadow-xl animate-pulse">
            HyperETS: Elite Minecraft Hosting
          </h1>
          
          <p className="text-gray-300 text-xl md:text-2xl leading-snug tracking-wide font-light animate-bounce-subtle">
            Launch your lag-free Minecraft server with <strong>HyperETS</strong>. Enjoy a{" "}
            <span className="text-green-400 font-bold">full trial with no payment required</span>. 
            Get <strong>One-Click Modpack support</strong> and set up your server in minutes using our powerful AI assistant.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed hidden sm:block">
            We eliminate the frustration of server setup. Our{" "}
            <span className="text-green-400">one-click deployment</span> and{" "}
            <span className="text-green-400">AI-powered setup wizard</span> transform hosting from a headache into an absolute joyride. 
            Get low-latency connections optimized for the <strong>Asian region</strong>.
          </p>
          
          <div className="mt-8 flex justify-center md:justify-start">
            <a
              href="/register"
              className="px-12 py-4 bg-green-500 rounded-lg font-bold text-lg hover:bg-green-600 transition-all shadow-green-500/50 shadow-xl uppercase tracking-wider animate-gap hover-lift text-center"
            >
              Get Started
            </a>
          </div>
        </div>
        
        <div className="mt-8 md:mt-0 p-4 border-2 border-green-500/80 bg-gray-900 shadow-2xl shadow-green-500/30 rounded-xl hover-lift">
          <img
            src="https://via.placeholder.com/350x280?text=Minecraft+Server+Hardware"
            alt="HyperETS Server Hardware Visualization"
            width={350}
            height={280}
            className="block object-cover rounded-lg"
          />
          <p className="text-center text-sm text-gray-400 mt-2 font-medium">
            Asia-Optimized, High-Frequency CPU Hardware
          </p>
        </div>
      </section>

      <hr className="border-green-700/50 mx-8 md:mx-24 my-16" />

      {/* Features Section */}
      <section id="features" className="px-8 md:px-24 py-16">
        <h2 className="text-4xl font-extrabold text-green-400 mb-12 text-center tracking-tight">
          HyperETS Advantages 🛠️
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <FeatureCard
            icon="🛡️"
            title="DDoS Protection"
            description="Enterprise-grade protection against attacks with 99.9% uptime guarantee and real-time threat detection."
          />
          <FeatureCard
            icon="💻"
            title="Custom Control Panel"
            description="Intuitive panel with file management, console access, and one-click installations for easy server management."
          />
          <FeatureCard
            icon="⬆️"
            title="Easy Tier Upgrade"
            description="Upgrade your plan instantly without downtime. Scale resources as your community grows."
          />
          <FeatureCard
            icon="🤖"
            title="AI Support Assistant"
            description="24/7 AI-powered help for setup, optimization, and troubleshooting with instant responses."
          />
          <FeatureCard
            icon="⚡"
            title="Stable Low Latency"
            description="Optimized routing with <50ms ping across Asia. Singapore & Mumbai datacenters for best performance."
          />
          <FeatureCard
            icon="⚙️"
            title="Mod/Plugin Support"
            description="One-click install for PaperMC, Forge, Fabric. Full SFTP access for custom mods and plugins."
          />
          <FeatureCard
            icon="🔄"
            title="Automated Backups"
            description="Daily automatic backups with 7-day retention. One-click restoration for peace of mind."
          />
          <FeatureCard
            icon="🎮"
            title="Multi-Version Support"
            description="Run any Minecraft version from 1.8 to latest. Easy switching between versions."
          />
          <FeatureCard
            icon="🚀"
            title="Instant Setup"
            description="Server ready in under 60 seconds. Automated configuration and optimization."
          />
          <FeatureCard
            icon="🌐"
            title="Global CDN"
            description="Worldwide content delivery network for faster downloads and smoother gameplay."
          />
          <FeatureCard
            icon="📊"
            title="Performance Analytics"
            description="Real-time monitoring of TPS, latency, and resource usage with detailed insights."
          />
          <FeatureCard
            icon="📞"
            title="24/7 Customer Support"
            description="Expert support team available round the clock via live chat, email, and Discord."
          />
        </div>
      </section>

      <hr className="border-green-700/50 mx-8 md:mx-24 my-16" />

      {/* Modpacks Section */}
      <section id="modpacks" className="px-8 md:px-24 py-16 bg-gray-900/50 rounded-lg mx-8 md:mx-24">
        <h3 className="text-4xl font-extrabold text-green-400 mb-6 text-center tracking-tight animate-pulse">
          Modpack Support Made Simple <span className="animate-bounce">📦</span>
        </h3>
        <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto mb-10">
          One-click deployment for hundreds of popular modpacks. Our performance-tuned hardware ensures 
          your modded world runs smoothly, no matter how complex.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <ModpackFeature
            title="FTB & CurseForge"
            description="Instant access to the largest modpack libraries with automated updates."
          />
          <ModpackFeature
            title="Custom Mod Support"
            description="Full SFTP access and easy upload for your custom mods and configurations."
          />
          <ModpackFeature
            title="Performance Optimized"
            description="8GB+ plans certified for heavy modpacks like ATM, RLCraft, and more."
          />
        </div>
      </section>

      <hr className="border-green-700/50 mx-8 md:mx-24 my-16" />

      {/* Plans Section */}
      <section id="plans" className="px-8 md:px-24 py-16">
        <h2 className="text-4xl font-extrabold text-green-400 mb-12 text-center tracking-tight">
          Flexible Server Plans 💰
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          <PlanCard
            title="🎯 Free Tier"
            specs="2 GB RAM / 1 Shared Core"
            price="$0.00"
            period="Always Free"
            highlight="With Ads & Queue"
            features={[
              "✅ Basic Control Panel",
              "✅ 4 Hour Daily Limit",
              "✅ Queue System",
              "✅ Display Ads",
              "✅ Basic Support",
              "❌ No Modpack Support",
              "❌ Limited Backups"
            ]}
            buttonText="Start Free"
            buttonClass="bg-gray-600 hover:bg-gray-500"
            borderClass="border-gray-500"
            free={true}
          />
          
          <PlanCard
            title="🌱 Basic Core"
            specs="4 GB RAM / 2 Cores"
            price="$9.99"
            period="/ Month"
            highlight="10 Days Free Trial"
            features={[
              "✅ Full Control Panel",
              "✅ No Daily Limits",
              "✅ Mod Support",
              "✅ Daily Backups",
              "✅ Priority Queue",
              "✅ Basic DDoS Protection"
            ]}
            buttonText="Start 10-Day Trial"
            buttonClass="bg-green-500 hover:bg-green-600"
            borderClass="border-green-500/50"
            trialDays={10}
          />

          <PlanCard
            title="💎 Standard Pro"
            specs="8 GB RAM / 4 Cores"
            price="$18.99"
            period="/ Month"
            highlight="6 Days Free Trial"
            features={[
              "✅ Everything in Basic",
              "✅ Modpack Support",
              "✅ Advanced DDoS Protection",
              "✅ Priority Support",
              "✅ 3 Daily Backups",
              "✅ Performance Analytics"
            ]}
            buttonText="Start 6-Day Trial"
            buttonClass="bg-green-500 hover:bg-green-600"
            borderClass="border-green-500"
            recommended={true}
            scale={true}
            trialDays={6}
          />
          
          <PlanCard
            title="🌟 Hyper Plan"
            specs="16 GB RAM / 6 Cores"
            price="$34.99"
            period="/ Month"
            highlight="3 Days Free Trial"
            features={[
              "✅ Everything in Pro",
              "✅ Dedicated IP",
              "✅ Unlimited Storage",
              "✅ 24/7 Priority Support",
              "✅ Custom JAR Support",
              "✅ White-glove Setup"
            ]}
            buttonText="Start 3-Day Trial"
            buttonClass="bg-yellow-500 hover:bg-yellow-600 text-black"
            borderClass="border-yellow-400"
            trialDays={3}
          />

          <PlanCard
            title="🚀 Custom Plan"
            specs="Fully Customizable"
            price="Custom"
            period="Tailored Solution"
            highlight="Enterprise Grade"
            features={[
              "✅ Custom Hardware",
              "✅ Dedicated Resources",
              "✅ SLA Guarantee",
              "✅ Personal Manager",
              "✅ Custom Configurations",
              "✅ Premium Support"
            ]}
            buttonText="Contact Sales"
            buttonClass="bg-purple-500 hover:bg-purple-600"
            borderClass="border-purple-500"
            custom={true}
          />
        </div>

        <div className="mt-12 p-6 bg-gray-900/70 rounded-xl border border-green-700/50 shadow-inner hover-lift">
          <h3 className="text-2xl font-extrabold text-white mb-3">
            Every Plan Has Everything You Need ✅
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            All paid plans include instant deployment, unlimited player slots, full control panel access, 
            and our AI support assistant. We only charge for hardware resources, never for essential features.
          </p>
        </div>
      </section>

      <hr className="border-green-700/50 mx-8 md:mx-24 my-16" />

      {/* Technical Deep Dive */}
      <section id="deep-dive" className="px-8 md:px-24 py-16 bg-gray-900/90 rounded-xl mx-8 md:mx-24 border-2 border-green-500/50">
        <h2 className="text-4xl font-black text-green-400 mb-10 text-center tracking-tight">
          Technical Edge: Hardware and Network <span className="animate-spin">⚙️</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <TechFeature
            title="High-Frequency CPUs"
            description="Latest AMD EPYC and Intel Xeon CPUs optimized for Minecraft's single-thread performance and maximum TPS."
          />
          <TechFeature
            title="Optimized Routing"
            description="Tier-1 network with direct peering in Singapore and Mumbai for <50ms latency across Asia."
          />
          <TechFeature
            title="OS Overhead Reduction"
            description="Custom-tuned Linux kernel minimizing system resource usage, maximizing game performance."
          />
        </div>
      </section>

      <hr className="border-green-700/50 mx-8 md:mx-24 my-16" />

      {/* Testimonials */}
      <section id="testimonials" className="px-8 md:px-24 py-16">
        <h2 className="text-4xl font-extrabold text-green-400 mb-12 text-center tracking-tight">
          Trusted by the Community 🗣️
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Testimonial
            text="The ping from Pakistan is incredible! My friends and I used to play on European servers with 200ms+, but now we get 30ms. It's a game-changer!"
            author="RedstoneWizard"
          />
          <Testimonial
            text="The setup was literally 2 minutes, and my modded server runs buttery smooth. The AI assistant helped me optimize my server settings perfectly."
            author="MinecraftMaya"
          />
          <Testimonial
            text="Moved my massive public server here. The dedicated resources on the Hyper Plan eliminated all lag spikes. Highly recommended for network owners."
            author="PvPMaster99"
          />
        </div>
      </section>

      <hr className="border-green-700/50 mx-8 md:mx-24 my-16" />

      {/* Footer */}
      <Footer />
      </div>
    </div>
  );
}

// Updated FeatureCard with icons
function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-green-500 transition shadow-lg hover-lift">
      <div className="text-2xl mb-3">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
}

// Component for Modpack Features
function ModpackFeature({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-4 bg-gray-800/70 rounded-lg border border-green-700/30 hover-lift">
      <h4 className="text-xl font-bold text-green-400 mb-1">{title}</h4>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}

// Updated PlanCard with new props
function PlanCard({
  title,
  specs,
  price,
  period,
  highlight,
  features,
  buttonText,
  buttonClass,
  borderClass,
  recommended = false,
  scale = false,
  free = false,
  custom = false,
  trialDays = 0
}: {
  title: string;
  specs: string;
  price: string;
  period: string;
  highlight: string;
  features: string[];
  buttonText: string;
  buttonClass: string;
  borderClass: string;
  recommended?: boolean;
  scale?: boolean;
  free?: boolean;
  custom?: boolean;
  trialDays?: number;
}) {
  return (
    <div className={`p-6 bg-gray-800 rounded-xl border-2 ${borderClass} flex flex-col items-center space-y-3 shadow-2xl hover:bg-gray-700 transition hover-lift ${scale ? 'transform lg:scale-105' : ''}`}>
      {recommended && (
        <div className="bg-green-500 text-black px-3 py-1 text-xs rounded-full mb-1 font-bold uppercase">
          Recommended
        </div>
      )}
      {free && (
        <div className="bg-blue-500 text-white px-3 py-1 text-xs rounded-full mb-1 font-bold uppercase">
          Always Free
        </div>
      )}
      {custom && (
        <div className="bg-purple-500 text-white px-3 py-1 text-xs rounded-full mb-1 font-bold uppercase">
          Custom
        </div>
      )}
      
      <h3 className="text-2xl font-extrabold text-green-400 border-b-2 border-gray-600 pb-2 text-center">
        {title}
      </h3>
      <p className="text-white text-lg font-mono text-center">{specs}</p>
      <p className="text-3xl font-bold text-white text-center">
        {price} <span className="text-sm text-gray-400">{period}</span>
      </p>
      <p className={`font-semibold uppercase text-sm text-center ${free ? 'text-blue-400' : 'text-green-500'}`}>
        {highlight}
      </p>
      
      {trialDays > 0 && (
        <div className="bg-green-900/30 text-green-400 px-2 py-1 rounded text-xs font-bold">
          {trialDays} DAY FREE TRIAL
        </div>
      )}
      
      <ul className="text-gray-300 text-xs space-y-1 pt-3 w-full text-left">
        {features.map((feature, index) => (
          <li key={index} className={feature.startsWith("❌") ? "text-gray-500" : ""}>{feature}</li>
        ))}
      </ul>
      <a
        href={custom ? "#contact" : "/register"}
        className={`mt-6 w-full ${buttonClass} px-4 py-3 rounded-lg font-bold text-sm transition-all text-center uppercase`}
      >
        {buttonText}
      </a>
    </div>
  );
}

// Component for Technical Features
function TechFeature({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-4 bg-gray-800 rounded-lg">
      <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}

// Component for Testimonials
function Testimonial({ text, author }: { text: string; author: string }) {
  return (
    <div className="p-6 bg-gray-800 rounded-xl border border-green-700/30 hover-lift">
      <p className="text-gray-300 italic mb-4">{text}</p>
      <h4 className="font-bold text-green-400">{author}</h4>
      <div className="flex text-yellow-400 text-sm">★★★★★</div>
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <footer id="contact" className="px-8 md:px-24 py-10 bg-gray-900 border-t border-green-700/50">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 text-sm">
        <div className="lg:col-span-2">
          <h4 className="text-lg font-bold text-green-400 mb-3">HyperETS Minecraft Hosting</h4>
          <p className="text-gray-400 mb-3">
            Optimizing the Minecraft experience for the Asian gaming community with unbeatable 
            latency and simple, powerful server management.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-green-400 transition">Discord</a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition">Knowledge Base</a>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-bold text-green-400 mb-3">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="#plans" className="text-gray-400 hover:text-green-300 transition">Pricing & Plans</a></li>
            <li><a href="#features" className="text-gray-400 hover:text-green-300 transition">Features</a></li>
            <li><a href="/status" className="text-gray-400 hover:text-green-300 transition">Server Status</a></li>
            <li><a href="/tos" className="text-gray-400 hover:text-green-300 transition">Terms of Service</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold text-green-400 mb-3">Contact Support</h4>
          <ul className="space-y-1">
            <li><span className="text-gray-400">Email: support@hyperets.com</span></li>
            <li><span className="text-gray-400">Discord: discord.gg/hyperets</span></li>
            <li><span className="text-gray-400">24/7 Live Chat Available</span></li>
            <li><span className="text-gray-400">Phone: +92 300 1234567</span></li>
          </ul>
        </div>

        <div className="hidden lg:block">
          <h4 className="text-lg font-bold text-green-400 mb-3">Data Centers</h4>
          <p className="text-gray-400">Primary: <span className="text-green-400 font-semibold">Singapore (SG)</span></p>
          <p className="text-gray-400 mt-1">Secondary: <span className="text-green-400 font-semibold">Mumbai (IN)</span></p>
          <p className="text-gray-400 mt-1">Uptime SLA: <span className="text-green-400 font-semibold">99.9%</span></p>
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-gray-700 text-center text-gray-500 text-xs">
        &copy; 2025 HyperETS. All rights reserved. Minecraft is a trademark of Mojang Synergies AB.
      </div>
    </footer>
  );
}