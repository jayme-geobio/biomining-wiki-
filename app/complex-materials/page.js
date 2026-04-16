'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight, Droplets, Mountain, Factory, Cpu, Beaker, AlertTriangle, TrendingUp, Microscope, Camera } from 'lucide-react';
import CommentableContent from '../components/CommentableContent';
import GlossaryTerm from '../components/GlossaryTerm';
import TableOfContents from '../components/TableOfContents';
import PageNavigation from '../components/PageNavigation';



const materialsData = {
  ard: {
    name: "Acid Rock Drainage (ARD) / Acid Mine Drainage (AMD)",
    icon: Droplets,
    image: "/images/amd-drainage.jpg",
    imageCaption: "Iron-oxide and microbial precipitates formed by acid mine drainage",
    imageSource: "Jayme Feyhl-Buska",
    imageDate: "Date unknown",
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
        description: <>Recovery of Cu, Zn, <GlossaryTerm term="Rare Earth Elements (REEs)" definition="A group of 17 metallic elements critical for electronics, magnets, and clean energy technologies">REEs</GlossaryTerm>, and other metals from <GlossaryTerm term="Drainage" definition="Water that flows through or out of a mine site, potentially carrying dissolved metals and acidity">drainage</GlossaryTerm> - treating liability as opportunity</>
      },
      {
        title: "Extremophile Biobanking",
        description: <>'Superbank' concept: biobanking <GlossaryTerm term="Extremophile" definition="An organism adapted to thrive in extreme environmental conditions">extremophiles</GlossaryTerm> from legacy sites for <GlossaryTerm term="Bioprospecting" definition="Systematic search for useful organisms from natural environments">bioprospecting</GlossaryTerm> and method development</>

      }
    ],
    whyBiology: "Microbes cause AMD but can also help solve it. Biology offers passive, low-cost treatment that can simultaneously recover value.",
    maturityLevel: "High",
    maturityDetail: "Proven in constructed wetlands and pilot-scale SRB reactors"
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
        description: <>Microbes produce organic acids, ferric iron, iodide, or cyanide locally to reduce chemical transport costs and enable site-specific <GlossaryTerm term="Leach" definition="Dissolving metals from solid material using a chemical solution (lixiviant)">leaching</GlossaryTerm></>
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
    maturityLevel: "Medium-High",
    maturityDetail: "Proven for refractory gold; emerging for low-grade stockpiles and critical metal co-products"
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
    maturityLevel: "Medium",
    maturityDetail: "Proven for some metals; emerging for REEs and biological stabilization"
  },
  ewaste: {
    name: "Electronic Waste (E-waste)",
    icon: Cpu,
    definition: <>Discarded electronics rich in Cu, Au, Pd, <GlossaryTerm term="Rare Earth Elements (REEs)" definition="A group of 17 metallic elements critical for electronics, magnets, and clean energy technologies">REEs</GlossaryTerm>, and critical metals, but with complex polymer/metal mixtures</>,
    hazards: [
      "World's fastest growing waste stream (74.7M tons by 2030)",
      "Complex mix of metals, plastics, glass - hard to separate",
      "Current recycling exposes workers to carcinogens",
      "Thin profit margins sends material to landfills"
    ],
    bioOpportunities: [
      {
        title: "Bioleaching Circuit Boards",
        description: <>Microbes dissolve Cu, Au, Ag, Pd from printed circuit boards - potentially safer and cheaper than <GlossaryTerm term="Smelting" definition="A pyrometallurgical process using high temperatures to separate metal from ore">smelting</GlossaryTerm></>

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
    maturityLevel: "Low-Medium",
    maturityDetail: "Lab-proven, early pilots; significant commercialization challenges remain"
  },
  other: {
    name: "Other Secondary Resources",
    icon: Beaker,
    definition: <><GlossaryTerm term="Slag" definition="Glassy byproduct of smelting, containing metal oxides and silicates">Slag</GlossaryTerm>, <GlossaryTerm term="Fly Ash" definition="Fine particulate residue from coal combustion; can contain REEs and heavy metals">fly ash</GlossaryTerm>, phosphogypsum, red mud, <GlossaryTerm term="Produced Water" definition="Water extracted alongside oil and gas, often containing dissolved metals and salts">produced waters</GlossaryTerm>, and <GlossaryTerm term="Geothermal Brine" definition="Hot, mineral-rich water from geothermal reservoirs; can contain lithium and other valuable elements">geothermal brines</GlossaryTerm></>,
    hazards: [
      <><GlossaryTerm term="Slag" definition="Glassy byproduct of smelting, containing metal oxides and silicates">Slag</GlossaryTerm>: Metal oxides from <GlossaryTerm term="Smelting" definition="A pyrometallurgical process using high temperatures to separate metal from ore">smelting</GlossaryTerm>; heavy metals leach into groundwater over decades if untreated</>,
      <><GlossaryTerm term="Fly Ash" definition="Fine particulate residue from coal combustion; can contain REEs and heavy metals">Fly ash</GlossaryTerm>: Coal combustion byproduct with <GlossaryTerm term="Rare Earth Elements (REEs)" definition="A group of 17 metallic elements critical for electronics, magnets, and clean energy technologies">REEs</GlossaryTerm> and heavy metals; billions of tons stockpiled globally with limited disposal options</>,
      "Phosphogypsum: Radioactive waste from fertilizer production",
      "Red mud: Caustic bauxite waste with REEs, Sc, and other metals"
    ],
    bioOpportunities: [
      {
        title: "Slag Processing",
        description: <>Biotech may extract residual <GlossaryTerm term="Critical Minerals" definition="Elements deemed essential to economic or national security and vulnerable to supply disruption">critical minerals</GlossaryTerm> that are too expensive for traditional <GlossaryTerm term="Pyrometallurgy" definition="Extraction and refining of metals using high-temperature processes such as smelting and roasting">pyrometallurgical</GlossaryTerm> methods</>
      },
      {
        title: "REE from Fly Ash",
        description: <>Microbial or biomolecular extraction of <GlossaryTerm term="Rare Earth Elements (REEs)" definition="A group of 17 metallic elements critical for electronics, magnets, and clean energy technologies">rare earth elements</GlossaryTerm> from coal power plant waste</>
      },
      {
        title: "Red Mud Valorization",
        description: <><GlossaryTerm term="Bioleaching" definition="Microbially mediated solubilization of metals from solids (ores, tailings, wastes)">Bioleaching</GlossaryTerm> of Sc, REEs, and other metals from highly alkaline bauxite processing waste</>

      },
      {
        title: "Produced Water Cleanup",
        description: <>Bioremediation to clean oil/gas <GlossaryTerm term="Produced Water" definition="Water extracted alongside oil and gas, often containing dissolved metals and salts">produced water</GlossaryTerm> for reuse in arid regions while recovering dissolved metals</>
      }
    ],
    whyBiology: "Each of these wastes contains value where biology's mild conditions and selectivity offer a strong alternative pathway for recovery.",
    maturityLevel: "Low-Medium",
    maturityDetail: "Mostly at research and early pilot stage; case-by-case evaluation needed"
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

      <div className="min-h-screen pt-4 pb-6 max-w-6xl mx-auto px-4 space-y-6">

        {/* Box 1: Header */}
        <div className="flex gap-6 items-stretch">
          <div className="flex-[2] bg-[#edede6] rounded-3xl px-6 sm:px-10 shadow-xl border border-white flex flex-col justify-center py-10">
            <h1 className="text-2xl sm:text-4xl font-bold text-[#264563] mb-3 leading-tight">Complex Materials Playbook</h1>
            <p className="text-base font-extralight text-[#264563]">
              Materials too mineralogically complex, contaminated, or low-grade for conventional processing
            </p>
          </div>
          <TableOfContents />
        </div>

        {/* Box 2: Best Opportunities */}
        <div className="bg-[#edede6] rounded-3xl shadow-2xl p-5 sm:p-8 md:p-12 border border-white">
          <h2 className="text-2xl font-bold text-[#264563] mb-3">The Best Opportunities</h2>
          <p className="text-[#264563]">
            The immediate sweet spot for biomining is where you're dealing with <strong>waste, legacy sites, or materials
            that benefit from alternative processing approaches</strong>. These are the contexts where biology's strengths
            (lower OPEX, mild conditions, selectivity, reduced environmental impact) are most valuable.
          </p>
        </div>

        {/* Box 3: Where Biology Adds Value */}
        <div className="bg-[#edede6] rounded-3xl shadow-2xl p-5 sm:p-8 md:p-12 border border-white">
          <h2 className="text-2xl font-bold text-[#264563] mb-3">Where Biology Adds Value</h2>
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
          </div>

        </div>

        {/* Box 4: Materials */}
        <div className="bg-[#edede6] rounded-3xl shadow-2xl p-5 sm:p-8 md:p-12 border border-white">
          <h2 className="text-2xl font-bold text-[#264563] mb-2">Complex Materials</h2>
          <p className="font-semibold text-[#264563] mb-6">
            Note: These materials are illustrative examples, not a comprehensive overview.
          </p>
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

          {/* Navigation */}
          <PageNavigation />
        </div>

      </div>
    </CommentableContent>
  );
}

function MaterialCard({ id, material, expanded, onToggle }) {
  const Icon = material.icon;
  const [showImage, setShowImage] = useState(false);
  return (
    <div id={id} className="rounded-xl border-2 border-white overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full bg-[#264563] p-4 sm:p-6 flex items-center justify-between gap-2 hover:bg-[#1e3450] transition-colors"
      >
        <div className="flex items-center gap-2 sm:gap-3 text-left min-w-0 flex-1">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
          <h2 className="font-bold text-white whitespace-nowrap overflow-hidden text-ellipsis" style={{ fontSize: 'clamp(0.65rem, 1.8vw, 1.125rem)' }}>{material.name}</h2>
        </div>
        <div className="flex items-center gap-1 sm:gap-2 text-white/70 flex-shrink-0" style={{ fontSize: 'clamp(0.65rem, 1.2vw, 0.875rem)' }}>
          <span className="hidden sm:inline">{expanded ? 'Click to collapse' : 'Click to expand'}</span>
          {expanded ? <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-white" /> : <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />}
        </div>
      </button>

      {expanded && (
        <div className="bg-[#edede6] p-6 space-y-5">
          {/* Image Modal */}
          {material.image && showImage && (
            <div
              className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
              onClick={() => setShowImage(false)}
            >
              <div
                className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setShowImage(false)}
                  className="absolute top-2 right-2 z-10 bg-white/90 hover:bg-white rounded-full w-8 h-8 flex items-center justify-center text-[#264563] text-xl font-bold shadow-md"
                  aria-label="Close"
                >
                  ×
                </button>
                <img src={material.image} alt={material.imageCaption || material.name} className="w-full h-auto object-contain max-h-[75vh]" />
                <div className="px-4 py-3 bg-gray-50 border-t border-[#264563]/10">
                  {material.imageCaption && (
                    <p className="text-sm italic text-[#264563]/80">{material.imageCaption}</p>
                  )}
                  {(material.imageSource || material.imageDate) && (
                    <p className="text-xs text-[#264563]/60 mt-1">
                      {material.imageSource && <>Source: {material.imageSource}</>}
                      {material.imageSource && material.imageDate && ' · '}
                      {material.imageDate && <>{material.imageDate}</>}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Definition */}
          <div className="flex items-start justify-between gap-3">
            <p className="text-[#264563] italic min-w-0 flex-1">{material.definition}</p>
            {material.image && (
              <button
                onClick={() => setShowImage(true)}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-600 hover:bg-amber-50 transition-colors flex-shrink-0 leading-none border border-amber-600 rounded px-2 py-1.5"
              >
                <Camera className="w-3.5 h-3.5" style={{marginTop: '-2px'}} />
                <span className="hidden sm:inline">Click to Visualize</span>
              </button>
            )}
          </div>

          {/* Why Biology Works Here */}
          <div>
            <h3 className="text-lg font-bold text-[#264563] mb-2 flex items-center gap-2">
              <Beaker className="w-5 h-5 text-teal-600" />
              Why Biology Works Here
            </h3>
            <ul className="space-y-1">
              <li className="text-[#264563] text-sm flex items-start gap-2">
                <span className="text-teal-600" style={{marginTop: '-0.1em'}}>•</span>
                <span>{material.whyBiology}</span>
              </li>
            </ul>
          </div>

          {/* Maturity Level */}
          <div>
            <h3 className="text-lg font-bold text-[#264563] mb-2 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-sky-500" />
              Maturity Level: <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-sm font-bold ${
                material.maturityLevel === 'High' ? 'bg-emerald-100 text-emerald-800' :
                material.maturityLevel === 'Medium-High' ? 'bg-teal-100 text-teal-800' :
                material.maturityLevel === 'Medium' ? 'bg-amber-100 text-amber-800' :
                'bg-orange-100 text-orange-800'
              }`}>{material.maturityLevel}</span>
            </h3>
            <ul className="space-y-1">
              <li className="text-[#264563] text-sm flex items-start gap-2">
                <span className="text-sky-500" style={{marginTop: '-0.1em'}}>•</span>
                <span>{material.maturityDetail}</span>
              </li>
            </ul>
          </div>

          {/* Key Hazards & Challenges */}
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

          {/* Where Biology Can Help */}
          <div>
            <h3 className="text-lg font-bold text-[#264563] mb-3 flex items-center gap-2">
              <Microscope className="w-5 h-5 text-emerald-600" />
              Where Biology Can Help
            </h3>
            <div className="space-y-3">
              {material.bioOpportunities.map((opp, i) => (
                <div key={i} className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="text-sm font-semibold text-emerald-700 mb-1">{opp.title}</h4>
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
