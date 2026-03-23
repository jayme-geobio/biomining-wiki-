'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Microscope, Mountain, BookOpen, Beaker, Droplets, GraduationCap, Factory, AlertTriangle, Target, TrendingUp, MessageSquare, HelpCircle, ArrowRight } from 'lucide-react';

export default function BiominingHome() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="px-28 pt-4 pb-6">
          {/* Hero Card + Ghost Box */}
          <div className="mb-6">
            <div className="flex gap-6 items-stretch">
              {/* Solid card */}
              <div className="flex-1 bg-[#edede6] rounded-3xl px-10 shadow-xl border border-white flex flex-col justify-center h-80">
                <h1 className="text-5xl font-bold text-[#264563] leading-tight">
                  The Biomining Handbook
                </h1>
                <p className="text-base text-[#264563]">
                  A practical guide for biologists and mining professionals
                </p>
              </div>
              {/* Ghost outline box */}
              <div className="flex-1 rounded-3xl border-2 border-white shadow-xl" />
            </div>
          </div>

          {/* About This Handbook */}
          <div className="mb-6">
            <div className="bg-[#edede6] rounded-3xl p-8 shadow-xl border border-white">
              <h3 className="text-2xl font-bold text-[#264563] mb-3">
                About This Handbook
              </h3>
              <div className="text-[#264563] space-y-3">
                <p>
                  Biomining holds enormous potential for critical mineral recovery, but the field lacks a centralized resource bridging biological solutions and mining challenges. This handbook aims to address that gap.
                </p>
                <p>
                  Born from Homeworld's <Link href="/research#building-the-research-roadmap" className="underline decoration-dotted decoration-emerald-600/50 underline-offset-2 cursor-pointer hover:decoration-emerald-600 transition-colors">Biomining Under Complex Conditions Workshop</Link>, <strong>our goal is a gold-standard, technically accurate resource for both communities to design better projects together.</strong>
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-[#264563] rounded-xl p-4">
                    <p className="font-semibold text-white mb-2">What you'll find:</p>
                    <div className="space-y-1 ml-1">
                      <div className="flex items-start gap-2">
                        <span className="text-emerald-400" style={{marginTop: '-0.1em'}}>•</span>
                        <span className="text-white text-sm">Key biomining concepts for biotechnologists and mining professionals</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-emerald-400" style={{marginTop: '-0.1em'}}>•</span>
                        <span className="text-white text-sm">Real-world examples and flowsheets of biological integration</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-emerald-400" style={{marginTop: '-0.1em'}}>•</span>
                        <span className="text-white text-sm">Practical tools for evaluating biological solutions</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-emerald-400" style={{marginTop: '-0.1em'}}>•</span>
                        <span className="text-white text-sm">Shared vocabulary and frameworks bridging both fields</span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl p-4 border-2 border-[#264563]">
                    <p className="font-semibold text-[#264563] mb-2">
                      Contribute to This Handbook:
                    </p>
                    <p className="text-[#264563] text-sm">
                      To keep this resource current and accurate, we've added a commenting feature. Highlight any text and click the <MessageSquare className="w-3.5 h-3.5 inline text-emerald-600" /> icon that appears to suggest updates, additions, or corrections.
                    </p>
                    <p className="text-[#264563] text-sm mt-2">
                      Interested in authoring or expanding a section? Select "Interested in Contributing" in the comment form and we'll reach out.
                    </p>
                    <p className="text-[#264563] text-xs mt-2 italic">
                      Note: Commenting is not available on the home page. All comments remain confidential and are reviewed by Homeworld Collective staff.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What is Biomining */}
          <div className="mb-6">
            <div className="bg-[#edede6] rounded-3xl p-8 shadow-xl border border-white">
              <h3 className="text-2xl font-bold text-[#264563] mb-3">
                What is Biomining?
              </h3>
              <div>
                <p className="text-[#264563] mb-4">
                  Any biological mechanism used to aid metal recovery, mineral processing, or the management of
                  mining-related wastes and liabilities.
                </p>
                <div className="flex items-center justify-center gap-4 mt-6">
                  <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 w-64 flex flex-col justify-center">
                    <h4 className="text-[#264563] font-semibold mb-2">Mechanisms</h4>
                    <ul className="text-[#264563] text-sm space-y-1">
                      <li>• Bioleaching & biooxidation</li>
                      <li>• Bioseparation & biosorption</li>
                      <li>• Bioprecipitation</li>
                      <li>• Monitoring & biosensing</li>
                    </ul>
                  </div>
                  <ArrowRight className="w-10 h-10 text-[#264563] flex-shrink-0" />
                  <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 w-64 flex flex-col justify-center">
                    <h4 className="text-[#264563] font-semibold mb-2">Applications</h4>
                    <ul className="text-[#264563] text-sm space-y-1">
                      <li>• Heap & tank leaching</li>
                      <li>• Metal separation & polishing</li>
                      <li>• AMD treatment & closure</li>
                      <li>• Tailings reprocessing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Now Section */}
          <div className="mb-6">
            <div className="bg-[#edede6] rounded-3xl p-8 shadow-xl border border-white">
              <h2 className="text-2xl font-bold text-[#264563] mb-4">
                Why Biomining Now?
              </h2>
              <div className="text-[#264563] space-y-3">
                <p>
                  Mining and critical mineral recovery face a <strong>new set of constraints</strong>: rising demand from clean energy,
                  a shift toward more complex feedstocks, and tightening limits around energy, water, tailings, and social licence.
                </p>
                <p>
                  <strong>Complexity</strong> is the central issue. Most lab breakthroughs use simplified systems, but industry faces
                  polymetallic ores, process waters with diverse co-metals, legacy wastes, and tight operational constraints.
                </p>
                <p className="text-emerald-700 font-semibold">
                  This complexity makes conventional chemistry expensive, blunt, or risky. Biology can couple selectivity with adaptation to unlock value.
                </p>
              </div>
            </div>
          </div>

          {/* Dual Path Selection */}
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            <PathCard
              title="Biology 101"
              subtitle="Understand how biology can enhance your operations"
              icon={Mountain}
              color="blue"
              sections={[
                { title: "Biological Systems in Mining", icon: Microscope },
                { title: "Mechanisms of Metal Mobilization & Capture", icon: Beaker },
                { title: "Biomining Modalities & Flowsheets", icon: Factory }
              ]}
              link="/for-miners"
            />

            <PathCard
              title="Mining 101"
              subtitle="Learn how your biology fits into mining operations"
              icon={Microscope}
              color="emerald"
              sections={[
                { title: "Mining Value Chain - Stage by Stage", icon: Factory },
                { title: "Constraints That Shape Bio-Adoption", icon: AlertTriangle }
              ]}
              link="/for-biologists"
            />
          </div>

          {/* Core Resources */}
          <div className="mt-6">
            <div className="bg-[#edede6] rounded-3xl p-8 shadow-xl border border-white">
              <h2 className="text-2xl font-bold text-[#264563] mb-6 text-left">
                Essential Resources
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                <ResourceCard
                  title="What Is Biomining?"
                  description="Definitions, mechanisms, and where biotech rivals chemistry"
                  icon={GraduationCap}
                  link="/what-is-biomining"
                />
                <ResourceCard
                  title="Complex Materials"
                  description="Tailings, AMD, e-waste, and where biology helps most"
                  icon={Droplets}
                  link="/complex-materials"
                />
                <ResourceCard
                  title="Example Flowsheets"
                  description="Real-world integration examples and bio-modules"
                  icon={Target}
                  link="/flowsheets"
                />
                <ResourceCard
                  title="Technology Assessment Checklist"
                  description="Evaluate biomining technologies against mining requirements"
                  icon={BookOpen}
                  link="/technology-evaluation"
                />
                <ResourceCard
                  title="Frontier Challenges"
                  description="Key research gaps and the roadmap ahead for biomining"
                  icon={TrendingUp}
                  link="/research"
                />
              </div>
              <div className="flex justify-end mt-12">
                <Link href="/what-is-biomining" className="inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 font-medium text-base transition-colors">
                  Learn more about biomining →
                </Link>
              </div>
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
    <div className="bg-[#edede6] rounded-3xl p-8 shadow-xl border border-white hover:shadow-2xl transition-all duration-300 flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <Icon className={`w-7 h-7 ${colors.iconColor}`} />
        <div>
          <h2 className="text-2xl font-bold text-[#264563]">{title}</h2>
          <p className="text-[#264563] text-sm">{subtitle}</p>
        </div>
      </div>

      <div className="space-y-2 mt-5 pl-10 flex-grow">
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
      className="bg-gray-50 hover:bg-white rounded-xl p-5 border border-gray-200 hover:border-emerald-700 hover:shadow-md transition-all block"
    >
      <Icon className="w-7 h-7 text-emerald-600 mb-3" />
      <h3 className="text-base font-semibold text-[#264563] mb-1.5">{title}</h3>
      <p className="text-[#264563] text-sm">{description}</p>
    </Link>
  );
}
