'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight, Zap, Beaker, Droplets, Microscope, Target, Cpu } from 'lucide-react';
import CommentableContent from '../components/CommentableContent';

export default function WhatIsBiomining() {
  const [expandedSection, setExpandedSection] = useState(null);

  return (
    <CommentableContent pageName="what-is-biomining">
      <div className="min-h-screen py-8 px-6">
        <div className="max-w-5xl mx-auto bg-[#ededed] rounded-3xl shadow-2xl p-8 md:p-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">What Is "Biomining"?</h1>
          <p className="text-xl text-[#264563] max-w-3xl mx-auto">
            Definitions, mechanisms, and where biotech outcompetes chemistry
          </p>
        </div>

        {/* Definition */}
        <div className="bg-[#264563]/10 border-2 border-[#264563]/30 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-[#264563] mb-3">Our Definition</h2>
          <div className="text-[#264563] space-y-3">
            <p className="text-lg">
              "Biomining" is often shorthand for "bugs in heaps." That definition is <strong>too narrow</strong>.
            </p>
            <div className="bg-[#264563]/10 rounded-lg p-4 border-l-4 border-[#264563] mt-4">
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
              <strong> hybrid flowsheets</strong>.
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
              color="purple"
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
              color="blue"
            />

            <MechanismCard
              number="5"
              title="Monitoring and Control (Biosensing)"
              description="Biological tools for sensing metals, redox state, or specific analytes"
              details="Functional community metrics and molecular assays that serve as early-warning indicators or control signals for process management"
              icon={Cpu}
              color="violet"
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
            <p className="text-gray-700 mb-4">
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

            <div className="bg-emerald-50 rounded-lg p-5 border border-emerald-200 mt-6">
              <p className="text-emerald-800">
                <strong>Biotech's strongest foothold:</strong> Complex materials and complex conditions,
                where conventional solutions are too costly, too carbon-intensive, or too permitting-sensitive to scale.
              </p>
            </div>
          </div>
        </Section>

        {/* Thesis Summary */}
        <div className="mt-12 bg-purple-50 border border-purple-200 rounded-xl p-6">
          <h2 className="text-xl font-bold text-purple-700 mb-3">The Bottom Line</h2>
          <div className="text-purple-800 space-y-3">
            <p>
              Biomining is <strong>not a replacement for mines</strong>. It's a <strong>toolkit of modules</strong> that
              can plug into existing flowsheets where:
            </p>
            <ul className="ml-6 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-purple-700 mt-1">•</span>
                <span>Complexity makes conventional chemistry expensive, blunt, or risky</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-700 mt-1">•</span>
                <span>Selectivity, adaptation, or mild conditions offer strategic advantages</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-700 mt-1">•</span>
                <span>Environmental benefits (closure, water quality, social licence) add value beyond metal recovery</span>
              </li>
            </ul>
            <p className="mt-4 font-semibold text-purple-700">
              These modules are judged on the same metrics as anything else: $/tonne, % recovery, impurity removal,
              risk, permitting footprint, and closure outcomes.
            </p>
          </div>
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
    <div className="bg-[#ededed] rounded-xl mb-4 border border-gray-200 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full p-6 flex items-center justify-between hover:bg-gray-100 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Icon className="w-6 h-6 text-[#264563]" />
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        </div>
        {expanded ? <ChevronDown className="w-6 h-6 text-gray-500" /> : <ChevronRight className="w-6 h-6 text-gray-500" />}
      </button>
      {expanded && (
        <div className="p-6 pt-0 border-t border-gray-200">
          {children}
        </div>
      )}
    </div>
  );
}

function MechanismCard({ number, title, description, details, icon: Icon, color }) {
  const colors = {
    blue: 'bg-[#264563]/10 border-[#264563]/30 text-[#264563]',
    purple: 'bg-purple-50 border-purple-200 text-purple-700',
    emerald: 'bg-emerald-50 border-emerald-200 text-emerald-700',
    blue: 'bg-[#264563]/10 border-[#264563]/30 text-[#264563]',
    violet: 'bg-violet-50 border-violet-200 text-violet-700'
  };

  return (
    <div className={`rounded-lg p-5 border ${colors[color]}`}>
      <div className="flex items-start gap-3 mb-3">
        <div className="flex items-center gap-2">
          <span className="text-gray-900 font-bold text-lg">{number}.</span>
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-700 text-sm mb-2">{description}</p>
          <p className="text-gray-600 text-sm italic">{details}</p>
        </div>
      </div>
    </div>
  );
}

function AdvantageCard({ title, items }) {
  return (
    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
      <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
            <span className="text-emerald-600 mt-1">→</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
