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
            <div className="space-y-6 text-lg text-slate-900 leading-relaxed font-medium">
              <p>
                Mantriq Industrial provides precision manufacturing services for North American OEMs who require volume, consistency, and a simplified supply chain.
              </p>
              <p>
                Founded on <span className="font-bold text-spacecadet">15+ years</span> of industry expertise, we bridge the gap between global manufacturing scale and local accountability. Our leadership team began as hands-on machine operators, growing through logistics and inspection supervision to deliver high-paced precision engineering.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {pillars.map((pill, i) => (
              <div key={i} className="p-8 bg-white/22 backdrop-blur-md rounded-[32px] border border-white/50 group hover:bg-white hover:shadow-2xl transition-all duration-500">
                <pill.icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-spacecadet text-sm mb-2">{pill.title}</h4>
                <p className="text-slate-900 text-xs leading-relaxed font-medium">{pill.description}</p>
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Hemish Ahuja",
              role: "Co-Founder & CEO",
              image: "/images/hemish.png",
              bio: "Driving the strategic vision and global logistics of Mantriq, bridging the gap between international manufacturing and North American supply chains."
            },
            {
              name: "Himanshu Loomba",
              role: "Co-Founder & Technical Director",
              image: "/images/himanshu.png",
              bio: "Heading all engineering and manufacturing operations since 2010, ensuring zero-defect quality control and technical precision across every production line."
            },
            {
              name: "Jayant Ahuja",
              role: "Technology Advisor",
              image: "/images/jayant.png",
              bio: "Providing strategic guidance on software systems and digital infrastructure, leveraging decades of software engineering expertise."
            }
          ].map((member, i) => (
            <div key={i} className="bg-spacecadet p-8 rounded-[40px] text-white flex flex-col items-center text-center group hover:bg-primary transition-colors duration-500">
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-44 rounded-2xl object-cover object-top border-4 border-white/10 shadow-2xl group-hover:scale-105 transition-transform duration-500 mb-6"
                />
              ) : (
                <div className="w-32 h-44 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl font-black text-white border-4 border-white/10 shadow-2xl mb-6">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <h4 className="text-xl lg:text-2xl font-extrabold mb-2 tracking-tighter leading-tight">{member.name}</h4>
                <p className="text-accent text-[10px] font-black uppercase tracking-widest mb-4">{member.role}</p>
                <p className="text-white/80 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
