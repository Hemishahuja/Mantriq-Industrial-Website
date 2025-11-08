import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const posts = [
  {
    title: "Choosing the Right Fastener Grade",
    slug: "choosing-the-right-fastener-grade",
    date: "2025-07-10",
    summary:
      "A buyer’s guide to common grades for screws and studs, with when to specify SS 304/316 vs mild steel or brass.",
    fullContent: `
      <h2>Introduction</h2>
      <p>Selecting the right fastener grade is crucial for ensuring the performance, safety, and cost-effectiveness of your CNC machined components. Different materials offer varying levels of strength, corrosion resistance, and machinability.</p>

      <h2>Stainless Steel Grades</h2>
      <p><strong>SS 304:</strong> The most common stainless steel grade, offering excellent corrosion resistance and formability. Ideal for general-purpose applications where corrosion is a concern but extreme conditions are not present.</p>
      <p><strong>SS 316:</strong> Superior corrosion resistance, especially in marine or chemical environments. Contains molybdenum for enhanced resistance to pitting and crevice corrosion.</p>

      <h2>Mild Steel (MS)</h2>
      <p>Cost-effective option for applications where corrosion resistance is not critical. Excellent machinability and strength, but requires protective coatings in corrosive environments.</p>

      <h2>Brass</h2>
      <p>Excellent electrical conductivity and corrosion resistance. Often used in electrical applications or where a decorative finish is desired. Good machinability but lower strength than steel.</p>

      <h2>When to Choose Each Grade</h2>
      <ul>
        <li>Use SS 304 for general indoor applications with moderate corrosion concerns</li>
        <li>Choose SS 316 for marine, chemical, or high-corrosion environments</li>
        <li>Opt for MS when cost is the primary concern and corrosion can be managed</li>
        <li>Select brass for electrical conductivity or decorative applications</li>
      </ul>
    `,
  },
  {
    title: "Cost Advantage of Manufacturing in India vs Importing from Canada",
    slug: "cost-advantage-manufacturing-india-vs-canada",
    date: "2025-08-15",
    summary:
      "Compare the landed costs of manufacturing in India versus importing from Canada, highlighting labor differentials, shipping efficiencies, and standardization benefits for bulk-standard CNC components.",
    fullContent: `
      <h2>Understanding Landed Cost</h2>
      <p>Landed cost includes not just the manufacturing price but also shipping, duties, and logistics. For bulk-standard CNC components, manufacturing in India can offer significant advantages over importing from Canada.</p>

      <h2>Labor Cost Differential</h2>
      <p>Indian manufacturing benefits from lower labor costs while maintaining high-quality standards. Skilled CNC operators and engineers are available at competitive rates, leading to up to 35% savings compared to North American operations.</p>

      <h2>Shipping and Logistics Efficiency</h2>
      <p>Consolidated ocean freight from major Indian ports to North America provides predictable transit times. Bulk shipments reduce per-unit shipping costs and enable better inventory management.</p>

      <h2>Standardization Benefits</h2>
      <p>Focus on repeatable, standard-tolerance parts allows for optimized production processes and reduced setup times. This standardization drives down costs for high-volume orders.</p>

      <h2>Quality Assurance</h2>
      <p>Modern Indian CNC facilities employ rigorous quality control measures, including in-process inspections and 2.5D vision systems, ensuring consistent quality comparable to North American standards.</p>
    `,
  },
  {
    title: "Bulk vs Precision Machining: Cost Drivers",
    slug: "bulk-vs-precision-machining-cost-drivers",
    date: "2025-07-24",
    summary:
      "Where bulk-standard CNC wins on landed cost — and when ultra-tight tolerances justify premium precision shops.",
    fullContent: `
      <h2>The Cost Spectrum</h2>
      <p>CNC machining costs vary significantly based on tolerance requirements. Understanding when to choose bulk-standard versus precision machining is key to optimizing your manufacturing budget.</p>

      <h2>Bulk-Standard Machining Advantages</h2>
      <p>For components with standard tolerances (±0.1mm or looser), bulk-standard machining offers substantial cost savings:</p>
      <ul>
        <li>Faster cycle times due to relaxed precision requirements</li>
        <li>Higher machine utilization with fewer tool changes</li>
        <li>Economies of scale for large production runs</li>
        <li>Reduced inspection and quality control costs</li>
      </ul>

      <h2>When Precision Pays Off</h2>
      <p>Ultra-tight tolerances (±0.01mm or better) justify premium pricing when:</p>
      <ul>
        <li>Components are part of precision assemblies</li>
        <li>Surface finish requirements are critical</li>
        <li>Parts interface with other high-precision components</li>
        <li>Failure could result in significant safety or performance issues</li>
      </ul>

      <h2>Finding the Sweet Spot</h2>
      <p>Many applications don't require ultra-precision. By designing for standard tolerances where possible, manufacturers can achieve significant cost reductions while maintaining functionality.</p>
    `,
  },
  {
    title: "Material Selection for CNC Machining: SS, Brass, MS, Aluminum, Copper, and Nylon",
    slug: "material-selection-cnc-machining",
    date: "2025-09-01",
    summary:
      "Detailed guide on selecting materials for CNC turned and milled components, including properties, applications, and cost considerations for each material type.",
    fullContent: `
      <h2>Material Selection Criteria</h2>
      <p>Choosing the right material for CNC machining involves balancing mechanical properties, cost, machinability, and application requirements.</p>

      <h2>Stainless Steel (SS)</h2>
      <p><strong>Properties:</strong> High strength, excellent corrosion resistance, good weldability</p>
      <p><strong>Applications:</strong> Marine equipment, food processing, medical devices</p>
      <p><strong>Cost:</strong> Higher material cost, good machinability</p>

      <h2>Brass</h2>
      <p><strong>Properties:</strong> Good corrosion resistance, excellent electrical conductivity, attractive finish</p>
      <p><strong>Applications:</strong> Electrical components, plumbing fittings, decorative hardware</p>
      <p><strong>Cost:</strong> Moderate material cost, excellent machinability</p>

      <h2>Mild Steel (MS)</h2>
      <p><strong>Properties:</strong> High strength, good weldability, magnetic</p>
      <p><strong>Applications:</strong> Structural components, automotive parts, general engineering</p>
      <p><strong>Cost:</strong> Low material cost, good machinability</p>

      <h2>Aluminum</h2>
      <p><strong>Properties:</strong> Lightweight, good corrosion resistance, excellent thermal conductivity</p>
      <p><strong>Applications:</strong> Aerospace components, heat sinks, lightweight structures</p>
      <p><strong>Cost:</strong> Moderate material cost, good machinability</p>

      <h2>Copper</h2>
      <p><strong>Properties:</strong> Excellent electrical/thermal conductivity, corrosion resistance, malleable</p>
      <p><strong>Applications:</strong> Electrical connectors, heat exchangers, plumbing</p>
      <p><strong>Cost:</strong> Higher material cost, good machinability</p>

      <h2>Nylon</h2>
      <p><strong>Properties:</strong> Lightweight, wear-resistant, self-lubricating, electrical insulator</p>
      <p><strong>Applications:</strong> Gears, bearings, insulators, lightweight components</p>
      <p><strong>Cost:</strong> Moderate material cost, excellent machinability</p>
    `,
  },
  {
    title: "Quality Control in Bulk CNC Manufacturing",
    slug: "quality-control-bulk-cnc-manufacturing",
    date: "2025-09-15",
    summary:
      "How in-process checks, 2.5D vision systems, and traceability ensure consistent quality for high-volume production runs.",
    fullContent: `
      <h2>Quality Control Framework</h2>
      <p>Maintaining consistent quality in high-volume CNC manufacturing requires a comprehensive approach combining technology, processes, and skilled personnel.</p>

      <h2>In-Process Inspections</h2>
      <p>Regular dimensional checks during production catch issues early:</p>
      <ul>
        <li>First article inspection (FAI) for each production run</li>
        <li>Periodic sampling throughout the manufacturing process</li>
        <li>Real-time monitoring of critical dimensions</li>
      </ul>

      <h2>2.5D Vision Systems</h2>
      <p>Automated optical inspection provides:</p>
      <ul>
        <li>High-speed dimensional measurement</li>
        <li>Consistent, operator-independent results</li>
        <li>Detection of surface defects and dimensional variations</li>
        <li>Data logging for process improvement</li>
      </ul>

      <h2>Traceability Systems</h2>
      <p>Complete lot traceability ensures:</p>
      <ul>
        <li>Material certification tracking</li>
        <li>Process parameter recording</li>
        <li>Quality inspection history</li>
        <li>Recall capability if issues arise</li>
      </ul>

      <h2>Statistical Process Control</h2>
      <p>SPC methods monitor process stability and capability, enabling proactive quality management and continuous improvement.</p>
    `,
  },
  {
    title: "Shipping and Logistics for International CNC Components",
    slug: "shipping-logistics-international-cnc-components",
    date: "2025-10-01",
    summary:
      "Optimizing supply chains with consolidated ocean freight, last-mile delivery, and predictable ETAs for bulk-standard parts.",
    fullContent: `
      <h2>Supply Chain Optimization</h2>
      <p>Efficient shipping and logistics are critical for maintaining cost advantages in international CNC component manufacturing.</p>

      <h2>Consolidated Ocean Freight</h2>
      <p>Bulk shipping from major Indian ports offers:</p>
      <ul>
        <li>Lower per-unit shipping costs for large volumes</li>
        <li>Regular scheduled sailings with predictable transit times</li>
        <li>Reduced carbon footprint through optimized container utilization</li>
      </ul>

      <h2>Last-Mile Delivery</h2>
      <p>Local distribution networks ensure:</p>
      <ul>
        <li>Fast final delivery to your facility</li>
        <li>Reduced inventory holding costs</li>
        <li>Just-in-time delivery capabilities</li>
      </ul>

      <h2>Predictable ETAs</h2>
      <p>Established shipping lanes provide:</p>
      <ul>
        <li>Reliable delivery schedules</li>
        <li>Better production planning</li>
        <li>Reduced safety stock requirements</li>
      </ul>

      <h2>Customs and Documentation</h2>
      <p>Streamlined processes handle:</p>
      <ul>
        <li>Import documentation and compliance</li>
        <li>Duty optimization</li>
        <li>Certificate of origin management</li>
      </ul>
    `,
  },
  {
    title: "Design for Manufacturability (DFM) Best Practices",
    slug: "design-manufacturability-dfm-best-practices",
    date: "2025-10-15",
    summary:
      "Tips for designing CNC components that balance functionality, cost, and manufacturability in high-volume production.",
    fullContent: `
      <h2>DFM Principles</h2>
      <p>Design for Manufacturability (DFM) optimizes component design for efficient, cost-effective CNC machining while maintaining functionality.</p>

      <h2>Material Considerations</h2>
      <p>Select materials based on:</p>
      <ul>
        <li>Application requirements (strength, corrosion resistance, etc.)</li>
        <li>Machinability characteristics</li>
        <li>Cost-effectiveness for volume production</li>
      </ul>

      <h2>Geometric Simplification</h2>
      <p>Design for ease of machining:</p>
      <ul>
        <li>Avoid deep pockets and thin walls</li>
        <li>Use standard drill sizes and radii</li>
        <li>Minimize tool changes and complex operations</li>
      </ul>

      <h2>Tolerance Optimization</h2>
      <p>Specify appropriate tolerances:</p>
      <ul>
        <li>Use standard tolerances where possible</li>
        <li>Avoid unnecessarily tight tolerances</li>
        <li>Consider process capability in tolerance setting</li>
      </ul>

      <h2>Feature Integration</h2>
      <p>Combine features to reduce operations:</p>
      <ul>
        <li>Integrate multiple functions into single components</li>
        <li>Minimize part count through thoughtful design</li>
        <li>Optimize for available machine capabilities</li>
      </ul>

      <h2>Cost-Benefit Analysis</h2>
      <p>Balance design complexity with manufacturing costs to achieve optimal landed cost for your application.</p>
    `,
  },
];

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <Header />
        <main className="container mx-auto px-4 pt-28 pb-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
            <Button asChild>
              <Link to="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Mantriq Industrial</title>
        <meta name="description" content={post.summary} />
      </Helmet>
      <Header />
      <main className="container mx-auto px-4 pt-28 pb-20 max-w-4xl">
        <Button asChild variant="ghost" className="mb-6">
          <Link to="/blog">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </Button>

        <article>
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--deep-navy)] mb-4">
              {post.title}
            </h1>
            <time className="text-muted-foreground">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </header>

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.fullContent }}
          />
        </article>
      </main>
      <Footer />
    </>
  );
}
