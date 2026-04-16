'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight, Mountain, Factory, Beaker, AlertCircle, TrendingUp, Clock, Droplets, FileCheck } from 'lucide-react';
import CommentableContent from '../components/CommentableContent';
import GlossaryTerm from '../components/GlossaryTerm';
import TableOfContents from '../components/TableOfContents';
import PageNavigation from '../components/PageNavigation';



export default function ForBiologists() {
  const [openSections, setOpenSections] = useState(new Set());

  function toggleSection(key) {
    setOpenSections(prev => { const next = new Set(prev); next.has(key) ? next.delete(key) : next.add(key); return next; });
  }

  return (
    <CommentableContent pageName="for-biologists">

      <div className="min-h-screen pt-4 pb-6 max-w-6xl mx-auto px-4 space-y-6">

        {/* Box 1: Header */}
        <div className="flex gap-6 items-stretch">
          <div className="flex-[2] bg-[#edede6] rounded-3xl px-6 sm:px-10 shadow-xl border border-white flex flex-col justify-center py-10">
            <h1 className="text-2xl sm:text-4xl font-bold text-[#264563] mb-3 leading-tight">Mining 101</h1>
            <p className="text-base font-extralight text-[#264563]">
            To deploy biology in mining, you need to understand where it fits in the mining value chain
            </p>
          </div>
          <TableOfContents />
        </div>

        {/* Box 2: Definition + Sections */}
        <div className="bg-[#edede6] rounded-3xl shadow-2xl p-5 sm:p-8 md:p-12 border border-white">

          {/* Why This Matters */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#264563] mb-3">
              Why Biologists Need to Understand Mining
            </h2>
            <div className="text-[#264563] space-y-3">
              <p>
                From the mining side, <strong>"biomining" is not a magical stand-alone box</strong>. It's a candidate
                step in a tightly constrained value chain where:
              </p>
              <ul className="ml-6 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#264563]" style={{marginTop: '-0.1em'}}>•</span>
                  Rock is moved at a scale of <strong>billions of tonnes per year</strong>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#264563]" style={{marginTop: '-0.1em'}}>•</span>
                  Margins can be thin and metal prices are volatile
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#264563]" style={{marginTop: '-0.1em'}}>•</span>
                  Timelines, water availability, and permitting often matter as much as chemistry
                </li>
              </ul>
              <p className="mt-4 font-semibold">
                This guide helps place biological ideas within real mining processes while learning to speak the language of mining engineers.
              </p>
            </div>
          </div>

        </div>

        {/* Sections */}
        <div className="bg-[#edede6] rounded-3xl shadow-2xl p-5 sm:p-8 md:p-12 border border-white">
          <h2 className="text-2xl font-bold text-[#264563] mb-6">Mining Operations & Constraints</h2>
          <Section
            title="Mining Value Chain - Stage by Stage"
            icon={Factory}
            expanded={openSections.has('stages')}
            onToggle={() => toggleSection('stages')}
          >
            <div className="space-y-6">
              <StageCard
                number="1"
                title="Exploration & Resource Definition"
                color="blue"
                what={<>Geologists find and characterize ore bodies through geologic mapping, core drilling, and lab assays to measure <GlossaryTerm term="Grade" definition="Concentration of a valuable element or mineral in ore">grade</GlossaryTerm> and mineralogy.</>}
                whyBiology={[
                  "New bio-technologies can change which parts of a deposit are considered 'ore'",
                  "Enable recovery of critical by-product elements currently ignored",
                  "Bio-assays and biosensors help geologists explore and identify favorable geochemistry"
                ]}
                whereBio={[
                  "Biosensors for exploration",
                  "Resource models that incorporate bioprocess options"
                ]}
              />

              <StageCard
                number="2"
                title="Mine Planning & Development"
                color="amber"
                what={<>Planners choose a mining method (<GlossaryTerm term="Open Pit Mine" definition="A surface mining method where ore is extracted from a large, open excavation on the earth's surface">open pit</GlossaryTerm> vs <GlossaryTerm term="Underground Mine" definition="A mining method where ore is extracted through tunnels and shafts beneath the earth's surface">underground</GlossaryTerm> — based on ore body depth, shape, and grade), mine layout, and material routing to ore stockpiles, low-grade stockpiles, waste dumps, or <GlossaryTerm term="Tailings" definition="Fine-grained residues after metal extraction; typically stored in engineered impoundments">tailings</GlossaryTerm>.</>}
                whyBiology={[
                  "Decisions here govern tonnage, time, and access for biomining",
                  <>Long-residence-time bio-processes best suited for stockpiles, <GlossaryTerm term="Tailings" definition="Fine-grained residues after metal extraction; typically stored in engineered impoundments">tailings</GlossaryTerm>, or <GlossaryTerm term="Acid Mine Drainage (AMD)" definition="Acidic, metal-rich water produced when sulfide minerals in mine waste are exposed to air and water; often accelerated by microbial activity">AMD</GlossaryTerm></>,
                  "Include bio-recovery in closure plans from day one"
                ]}
                whereBio={[
                  "Flowsheet design with bio-process options",
                  "Biologically compatible stockpile design",
                  "In-situ bio-recovery feasibility",
                  "Bioremediation and bio-recovery in closure plans"
                ]}
              />

              <StageCard
                number="3"
                title="Mining: Moving Rock at Massive Scale"
                color="emerald"
                what={<>Crews drill, blast, load, and haul rock at a scale of tens to hundreds of thousands of tonnes per day. <strong className="font-semibold">This is equivalent to 2,000 to 15,000 elephants&apos; worth of rock every day!</strong><br /><br /><strong className="font-semibold">What gets moved isn&apos;t uniform material — ore bodies are often extremely geologically and mineralogically complex.</strong> Once mined, rock is sorted by grade:<ul className="ml-5 my-2 list-none space-y-0.5"><li>high-grade ore → processing</li><li>low-grade → stockpiles</li><li>waste → dumps</li></ul>The boundary where high-value material ends and low-grade <GlossaryTerm term="Gangue" definition="Waste minerals in ore that have no commercial value and are separated out during processing">gangue</GlossaryTerm> begins is never clean in nature. Grade control always involves tradeoffs between diluted material reaching processing and valuable ore that never does.</>}
                whyBiology={[
                  "Input material isn't pure - it's stressed, mixed, partially oxidized rock whose complex mineralogy significantly affects biomining effectiveness",
                  "The scale of rock movement is enormous — biological technologies must be designed for such scale",
                  "Biomining opportunities in waste rejection and ROM (run-of-mine) upgrading are missed when mining decisions happen without a clear proposed bio path"
                ]}
                whereBio={[
                  <><GlossaryTerm term="In-stope Leaching">In-stope leaching</GlossaryTerm> (injecting solutions into fractured zones)</>,
                  <><GlossaryTerm term="Biomineralization">MICP-based ground stabilization and dust suppression</GlossaryTerm></>
                ]}
              />

              <StageCard
                number="4"
                title="Comminution"
                color="teal"
                what="Rock is crushed and ground to liberate minerals and increase surface area for downstream processing."
                whyBiology={[
                  <><GlossaryTerm term="Comminution" definition="The process of crushing and grinding ore to reduce particle size and liberate valuable minerals">Comminution</GlossaryTerm> is often the most energy-intensive step in mining</>,
                  "Separation efficiency strongly depends on mineral surface chemistry and particle size",
                  "Biology that allows coarser processing without sacrificing recovery is extremely valuable"
                ]}
                whereBio={[
                  "Bio-assisted comminution (microbes weakening grain boundaries)"
                ]}
              />

              <StageCard
                number="5"
                title="Concentration & Leaching"
                color="sky"
                footerNote={<>Stages 5 &amp; 6 are sometimes collectively called <strong>&apos;mineral processing&apos;</strong></>}
                what={<>Metals are either concentrated using flotation, gravity, or magnetic separation, or extracted by leaching into solution. These routes produce either <GlossaryTerm term="Concentrate" definition="The product of mineral processing that contains a higher concentration of valuable minerals than the original ore, produced by removing gangue through flotation, gravity, or magnetic separation">concentrate</GlossaryTerm> or a metal-bearing leach solution, often called a <GlossaryTerm term="Pregnant Leach Solution (PLS)" definition="The metal-bearing solution produced when a lixiviant dissolves target metals from ore during leaching">pregnant leach solution (PLS)</GlossaryTerm>.</>}
                whyBiology={[
                  <>Mineral surface chemistry governs <GlossaryTerm term="Froth Flotation" definition="A separation process that uses air bubbles and chemical reagents to selectively float target minerals to the surface for collection">flotation</GlossaryTerm> selectivity and <GlossaryTerm term="Leach" definition="The process of dissolving metals or minerals from ore using a chemical solution (lixiviant)">leach</GlossaryTerm> kinetics</>,
                  "Biology can modify mineral surfaces to improve or suppress flotation of specific minerals",
                  <><GlossaryTerm term="Bioleaching" definition="Microbially mediated solubilization of metals from solids (ores, tailings, wastes)">Bioleaching</GlossaryTerm> can replace or supplement chemical leaching for sulfide ores</>
                ]}
                whereBio={[
                  "Bio-modification of mineral surfaces to improve flotation or separation",
                  <>Bioleaching/<GlossaryTerm term="Biooxidation" definition="Microbially driven oxidation of sulfides where the valuable metal remains in the solid phase">biooxidation</GlossaryTerm> for direct metal extraction</>,
                ]}
              />

              <StageCard
                number="6"
                title="Metallurgy & Refining"
                color="violet"
                footerNote={<>Stages 5 &amp; 6 are sometimes collectively called <strong>&apos;mineral processing&apos;</strong></>}
                what={<><GlossaryTerm term="Concentrate" definition="The product of mineral processing that contains a higher concentration of valuable minerals than the original ore, produced by removing gangue through flotation, gravity, or magnetic separation">Concentrates</GlossaryTerm> or metal-bearing solutions are converted into saleable products via <GlossaryTerm term="Hydrometallurgy" definition="Metal extraction and recovery using aqueous (water-based) chemistry, including leaching, solvent extraction, and electrowinning">hydrometallurgy</GlossaryTerm> (precipitation, <GlossaryTerm term="Solvent Extraction (SX)" definition="A hydrometallurgical process that uses organic solvents to selectively transfer target metal ions from a leach solution into a separate phase for purification and concentration">SX</GlossaryTerm>, <GlossaryTerm term="Ion Exchange (IX)" definition="A process using resin beads to selectively capture and release metal ions from solution for purification or concentration">IX</GlossaryTerm>, <GlossaryTerm term="Electrowinning (EW)" definition="Electrochemical process that plates dissolved metal ions onto cathodes to produce pure metal">EW</GlossaryTerm>) or <GlossaryTerm term="Pyrometallurgy" definition="Metal extraction and refining using high-temperature processes such as smelting, roasting, and converting">pyrometallurgy</GlossaryTerm> (<GlossaryTerm term="Smelting" definition="A pyrometallurgical process using high temperatures to separate metal from ore">smelting</GlossaryTerm>, refining).</>}
                whyBiology={[
                  "Impurities and purity thresholds are critical — small contamination can wreck downstream processes",
                  <>Biology offers highly selective <GlossaryTerm term="Ligand" definition="A molecule that binds to a metal ion to form a complex">ligands</GlossaryTerm> under mild operating conditions</>
                ]}
                whereBio={[
                  <><GlossaryTerm term="Bioseparation" definition="Use of biomolecules (proteins, peptides, polymers, whole cells) as selective sorbents or separation agents">Bioseparations</GlossaryTerm> for polishing and capturing critical co-products</>,
                  <><GlossaryTerm term="Sulfate-Reducing Bacteria (SRB)" definition="Bacteria that use sulfate as electron acceptor, producing sulfide">SRB</GlossaryTerm> reactors for treating <GlossaryTerm term="Bleed Stream" definition="A portion of circulating process solution that is diverted for treatment, purging of impurities, or metal recovery">bleed streams</GlossaryTerm></>
                ]}
              />

              <StageCard
                number="7"
                title="Waste, Water & Closure"
                color="rose"
                what={<>Operators manage <GlossaryTerm term="Tailings" definition="Fine-grained residues after metal extraction; typically stored in engineered impoundments">tailings</GlossaryTerm> storage, <GlossaryTerm term="Mine Waste" definition="All non-valuable material removed during mining, including waste rock, overburden, and tailings">waste-rock dumps</GlossaryTerm>, water systems, and long-term closure obligations.</>}
                whyBiology={[
                  <><GlossaryTerm term="Acid Mine Drainage (AMD)" definition="Acidic, metal-rich water produced when sulfide minerals in mine waste are exposed to air and water; often accelerated by microbial activity">Acid mine drainage</GlossaryTerm> and seepage can persist for decades</>,
                  "This is where liability and social license live",
                  "Most mature biological applications are in this space"
                ]}
                whereBio={[
                  <>Constructed wetlands and <GlossaryTerm term="Sulfate-Reducing Bacteria (SRB)" definition="Bacteria that use sulfate as electron acceptor, producing sulfide">SRB</GlossaryTerm> reactors for <GlossaryTerm term="Acid Mine Drainage (AMD)" definition="Acidic, metal-rich water produced when sulfide minerals in mine waste are exposed to air and water; often accelerated by microbial activity">AMD</GlossaryTerm></>,
                  <>Treating <GlossaryTerm term="Acid Mine Drainage (AMD)" definition="Acidic, metal-rich water produced when sulfide minerals in mine waste are exposed to air and water; often accelerated by microbial activity">AMD</GlossaryTerm> and <GlossaryTerm term="Tailings" definition="Fine-grained residues after metal extraction; typically stored in engineered impoundments">tailings</GlossaryTerm> as a resource (recover Cu, Zn, <GlossaryTerm term="Rare Earth Elements (REEs)" definition="A group of 17 metallic elements critical for electronics, magnets, batteries, and other high-tech applications">REEs</GlossaryTerm>)</>,
                  "Using former mine sites as test beds for new tech"
                ]}
              />
            </div>
          </Section>

          <Section
            title="Constraints That Shape Bio-Adoption"
            icon={AlertCircle}
            expanded={openSections.has('constraints')}
            onToggle={() => toggleSection('constraints')}
          >
            <div className="space-y-4">
              <ConstraintCard
                title="Time"
                icon={Clock}
                description="Operations expect fast processing times - often hours to days, not months to years (except in heap or dump leaching)"
                implication={<>If your process is slow, consider treating stockpiles, <GlossaryTerm term="Tailings" definition="Fine-grained residues after metal extraction; typically stored in engineered impoundments">tailings</GlossaryTerm>, or <GlossaryTerm term="Acid Mine Drainage (AMD)" definition="Acidic, metal-rich water produced when sulfide minerals in mine waste are exposed to air and water; often accelerated by microbial activity">AMD</GlossaryTerm> where slow is acceptable, or use biology to polish/condition streams</>}
              />
              <ConstraintCard
                title="Throughput & Scale"
                icon={TrendingUp}
                description="Mid-size mines process tens of millions of tonnes of ore annually."
                implication="Be explicit about scale. Side-stream bio-units are more realistic early targets than whole-plant replacements"
              />
              <ConstraintCard
                title="Process Integration & Risk"
                icon={AlertCircle}
                description="Mines are complex, coupled systems. Unexpected downtime is extremely expensive"
                implication="Design 'safe failure' modes with bypass options, emphasizing instrumentation and control. Provide clear lab → pilot → demonstration pathways"
              />
              <ConstraintCard
                title="Water, Reagents & Permitting"
                icon={Droplets}
                description={<>Water is often constrained. <GlossaryTerm term="Reagent" definition="A substance that acts on another in a chemical reaction">Reagents</GlossaryTerm> have costs, hazards, and permitting implications</>}
                implication={<>Bio-solutions that reduce net <GlossaryTerm term="Reagent" definition="A substance that acts on another in a chemical reaction">reagent</GlossaryTerm> use, enable higher water recycling, or simplify permitting have extra strategic value</>}
              />
            </div>
          </Section>

          {/* Navigation */}
          <PageNavigation />
        </div>

      </div>
    </CommentableContent>
  );
}

function Section({ title, icon: Icon, expanded, onToggle, children }) {
  return (
    <div className="rounded-xl mb-4 border-2 border-white overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full bg-[#264563] p-6 flex items-center justify-between hover:bg-[#1e3450] transition-colors"
      >
        <div className="flex items-center gap-3">
          <Icon className="w-6 h-6 text-white" />
          <h2 className="text-lg font-bold text-white">{title}</h2>
        </div>
        <div className="flex items-center gap-2 text-white/70 text-sm shrink-0">
          <span>{expanded ? 'Click to collapse' : 'Click to expand'}</span>
          {expanded ? <ChevronDown className="w-5 h-5 text-white" /> : <ChevronRight className="w-5 h-5 text-white" />}
        </div>
      </button>
      {expanded && (
        <div className="bg-[#edede6] p-6 border-t border-white/20">
          {children}
        </div>
      )}
    </div>
  );
}

function StageCard({ number, title, subtitle, footerNote, color, what, whyBiology, whereBio }) {
  const colorClasses = {
    blue:    'text-blue-600',
    amber:   'text-amber-500',
    emerald: 'text-emerald-500',
    teal:    'text-teal-500',
    sky:     'text-sky-500',
    violet:  'text-violet-500',
    rose:    'text-rose-500',
  };
  const borderClasses = {
    blue:    'border-blue-600',
    amber:   'border-amber-500',
    emerald: 'border-emerald-500',
    teal:    'border-teal-500',
    sky:     'border-sky-500',
    violet:  'border-violet-500',
    rose:    'border-rose-500',
  };
  const colorClass = colorClasses[color] || 'text-[#264563]';
  const borderClass = borderClasses[color] || 'border-emerald-700';

  return (
    <div className={`relative bg-white rounded-lg p-5 border ${borderClass}`}>
      <div className="mb-3">
        <div className="flex items-center gap-2">
          <span className={`font-bold text-lg ${colorClass}`}>{number}.</span>
          <h3 className={`text-lg font-bold ${colorClass}`}>{title}</h3>
        </div>
        {subtitle && (
          <p className="text-xs italic text-[#264563]/70 mt-0.5">{subtitle}</p>
        )}
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-semibold text-[#264563] mb-1">What it is:</h4>
        <p className="text-[#264563] text-sm">{what}</p>
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-semibold text-[#264563] mb-2">Why it matters to biologists:</h4>
        <ul className="space-y-1">
          {whyBiology.map((item, i) => (
            <li key={i} className="text-[#264563] text-sm flex items-start gap-2">
              <span className="text-[#264563]" style={{marginTop: '-0.1em'}}>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={`bg-gray-50 rounded p-3 border ${borderClass}`}>
        <h4 className={`text-sm font-semibold ${colorClass} mb-2`}>Where biology might plug in:</h4>
        <ul className={whereBio.length > 2 ? 'grid grid-cols-2 gap-x-4 gap-y-1' : 'space-y-1'}>
          {whereBio.map((item, i) => (
            <li key={i} className={`${colorClass} text-sm flex items-start gap-2`}>
              <span className={colorClass}>→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      {footerNote && (
        <p className="mt-4 text-right text-sm text-[#264563]/60">{footerNote}</p>
      )}
    </div>
  );
}

function ConstraintCard({ title, icon: Icon, description, implication }) {
  return (
    <div className="bg-white rounded-lg p-5 border border-emerald-700">
      <div className="flex items-center gap-2 mb-2">
        <Icon className="w-5 h-5 text-[#264563]" />
        <h3 className="text-lg font-bold text-[#264563]">{title}</h3>
      </div>
      <p className="text-[#264563] text-sm mb-3">{description}</p>
      <div className="bg-emerald-50 rounded p-3 border-l-4 border-emerald-600">
        <p className="text-[#264563] text-sm">
          <strong>Implication:</strong> {implication}
        </p>
      </div>
    </div>
  );
}
