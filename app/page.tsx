import Image from "next/image";
import ProjectSlider from "./components/ProjectSlider";

// ─── Data ────────────────────────────────────────────────────────────────────

const experience = [
  {
    company: "MDARJ",
    role: "Full Stack Developer",
    period: "Feb 2025 – Present",
    location: "Alexandria, Egypt",
    type: "Full-time",
    points: [
      "Developing full-stack web applications using MongoDB, Express.js, React.js, and Node.js",
      "Building and optimizing RESTful APIs for seamless frontend-backend communication",
      "Implementing Redux Toolkit for state management and improving performance",
      "Handling authentication and authorization flows",
      "Managing Cloudinary for efficient image storage and retrieval",
      "Enhancing database performance with Mongoose and efficient query optimization",
      "Collaborating with designers and backend developers to deliver scalable solutions",
    ],
  },
  {
    company: "Priceless Health",
    role: "Full Stack Developer",
    period: "May 2025 – Present",
    location: "Dubai, UAE",
    type: "Part-time",
    points: [
      "Developing full-stack web applications using MongoDB, Express.js, React.js, and Node.js",
      "Building and optimizing RESTful APIs for seamless frontend-backend communication",
      "Implementing Redux Toolkit for state management and improving performance",
      "Handling authentication and authorization flows",
      "Managing Cloudinary for efficient image storage and retrieval",
      "Enhancing database performance with Mongoose and efficient query optimization",
      "Collaborating with designers and backend developers to deliver scalable solutions",
    ],
  },
];

const projects = [
  {
    name: "Pricelessmed Platform",
    description:
      "The biggest medical platform in UAE, offering comprehensive health services, appointment booking, and medical consultations at scale.",
    tech: ["Next.js", "Node.js", "MongoDB", "Express.js", "shadcn"],
    demo: "https://pricelessmed.com/en",
    highlight: true,
    images: [
      "/assets/priceless/priceless4.png",
      "/assets/priceless/priceless5.png",
      "/assets/priceless/pricelessmed6.png",
      "/assets/priceless/priceless7.png",
      "/assets/priceless/priceless10.png",
      "/assets/priceless/priceless3.png",
      "/assets/priceless/priceless2.png",
      "/assets/priceless/priceless1.png",
      "/assets/priceless/priceless12.png",
    ],
  },
  {
    name: "Prosas Platform",
    description:
      "A multi-tenant SaaS ERP for facility management and preventive & corrective maintenance — asset and equipment tracking, work requests and orders, spare parts, and a helpdesk, with per-company subdomains and a bilingual Arabic-first interface.",
    tech: [
      "Next.js",
      "TypeScript",
      "React Query",
      "Zustand",
      "next-intl",
      "Tailwind CSS",
    ],
    demo: "https://staging.prosas-erp.com/en",
    highlight: true,
    images: [
      "/assets/prosas/prosas_11.png",
      "/assets/prosas/prosas_1.png",
      "/assets/prosas/prosas_2.png",
      "/assets/prosas/prosas_3.png",
      "/assets/prosas/prosas_4.png",
      "/assets/prosas/prosas_5.png",
      "/assets/prosas/prosas_6.png",
      "/assets/prosas/prosas_7.png",
      "/assets/prosas/prosas_8.png",
      "/assets/prosas/prosas_9.png",
    ],
  },
  {
    name: "SQL Database engine",
    description:
      "A relational database engine written from scratch — no SQLite, no PostgreSQL, no parser library. A hand-written tokenizer, parser and AST feed an executor with three layers of validation, then a storage engine that writes rows straight to disk: indexed lookups instead of full scans, tombstone deletes, copy-on-write updates, and per-table write locks.",
    tech: ["TypeScript", "NestJS", "Node.js"],
    demo: "https://github.com/A7med3li011/db-engine",
    highlight: true,
    images: ["/assets/dbbb.jpg"],
  },
  {
    name: "Dars Platform",
    description:
      "An e-learning and educational content platform enabling students and instructors to connect, share knowledge, and manage courses.",
    tech: ["Next.js", "NextIntl", "shadcn"],
    demo: "https://www.dars-biu.com/ar/auth/login",
    highlight: true,
    images: [
      "/assets/dars/dars2.png",
      "/assets/dars/dars1.png",
      "/assets/dars/dars3.png",
      "/assets/dars/dars4.png",
      "/assets/dars/dars14.png",
      "/assets/dars/dars15.png",
      "/assets/dars/dars16.png",
      "/assets/dars/dars29.png",
    ],
  },

  {
    name: "Request",
    description:
      "A service request management system for handling and tracking operational requests with real-time status updates.",
    tech: ["React.js", "Node.js", "MongoDB"],
    demo: "https://request-sa.com/",
    highlight: true,
    images: [
      "/assets/request/request1.png",
      "/assets/request/request2.png",
      "/assets/request/request3.png",
      "/assets/request/request4.png",
      "/assets/request/request5.png",
      "/assets/request/request7.png",
      "/assets/request/request9.png",
    ],
  },
  {
    name: "Mathil Platform",
    description:
      "Developed a full-stack legal services website for a Saudi-based law firm, providing a professional digital presence and showcasing legal services in a modern, user-friendly interface.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "MongoDB", "Express.js"],

    highlight: false,
    images: [
      "/assets/mathil/mathil6.png",
      "/assets/mathil/mathil1.png",
      "/assets/mathil/mathil2.png",
      "/assets/mathil/mathil3.png",
      "/assets/mathil/mathil4.png",
      "/assets/mathil/mathil5.png",
      "/assets/mathil/mathil7.png",
      "/assets/mathil/mathil8.png",
      "/assets/mathil/mathil9.png",
      "/assets/mathil/mathil10.png",
      "/assets/mathil/mathil11.png",
      "/assets/mathil/mathil12.png",
      "/assets/mathil/mathil14.png",
    ],
    demo: "https://mathil.sa/",
  },
  {
    name: "Tansieq",
    description:
      "A digital coordination platform developed for the Saudi Ministry of Hajj to streamline pilgrim registration and logistics.",
    tech: ["React.js", "Tailwind CSS"],
    demo: "https://sjctanseiq.com/",
    highlight: true,
    images: ["/assets/tasns/tans1.png", "/assets/tasns/tans2.png"],
  },
  {
    name: "Bond",
    description:
      "A Progressive Web App (PWA) for social networking with real-time features, media sharing, and seamless mobile experience.",
    tech: ["Next.js", "shadcn", "Node.js", "MongoDB", "PWA"],
    demo: "https://healthy.bond/auth/login",
    highlight: false,
    images: [
      "/assets/chat/chat1.png",
      "/assets/chat/chat2.png",
      "/assets/chat/chat3.png",
      "/assets/chat/chat4.png",
      "/assets/chat/chat5.png",
      "/assets/chat/chat6.png",
      "/assets/chat/chat7.png",
      "/assets/chat/chat8.png",
      "/assets/chat/chat9.png",
      "/assets/chat/chat10.png",
      "/assets/chat/chat11.png",
      "/assets/chat/chat12.png",
      "/assets/chat/chat13.png",
      "/assets/chat/chat14.png",
    ],
  },

  {
    name: "Patria",
    description:
      "A full-featured Enterprise Resource Planning (ERP) system for business management, inventory, and operational workflows.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "MongoDB", "Express.js"],
    demo: "#",
    highlight: false,
    images: [],
  },

  {
    name: "Tayba",
    description:
      "A modern web application platform with dynamic content management and responsive UI built for scalable audiences.",
    tech: ["Next.js", "Tailwind CSS", "NextInt"],
    demo: "https://waqfsq.com/ar",
    highlight: false,
    images: [
      "/assets/tayba/tayba1.png",
      "/assets/tayba/tayba2.png",
      "/assets/tayba/tayba3.png",
    ],
  },
  {
    name: "AE Platform",
    description:
      "A fully-featured e-commerce platform built as a clone of American Eagle, with product catalog, cart, and checkout flows.",
    tech: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    demo: "https://ae-frontend-two.vercel.app/login",
    highlight: false,
    images: ["/assets/AE/AE.png", "/assets/AE/AE2.png"],
  },
];

const skillGroups = [
  {
    label: "Frontend",
    color: "blue",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "ES6",
      "Bootstrap",
      "Tailwind CSS",
      "Shadcn",
      "React.js",
      "Next.js",
    ],
  },
  {
    label: "State Management",
    color: "purple",
    skills: ["redux toolkit", "Zustand", "Context API"],
  },
  {
    label: "Backend",
    color: "emerald",
    skills: [
      "Node.js",
      "Express.js",
      "Nest.js",
      "MongoDB",
      "Mongoose",
      "RESTful API",
      "clean architecture",
      "repository pattern",
    ],
  },
  {
    label: "Tools & DevOps",
    color: "amber",
    skills: ["Git", "GitHub", "Postman", "Swagger", "Cloudinary", "S3"],
  },
  {
    label: "Practices",
    color: "rose",
    skills: [
      "Clean Code",
      "Responsive Design",
      "Agile",
      "Team Leadership",
      "Communication",
    ],
  },
];

const colorMap: Record<string, { badge: string; label: string }> = {
  blue: {
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    label: "text-blue-400 border-blue-500/30 bg-blue-500/5",
  },
  purple: {
    badge: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    label: "text-purple-400 border-purple-500/30 bg-purple-500/5",
  },
  emerald: {
    badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    label: "text-emerald-400 border-emerald-500/30 bg-emerald-500/5",
  },
  amber: {
    badge: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    label: "text-amber-400 border-amber-500/30 bg-amber-500/5",
  },
  rose: {
    badge: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    label: "text-rose-400 border-rose-500/30 bg-rose-500/5",
  },
};

// ─── Components ──────────────────────────────────────────────────────────────

function SectionTitle({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-16 text-center">
      <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
      <div className="mt-4 mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600" />
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden"
      >
        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
          <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-600/5 rounded-full blur-3xl" />
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
              Hi, I&apos;m <span className="gradient-text">Ahmed Ali</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 font-medium mb-4">
              Full Stack Developer
            </p>

            <p className="text-gray-500 leading-relaxed mb-8 max-w-md">
              Computing & Data Science graduate from Alexandria University. I
              build scalable full-stack applications using the MERN stack, with
              a passion for clean code and great user experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl border border-gray-700 text-gray-300 hover:border-blue-500/50 hover:text-white font-semibold transition-all duration-300 hover:-translate-y-0.5"
              >
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex flex-col md:flex-row items-center gap-2">
              <a
                href="mailto:ahmedswe508@gmail.com"
                className="flex items-center gap-2 text-gray-500 hover:text-blue-400 transition-colors text-sm"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                ahmedswe508@gmail.com
              </a>
              <span className="w-1 h-1 rounded-full bg-gray-700" />
              <a
                href="tel:+201119929583"
                className="flex items-center gap-2 text-gray-500 hover:text-blue-400 transition-colors text-sm"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +20 111 992 9583
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 blur-2xl opacity-30 scale-110" />
              {/* Border ring */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 animate-pulse-glow">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#0f172a]">
                  <Image
                    src="/assets/Ahmed.jpg"
                    alt="Ahmed Ali – Full Stack Developer from Alexandria, Egypt"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl bg-[#0f172a] border border-gray-800 shadow-xl animate-float">
                <p className="text-xs text-gray-500">Experience</p>
                <p className="text-sm font-bold text-white">+1.5 Years</p>
              </div>
              <div
                className="absolute -top-4 -right-4 px-4 py-2 rounded-xl bg-[#0f172a] border border-gray-800 shadow-xl animate-float"
                style={{ animationDelay: "1s" }}
              >
                <p className="text-xs text-gray-500">Projects</p>
                <p className="text-sm font-bold text-white">9+ Built</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-gray-600 text-xs">
          <span>Scroll down</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-gray-600 to-transparent" />
        </div>
      </section>

      {/* ── About ────────────────────────────────────────── */}
      <section id="about" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <SectionTitle label="About Me" title="Who I Am" />

          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                I&apos;m a Full Stack Developer currently pursuing my degree in
                Computing and Data Science at Alexandria University (2021–2025).
                With a strong foundation in both frontend and backend
                development, I specialize in building end-to-end web
                applications using the MERN stack.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Through hands-on experience at real companies — MDARJ in
                Alexandria and Priceless Health in Dubai — I&apos;ve developed
                practical skills that directly align with industry needs. I
                thrive in collaborative, agile environments and take pride in
                writing clean, maintainable code.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                I&apos;m passionate about creating digital experiences that are
                both technically excellent and delightfully simple to use.
              </p>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "9+", label: "Projects Shipped" },
                { value: "2", label: "Companies" },
                { value: "MERN", label: "Core Stack" },
                { value: "2025", label: "Graduating" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="gradient-border rounded-2xl p-5 text-center hover:scale-105 transition-transform duration-300"
                >
                  <p className="text-2xl font-bold gradient-text mb-1">
                    {value}
                  </p>
                  <p className="text-gray-500 text-xs">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Experience ───────────────────────────────────── */}
      <section id="experience" className="py-24 px-6 bg-[#060d1a]">
        <div className="max-w-4xl mx-auto">
          <SectionTitle label="Work History" title="Experience" />

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent hidden md:block" />

            <div className="space-y-10">
              {experience.map((job, i) => (
                <div key={i} className="relative md:pl-16 group">
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border-2 border-[#060d1a] hidden md:block group-hover:scale-125 transition-transform duration-300" />

                  <div className="gradient-border rounded-2xl p-6 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {job.role}
                        </h3>
                        <p className="text-blue-400 font-semibold">
                          {job.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium border border-blue-500/20 mb-1">
                          {job.type}
                        </span>
                        <p className="text-gray-500 text-sm">{job.period}</p>
                        <p className="text-gray-600 text-xs">{job.location}</p>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {job.points.map((point, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-gray-400 text-sm"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects ─────────────────────────────────────── */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle label="Portfolio" title="Projects" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div
                key={i}
                className={`group relative rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden ${
                  project.highlight
                    ? "bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/30 hover:border-blue-400/50 hover:shadow-blue-500/10"
                    : "bg-[#0f172a]/50 border-gray-800/50 hover:border-gray-700 hover:shadow-black/20"
                }`}
              >
                {project.highlight && (
                  <span className="absolute top-3 right-3 z-10 px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-xs font-medium border border-blue-500/30">
                    Featured
                  </span>
                )}

                {/* Thumbnail */}
                <div className="relative w-full aspect-video overflow-hidden bg-[#0a0f1a]">
                  {project.images.length > 0 ? (
                    <Image
                      src={project.images[0]}
                      alt={`${project.name} preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-linear-to-br from-blue-500/10 to-purple-600/10 flex items-center justify-center">
                      <svg
                        className="w-12 h-12 text-gray-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </div>
                  )}
                  {/* Screenshot overlay button */}
                  {project.images.length > 0 && (
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <ProjectSlider
                        images={project.images}
                        projectName={project.name}
                        thumbnail
                      />
                    </div>
                  )}
                </div>

                <div className="px-6 py-5">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 rounded-md bg-gray-800/80 text-gray-400 text-xs border border-gray-700/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 flex-wrap">
                    {project.demo && project.demo !== "#" ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        Live Demo
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-sm text-gray-600 cursor-not-allowed">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                          />
                        </svg>
                        Private
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ───────────────────────────────────────── */}
      <section id="skills" className="py-24 px-6 bg-[#060d1a]">
        <div className="max-w-4xl mx-auto">
          <SectionTitle label="Tech Stack" title="Skills" />

          <div className="space-y-6">
            {skillGroups.map(({ label, color, skills }) => {
              const c = colorMap[color];
              return (
                <div key={label} className="gradient-border rounded-2xl p-6">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${c.label}`}
                  >
                    {label}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all duration-200 hover:scale-105 cursor-default ${c.badge}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Languages */}
          <div className="mt-8 gradient-border rounded-2xl p-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold border text-gray-400 border-gray-700 bg-gray-800/30 mb-4">
              Languages
            </span>
            <div className="grid grid-cols-2 gap-4">
              {[
                { lang: "Arabic", level: "Native", pct: 100 },
                { lang: "English", level: "Good", pct: 70 },
              ].map(({ lang, level, pct }) => (
                <div key={lang}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white font-medium">{lang}</span>
                    <span className="text-gray-500">{level}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-gray-800 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Education ────────────────────────────────────── */}
      <section id="education" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionTitle label="Academic" title="Education" />

          <div className="gradient-border rounded-2xl p-8 flex flex-col md:flex-row gap-6 items-center md:items-start hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-1">
                Faculty of Computing and Data Science
              </h3>
              <p className="text-blue-400 font-semibold mb-2">
                Alexandria University
              </p>
              <p className="text-gray-500 text-sm mb-4">Alexandria, Egypt</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium border border-blue-500/20">
                  2021 – 2025
                </span>
                <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-medium border border-purple-500/20">
                  Computing & Data Science
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────── */}
      <section id="contact" className="py-24 px-6 bg-[#060d1a]">
        <div className="max-w-4xl mx-auto">
          <SectionTitle label="Get in Touch" title="Contact" />

          <div className="grid md:grid-cols-2 gap-6">
            {/* Contact Cards */}
            {[
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                ),
                label: "Email",
                value: "ahmedswe508@gmail.com",
                href: "mailto:ahmedswe508@gmail.com",
                color: "blue",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                ),
                label: "Phone",
                value: "+20 111 992 9583",
                href: "tel:+201119929583",
                color: "purple",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ),
                label: "LinkedIn",
                value: "Ahmed Ali",
                href: "https://www.linkedin.com/in/ahmed-ali-a3a495342/",
                color: "blue",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                ),
                label: "GitHub",
                value: "Ahmed Ali",
                href: "https://github.com/A7med3li011",
                color: "purple",
              },
            ].map(({ icon, label, value, href, color }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="gradient-border rounded-2xl p-6 flex items-center gap-4 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 group"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                    color === "blue"
                      ? "bg-blue-500/10 text-blue-400"
                      : "bg-purple-500/10 text-purple-400"
                  }`}
                >
                  {icon}
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-0.5">{label}</p>
                  <p className="text-white font-medium">{value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="mt-12 rounded-2xl p-8 text-center bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-2">
              Let&apos;s build something great together
            </h3>
            <p className="text-gray-400 mb-6">
              Open to full-time and freelance opportunities.
            </p>
            <a
              href="mailto:ahmedswe508@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
            >
              Send an Email
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────── */}
      <footer className="py-8 px-6 border-t border-gray-800/50 text-center">
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Ahmed Ali. Built with Next.js &
          Tailwind CSS.
        </p>
      </footer>
    </main>
  );
}
