'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight } from 'lucide-react';
import CommentableContent from '../components/CommentableContent';

const themes = [
  {
    number: 1,
    title: "Ensuring Research is Industrially Relevant",
    summary: "Researchers currently lack access to the resources and knowledge needed to ensure their work is techno-economically competitive and applicable to real mining challenges.",
    details: [
      "Industrially-relevant ores and process fluids are prohibitively difficult to obtain, forcing most research to use less-relevant materials",
      "Researchers lack access to process models, techno-economic analyses (TEAs), and performance benchmarks necessary to estimate scalability",
      "Extrapolating lab-scale performance to industrial scale is challenging without biogeometallurgical models that incorporate biology"
    ]
  },
  {
    number: 2,
    title: "Engineering by Thinking Backwards from the Source Material",
    summary: "Most biomining approaches start with known microbial capabilities and look for applications. We need to flip this: start with the mining challenge or environment, then work backwards to identify relevant biology. This requires better frameworks for matching geological conditions with geobiological mechanisms—thinking from the environment to predict relevant biology, and from biological capabilities to identify targetable mineralogy.",
    details: [
      "An 'environment-first' perspective could reveal metabolisms or organisms not otherwise considered for biomining",
      "Frameworks that connect biological possibilities to corresponding mineralogy or geochemistry are needed",
      "Understanding evolutionary fitness and environmental context can guide which biology to deploy where"
    ]
  },
  {
    number: 3,
    title: "Engineering New Ways to Mine Better",
    summary: "By rethinking how we look at biomining systems, we can identify new ways to do things better. This theme captures opportunities to continue reimagining how we use biology in mining through new sensing capabilities, measurement and control systems, engineered biological tools, and transparency standards.",
    details: [
      "Transparency standards like traceable datasets and provenance markers would build confidence and enable comparison across projects",
      "Measurement and control systems including real-time monitoring and functional feedback can track whether existing technologies are effective in the field",
      "Engineering biology for improved mining through programmable metallophores and engineered binding proteins opens new possibilities for selective metal recovery"
    ]
  },
  {
    number: 4,
    title: "Lab Tools for Discovering and Engineering Biomining Biology",
    summary: "Biomining research is too slow. We need better lab tools to make discovery and development faster and more effective—from standardized materials and assays to high-throughput screening platforms.",
    details: [
      "Shared data standards and universal synthetic feedstocks would enable researchers to compare results across labs",
      "Tools for characterizing how microbes interact with minerals and metals in realistic conditions are underdeveloped",
      "High-throughput screening platforms are needed to rapidly test which organisms can tolerate harsh conditions and effectively recover metals"
    ]
  },
  {
    number: 5,
    title: "Biomining Has a Steep Learning Curve",
    summary: "Mining struggles to attract new talent, and biomining is even harder—it requires understanding both biology and mining. Biologists find it difficult to grasp mining's scale and processes, while mining professionals struggle to understand biological constraints. The \"mining\" label also doesn't naturally attract climate-focused talent, even though biomining is relevant to sustainability.",
    details: [
      "Education, media, and rebranding efforts targeting students and the public",
      "Creation of trusted knowledge hubs and accessible resources that bridge biology and mining domains",
      "Training programs that help geomicrobiologists understand industrial scale and mining professionals understand biological systems"
    ]
  },
  {
    number: 6,
    title: "Developing Incentives and Structures for Collaboration",
    summary: "Biomining would benefit from better collaboration between researchers, industry, and other stakeholders—but mining's historically secretive culture and weak connections to biology create barriers. Better collaboration would reduce miscommunications and knowledge gaps during onboarding and technology transfer.",
    details: [
      "Cross-sector consortia that bring together mining companies, biotech firms, and researchers to align goals and share knowledge",
      "Funding mechanisms that connect fundamental research with field pilots and industrial applications",
      "Data-sharing frameworks that balance openness with intellectual property protection to accelerate innovation"
    ]
  },
  {
    number: 7,
    title: "Bridging Research to Industry",
    summary: "Academics and mines have traditionally struggled to collaborate, and there is little awareness of the actual problems the mining industry faces. Bridging this gap would accelerate the path from discovery to deployment.",
    details: [
      "IP navigation and translational support for biomining innovators is lacking",
      "Shared precompetitive pipelines could cut time and cost to deployable technologies",
      "Sharing scale-up data would help lift all boats across the field"
    ]
  },
  {
    number: 8,
    title: "Integrating Biotech into Emerging Mining Innovations",
    summary: "Mining rarely innovates—but when it does, biotech should be at the table. Some groups are already rethinking mining practices, and we need to identify where biotech fits into these new designs. From repurposing old mine sites to zero-waste processing, these opportunities range from immediately achievable to ambitious long-term goals.",
    details: [
      "Shared scale-up infrastructure and tools, including repurposing former mines and contaminated sites as testing grounds and creating standardized pilot plants",
      "Centralized biotech facilities that process tailings and waste for small operators who can't afford their own infrastructure",
      "Shared resources like biobanks of microbes from legacy mine sites and Superfund sites for bioprospecting"
    ]
  }
];



export default function Research() {
  const [openThemes, setOpenThemes] = useState(new Set());

  function toggleTheme(i) {
    setOpenThemes(prev => { const next = new Set(prev); next.has(i) ? next.delete(i) : next.add(i); return next; });
  }

  return (
    <CommentableContent pageName="research">
      <div className="min-h-screen pt-4 pb-6 max-w-7xl mx-auto px-6 space-y-6">

        {/* Header */}
        <div className="flex gap-6 items-stretch">
          <div className="flex-1 bg-[#edede6] rounded-3xl px-6 sm:px-10 shadow-xl border border-white flex flex-col justify-center h-auto py-10 sm:h-80">
            <h1 className="text-2xl sm:text-4xl font-bold text-[#264563] mb-3 leading-tight">Frontier Challenges in Biomining</h1>
            <p className="text-base text-[#264563]">
              Themes and actionable problem areas shaping the future of biotechnology in mining
            </p>
          </div>
          <div className="hidden sm:block flex-1 rounded-3xl border-2 border-white shadow-xl" />
        </div>

        {/* Context & Origin */}
        <div className="bg-[#edede6] rounded-3xl shadow-2xl p-5 sm:p-8 md:p-12 border border-white">
          <h2 id="building-the-research-roadmap" className="text-2xl font-bold text-[#264563] mb-4">Building the Research Roadmap</h2>
          <div className="text-[#264563] space-y-3">
            <p>
              In November 2025, Homeworld Collective convened the <strong>Biomining Under Complex Conditions Workshop</strong>, bringing together researchers, mining professionals, biotechnologists, and other stakeholders to identify the most pressing challenges and opportunities in biomining. Through structured discussion and collaborative workshopping, participants generated a set of <strong>actionable problem statements</strong> spanning technical, institutional, and ecosystem challenges.
            </p>
            <p>
              The themes below capture key patterns from the workshop, helping accelerate innovation and align stakeholders around critical barriers in biomining.
            </p>
            <div className="bg-white rounded-lg border border-gray-200 p-4 mt-4 text-[#264563]">
              Detailed problem statements with full context, proposed approaches, and contributor attribution will be published soon. We thank the workshop participants whose input made this work possible.
            </div>
          </div>
        </div>


        {/* Themes */}
        <div className="bg-[#edede6] rounded-3xl shadow-2xl p-5 sm:p-8 md:p-12 border border-white">
          <h2 className="text-2xl font-bold text-[#264563] mb-3 flex items-center gap-2">
            Workshop Themes
          </h2>
          <p className="text-[#264563] mb-6">
            Each theme below captures a cluster of related problem statements from the workshop.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            <div className="space-y-4">
              {themes.slice(0, 4).map((theme, i) => (
                <ThemeCard
                  key={i}
                  theme={theme}
                  expanded={openThemes.has(i)}
                  onToggle={() => toggleTheme(i)}
                />
              ))}
            </div>
            <div className="space-y-4">
              {themes.slice(4, 8).map((theme, i) => (
                <ThemeCard
                  key={i + 4}
                  theme={theme}
                  expanded={openThemes.has(i + 4)}
                  onToggle={() => toggleTheme(i + 4)}
                />
              ))}
            </div>
          </div>
        </div>


        {/* Coming Soon & Navigation */}
        <div className="bg-[#edede6] rounded-3xl shadow-2xl p-5 sm:p-8 md:p-12 border border-white">
          <h3 className="text-2xl font-bold text-[#264563] mb-8 text-center">Full Problem Statements Coming Soon...</h3>

          {/* Navigation */}
          <div className="mt-12 flex justify-between">
            <Link href="/" className="text-[#264563] hover:text-[#1e3450] flex items-center gap-2">
              ← Back to Home
            </Link>
            <Link href="/glossary" className="text-[#264563] hover:text-[#1e3450] flex items-center gap-2">
              Core Glossary →
            </Link>
          </div>
        </div>

      </div>
    </CommentableContent>
  );
}

function ThemeCard({ theme, expanded, onToggle }) {
  const Icon = theme.icon;
  return (
    <div className="rounded-xl border-2 border-white overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full bg-[#264563] p-6 h-24 flex items-center justify-between hover:bg-[#1e3450] transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="text-white font-bold text-lg w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">{theme.number}</span>
          <h3 className="text-lg font-bold text-white text-left">{theme.title}</h3>
        </div>
        <div className="flex items-center gap-2 text-white/70 text-sm shrink-0">
          <span>{expanded ? 'Click to collapse' : 'Click to expand'}</span>
          {expanded ? <ChevronDown className="w-5 h-5 text-white" /> : <ChevronRight className="w-5 h-5 text-white" />}
        </div>
      </button>

      {expanded && (
        <div className="bg-white p-6 space-y-4">
          <p className="text-[#264563]">{theme.summary}</p>
          <div>
            <h4 className="text-sm font-semibold text-[#264563] mb-2">Key areas include:</h4>
            <ul className="space-y-1.5">
              {theme.details.map((detail, i) => (
                <li key={i} className="text-[#264563] text-sm flex items-start gap-2">
                  <span className="text-emerald-600 flex-shrink-0 mt-0.5">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
