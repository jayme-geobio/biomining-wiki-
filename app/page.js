'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Microscope, Mountain, BookOpen, Beaker, Droplets, GraduationCap, Factory, AlertTriangle, Target, TrendingUp } from 'lucide-react';

export default function BiominingHome() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="px-12 pt-6 pb-6">
          {/* Hero Card + Ghost Box */}
          <div className="mb-6">
            <div className="flex gap-6 items-stretch">
              {/* Solid card */}
              <div className="flex-1 bg-[#edede6] rounded-3xl p-10 shadow-xl border border-white">
                <h1 className="text-5xl font-bold text-[#264563] mb-3 leading-tight">
                  Biomining Wiki
                </h1>
                <p className="text-xl text-[#264563] mb-3">
                  A bridge between biology and mining for critical mineral recovery
                </p>
                <p className="text-[#264563] text-base">
                  Leveraging biological mechanisms to unlock value from complex materials where conventional chemistry is too costly, too blunt, or too risky
                </p>
              </div>
              {/* Ghost outline box */}
              <div className="flex-1 rounded-3xl border-2 border-white shadow-xl" />
            </div>
          </div>

          {/* Why Now Section */}
          <div className="mb-6">
            <div className="bg-[#edede6] rounded-3xl p-8 shadow-xl border border-white">
              <h2 className="text-2xl font-bold text-[#264563] mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
                Why Biomining Now?
              </h2>
              <div className="text-[#264563] space-y-3">
                <p>
                  Mining and critical mineral recovery face a <strong>new constraint set</strong>: rising demand from clean energy,
                  shifting toward harder feedstocks, and intensifying limits around energy, water, tailings, and social licence.
                </p>
                <p>
                  <strong>Complexity</strong> is the central issue. Most lab breakthroughs use simplified systems, but industry faces
                  polymetallic ores, process waters with diverse co-metals, legacy wastes, and tight operational constraints.
                </p>
                <p className="text-emerald-700 font-semibold">
                  Biomining's niche is precisely where this complexity makes conventional chemistry expensive, blunt, or risky—and
                  where biology's ability to couple redox, binding, and adaptation can unlock value.
                </p>
              </div>
            </div>
          </div>

          {/* Dual Path Selection */}
          <div className="grid md:grid-cols-2 gap-8 mt-6">
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

            <PathCard
              title="For Mining Professionals"
              subtitle="Understand how biology can enhance your operations"
              icon={Mountain}
              color="blue"
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
          <div className="mt-6">
            <div className="bg-[#edede6] rounded-3xl p-8 shadow-xl border border-white">
              <h2 className="text-2xl font-bold text-[#264563] mb-6 text-center">
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
          </div>

          {/* What is Biomining Definition */}
          <div className="mt-6">
            <div className="bg-[#edede6] rounded-3xl p-8 shadow-xl border border-white">
              <h3 className="text-xl font-semibold text-[#264563] mb-3 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-emerald-600" />
                What This Wiki Covers
              </h3>
              <p className="text-[#264563] mb-4">
                <strong>Biomining</strong> means <strong>any use of biological mechanisms</strong>—cells, enzymes,
                proteins, metabolites, or consortia—to aid metal recovery, mineral processing, or management of
                mining-related wastes and liabilities.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
                  <h4 className="text-emerald-800 font-semibold mb-2">Mechanisms</h4>
                  <ul className="text-emerald-700 text-sm space-y-1">
                    <li>• Bioleaching & biooxidation</li>
                    <li>• Bioseparation & biosorption</li>
                    <li>• Bioprecipitation</li>
                    <li>• Monitoring & biosensing</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
                  <h4 className="text-emerald-800 font-semibold mb-2">Applications</h4>
                  <ul className="text-emerald-700 text-sm space-y-1">
                    <li>• Heap & tank leaching</li>
                    <li>• Metal separation & polishing</li>
                    <li>• AMD treatment & closure</li>
                    <li>• Tailings reprocessing</li>
                  </ul>
                </div>
              </div>
              <p className="text-[#264563] mt-4 text-sm italic">
                Our goal: a gold-standard, technically accurate, practically oriented resource for both communities
                to design better projects together.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function PathCard({ title, subtitle, icon: Icon, color, sections, link }) {
  const colorClasses = {
    emerald: {
      iconColor: 'text-emerald-600',
      btn: 'bg-emerald-600 hover:bg-emerald-700 text-white',
    },
    blue: {
      iconColor: 'text-[#264563]',
      btn: 'bg-[#264563] hover:bg-[#1e3450] text-white',
    }
  };

  const colors = colorClasses[color];

  return (
    <div className="bg-[#edede6] rounded-3xl p-8 shadow-xl border border-white hover:shadow-2xl transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <Icon className={`w-7 h-7 ${colors.iconColor}`} />
        <div>
          <h2 className="text-xl font-bold text-[#264563]">{title}</h2>
          <p className="text-[#264563] text-sm">{subtitle}</p>
        </div>
      </div>

      <div className="space-y-2 mt-5">
        {sections.map((section, i) => {
          const SectionIcon = section.icon;
          return (
            <div key={i} className="flex items-center gap-3 text-[#264563]">
              <SectionIcon className="w-4 h-4 text-[#264563]/50" />
              <span className="text-sm">{section.title}</span>
            </div>
          );
        })}
      </div>

      <Link
        href={link}
        className={`mt-6 flex items-center justify-center gap-2 ${colors.btn} px-6 py-2.5 rounded-lg transition-colors text-sm font-medium`}
      >
        <span>Start Learning</span>
        <ChevronRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

function ResourceCard({ title, description, icon: Icon, link }) {
  return (
    <Link
      href={link}
      className="bg-gray-50 hover:bg-white rounded-xl p-5 border border-gray-200 hover:border-emerald-200 hover:shadow-md transition-all block"
    >
      <Icon className="w-7 h-7 text-emerald-600 mb-3" />
      <h3 className="text-base font-semibold text-[#264563] mb-1.5">{title}</h3>
      <p className="text-[#264563] text-sm">{description}</p>
    </Link>
  );
}
