'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight, Lightbulb, Target, TrendingUp, Database, Microscope, Zap } from 'lucide-react';

export default function ResearchPriorities() {
  const [expandedSection, setExpandedSection] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-purple-900 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Research Priorities</h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Fundamental research directions to unlock real-world scale and impact
          </p>
        </div>

        {/* Core Message */}
        <div className="bg-purple-950/30 border-2 border-purple-500/50 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-purple-300 mb-3">From Lab Demos to Industrial Reality</h2>
          <div className="text-purple-100 space-y-3">
            <p className="text-lg">
              Biomining needs <strong>systematic research</strong> in areas that bridge fundamental science and
              industrial deployment. These priorities focus on making biological processes <strong>predictable,
              controllable, and durable</strong> in real-world conditions.
            </p>
            <div className="bg-purple-900/30 rounded-lg p-4 border-l-4 border-purple-400 mt-4">
              <p className="text-purple-200 font-semibold">
                Progress in these areas will transform biomining from a niche technology into a core component
                of sustainable mineral processing.
              </p>
            </div>
          </div>
        </div>

        {/* Priority 1: Feasibility Envelopes */}
        <Section
          title="Priority #1: Biomining Limits and Feasibility Envelopes"
          icon={Target}
          expanded={expandedSection === 'priority1'}
          onToggle={() => setExpandedSection(expandedSection === 'priority1' ? null : 'priority1')}
        >
          <div className="space-y-4">
            <p className="text-slate-200">
              We lack a <strong>systematic framework</strong> for determining where biomining will work and where
              it won't. Industry needs to know upfront: given this ore, this climate, and these constraints—is
              biology feasible?
            </p>

            <div className="bg-purple-900/20 rounded-lg p-5 border border-purple-700/50">
              <h4 className="text-purple-300 font-semibold mb-3">What We Need</h4>
              <ul className="text-purple-200 text-sm space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">→</span>
                  <span><strong>Thermodynamic and kinetic boundaries:</strong> What reactions are energetically favorable? What rates are achievable?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">→</span>
                  <span><strong>Material-specific feasibility maps:</strong> For a given ore or waste stream, map out biological vs. chemical pathways</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">→</span>
                  <span><strong>Environmental constraint envelopes:</strong> pH, temperature, water availability, oxygen supply—where do processes break down?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">→</span>
                  <span><strong>Decision tools:</strong> Interactive models that take ore composition and site conditions as inputs and output feasibility scores</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/30 rounded-lg p-5 border border-slate-600/50">
              <h4 className="text-white font-semibold mb-2">Why It Matters</h4>
              <p className="text-slate-300 text-sm">
                Without feasibility envelopes, operators waste time and money on pilots that were never going to work.
                Clear boundaries prevent false starts and focus effort on viable opportunities.
              </p>
            </div>
          </div>
        </Section>

        {/* Priority 2: Predictability and Control */}
        <Section
          title="Priority #2: Predictability and Control (Sensing, Models, Feedback)"
          icon={Database}
          expanded={expandedSection === 'priority2'}
          onToggle={() => setExpandedSection(expandedSection === 'priority2' ? null : 'priority2')}
        >
          <div className="space-y-4">
            <p className="text-slate-200">
              Biological systems are viewed as <strong>"black boxes"</strong> by operators. If you can't measure
              it or predict it, you can't control it—and regulators won't approve it.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-amber-900/20 rounded-lg p-4 border border-amber-700/30">
                <h4 className="text-amber-300 font-semibold mb-2">Sensing Needs</h4>
                <ul className="text-amber-200 text-sm space-y-2">
                  <li>• Real-time microbial community composition</li>
                  <li>• Functional activity metrics (not just taxonomy)</li>
                  <li>• Early warning indicators of failure or drift</li>
                  <li>• Affordable, field-deployable sensors</li>
                </ul>
              </div>
              <div className="bg-emerald-900/20 rounded-lg p-4 border border-emerald-700/30">
                <h4 className="text-emerald-300 font-semibold mb-2">Modeling Needs</h4>
                <ul className="text-emerald-200 text-sm space-y-2">
                  <li>• Predictive models linking biology to metallurgy</li>
                  <li>• Integration with existing flowsheet models</li>
                  <li>• Response to perturbations (feed changes, temp shifts)</li>
                  <li>• Optimization and control algorithms</li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-900/20 rounded-lg p-5 border border-purple-700/50 mt-4">
              <h4 className="text-purple-300 font-semibold mb-3">Control Strategies</h4>
              <p className="text-purple-200 mb-2">
                What levers can operators pull when performance drifts?
              </p>
              <ul className="text-purple-200 text-sm space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">→</span>
                  <span>Nutrient dosing, pH adjustment, oxygen supply</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">→</span>
                  <span>Inoculation or community steering</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">→</span>
                  <span>Feedback loops: automated responses based on sensor data</span>
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Priority 3: Biology in Real Matrices */}
        <Section
          title="Priority #3: Biology in Real Matrices"
          icon={Microscope}
          expanded={expandedSection === 'priority3'}
          onToggle={() => setExpandedSection(expandedSection === 'priority3' ? null : 'priority3')}
        >
          <div className="space-y-4">
            <p className="text-slate-200">
              Most academic work uses <strong>simplified, idealized conditions</strong>. Real mine sites have
              complex, variable feedstocks with co-contaminants, competing ions, organics, and solids.
            </p>

            <div className="bg-red-900/20 rounded-lg p-5 border border-red-700/50">
              <h4 className="text-red-300 font-semibold mb-3">The Reality Gap</h4>
              <p className="text-red-200 mb-3">
                Lab strains optimized in pure solutions often fail when exposed to:
              </p>
              <ul className="text-red-200 text-sm space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Polymetallic process waters with variable composition</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>High solids loading and mineral surfaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Fouling, scaling, and biofilm formation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Temperature swings, pH drift, and oxidant depletion</span>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-900/20 rounded-lg p-5 border border-emerald-700/50">
              <h4 className="text-emerald-300 font-semibold mb-3">Research Directions</h4>
              <ul className="text-emerald-200 text-sm space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">→</span>
                  <span><strong>Standardized "complexity packages":</strong> Real ore and process water samples for benchmarking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">→</span>
                  <span><strong>Matrix-aware screening:</strong> Test strains and consortia in realistic conditions from day one</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">→</span>
                  <span><strong>Interference studies:</strong> Identify which co-metals, organics, or minerals inhibit or enhance activity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">→</span>
                  <span><strong>Community engineering:</strong> Design robust consortia instead of fragile monocultures</span>
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Priority 4: Durability and Trait Half-Life */}
        <Section
          title="Priority #4: Durability and Trait Half-Life"
          icon={TrendingUp}
          expanded={expandedSection === 'priority4'}
          onToggle={() => setExpandedSection(expandedSection === 'priority4' ? null : 'priority4')}
        >
          <div className="space-y-4">
            <p className="text-slate-200">
              Engineered traits <strong>don't last forever</strong>. Genetic circuits degrade, selective pressure
              is lost, and communities evolve away from their designed function.
            </p>

            <div className="bg-slate-800/30 rounded-lg p-5 border border-slate-600/50">
              <h4 className="text-white font-semibold mb-3">The Challenge</h4>
              <p className="text-slate-300 mb-3">
                Mining operations run for <strong>years to decades</strong>. If a bioseparation module or bioleach
                consortium loses activity after 6 months, it's not economically viable.
              </p>
              <p className="text-slate-300 text-sm">
                We need to understand and extend the <strong>"trait half-life"</strong>—how long does function persist?
              </p>
            </div>

            <div className="bg-purple-900/20 rounded-lg p-5 border border-purple-700/50">
              <h4 className="text-purple-300 font-semibold mb-3">Research Questions</h4>
              <ul className="text-purple-200 text-sm space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">→</span>
                  <span>What maintains stability: genetic integration, selection pressure, or ecological design?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">→</span>
                  <span>Can we design communities where function is <strong>ecosystem-level</strong>, not strain-specific?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">→</span>
                  <span>How often do systems need re-inoculation or "tuning"?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">→</span>
                  <span>Trade-offs: performance vs. stability, efficiency vs. robustness</span>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-900/20 rounded-lg p-5 border border-emerald-700/50">
              <h4 className="text-emerald-300 font-semibold mb-3">Potential Solutions</h4>
              <ul className="text-emerald-200 text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">→</span>
                  <span><strong>Genomic stability engineering:</strong> Minimize plasmid loss, use chromosomal integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">→</span>
                  <span><strong>Selective environments:</strong> Maintain conditions where the desired trait is advantageous</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">→</span>
                  <span><strong>Functional redundancy:</strong> Multiple pathways or organisms providing the same service</span>
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Priority 5: Bioseparation Design Platforms */}
        <Section
          title="Priority #5: Bioseparation Design Platforms"
          icon={Zap}
          expanded={expandedSection === 'priority5'}
          onToggle={() => setExpandedSection(expandedSection === 'priority5' ? null : 'priority5')}
        >
          <div className="space-y-4">
            <p className="text-slate-200">
              Bioseparations—proteins, peptides, polymers, whole cells—offer <strong>selectivity advantages</strong>
              over conventional extractants. But they're hard to engineer from scratch for each new target.
            </p>

            <div className="bg-blue-900/20 rounded-lg p-5 border border-blue-700/50">
              <h4 className="text-blue-300 font-semibold mb-3">The Vision</h4>
              <p className="text-blue-200 mb-3">
                A <strong>design platform</strong> for bioseparations that works like this:
              </p>
              <ul className="text-blue-200 text-sm space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">1.</span>
                  <span><strong>Input:</strong> Target metal(s), process stream composition, selectivity requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">2.</span>
                  <span><strong>Output:</strong> Candidate ligands, proteins, or cell-surface constructs with predicted binding affinity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">3.</span>
                  <span><strong>Validation:</strong> Rapid screening in real matrices, cycle testing, cost modeling</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-900/20 rounded-lg p-5 border border-purple-700/50">
              <h4 className="text-purple-300 font-semibold mb-3">Key Research Areas</h4>
              <ul className="text-purple-200 text-sm space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">→</span>
                  <span><strong>High-throughput screening:</strong> Test thousands of binding variants quickly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">→</span>
                  <span><strong>Computational design:</strong> ML models predicting metal-ligand interactions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">→</span>
                  <span><strong>Regeneration and reuse:</strong> How many cycles can bioseparation modules handle?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">→</span>
                  <span><strong>Immobilization and formats:</strong> Columns, membranes, or suspension systems?</span>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-900/20 rounded-lg p-5 border border-emerald-700/50">
              <h4 className="text-emerald-300 font-semibold mb-3">Game-Changer Applications</h4>
              <p className="text-emerald-200 text-sm">
                If bioseparation platforms mature, they could unlock:
              </p>
              <ul className="text-emerald-200 text-sm space-y-2 ml-4 mt-2">
                <li>• Selective recovery of critical metals (REEs, PGMs, Co) from complex streams</li>
                <li>• Polishing steps for impurity removal before refining</li>
                <li>• Water treatment modules that recover value while meeting discharge standards</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Summary */}
        <div className="mt-12 bg-purple-950/30 border border-purple-700/50 rounded-xl p-6">
          <h2 className="text-xl font-bold text-purple-300 mb-4">Making Biomining Systematic</h2>
          <div className="text-purple-100 space-y-3">
            <p>
              These priorities share a common theme: <strong>moving from art to engineering</strong>.
            </p>
            <ul className="ml-6 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">→</span>
                <span>Replace trial-and-error with feasibility maps and predictive models</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">→</span>
                <span>Test biology in real-world conditions, not idealized lab setups</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">→</span>
                <span>Design for durability and controllability from the start</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">→</span>
                <span>Build platforms that accelerate development for each new application</span>
              </li>
            </ul>
            <p className="mt-4 font-semibold text-purple-200">
              Progress in these areas will determine whether biomining becomes a transformative technology or
              remains a niche curiosity.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between">
          <Link href="/mining-academia" className="text-purple-400 hover:text-purple-300 flex items-center gap-2">
            ← Mining–Academia Collaboration
          </Link>
          <Link href="/" className="text-purple-400 hover:text-purple-300 flex items-center gap-2">
            Back to Home →
          </Link>
        </div>
      </div>
    </div>
  );
}

function Section({ title, icon: Icon, expanded, onToggle, children }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl mb-4 border border-white/20 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Icon className="w-6 h-6 text-purple-400" />
          <h2 className="text-xl font-bold text-white">{title}</h2>
        </div>
        {expanded ? <ChevronDown className="w-6 h-6 text-slate-300" /> : <ChevronRight className="w-6 h-6 text-slate-300" />}
      </button>
      {expanded && (
        <div className="p-6 pt-0 border-t border-white/10">
          {children}
        </div>
      )}
    </div>
  );
}
