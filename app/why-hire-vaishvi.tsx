"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Code2,
  Database,
  Brain,
  Palette,
  BarChart3,
  Rocket,
  GraduationCap,
  Users,
  Zap,
  Github,
  Linkedin,
  Mail,
  TrendingUp,
  Layers,
  Cpu,
  CheckCircle,
  Building2,
  Globe,
  Terminal,
  Lightbulb,
  Star,
} from "lucide-react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  ChartConfig,
  ChartContainer,
} from "@/components/ui/chart";

export default function WhyHireVaishvi() {
  const [activeTab, setActiveTab] = useState("overview");

  const radarData = [
    { subject: "Full-Stack Eng", value: 88 },
    { subject: "Data Science", value: 85 },
    { subject: "ML / AI", value: 80 },
    { subject: "Product Design", value: 82 },
    { subject: "Strategy", value: 78 },
    { subject: "Research", value: 85 },
  ];

  const impactData = [
    { name: "Latency Cut", value: 30, fill: "#6366f1" },
    { name: "ETL Speed", value: 30, fill: "#8b5cf6" },
    { name: "Load Time", value: 45, fill: "#f43f5e" },
    { name: "Mkt Expansion", value: 50, fill: "#f59e0b" },
    { name: "Viz Speedup", value: 40, fill: "#06b6d4" },
  ];

  const radarConfig: ChartConfig = {
    value: { label: "Proficiency", color: "var(--chart-1)" },
  };
  const barConfig: ChartConfig = {
    value: { label: "Improvement %", color: "var(--chart-1)" },
  };

  const superpowers = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Full-Stack Engineering",
      desc: "Ships production APIs, data pipelines & UI in TypeScript, React, Java & Spring Boot",
      iconBg: "bg-indigo-100",
      iconText: "text-indigo-600",
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "ML & Data Science",
      desc: "Builds ML models from first principles: neural nets, ETL pipelines, 24-variable predictive models",
      iconBg: "bg-violet-100",
      iconText: "text-violet-600",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Product Design",
      desc: "Designs end-to-end in Figma & code — iOS HIG, design systems, Framer Motion animations",
      iconBg: "bg-rose-100",
      iconText: "text-rose-600",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Strategy & Analytics",
      desc: "Ran market entry analysis influencing multimillion-dollar Board decisions at a Fortune 500",
      iconBg: "bg-amber-100",
      iconText: "text-amber-600",
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "AI & LLM Systems",
      desc: "Architected agentic pipelines with MCP servers, prompt engineering & sub-2s LLM inference",
      iconBg: "bg-emerald-100",
      iconText: "text-emerald-600",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Communication & Research",
      desc: "20+ stakeholder interviews, 2 executive White Papers, supported 120+ students per week",
      iconBg: "bg-sky-100",
      iconText: "text-sky-600",
    },
  ];

  const experience = [
    {
      role: "Commercial Strategies Analyst Intern",
      company: "Fluor Corporation",
      period: "May - Aug 2025",
      accentColor: "#f59e0b",
      dotBg: "bg-amber-400",
      badgeBg: "bg-amber-100",
      badgeText: "text-amber-700",
      type: "Strategy",
      highlights: [
        "Supported 50% international supply chain expansion into Romania via data mining",
        "Conducted 20+ stakeholder interviews and financial modelling for market entry analysis",
        "Authored 2 White Papers influencing multimillion-dollar Board investment decisions",
      ],
    },
    {
      role: "Software Engineering Intern",
      company: "Fluor Corporation",
      period: "May - Aug 2024",
      accentColor: "#6366f1",
      dotBg: "bg-indigo-400",
      badgeBg: "bg-indigo-100",
      badgeText: "text-indigo-700",
      type: "Engineering",
      highlights: [
        "Sole engineer on 5-person team rebuilding Market Dynamics & Spend Analytics platform",
        "Reduced reporting latency by 30%; ETL performance by 30% via redesigned workflows",
        "Supplier Dashboard refactor: 45% faster load times across 3 customer-facing modules",
      ],
    },
    {
      role: "Undergraduate Research Assistant",
      company: "Dept. of TSM, Stony Brook University",
      period: "Jan - May 2024",
      accentColor: "#8b5cf6",
      dotBg: "bg-violet-400",
      badgeBg: "bg-violet-100",
      badgeText: "text-violet-700",
      type: "Research",
      highlights: [
        "Built APIs for NIH biomedical repositories under Prof. Richard Moffitt",
        "Real-time data viz platform with 40% load reduction & sub-1s predictions",
        "Applied synthetic data generation via Observable maintaining statistical validity",
      ],
    },
    {
      role: "Undergraduate Teaching Assistant",
      company: "Dept. of Applied Math & Stats, SBU",
      period: "Dec 2023 - Jan 2024",
      accentColor: "#f43f5e",
      dotBg: "bg-rose-400",
      badgeBg: "bg-rose-100",
      badgeText: "text-rose-700",
      type: "Teaching",
      highlights: [
        "Supported 120+ calculus students per week across scheduled office hours",
        "Translated rigorous analysis into accessible explanations for diverse audiences",
      ],
    },
  ];

  const projects = [
    {
      title: "AI-Agent Job Fit Generator",
      period: "Nov 2025",
      gradient: "linear-gradient(135deg, #10b981, #0d9488)",
      badgeBg: "bg-emerald-100",
      badgeText: "text-emerald-700",
      borderColor: "border-emerald-200",
      tags: ["Dust MCP", "LLM Pipeline", "Agentic AI", "TypeScript"],
      desc: "End-to-end agentic pipeline: ingests LinkedIn data, applies LLM reasoning to assess candidate-role fit, generates personalized dynamic web frames.",
      metric: "< 2s",
      metricLabel: "End-to-end latency",
    },
    {
      title: "Neural Network from First Principles",
      period: "Apr - May 2025",
      gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
      badgeBg: "bg-violet-100",
      badgeText: "text-violet-700",
      borderColor: "border-violet-200",
      tags: ["NumPy", "Python", "Backpropagation", "ML Theory"],
      desc: "Fully vectorized neural net from scratch: feed-forward, backprop via chain rule, gradient descent - pure math, no ML frameworks.",
      metric: "0 libs",
      metricLabel: "Built from scratch",
    },
    {
      title: "Data Pipeline Analytics Platform",
      period: "May - Dec 2024",
      gradient: "linear-gradient(135deg, #6366f1, #4f46e5)",
      badgeBg: "bg-indigo-100",
      badgeText: "text-indigo-700",
      borderColor: "border-indigo-200",
      tags: ["R", "Python", "Statistical Modeling", "ETL"],
      desc: "Predictive model across 24 variables for gene-environment interactions: hypothesis testing, feature selection, cross-validation.",
      metric: "24",
      metricLabel: "Variables modeled",
    },
    {
      title: "Portfolio Website",
      period: "Aug 2025",
      gradient: "linear-gradient(135deg, #f43f5e, #e11d48)",
      badgeBg: "bg-rose-100",
      badgeText: "text-rose-700",
      borderColor: "border-rose-200",
      tags: ["React", "Framer Motion", "TypeScript", "CSS"],
      desc: "Designed and shipped from wireframe to production - deliberate motion design, typographic hierarchy, accessible interaction patterns.",
      metric: "0->1",
      metricLabel: "Prototype to production",
    },
    {
      title: "Real-Time Data Visualization Platform",
      period: "Jan - May 2024",
      gradient: "linear-gradient(135deg, #0ea5e9, #0284c7)",
      badgeBg: "bg-sky-100",
      badgeText: "text-sky-700",
      borderColor: "border-sky-200",
      tags: ["D3.js", "Observable", "JavaScript", "Research"],
      desc: "Transformed dense NIH biomedical data into real-time visual interfaces - 40% load reduction, live predictions in under 1s.",
      metric: "40%",
      metricLabel: "Faster load time",
    },
    {
      title: "WineWright - Mobile App Design",
      period: "2025",
      gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
      badgeBg: "bg-amber-100",
      badgeText: "text-amber-700",
      borderColor: "border-amber-200",
      tags: ["Figma", "iOS HIG", "UX Research", "Design Systems"],
      desc: "End-to-end mobile app per Apple HIG: custom iconography, cohesive design system, progressive disclosure for complex knowledge domain.",
      metric: "iOS",
      metricLabel: "Native-first design",
    },
  ];

  const skillGroups = [
    {
      category: "Languages",
      icon: <Terminal className="h-4 w-4" />,
      colorText: "text-indigo-600",
      colorBg: "bg-indigo-50",
      colorBorder: "border-indigo-200",
      tagBg: "bg-indigo-100",
      tagText: "text-indigo-700",
      items: ["Python", "TypeScript", "JavaScript", "Java", "SQL", "R", "Rust", "HTML/CSS"],
    },
    {
      category: "Frameworks & Libraries",
      icon: <Layers className="h-4 w-4" />,
      colorText: "text-violet-600",
      colorBg: "bg-violet-50",
      colorBorder: "border-violet-200",
      tagBg: "bg-violet-100",
      tagText: "text-violet-700",
      items: [
        "React",
        "Spring Boot",
        "Next.js",
        "Framer Motion",
        "D3.js",
        "NumPy",
        "pandas",
        "scikit-learn",
        "Keras",
        "TensorFlow",
        "RESTful APIs",
      ],
    },
    {
      category: "AI & Machine Learning",
      icon: <Brain className="h-4 w-4" />,
      colorText: "text-emerald-600",
      colorBg: "bg-emerald-50",
      colorBorder: "border-emerald-200",
      tagBg: "bg-emerald-100",
      tagText: "text-emerald-700",
      items: [
        "LLM Pipelines",
        "Agentic Architecture",
        "Prompt Engineering",
        "MCP Servers",
        "Neural Networks",
        "Statistical Modeling",
        "A/B Experimentation",
        "ETL Pipelines",
      ],
    },
    {
      category: "Product Design",
      icon: <Palette className="h-4 w-4" />,
      colorText: "text-rose-600",
      colorBg: "bg-rose-50",
      colorBorder: "border-rose-200",
      tagBg: "bg-rose-100",
      tagText: "text-rose-700",
      items: [
        "Figma",
        "iOS HIG",
        "Design Systems",
        "Motion Design",
        "UX Research",
        "Information Architecture",
        "Prototyping",
        "Adobe Suite",
      ],
    },
    {
      category: "Data & Cloud",
      icon: <Database className="h-4 w-4" />,
      colorText: "text-sky-600",
      colorBg: "bg-sky-50",
      colorBorder: "border-sky-200",
      tagBg: "bg-sky-100",
      tagText: "text-sky-700",
      items: [
        "AWS",
        "DynamoDB",
        "Cognito",
        "Git",
        "Observable",
        "Data Mining",
        "Hypothesis Testing",
        "Synthetic Data Generation",
      ],
    },
    {
      category: "Communication & Strategy",
      icon: <Users className="h-4 w-4" />,
      colorText: "text-amber-600",
      colorBg: "bg-amber-50",
      colorBorder: "border-amber-200",
      tagBg: "bg-amber-100",
      tagText: "text-amber-700",
      items: [
        "Executive Presentations",
        "Stakeholder Interviews",
        "Technical Writing",
        "White Papers",
        "Cross-functional Teams",
        "Market Analysis",
      ],
    },
  ];

  const whyReasons = [
    {
      icon: <Zap className="h-5 w-5 text-indigo-600" />,
      iconBg: "bg-indigo-100",
      title: "Rare T-shaped generalist",
      desc: "Codes production systems, trains ML models, designs in Figma, and presents to C-suites - all with proven, measurable results.",
    },
    {
      icon: <Building2 className="h-5 w-5 text-amber-600" />,
      iconBg: "bg-amber-100",
      title: "Fortune 500 proven",
      desc: "Two internships at Fluor Corporation - real production software, real users, and quantified business impact, not just class projects.",
    },
    {
      icon: <TrendingUp className="h-5 w-5 text-emerald-600" />,
      iconBg: "bg-emerald-100",
      title: "Bias toward impact",
      desc: "Every role is tied to numbers: 30% latency reduction, 45% faster load times, 50% expansion support, 40% visualization speedup.",
    },
    {
      icon: <Lightbulb className="h-5 w-5 text-violet-600" />,
      iconBg: "bg-violet-100",
      title: "Builds from first principles",
      desc: "Implements neural networks from scratch, architects LLM pipelines without black boxes, derives approaches rigorously from math.",
    },
    {
      icon: <Globe className="h-5 w-5 text-rose-600" />,
      iconBg: "bg-rose-100",
      title: "Bridges every world",
      desc: "Equally fluent in code, data, design, and business narrative. Translates seamlessly between engineering teams and executive stakeholders.",
    },
    {
      icon: <Cpu className="h-5 w-5 text-sky-600" />,
      iconBg: "bg-sky-100",
      title: "AI-native builder",
      desc: "Doesn't just use AI tools - builds agentic pipelines, architects MCP servers, and engineers LLM reasoning systems end-to-end.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #6366f1 0%, #8b5cf6 35%, #ec4899 68%, #f59e0b 100%)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-14 text-center text-white">
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium"
            style={{ background: "rgba(255,255,255,0.18)", backdropFilter: "blur(8px)" }}
          >
            <Star className="h-4 w-4 fill-current" />
            Available for Full-Time · New York, NY · Dec 2025 Graduate
          </div>
          <h1 className="mb-3 text-5xl font-bold tracking-tight">Vaishvi Jariwala</h1>
          <p className="mb-4 text-2xl font-semibold" style={{ color: "rgba(255,255,255,0.92)" }}>
            Engineering Generalist
          </p>
          <p
            className="mx-auto mb-8 max-w-xl text-base leading-relaxed"
            style={{ color: "rgba(255,255,255,0.82)" }}
          >
            Full-stack engineer x Data scientist x Product designer x Strategist.
            <br />I build systems, stories, and experiences that make complex things effortless.
          </p>
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {[
              "TypeScript · React · Java",
              "Python · ML · LLMs",
              "Figma · iOS Design",
              "Fortune 500 × 2",
              "Dean's List",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full px-3 py-1 text-sm font-medium"
                style={{ background: "rgba(255,255,255,0.2)" }}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://www.linkedin.com/in/vaishvi-jariwala/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-indigo-600 transition-opacity hover:opacity-90"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href="https://vaishvijariwala.github.io/vaishvi-portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              style={{ backdropFilter: "blur(4px)" }}
            >
              <Globe className="h-4 w-4" /> Portfolio
            </a>
            <a
              href="https://github.com/vaishvijariwala"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              style={{ backdropFilter: "blur(4px)" }}
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="mailto:vaishvijariwala03@gmail.com"
              className="flex items-center gap-2 rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              style={{ backdropFilter: "blur(4px)" }}
            >
              <Mail className="h-4 w-4" /> Email
            </a>
          </div>
        </div>
      </div>

      <div className="border-b bg-white shadow-sm">
        <div className="mx-auto max-w-5xl px-6 py-5">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { value: "2×", label: "Fortune 500 Internships", color: "text-indigo-600" },
              { value: "30%", label: "Latency Reduction Shipped", color: "text-violet-600" },
              { value: "45%", label: "Faster Load Times Delivered", color: "text-rose-600" },
              { value: "4+", label: "Core Disciplines Mastered", color: "text-amber-600" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className={`text-3xl font-bold ${s.color}`}>{s.value}</div>
                <div className="mt-1 text-xs leading-snug text-gray-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-8 grid h-auto w-full grid-cols-2 gap-1 md:grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="whyme">Why Me</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div>
              <h2 className="mb-1 text-xl font-bold text-gray-900">Core Superpowers</h2>
              <p className="mb-4 text-sm text-gray-400">Six domains. One person. Zero compromise.</p>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {superpowers.map((sp) => (
                  <Card key={sp.title} className="border-0 shadow-sm transition-shadow hover:shadow-md">
                    <CardContent className="p-5">
                      <div
                        className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${sp.iconBg} ${sp.iconText}`}
                      >
                        {sp.icon}
                      </div>
                      <h3 className="mb-1 font-semibold text-gray-900">{sp.title}</h3>
                      <p className="text-sm leading-relaxed text-gray-500">{sp.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <GraduationCap className="h-5 w-5 text-indigo-600" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <div className="font-semibold text-gray-900">Stony Brook University</div>
                    <div className="mt-0.5 text-sm text-gray-500">
                      B.S. Technological Systems Management · CS Specialization
                    </div>
                    <div className="text-sm text-gray-500">
                      Double Major: Applied Mathematics &amp; Statistics
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Badge className="border-0 bg-indigo-100 text-xs text-indigo-700">
                        Dean&apos;s List
                      </Badge>
                      <Badge className="border-0 bg-gray-100 text-xs text-gray-500">
                        Aug 2021 - Dec 2025
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">California Institute of the Arts</div>
                    <div className="mt-0.5 text-sm text-gray-500">
                      UI/UX Design Specialization (Online)
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Badge className="border-0 bg-rose-100 text-xs text-rose-700">
                        Nov 2025 - Present
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Skill Coverage Map</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer config={radarConfig} style={{ height: "280px" }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={radarData} margin={{ top: 16, right: 48, bottom: 16, left: 48 }}>
                      <PolarGrid stroke="#e5e7eb" />
                      <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12, fill: "#6b7280" }} />
                      <Radar
                        dataKey="value"
                        stroke="#8b5cf6"
                        fill="#8b5cf6"
                        fillOpacity={0.22}
                        strokeWidth={2.5}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="experience" className="space-y-6">
            <div>
              <h2 className="mb-1 text-xl font-bold text-gray-900">Professional Journey</h2>
              <p className="mb-6 text-sm text-gray-400">
                Two Fortune 500 internships. Real production impact. Diverse domain exposure.
              </p>
            </div>
            <div className="relative">
              <div
                className="absolute bottom-0 left-5 top-0 w-0.5"
                style={{ background: "linear-gradient(to bottom, #a78bfa, #fb7185)" }}
              />
              <div className="space-y-6">
                {experience.map((exp, i) => (
                  <div key={i} className="relative pl-14">
                    <div className={`absolute left-3 top-3 h-4 w-4 rounded-full ${exp.dotBg} ring-2 ring-white shadow`} />
                    <Card className="overflow-hidden shadow-sm" style={{ border: "none" }}>
                      <div className="flex">
                        <div className="w-1 flex-shrink-0" style={{ background: exp.accentColor }} />
                        <CardContent className="flex-1 p-5">
                          <div className="mb-3 flex flex-wrap justify-between gap-2">
                            <div>
                              <div className="font-bold text-gray-900">{exp.role}</div>
                              <div className="mt-0.5 flex items-center gap-1 text-sm text-gray-400">
                                <Building2 className="h-3.5 w-3.5" /> {exp.company}
                              </div>
                            </div>
                            <div className="flex flex-wrap items-start gap-2">
                              <Badge className={`${exp.badgeBg} ${exp.badgeText} border-0 text-xs`}>
                                {exp.type}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                {exp.period}
                              </Badge>
                            </div>
                          </div>
                          <ul className="space-y-1.5">
                            {exp.highlights.map((h, j) => (
                              <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                                <CheckCircle className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-green-500" />
                                {h}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="projects" className="space-y-5">
            <div>
              <h2 className="mb-1 text-xl font-bold text-gray-900">Projects &amp; Work</h2>
              <p className="mb-4 text-sm text-gray-400">
                From agentic AI to neural networks to polished mobile apps - every layer of the stack.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {projects.map((proj) => (
                <Card
                  key={proj.title}
                  className={`border ${proj.borderColor} shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md`}
                >
                  <CardContent className="p-5">
                    <div className="mb-1 flex items-start justify-between">
                      <div
                        className="text-2xl font-extrabold"
                        style={{
                          background: proj.gradient,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {proj.metric}
                      </div>
                      <span className="text-xs text-gray-400">{proj.period}</span>
                    </div>
                    <div className="mb-2 text-xs text-gray-400">{proj.metricLabel}</div>
                    <h3 className="mb-1.5 font-bold text-gray-900">{proj.title}</h3>
                    <p className="mb-3 text-sm leading-relaxed text-gray-500">{proj.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`${proj.badgeBg} ${proj.badgeText} rounded-full px-2 py-0.5 text-xs font-medium`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="skills" className="space-y-6">
            <div>
              <h2 className="mb-1 text-xl font-bold text-gray-900">Technical Arsenal</h2>
              <p className="mb-4 text-sm text-gray-400">
                A stack that spans the full spectrum - from bytes to boardrooms.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {skillGroups.map((sg) => (
                <Card key={sg.category} className={`border ${sg.colorBorder} shadow-sm`}>
                  <CardHeader className="px-5 pb-2 pt-4">
                    <CardTitle className={`flex items-center gap-2 text-sm font-semibold ${sg.colorText}`}>
                      <span className={`${sg.colorBg} ${sg.colorText} rounded-lg p-1.5`}>{sg.icon}</span>
                      {sg.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-5 pb-4">
                    <div className="flex flex-wrap gap-1.5">
                      {sg.items.map((item) => (
                        <span
                          key={item}
                          className={`${sg.tagBg} ${sg.tagText} rounded-full px-2.5 py-1 text-xs font-medium`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Quantified Impact at a Glance</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer config={barConfig} style={{ height: "240px" }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={impactData} margin={{ top: 10, right: 20, bottom: 20, left: 20 }}>
                      <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#9ca3af" }} />
                      <YAxis unit="%" tick={{ fontSize: 11, fill: "#9ca3af" }} domain={[0, 60]} />
                      <Tooltip />
                      <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                        {impactData.map((entry, i) => (
                          <Cell key={i} fill={entry.fill} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="whyme" className="space-y-6">
            <div className="py-2 text-center">
              <h2 className="mb-2 text-2xl font-bold text-gray-900">Why Hire Vaishvi?</h2>
              <p className="mx-auto max-w-lg text-sm text-gray-500">
                Most new grads force you to choose - engineer, analyst, or designer. Vaishvi
                eliminates the tradeoff.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {whyReasons.map((r) => (
                <Card
                  key={r.title}
                  className="border-0 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <CardContent className="p-5">
                    <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${r.iconBg}`}>
                      {r.icon}
                    </div>
                    <h3 className="mb-2 font-bold text-gray-900">{r.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-500">{r.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div
              className="rounded-2xl p-8 text-center text-white"
              style={{ background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)" }}
            >
              <h3 className="mb-2 text-2xl font-bold">Let&apos;s build something together</h3>
              <p className="mx-auto mb-6 max-w-md text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>
                Whether it&apos;s a product, a data system, or a growth strategy - Vaishvi brings
                the full stack to make it real.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="mailto:vaishvijariwala03@gmail.com"
                  className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-indigo-600 transition-opacity hover:opacity-90"
                >
                  <Mail className="h-4 w-4" /> vaishvijariwala03@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/vaishvi-jariwala/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <Linkedin className="h-4 w-4" /> Connect on LinkedIn
                </a>
                <a
                  href="https://vaishvijariwala.github.io/vaishvi-portfolio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <Globe className="h-4 w-4" /> View Portfolio
                </a>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
