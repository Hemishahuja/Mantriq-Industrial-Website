import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  Settings, 
  Target, 
  Zap, 
  Users, 
  Award,
  Wrench,
  Eye,
  Package,
  Factory,
  CheckCircle
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// DATA: Manufacturing Units
// ─────────────────────────────────────────────────────────────────────────────

const unit1Machines = {
  title: "Unit 1 – Precision & High-Volume Machining",
  categories: [
    {
      name: "CNC Turning Centers",
      machines: [
        "LMW Machining Master – 6″ chuck (2 units)",
        "LMW Machining Master – 5″ chuck (1 unit)",
        "ACE Machining Master – 6″ chuck (1 unit)",
        "Takang Slant Bed Linear CNCs – 6″ chuck with LNS bar feeders (2 units)"
      ]
    },
    {
      name: "Semi-Automatic Traub Machines",
      machines: [
        "6-tool turning attachments with bar feed",
        "Through-bore spindle range: Ø15 mm to Ø40 mm (8 units)"
      ]
    },
    {
      name: "Conventional & Mechanical Equipment",
      machines: [
        "Adda Machines: 2 ft (2 units), 2.5 ft with center (1 unit)",
        "Power Press: 10-ton capacity (1 unit)",
        "Drill Machines: Range Ø3 mm – Ø25 mm",
        "Inspection: AImicro 300 mm with Geometric DRO"
      ]
    }
  ]
};

const unit2Machines = {
  title: "Unit 2 – Multi-Turret Precision Machining",
  categories: [
    {
      name: "CNC Turning Centers",
      machines: [
        "Miyano BNC 32 – 5″ chuck, turret & sub-turret (2 units)",
        "Miyano BNC 25 – 4″ chuck, turret & sub-turret (1 unit)",
        "Miyano BNC 42 – 6″ chuck (1 unit)",
        "LMW Machining Master – 6″ chuck (1 unit)",
        "Koyo 42 Turn – 6″ chuck, turret & sub-turret (1 unit)"
      ]
    },
    {
      name: "Support Equipment",
      machines: [
        "Semi-Automatic Traub: Ø42 mm through-bore (2 units)",
        "Drill Machines: Ø3 mm – Ø25 mm (2 units)",
        "Gang Drill: 4-station configuration (1 unit)",
        "Inspection: AImicro 300 mm with Geometric DRO"
      ]
    }
  ]
};

const unit3Machines = {
  title: "Unit 3 – Large Component & Heavy-Duty Machining",
  categories: [
    {
      name: "Machining Equipment",
      machines: [
        "Automatic Bandsaw: Cutting range Ø5 mm – Ø240 mm (1 unit)",
        "Phillar CNCs: 8″ chuck (1 unit), 6″ chuck (1 unit)",
        "Doosan CNCs: 8″ chuck (2 units)",
        "Okamahowa CNC: 6″ chuck (1 unit)"
      ]
    },
    {
      name: "Inspection Equipment",
      machines: [
        "AImicro 300 mm with Geometric DRO and surface illumination"
      ]
    }
  ]
};

const inspectionCapabilities = [
  "VM2515 2.5D Vision Measurement System (Mitoya) with surface illumination",
  "Baty 500 mm Profile Projector: 10× magnification, Geometric DRO",
  "Shadowgraph System: Projection up to 10× magnification",
  "High-quality digital and conventional precision gauges"
];

const strengths = [
  { icon: <Award className="w-6 h-6" />, text: "15+ years proven industry expertise" },
  { icon: <Settings className="w-6 h-6" />, text: "Strong foundation in precision engineering" },
  { icon: <Package className="w-6 h-6" />, text: "Strategic supplier partnerships" },
  { icon: <Users className="w-6 h-6" />, text: "Customer satisfaction commitment" }
];

const taglines = [
  "Precision you can trust, service you can rely on.",
  "Building trust through quality, precision, and care.",
  "15 years of precision. Partnership. Performance."
];

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

const Capabilities = () => {
  return (
    <section id="capabilities" className="py-16 bg-[var(--page-bg)]">
      <div className="container mx-auto px-4">

        {/* Hero Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--spacecadet)] mb-4">
            Manufacturing Excellence
          </h1>
          <p className="text-xl text-[color-mix(in_oklab,var(--text-body)_85%,white)] max-w-4xl mx-auto">
            Family-owned precision engineering with <strong>15+ years of industry expertise</strong>. 
            From hands-on machine operation to global logistics – we deliver quality components 
            to demanding industries across the United Kingdom.
          </p>
        </div>

        {/* Customer Commitment */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-8 h-8 text-[var(--oceansteel)]" />
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--spacecadet)]">
              Customer Commitment
            </h2>
          </div>
          <Card className="hover-lift">
            <CardContent className="p-8">
              <p className="text-[color-mix(in_oklab,var(--text-body)_80%,white)] mb-6 text-lg">
                Our customers are at the heart of what we do. We believe in open communication, 
                consistent quality, and a deep understanding of precision engineering. This commitment 
                has made us a trusted supplier to one of the UK's leading providers of high-quality 
                precision-turned and milled components – a partnership spanning <strong>over 15 years</strong>.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {taglines.map((tagline, i) => (
                  <div 
                    key={i} 
                    className="bg-[color-mix(in_oklab,var(--oceansteel)_8%,white)] p-4 rounded-lg text-center"
                  >
                    <p className="text-[var(--spacecadet)] font-medium italic">"{tagline}"</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Manufacturing Facilities */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Factory className="w-8 h-8 text-[var(--oceansteel)]" />
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--spacecadet)]">
              Manufacturing Facilities & Capabilities
            </h2>
          </div>

          <div className="space-y-8">
            {/* Unit 1 */}
            <Card className="hover-lift">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-[var(--spacecadet)] mb-6 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-[var(--oceansteel)]" />
                  {unit1Machines.title}
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {unit1Machines.categories.map((cat, i) => (
                    <div key={i}>
                      <h4 className="font-semibold text-[var(--spacecadet)] mb-3">{cat.name}</h4>
                      <ul className="space-y-2">
                        {cat.machines.map((m, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-[color-mix(in_oklab,var(--text-body)_80%,white)]">
                            <ArrowRight className="w-4 h-4 text-[var(--oceansteel)] mt-0.5 flex-shrink-0" />
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Unit 2 */}
            <Card className="hover-lift">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-[var(--spacecadet)] mb-6 flex items-center gap-2">
                  <Target className="w-5 h-5 text-[var(--oceansteel)]" />
                  {unit2Machines.title}
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {unit2Machines.categories.map((cat, i) => (
                    <div key={i}>
                      <h4 className="font-semibold text-[var(--spacecadet)] mb-3">{cat.name}</h4>
                      <ul className="space-y-2">
                        {cat.machines.map((m, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-[color-mix(in_oklab,var(--text-body)_80%,white)]">
                            <ArrowRight className="w-4 h-4 text-[var(--oceansteel)] mt-0.5 flex-shrink-0" />
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Unit 3 */}
            <Card className="hover-lift">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-[var(--spacecadet)] mb-6 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-[var(--oceansteel)]" />
                  {unit3Machines.title}
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {unit3Machines.categories.map((cat, i) => (
                    <div key={i}>
                      <h4 className="font-semibold text-[var(--spacecadet)] mb-3">{cat.name}</h4>
                      <ul className="space-y-2">
                        {cat.machines.map((m, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-[color-mix(in_oklab,var(--text-body)_80%,white)]">
                            <ArrowRight className="w-4 h-4 text-[var(--oceansteel)] mt-0.5 flex-shrink-0" />
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Materials & Supply Chain */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Package className="w-8 h-8 text-[var(--oceansteel)]" />
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--spacecadet)]">
              Materials & Supplier Base
            </h2>
          </div>
          <Card className="hover-lift">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-[var(--spacecadet)] mb-3">Raw Materials</h4>
                  <p className="text-[color-mix(in_oklab,var(--text-body)_80%,white)] mb-4">
                    Premium materials sourced from trusted partners in Ludhiana, Punjab including 
                    RINL and JSPL brands:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-[color-mix(in_oklab,var(--text-body)_80%,white)]">
                      <CheckCircle className="w-4 h-4 text-[var(--oceansteel)] mt-0.5 flex-shrink-0" />
                      Round bright bars: 4 mm – 105 mm
                    </li>
                    <li className="flex items-start gap-2 text-sm text-[color-mix(in_oklab,var(--text-body)_80%,white)]">
                      <CheckCircle className="w-4 h-4 text-[var(--oceansteel)] mt-0.5 flex-shrink-0" />
                      Hex bars: 8 mm – 108 mm
                    </li>
                    <li className="flex items-start gap-2 text-sm text-[color-mix(in_oklab,var(--text-body)_80%,white)]">
                      <CheckCircle className="w-4 h-4 text-[var(--oceansteel)] mt-0.5 flex-shrink-0" />
                      Alloy steel, square bars, HB & HBB wires
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--spacecadet)] mb-3">Tubes & Pipes</h4>
                  <p className="text-[color-mix(in_oklab,var(--text-body)_80%,white)] mb-4">
                    Collaboration with leading manufacturers of welded ERW and CRW tubes:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-[color-mix(in_oklab,var(--text-body)_80%,white)]">
                      <CheckCircle className="w-4 h-4 text-[var(--oceansteel)] mt-0.5 flex-shrink-0" />
                      Thickness: 1/8″ NPS to 12″ NPS
                    </li>
                    <li className="flex items-start gap-2 text-sm text-[color-mix(in_oklab,var(--text-body)_80%,white)]">
                      <CheckCircle className="w-4 h-4 text-[var(--oceansteel)] mt-0.5 flex-shrink-0" />
                      Sizes: 5 mm to 600 mm
                    </li>
                    <li className="flex items-start gap-2 text-sm text-[color-mix(in_oklab,var(--text-body)_80%,white)]">
                      <CheckCircle className="w-4 h-4 text-[var(--oceansteel)] mt-0.5 flex-shrink-0" />
                      Round, square, rectangular tubes & GI pipes
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Inspection Capabilities */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Eye className="w-8 h-8 text-[var(--oceansteel)]" />
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--spacecadet)]">
              In-House Inspection Capabilities
            </h2>
          </div>
          <Card className="hover-lift">
            <CardContent className="p-8">
              <ul className="grid md:grid-cols-2 gap-4">
                {inspectionCapabilities.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[color-mix(in_oklab,var(--text-body)_80%,white)]">
                    <CheckCircle className="w-5 h-5 text-[var(--oceansteel)] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Strengths */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-8 h-8 text-[var(--oceansteel)]" />
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--spacecadet)]">
              Our Strengths
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {strengths.map((s, i) => (
              <Card key={i} className="hover-lift hover-scale">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-[color-mix(in_oklab,var(--oceansteel)_12%,white)] flex items-center justify-center mx-auto mb-3">
                    <div className="text-[var(--oceansteel)]">{s.icon}</div>
                  </div>
                  <p className="text-sm font-medium text-[var(--spacecadet)]">{s.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="px-10 py-6 text-lg hover-lift hover-glow"
            onClick={() => (window.location.href = '/quote')}
          >
            Request a Quote
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Capabilities;
