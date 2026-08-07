import Image from "next/image";
import type { ReactNode } from "react";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  DownloadSimpleIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react/dist/ssr";

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
      { label: "Visit website", href: "https://www.calculaderia.com.br/en" },
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
    proof: ["Real-time rooms", "Powered by WebSockets"],
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
      "A review site that helps people compare products without opening dozens of tabs. Behind it is a fully automated AI workflow for research, writing, and publishing.",
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
    role: "Full Stack Engineer",
    summary:
      "Started in the financial systems behind a global shipping platform, now building fulfillment services: pick, pack, print, and verify.",
    outcomes: [
      "Drove a critical workflow from 37 incidents to zero.",
      "Reduced invoice-save P99 latency by as much as 48.3%.",
      "Cut charge processing from 27.1s to 6.5s.",
      "Led the development of Click to Print.",
    ],
    stack: "Python · React · TypeScript · Go · PostgreSQL · Kafka · Kubernetes · Distributed systems",
  },
  {
    company: "Heal.me",
    period: "2024—2025",
    role: "Senior Software Engineer | Engineering Manager",
    summary:
      "I led a three-engineer squad improving how practitioners build their websites, take payments, and get found.",
    outcomes: [
      "Raised website-builder NPS from 36 to 79.",
      "Reduced builder churn from 60%+ to under 10%.",
      "Improved checkout conversion by 21% and average cart value by 11%.",
      "Brought search latency from 20s to under 3s.",
    ],
    stack: "React · Ruby on Rails · Stripe · SEO",
  },
  {
    company: "Sua Quadra",
    period: "2023—2024",
    role: "Full Stack Engineer",
    summary: "I worked on the marketplace growth initiatives, delivering strong results in SEO and organic traffic.",
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
      "Launched a new channel worth 15% of the company's annual revenue.",
      "Generated seven figures in new annual revenue.",
      "Reduced manual operations work by 66%.",
      "Cut bus-stop mapping delays by 50%.",
    ],
    stack: "Product strategy · Data · Growth · Team leadership",
  },
  {
    company: "2S Nutrition",
    period: "2019—2022",
    role: "Founder & Software Engineer",
    summary:
      "I built a direct-to-consumer nutrition company, including the product, software, growth, and day-to-day operations.",
    outcomes: [
      "Grew to 10K+ paying customers.",
      "Built subscriptions and LTV-focused retention systems.",
      "Improved revenue per session by 47% through funnel work.",
    ],
    stack: "Company building · E-commerce · Growth · Payments · Analytics",
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
      "Worked on several projects across frontend, infrastructure, databases, and integrations.",
    ],
    stack: "PHP · Node.js · React · Consulting",
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
    title: "Keep it simple",
    copy: "Good software should be easy for the next person to reason about, operate, and change.",
  },
  {
    number: "03",
    title: "Iterate quickly",
    copy: "Talk to users, read the data, and check production. Assumptions get better when they meet reality.",
  },
];

const metrics = [
  ["5K → 3M", "indexed pages"],
  ["10K+", "customers from zero"],
  ["+ $10M", "annual revenue"],
  ["37 → 0", "production incidents"],
];

const kickerClass = "m-0 text-[.68rem] font-[820] uppercase leading-[1.4] tracking-[.13em] text-red";
const sectionShellClass = "px-[clamp(24px,5vw,80px)] py-[clamp(82px,9vw,146px)] max-[520px]:px-5.5";
const displayHeadingClass = "m-0 font-display font-normal tracking-[-.065em]";
const projectLinkClass =
  "inline-flex items-center gap-2 border-b border-current pb-1 text-[.73rem] font-[820] uppercase tracking-[.07em] transition-colors hover:text-red focus-visible:text-red [&_svg]:size-3.75";

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

function ExternalLink({ href, children, className = projectLinkClass }: ExternalLinkProps) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
      <ArrowUpRightIcon aria-hidden="true" weight="bold" />
    </a>
  );
}

export default function HomePage() {
  return (
    <>
      <a
        className="fixed top-3 left-3 z-100 translate-y-[-160%] bg-ink px-3.5 py-2.5 text-paper-light focus:translate-y-0"
        href="#main-content">
        Skip to content
      </a>

      <header className="sticky top-0 z-20 flex min-h-17 items-center justify-between border-b border-line bg-[rgb(248_244_237/94%)] px-[clamp(24px,3.2vw,52px)] backdrop-blur-[18px] max-[820px]:min-h-15.5 max-[520px]:px-4.5">
        <a
          className="font-display text-[1.05rem] font-normal tracking-[-.045em] max-[520px]:text-[.98rem]"
          href="#top"
          aria-label="Saulo Faria, home">
          Saulo Faria
          <span className="text-red" aria-hidden="true">
            .
          </span>
        </a>

        <nav
          className="flex items-center gap-[clamp(20px,2.5vw,42px)] max-[820px]:gap-4.5"
          aria-label="Main navigation">
          {[
            ["Selected work", "#work"],
            ["Experience", "#experience"],
            ["About", "#about"],
          ].map(([label, href]) => (
            <a
              className="inline-flex items-center gap-1.75 text-[.72rem] font-[760] uppercase tracking-[.09em] transition-colors hover:text-red focus-visible:text-red max-[820px]:hidden"
              href={href}
              key={href}>
              {label}
            </a>
          ))}
          <a
            className="inline-flex items-center gap-1.75 border-l border-line pl-[clamp(18px,2vw,32px)] text-[.72rem] font-[760] uppercase tracking-[.09em] transition-colors hover:text-red focus-visible:text-red max-[820px]:border-l-0 max-[820px]:pl-0 [&_svg]:size-3.75"
            href="/files/Saulo_Faria_Senior_Software_Engineer_Resume.pdf"
            target="_blank"
            rel="noreferrer">
            Résumé
            <DownloadSimpleIcon aria-hidden="true" weight="bold" />
          </a>
        </nav>
      </header>

      <main id="main-content">
        <section
          className="grid min-h-165 grid-cols-[minmax(0,.79fr)_minmax(0,1.01fr)] grid-rows-[minmax(0,1fr)_126px] border-b border-line max-[1100px]:grid-cols-[minmax(0,.76fr)_minmax(0,1.04fr)] max-[820px]:min-h-0 max-[820px]:grid-cols-1 max-[820px]:grid-rows-[auto]"
          id="top"
          aria-labelledby="hero-title">
          <figure className="relative row-span-2 min-h-165 min-w-0 overflow-hidden bg-paper-light max-[820px]:order-2 max-[820px]:row-auto max-[820px]:min-h-140 max-[820px]:border-t max-[820px]:border-line max-[520px]:min-h-107.5">
            <Image
              className="origin-top-left animate-portrait-enter object-cover object-left motion-reduce:animate-none max-[820px]:animate-none max-[820px]:object-[20%_center] max-[820px]:transform-[translateX(-5%)_scale(1.15)]"
              src="/assets/saulo-hero-ivory.png"
              alt="Black-and-white portrait of Saulo Faria"
              fill
              sizes="(max-width: 820px) 100vw, 44vw"
              priority
            />
          </figure>

          <div className="flex min-w-0 flex-col items-start justify-center px-[clamp(36px,4.25vw,70px)] pt-[clamp(38px,4vw,62px)] pb-[clamp(28px,3.2vw,48px)] max-[820px]:order-1 max-[820px]:min-h-152.5 max-[820px]:pt-17 max-[820px]:pb-16.5 max-[520px]:min-h-0 max-[520px]:px-5.5 max-[520px]:pt-14 max-[520px]:pb-15">
            <p className={kickerClass}>Engineer × Product builder × Founder</p>
            <h1
              className={`${displayHeadingClass} mt-6.25 max-w-230 animate-copy-enter text-[clamp(3.45rem,5.3vw,6.25rem)] leading-[.9] motion-reduce:animate-none max-[1100px]:text-[clamp(3.2rem,5.35vw,4.7rem)] max-[820px]:text-[clamp(3.25rem,11.3vw,5rem)] max-[520px]:mt-5.25 max-[520px]:text-[clamp(3rem,13vw,4.2rem)] max-[520px]:leading-[.91]`}
              id="hero-title">
              Engineering,
              <br />
              with product
              <br />
              judgment built in<span className="text-red">.</span>
            </h1>
            <p className="mt-8.5 mb-0 max-w-162.5 text-[clamp(1.08rem,1.35vw,1.34rem)] leading-normal max-[520px]:mt-7.25 max-[520px]:text-[1.03rem]">
              I&apos;ve spent 13+ years taking products from the first customer conversation to reliable software
              running in production.
            </p>
            <p className="mt-5.75 mb-0 border-t border-line pt-5.25 text-[.93rem] font-[780]">
              Full Stack Engineer <span className="font-[560] text-muted">at Shippo</span>
            </p>

            <div className="mt-8.5 flex flex-wrap gap-3 max-[520px]:w-full" aria-label="Primary actions">
              <a
                className="inline-flex min-h-12.5 items-center justify-center gap-3 border border-red bg-red px-5 text-[.78rem] font-[820] uppercase tracking-[.055em] text-paper-light transition-[color,background,transform] duration-160 hover:-translate-y-0.5 hover:border-ink hover:bg-ink focus-visible:-translate-y-0.5 focus-visible:border-ink focus-visible:bg-ink max-[520px]:w-full [&_svg]:size-4.5"
                href="#work">
                See the work
                <ArrowRightIcon aria-hidden="true" weight="bold" />
              </a>
              <a
                className="inline-flex min-h-12.5 items-center justify-center gap-3 border border-ink px-5 text-[.78rem] font-[820] uppercase tracking-[.055em] transition-[color,background,transform] duration-160 hover:-translate-y-0.5 hover:bg-ink hover:text-paper-light focus-visible:-translate-y-0.5 focus-visible:bg-ink focus-visible:text-paper-light max-[520px]:w-full [&_svg]:size-4.5"
                href="/files/Saulo_Faria_Senior_Software_Engineer_Resume.pdf"
                target="_blank"
                rel="noreferrer">
                Read my résumé
                <ArrowUpRightIcon aria-hidden="true" weight="bold" />
              </a>
            </div>
          </div>

          <section
            className="col-start-2 row-start-2 grid grid-cols-4 border-t border-line max-[820px]:order-3 max-[820px]:col-start-1 max-[820px]:row-auto max-[820px]:grid-cols-2"
            aria-label="Selected career outcomes">
            {metrics.map(([value, label], index) => (
              <div
                className={`flex min-h-31.5 flex-col justify-center border-r border-line px-[clamp(14px,1.55vw,26px)] py-5 max-[520px]:min-h-32 max-[520px]:px-5 ${index === 3 ? "border-r-0" : ""} ${index < 2 ? "max-[820px]:border-b" : ""} ${index === 1 ? "max-[820px]:border-r-0" : ""}`}
                key={label}>
                <strong className="whitespace-nowrap font-display text-[clamp(1.7rem,2.4vw,2.8rem)] font-normal leading-none tracking-[-.06em] text-red max-[520px]:text-[2rem]">
                  {value}
                </strong>
                <span className="mt-2 text-[.73rem] font-[730] uppercase tracking-[.09em] text-muted max-[520px]:text-[.63rem]">
                  {label}
                </span>
              </div>
            ))}
          </section>
        </section>

        <section
          className={`${sectionShellClass} grid grid-cols-[minmax(230px,.31fr)_minmax(0,.69fr)] gap-x-[clamp(34px,4vw,68px)] pt-[clamp(62px,6vw,92px)] max-[820px]:block`}
          id="work">
          <div className="grid grid-cols-1 content-start gap-7 max-[820px]:mb-16">
            <p className={kickerClass}>Selected work</p>
            <div>
              <h2 className={`${displayHeadingClass} text-[clamp(3rem,4.35vw,5.1rem)] leading-[.9]`}>
                Things I&apos;ve built.
              </h2>
              <p className="mt-6.25 mb-0 max-w-92.5 text-base leading-[1.55] text-muted">
                A few products I&apos;ve built for people to use for free. They range from financial tools and team
                collaboration to AI and computer vision.
              </p>
            </div>
          </div>

          <div className="col-start-2 grid grid-cols-2 gap-[clamp(22px,2.4vw,40px)] max-[820px]:grid-cols-1 max-[820px]:gap-18.5">
            {featuredProjects.map((project) => (
              <article className="border-t-2 border-ink pt-4.5" key={project.title}>
                <a
                  className="group block rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red"
                  href={project.links[0].href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title}`}>
                  <figure className="relative aspect-5/3 overflow-hidden rounded-lg border border-line bg-[#fdfbf7]">
                    <Image
                      className="object-contain object-center transition-transform duration-500 ease-out motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:scale-[1.025] motion-safe:group-focus-visible:-translate-y-1 motion-safe:group-focus-visible:scale-[1.025]"
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 820px) calc(100vw - 44px), 35vw"
                    />
                  </figure>
                </a>

                <div className="mt-4.5 flex items-center justify-between gap-5 text-[.67rem] font-[810] uppercase tracking-widest text-red max-[520px]:items-start">
                  <span>{project.number}</span>
                  <span className="text-right">{project.category}</span>
                </div>
                <h3 className="mt-6 mb-0 font-display text-[clamp(2.2rem,3.15vw,4rem)] font-normal leading-[.94] tracking-[-.055em] max-[820px]:text-[clamp(2.75rem,11vw,4.8rem)] max-[520px]:text-[2.8rem]">
                  {project.title}
                </h3>
                <p className="mt-5.75 mb-0 min-h-19.5 max-w-160 text-[.94rem] leading-[1.55] text-[#45423d] max-[1100px]:min-h-0">
                  {project.description}
                </p>
                <ul
                  className="mt-6 flex list-none flex-wrap gap-x-6 gap-y-2 border-t border-line pt-5"
                  aria-label="Project highlights">
                  {project.proof.map((item) => (
                    <li
                      className="text-[.76rem] font-[760] tracking-[.04em] before:mr-2 before:text-red before:content-['/']"
                      key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6.75 flex flex-wrap gap-x-6 gap-y-4">
                  {project.links.map((link) => (
                    <ExternalLink href={link.href} key={link.href}>
                      {link.label}
                    </ExternalLink>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="col-span-full mt-[clamp(88px,10vw,152px)] grid grid-cols-3 gap-[clamp(26px,3.4vw,54px)] max-[820px]:grid-cols-1 max-[820px]:gap-17.5">
            {moreProjects.map((project) => (
              <article className="border-t border-ink pt-3.5" key={project.title}>
                <a
                  className="group block rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red"
                  href={project.liveUrl ?? project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title}`}>
                  <figure className="relative aspect-5/3 overflow-hidden rounded-lg border border-line bg-[#fdfbf7]">
                    <Image
                      className="object-contain object-center transition-transform duration-500 ease-out motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:scale-[1.025] motion-safe:group-focus-visible:-translate-y-1 motion-safe:group-focus-visible:scale-[1.025]"
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 820px) calc(100vw - 44px), 31vw"
                    />
                  </figure>
                </a>
                <p className="mt-4.5 flex items-center justify-between gap-5 text-[.67rem] font-[810] uppercase tracking-widest text-red max-[520px]:items-start">
                  <span>{project.number}</span>
                  <span className="text-right">{project.category}</span>
                </p>
                <h3 className="mt-6 mb-0 font-display text-[clamp(2rem,3vw,3.5rem)] font-normal leading-[.94] tracking-[-.055em]">
                  {project.title}
                </h3>
                <p className="mt-4.5 mb-0 min-h-24 text-[.93rem] leading-[1.55] text-muted max-[1100px]:min-h-0">
                  {project.description}
                </p>
                <strong className="mt-5.5 block text-[.75rem] uppercase tracking-[.06em]">{project.proof}</strong>
                <div className="mt-6.75 flex flex-wrap gap-x-6 gap-y-4">
                  {project.liveUrl ? <ExternalLink href={project.liveUrl}>Visit</ExternalLink> : null}
                  {project.repoUrl ? <ExternalLink href={project.repoUrl}>Source</ExternalLink> : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-ink text-paper" id="experience">
          <div className={`${sectionShellClass} pt-[clamp(88px,9vw,140px)] pb-[clamp(90px,10vw,160px)]`}>
            <div className="mb-12.5 grid grid-cols-[minmax(150px,.28fr)_minmax(0,1fr)] items-start gap-[clamp(28px,5vw,80px)] max-[820px]:grid-cols-1">
              <p className={kickerClass}>Experience</p>
              <div>
                <h2 className={`${displayHeadingClass} max-w-250 text-[clamp(3rem,6.4vw,7rem)] leading-[.9]`}>
                  Where I&apos;ve made an impact.
                </h2>
                <p className="mt-6.25 mb-0 max-w-155 text-[clamp(1rem,1.35vw,1.25rem)] leading-[1.55] text-[#b9b3aa]">
                  I&apos;ve worked as an engineer, product manager, and founder. These are some of the results I&apos;m
                  proudest of.
                </p>
              </div>
            </div>

            <div className="border-b border-line-dark">
              {experience.map((item) => (
                <article
                  className="grid grid-cols-[minmax(210px,.34fr)_minmax(0,.66fr)] gap-[clamp(30px,7vw,120px)] border-t border-line-dark py-[clamp(36px,4vw,64px)] max-[820px]:grid-cols-1 max-[820px]:gap-8.5"
                  key={item.company}>
                  <div>
                    <p className="mt-0 mb-5.5 text-[.69rem] font-[750] uppercase tracking-widest text-[#9f9a92]">
                      {item.period}
                    </p>
                    <h3 className="m-0 font-display text-[clamp(2rem,3vw,3.5rem)] font-normal leading-[.95] tracking-[-.055em] max-[520px]:text-[2.7rem]">
                      {item.company}
                    </h3>
                    <p className="mt-3.5 mb-0 text-[.78rem] font-[760] text-red">{item.role}</p>
                  </div>
                  <div>
                    <p className="m-0 max-w-190 text-[clamp(1.1rem,1.45vw,1.4rem)] leading-[1.48] text-paper-light">
                      {item.summary}
                    </p>
                    <ul className="mt-7.5 grid list-none grid-cols-2 gap-x-7 gap-y-2.75 p-0 max-[1100px]:grid-cols-1 max-[520px]:mt-6">
                      {item.outcomes.map((outcome) => (
                        <li
                          className="relative pl-4.75 text-[.9rem] leading-normal text-[#beb8b0] before:absolute before:top-[.58em] before:left-0 before:size-1.5 before:bg-red before:content-['']"
                          key={outcome}>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-7.25 mb-0 border-t border-line-dark pt-4.5 text-[.68rem] font-[730] uppercase leading-[1.6] tracking-[.085em] text-[#8f8a83]">
                      {item.stack}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${sectionShellClass} pt-[clamp(90px,10vw,160px)] pb-[clamp(95px,11vw,170px)]`} id="about">
          <div className="grid grid-cols-[minmax(150px,.28fr)_minmax(0,1fr)] gap-[clamp(28px,5vw,80px)] max-[820px]:grid-cols-1">
            <p className={kickerClass}>A bit about me</p>
            <div className="max-w-250">
              <h2
                className={`${displayHeadingClass} max-w-225 text-[clamp(3rem,6.4vw,7rem)] leading-[.9] max-[520px]:text-[clamp(2.85rem,14vw,4.5rem)]`}>
                Engineer, product manager, founder.
              </h2>
              <p className="mt-9 mb-0 max-w-187.5 text-[clamp(1.2rem,1.7vw,1.65rem)] leading-[1.48] text-ink">
                I started out building software for clients, later founded an e-commerce company, spent two years as a
                product manager, and then returned to engineering. That mix helps me connect technical decisions with
                what users and businesses actually need.
              </p>
              <p className="mt-4 mb-0 max-w-187.5 text-base leading-[1.7] text-muted">
                I studied Mechanical Engineering at ITA and have spent most of my career in small, fast-moving teams,
                usually working close to the problem and the people affected by it.
              </p>
            </div>
          </div>

          <div className="mt-[clamp(74px,9vw,132px)] grid grid-cols-3 gap-[clamp(28px,4vw,66px)] max-[820px]:grid-cols-1 max-[820px]:gap-13.5">
            {principles.map((principle) => (
              <article className="border-t-2 border-ink pt-5" key={principle.title}>
                <span className="text-[.7rem] font-extrabold tracking-[.08em] text-red">{principle.number}</span>
                <h3 className="mt-11.25 mb-0 font-display text-[clamp(1.65rem,2.3vw,2.8rem)] font-normal leading-[.98] tracking-tighter max-[820px]:mt-7.5">
                  {principle.title}
                </h3>
                <p className="mt-4.75 mb-0 text-[.94rem] leading-[1.6] text-muted">{principle.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="grid grid-cols-[minmax(0,1fr)_minmax(260px,.34fr)] items-end gap-[clamp(50px,9vw,150px)] bg-red px-[clamp(24px,5vw,80px)] py-[clamp(80px,9vw,140px)] text-paper-light max-[1100px]:grid-cols-[1fr_minmax(230px,.34fr)] max-[820px]:grid-cols-1 max-[820px]:items-start max-[520px]:px-5.5"
          id="contact">
          <div>
            <p className={`m-0 text-[.68rem] font-[820] uppercase leading-[1.4] tracking-[.13em] text-black`}>
              Elsewhere
            </p>
            <h2
              className={`${displayHeadingClass} mt-6.75 max-w-242.5 text-[clamp(3rem,6.2vw,7rem)] leading-[.9] max-[520px]:text-[clamp(2.85rem,14vw,4.5rem)]`}>
              Find me online.
            </h2>
            <p className="mt-6.5 mb-0 max-w-130 text-[clamp(1rem,1.3vw,1.2rem)] leading-[1.55] text-[rgb(253_250_244/86%)]">
              LinkedIn has my full work history. GitHub has the code.
            </p>
          </div>
          <div
            className="flex flex-col border-t border-[rgb(250_247_241/45%)] max-[820px]:max-w-120"
            aria-label="Online profiles">
            <ExternalLink
              className="grid min-h-15.5 grid-cols-[24px_1fr_20px] items-center gap-3 border-b border-[rgb(250_247_241/45%)] text-[.78rem] font-[810] uppercase tracking-[.07em] transition-[color,padding] duration-160 hover:pl-2 hover:text-ink focus-visible:pl-2 focus-visible:text-ink [&_svg]:size-5"
              href="https://www.linkedin.com/in/saulodefaria/">
              <LinkedinLogoIcon aria-hidden="true" weight="fill" />
              LinkedIn
            </ExternalLink>
            <ExternalLink
              className="grid min-h-15.5 grid-cols-[24px_1fr_20px] items-center gap-3 border-b border-[rgb(250_247_241/45%)] text-[.78rem] font-[810] uppercase tracking-[.07em] transition-[color,padding] duration-160 hover:pl-2 hover:text-ink focus-visible:pl-2 focus-visible:text-ink [&_svg]:size-5"
              href="https://github.com/saulodefaria">
              <GithubLogoIcon aria-hidden="true" weight="fill" />
              GitHub
            </ExternalLink>
          </div>
        </section>
      </main>

      <footer className="grid min-h-21 grid-cols-[1fr_auto_1fr] items-center gap-6 bg-ink px-[clamp(24px,5vw,80px)] py-5 text-[.67rem] font-[680] uppercase tracking-[.07em] text-[#a8a29a] max-[820px]:grid-cols-[1fr_auto] max-[520px]:gap-4 max-[520px]:px-5">
        <p className="m-0">Saulo Faria © {new Date().getFullYear()}</p>
        <p className="m-0 text-center max-[820px]:hidden">Senior software engineer · Product builder · Founder</p>
        <a
          className="inline-flex items-center justify-end gap-2 hover:text-paper-light focus-visible:text-paper-light [&_svg]:size-3.5 [&_svg]:-rotate-90"
          href="#top">
          Back to top
          <ArrowRightIcon aria-hidden="true" weight="bold" />
        </a>
      </footer>
    </>
  );
}
