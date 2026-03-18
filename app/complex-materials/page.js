'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight, Droplets, Mountain, Factory, Cpu, Beaker, AlertTriangle } from 'lucide-react';
import CommentableContent from '../components/CommentableContent';
import GlossaryTerm from '../components/GlossaryTerm';



const materialsData = {
  ard: {
    name: "Acid Rock Drainage (ARD) / Acid Mine Drainage (AMD)",
    icon: Droplets,
    definition: "Acidic, metal-rich drainage formed when sulfide minerals are exposed to oxygen and water; often biologically accelerated",
    hazards: [
      "Ecological damage to watersheds and groundwater",
      "Toxic metals (Fe, Al, Mn, As) affect human and ecosystem health",
      "Site-specific geochemistry with variable flow",
      "High public visibility and strong community opposition"
    ],
    bioOpportunities: [
      {
        title: "Constructed Wetlands & SRB Systems",
        description: <><GlossaryTerm term="Sulfate-Reducing Bacteria (SRB)" definition="Bacteria that use sulfate as electron acceptor, producing sulfide">Sulfate-reducing bacteria</GlossaryTerm> passively precipitate metals as sulfides while raising pH and removing toxins</>

      },
      {
        title: "Engineered Consortia for Bio-immobilization",
        description: "Designed microbial communities for biological 'polishing' of metals and co-recovery of critical metals"
      },
      {
        title: "AMD as Resource",
        description: "Recovery of Cu, Zn, REEs, and other metals from drainage - treating liability as opportunity"
      },
      {
        title: "Extremophile Biobanking",
        description: "'Superbank' concept: biobanking extremophiles from legacy sites for bioprospecting and method development"
      }
    ],
    whyBiology: "Microbes cause AMD but can also help solve it. Biology offers passive, low-cost treatment that can simultaneously recover value.",
    maturity: "High - proven in constructed wetlands and pilot-scale SRB reactors"
  },
  wasteRock: {
    name: "Bulk Waste Rock & Refractory Ores",
    icon: Mountain,
    definition: "Heterogeneous rock with low grades and/or refractory mineralogy; can contain 'hidden' critical metals",
    hazards: [
      "Potential leaching of metals over time",
      "Slope instability in waste dumps",
      "Future ARD generation",
      "Classified as sub-economic under current conventional methods"
    ],
    bioOpportunities: [
      {
        title: "Refractory Biooxidation",
        description: <>For gold and other metals trapped in sulfides - <GlossaryTerm term="Biooxidation" definition="Microbially driven oxidation of sulfides where the valuable metal remains in the solid phase">biooxidation</GlossaryTerm> breaks down sulfide matrix to release metals (BIOX®-style processing)</>

      },
      {
        title: "Biogenic Lixiviants",
        description: "Microbes produce organic acids, ferric iron, iodide, or cyanide locally to reduce chemical transport costs and enable site-specific leaching"
      },
      {
        title: "Hidden Critical Metals",
        description: "Re-evaluation of 'waste' piles as future resources. Extract critical by-products (Co, REEs, Ni) that weren't original targets"
      },
      {
        title: "Long Time-Horizon Processing",
        description: "Stockpile bio-leaching with multi-year residence times acceptable for previously uneconomic material"
      }
    ],
    whyBiology: "Biology can unlock value from material too expensive to process conventionally - turning waste into revenue at lower operating costs.",
    maturity: "Medium-High - proven for refractory gold; emerging for low-grade stockpiles and critical metal co-products"
  },
  tailings: {
    name: "Tailings",
    icon: Factory,
    definition: "Fine residues remaining after mineral processing that record what material was processed and what metals were not recovered",
    hazards: [
      "Dam failures cause catastrophic loss of life",
      "Dust carries heavy metals to nearby communities",
      "Long-term seepage and groundwater contamination",
      "Tailings volumes grow as ore grades decline globally"
    ],
    bioOpportunities: [
      {
        title: "Secondary Metal Recovery",
        description: <><GlossaryTerm term="Bioleaching" definition="Microbially mediated solubilization of metals from solids (ores, tailings, wastes)">Bioleaching</GlossaryTerm> or <GlossaryTerm term="Biosorption" definition="Sorption of dissolved metals onto biomass or extracellular polymeric substances (EPS)">biosorption</GlossaryTerm> to recover Cu, Au, REEs, and other metals left behind in initial processing</>

      },
      {
        title: "Biological Stabilization",
        description: "Vegetation, bio-cementation (MICP), and microbial crusts to reduce dust and seepage while improving long-term stability"
      },
      {
        title: "Tailings Revalorization",
        description: <>Historic tailings often contain <GlossaryTerm term="Critical Minerals" definition="Elements deemed essential to economic or national security and vulnerable to supply disruption">critical metals</GlossaryTerm> that weren't extracted originally - making <GlossaryTerm term="Bioleaching" definition="Microbially mediated solubilization of metals from solids (ores, tailings, wastes)">bioleaching</GlossaryTerm> possible without expensive re-mining infrastructure</>

      },
      {
        title: "Orebank Standardization",
        description: <>Tailings-derived samples as standardized test <GlossaryTerm term="Feedstock" definition="Material fed into a process step">feedstocks</GlossaryTerm> for biotechnology benchmarking across labs</>

      }
    ],
    whyBiology: "Bioleaching is cheaper than rebuilding infrastructure. Biocement and stabilization avoid toxic chemical transport to remote sites.",
    maturity: "Medium - proven for some metals; emerging for REEs and biological stabilization"
  },
  ewaste: {
    name: "Electronic Waste (E-waste)",
    icon: Cpu,
    definition: "Discarded electronics rich in Cu, Au, Pd, REEs, and critical metals, but with complex polymer/metal mixtures",
    hazards: [
      "World's fastest growing waste stream (74.7M tons by 2030)",
      "Complex mix of metals, plastics, glass - hard to separate",
      "Current recycling exposes workers to carcinogens",
      "Thin profit margins sends material to landfills"
    ],
    bioOpportunities: [
      {
        title: "Bioleaching Circuit Boards",
        description: "Microbes dissolve Cu, Au, Ag, Pd from printed circuit boards - potentially safer and cheaper than smelting"
      },
      {
        title: "Metal-Binding Proteins",
        description: <><GlossaryTerm term="Bioseparation" definition="Use of biomolecules (proteins, peptides, polymers, whole cells) as selective sorbents or separation agents">Bioseparation</GlossaryTerm> using engineered proteins to selectively grab specific metals from complex e-waste leachates</>

      },
      {
        title: "Biogenic Acids On-Site",
        description: "Microbial production of leaching acids on-site, reducing chemical transport costs and improving safety"
      },
      {
        title: "Urban Biomining Integration",
        description: "Integration with circular-economy frameworks (collection systems, logistics, distributed processing)"
      }
    ],
    whyBiology: "E-waste is metal-rich but expensive to recycle. Biotech could shift economics while reducing worker health risks and environmental impact.",
    maturity: "Low-Medium - lab-proven, early pilots; significant commercialization challenges remain"
  },
  other: {
    name: "Other Secondary Resources",
    icon: Beaker,
    definition: "Slag, fly ash, phosphogypsum, red mud, produced waters, and geothermal brines",
    hazards: [
      "Slag: Metal oxides from smelting; heavy metals leach into groundwater over decades if untreated",
      "Fly ash: Coal combustion byproduct with REEs and heavy metals; billions of tons stockpiled globally with limited disposal options",
      "Phosphogypsum: Radioactive waste from fertilizer production",
      "Red mud: Caustic bauxite waste with REEs, Sc, and other metals"
    ],
    bioOpportunities: [
      {
        title: "Slag Processing",
        description: "Biotech may extract residual critical minerals that are too expensive for traditional pyrometallurgical methods"
      },
      {
        title: "REE from Fly Ash",
        description: "Microbial or biomolecular extraction of rare earth elements from coal power plant waste"
      },
      {
        title: "Red Mud Valorization",
        description: <><GlossaryTerm term="Bioleaching" definition="Microbially mediated solubilization of metals from solids (ores, tailings, wastes)">Bioleaching</GlossaryTerm> of Sc, REEs, and other metals from highly alkaline bauxite processing waste</>

      },
      {
        title: "Produced Water Cleanup",
        description: "Bioremediation to clean oil/gas wastewater for reuse in arid regions while recovering dissolved metals"
      }
    ],
    whyBiology: "Each of these wastes contains value where biology's mild conditions and selectivity offer a strong alternative pathway for recovery.",
    maturity: "Low-Medium - mostly at research and early pilot stage; case-by-case evaluation needed"
  }
};

export default function ComplexMaterials() {
  const [openMaterials, setOpenMaterials] = useState(new Set());

  function toggleMaterial(key) {
    setOpenMaterials(prev => { const next = new Set(prev); next.has(key) ? next.delete(key) : next.add(key); return next; });
  }

  // Auto-open and scroll to material from URL hash
  useEffect(() => {
    function openFromHash() {
      const hash = window.location.hash.slice(1);
      if (!hash || !materialsData[hash]) return;
      setOpenMaterials(new Set([hash]));
      setTimeout(() => {
        const el = document.getElementById(`material-${hash}`);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
    openFromHash();
    window.addEventListener('hashchange', openFromHash);
    return () => window.removeEventListener('hashchange', openFromHash);
  }, []);

  return (
    <CommentableContent pageName="complex-materials">

      <div className="min-h-screen py-8 px-12 space-y-6">

        {/* Box 1: Header */}
        <div className="flex gap-6 items-stretch">
          <div className="flex-1 bg-[#edede6] rounded-3xl p-10 shadow-xl border border-white">
            <h1 className="text-4xl font-bold text-[#264563] mb-3 leading-tight">Complex Materials Playbook</h1>
            <p className="text-xl text-[#264563]">
              Materials too mineralogically complex, contaminated, or low-grade for conventional processing
            </p>
          </div>
          <div className="flex-1 rounded-3xl border-2 border-white shadow-xl" />
        </div>

        {/* Box 2: Content */}
        <div className="bg-[#edede6] rounded-3xl shadow-2xl p-8 md:p-12 border border-white">

          {/* Key Insight */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-[#264563] mb-3">Where Biology Adds Value</h2>
            <div className="text-[#264563] space-y-2">
              <p className="mb-3">
                Conventional mining is highly optimized for high-<GlossaryTerm term="Grade" definition="Concentration of a valuable element or mineral in ore">grade</GlossaryTerm> ores. For complex
                materials, biotechnology offers a complementary approach that can shift the economics and reduce environmental impact.
              </p>
              {[
                ["Low-grade material", "where conventional processing is uneconomic"],
                ["Complex mineralogy", "(refractory ores, polymetallic systems)"],
                ["Environmental hazards", <>(<GlossaryTerm term="Acid Mine Drainage (AMD)" definition="Acidic, metal-rich water produced when sulfide minerals in mine waste are exposed to air and water; often accelerated by microbial activity">AMD</GlossaryTerm>, <GlossaryTerm term="Tailings" definition="Fine-grained residues after metal extraction; typically stored in engineered impoundments">tailings</GlossaryTerm>, legacy sites)</>],
                ["Remote locations", "where chemical transport is expensive or impossible"],
                ["Thin margins", "where small OPEX reductions make projects viable"],
              ].map(([bold, rest], i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-emerald-600" style={{marginTop: '-0.1em'}}>✓</span>
                  <span><strong>{bold}</strong> {rest}</span>
                </div>
              ))}
              <p className="font-semibold">
                Note: These materials are illustrative examples, not a comprehensive overview.
              </p>
            </div>
          </div>

          {/* Materials */}
          <div className="space-y-4">
            {Object.keys(materialsData).map(key => (
              <MaterialCard
                key={key}
                id={`material-${key}`}
                material={materialsData[key]}
                expanded={openMaterials.has(key)}
                onToggle={() => toggleMaterial(key)}
              />
            ))}
          </div>

          {/* Bottom Insight */}
          <div className="mt-8 bg-white rounded-xl p-6 border border-emerald-700">
            <h3 className="text-lg font-bold text-emerald-700 mb-2">The Best Opportunities</h3>
            <p className="text-[#264563] text-sm">
              The sweet spot for biomining is where you're dealing with <strong>waste, legacy sites, or materials
              that benefit from alternative processing approaches</strong>. These are the contexts where biology's strengths
              (lower OPEX, mild conditions, selectivity, reduced environmental impact) are most valuable.
            </p>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex justify-between">
            <Link href="/" className="text-[#264563] hover:text-[#1e3450] flex items-center gap-2">
              ← Back to Home
            </Link>
            <Link href="/research" className="text-[#264563] hover:text-[#1e3450] flex items-center gap-2">
              Actionable Problems →
            </Link>
          </div>
        </div>

      </div>
    </CommentableContent>
  );
}

function MaterialCard({ id, material, expanded, onToggle }) {
  const Icon = material.icon;
  return (
    <div id={id} className="rounded-xl border-2 border-white overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full bg-[#264563] p-6 flex items-center justify-between hover:bg-[#1e3450] transition-colors"
      >
        <div className="flex items-center gap-3 text-left">
          <Icon className="w-6 h-6 text-white flex-shrink-0" />
          <div>
            <h2 className="text-xl font-bold text-white">{material.name}</h2>
            <p className="text-white/60 text-xs mt-0.5">Maturity: {material.maturity}</p>
          </div>
        </div>
        {expanded ? <ChevronDown className="w-6 h-6 text-white flex-shrink-0" /> : <ChevronRight className="w-6 h-6 text-white flex-shrink-0" />}
      </button>

      {expanded && (
        <div className="bg-[#edede6] p-6 space-y-5">
          {/* Definition */}
          <p className="text-[#264563] italic">{material.definition}</p>

          {/* Hazards */}
          <div>
            <h3 className="text-lg font-bold text-[#264563] mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-orange-500" />
              Key Hazards & Challenges
            </h3>
            <ul className="space-y-1">
              {material.hazards.map((hazard, i) => (
                <li key={i} className="text-[#264563] text-sm flex items-start gap-2">
                  <span className="text-orange-500" style={{marginTop: '-0.1em'}}>•</span>
                  <span>{hazard}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bio Opportunities */}
          <div>
            <h3 className="text-lg font-bold text-[#264563] mb-3 flex items-center gap-2">
              <Beaker className="w-5 h-5 text-emerald-600" />
              Where Biology Can Help
            </h3>
            <div className="space-y-3">
              {material.bioOpportunities.map((opp, i) => (
                <div key={i} className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="text-lg font-normal text-emerald-700 mb-1">{opp.title}</h4>
                  <p className="text-[#264563] text-sm">{opp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Biology */}
          <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-700">
            <h3 className="text-lg font-bold text-emerald-700 mb-2">Why Biology Works Here</h3>
            <p className="text-emerald-900 text-sm">{material.whyBiology}</p>
          </div>
        </div>
      )}
    </div>
  );
}
