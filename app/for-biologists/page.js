'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight, Mountain, Factory, Beaker, AlertCircle, TrendingUp, Clock, Droplets, FileCheck } from 'lucide-react';
import CommentableContent from '../components/CommentableContent';

export default function ForBiologists() {
  const [expandedSection, setExpandedSection] = useState(null);

  return (
    <CommentableContent pageName="for-biologists">
      <div className="min-h-screen py-8 px-12 space-y-6">

        {/* Box 1: Header */}
        <div className="flex gap-6 items-stretch">
          <div className="flex-1 bg-[#edede6] rounded-3xl p-10 shadow-xl border border-white">
            <h1 className="text-4xl font-bold text-emerald-900 mb-3 leading-tight">Mining 101 for Biologists</h1>
            <p className="text-xl text-emerald-700">
            If biology is going to matter in mining, you need to know where it lives in a flowsheet
            </p>
          </div>
          <div className="flex-1 rounded-3xl border-2 border-white shadow-xl" />
        </div>

        {/* Box 2: Definition + Sections */}
        <div className="bg-[#edede6] rounded-3xl shadow-2xl p-8 md:p-12 border border-white">

          {/* Why This Matters */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-emerald-800 mb-3 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-emerald-700" />
              Why Biologists Need to Understand Mining
            </h2>
            <div className="text-emerald-900 space-y-3">
              <p>
                From the mining side, <strong>"biomining" is not a magical stand-alone box</strong>. It's a candidate
                step in a tightly constrained value chain where:
              </p>
              <ul className="ml-6 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">•</span>
                  Rock is moved at a scale of<strong>millions of tonnes per year</strong>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">•</span>
                  Margins can be thin and metal prices are volatile
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">•</span>
                  Time scales, water availability, and permitting often matter as much as chemistry
                </li>
              </ul>
              <p className="mt-4 font-semibold">
                This guide helps you place biological ideas in realistic process contexts and speak the language
                of mining engineers.
              </p>
            </div>
          </div>

          {/* The Journey */}
          <Section
            title="The Journey from Rock to Metal"
            icon={Mountain}
            expanded={expandedSection === 'journey'}
            onToggle={() => setExpandedSection(expandedSection === 'journey' ? null : 'journey')}
          >
            <div className="space-y-4">
              <p className="text-emerald-900">
                At a high level, the mining value chain looks like this:
              </p>

              <div className="bg-white rounded-lg p-6 border border-emerald-200">
                <div className="font-mono text-sm text-emerald-700 space-y-2">
                  <div>Rock in the ground</div>
                  <div className="ml-4">↓ <span className="text-emerald-600">(exploration & resource modeling)</span></div>
                  <div>Ore body defined</div>
                  <div className="ml-4">↓ <span className="text-emerald-600">(mine planning & development)</span></div>
                  <div>Ore and waste rock excavated</div>
                  <div className="ml-4">↓ <span className="text-emerald-600">(crushing, grinding, concentration)</span></div>
                  <div>Concentrate / leach solution</div>
                  <div className="ml-4">↓ <span className="text-emerald-600">(metallurgical extraction & refining)</span></div>
                  <div>Saleable product(s) (metal, concentrate, chemicals)</div>
                  <div className="ml-4">↓</div>
                  <div>Tailings, waste rock, water management and closure</div>
                </div>
              </div>

              <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                <p className="text-emerald-800 text-sm">
                  <strong>Where biology plugs in:</strong> Heap/in-situ leaching, metal separation and polishing,
                  AMD treatment and closure, tailings reprocessing
                </p>
              </div>
            </div>
          </Section>

          {/* Value Chain Stages */}
          <Section
            title="Mining Value Chain - Stage by Stage"
            icon={Factory}
            expanded={expandedSection === 'stages'}
            onToggle={() => setExpandedSection(expandedSection === 'stages' ? null : 'stages')}
          >
            <div className="space-y-6">
              <StageCard
                title="1. Exploration & Resource Definition"
                what="Finding and characterizing ore bodies through geologic mapping, core drilling, and lab assays to measure grade and mineralogy"
                whyBiology={[
                  "New bio-technologies can change which parts of a deposit are considered 'ore'",
                  "Enable recovery of critical by-product elements currently ignored",
                  "Bio-assays and biosensors for exploration geochemistry"
                ]}
                whereBio={[
                  "Biosensors for exploration",
                  "Resource models that incorporate bioprocess options"
                ]}
              />

              <StageCard
                title="2. Mine Planning & Development"
                what="Choosing a mining method (open pit vs underground), mine layout, and routing material to ore stockpiles, low-grade stockpiles, waste dumps, or tailings"
                whyBiology={[
                  "Decisions here govern tonnage, time, and access for your process",
                  "Long-residence-time bio-processes best suited for stockpiles, tailings, or AMD",
                  "Include bio-recovery in closure plans from day one"
                ]}
                whereBio={[
                  "Biologically compatible stockpile design",
                  "Bioremediation and bio-recovery in closure plans"
                ]}
              />

              <StageCard
                title="3. Mining: Getting The Rock Out"
                what="Drill, blast, load, and haul rock. Scale: tens to hundreds of thousands of tonnes per day. Mix of ore and waste is imperfect"
                whyBiology={[
                  "Input material is stressed, mixed, partly oxidized rock - not pure minerals",
                  "Size distribution and surface damage from blasting affect leach kinetics",
                  "Water infiltration and oxygen diffusion are key for heaps and in-situ"
                ]}
                whereBio={[
                  "In-stope leaching (injecting solutions into fractured zones)",
                  "Blast patterns that favor bioleaching (fracture networks)"
                ]}
              />

              <StageCard
                title="4. Comminution"
                what="Crushing and grinding to liberate minerals and increase surface area for downstream processing"
                whyBiology={[
                  "Comminution is often the most energy-intensive step in mining",
                  "Separation efficiency strongly depends on mineral surface chemistry and particle size",
                  "Biology that allows coarser processing without sacrificing recovery is extremely valuable"
                ]}
                whereBio={[
                  "Bio-assisted comminution (microbes weakening grain boundaries)"
                ]}
              />

              <StageCard
                title="5. Concentration & Leaching"
                what="Metals are either concentrated using flotation, gravity, or magnetic separation, or extracted by leaching into solution. These routes produce either concentrate or a metal-bearing leach solution"
                whyBiology={[
                  "Mineral surface chemistry governs flotation selectivity and leach kinetics",
                  "Biology can modify mineral surfaces to improve or suppress flotation of specific minerals",
                  "Bioleaching can replace or supplement chemical leaching for sulfide ores"
                ]}
                whereBio={[
                  "Bio-modification of mineral surfaces to improve flotation or separation",
                  "Bioleaching/biooxidation for direct metal extraction",
                ]}
              />

              <StageCard
                title="6. Metallurgy & Refining"
                what="Convert concentrates or metal-bearing solutions into saleable products via hydrometallurgy (precipitation, SX, IX, EW) or pyrometallurgy (smelting, refining)"
                whyBiology={[
                  "Impurities and purity thresholds are critical — small contamination can wreck downstream processes",
                  "Biology offers highly selective ligands under mild operating conditions"
                ]}
                whereBio={[
                  "Bioseparations for polishing and capturing critical co-products",
                  "SRB reactors for treating bleed streams"
                ]}
              />

              <StageCard
                title="7. Waste, Water & Closure"
                what="Managing tailings storage, waste-rock dumps, water systems, and long-term closure obligations"
                whyBiology={[
                  "Acid mine drainage and seepage can persist for decades",
                  "This is where liability and social license live",
                  "Most mature biological applications are in this space"
                ]}
                whereBio={[
                  "Constructed wetlands and SRB reactors for AMD",
                  "Treating AMD and tailings as a resource (recover Cu, Zn, REEs)",
                  "Using former mine sites as test beds for new tech"
                ]}
              />
            </div>
          </Section>

          {/* Key Constraints */}
          <Section
            title="Constraints That Shape Bio-Adoption"
            icon={AlertCircle}
            expanded={expandedSection === 'constraints'}
            onToggle={() => setExpandedSection(expandedSection === 'constraints' ? null : 'constraints')}
          >
            <div className="space-y-4">
              <ConstraintCard
                title="Time"
                icon={Clock}
                description="Operations expect fast processing times - often hours to days, not months to years (except in heap or dump leaching)"
                implication="If your process is slow, consider treating stockpiles, tailings, or AMD where slow is acceptable, or use biology to polish/condition streams"
              />
              <ConstraintCard
                title="Throughput & Scale"
                icon={TrendingUp}
                description="Mid-size mines process tens of millions of tonnes of ore annually."
                implication="Be explicit about scale. Side-stream bio-units are more realistic early targets than whole-plant replacements"
              />
              <ConstraintCard
                title="Process Integration & Risk"
                icon={AlertCircle}
                description="Mines are complex, coupled systems. Unexpected downtime is extremely expensive"
                implication="Design 'safe failure' modes with bypass options, emphasizing instrumentation and control. Provide clear lab → pilot → demonstration pathways"
              />
              <ConstraintCard
                title="Water, Reagents & Permitting"
                icon={Droplets}
                description="Water is often constrained. Reagents have costs, hazards, and permitting implications"
                implication="Bio-solutions that reduce net reagent use, enable higher water recycling, or simplify permitting have extra strategic value"
              />
            </div>
          </Section>

          {/* Design Checklist */}
          <Section
            title="Quick Design Checklist"
            icon={FileCheck}
            expanded={expandedSection === 'checklist'}
            onToggle={() => setExpandedSection(expandedSection === 'checklist' ? null : 'checklist')}
          >
            <div className="bg-white rounded-lg p-6 border border-emerald-200">
              <p className="text-emerald-700 mb-4">
                Before investing heavily in a biomining concept, answer these in one page:
              </p>
              <div className="space-y-4">
                {[
                  "Where does this sit in the mining value chain? (exploration, extraction, comminution, concentration, leaching, separation, closure)",
                  "What is the feedstock? (ore, concentrate, tailings, AMD, e-waste, slag - mineralogy, grade, particle size)",
                  "What is the competing conventional option? (heap leach, tank leach, SX, smelting, lime neutralization)",
                  "What is your biological advantage? (lower cost, lower energy, higher selectivity, new resource access, better closure)",
                  "What does success look like to the mine operator? (higher recovery, lower OPEX, unlocking new resource, reducing closure liability)",
                  "What is your realistic first deployment? (side-stream polishing, tailings/AMD reprocessing, pilot at legacy site)"
                ].map((q, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-bold">
                      {i + 1}
                    </div>
                    <p className="text-emerald-900">{q}</p>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* Navigation */}
          <div className="mt-12 flex justify-between">
            <Link href="/" className="text-emerald-700 hover:text-emerald-900 flex items-center gap-2">
              ← Back to Home
            </Link>
            <Link href="/flowsheets" className="text-emerald-700 hover:text-emerald-900 flex items-center gap-2">
              See Example Flowsheets →
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
        className="w-full bg-emerald-700 p-6 flex items-center justify-between hover:bg-emerald-800 transition-colors"
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

function StageCard({ title, what, whyBiology, whereBio }) {
  return (
    <div className="bg-white rounded-lg p-5 border border-emerald-200">
      <h3 className="text-lg font-semibold text-emerald-900 mb-3">{title}</h3>

      <div className="mb-4">
        <h4 className="text-sm font-semibold text-emerald-600 mb-1">What it is:</h4>
        <p className="text-emerald-900 text-sm">{what}</p>
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-semibold text-emerald-700 mb-2">Why it matters to biologists:</h4>
        <ul className="space-y-1">
          {whyBiology.map((item, i) => (
            <li key={i} className="text-emerald-900 text-sm flex items-start gap-2">
              <span className="text-emerald-500 mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-emerald-50 rounded p-3 border border-emerald-200">
        <h4 className="text-sm font-semibold text-emerald-700 mb-2">Where biology might plug in:</h4>
        <ul className="space-y-1">
          {whereBio.map((item, i) => (
            <li key={i} className="text-emerald-800 text-sm flex items-start gap-2">
              <span className="text-emerald-600">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ConstraintCard({ title, icon: Icon, description, implication }) {
  return (
    <div className="bg-white rounded-lg p-5 border border-emerald-200">
      <div className="flex items-center gap-2 mb-2">
        <Icon className="w-5 h-5 text-emerald-700" />
        <h3 className="font-semibold text-emerald-900">{title}</h3>
      </div>
      <p className="text-emerald-900 text-sm mb-3">{description}</p>
      <div className="bg-emerald-50 rounded p-3 border-l-4 border-emerald-600">
        <p className="text-emerald-800 text-sm">
          <strong>Implication:</strong> {implication}
        </p>
      </div>
    </div>
  );
}
