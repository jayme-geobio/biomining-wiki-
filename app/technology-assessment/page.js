'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight, FileCheck } from 'lucide-react';
import CommentableContent from '../components/CommentableContent';
import TableOfContents from '../components/TableOfContents';
import PageNavigation from '../components/PageNavigation';
import GlossaryTerm from '../components/GlossaryTerm';


export default function TechnologyEvaluation() {
  const [openSections, setOpenSections] = useState(new Set());

  function toggleSection(key) {
    setOpenSections(prev => { const next = new Set(prev); next.has(key) ? next.delete(key) : next.add(key); return next; });
  }

  return (
    <CommentableContent pageName="technology-evaluation">

      <div className="min-h-screen pt-4 pb-6 max-w-6xl mx-auto px-4 space-y-6">

        {/* Box 1: Header */}
        <div className="flex gap-6 items-stretch">
          <div className="flex-[2] bg-[#edede6] rounded-3xl px-6 sm:px-10 shadow-xl border border-white flex flex-col justify-center py-10">
            <h1 className="text-2xl sm:text-4xl font-bold text-[#264563] mb-3 leading-tight">Technology Assessment Checklists</h1>
            <p className="text-base font-extralight text-[#264563]">
              Checklists for evaluating biomining concepts and bio-solutions
            </p>
          </div>
          <TableOfContents />
        </div>

        {/* Box 2: Content */}
        <div className="bg-[#edede6] rounded-3xl shadow-2xl p-5 sm:p-8 md:p-12 border border-white">

          {/* Why These Questions Matter */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#264563] mb-3">Why These Questions Matter</h2>
            <p className="text-[#264563]">
              Most biomining concepts fail not because the biology doesn't work, but because they don't address the operational, economic, and regulatory realities of a mine site. <strong>Asking the right questions upfront saves years of misaligned development.</strong> These checklists help biologists prepare robust proposals that address mining realities, and help mining professionals evaluate whether a bio-technology is technically sound and economically viable for their operation.
            </p>
          </div>

          {/* Quick Design Checklist (from Biology perspective) */}
          <Section
            title="For Biologists: Preparing Your Mining Pitch"
            icon={FileCheck}
            expanded={openSections.has('design')}
            onToggle={() => toggleSection('design')}
          >
            <div className="bg-white rounded-lg p-6 border border-[#264563]/20">
              <p className="text-[#264563] font-medium mb-4">
                Before investing heavily in a biomining concept, answer these questions:
              </p>
              <div className="space-y-4">
                {[
                  {
                    q: "Where does this sit in the mining value chain?",
                    detail: "Exploration, extraction, comminution, concentration, leaching, separation, closure"
                  },
                  {
                    q: "What is the feedstock?",
                    detail: <>Ore, concentrate, <GlossaryTerm term="Tailings">tailings</GlossaryTerm>, <GlossaryTerm term="Acid Mine Drainage (AMD)">AMD</GlossaryTerm>, <GlossaryTerm term="Electronic Waste (E-waste)">e-waste</GlossaryTerm>, <GlossaryTerm term="Slag">slag</GlossaryTerm> - mineralogy, grade, particle size. How does it perform in real mining conditions with complex geology and mineralogy?</>
                  },
                  {
                    q: "What's the conventional alternative, and how does it compare?",
                    detail: "Heap leach, tank leach, SX, smelting, lime neutralization"
                  },
                  {
                    q: "What is your biological advantage?",
                    detail: "Lower cost, lower energy, higher selectivity, new resource access, better closure"
                  },
                  {
                    q: "What does success look like to the mine operator?",
                    detail: "Higher recovery, lower OPEX, unlocking new resource, reducing closure liability"
                  },
                  {
                    q: "What is your realistic first deployment?",
                    detail: <>Side-stream polishing, <GlossaryTerm term="Tailings">tailings</GlossaryTerm>/<GlossaryTerm term="Acid Mine Drainage (AMD)">AMD</GlossaryTerm> reprocessing, pilot at legacy site</>
                  }
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex items-start gap-3">
                      <div className="bg-[#264563] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold" style={{marginTop: '0.1em'}}>
                        {i + 1}
                      </div>
                      <div>
                        <p className="text-[#264563] font-semibold">{item.q}</p>
                        <p className="text-[#264563] text-sm mt-1">{item.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* Evaluation Checklist for Bio-Solutions (from Mining perspective) */}
          <Section
            title="For Miners: Evaluating Bio-Technologies"
            icon={FileCheck}
            expanded={openSections.has('evaluation')}
            onToggle={() => toggleSection('evaluation')}
          >
            <div className="bg-white rounded-lg p-6 border border-[#264563]/20">
              <p className="text-[#264563] font-medium mb-4">
                Before dismissing or adopting a bio-solution, ask these questions:
              </p>
              <div className="space-y-4">
                {[
                  {
                    q: "What problem is it actually solving?",
                    detail: "New resource access, cost reduction, impurity management, water quality, closure risk, social license?"
                  },
                  {
                    q: "What is the technology-readiness level (TRL) and evidence base?",
                    detail: "Lab vs. pilot vs. commercial references. Performance in representative feedstocks, not just synthetic solutions."
                  },
                  {
                    q: "What are the operating requirements and constraints?",
                    detail: "Understanding the requirements, robustness and limitations of the technology within relevant mining conditions."
                  },
                  {
                    q: "Time scales and integration",
                    detail: "Does it fit within existing residence times? Can it run as a side-stream or bleed-stream process?"
                  },
                  {
                    q: "Risk and monitoring",
                    detail: "What monitoring (sensors, assays) is required? What is required to maintain the bio-process? What happens if it fails or stops?"
                  },
                  {
                    q: "Regulatory and public-perception impacts",
                    detail: "Does it simplify permitting (less chemical transport, lower emissions)? Does it improve closure outcomes and community relations?"
                  }
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex items-start gap-3">
                      <div className="bg-[#264563] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold" style={{marginTop: '0.1em'}}>
                        {i + 1}
                      </div>
                      <div>
                        <p className="text-[#264563] font-semibold">{item.q}</p>
                        <p className="text-[#264563] text-sm mt-1">{item.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
        className="w-full bg-[#264563] p-4 sm:p-6 flex items-center justify-between gap-2 hover:bg-[#1e3450] transition-colors"
      >
        <div className="flex items-center gap-2 sm:gap-3 text-left min-w-0 flex-1">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
          <h2 className="font-bold text-white whitespace-nowrap overflow-hidden text-ellipsis" style={{ fontSize: 'clamp(0.65rem, 1.8vw, 1.125rem)' }}>{title}</h2>
        </div>
        <div className="flex items-center gap-1 sm:gap-2 text-white/70 flex-shrink-0" style={{ fontSize: 'clamp(0.65rem, 1.2vw, 0.875rem)' }}>
          <span className="hidden sm:inline">{expanded ? 'Click to collapse' : 'Click to expand'}</span>
          {expanded ? <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-white" /> : <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />}
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
