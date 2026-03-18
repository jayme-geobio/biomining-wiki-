'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight, Zap, Beaker, Droplets, Microscope, Target, Cpu } from 'lucide-react';
import CommentableContent from '../components/CommentableContent';
import GlossaryTerm from '../components/GlossaryTerm';



export default function WhatIsBiomining() {
  const [openSections, setOpenSections] = useState(new Set());

  function toggleSection(key) {
    setOpenSections(prev => { const next = new Set(prev); next.has(key) ? next.delete(key) : next.add(key); return next; });
  }

  return (
    <CommentableContent pageName="what-is-biomining">

      <div className="min-h-screen py-8 px-12 space-y-6">

        {/* Box 1: Header */}
        <div className="flex gap-6 items-stretch">
          <div className="flex-1 bg-[#edede6] rounded-3xl p-10 shadow-xl border border-white">
            <h1 className="text-4xl font-bold text-[#264563] mb-3 leading-tight">What Is "Biomining"?</h1>
            <p className="text-xl text-[#264563]">
              Definitions, mechanisms, and where biotech rivals chemistry
            </p>
          </div>
          <div className="flex-1 rounded-3xl border-2 border-white shadow-xl" />
        </div>

        {/* Box 2: Our Definition + Sections 1 & 2 */}
        <div className="bg-[#edede6] rounded-3xl shadow-2xl p-8 md:p-12 border border-white">
          {/* Definition */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-[#264563] mb-3">Our Definition</h2>
            <div className="text-[#264563] space-y-3">
              <p className="text-lg">
                "Biomining" is often shorthand for "bugs in heaps." That definition is <strong>too narrow</strong>.
              </p>
              <div className="rounded-lg p-4 border-l-4 border-[#264563] mt-4" style={{backgroundColor: 'rgba(255,255,255,0.5)'}}>
                <p className="text-[#264563] font-semibold">
                  For this wiki, <strong>biomining</strong> means:
                </p>
                <p className="text-[#264563] mt-2 text-lg italic">
                  Any use of biological mechanisms—cells, enzymes, proteins, plants, metabolites, or consortia—to aid
                  metal recovery, mineral processing, or the management of mining-related wastes and liabilities.
                </p>
              </div>
              <p className="mt-4">
                That definition includes <strong>cell-free proteins and separation modules</strong> as well as
                whole-cell systems. A viable industrial pathway will often combine several mechanisms in
                <strong> hybrid </strong><GlossaryTerm term="Flowsheet" definition="A diagram or sequence of unit operations showing how ore is processed from feed to final product">flowsheets</GlossaryTerm>.
              </p>
            </div>
          </div>

          {/* Mechanisms */}
          <Section
            title="1. Biological Mechanisms in Mining"
            icon={Microscope}
            expanded={openSections.has('mechanisms')}
            onToggle={() => toggleSection('mechanisms')}
          >
            <div className="space-y-4">
              <MechanismCard
                number="1"
                title={<GlossaryTerm term="Bioleaching" definition="Microbially mediated solubilization of metals from solids (ores, tailings, wastes)">Bioleaching</GlossaryTerm>}
                description="Extraction or liberation of metals from ores or wastes via microbial activity, moving metals into solution"
                details="Mechanisms include acid generation, redox cycling, and ligand production"
                icon={Droplets}
                color="blue"
              />
              <MechanismCard
                number="2"
                title={<GlossaryTerm term="Biooxidation" definition="Microbially driven oxidation of sulfides where the valuable metal remains in the solid phase">Biooxidation</GlossaryTerm>}
                description="Microbial oxidation of sulfide minerals where the valuable metal remains solid but becomes accessible to downstream processing"
                details="Classically used for refractory gold. Often deployed as a pre-treatment prior to cyanidation"
                icon={Zap}
                color="amber"
              />
              <MechanismCard
                number="3"
                title={<><GlossaryTerm term="Bioseparation" definition="Use of biomolecules (proteins, peptides, polymers, whole cells) as selective sorbents or separation agents">Bioseparation</GlossaryTerm> and <GlossaryTerm term="Biosorption" definition="Sorption of dissolved metals onto biomass or extracellular polymeric substances (EPS)">Biosorption</GlossaryTerm></>}
                description="Binding of metals to biomolecules, enabling separation and concentration from complex mixtures"
                details={<>Includes <GlossaryTerm term="Metallophores / Siderophores" definition="Small molecules secreted by microbes that chelate metals with high affinity">metallophores</GlossaryTerm>, <GlossaryTerm term="Metallophores / Siderophores" definition="Small molecules secreted by microbes that chelate metals with high affinity">siderophore</GlossaryTerm>-like ligands, engineered binding proteins, cell-free proteins, peptides, polymers, phytomining, bio-based resins, and membranes</>}
                icon={Target}
                color="emerald"
              />
              <MechanismCard
                number="4"
                title="Bioprecipitation and Controlled Mineral Formation"
                description="Microbially driven precipitation of minerals that concentrate or immobilize metals, enabling their recovery or stabilization"
                details="Includes biomineralization, biocement, and microbially induced mineral formation (e.g., metal sulfides, carbonates, phosphates)"
                icon={Beaker}
                color="teal"
              />
              <MechanismCard
                number="5"
                title="Monitoring and Control (Biosensing)"
                description="Biological tools for sensing metals, redox state, or specific analytes to monitor mining systems and inform process control"
                details="Functional community metrics and molecular assays that serve as early-warning indicators and inform process control"
                icon={Cpu}
                color="sky"
              />
            </div>
          </Section>

          {/* Where Biotech Excels */}
          <Section
            title="2. Where Biotech Rivals Chemistry"
            icon={Zap}
            expanded={openSections.has('excel')}
            onToggle={() => toggleSection('excel')}
          >
            <div className="space-y-3">
              <p className="text-[#264563] mb-4">
                Biotech's value proposition is not that biology can do everything. It is that biology does certain
                things <strong>exceptionally well under complex constraints</strong>:
              </p>
              <AdvantageCard
                title="Redox Catalysis"
                items={[
                  "Microbes drive oxidation-reduction cycles (e.g., Fe²⁺ ↔ Fe³⁺, S⁰ ↔ sulfate) efficiently and regeneratively",
                  "Potential to reduce the amount of external oxidant-reductant required"
                ]}
              />
              <AdvantageCard
                title="Chelation and Complexation"
                items={[
                  <><GlossaryTerm term="Metallophores / Siderophores" definition="Small molecules secreted by microbes that chelate metals with high affinity">Metallophores</GlossaryTerm>, <GlossaryTerm term="Metallophores / Siderophores" definition="Small molecules secreted by microbes that chelate metals with high affinity">siderophore</GlossaryTerm>-like ligands, and engineered chelators show high affinity and selectivity</>,
                  "Can operate in complex aqueous mixtures and at low metal concentrations where traditional extractants face challenges"
                ]}
              />
              <AdvantageCard
                title="Binding Selectivity"
                items={[
                  "Proteins and biopolymers act as 'molecular coin sorters', discriminating between metals with similar chemistry",
                  "Critical for rare earth elements, PGMs, and complex polymetallic streams"
                ]}
              />
              <AdvantageCard
                title="Mineral Transformation and Precipitation"
                items={[
                  "Biomineralization and biocement enable controlled precipitation of metal sulfides and carbonates",
                  "Useful for both recovery and stabilization of wastes"
                ]}
              />
              <AdvantageCard
                title="Adaptation"
                items={[
                  "Systems that can evolve toward function—design the ecosystem, not just the strain",
                  "Adaptive communities can tune performance over time within an operating envelope"
                ]}
              />
              <div className="bg-emerald-600 rounded-lg p-5 border border-emerald-600 mt-6">
                <p className="text-white">
                  <strong>Biotech's strongest foothold:</strong> <Link href="/complex-materials" className="underline hover:text-white/80">Complex materials</Link> and operating conditions
                  where conventional solutions are too costly, too carbon-intensive, or too permitting-constrained to scale.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* Box 3: The Bottom Line */}
        <div className="bg-[#edede6] rounded-3xl shadow-2xl p-8 md:p-12 border border-white">
          <h2 className="text-xl font-bold text-[#264563] mb-3">The Bottom Line</h2>
          <div className="text-[#264563] space-y-3">
            <p>
              Biomining is <strong>not a replacement for mines</strong>. It's a <strong>toolkit of modules</strong> that
              can plug into existing <GlossaryTerm term="Flowsheet" definition="A diagram or sequence of unit operations showing how ore is processed from feed to final product">flowsheets</GlossaryTerm> where:
            </p>
            <ul className="ml-6 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1">•</span>
                <span>Complexity makes conventional chemistry expensive, blunt, or risky</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1">•</span>
                <span>Selectivity, adaptation, or operation under milder conditions offer strategic advantages</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1">•</span>
                <span>Environmental outcomes (closure, water quality, social licence) add value beyond metal recovery</span>
              </li>
            </ul>
            <p className="mt-4 font-semibold text-[#264563]">
              These modules are judged on the same metrics as any other process: $/tonne, % recovery, impurity removal,
              risk, permitting footprint, and closure outcomes.
            </p>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex justify-between">
            <Link href="/" className="text-[#264563] hover:text-[#264563] flex items-center gap-2">
              ← Back to Home
            </Link>
            <Link href="/glossary" className="text-[#264563] hover:text-[#264563] flex items-center gap-2">
              Glossary →
            </Link>
          </div>
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
        className="w-full bg-[#264563] p-6 flex items-center justify-between hover:bg-[#264563]/80 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Icon className="w-6 h-6 text-white" />
          <h2 className="text-xl font-bold text-white">{title}</h2>
        </div>
        {expanded ? <ChevronDown className="w-6 h-6 text-white" /> : <ChevronRight className="w-6 h-6 text-white" />}
      </button>
      {expanded && (
        <div className="bg-[#edede6] p-6 border-t border-white/20">
          {children}
        </div>
      )}
    </div>
  );
}

function MechanismCard({ number, title, description, details, icon: Icon, color }) {
  const iconColors = {
    blue:    'text-[#264563]',
    amber:   'text-amber-500',
    emerald: 'text-emerald-500',
    teal:    'text-teal-500',
    sky:     'text-sky-500',
  };

  return (
    <div className="rounded-lg p-5 border-2 border-[#264563]/20 bg-white">
      <div className="flex items-start gap-3 mb-3">
        <div className="flex items-center gap-2 pt-0.5">
          <span className="text-[#264563] font-bold text-lg">{number}.</span>
          <Icon className={`w-6 h-6 ${iconColors[color]}`} />
        </div>
        <div className="flex-1">
          <h3 className={`text-lg font-bold mb-2 ${iconColors[color]}`}>{title}</h3>
          <p className="text-[#264563] text-sm mb-2">{description}</p>
          <p className="text-[#264563]/70 text-sm italic">{details}</p>
        </div>
      </div>
    </div>
  );
}

function AdvantageCard({ title, items }) {
  return (
    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
      <h4 className="text-lg font-bold text-[#264563] mb-2">{title}</h4>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="text-[#264563] text-sm flex items-start gap-2">
            <span className="text-emerald-600">→</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
