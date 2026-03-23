'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight, Zap, Target, AlertCircle } from 'lucide-react';
import CommentableContent from '../components/CommentableContent';
import GlossaryTerm from '../components/GlossaryTerm';


const flowsheetData = [
  {
    id: 'copper-heap',
    title: "Copper Heap Leach Operation",
    type: "Classical Bio-Application",
    description: <>Low-grade copper oxide/sulfide ore processed via <GlossaryTerm term="Heap Leaching" definition="Leaching method where crushed ore is stacked on a lined pad and irrigated with lixiviant that percolates through the heap">heap leaching</GlossaryTerm> with biological oxidation assistance</>,
    diagram: <>{`[Mine - Open Pit]
   ↓ ore (0.3-1% Cu)
[Crushing to ~2-5 cm]
   ↓ crushed ore
[Heap Leach Pad] `}<span className="text-emerald-600 font-bold">← (irrigation: acidic ferric sulfate + microbes)</span>{`
   ↓ PLS (Cu²⁺ solution)
[Solvent Extraction (SX)] → [Electrowinning (EW)] → Cu cathodes (99.99% Cu)
   ↑                              ↓
   └──── raffinate (recycled) ────┘`}</>,
    bioIntegration: [
      {
        stage: "Heap Leach Pad",
        role: <>Native or <GlossaryTerm term="Inoculum" definition="A preparation of microorganisms introduced to a system to establish a desired microbial community">inoculated</GlossaryTerm> <GlossaryTerm term="Acidophile" definition="Organism that thrives at low pH (typically pH &lt; 3)">acidophiles</GlossaryTerm> (Acidithiobacillus, Leptospirillum)</>,
        what: "Microbes oxidize ferrous iron (Fe²⁺) to ferric iron (Fe³⁺) and produce sulfuric acid, which dissolves copper from minerals",
        control: "pH control (1.5-2.5), nutrient addition (N, P), aeration management"
      },
      {
        stage: "Side-stream Bio-polishing",
        role: <><GlossaryTerm term="Biosorption" definition="Sorption of dissolved metals onto biomass or extracellular polymeric substances (EPS)">Biosorption</GlossaryTerm> or <GlossaryTerm term="Bioseparation" definition="Use of biomolecules (proteins, peptides, polymers, whole cells) as selective sorbents or separation agents">bioseparation</GlossaryTerm></>,
        what: <>Remove impurities (Fe, Mn, Al) from <GlossaryTerm term="Pregnant Leach Solution (PLS)" definition="Metal-bearing solution collected after lixiviant percolates through ore">PLS</GlossaryTerm> before <GlossaryTerm term="Solvent Extraction (SX)" definition="Liquid-liquid separation process that selectively transfers target metal ions from PLS into an organic phase">SX</GlossaryTerm> to improve efficiency</>,
        control: "Selective biomolecules or microbial biomass; regeneration cycles"
      },
      {
        stage: "Bleed Stream Treatment",
        role: <><GlossaryTerm term="Sulfate-Reducing Bacteria (SRB)" definition="Bacteria that use sulfate as electron acceptor, producing sulfide">SRB</GlossaryTerm> reactors</>,
        what: <>Treat <GlossaryTerm term="Bleed Stream" definition="A portion of circulating process solution diverted for treatment or disposal to control impurity buildup">bleed streams</GlossaryTerm> to recover metals, manage sulfate, and reduce discharge volume</>,
        control: "Anaerobic conditions, organic carbon addition, sulfide precipitation"
      }
    ],
    reality: [
      "Many 'non-biological' heaps already rely on native acidophiles - intentional bio-management improves performance",
      "Time scale: Months to years for full heap cycle",
      "Scale: Very large - tens of millions of tonnes per year",
      <>Economics favor biology when ore <GlossaryTerm term="Grade" definition="The concentration of a target metal or mineral in ore, typically expressed as a percentage or grams per tonne">grade</GlossaryTerm> is too low for conventional <GlossaryTerm term="Milling" definition="Size reduction of ore by grinding in rotating drums with steel balls or rods">milling</GlossaryTerm>/<GlossaryTerm term="Froth Flotation" definition="Separation process that uses air bubbles and chemical reagents to selectively float target mineral particles to the surface">flotation</GlossaryTerm></>
    ],
    maturity: "Commercial - proven at major operations worldwide"
  },
  {
    id: 'refractory-gold',
    title: "Refractory Gold with Tank Biooxidation",
    type: "Proven Bio-Technology",
    description: <>Gold encapsulated in sulfides (pyrite, arsenopyrite) treated via <GlossaryTerm term="Biooxidation" definition="Microbial oxidation of sulfide minerals to liberate encapsulated metals, typically in stirred tanks">biooxidation</GlossaryTerm> before <GlossaryTerm term="Cyanidation" definition="A process using cyanide solutions to dissolve and extract gold and silver">cyanidation</GlossaryTerm></>,
    diagram: <>{`[Ore - Underground or Open Pit]
   ↓ ore (refractory gold in sulfides)
[Crushing & Grinding]
   ↓ ground ore
[Flotation]
   ↓ sulfide concentrate (10-40% solids)
[Biooxidation Tanks] `}<span className="text-emerald-600 font-bold">← (air, nutrients, microbes at 40-50°C or 65-85°C)</span>{`
   ↓ oxidized residue (gold exposed)
[Cyanidation] ← (NaCN solution)
   ↓ Au-rich solution
[Carbon Adsorption → Stripping → Electrowinning] → Gold doré`}</>,
    bioIntegration: [
      {
        stage: "Biooxidation Tanks",
        role: <><GlossaryTerm term="Acidophile" definition="Organism that thrives at low pH (typically pH &lt; 3)">Acidophilic</GlossaryTerm> Fe/S-oxidizing bacteria (<GlossaryTerm term="Mesophile" definition="An organism that grows best at moderate temperatures, typically 20-45°C">mesophiles</GlossaryTerm> or <GlossaryTerm term="Thermophile" definition="An organism that thrives at elevated temperatures, typically 45-80°C">thermophiles</GlossaryTerm>)</>,
        what: "Oxidize sulfide minerals (pyrite, arsenopyrite) to expose encapsulated gold for cyanidation",
        control: "Temperature (40-50°C mesophile or 65-85°C thermophile), pH 1.5-2.0, air flow, retention time 4-7 days"
      },
      {
        stage: "Post-Bioox Neutralization",
        role: "Chemical (lime) or biological buffering",
        what: "Raise pH from ~1.5 to 10-11 for cyanidation step",
        control: "Careful pH management to avoid gold losses"
      },
      {
        stage: "Tailings & Water Treatment",
        role: "Bioremediation downstream",
        what: <>Treat process water and <GlossaryTerm term="Tailings" definition="Fine-grained residues after metal extraction; typically stored in engineered impoundments">tailings</GlossaryTerm> using SRB or other microbes to remove residual metals and cyanide</>,
        control: "Anaerobic bioreactors, organic carbon, detention time"
      }
    ],
    reality: [
      "Core biooxidation step is already fully biological - proven technology (BIOX®, BacTech)",
      "Time scale: Days to weeks (tank residence)",
      <>Scale: Moderate - thousands of tonnes of <GlossaryTerm term="Concentrate" definition="The enriched product of mineral processing, containing a high proportion of the target mineral">concentrate</GlossaryTerm> per year</>,
      "Enables processing of refractory ores that would otherwise be uneconomic",
      "Capital intensive but OPEX-competitive with alternatives like roasting or pressure oxidation"
    ],
    maturity: "Commercial - operating for 30+ years at multiple sites"
  },
  {
    id: 'tailings-recovery',
    title: "Tailings Reprocessing for Critical Metals",
    type: "Emerging Bio-Application",
    description: <>Historic tailings contain metals not recovered in initial processing - <GlossaryTerm term="Bioleaching" definition="Microbially mediated solubilization of metals from solids (ores, tailings, wastes)">bioleach</GlossaryTerm> without rebuilding infrastructure</>,
    diagram: <>{`[Historic Tailings Dam]
   ↓ tailings slurry (low-grade Cu, Co, REEs)
[Bioleach Tanks or Heap-Style Pad] `}<span className="text-emerald-600 font-bold">← (acidophiles, nutrients, air)</span>{`
   ↓ PLS (polymetallic solution)
[`}<span className="text-emerald-600 font-bold">Bioseparation</span>{` / Selective Recovery]
   ├→ [Cu Recovery] → SX/EW → Cu cathodes
   ├→ [Co Recovery] → Ion exchange or `}<span className="text-emerald-600 font-bold">bioseparation</span>{` → Co product
   └→ [REE Recovery] → `}<span className="text-emerald-600 font-bold">Biomolecular ligands</span>{` or IX → REE concentrate
[Treated Tailings] → Stabilization & Closure`}</>,
    bioIntegration: [
      {
        stage: "Bioleaching",
        role: <><GlossaryTerm term="Acidophile" definition="Organism that thrives at low pH (typically pH &lt; 3)">Acidophiles</GlossaryTerm> for bulk metal solubilization</>,
        what: "Re-leach metals left behind in original processing - Cu, Zn, Co, Ni, REEs",
        control: "Tank or heap configuration, pH, temperature, solids loading"
      },
      {
        stage: "Bioseparations",
        role: <>Selective biomolecules (proteins, <GlossaryTerm term="Peptide" definition="A short chain of amino acids that can bind metals">peptides</GlossaryTerm>, <GlossaryTerm term="Metallophores / Siderophores" definition="Small molecules secreted by microbes that chelate metals with high affinity">siderophores</GlossaryTerm>)</>,
        what: <>Separate and concentrate specific metals from complex <GlossaryTerm term="Pregnant Leach Solution (PLS)" definition="Metal-bearing solution collected after lixiviant percolates through ore">PLS</GlossaryTerm> - especially valuable for <GlossaryTerm term="Rare Earth Elements (REEs)" definition="A group of 17 metallic elements critical for electronics, magnets, and clean energy technologies">REEs</GlossaryTerm> and Co</>,
        control: <>{`Immobilized `}<GlossaryTerm term="Ligand" definition="A molecule that binds to a metal ion to form a complex">ligands</GlossaryTerm>{`, regeneration, matrix tolerance`}</>
      },
      {
        stage: "Tailings Stabilization",
        role: "MICP (microbially-induced calcite precipitation) or vegetation",
        what: "Stabilize re-processed tailings to reduce dust and seepage for final closure",
        control: "Nutrient injection for MICP, vegetation establishment"
      }
    ],
    reality: [
      <>Historic tailings often contain <GlossaryTerm term="Critical Minerals" definition="Elements deemed essential to economic or national security and vulnerable to supply disruption">critical metals</GlossaryTerm> (Co, REEs, platinum group metals (PGMs)) that weren't economic to recover originally</>,
      <><GlossaryTerm term="Bioleaching" definition="Microbially mediated solubilization of metals from solids (ores, tailings, wastes)">Bioleaching</GlossaryTerm> avoids need to re-mine and rebuild processing infrastructure</>,
      "Time scale: Flexible - can be slow (years for heap-style) or moderate (weeks for tanks)",
      "Dual benefit: environmental remediation + resource recovery",
      "Regulatory advantage: improves closure outcomes while generating revenue"
    ],
    maturity: "Pilot to Early Commercial - case-by-case evaluation needed"
  },
  {
    id: 'amd-treatment',
    title: "AMD Treatment & Metal Recovery",
    type: "Environmental Bio-Application",
    description: <>Convert <GlossaryTerm term="Acid Mine Drainage (AMD)" definition="Acidic, metal-rich water produced when sulfide minerals in mine waste are exposed to air and water; often accelerated by microbial activity">acid mine drainage</GlossaryTerm> from liability to resource via biological treatment and selective metal recovery</>,
    diagram: <>{`[Acid Mine Drainage Source] (pH 2-4, dissolved Fe, Cu, Zn, Mn, Al, REEs)
   ↓
[Pre-treatment: Aeration & Settling] → Fe precipitates removed
   ↓
[SRB Bioreactor] `}<span className="text-emerald-600 font-bold">← (organic carbon, SRB inoculum)</span>{`
   ↓ sulfide production raises pH, precipitates metals
[Metal Sulfide Recovery]
   ├→ [Cu/Zn Sulfide Precipitate] → Smelter feedstock
   ├→ [Bioseparation for REEs] → REE concentrate
   └→ [Polishing] → Discharge or reuse
[Constructed Wetland (Optional)] → Final polishing, ecological habitat`}</>,
    bioIntegration: [
      {
        stage: "SRB Bioreactor",
        role: <><GlossaryTerm term="Sulfate-Reducing Bacteria (SRB)" definition="Bacteria that use sulfate as electron acceptor, producing sulfide">Sulfate-reducing bacteria</GlossaryTerm> (Desulfovibrio, Desulfotomaculum)</>,
        what: "Reduce sulfate to sulfide, which precipitates metals as metal sulfides and raises pH",
        control: "Anaerobic conditions, organic carbon (e.g., ethanol, molasses), retention time"
      },
      {
        stage: "Selective Metal Recovery",
        role: <><GlossaryTerm term="Bioseparation" definition="Use of biomolecules (proteins, peptides, polymers, whole cells) as selective sorbents or separation agents">Bioseparation</GlossaryTerm> or staged precipitation</>,
        what: "Selectively recover high-value metals (Cu, Zn, REEs) before bulk treatment",
        control: <>{`pH control for staged precipitation, biomolecular `}<GlossaryTerm term="Ligand" definition="A molecule that binds to a metal ion to form a complex">ligands</GlossaryTerm>{` for selectivity`}</>
      },
      {
        stage: "Constructed Wetland",
        role: "Mixed microbial communities + vegetation",
        what: "Final polishing for trace metals, ecological restoration, public acceptance",
        control: "Passive system, seasonal monitoring"
      }
    ],
    reality: [
      <><GlossaryTerm term="Acid Mine Drainage (AMD)" definition="Acidic, metal-rich water produced when sulfide minerals in mine waste are exposed to air and water; often accelerated by microbial activity">AMD</GlossaryTerm> is both environmental hazard and metal resource - contains Cu, Zn, Mn, REEs at recoverable concentrations</>,
      "Passive treatment (wetlands) proven for low-flow systems; bioreactors for higher flows",
      "Time scale: Hours to days (bioreactor); weeks (wetlands)",
      "Dual benefit: regulatory compliance + revenue from recovered metals",
      "Strongest case where discharge limits are tight or where critical metals (REEs) are present"
    ],
    maturity: "Medium-High - wetlands are proven; metal recovery from AMD is emerging"
  }
];

export default function Flowsheets() {
  const [openFlowsheets, setOpenFlowsheets] = useState(new Set());

  function toggleFlowsheet(key) {
    setOpenFlowsheets(prev => { const next = new Set(prev); next.has(key) ? next.delete(key) : next.add(key); return next; });
  }

  return (
    <CommentableContent pageName="flowsheets">

      <div className="min-h-screen py-8 px-12 space-y-6">

        {/* Box 1: Header */}
        <div className="flex gap-6 items-stretch">
          <div className="flex-1 bg-[#edede6] rounded-3xl px-10 shadow-xl border border-white flex flex-col justify-center h-80">
            <h1 className="text-4xl font-bold text-[#264563] mb-3 leading-tight">Example Flowsheets</h1>
            <p className="text-xl text-[#264563]">
              See how biology integrates into real mining operations — from proven commercial processes to emerging applications
            </p>
          </div>
          <div className="flex-1 rounded-3xl border-2 border-white shadow-xl" />
        </div>

        {/* Box 2: Content */}
        <div className="bg-[#edede6] rounded-3xl shadow-2xl p-8 md:p-12 border border-white">

          {/* What is a Flowsheet */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-[#264563] mb-3">What Is a Flowsheet?</h2>
            <p className="text-[#264563]">
              A <GlossaryTerm term="Flowsheet" definition="The standard mining industry term for a diagram showing how ore is processed from feed to final product through a sequence of unit operations">flowsheet</GlossaryTerm> is the standard mining industry term for a diagram showing how ore moves through each processing step to become saleable metal. It reveals where biology can plug in, what constraints exist (chemistry, time, scale), and whether biological innovations fit existing operations.
            </p>
          </div>

          {/* Flowsheets */}
          <div className="space-y-4">
            {flowsheetData.map(flowsheet => (
              <FlowsheetCard
                key={flowsheet.id}
                flowsheet={flowsheet}
                expanded={openFlowsheets.has(flowsheet.id)}
                onToggle={() => toggleFlowsheet(flowsheet.id)}
              />
            ))}
          </div>

          {/* Key Takeaway */}
          <div className="mt-8 bg-white rounded-xl p-6 border border-emerald-700">
            <h3 className="text-lg font-bold text-emerald-700 mb-2">Integration Patterns</h3>
            <p className="text-[#264563] text-sm mb-3">
              Notice the common patterns across these flowsheets:
            </p>
            <ul className="text-[#264563] text-sm space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600">•</span>
                <span><strong>Biology as a unit operation</strong> — integrated into larger flowsheets, not standalone</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600">•</span>
                <span><strong>Control parameters matter</strong> — pH, temperature, residence time, nutrients are critical</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600">•</span>
                <span><strong>Side-stream applications</strong> — polishing, impurity removal, water treatment add value without replacing main process</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600">•</span>
                <span><strong>Dual benefits</strong> — best cases combine economic value with environmental improvement</span>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex justify-between">
            <Link href="/" className="text-[#264563] hover:text-[#1e3450] flex items-center gap-2">
              ← Back to Home
            </Link>
            <Link href="/technology-evaluation" className="text-[#264563] hover:text-[#1e3450] flex items-center gap-2">
              Technology Assessment Checklists →
            </Link>
          </div>
        </div>

      </div>
    </CommentableContent>
  );
}

function FlowsheetCard({ flowsheet, expanded, onToggle }) {
  const typeColors = {
    "Classical Bio-Application":    "bg-[#264563]",
    "Proven Bio-Technology":        "bg-emerald-600",
    "Emerging Bio-Application":     "bg-amber-600",
    "Environmental Bio-Application": "bg-teal-600"
  };

  return (
    <div className="rounded-xl border-2 border-white overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full bg-[#264563] p-6 flex items-center justify-between hover:bg-[#1e3450] transition-colors text-left"
      >
        <div>
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${typeColors[flowsheet.type]}`}>
              {flowsheet.type}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold text-white/70 bg-white/10">
              {flowsheet.maturity}
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-1">{flowsheet.title}</h2>
          <p className="text-white/80 text-sm">{flowsheet.description}</p>
        </div>
        <div className="flex items-center gap-2 text-white/70 text-sm shrink-0 ml-4">
          <span>{expanded ? 'Click to collapse' : 'Click to expand'}</span>
          {expanded ? <ChevronDown className="w-5 h-5 text-white" /> : <ChevronRight className="w-5 h-5 text-white" />}
        </div>
      </button>

      {expanded && (
        <div className="bg-[#edede6] p-6 space-y-6">
          {/* Diagram */}
          <div>
            <h3 className="text-lg font-bold text-[#264563] mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-[#264563]" />
              Flowsheet Diagram
            </h3>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <pre className="text-[#264563] text-sm font-mono whitespace-pre-wrap overflow-x-auto">
                {flowsheet.diagram}
              </pre>
            </div>
          </div>

          {/* Bio Integration Points */}
          <div>
            <h3 className="text-lg font-bold text-[#264563] mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-emerald-600" />
              Biological Integration Points
            </h3>
            <div className="space-y-3">
              {flowsheet.bioIntegration.map((point, i) => (
                <div key={i} className="bg-white rounded-lg p-4 border border-emerald-700">
                  <h4 className="text-lg font-bold text-emerald-700 mb-2">{point.stage}</h4>
                  <div className="space-y-1 text-sm text-[#264563]">
                    <div><strong>Method:</strong> {point.role}</div>
                    <div><strong>What it does:</strong> {point.what}</div>
                    <div><strong>Levers and Controls:</strong> {point.control}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reality Check */}
          <div>
            <h3 className="text-lg font-bold text-[#264563] mb-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-[#264563]" />
              What You Need to Know
            </h3>
            <ul className="space-y-2">
              {flowsheet.reality.map((item, i) => (
                <li key={i} className="text-[#264563] text-sm flex items-start gap-2">
                  <span className="text-[#264563]" style={{marginTop: '-0.1em'}}>→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
