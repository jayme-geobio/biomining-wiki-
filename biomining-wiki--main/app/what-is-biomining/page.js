'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight, Zap, Beaker, Droplets, Microscope, Target, Cpu } from 'lucide-react';
import CommentableContent from '../components/CommentableContent';

export default function WhatIsBiomining() {
  const [expandedSection, setExpandedSection] = useState(null);

  return (
    <CommentableContent pageName="what-is-biomining">
      <div className="min-h-screen py-8 px-12 space-y-6">

        {/* Box 1: Header */}
        <div className="flex gap-6 items-stretch">
          <div className="flex-1 bg-[#edede6] rounded-3xl p-10 shadow-xl border border-white">
            <h1 className="text-4xl font-bold text-[#264563] mb-3 leading-tight">What Is "Biomining"?</h1>
            <p className="text-xl text-[#264563]">
              Definitions, mechanisms, and where biotech outcompetes chemistry
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
                  Any use of biological mechanisms—cells, enzymes, proteins, metabolites, or consortia—to aid
                  metal recovery, mineral processing, or the management of mining-related wastes and liabilities.
                </p>
              </div>
              <p className="mt-4">
                That definition includes <strong>cell-free proteins and separation modules</strong> as well as
                whole-cell systems. A viable industrial pathway will often combine several mechanisms in
                <strong> hybrid </strong><Link href="/flowsheets" className="font-bold underline hover:text-[#264563]/70 transition-colors">flowsheets</Link>.
              </p>
            </div>
          </div>

          {/* Mechanisms */}
          <Section
            title="1. Biological Mechanisms in Mining"
            icon={Microscope}
            expanded={expandedSection === 'mechanisms'}
            onToggle={() => setExpandedSection(expandedSection === 'mechanisms' ? null : 'mechanisms')}
          >
            <div className="space-y-4">
              <MechanismCard
                number="1"
                title="Bioleaching"
                description="Extraction or liberation of metals from ores or wastes via microbial activity, moving metals into an aqueous phase"
                details="Mechanisms include acid generation, redox cycling, and ligand production"
                icon={Droplets}
                color="blue"
              />
              <MechanismCard
                number="2"
                title="Biooxidation"
                description="Microbial oxidation of sulfide minerals where the valuable metal remains solid but becomes accessible to downstream processing"
                details="Classically used for refractory gold. Often deployed as a pre-treatment prior to cyanidation"
                icon={Zap}
                color="amber"
              />
              <MechanismCard
                number="3"
                title="Bioseparation and Biosorption"
                description="Use of biomolecules for separation and concentration of metals"
                details="Includes metallophores, siderophore-like ligands, engineered binding proteins, cell-free proteins, peptides, polymers, whole cells, bio-based resins, and membranes"
                icon={Target}
                color="emerald"
              />
              <MechanismCard
                number="4"
                title="Bioprecipitation and Controlled Mineral Formation"
                description="Microbially driven precipitation of minerals that immobilize or concentrate metals"
                details="Includes biomineralization, biocement, and microbially induced calcite or sulfate minerals (e.g., metal sulfides, carbonates, phosphates)"
                icon={Beaker}
                color="teal"
              />
              <MechanismCard
                number="5"
                title="Monitoring and Control (Biosensing)"
                description="Biological tools for sensing metals, redox state, or specific analytes"
                details="Functional community metrics and molecular assays that serve as early-warning indicators or control signals for process management"
                icon={Cpu}
                color="sky"
              />
            </div>
          </Section>

          {/* Where Biotech Excels */}
          <Section
            title="2. Where Biotech Outcompetes Chemistry"
            icon={Zap}
            expanded={expandedSection === 'excel'}
            onToggle={() => setExpandedSection(expandedSection === 'excel' ? null : 'excel')}
          >
            <div className="space-y-3">
              <p className="text-[#264563] mb-4">
                Biotech's value proposition is not that biology can do everything. It is that biology does certain
                things <strong>exceptionally well under complex constraints</strong>:
              </p>
              <AdvantageCard
                title="Redox Catalysis"
                items={[
                  "Microbes drive oxidation/reduction cycles (e.g., Fe²⁺ ↔ Fe³⁺, S⁰ ↔ sulfate) efficiently and regeneratively",
                  "Potential to reduce external oxidant/reductant requirements"
                ]}
              />
              <AdvantageCard
                title="Chelation and Complexation"
                items={[
                  "Metallophores, siderophore-like ligands, and engineered chelators show high affinity and selectivity",
                  "Can operate in aqueous conditions where traditional extractants struggle"
                ]}
              />
              <AdvantageCard
                title="Binding Selectivity"
                items={[
                  "Proteins and biopolymers as 'molecular coin sorters'",
                  "Discriminate between metals with similar chemistry",
                  "Critical for rare earth elements, PGMs, and complex polymetallic streams"
                ]}
              />
              <AdvantageCard
                title="Mineral Transformation and Precipitation"
                items={[
                  "Biomineralization and biocement for controlled precipitation",
                  "Selective metal sulfides, carbonates",
                  "Useful for both recovery and stabilization of wastes"
                ]}
              />
              <AdvantageCard
                title="Adaptation"
                items={[
                  "Systems that can evolve toward function—design the ecology, not just the strain",
                  "Adaptive communities can tune performance over time within an operating envelope"
                ]}
              />
              <div className="bg-emerald-600 rounded-lg p-5 border border-emerald-600 mt-6">
                <p className="text-white">
                  <strong>Biotech's strongest foothold:</strong> Complex materials and complex conditions,
                  where conventional solutions are too costly, too carbon-intensive, or too permitting-sensitive to scale.
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
              can plug into existing <Link href="/flowsheets" className="underline hover:text-[#264563]/70 transition-colors">flowsheets</Link> where:
            </p>
            <ul className="ml-6 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1">•</span>
                <span>Complexity makes conventional chemistry expensive, blunt, or risky</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1">•</span>
                <span>Selectivity, adaptation, or mild conditions offer strategic advantages</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1">•</span>
                <span>Environmental benefits (closure, water quality, social licence) add value beyond metal recovery</span>
              </li>
            </ul>
            <p className="mt-4 font-semibold text-[#264563]">
              These modules are judged on the same metrics as anything else: $/tonne, % recovery, impurity removal,
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
          <h3 className={`text-lg font-semibold mb-2 ${iconColors[color]}`}>{title}</h3>
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
      <h4 className="font-semibold text-[#264563] mb-2">{title}</h4>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="text-[#264563] text-sm flex items-start gap-2">
            <span className="text-emerald-600 mt-1">→</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
