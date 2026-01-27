'use client';

import Link from 'next/link';
import { ChevronDown, ChevronRight, CheckCircle2, XCircle, AlertTriangle, Target, TrendingUp } from 'lucide-react';

export default function FitTest() {
  const [expandedSection, setExpandedSection] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Is Biomining a Good Fit Here?</h1>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
            A practical framework for evaluating when biology makes sense—and when it doesn't
          </p>
        </div>

        {/* Core Message */}
        <div className="bg-indigo-950/30 border-2 border-indigo-500/50 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-indigo-300 mb-3 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6" />
            The Key Question
          </h2>
          <div className="text-indigo-100 space-y-3">
            <p className="text-lg">
              Biomining is <strong>not universally applicable</strong>. A key practice is asking early:
            </p>
            <div className="bg-indigo-900/30 rounded-lg p-4 border-l-4 border-indigo-400 mt-4">
              <p className="text-indigo-100 font-semibold text-xl italic">
                "Does biology work here, or only in principle?"
              </p>
            </div>
            <p className="mt-4">
              This page provides a simple "fit test" to help you make that determination based on project characteristics and constraints.
            </p>
          </div>
        </div>

        {/* Positive Fit Test */}
        <Section
          title="When Biomining Is Most Likely to Work (Positive Fit Test)"
          icon={CheckCircle2}
          expanded={expandedSection === 'positive'}
          onToggle={() => setExpandedSection(expandedSection === 'positive' ? null : 'positive')}
          color="emerald"
        >
          <div className="space-y-3">
            <div className="bg-emerald-900/20 rounded-lg p-5 border border-emerald-700/50 mb-4">
              <p className="text-emerald-200 text-lg">
                Biomining is more likely to be the right tool when at least <strong>2–3 of the following are true</strong>:
              </p>
            </div>

            <FitCriteria
              number="1"
              title="Selectivity is the bottleneck"
              description="You don't need 'stronger acid'; you need 'the right binding site'"
              details="The challenge is separating valuable metals from similar co-metals or problematic impurities. Biological ligands and proteins can act as molecular coin sorters."
              positive={true}
            />

            <FitCriteria
              number="2"
              title="Time is available"
              description="Heap-scale and reservoir-style systems can tolerate weeks-to-months kinetics"
              details="If CAPEX is low and incremental recovery is real, slow kinetics are acceptable. Relevant for stockpiles, tailings, and AMD treatment."
              positive={true}
            />

            <FitCriteria
              number="3"
              title="The stream is already in solution"
              description="Mine drainage, process waters, and leachates are directly amenable to bioseparation"
              details="Dissolved metals can be directly targeted with biosorption, biomolecular ligands, or bioprecipitation without additional leaching steps."
              positive={true}
            />

            <FitCriteria
              number="4"
              title="Environmental liability is part of the objective"
              description="Closure, water treatment, and tailings stabilization matter as much as metal recovery"
              details="Biological approaches that reduce long-term risk and monitoring burdens have extra value beyond immediate metal revenue."
              positive={true}
            />

            <FitCriteria
              number="5"
              title="Complexity drives costs"
              description="Diverse mineralogies, polymetallic mixtures, or unconventional wastes make conventional chemistry expensive"
              details="When conventional chemistry is too costly, too blunt (non-selective), or too difficult to permit, biology's ability to handle complexity becomes valuable."
              positive={true}
            />
          </div>
        </Section>

        {/* Negative Fit Test */}
        <Section
          title="When Biomining May NOT Be the Best Fit"
          icon={XCircle}
          expanded={expandedSection === 'negative'}
          onToggle={() => setExpandedSection(expandedSection === 'negative' ? null : 'negative')}
          color="red"
        >
          <div className="space-y-3">
            <div className="bg-red-900/20 rounded-lg p-5 border border-red-700/50 mb-4">
              <p className="text-red-200 text-lg">
                Conversely, biomining may be a <strong>poor fit</strong> when:
              </p>
            </div>

            <FitCriteria
              number="1"
              title="The process window is dominated by physical transport, not biochemistry"
              description="Performance is limited by water/oxygen supply, temperature, mixing, or hydrology"
              details="Biochemistry becomes a secondary lever when mass transfer and physical constraints dominate. Biology won't solve a hydraulic or mixing problem."
              positive={false}
            />

            <FitCriteria
              number="2"
              title="The incumbent is already highly optimized and margins are thin"
              description="Conventional operations with well-tuned pyrometallurgy or hydrometallurgy"
              details="For many high-throughput conventional operations, incremental gains from biology may not justify integration risk and complexity."
              positive={false}
            />

            <FitCriteria
              number="3"
              title="The feed is 'messy' in biologically hostile ways"
              description="High organics, zero-valent metals, and diverse heavy metals create stressors"
              details="E-waste is an example: organics and unusual metal forms can kill or destabilize acidophilic communities. Not all complexity favors biology."
              positive={false}
            />

            <FitCriteria
              number="4"
              title="You cannot measure or control the biology"
              description="No way to monitor biological state or performance"
              details="If you can't monitor or control biological activity, you can't guarantee repeatability or satisfy regulators. Sensing and control are essential."
              positive={false}
            />
          </div>
        </Section>

        {/* Feasibility Envelopes */}
        <Section
          title="Toward Feasibility Envelopes"
          icon={Target}
          expanded={expandedSection === 'envelopes'}
          onToggle={() => setExpandedSection(expandedSection === 'envelopes' ? null : 'envelopes')}
          color="purple"
        >
          <div className="space-y-4">
            <p className="text-slate-200">
              Our take-home message: <strong>"Biology works"</strong> is not the same as <strong>"Biology works here"</strong>.
            </p>

            <div className="bg-purple-900/20 rounded-lg p-5 border border-purple-700/50">
              <h4 className="text-purple-300 font-semibold mb-3">A Game-Changer for the Field</h4>
              <p className="text-purple-200 mb-3">
                A <strong>"feasibility envelope"</strong> framework that, given:
              </p>
              <ul className="text-purple-200 space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Ore/mineralogy and feed characteristics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Climate and water/energy constraints</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Regulatory and closure goals</span>
                </li>
              </ul>
              <p className="text-purple-200 mt-3 mb-2">
                Could map out:
              </p>
              <ul className="text-purple-200 space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">→</span>
                  <span>Where biomining has demonstrated success, and under what conditions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">→</span>
                  <span>Where it is theoretically feasible, given thermodynamics and microbial energetics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">→</span>
                  <span>Where it is currently infeasible without major breakthroughs</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/30 rounded-lg p-5 border border-slate-600/50">
              <p className="text-slate-200">
                <strong>This wiki and associated tools</strong> (e.g., "Is biomining right for me?") are first steps toward
                that kind of decision support. Check back as we develop interactive assessment tools.
              </p>
            </div>
          </div>
        </Section>

        {/* Quick Decision Guide */}
        <div className="mt-12 bg-indigo-950/30 border border-indigo-700/50 rounded-xl p-6">
          <h2 className="text-xl font-bold text-indigo-300 mb-4 flex items-center gap-2">
            <TrendingUp className="w-6 h-6" />
            Quick Decision Guide
          </h2>
          <div className="space-y-4">
            <div className="bg-indigo-900/30 rounded-lg p-4">
              <p className="text-emerald-300 font-semibold mb-2">✓ Strong Fit Indicators:</p>
              <p className="text-indigo-200 text-sm">
                Complex polymetallic streams + selectivity needs + time available + environmental co-benefits
              </p>
            </div>
            <div className="bg-indigo-900/30 rounded-lg p-4">
              <p className="text-amber-300 font-semibold mb-2">⚠ Proceed with Caution:</p>
              <p className="text-indigo-200 text-sm">
                Mixed signals, or 1 positive + 1 negative indicator. Consider side-stream or pilot approaches.
              </p>
            </div>
            <div className="bg-indigo-900/30 rounded-lg p-4">
              <p className="text-red-300 font-semibold mb-2">✗ Likely Poor Fit:</p>
              <p className="text-indigo-200 text-sm">
                Highly optimized conventional process + thin margins + no monitoring capability + biologically hostile matrix
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between">
          <Link href="/what-is-biomining" className="text-indigo-400 hover:text-indigo-300 flex items-center gap-2">
            ← What Is Biomining?
          </Link>
          <Link href="/complex-materials" className="text-indigo-400 hover:text-indigo-300 flex items-center gap-2">
            Complex Materials →
          </Link>
        </div>
      </div>
    </div>
  );
}

function Section({ title, icon: Icon, expanded, onToggle, color, children }) {
  const colorMap = {
    emerald: 'text-emerald-400',
    red: 'text-red-400',
    purple: 'text-purple-400'
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl mb-4 border border-white/20 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Icon className={`w-6 h-6 ${colorMap[color] || 'text-indigo-400'}`} />
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

function FitCriteria({ number, title, description, details, positive }) {
  const color = positive ? 'emerald' : 'red';
  const colors = {
    emerald: {
      bg: 'bg-emerald-800/30',
      border: 'border-emerald-600/30',
      title: 'text-emerald-300',
      icon: 'text-emerald-400'
    },
    red: {
      bg: 'bg-red-800/30',
      border: 'border-red-600/30',
      title: 'text-red-300',
      icon: 'text-red-400'
    }
  };

  return (
    <div className={`rounded-lg p-5 border ${colors[color].bg} ${colors[color].border}`}>
      <div className="flex items-start gap-3">
        <span className={`font-bold text-lg ${colors[color].icon}`}>{number}.</span>
        <div className="flex-1">
          <h4 className={`font-semibold text-white mb-1`}>{title}</h4>
          <p className="text-slate-200 text-sm mb-2 italic">{description}</p>
          <p className="text-slate-300 text-sm">{details}</p>
        </div>
      </div>
    </div>
  );
}
