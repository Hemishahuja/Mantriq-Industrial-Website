import { Factory, Award, Users, ShieldCheck } from "lucide-react";

const About = () => {
  const pillars = [
    {
      icon: Factory,
      title: "Advanced Tech",
      description: "Continuous investment in high-output CNC turning and milling centers."
    },
    {
      icon: ShieldCheck,
      title: "Quality First",
      description: "Rigorous inspection protocols ensure 100% repeatability for every lot."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled technical coordinators and engineers managing your supply chain."
    },
    {
      icon: Award,
      title: "Reliability",
      description: "Canadian-owned support with a focus on predictable landed costs."
    }
  ];

  return (
    <div className="space-y-32">
      {/* Intro Section */}
      <section className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6">Our Mission</h2>
            <h3 className="text-4xl md:text-6xl font-extrabold text-spacecadet tracking-tighter leading-tight mb-8">
              Reliable Industrial Scale<span className="text-primary">.</span>
            </h3>
            <div className="space-y-6 text-lg text-slate-text leading-relaxed opacity-80">
              <p>
                Mantriq Industrial provides precision manufacturing services for North American OEMs who require volume, consistency, and a simplified supply chain.
              </p>
              <p>
                Founded on over 15 years of industry expertise, we bridge the gap between global manufacturing scale and local accountability. Our leadership team began as hands-on machine operators, growing through logistics and inspection supervision to deliver high-paced precision engineering since 2011.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {pillars.map((pill, i) => (
              <div key={i} className="p-8 bg-polarice/30 rounded-[32px] border border-border group hover:bg-white hover:shadow-2xl transition-all duration-500">
                <pill.icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-spacecadet text-sm mb-2">{pill.title}</h4>
                <p className="text-slate-text text-xs leading-relaxed opacity-70">{pill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-spacecadet tracking-tighter mb-4">Leadership Team</h2>
          <p className="text-slate-text opacity-60 uppercase text-[10px] font-black tracking-[0.4em]">Engineering Excellence</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {[
            { name: "Hemish Ahuja", role: "Founder & Technical Director", initial: "HA", bio: "Leading Mantriq since 2010 with deep-rooted expertise in precision machining and international logistics management." },
            { name: "Himanshu Loomba", role: "Chief Manufacturing Engineer", initial: "HL", bio: "Directing precision engineering protocols with over a decade of experience in high-output manufacturing and zero-defect quality control." }
          ].map((member, i) => (
            <div key={i} className="bg-spacecadet p-12 rounded-[48px] text-white flex flex-col items-start group hover:bg-primary transition-colors duration-500">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8 border border-white/20 text-xl font-black text-white group-hover:bg-white group-hover:text-primary transition-all">
                {member.initial}
              </div>
              <h4 className="text-2xl font-extrabold mb-2 tracking-tight">{member.name}</h4>
              <p className="text-accent text-[10px] font-black uppercase tracking-widest mb-6">{member.role}</p>
              <p className="text-white/80 text-sm leading-relaxed transition-colors">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
