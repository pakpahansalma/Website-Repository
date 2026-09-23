import { useState } from "react";
import { Link, useLocation } from "wouter";
import {
  ArrowDownRight,
  ArrowLeft,
  BarChart3,
  BriefcaseBusiness,
  Check,
  Clipboard,
  Database,
  FileText,
  Github,
  Linkedin,
  Mail,
  Menu,
  MousePointer2,
  X,
} from "lucide-react";
const profilePhoto = "/profile-photo-new.jpg.png";
const customerDynamicsImage = "/project-01-customer-dynamics-01.png.jpg";
const carSalesImage = "/project-02-car-sales-01.png.png";
const carSalesDetailImage = "/project-02-car-sales-02.png.png";
const ordersImage = "/project-03-orders-report-01.png.png";
const coffeeImage = "/project-04-coffee-sales-01.png.png";
const productivityImage = "/project-05-worker-productivity-01.png.png";

const bnspLogo = "/bnsp.png";
const revouLogo = "/revou.png";
const myskillLogo = "/myskill.webp";
const cakapLogo = "/cakap.png";

const cakapCertificate1 = "/cakap-datascientist1.jpg";
const cakapCertificate2 = "/cakap-datascientist2.jpg";
const myskillDataAnalysisCertificate = "/myskill-data-analysis.jpg";
const myskillExcelCertificate = "/myskill-excel.jpg";
const myskillSqlCertificate = "/myskill-sql.jpg";

type Project = {
  index: string;
  slug: string;
  context: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
  additionalImages?: { src: string; alt: string; caption: string }[];
  metrics: string[];
  objective: string;
  businessQuestion: string;
  dataContext: string;
  process: string[];
  analysis: string;
  findings: string[];
  interpretation: string;
  analyticalValue: string[];
  furtherAnalysis: string[];
  output: string;
};

const projects: Project[] = [
  {
    index: "01",
    slug: "customer-dynamics-analysis",
    context:
      "Internship project · Market Intelligence Analyst · PT Bakrie Pipe Industries",
    title: "Customer Dynamics Analysis & Dashboard",
    category: "Excel / Power Query",
    year: "2026",
    description:
      "An Excel-based business intelligence project transforming transaction data into customer-level insights on activity, retention, and dormant customer patterns.",
    tags: ["Microsoft Excel", "Power Query", "Pivot Table", "Slicer"],
    image: customerDynamicsImage,
    imageAlt:
      "Customer Dynamics Analysis dashboard built with Microsoft Excel and Power Query",
    metrics: ["47% retention", "30% dormant", "47% one-year activity"],
    objective:
      "Transform transaction data into customer-level insights to understand customer activity, retention, and dormant customer patterns.",
    businessQuestion:
      "How can transaction data be transformed into customer-level insights to understand customer activity, retention, and dormant customer patterns?",
    dataContext:
      "This portfolio version uses dummy data with the same analytical structure to protect confidential company information. The statistics shown do not represent actual company performance.",
    process: [
      "Raw Data",
      "Cleaning",
      "Validation",
      "Customer Master",
      "KPI Analysis",
      "Dashboard",
    ],
    analysis:
      "Customer-level activity, retention, and dormancy were organized into a centralized Excel reporting view using Power Query, Pivot Tables, and Slicers.",
    findings: [
      "47% of customers met the defined retention criteria.",
      "30% were classified as dormant based on the defined activity criteria.",
      "47% were active for only one year during the observation period.",
    ],
    interpretation:
      "47% retention indicates that less than half of customers continued into the defined retention period. 30% dormant customers indicates a meaningful group of previously active customers who are no longer active under the project’s definition. 47% of customers being active for only one year indicates a pattern of relatively short customer activity.",
    analyticalValue: [
      "Customer segmentation",
      "Customer activity monitoring",
      "Identification of dormant customers",
      "Retention analysis",
      "Centralized dashboard reporting",
      "Decision support",
    ],
    furtherAnalysis: [
      "Are one-year customers concentrated within specific customer types?",
      "Does activity differ by product or transaction category?",
      "What characteristics distinguish retained and dormant customers?",
      "Is limited repeat activity consistent with the expected purchasing cycle?",
    ],
    output:
      "Further analysis would be needed to determine whether this pattern reflects low repeat demand, project-based purchasing behavior, customer characteristics, or other factors.",
  },
  {
    index: "02",
    slug: "car-sales-dashboard",
    context: "Independent project",
    title: "Car Sales Performance Dashboard",
    category: "Power BI / DAX",
    year: "2025",
    description:
      "An interactive Power BI dashboard analyzing sales performance, product segments, and regional patterns to support data-driven analysis.",
    tags: ["Power BI", "DAX", "Filters", "Slicers"],
    image: carSalesImage,
    imageAlt: "Car Sales Performance dashboard built with Power BI",
    additionalImages: [
      {
        src: carSalesDetailImage,
        alt: "Additional Car Sales Performance dashboard analysis view",
        caption: "02 / Additional analysis view",
      },
    ],
    metrics: ["$371M YTD sales", "+23.6% YTD growth", "+19.7% unit growth"],
    objective:
      "Understand sales performance, customer segments, and regional trends to support data-driven decision-making.",
    businessQuestion:
      "How do sales performance, product segments, and regional patterns contribute to overall car sales performance?",
    dataContext:
      "An independent project using raw sales data structured for interactive dashboard analysis.",
    process: [
      "Cleaned and structured raw sales data",
      "Built KPI metrics",
      "Developed interactive Power BI dashboard",
      "Used DAX, filters, and slicers",
    ],
    analysis:
      "Sales performance was examined through KPI development, segment comparison, brand patterns, and regional views in Power BI.",
    findings: [
      "$371M YTD Sales.",
      "+23.6% YTD growth.",
      "+19.7% unit growth.",
      "SUVs were the main revenue-driving segment.",
      "Top brands: Chevrolet, Ford, and Dodge.",
      "Top regions: Austin and Janesville. Opportunity identified: Aurora.",
    ],
    interpretation:
      "Overall sales performance was supported by strong unit growth, with SUVs representing a major revenue-driving segment. Sales performance also varied across brands and regions. The analysis identifies patterns for comparison and further investigation; it does not establish causality.",
    analyticalValue: [
      "Sales performance visibility",
      "Segment comparison",
      "Regional comparison",
      "Identification of high-performing areas",
      "Identification of areas requiring further investigation",
    ],
    furtherAnalysis: [
      "Is growth driven by unit volume or average selling price?",
      "Why do certain regions outperform others?",
      "Is SUV performance consistent across regions?",
      "Does brand performance vary significantly by location?",
    ],
    output: "Dashboard preview and supporting project link to be added.",
  },
  {
    index: "03",
    slug: "orders-report",
    context: "Independent project",
    title: "Orders & Regional Sales Report",
    category: "Looker Studio / Google Sheets",
    year: "2025",
    description:
      "An interactive dashboard analyzing order distribution, sales performance, customer segments, categories, and regional patterns.",
    tags: ["Looker Studio", "Google Sheets"],
    image: ordersImage,
    imageAlt: "Orders and Regional Sales dashboard built with Looker Studio",
    metrics: ["9,994 orders", "793 customers", "49 states · 51.9% consumer"],
    objective:
      "Build an interactive dashboard to monitor order distribution and sales performance across regions, categories, and customer segments.",
    businessQuestion:
      "How are orders and sales distributed across regions, categories, and customer segments?",
    dataContext:
      "A sales dataset structured for analysis by region, category, customer segment, city, and year from 2014–2017.",
    process: [
      "Cleaned and structured sales dataset",
      "Built interactive dashboard",
      "Used filters and trend charts",
      "Visualized performance by region, category, and customer segment",
    ],
    analysis:
      "The report combines order volume, customer mix, category, city, regional comparison, and time-trend views for interactive exploration.",
    findings: [
      "9,994 orders.",
      "793 customers.",
      "49 states.",
      "Top categories: Technology and Office Supplies.",
      "Top cities: New York City and Los Angeles.",
      "Consumer customers represented 51.9% of the customer mix.",
      "Sales grew consistently from 2014–2017, with Q4 as the peak period.",
    ],
    interpretation:
      "The analysis shows variation in sales activity across customer segments, categories, and geographic locations. Consumer customers represented the largest customer segment, while Technology and Office Supplies were among the leading categories.",
    analyticalValue: [
      "Visibility into sales distribution",
      "Identification of high-performing segments",
      "Regional comparison",
      "Trend monitoring",
      "Interactive reporting",
    ],
    furtherAnalysis: [
      "Does the largest segment also contribute the most revenue?",
      "Which regions have high order volume but relatively low sales?",
      "Are category preferences different across regions?",
      "What factors contribute to the Q4 sales peak?",
      "How does customer concentration vary geographically?",
    ],
    output: "Dashboard preview and project link to be added.",
  },
  {
    index: "04",
    slug: "coffee-shop-sales",
    context: "Training project · PT Cerdas Digital Nusantara",
    title: "Coffee Shop Sales Analysis",
    category: "SQL / PostgreSQL",
    year: "Training project",
    description:
      "A SQL-based sales analysis exploring transaction patterns, product performance, and revenue drivers.",
    tags: ["PostgreSQL", "SQL"],
    image: coffeeImage,
    imageAlt: "Coffee Shop Sales analysis using PostgreSQL and SQL",
    metrics: [
      "Monday & Friday peak activity",
      "Top product identified",
      "$21K+ revenue",
    ],
    objective:
      "Analyze transaction data to identify sales trends, customer behavior, and revenue drivers.",
    businessQuestion:
      "What sales patterns, products, and time periods contribute most to transaction activity and revenue?",
    dataContext:
      "Training project completed during a data-focused program at PT Cerdas Digital Nusantara.",
    process: [
      "Cleaned dataset",
      "Queried data using PostgreSQL",
      "Analyzed sales by date",
      "Analyzed products",
      "Analyzed day of week",
      "Used SUM, COUNT, AVG and aggregation",
    ],
    analysis:
      "Transaction activity and revenue contribution were compared across dates, days of week, products, and product types using SQL aggregation.",
    findings: [
      "Revenue spikes occurred on specific days.",
      "Busiest days: Monday and Friday.",
      "Top product: Sustainably Grown Organic Lg.",
      "Revenue exceeded $21K in the analyzed view.",
      "Premium and branded products generated higher revenue.",
    ],
    interpretation:
      "Transaction activity was concentrated on specific days, while revenue contribution varied across products. The analysis also highlighted differences in performance between product types.",
    analyticalValue: [
      "Identified temporal sales patterns",
      "Identified high-performing products",
      "Compared product performance",
      "Provided evidence for further staffing, promotion, and inventory analysis",
    ],
    furtherAnalysis: [
      "Does high transaction volume correspond to high daily revenue?",
      "What time of day drives peak transactions?",
      "Are high-revenue products also high-volume products?",
      "Does product performance vary by day?",
      "Are premium products generating higher revenue because of price, volume, or both?",
    ],
    output:
      "SQL queries and project link to be added. No staffing, inventory, or revenue outcome is claimed.",
  },
  {
    index: "05",
    slug: "worker-productivity-model",
    context: "Training project · PT Cerdas Digital Nusantara",
    title: "Worker Productivity Predictive Model",
    category: "Python / Machine Learning",
    year: "Training project",
    description:
      "A predictive modeling project comparing machine learning algorithms to identify the most accurate approach for predicting worker productivity.",
    tags: ["Python", "Machine Learning"],
    image: productivityImage,
    imageAlt: "Worker Productivity predictive modeling analysis using Python",
    metrics: ["Random Forest", "RMSE 0.1035", "SMAPE 9.79%"],
    objective:
      "Identify the most accurate model for predicting worker productivity and understand key performance drivers.",
    businessQuestion:
      "Which machine learning approach provides the most accurate prediction of worker productivity?",
    dataContext:
      "Project completed during training at PT Cerdas Digital Nusantara. The model was not presented as deployed and no operational impact is claimed.",
    process: [
      "Prepared and cleaned dataset",
      "Handled missing values",
      "Examined outliers",
      "Prepared features",
      "Built multiple models",
      "Evaluated with RMSE and SMAPE",
      "Applied cross-validation",
      "Performed hyperparameter tuning",
    ],
    analysis:
      "Linear Regression, KNN, Decision Tree, Random Forest, SVM, and MLP were evaluated using objective model metrics after cross-validation and hyperparameter tuning.",
    findings: [
      "Random Forest achieved RMSE = 0.1035.",
      "Random Forest achieved SMAPE = 9.79%.",
      "Random Forest performed best among the evaluated models.",
      "KNN and Decision Tree showed moderate performance with relatively interpretable results.",
      "SVM and MLP performed reasonably but required additional computational tuning.",
      "Linear Regression was used as a baseline and indicated that the relationship in the dataset was not well represented by a simple linear model.",
    ],
    interpretation:
      "Random Forest achieved the strongest predictive performance on this dataset. Its performance suggests that non-linear relationships may play an important role in the available features.",
    analyticalValue: [
      "Compared multiple predictive approaches",
      "Established a baseline model",
      "Evaluated model performance objectively",
      "Identified Random Forest as the strongest model among those tested",
      "Demonstrated an end-to-end predictive analytics workflow",
    ],
    furtherAnalysis: [
      "Which features contribute most to predictions?",
      "Are operational factors associated with higher or lower productivity?",
      "How stable is the model across data subsets?",
      "Would additional feature engineering improve performance?",
      "How would predictions perform on unseen real-world data?",
    ],
    output:
      "Model notebook and project link to be added. The model was not presented as deployed and no operational impact is claimed.",
  },
];

const certificationImages = [
  {
    src: cakapCertificate1,
    alt: "Cakap Data Scientist Certificate",
  },
  {
    src: cakapCertificate2,
    alt: "Cakap Data Scientist Certificate",
  },
  {
    src: myskillDataAnalysisCertificate,
    alt: "MySkill Data Analysis Certificate",
  },
  {
    src: myskillExcelCertificate,
    alt: "MySkill Microsoft Excel Certificate",
  },
  {
    src: myskillSqlCertificate,
    alt: "MySkill SQL for Data Analysis Certificate",
  },
];

const navItems = [
  { label: "Home", href: "#top", section: "top" },
  { label: "About", href: "#about", section: "about" },
  { label: "Skills", href: "#skills", section: "skills" },
  { label: "Experience", href: "#experience", section: "experience" },
  { label: "Projects", href: "#work", section: "work" },
  { label: "Contact", href: "#contact", section: "contact" },
];

function AnchorLink({
  href,
  label,
  onNavigate,
  active,
}: {
  href: string;
  label: string;
  onNavigate?: () => void;
  active?: boolean;
}) {
  return (
    <a
      aria-current={active ? "true" : undefined}
      className="nav-link"
      data-testid={`link-nav-${label.toLowerCase()}`}
      href={`/${href}`}
      onClick={onNavigate}
    >
      {label}
    </a>
  );
}

function SiteHeader({ activeSection }: { activeSection: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="report-shell header-inner">
        <a
          className="brand"
          data-testid="link-brand"
          href="/#top"
          onClick={() => setMenuOpen(false)}
        >
          <span className="brand-mark">SC</span>
          <span className="brand-copy">
            Salma Cristianes Roito Pakpahan / portfolio
          </span>
        </a>
        <nav aria-label="Primary navigation" className="desktop-nav">
          {navItems.map((item) => (
            <AnchorLink
              active={activeSection === item.section}
              href={item.href}
              key={item.href}
              label={item.label}
            />
          ))}
        </nav>
        <button
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          className="mobile-menu-button"
          data-testid="button-mobile-navigation"
          onClick={() => setMenuOpen((value) => !value)}
          type="button"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      <nav
        aria-label="Mobile navigation"
        className="mobile-nav report-shell"
        data-open={menuOpen}
        id="mobile-navigation"
      >
        {navItems.map((item) => (
          <AnchorLink
            active={activeSection === item.section}
            href={item.href}
            key={item.href}
            label={item.label}
            onNavigate={() => setMenuOpen(false)}
          />
        ))}
        <a
          className="header-cta"
          data-testid="link-mobile-contact"
          href="/#contact"
          onClick={() => setMenuOpen(false)}
        >
          Contact <ArrowDownRight size={14} />
        </a>
      </nav>
    </header>
  );
}

function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const nodeRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return (
    <div className={`reveal ${className}`} ref={nodeRef}>
      {children}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className="project-card"
      data-testid={`card-project-${project.index}`}
    >
      <div aria-hidden="true" className="project-index">
        <span>{project.index}</span>
      </div>
      <div className="project-body">
        <div className="project-meta">
          <span className="mono-label">{project.category}</span>
          <span className="mono-label">{project.year}</span>
        </div>
        <Link
          className="project-title-link"
          data-testid={`link-project-title-${project.index}`}
          href={`/projects/${project.slug}`}
        >
          <h3 data-testid={`text-project-title-${project.index}`}>
            {project.title}
          </h3>
        </Link>
        <p className="project-description">{project.description}</p>
        <div aria-label={`${project.title} tools`} className="project-tags">
          {project.tags.map((tag) => (
            <span
              className="project-tag"
              data-testid={`tag-project-${project.index}-${tag}`}
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
        <div
          aria-label={`${project.title} key findings`}
          className="project-metrics"
        >
          {project.metrics.map((metric) => (
            <strong
              data-testid={`metric-project-${project.index}-${metric}`}
              key={metric}
            >
              {metric}
            </strong>
          ))}
        </div>
      </div>
      <div className="project-preview">
        <Link
          aria-label={`Open case study: ${project.title}`}
          className="preview-window"
          data-testid={`link-project-image-${project.index}`}
          href={`/projects/${project.slug}`}
        >
          <img
            alt={project.imageAlt}
            className="project-image"
            src={project.image}
          />
        </Link>
        <Link
          className="project-action"
          data-testid={`link-case-study-${project.index}`}
          href={`/projects/${project.slug}`}
        >
          View case study <ArrowDownRight size={15} strokeWidth={1.7} />
        </Link>
      </div>
    </article>
  );
}

function HomePage() {
  const [activeSection, setActiveSection] = useState("top");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.section))
      .filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-24% 0px -64% 0px", threshold: [0.05, 0.2, 0.6] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const copyEmail = () => {
    if (navigator.clipboard) {
      void navigator.clipboard.writeText("salmacrpakpahan16@gmail.com");
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  };

  return (
    <main className="portfolio-page">
      <SiteHeader activeSection={activeSection} />
      <section aria-labelledby="hero-title" className="hero" id="top">
        <div className="report-shell hero-grid">
          <Reveal className="hero-content">
            <p className="eyebrow">Data & business portfolio / 2026</p>

            <p className="hero-greeting">Hello, I’m</p>

            <h1 id="hero-title">
              <span>Salma Cristianes Roito Pakpahan</span>
            </h1>

            <p className="intro-copy">
              I turn data into clear insights, practical analysis, and
              meaningful business questions.
            </p>

            <div className="hero-actions">
              <a
                className="hero-cta"
                data-testid="link-hero-projects"
                href="/#work"
              >
                View projects <ArrowDownRight size={16} />
              </a>

              <a
                className="hero-cta secondary"
                data-testid="link-hero-contact"
                href="/#contact"
              >
                Get in touch <ArrowDownRight size={16} />
              </a>
            </div>
          </Reveal>

          <Reveal className="hero-aside reveal-delay-2">
            <figure
              className="profile-frame"
              data-testid="figure-profile-photo"
            >
              <img
                alt="Professional profile photo"
                data-testid="img-profile-photo"
                src={profilePhoto}
              />
            </figure>

            <p className="portrait-caption">
              Profile / analyst at work
              <strong>Data → analysis → insight</strong>
            </p>
          </Reveal>
        </div>

        <div aria-hidden="true" className="scroll-marker">
          Scroll to examine
        </div>
      </section>
      <div className="report-shell">
        <div aria-label="Portfolio index" className="index-band">
          {[
            ["01 / Profile", "Mathematics → Data"],
            ["02 / Capabilities", "Analytics & BI"],
            ["03 / Projects", "Five case studies"],
            ["04 / Background", "Experience & certifications"],
          ].map(([label, value]) => (
            <div
              className="index-cell"
              data-testid={`text-index-${label
                .split("/")[1]
                .trim()
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              key={label}
            >
              <span className="mono-label">{label}</span>
              <div className="index-value">{value}</div>
            </div>
          ))}
        </div>
      </div>
      <section aria-labelledby="about-title" className="intro" id="about">
        <div className="report-shell">
          <div className="two-column">
            <div>
              <span className="section-number">01 — About me</span>
              <h2 className="section-title" id="about-title">
                Clarity
                <br />
                is a
                <br />
                practice.
              </h2>
            </div>
            <div>
              <p className="intro-support">
                My interest in Data and Business Analytics grew through hands-on
                experience. As I worked with different types of data, I realized
                how much information and knowledge can be uncovered when data is
                processed and interpreted properly.
              </p>

              <p className="intro-support">
                I am particularly interested in turning data into relevant
                insights that can support better business decisions. While I am
                still developing my skills, I continuously learn and improve my
                ability to understand, analyze, and communicate data in a clear
                and meaningful way.
              </p>

              <p className="intro-support">
                With a background in Mathematics and experience in data
                analysis, data science, reporting, dashboarding, forecasting,
                and business analysis, I aim to contribute by turning data into
                insights that are useful, practical, and relevant to the
                business.
              </p>
            </div>
          </div>
          <div aria-label="Working principles" className="principles">
            <Reveal className="principle">
              <MousePointer2
                color="var(--color-red)"
                size={20}
                strokeWidth={1.5}
              />
              <span className="mono-label">01 / Approach</span>
              <h3>Start with the question</h3>
              <p>
                I begin by understanding the business question before choosing
                the analysis, chart, or model.
              </p>
            </Reveal>

            <Reveal className="principle reveal-delay-1">
              <Database color="var(--color-red)" size={20} strokeWidth={1.5} />
              <span className="mono-label">02 / Data</span>
              <h3>Understand the data</h3>
              <p>
                I pay attention to where the data comes from, how it was
                prepared, and what it can actually support.
              </p>
            </Reveal>

            <Reveal className="principle reveal-delay-2">
              <BarChart3 color="var(--color-red)" size={20} strokeWidth={1.5} />
              <span className="mono-label">03 / Communication</span>
              <h3>Make insights clear</h3>
              <p>
                I aim to communicate findings through simple visuals and
                explanations that make the important information easy to
                understand.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
      <section aria-labelledby="skills-title" className="skills" id="skills">
        <div className="report-shell">
          <div className="two-column">
            <div>
              <span className="section-number">02 — Skills</span>
              <h2 className="section-title" id="skills-title">
                Tools & Capabilities
              </h2>
            </div>

            <p className="intro-support">
              A practical set of tools and skills developed through academic,
              professional, and project-based experience. I focus on applying
              them to understand data, solve business problems, and communicate
              insights clearly.
            </p>
          </div>

          <div className="skills-grid">
            {[
              [
                "Data & Business Analytics",
                [
                  "Data Analysis",
                  "Data Processing",
                  "Data Cleaning",
                  "Data Validation",
                  "Data Consolidation",
                  "Data Reconciliation",
                  "Exploratory Data Analysis",
                  "Statistical Analysis",
                  "Trend Analysis",
                  "Sales Analysis",
                  "Customer Analytics",
                  "Business Analysis",
                  "Business Performance Analysis",
                  "KPI Monitoring",
                  "Forecasting",
                ],
              ],
              [
                "Technical Tools",
                [
                  "Microsoft Excel",
                  "Pivot Tables",
                  "Pivot Charts",
                  "VLOOKUP",
                  "HLOOKUP",
                  "Excel Formulas",
                  "Power Query",
                  "Power BI",
                  "SQL (PostgreSQL)",
                  "Python",
                  "Pandas",
                  "Google Sheets",
                  "IBM SPSS Statistics",
                  "Tableau",
                  "AI Tools",
                ],
              ],
              [
                "Visualization & Reporting",
                [
                  "Dashboard Development",
                  "Data Visualization",
                  "Dashboard Design",
                  "Business Reporting",
                  "KPI Reporting",
                  "Analytical Reporting",
                ],
              ],
              [
                "Business & Problem Solving",
                [
                  "Business Insights",
                  "Business Recommendations",
                  "Decision Support",
                  "Problem Solving",
                  "Critical Thinking",
                  "Analytical Thinking",
                  "Stakeholder Coordination",
                  "Communication",
                  "Presentation",
                ],
              ],
              [
                "Professional Strengths",
                [
                  "Attention to Detail",
                  "Teamwork",
                  "Leadership",
                  "Adaptability",
                  "Discipline",
                  "Continuous Learning",
                ],
              ],
            ].map(([category, skills]) => (
              <Reveal className="skill-group" key={category as string}>
                <h3>{category as string}</h3>

                <div className="skill-list">
                  {(skills as string[]).map((skill) => (
                    <span
                      data-testid={`skill-${skill
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      key={skill}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section aria-labelledby="work-title" className="case-studies" id="work">
        <div className="report-shell">
          <div className="section-heading-row">
            <div>
              <span className="section-number">03 — Selected work</span>
              <h2 className="section-title" id="work-title">
                Evidence, with a point of view.
              </h2>
            </div>
            <p className="section-note">
              Five analytical case studies / dashboards, reports, SQL, and
              predictive modeling.
            </p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <Reveal key={project.index}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section
        aria-labelledby="record-title"
        className="evidence"
        id="experience"
      >
        <div className="report-shell">
          <div className="two-column">
            <div>
              <span className="section-number">04 — The record</span>

              <h2 className="section-title" id="record-title">
                Context behind the work.
              </h2>
            </div>

            <p className="intro-support">
              A concise record of the experience, education, and tools behind my
              work in data analytics.
            </p>
          </div>

          <div className="evidence-grid">
            <div>
              <div className="resume-list">
                <div className="resume-row">
                  <span className="mono-label">Education</span>

                  <strong>Bachelor of Science in Mathematics</strong>

                  <p>
                    Universitas Sumatera Utara · 2021 – 2025
                    <br />
                    GPA 3.65 / 4.00 · Cumlaude
                  </p>
                </div>

                <div className="resume-row">
                  <span className="mono-label">Experience</span>

                  <strong>Market Intelligence Analyst</strong>

                  <p>PT Bakrie Pipe Industries · Dec 2025 – Jun 2026</p>
                </div>

                <div className="resume-row">
                  <span className="mono-label">Experience</span>

                  <strong>Data Scientist</strong>

                  <p>
                    PT Cerdas Digital Nusantara · MSIB Batch 7 · Sep 2024 – Dec
                    2024
                  </p>
                </div>

                <div className="resume-row">
                  <span className="mono-label">Experience</span>

                  <strong>Human Capital Intern</strong>

                  <p>PT Bank SUMUT · Jun 2024 – Jul 2024</p>
                </div>
              </div>
            </div>

            <aside className="toolkit">
              <span className="mono-label">Working toolkit</span>

              <h3>Tools used across the work.</h3>

              <div className="toolkit-list">
                {[
                  "Microsoft Excel",
                  "Power Query",
                  "Power BI",
                  "SQL",
                  "PostgreSQL",
                  "Python",
                  "Pandas",
                  "Google Sheets",
                  "Tableau",
                  "IBM SPSS Statistics",
                  "DAX",
                ].map((tool) => (
                  <span className="tool" key={tool}>
                    {tool}
                  </span>
                ))}
              </div>

              <p className="toolkit-copy">
                Supporting capabilities across data analysis, business
                intelligence, visualization, reporting, and predictive
                analytics.
              </p>
            </aside>
          </div>
        </div>
      </section>
      <section
        aria-labelledby="certifications-title"
        className="certifications"
        id="certifications"
      >
        <div className="report-shell">
          <div className="section-heading-row">
            <div>
              <span className="section-number">05 — Certifications</span>

              <h2 className="section-title" id="certifications-title">
                Proof of continued learning.
              </h2>
            </div>

            <p className="section-note">
              Professional certifications and training across data analytics,
              business intelligence, and data science.
            </p>
          </div>

          <div className="certification-grid">
            <Reveal className="certification-card certification-featured">
              <div className="certification-logo">
                <img src={bnspLogo} alt="BNSP" />
              </div>

              <div className="certification-content">
                <span className="mono-label">2026</span>
                <h3>Data Analyst Competency Assessment</h3>
                <p>BNSP · Competent</p>
                <small>Certificate issuance in progress</small>
              </div>
            </Reveal>

            <Reveal className="certification-card">
              <div className="certification-logo">
                <img src={revouLogo} alt="RevoU" />
              </div>

              <div className="certification-content">
                <span className="mono-label">2026</span>
                <h3>Data Analyst</h3>
                <p>RevoU</p>
              </div>
            </Reveal>

            <Reveal className="certification-card">
              <div className="certification-logo">
                <img src={myskillLogo} alt="MySkill" />
              </div>

              <div className="certification-content">
                <span className="mono-label">2025</span>
                <h3>Data Analysis</h3>
                <p>MySkill</p>
              </div>
            </Reveal>

            <Reveal className="certification-card">
              <div className="certification-logo">
                <img src={myskillLogo} alt="MySkill" />
              </div>

              <div className="certification-content">
                <span className="mono-label">2025</span>
                <h3>SQL for Data Analysis</h3>
                <p>MySkill</p>
              </div>
            </Reveal>

            <Reveal className="certification-card">
              <div className="certification-logo">
                <img src={myskillLogo} alt="MySkill" />
              </div>

              <div className="certification-content">
                <span className="mono-label">2025</span>
                <h3>Microsoft Excel</h3>
                <p>MySkill</p>
              </div>
            </Reveal>

            <Reveal className="certification-card">
              <div className="certification-logo">
                <img src={cakapLogo} alt="Cakap" />
              </div>

              <div className="certification-content">
                <span className="mono-label">2024</span>
                <h3>Data Scientist Program</h3>
                <p>Cakap · MSIB Batch 7</p>
              </div>
            </Reveal>
          </div>

          <Link className="certification-view-link" href="/certifications">
            Click Certifications Here
          </Link>
        </div>
      </section>
      <section aria-labelledby="contact-title" className="contact" id="contact">
        <div className="report-shell">
          <div className="contact-grid">
            <div>
              <span className="section-number">05 — Contact</span>

              <h2 id="contact-title">
                Bring a<br />
                question.
              </h2>

              <p className="contact-copy">
                I’m open to opportunities, collaborations, and conversations
                around data analytics, business intelligence, and data-driven
                problem solving.
              </p>

              <button
                className="copy-button"
                data-testid="button-copy-email"
                onClick={copyEmail}
                type="button"
              >
                {copied ? <Check size={15} /> : <Clipboard size={15} />}
                {copied ? "Copied salmacrpakpahan16@gmail.com" : "Copy Email"}
              </button>
            </div>

            <div className="contact-actions">
              <a
                className="contact-link"
                data-testid="link-email"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=salmacrpakpahan16@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <Mail size={15} />
                  salmacrpakpahan16@gmail.com
                </span>
                <ArrowDownRight size={15} />
              </a>

              <a
                className="contact-link"
                data-testid="link-linkedin"
                href="https://www.linkedin.com/in/salma-cristianes-roito-pakpahan-53065728a/"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <Linkedin size={15} />
                  LinkedIn
                </span>
                <ArrowDownRight size={15} />
              </a>

              <a
                className="contact-link"
                data-testid="link-github"
                href="https://github.com/pakpahansalma"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <Github size={15} />
                  GitHub
                </span>
                <ArrowDownRight size={15} />
              </a>

              <a
                className="contact-link"
                data-testid="link-cv"
                href="https://drive.google.com/drive/folders/1r6h_flUoEAeeAVBg1F8VYmJ9v34ig0a9?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <FileText size={15} />
                  CV / Resume
                </span>
                <ArrowDownRight size={15} />
              </a>
            </div>
          </div>

          <footer className="footer-line">
            <span>Salma Cristianes Roito Pakpahan / Data Analyst</span>

            <span>
              <BriefcaseBusiness size={12} />
            </span>

            <span>Open to opportunities & collaborations.</span>
          </footer>
        </div>
      </section>
    </main>
  );
}

function CertificationsPage() {
  return (
    <main className="certifications-page">
      <SiteHeader activeSection="" />

      <div className="report-shell">
        <Link className="case-back" href="/#certifications">
          <ArrowLeft size={15} />
          Back to certifications
        </Link>

        <div className="case-heading">
          <div>
            <span className="case-number">05 / Certifications</span>
            <h1>Certificates & Credentials</h1>
          </div>
        </div>

        <div className="certificate-gallery">
          {certificationImages.map((certificate) => (
            <figure key={certificate.src}>
              <img src={certificate.src} alt={certificate.alt} />
            </figure>
          ))}
        </div>
      </div>
    </main>
  );
}

function CaseStudyPage({ project }: { project: Project }) {
  return (
    <main className="case-study-page">
      <SiteHeader activeSection="" />
      <div className="report-shell">
        <Link
          className="case-back"
          data-testid="link-back-projects"
          href="/#work"
        >
          <ArrowLeft size={15} /> Back to projects
        </Link>
        <div className="case-heading">
          <div>
            <span className="case-number">{project.index} / Case study</span>
            <h1 data-testid={`text-case-title-${project.index}`}>
              {project.title}
            </h1>
          </div>
          <div className="case-meta">
            <div className="case-meta-item">
              <span className="mono-label">Category</span>
              <strong>{project.category}</strong>
            </div>
            <div className="case-meta-item">
              <span className="mono-label">Year</span>
              <strong>{project.year}</strong>
            </div>
            <div className="case-meta-item">
              <span className="mono-label">Role / context</span>
              <strong>{project.context}</strong>
            </div>
          </div>
        </div>
        <figure
          className="case-hero-image"
          data-testid={`figure-case-hero-${project.index}`}
        >
          <img alt={project.imageAlt} src={project.image} />
          <figcaption className="mono-label">
            Primary project visual / {project.category}
          </figcaption>
        </figure>
        <div className="case-layout">
          <aside className="case-sticky-label">
            Analytical report
            <br />
            {project.index} — 05
          </aside>
          <div className="case-content">
            <p
              className="case-intro"
              data-testid={`text-case-overview-${project.index}`}
            >
              {project.description}
            </p>
            <section className="case-section">
              <h2>01 / Overview</h2>
              <p>{project.objective}</p>
            </section>
            <section className="case-section">
              <h2>02 / Business problem</h2>
              <p>{project.businessQuestion}</p>
            </section>
            <section className="case-section">
              <h2>03 / Data context</h2>
              <p>{project.dataContext}</p>
            </section>
            <section className="case-section">
              <h2>04 / Analytical objective</h2>
              <p>{project.objective}</p>
            </section>
            <section className="case-section">
              <h2>05 / Data preparation</h2>
              <p>{project.process.join(" → ")}</p>
            </section>
            <section className="case-section">
              <h2>06 / Analysis / modeling</h2>
              <p>{project.analysis}</p>
            </section>
            <section className="case-section">
              <h2>07 / Key findings</h2>
              <ul className="finding-list">
                {project.findings.map((finding) => (
                  <li
                    data-testid={`finding-${project.index}-${finding.slice(0, 12)}`}
                    key={finding}
                  >
                    {finding}
                  </li>
                ))}
              </ul>
            </section>
            <section className="case-section">
              <h2>08 / Interpretation</h2>
              <p>{project.interpretation}</p>
            </section>
            <section className="case-section">
              <h2>09 / Analytical value</h2>
              <ul>
                {project.analyticalValue.map((value) => (
                  <li key={value}>{value}</li>
                ))}
              </ul>
            </section>
            <section className="case-section">
              <h2>10 / Next questions</h2>
              <ul>
                {project.furtherAnalysis.map((question) => (
                  <li key={question}>{question}</li>
                ))}
              </ul>
            </section>
            <section className="case-section">
              <h2>11 / Tools</h2>
              <p className="process-line">{project.tags.join("  /  ")}</p>
            </section>
            <section className="case-section">
              <h2>12 / Links & output</h2>
              <p>{project.output}</p>
            </section>
            {project.additionalImages?.length ? (
              <section className="case-section">
                <h2>Additional visuals</h2>
                <div className="case-visual-grid">
                  {project.additionalImages.map((visual) => (
                    <figure key={visual.src}>
                      <img alt={visual.alt} src={visual.src} />
                      <figcaption>{visual.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            ) : null}
            <div className="case-footer">
              <Link data-testid="link-case-footer-back" href="/#work">
                <ArrowLeft size={14} /> Back to all projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function App() {
  const [location] = useLocation();

  const caseProject = projects.find(
    (project) => location === `/projects/${project.slug}`,
  );

  if (location === "/certifications") {
    return <CertificationsPage />;
  }

  return caseProject ? <CaseStudyPage project={caseProject} /> : <HomePage />;
}

export default App;
