import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Users, TrendingUp, GitBranch, Target, Database, Award } from 'lucide-react';

export default function MiningAcademia() {
  const [expandedSection, setExpandedSection] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Mining–Academia Collaboration</h1>
          <p className="text-xl text-teal-200 max-w-3xl mx-auto">
            Shifting relationships for faster learning and real-world impact
          </p>
        </div>

        {/* Core Problem */}
        <div className="bg-teal-950/30 border-2 border-teal-500/50 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-teal-300 mb-3">The Learning Loop Is Broken</h2>
          <div className="text-teal-100 space-y-3">
            <p className="text-lg">
              Biomining is "stuck" not just because the science is hard. It's stuck because of a <strong>mismatch
              between research efforts and industry needs</strong>.
            </p>
            <p className="mt-4">
              Progress is hindered by:
            </p>
            <ul className="ml-6 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-teal-400 mt-1">•</span>
                <span>Labs optimizing for idealized performance, not real-world robustness</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-400 mt-1">•</span>
                <span>Industry expecting plug-and-play solutions, when hybrid integration is more realistic</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-400 mt-1">•</span>
                <span>Valuable field data remaining siloed due to liability and competitive concerns</span>
              </li>
            </ul>
            <div className="bg-teal-900/30 rounded-lg p-4 border-l-4 border-teal-400 mt-4">
              <p className="text-teal-200 font-semibold">
                The goal: identify actionable shifts that make mine-relevant research tractable and accelerate
                the field's learning rate.
              </p>
            </div>
          </div>
        </div>

        {/* Shift 1 */}
        <Section
          title="Shift #1: From 'Cool Demos' to Mine-Relevant Benchmarks"
          icon={Target}
          expanded={expandedSection === 'shift1'}
          onToggle={() => setExpandedSection(expandedSection === 'shift1' ? null : 'shift1')}
        >
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-900/20 rounded-lg p-4 border border-red-700/30">
                <h4 className="text-red-300 font-semibold mb-2">❌ Current Academic Focus</h4>
                <ul className="text-red-200 text-sm space-y-2">
                  <li>• High removal % in idealized solutions</li>
                  <li>• Novel organisms with narrow performance</li>
                  <li>• Proof-of-concept in clean matrices</li>
                  <li>• Single-point demonstrations</li>
                </ul>
              </div>
              <div className="bg-emerald-900/20 rounded-lg p-4 border border-emerald-700/30">
                <h4 className="text-emerald-300 font-semibold mb-2">✓ Industry Needs</h4>
                <ul className="text-emerald-200 text-sm space-y-2">
                  <li>• Variable feed tolerance under drift</li>
                  <li>• Fouling robustness in real matrices</li>
                  <li>• Cycle life & regeneration (many cycles)</li>
                  <li>• Failure detection & control strategies</li>
                  <li>• Integration cost (CAPEX/OPEX, footprint)</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-800/30 rounded-lg p-5 border border-slate-600/50 mt-4">
              <h4 className="text-white font-semibold mb-3">The Solution: Shared Benchmark Stacks</h4>
              <p className="text-slate-200 mb-3">
                Right now, there is <strong>no shared benchmark stack</strong> that makes metrics comparable across
                labs and pilots. The field needs:
              </p>
              <ul className="text-slate-300 text-sm space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-teal-400 mt-1">→</span>
                  <span>Standardized feedstocks and "complexity packages" (representative ores, tailings, AMD samples)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400 mt-1">→</span>
                  <span>Agreed-upon performance metrics: recovery, selectivity, cycle life, matrix tolerance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400 mt-1">→</span>
                  <span>Reporting standards that enable cross-project comparisons</span>
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Shift 2 */}
        <Section
          title="Shift #2: From 'Plug-and-Play' to Hybrid Flowsheets"
          icon={GitBranch}
          expanded={expandedSection === 'shift2'}
          onToggle={() => setExpandedSection(expandedSection === 'shift2' ? null : 'shift2')}
        >
          <div className="space-y-4">
            <p className="text-slate-200">
              A major bottleneck: the perception that biomining should deliver <strong>short-term, plug-and-play
              returns</strong> and drop into existing plants as a direct replacement.
            </p>

            <div className="bg-amber-900/20 rounded-lg p-5 border border-amber-700/50">
              <h4 className="text-amber-300 font-semibold mb-2">⚠ The Reality</h4>
              <p className="text-amber-200">
                Success more often comes from <strong>hybrid workflows</strong>, where:
              </p>
              <ul className="text-amber-200 mt-2 space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">•</span>
                  <span>A biotech module handles a specific "pain point" (impurity removal, co-product recovery, closure treatment)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">•</span>
                  <span>Biology acts as an additional <em>layer</em> in the flowsheet, not a wholesale replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">•</span>
                  <span>Integration is gradual: side-streams first, then scale up as confidence grows</span>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-900/20 rounded-lg p-5 border border-emerald-700/50">
              <h4 className="text-emerald-300 font-semibold mb-3">Examples of Hybrid Integration</h4>
              <ul className="text-emerald-200 text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">→</span>
                  <span><strong>Bio-polishing</strong> of pregnant leach solution before solvent extraction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">→</span>
                  <span><strong>SRB reactors</strong> treating bleed streams in parallel with main flow</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">→</span>
                  <span><strong>Bioseparation modules</strong> capturing critical co-products (REEs, Co, PGMs)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">→</span>
                  <span><strong>Tailings reprocessing</strong> via bioleaching as a closure-stage project</span>
                </li>
              </ul>
            </div>

            <p className="text-slate-200 mt-4">
              <strong>This wiki emphasizes modules and integration points</strong>, not full-flow replacements.
            </p>
          </div>
        </Section>

        {/* Shift 3 */}
        <Section
          title="Shift #3: From Siloed Pilots to Shared Learning"
          icon={Database}
          expanded={expandedSection === 'shift3'}
          onToggle={() => setExpandedSection(expandedSection === 'shift3' ? null : 'shift3')}
        >
          <div className="space-y-4">
            <p className="text-slate-200">
              Biomining doesn't compound learnings quickly because <strong>valuable field data is rarely shared</strong>.
            </p>

            <div className="bg-slate-800/30 rounded-lg p-5 border border-slate-600/50">
              <h4 className="text-white font-semibold mb-3">Why Data Stays Siloed</h4>
              <ul className="text-slate-300 text-sm space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Environmental and safety data can be litigated, creating disincentives</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Competitive pressures and liability concerns discourage openness</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>No clear mechanism to anonymize or aggregate pilot data while preserving utility</span>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-900/20 rounded-lg p-5 border border-emerald-700/50">
              <h4 className="text-emerald-300 font-semibold mb-3">Federated Learning Models</h4>
              <p className="text-emerald-200 mb-3">
                Other sectors (e.g., pharmaceuticals) have experimented with federated learning and data enclaves.
                Biomining could adopt similar models:
              </p>
              <ul className="text-emerald-200 text-sm space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">→</span>
                  <span>Field data shared in <strong>anonymized or aggregated form</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">→</span>
                  <span><strong>Metadata standards</strong> enable cross-project analysis without exposing sensitive details</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">→</span>
                  <span><strong>Governance structures</strong> protect participants while enabling insight</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">→</span>
                  <span>Three-tier access: <strong>open / aggregated / NDA-protected</strong></span>
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Additional Levers */}
        <Section
          title="Additional Collaboration Levers"
          icon={Award}
          expanded={expandedSection === 'levers'}
          onToggle={() => setExpandedSection(expandedSection === 'levers' ? null : 'levers')}
        >
          <div className="space-y-4">
            <p className="text-slate-200 mb-4">
              Other mechanisms that could promote healthier mining–academia relationships:
            </p>

            <LeverCard
              title="Cross-Sector Consortia"
              description="Multi-stakeholder groups that align on shared priorities, benchmarks, and testbeds"
              examples={[
                "Orebank/Superbank material repositories",
                "Pilot site networks at former mines",
                "Pre-competitive research collaborations"
              ]}
            />

            <LeverCard
              title="Translational Roles"
              description="IP advocates and commercialization support embedded in universities"
              examples={[
                "Technology translation offices specialized in mining/metallurgy",
                "Entrepreneurs-in-residence with mining industry experience",
                "Legal support for licensing and partnership structuring"
              ]}
            />

            <LeverCard
              title="Paired Funding Models"
              description="Grants that link fundamental research to site-connected pilots"
              examples={[
                "NSF/DOE programs requiring industry partnership and field validation",
                "Matching funds that incentivize industry co-investment",
                "Milestone-based funding tied to real-world demonstrations"
              ]}
            />
          </div>
        </Section>

        {/* Summary */}
        <div className="mt-12 bg-teal-950/30 border border-teal-700/50 rounded-xl p-6">
          <h2 className="text-xl font-bold text-teal-300 mb-4">The Path Forward</h2>
          <div className="text-teal-100 space-y-3">
            <p>
              These shifts won't happen overnight, but they're <strong>actionable</strong>:
            </p>
            <ul className="ml-6 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-teal-400 mt-1">→</span>
                <span>Funders can require shared benchmarks and federated data practices</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-400 mt-1">→</span>
                <span>Academia can publish matrix-aware results and negative findings</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-400 mt-1">→</span>
                <span>Industry can co-design metrics and contribute anonymized performance envelopes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-400 mt-1">→</span>
                <span>National labs can host testbeds and coordinate material repositories</span>
              </li>
            </ul>
            <p className="mt-4 font-semibold text-teal-200">
              The learning loop can be fixed. It requires coordination, but the building blocks exist.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between">
          <a href="/fit-test" className="text-teal-400 hover:text-teal-300 flex items-center gap-2">
            ← Fit Test
          </a>
          <a href="/research-priorities" className="text-teal-400 hover:text-teal-300 flex items-center gap-2">
            Research Priorities →
          </a>
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
          <Icon className="w-6 h-6 text-teal-400" />
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

function LeverCard({ title, description, examples }) {
  return (
    <div className="bg-slate-800/30 rounded-lg p-5 border border-slate-600/50">
      <h4 className="font-semibold text-white mb-2">{title}</h4>
      <p className="text-slate-300 text-sm mb-3">{description}</p>
      <div className="bg-slate-900/50 rounded p-3">
        <p className="text-slate-400 text-xs font-semibold mb-2">Examples:</p>
        <ul className="space-y-1">
          {examples.map((example, i) => (
            <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
              <span className="text-teal-400 text-xs mt-1">▸</span>
              <span>{example}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
