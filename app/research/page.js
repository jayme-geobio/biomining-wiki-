'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight, FlaskConical, Database, TrendingUp, Users, Microscope, Target } from 'lucide-react';
import CommentableContent from '../components/CommentableContent';



const researchData = {
  frontiers: [
    {
      title: "Metal-Biology Interactions in Complex Matrices",
      icon: FlaskConical,
      keyIssues: [
        "Binding constants measured in simple buffers don't map cleanly to separation performance in real PLS, leachates, or tailings porewaters",
        "Competing ions, organics, colloids, and solids all affect selectivity and capacity",
        "Ligands for REEs, PGMs, radionuclides, and polymetallic systems remain underexplored"
      ],
      opportunities: [
        {
          title: "High-Throughput Ligand Screening",
          description: "AI-guided design and microfluidics for rapid discovery of metallophores and binding proteins"
        },
        {
          title: "Matrix-Aware Models",
          description: "Mechanistic and ML models that translate binding data into process performance predictions in real feedstocks"
        },
        {
          title: "Hybrid Biomolecular Ligands",
          description: "Peptides + polymers or mixed-mode platforms for improved fouling resistance and manufacturability"
        },
        {
          title: "Non-Chromatographic Deployment",
          description: "Membranes, beads, structured packings functionalized with selective biomolecules for continuous PLS polishing"
        }
      ]
    },
    {
      title: "Realistic Feedstocks, Complexity Proxies, and Benchmarks",
      icon: Database,
      keyIssues: [
        "Lab studies often use synthetic solutions that don't represent real PLS complexity",
        "No standard feedstocks for comparing technologies across labs",
        "Hard to translate lab performance to field conditions"
      ],
      opportunities: [
        {
          title: "Standard Synthetic Feedstocks",
          description: "Agreed recipes (chloride vs sulfate systems, light vs heavy REE mixes, e-waste leachates) for benchmarking"
        },
        {
          title: "Complexity Proxies",
          description: "Dissolved organic carbon, colloids, biomass, competing ion panels to simulate real-world conditions systematically"
        },
        {
          title: "Orebank Sample Panels",
          description: "Reference polymetallic feedstocks from actual tailings, AMD, and waste materials for real-world testing"
        },
        {
          title: "Inter-Lab Round-Robins",
          description: "Community-maintained performance baselines and data standards for cross-comparison"
        }
      ]
    },
    {
      title: "Ecology, Evolution, and Field Persistence",
      icon: Microscope,
      keyIssues: [
        "Limited understanding of in situ microbial communities (especially deep subsurface and highly acidic systems)",
        "Poor predictive understanding of evolutionary stability of engineered traits under field conditions",
        "Microbial consortia dynamics in heaps and reactors not well characterized"
      ],
      opportunities: [
        {
          title: "Phenotype Foundries",
          description: "Ultra-high-throughput screening for tolerance and leaching performance under realistic stresses"
        },
        {
          title: "Trait Half-Life Models",
          description: "Assays and models for predicting how long engineered traits persist in field populations"
        },
        {
          title: "Community Dynamics Modeling",
          description: "Ecological-theory-guided understanding of consortia stability and performance in heaps, reactors, and AMD"
        },
        {
          title: "Superbank for Extremophiles",
          description: "Biobanking microbes and consortia from legacy sites for bioprospecting and comparative genomics"
        }
      ]
    },
    {
      title: "Instrumentation, Sensing, and Modeling",
      icon: TrendingUp,
      keyIssues: [
        "Lack of rugged, low-cost sensors for low-pH, high-ionic-strength environments",
        "Bioleaching models don't adequately couple microbial kinetics with hydrology and chemical speciation",
        "Limited real-time monitoring of biological activity in heaps and reactors"
      ],
      opportunities: [
        {
          title: "In Situ Sensors",
          description: "Gas- and solution-phase sensors for redox, speciation, and biological activity in harsh conditions"
        },
        {
          title: "Coupled Biogeochemical Models",
          description: "Integrate microbial kinetics, reactive transport, hydrology, and heat transfer for heap and reactor optimization"
        },
        {
          title: "Digital Twins for Bioleaching",
          description: "Real-time models updated with sensor data for predictive control and optimization"
        },
        {
          title: "Biogeometallurgical Resource Classification",
          description: "Extend geological resource models to explicitly incorporate bioprocess options and economics"
        }
      ]
    }
  ],
  ecosystem: [
    {
      title: "Shared Materials and Testbeds",
      icon: Database,
      description: "Pre-competitive infrastructure for accelerating biomining R&D",
      initiatives: [
        {
          name: "Orebank",
          description: "Shared library of well-characterized ores, tailings, and e-waste for pre-competitive research and technology benchmarking"
        },
        {
          name: "Superbank",
          description: "Biobanking microbes and consortia from legacy and Superfund sites for bioprospecting, method development, and comparative studies"
        },
        {
          name: "Former Mines as Test Sites",
          description: "Converting liabilities into experimental infrastructure for pilot trials, closure technologies, and field validation"
        }
      ]
    },
    {
      title: "Data, Models, and Governance",
      icon: Target,
      description: "Open but governed data sharing to accelerate innovation while protecting IP",
      initiatives: [
        {
          name: "Federated Data Models",
          description: "Allow companies to share insights without surrendering ownership or increasing liability - focus on aggregated learnings"
        },
        {
          name: "Open Process Repositories",
          description: "Microbiome-mineral-process datasets, TEAs, and case studies with governed access and attribution"
        },
        {
          name: "Performance Baselines",
          description: "Community-maintained benchmarks for recovery rates, selectivity, and costs across different material types"
        }
      ]
    },
    {
      title: "Funding, IP, and Translation Pathways",
      icon: TrendingUp,
      description: "Bridging the valley of death between lab discovery and commercial deployment",
      initiatives: [
        {
          name: "TEA-Aware Academic Funding",
          description: "Research grants that require techno-economic analysis and commercialization pathways from the start"
        },
        {
          name: "IP Advocates in Universities",
          description: "Embedded expertise to help academics navigate patents, licensing, and startup formation in biomining"
        },
        {
          name: "Consortium Models with TRL Milestones",
          description: "Industry-academic partnerships with clear technology readiness level gates and co-investment norms"
        },
        {
          name: "Pilot-Plant-Scale Funding",
          description: "Targeted programs to bridge gap between lab success and field demonstration"
        }
      ]
    },
    {
      title: "Language, Branding, and Talent",
      icon: Users,
      description: "Building bridges between communities and attracting the next generation",
      initiatives: [
        {
          name: "Shared Vocabulary Resources",
          description: "This wiki and similar efforts to reduce jargon barriers between mining, biotech, investors, and regulators"
        },
        {
          name: "Reframing for Students",
          description: "'Critical minerals, circularity, and planetary remediation' messaging to attract climate-motivated talent beyond traditional 'mining' brand"
        },
        {
          name: "Case Study Storybank",
          description: "Visual flowsheets and profiles of successful projects to inspire and educate both communities"
        },
        {
          name: "Cross-Training Programs",
          description: "Biomining bootcamps, internships, and secondments between mining companies and biotech labs"
        }
      ]
    }
  ]
};

export default function Research() {
  const [openFrontiers, setOpenFrontiers] = useState(new Set());
  const [openEcosystems, setOpenEcosystems] = useState(new Set());

  function toggleFrontier(i) {
    setOpenFrontiers(prev => { const next = new Set(prev); next.has(i) ? next.delete(i) : next.add(i); return next; });
  }
  function toggleEcosystem(i) {
    setOpenEcosystems(prev => { const next = new Set(prev); next.has(i) ? next.delete(i) : next.add(i); return next; });
  }

  return (
    <CommentableContent pageName="research">

      <div className="min-h-screen py-8 px-12 space-y-6">

        {/* Box 1: Header */}
        <div className="flex gap-6 items-stretch">
          <div className="flex-1 bg-[#edede6] rounded-3xl p-10 shadow-xl border border-white">
            <h1 className="text-4xl font-bold text-[#264563] mb-3 leading-tight">Research Frontiers & Collaboration</h1>
            <p className="text-xl text-[#264563]">
              Open problems, infrastructure needs, and collaboration opportunities in biomining
            </p>
          </div>
          <div className="flex-1 rounded-3xl border-2 border-white shadow-xl" />
        </div>

        {/* Box 2: Cross-Cutting Technical Frontiers */}
        <div className="bg-[#edede6] rounded-3xl shadow-2xl p-8 md:p-12 border border-white">
          <h2 className="text-2xl font-bold text-[#264563] mb-3 flex items-center gap-2">
            <FlaskConical className="w-7 h-7 text-[#264563]" />
            Cross-Cutting Technical Frontiers
          </h2>
          <p className="text-[#264563] mb-6">
            These problem statements and bottlenecks represent a public R&D agenda distilled from workshops,
            literature, and field experience. They're areas where breakthroughs would significantly advance biomining.
          </p>
          <div className="space-y-4">
            {researchData.frontiers.map((frontier, i) => (
              <FrontierCard
                key={i}
                frontier={frontier}
                expanded={openFrontiers.has(i)}
                onToggle={() => toggleFrontier(i)}
              />
            ))}
          </div>
        </div>

        {/* Box 3: Ecosystem, Infrastructure & Collaboration */}
        <div className="bg-[#edede6] rounded-3xl shadow-2xl p-8 md:p-12 border border-white">
          <h2 className="text-2xl font-bold text-[#264563] mb-3 flex items-center gap-2">
            <Users className="w-7 h-7 text-emerald-600" />
            Ecosystem, Infrastructure & Collaboration
          </h2>
          <p className="text-[#264563] mb-6">
            Biomining is a socio-technical field, not just a set of reactions. These initiatives would strengthen
            the ecosystem and accelerate translation from lab to field.
          </p>
          <div className="space-y-4">
            {researchData.ecosystem.map((item, i) => (
              <EcosystemCard
                key={i}
                item={item}
                expanded={openEcosystems.has(i)}
                onToggle={() => toggleEcosystem(i)}
              />
            ))}
          </div>
        </div>

        {/* Box 4: Get Involved */}
        <div className="bg-[#edede6] rounded-3xl shadow-2xl p-8 md:p-12 border border-white">
          <h3 className="text-2xl font-bold text-[#264563] mb-4 text-center">Get Involved</h3>
          <p className="text-[#264563] text-center mb-6 max-w-3xl mx-auto">
            These challenges require collaboration across disciplines, sectors, and institutions. Whether you're
            a researcher, mining professional, investor, or policymaker, there's a role for you in advancing
            sustainable biomining technologies.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-[#264563] rounded-lg p-4">
              <h4 className="text-lg font-bold text-white mb-2">Researchers</h4>
              <p className="text-white/80 text-sm">Focus on high-impact problems with clear paths to field deployment</p>
            </div>
            <div className="bg-[#264563] rounded-lg p-4">
              <h4 className="text-lg font-bold text-white mb-2">Industry</h4>
              <p className="text-white/80 text-sm">Share pre-competitive data and pilot sites to accelerate innovation</p>
            </div>
            <div className="bg-[#264563] rounded-lg p-4">
              <h4 className="text-lg font-bold text-white mb-2">Funders</h4>
              <p className="text-white/80 text-sm">Support TEA-aware research and pilot-scale demonstration projects</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 text-center">
            <Link href="/" className="text-[#264563] hover:text-[#1e3450] flex items-center justify-center gap-2">
              ← Back to Home
            </Link>
          </div>
        </div>

      </div>
    </CommentableContent>
  );
}

function FrontierCard({ frontier, expanded, onToggle }) {
  const Icon = frontier.icon;
  return (
    <div className="rounded-xl border-2 border-white overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full bg-[#264563] p-6 flex items-center justify-between hover:bg-[#1e3450] transition-colors"
      >
        <div className="flex items-center gap-3">
          <Icon className="w-6 h-6 text-white" />
          <h3 className="text-xl font-bold text-white text-left">{frontier.title}</h3>
        </div>
        {expanded ? <ChevronDown className="w-6 h-6 text-white flex-shrink-0" /> : <ChevronRight className="w-6 h-6 text-white flex-shrink-0" />}
      </button>

      {expanded && (
        <div className="bg-[#edede6] p-6 space-y-5">
          {/* Key Issues */}
          <div>
            <h4 className="text-lg font-bold text-[#264563] mb-3">Key Issues & Bottlenecks</h4>
            <ul className="space-y-2">
              {frontier.keyIssues.map((issue, i) => (
                <li key={i} className="text-[#264563] text-sm flex items-start gap-2">
                  <span className="text-orange-500 flex-shrink-0">⚠</span>
                  <span>{issue}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Opportunities */}
          <div>
            <h4 className="text-lg font-bold text-emerald-700 mb-3">Research Opportunities</h4>
            <div className="space-y-3">
              {frontier.opportunities.map((opp, i) => (
                <div key={i} className="bg-white rounded-lg p-4 border border-emerald-700">
                  <h5 className="text-lg font-normal text-emerald-700 mb-1">{opp.title}</h5>
                  <p className="text-[#264563] text-sm">{opp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function EcosystemCard({ item, expanded, onToggle }) {
  const Icon = item.icon;
  return (
    <div className="rounded-xl border-2 border-white overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full bg-[#264563] p-6 flex items-center justify-between hover:bg-[#1e3450] transition-colors text-left"
      >
        <div className="flex items-center gap-3">
          <Icon className="w-6 h-6 text-white flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-white">{item.title}</h3>
            <p className="text-white/70 text-sm mt-0.5">{item.description}</p>
          </div>
        </div>
        {expanded ? <ChevronDown className="w-6 h-6 text-white flex-shrink-0 ml-4" /> : <ChevronRight className="w-6 h-6 text-white flex-shrink-0 ml-4" />}
      </button>

      {expanded && (
        <div className="bg-[#edede6] p-6">
          <div className="space-y-4">
            {item.initiatives.map((initiative, i) => (
              <div key={i} className="bg-white rounded-lg p-4 border border-gray-200">
                <h4 className="text-lg font-bold text-[#264563] mb-2">{initiative.name}</h4>
                <p className="text-[#264563] text-sm">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
