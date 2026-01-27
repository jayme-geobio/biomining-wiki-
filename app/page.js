'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Microscope, Mountain, BookOpen, Beaker, Droplets, Users, Lightbulb, GraduationCap, Factory, AlertTriangle, Target, TrendingUp, Layers } from 'lucide-react';

export default function BiominingHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">
              Biomining Wiki
            </h1>
            <p className="text-xl text-emerald-200 max-w-3xl mx-auto">
              A bridge between biology and mining for critical mineral recovery
            </p>
            <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
              Leveraging biological mechanisms to unlock value from complex materials where conventional chemistry is too costly, too blunt, or too risky
            </p>
          </div>

          {/* Why Now Section */}
          <div className="max-w-4xl mx-auto mb-16 bg-blue-950/50 rounded-xl p-8 border border-blue-700/50">
            <h2 className="text-2xl font-bold text-blue-300 mb-4 flex items-center gap-2">
              <TrendingUp className="w-7 h-7" />
              Why Biomining Now?
            </h2>
            <div className="text-blue-100 space-y-3">
              <p>
                Mining and critical mineral recovery face a <strong>new constraint set</strong>: rising demand from clean energy,
                shifting toward harder feedstocks, and intensifying limits around energy, water, tailings, and social licence.
              </p>
              <p>
                <strong>Complexity</strong> is the central issue. Most lab breakthroughs use simplified systems, but industry faces
                polymetallic ores, process waters with diverse co-metals, legacy wastes, and tight operational constraints.
              </p>
              <p className="text-blue-200 font-semibold">
                Biomining's niche is precisely where this complexity makes conventional chemistry expensive, blunt, or risky—and
                where biology's ability to couple redox, binding, and adaptation can unlock value.
              </p>
            </div>
          </div>

          {/* Thesis Section */}
          <div className="max-w-4xl mx-auto mb-16 bg-purple-950/50 rounded-xl p-8 border border-purple-700/50">
            <h2 className="text-2xl font-bold text-purple-300 mb-4 flex items-center gap-2">
              <Layers className="w-7 h-7" />
              Our Thesis: Biology as Modules, Not Mine Replacements
            </h2>
            <div className="text-purple-100 space-y-3">
              <p>
                Biology cannot replace a mine. It can, however, become a <strong>new class of modules</strong> inside
                mining and mineral processing flowsheets.
              </p>
              <div className="bg-purple-900/30 rounded-lg p-4 border-l-4 border-purple-400 mt-4">
                <p className="text-purple-200">
                  <strong>These modules look like:</strong> Reagent + separation + control, not just "bugs in a heap."
                  Bioprocesses that slot into existing flowsheets. Units judged on $/tonne, % recovery, risk, and closure outcomes.
                </p>
              </div>
              <p className="mt-4">
                By changing the <strong>cost and risk curve</strong>, today's "waste" becomes tomorrow's "ore."
                This wiki shows where, why, and how.
              </p>
            </div>
          </div>

          {/* Dual Path Selection */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-16">
            {/* Path for Biologists */}
            <PathCard
              title="For Biologists"
              subtitle="Learn how your biology fits into mining operations"
              icon={Microscope}
              color="emerald"
              sections={[
                { title: "The Mining Value Chain", icon: Factory },
                { title: "Example Flowsheets", icon: Target },
                { title: "Key Constraints", icon: AlertTriangle },
                { title: "Design Checklist", icon: BookOpen }
              ]}
              link="/for-biologists"
            />

            {/* Path for Mining Professionals */}
            <PathCard
              title="For Mining Professionals"
              subtitle="Understand how biology can enhance your operations"
              icon={Mountain}
              color="amber"
              sections={[
                { title: "Microbial Energy & Metabolism", icon: Microscope },
                { title: "Mechanisms of Metal Mobilization", icon: Beaker },
                { title: "Biomining Modalities", icon: Factory },
                { title: "Evaluation Checklist", icon: BookOpen }
              ]}
              link="/for-miners"
            />
          </div>

          {/* Core Resources */}
          <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Essential Resources
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ResourceCard
                title="What Is Biomining?"
                description="Definitions, mechanisms, and where biotech outcompetes chemistry"
                icon={GraduationCap}
                link="/what-is-biomining"
              />
              <ResourceCard
                title="Core Glossary"
                description="Shared vocabulary bridging mining and biology"
                icon={BookOpen}
                link="/glossary"
              />
              <ResourceCard
                title="Complex Materials"
                description="Tailings, AMD, e-waste, and where biology helps most"
                icon={Droplets}
                link="/complex-materials"
              />
              <ResourceCard
                title="Flowsheets"
                description="Real-world integration examples and bio-modules"
                icon={Target}
                link="/flowsheets"
              />
            </div>
          </div>

          {/* Advanced Topics */}
          <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Strategic Topics
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <ResourceCard
                title="Fit Test"
                description="Is biomining a good fit for your project?"
                icon={Target}
                link="/fit-test"
                small={true}
              />
              <ResourceCard
                title="Mining–Academia"
                description="Shifting collaboration models for faster learning"
                icon={Users}
                link="/mining-academia"
                small={true}
              />
              <ResourceCard
                title="Research Priorities"
                description="Fundamental directions to unlock real scale"
                icon={Lightbulb}
                link="/research-priorities"
                small={true}
              />
            </div>
          </div>

          {/* What is Biomining Definition */}
          <div className="mt-12 max-w-4xl mx-auto bg-emerald-950/50 rounded-xl p-8 border border-emerald-700/50">
            <h3 className="text-xl font-semibold text-emerald-300 mb-3 flex items-center gap-2">
              <GraduationCap className="w-6 h-6" />
              What This Wiki Covers
            </h3>
            <p className="text-emerald-100 mb-4">
              <strong>Biomining</strong> means <strong>any use of biological mechanisms</strong>—cells, enzymes,
              proteins, metabolites, or consortia—to aid metal recovery, mineral processing, or management of
              mining-related wastes and liabilities.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-emerald-900/20 rounded-lg p-4 border border-emerald-700/30">
                <h4 className="text-emerald-300 font-semibold mb-2">Mechanisms</h4>
                <ul className="text-emerald-200 text-sm space-y-1">
                  <li>• Bioleaching & biooxidation</li>
                  <li>• Bioseparation & biosorption</li>
                  <li>• Bioprecipitation</li>
                  <li>• Monitoring & biosensing</li>
                </ul>
              </div>
              <div className="bg-emerald-900/20 rounded-lg p-4 border border-emerald-700/30">
                <h4 className="text-emerald-300 font-semibold mb-2">Applications</h4>
                <ul className="text-emerald-200 text-sm space-y-1">
                  <li>• Heap & tank leaching</li>
                  <li>• Metal separation & polishing</li>
                  <li>• AMD treatment & closure</li>
                  <li>• Tailings reprocessing</li>
                </ul>
              </div>
            </div>
            <p className="text-emerald-100 mt-4 text-sm italic">
              Our goal: a gold-standard, technically accurate, practically oriented resource for both communities
              to design better projects together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PathCard({ title, subtitle, icon: Icon, color, sections, link }) {
  const colorClasses = {
    emerald: {
      bg: 'from-emerald-900/50 to-emerald-800/30',
      border: 'border-emerald-500/50',
      text: 'text-emerald-300',
      hover: 'hover:border-emerald-400'
    },
    amber: {
      bg: 'from-amber-900/50 to-amber-800/30',
      border: 'border-amber-500/50',
      text: 'text-amber-300',
      hover: 'hover:border-amber-400'
    }
  };

  const colors = colorClasses[color];

  return (
    <div className={`bg-gradient-to-br ${colors.bg} backdrop-blur-sm rounded-2xl p-8 border-2 ${colors.border} ${colors.hover} transition-all duration-300 hover:scale-105`}>
      <div className="flex items-center gap-3 mb-4">
        <Icon className={`w-8 h-8 ${colors.text}`} />
        <div>
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <p className="text-slate-300 text-sm">{subtitle}</p>
        </div>
      </div>

      <div className="space-y-3 mt-6">
        {sections.map((section, i) => {
          const SectionIcon = section.icon;
          return (
            <div key={i} className="flex items-center gap-3 text-slate-200">
              <SectionIcon className="w-5 h-5 text-slate-400" />
              <span className="text-sm">{section.title}</span>
            </div>
          );
        })}
      </div>

      <Link
        href={link}
        className={`mt-6 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-colors`}
      >
        <span>Start Learning</span>
        <ChevronRight className="w-5 h-5" />
      </Link>
    </div>
  );
}

function ResourceCard({ title, description, icon: Icon, link, small = false }) {
  return (
    <Link
      href={link}
      className="bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all block"
    >
      <Icon className={`${small ? 'w-6 h-6' : 'w-8 h-8'} text-emerald-400 mb-3`} />
      <h3 className={`${small ? 'text-base' : 'text-lg'} font-semibold text-white mb-2`}>{title}</h3>
      <p className="text-slate-300 text-sm">{description}</p>
    </Link>
  );
}
