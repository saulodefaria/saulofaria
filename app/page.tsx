import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight, DownloadSimple, GithubLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";

const featuredProjects = [
  {
    number: "01",
    title: "Calculaderia",
    category: "Financial calculators",
    description:
      "A collection of free calculators for everyday financial questions—from compound interest to loans and taxes. I built it to make useful answers quick and easy to find.",
    proof: ["~300 monthly users", "50+ useful tools"],
    image: "/assets/projects/calculaderia.png",
    imageAlt: "Calculaderia home page showing a library of financial calculators",
    links: [
      { label: "Visit website", href: "https://www.calculaderia.com.br" },
      {
        label: "View source",
        href: "https://github.com/saulodefaria/calculaderia",
      },
    ],
  },
  {
    number: "02",
    title: "Planning Poker",
    category: "Team estimation tool",
    description:
      "A simple planning poker app for remote teams. Create a room, share the link, vote, and move on without turning estimation into another meeting about the tool.",
    proof: ["Real-time rooms", "Built for remote teams"],
    image: "/assets/projects/planning-poker.png",
    imageAlt: "Planning Poker room interface for agile estimation",
    links: [
      { label: "Try it", href: "https://poker.saulofaria.com" },
      {
        label: "View source",
        href: "https://github.com/saulodefaria/planning-poker",
      },
    ],
  },
];

const moreProjects = [
  {
    number: "03",
    title: "Guia Melhor Review",
    category: "Review and publishing platform",
    description:
      "A review site that helps people compare products without opening dozens of tabs. Behind it is an AI-assisted workflow for research, writing, and publishing.",
    proof: "~100 monthly users",
    image: "/assets/projects/guia-melhor-review.png",
    imageAlt: "Guia Melhor Review website showing product review guides and comparisons",
    liveUrl: "https://www.guiamelhorreview.com.br",
  },
  {
    number: "04",
    title: "Ball Catcher",
    category: "Computer-vision game",
    description:
      "A browser game controlled by hand movements through the webcam. I built it as an experiment in computer vision, interaction design, and fast feedback.",
    proof: "Next.js · TypeScript · Hand tracking",
    image: "/assets/projects/ball-catcher.png",
    imageAlt: "Ball Catcher game interface with falling balls and a camera-based hand controller",
    liveUrl: "https://catch.saulofaria.com",
    repoUrl: "https://github.com/saulodefaria/ball-catcher-next",
  },
  {
    number: "05",
    title: "PokéMCP",
    category: "Open-source AI tool",
    description:
      "An open-source MCP server that lets AI assistants query PokéAPI v2. It is built in Python with FastMCP and designed to be easy to run locally.",
    proof: "Python · FastMCP",
    image: "/assets/projects/pokemcp.png",
    imageAlt: "PokéMCP repository preview with Pokémon illustrations",
    repoUrl: "https://github.com/saulodefaria/pokemcp",
  },
];

const experience = [
  {
    company: "Shippo",
    period: "2025—Now",
    role: "Senior Software Engineer",
    summary:
      "I work on the financial systems behind a global shipping platform, with a focus on reliability and performance.",
    outcomes: [
      "Drove a critical workflow from 37 incidents to zero.",
      "Reduced invoice-save P99 latency by as much as 48.3%.",
      "Cut $5K+ charge processing from 27.1s to 6.5s.",
    ],
    stack: "Ruby · TypeScript · PostgreSQL · Distributed systems",
  },
  {
    company: "Heal.me",
    period: "2024—2025",
    role: "Senior Software Engineer",
    summary:
      "I led a three-engineer squad improving how practitioners build their websites, take payments, and get found.",
    outcomes: [
      "Raised website-builder NPS from 36 to 79.",
      "Reduced builder churn from 60%+ to under 10%.",
      "Improved checkout conversion by 21% and average cart value by 11%.",
      "Brought search latency from 20s to under 3s.",
    ],
    stack: "React · TypeScript · Node.js · Product experimentation",
  },
  {
    company: "Sua Quadra",
    period: "2023—2024",
    role: "Senior Software Engineer",
    summary: "I worked on the marketplace foundations behind search growth, analytics, and data quality.",
    outcomes: [
      "Scaled indexed pages from 5K to 3M.",
      "Increased organic traffic by 65%.",
      "Reached 90%+ tracking quality across the funnel.",
    ],
    stack: "Next.js · TypeScript · Go · GCP · Kubernetes",
  },
  {
    company: "Buser",
    period: "2021—2023",
    role: "Product Manager",
    summary: "As a product manager, I led seven engineers across growth, operations, and marketplace projects.",
    outcomes: [
      "Launched a channel worth 15% of annual revenue.",
      "Reduced manual operations work by 66%.",
      "Cut bus-stop mapping delays by 50%.",
    ],
    stack: "Product strategy · Data · Growth · Team leadership",
  },
  {
    company: "2S Nutrition",
    period: "2019—2022",
    role: "Founder",
    summary:
      "I built a direct-to-consumer nutrition company, including the product, software, growth, and day-to-day operations.",
    outcomes: [
      "Grew to 10K+ paying customers.",
      "Built subscriptions and LTV-focused retention systems.",
      "Improved revenue per session by 47% through funnel work.",
    ],
    stack: "Company building · E-commerce · Retention · Analytics",
  },
  {
    company: "Mr A Tech",
    period: "2013—2019",
    role: "Founder & Software Engineer",
    summary:
      "I started my career building custom software for clients and learned early to care about the business result, not just the code.",
    outcomes: [
      "Earned an NPS of 100 across client work.",
      "Used product experiments to improve ARPU by as much as 60%.",
    ],
    stack: "PHP · Node.js · React · Product consulting",
  },
];

const principles = [
  {
    number: "01",
    title: "Focus on the result",
    copy: "Before deciding what to build, I want to understand what should change for the user or the business.",
  },
  {
    number: "02",
    title: "Keep it understandable",
    copy: "Good software should be easy for the next person to reason about, operate, and change.",
  },
  {
    number: "03",
    title: "Check what happened",
    copy: "Talk to users, read the data, and check production. Assumptions get better when they meet reality.",
  },
];

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

function ExternalLink({ href, children, className = "" }: ExternalLinkProps) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
      <ArrowUpRight aria-hidden="true" weight="bold" />
    </a>
  );
}

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Saulo Faria, home">
          Saulo Faria<span aria-hidden="true">.</span>
        </a>

        <nav className="site-nav" aria-label="Main navigation">
          <a href="#work">Selected work</a>
          <a href="#experience">Experience</a>
          <a className="nav-about" href="#about">
            About
          </a>
          <a
            className="nav-resume"
            href="/files/Saulo_Faria_Senior_Software_Engineer_Resume.pdf"
            target="_blank"
            rel="noreferrer">
            Résumé
            <DownloadSimple aria-hidden="true" weight="bold" />
          </a>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <figure className="hero-media">
            <Image
              src="/assets/saulo-hero-ivory.png"
              alt="Black-and-white portrait of Saulo Faria"
              fill
              sizes="(max-width: 820px) 100vw, 44vw"
              priority
            />
          </figure>

          <div className="hero-copy">
            <p className="eyebrow">Engineer × Product builder × Founder</p>
            <h1 id="hero-title">
              Engineering,
              <br />
              with product
              <br />
              judgment built in<span className="red-period">.</span>
            </h1>
            <p className="hero-intro">
              I&apos;ve spent 13+ years taking products from the first customer conversation to reliable software
              running in production.
            </p>
            <p className="current-role">
              Senior Software Engineer <span>at Shippo</span>
            </p>

            <div className="hero-actions" aria-label="Primary actions">
              <a className="button button-primary" href="#work">
                See the work
                <ArrowRight aria-hidden="true" weight="bold" />
              </a>
              <a
                className="button button-secondary"
                href="/files/Saulo_Faria_Senior_Software_Engineer_Resume.pdf"
                target="_blank"
                rel="noreferrer">
                Read my résumé
                <ArrowUpRight aria-hidden="true" weight="bold" />
              </a>
            </div>
          </div>

          <section className="metrics" aria-label="Selected career outcomes">
            <div className="metric">
              <strong>5K → 3M</strong>
              <span>indexed pages</span>
            </div>
            <div className="metric">
              <strong>10K+</strong>
              <span>customers from zero</span>
            </div>
            <div className="metric">
              <strong>+ $10M</strong>
              <span>annual revenue</span>
            </div>
            <div className="metric">
              <strong>37 → 0</strong>
              <span>production incidents</span>
            </div>
          </section>
        </section>

        <section className="work-section section-shell" id="work">
          <div className="section-heading">
            <p className="section-kicker">Selected work</p>
            <div>
              <h2>Things I&apos;ve built.</h2>
              <p>
                A few products I&apos;ve built for people to use—not just demos. They range from financial tools and
                team collaboration to AI and computer vision.
              </p>
            </div>
          </div>

          <div className="featured-projects">
            {featuredProjects.map((project) => (
              <article className="project-card" key={project.title}>
                <figure className="project-image">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 820px) calc(100vw - 44px), 35vw"
                  />
                </figure>

                <div className="project-label">
                  <span>{project.number}</span>
                  <span>{project.category}</span>
                </div>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="project-proof" aria-label="Project highlights">
                  {project.proof.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="project-links">
                  {project.links.map((link) => (
                    <ExternalLink href={link.href} key={link.href}>
                      {link.label}
                    </ExternalLink>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="more-projects">
            {moreProjects.map((project) => (
              <article className="small-project" key={project.title}>
                <figure className="small-project-image">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 820px) calc(100vw - 44px), 31vw"
                  />
                </figure>
                <p className="project-label">
                  <span>{project.number}</span>
                  <span>{project.category}</span>
                </p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <strong>{project.proof}</strong>
                <div className="project-links">
                  {project.liveUrl ? <ExternalLink href={project.liveUrl}>Visit</ExternalLink> : null}
                  {project.repoUrl ? <ExternalLink href={project.repoUrl}>Source</ExternalLink> : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="experience-section" id="experience">
          <div className="section-shell experience-inner">
            <div className="section-heading section-heading-dark">
              <p className="section-kicker">Experience</p>
              <div>
                <h2>Where I&apos;ve made an impact.</h2>
                <p>
                  I&apos;ve worked as an engineer, product manager, and founder. These are some of the results I&apos;m
                  proudest of.
                </p>
              </div>
            </div>

            <div className="experience-list">
              {experience.map((item) => (
                <article className="experience-item" key={item.company}>
                  <div className="experience-company">
                    <p>{item.period}</p>
                    <h3>{item.company}</h3>
                    <p className="experience-role">{item.role}</p>
                  </div>
                  <div className="experience-body">
                    <p className="experience-summary">{item.summary}</p>
                    <ul>
                      {item.outcomes.map((outcome) => (
                        <li key={outcome}>{outcome}</li>
                      ))}
                    </ul>
                    <p className="experience-stack">{item.stack}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section section-shell" id="about">
          <div className="about-intro">
            <p className="section-kicker">A bit about me</p>
            <div>
              <h2>Engineer, product manager, founder.</h2>
              <p className="about-lede">
                I started out building software for clients, later founded an e-commerce company, spent two years as a
                product manager, and then returned to engineering. That mix helps me connect technical decisions with
                what users and businesses actually need.
              </p>
              <p>
                I studied Mechanical Engineering at ITA and have spent most of my career in small, fast-moving teams,
                usually working close to the problem and the people affected by it.
              </p>
            </div>
          </div>

          <div className="principles">
            {principles.map((principle) => (
              <article key={principle.title}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-copy">
            <p className="section-kicker">Elsewhere</p>
            <h2>Find me online.</h2>
            <p className="contact-description">LinkedIn has my full work history. GitHub has the code.</p>
          </div>
          <div className="contact-links" aria-label="Online profiles">
            <ExternalLink href="https://www.linkedin.com/in/saulodefaria/">
              <LinkedinLogo aria-hidden="true" weight="fill" />
              LinkedIn
            </ExternalLink>
            <ExternalLink href="https://github.com/saulodefaria">
              <GithubLogo aria-hidden="true" weight="fill" />
              GitHub
            </ExternalLink>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>Saulo Faria © {new Date().getFullYear()}</p>
        <p>Senior software engineer · Product builder · Founder</p>
        <a href="#top">
          Back to top
          <ArrowRight aria-hidden="true" weight="bold" />
        </a>
      </footer>
    </>
  );
}
