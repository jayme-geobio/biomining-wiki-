'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight, Microscope, Zap, Beaker, Factory, FlaskConical, FileCheck } from 'lucide-react';
import CommentableContent from '../components/CommentableContent';
import GlossaryTerm from '../components/GlossaryTerm';



export default function ForMiners() {
  const [openSections, setOpenSections] = useState(new Set());
  const [openModalities, setOpenModalities] = useState(new Set());

  function toggleSection(key) {
    setOpenSections(prev => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  }
  function toggleModality(key) {
    setOpenModalities(prev => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  }

  return (
    <CommentableContent pageName="for-miners">

      <div className="min-h-screen pt-4 pb-6 max-w-7xl mx-auto px-6 space-y-6">

        {/* Box 1: Header */}
        <div className="flex gap-6 items-stretch">
          <div className="flex-1 bg-[#edede6] rounded-3xl px-6 sm:px-10 shadow-xl border border-white flex flex-col justify-center h-auto py-10 sm:h-80">
            <h1 className="text-2xl sm:text-4xl font-bold text-[#264563] mb-3 leading-tight">Biology 101</h1>
            <p className="text-base text-[#264563]">
              If mining is going to use biology to improve effectiveness and economics, you need to understand how biological systems interact with metals
            </p>
          </div>
          <div className="hidden sm:block flex-1 rounded-3xl border-2 border-white shadow-xl" />
        </div>

        {/* Box 2: Definition + Sections */}
        <div className="bg-[#edede6] rounded-3xl shadow-2xl p-5 sm:p-8 md:p-12 border border-white">

          {/* Key Insight */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#264563] mb-3">
              Biology as Switchable, Selective Chemistry
            </h2>
            <div className="text-[#264563] space-y-3">
              <p>
                Biology provides <strong>switchable, selective chemistry</strong> for metal extraction and management.
                Like reagents and catalysts, biological systems are constrained by temperature, pH, ionic strength, inhibitors, and
                substrate availability. Understanding these constraints is key to successful integration.              </p>
              <div className="bg-[#264563]/5 rounded-lg p-4 border-l-4 border-[#264563] mt-4">
                <p className="text-[#264563]">
                  Think of biology not as a replacement for your <GlossaryTerm term="Flowsheet" definition="A diagram or sequence of unit operations showing how ore is processed from feed to final product">flowsheet</GlossaryTerm>, but as a <strong>new class of reagent</strong>—one
                  that can adapt, self-regenerate, and operate selectively where conventional chemistry struggles.
                </p>
              </div>
              <p className="mt-4 font-semibold">
              This guide helps you understand how biological systems interact with metals and minerals and how they fit into mining processes.
              </p>
            </div>
          </div>
        </div>

        {/* Biological Systems & Mechanisms */}
        <div className="bg-[#edede6] rounded-3xl shadow-2xl p-5 sm:p-8 md:p-12 border border-white">
          <h2 className="text-2xl font-bold text-[#264563] mb-6">Biological Systems in Mining</h2>
          <BiologicalSystemsSection />
        </div>

        {/* Biomining Modalities */}
        <div className="bg-[#edede6] rounded-3xl shadow-2xl p-5 sm:p-8 md:p-12 border border-white">
          <h2 className="text-2xl font-bold text-[#264563] mb-6">Biomining Modalities & Flowsheets</h2>
            <div className="space-y-6">

              {/* Classical Bioleaching & Biooxidation */}
              <div className="bg-[#264563]/10 rounded-xl p-5 border border-[#264563]/30">
                <h3 className="text-lg font-bold text-[#264563] mb-4 pb-2 border-b border-[#264563]/30">
                  Classical Bioleaching & Biooxidation
                </h3>
                <div className="space-y-4">
                  <ModalityCard
                    title="Dump & Heap Bioleaching"
                    description={<><GlossaryTerm term="Bulk Waste Rock" definition="Rock discarded prior to metallurgical extraction (overburden, low-grade, refractory, or gangue-rich material)">Low-grade sulfide ores</GlossaryTerm> piled on pads and irrigated with acidic ferric solutions. Native or <GlossaryTerm term="Inoculum" definition="A prepared microbial culture introduced to initiate or enhance biological activity in a process">inoculated</GlossaryTerm> <GlossaryTerm term="Acidophile" definition="Organism that thrives at low pH (typically pH &lt; 3)">acidophiles</GlossaryTerm> catalyze Fe & S oxidation and metal release.</>}
                    applications="Common for copper sulfide ores, with growing interest for other sulfides"
                    parameters={[
                      "Time: Months to years",
                      "Temperature: Ambient to ~50°C",
                      "pH: 1.5-2.5",
                      "Scale: Very large (Mt)"
                    ]}
                    integration={
                      <> <GlossaryTerm term="Comminution" definition="Size reduction of ore through crushing and grinding to liberate valuable minerals">Comminution</GlossaryTerm> → <strong>Bioleaching</strong> → <GlossaryTerm term="Pregnant Leach Solution (PLS)" definition="Metal-bearing solution collected after leaching ore or concentrate">PLS</GlossaryTerm> → <GlossaryTerm term="Solvent Extraction (SX)" definition="Liquid–liquid extraction process that selectively transfers dissolved metals between immiscible phases">SX</GlossaryTerm>/<GlossaryTerm term="Electrowinning (EW)" definition="Electrochemical process that deposits metal from solution onto a cathode">EW</GlossaryTerm> → metal cathodes </>
                    }
                    challenges={<><GlossaryTerm term="Passivation" definition="Formation of a surface layer on ore particles that inhibits further leaching">Passivation</GlossaryTerm> layers, channeling, oxygen/nutrient limitations</>}
                    expanded={openModalities.has('dump')}
                    onToggle={() => toggleModality('dump')}
                  />

                  <ModalityCard
                    title="Stirred-Tank Biooxidation"
                    description={<><GlossaryTerm term="Refractory Gold" definition="Heterogeneous rock with low grades and/or refractory mineralogy; can contain 'hidden' critical metals">Refractory gold</GlossaryTerm> or polymetallic sulfide <GlossaryTerm term="Concentrate" definition="The product of mineral processing that contains a higher concentration of valuable minerals than the original ore, produced by removing gangue through flotation, gravity, or magnetic separation">concentrates</GlossaryTerm> oxidized in aerated reactors prior to cyanidation or other leaching.</>}
                    applications={<>Proven technology for <GlossaryTerm term="Refractory Gold" definition="Heterogeneous rock with low grades and/or refractory mineralogy; can contain 'hidden' critical metals">refractory gold</GlossaryTerm> (BIOX®, BacTech)</>}
                    parameters={[
                      "Time: Days to weeks",
                      <>Temperature: 40-50°C (<GlossaryTerm term="Mesophile" definition="An organism that grows best at moderate temperatures, typically 20-45°C">mesophile</GlossaryTerm>) or 65-85°C (<GlossaryTerm term="Thermophile" definition="An organism that thrives at elevated temperatures, typically 45-80°C">thermophile</GlossaryTerm>)</>,
                      "pH: 1.5-2.0",
                      "Scale: Moderate (kt concentrate)"
                    ]}
                    integration={
                       <><GlossaryTerm term="Froth Flotation" definition="A process that separates hydrophobic valuable minerals from hydrophilic gangue by attaching them to air bubbles in a slurry">Flotation</GlossaryTerm> → <strong>biooxidation</strong> → cyanidation → recovery</>
                    }
                    challenges="Capital intensive, energy costs, solids loading limits"
                    expanded={openModalities.has('stirred')}
                    onToggle={() => toggleModality('stirred')}
                  />

                  <ModalityCard
                    title="In-Situ & In-Stope Bioleaching"
                    description={<>Injection of <GlossaryTerm term="Lixiviant" definition="A liquid medium used to selectively extract metals from ore through leaching">lixiviants</GlossaryTerm> and/or microbes into permeable deposits underground or in fractured zones.</>}
                    applications="Attractive for low-grade or inaccessible deposits"
                    parameters={[
                      "Time: Years",
                      "Temperature: Variable (geothermal gradient)",
                      "pH: Controlled by injection",
                      "Scale: Highly variable"
                    ]}
                    integration={
                      <>Injection wells → <strong>bioleaching</strong> → collection → processing</>
                    }
                    challenges="Geotechnical risks, regulatory hurdles, containment"
                    expanded={openModalities.has('insitu')}
                    onToggle={() => toggleModality('insitu')}
                  />
                </div>
              </div>

              {/* Advanced Bioseparations & Waste Recovery */}
              <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-600/30">
                <h3 className="text-lg font-bold text-emerald-700 mb-4 pb-2 border-b border-emerald-600/30">
                  Advanced Bioseparations & Waste Recovery
                </h3>

                <EmerginTechCard
                  expanded={openModalities.has('emerging')}
                  onToggle={() => toggleModality('emerging')}
                />

                <BioremediationCard
                  expanded={openModalities.has('bioremediation')}
                  onToggle={() => toggleModality('bioremediation')}
                />
              </div>
            </div>

          {/* Navigation */}
          <div className="mt-12 flex justify-between">
            <Link href="/" className="text-[#264563] hover:text-[#1e3450] flex items-center gap-2">
              ← Back to Home
            </Link>
            <Link href="/complex-materials" className="text-[#264563] hover:text-[#1e3450] flex items-center gap-2">
              Complex Materials Playbook →
            </Link>
          </div>
        </div>

      </div>
    </CommentableContent>
  );
}
function BiologicalSystemsSection() {
  const [openSubsections, setOpenSubsections] = useState(new Set());

  function toggleSubsection(key) {
    setOpenSubsections(prev => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  }

  return (
    <div className="space-y-6">
      <p className="text-[#264563]">
        Biology's superpower is customizability, enabling tunable interactions with metals and minerals across three main forms: 
      </p>

      <div className="rounded-xl border border-[#264563]/20 overflow-hidden bg-white">
        <button
          onClick={() => toggleSubsection('living')}
          className="w-full p-5 flex items-center justify-between hover:bg-[#264563]/5 transition-colors"
        >
          <h3 className="text-lg font-semibold text-[#264563]">
            Microbial Systems
          </h3>
          <div className="flex items-center gap-2 text-[#264563]/50 text-sm shrink-0">
            <span>{openSubsections.has('living') ? 'Click to collapse' : 'Click to expand'}</span>
            {openSubsections.has('living') ? <ChevronDown className="w-4 h-4 text-[#264563]" /> : <ChevronRight className="w-4 h-4 text-[#264563]" />}
          </div>
        </button>

        {openSubsections.has('living') && (
          <div className="p-6 pt-0 border-t border-[#264563]/10 space-y-6">
            <div className="pt-4 space-y-3 text-[#264563]">
              <h4 className="text-base font-semibold">What Microbes Are</h4>
              <p>
                Microorganisms (microbes) are microscopic living organisms such as bacteria, archaea, and fungi. Unlike chemical reagents or materials, they are living systems that grow, reproduce, and actively respond to their environment.
              </p>
            </div>

            <div className="space-y-3 text-[#264563]">
              <h4 className="text-base font-semibold">How Microbes Work</h4>
              <p>
                Think of microbes as <strong>tiny, tunable chemical factories</strong> — not just organisms that eat and grow, but programmable systems with customizable inputs and outputs. Microorganisms operate by carrying out chemical reactions to obtain energy from their environment. These reactions allow them to power their metabolism, maintain cellular processes, and produce new cells.
              </p>
              <p>
                At a high level, microbes need three things to survive and do work:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <NeedCard
                  title="Energy Source"
                  examples={[
                    "Light (not relevant here)",
                    "Oxidation of ferrous iron (Fe²⁺)",
                    "Reduced sulfur compounds",
                    "Organic carbon"
                  ]}
                />
                <NeedCard
                  title="Electron Donors/Acceptors"
                  examples={[
                    "ferrous iron (Fe²⁺) / ferric iron (Fe³⁺)",
                    "Reduced/oxidized sulfur",
                    "molecular oxygen (O₂), nitrate, sulfate",
                  ]}
                />
                <NeedCard
                  title="Carbon Source"
                  examples={[
                    <>carbon dioxide (CO₂) (<GlossaryTerm term="Autotroph" definition="Organisms that use CO₂ as their carbon source">autotrophs</GlossaryTerm>)</>,
                    <>Organic carbon (<GlossaryTerm term="Heterotroph" definition="Organisms that rely on organic carbon">heterotrophs</GlossaryTerm>)</>,
                    "Mixed modes"
                  ]}
                />
              
              </div>
              <p className="italic">
              In practice, some substances serve multiple functions depending on the organism and metabolism.
              </p>
              </div>  
            <div className="space-y-3 text-[#264563]">
              <h4 className="text-base font-semibold">How Microbes Interact With Minerals</h4>
              <p>
              Microbes influence how metals move because their metabolism changes the chemistry of minerals and surrounding fluids. These changes can dissolve minerals, expose valuable metals for recovery, or form new minerals that capture or stabilize metals.
              Think of familiar processes such as baking bread or turning milk into cheese — microbes drive reactions that gradually alter materials and their environment to produce valuable products.
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="rounded-xl border border-[#264563]/20 overflow-hidden bg-white">
        <button
          onClick={() => toggleSubsection('nonliving')}
          className="w-full p-5 flex items-center justify-between hover:bg-[#264563]/5 transition-colors"
        >
          <h3 className="text-lg font-semibold text-[#264563]">
            Biomolecular Systems
          </h3>
          <div className="flex items-center gap-2 text-[#264563]/50 text-sm shrink-0">
            <span>{openSubsections.has('nonliving') ? 'Click to collapse' : 'Click to expand'}</span>
            {openSubsections.has('nonliving') ? <ChevronDown className="w-4 h-4 text-[#264563]" /> : <ChevronRight className="w-4 h-4 text-[#264563]" />}
          </div>
        </button>

        {openSubsections.has('nonliving') && (
          <div className="p-6 pt-0 border-t border-[#264563]/10 space-y-6">
            <div className="pt-4 space-y-3 text-[#264563]">
              <h4 className="text-base font-semibold">What Biomolecules Are</h4>
              <p>
                Biomolecular systems use biological molecules such as proteins, <GlossaryTerm term="Peptide" definition="A short chain of amino acids that can be engineered to selectively bind metals">peptides</GlossaryTerm>, <GlossaryTerm term="Polysaccharide" definition="A large carbohydrate molecule made of repeating sugar units, often produced by microbes as part of EPS">polysaccharides</GlossaryTerm>, or other bio-derived materials to interact with metals. Unlike microbes, these are not living systems — they do not grow, reproduce, or metabolize.
              </p>
            </div>

            <div className="space-y-3 text-[#264563]">
              <h4 className="text-base font-semibold">How Biomolecules Work</h4>
              <p>
                Biomolecules interact with metals through specific chemical binding sites on their molecular structure, which can coordinate (trap) metal ions and hold them in place. In natural biological systems, these interactions allow organisms to transport, store, and control metals needed for cellular processes. 
              </p>
              
            </div>

            <div className="space-y-3 text-[#264563]">
              <h4 className="text-base font-semibold">How Biomolecules Are Used in Mining</h4>
              <p>
                Biomolecular systems leverage these natural metal-binding interactions to selectively capture, concentrate, or separate metals from complex solutions. These interactions can pull target metals out of mixed streams, remove unwanted impurities, or recover metals from dilute solutions.
              </p>
              <p>
                At a high level, biomolecular systems function in three steps:
              </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <NeedCard
                    title="Selective Binding"
                    examples={[
                      "Biomolecules bind specific metals",
                      "Binding can be highly selective",
                      "Enables capture of metals from complex mixtures"
                    ]}
                  />
                  <NeedCard
                    title="Seperation"
                    examples={[
                      "Bound metals stay on the biomolecule",
                      "Target metal concentrates"
                    ]}
                  />
                  <NeedCard
                    title="Release & Recovery"
                    examples={[
                      "Conditions are adjusted to release the bound metal",
                      "Metal is recovered in a concentrated stream",
                      "Biomolecules can often be reused"
                    ]}
                  />
                  </div>
                  <p className="italic">
                  In practice, performance depends not just on binding strength, but also on selectivity, stability, and the ability to regenerate the material.
                  </p>
              
            </div>
          </div>
        )}
      </div>

      <div className="rounded-xl border border-[#264563]/20 overflow-hidden bg-white">
        <button
          onClick={() => toggleSubsection('phyto')}
          className="w-full p-5 flex items-center justify-between hover:bg-[#264563]/5 transition-colors"
        >
          <h3 className="text-lg font-semibold text-[#264563]">
            Phytomining
          </h3>
          <div className="flex items-center gap-2 text-[#264563]/50 text-sm shrink-0">
            <span>{openSubsections.has('phyto') ? 'Click to collapse' : 'Click to expand'}</span>
            {openSubsections.has('phyto') ? <ChevronDown className="w-4 h-4 text-[#264563]" /> : <ChevronRight className="w-4 h-4 text-[#264563]" />}
          </div>
        </button>

        {openSubsections.has('phyto') && (
          <div className="p-6 pt-0 border-t border-[#264563]/10 space-y-6">
            <div className="pt-4 space-y-3 text-[#264563]">
              <h4 className="text-base font-semibold">What Phytomining Is</h4>
              <p>
                Phytomining uses plants to extract metals from soils, <GlossaryTerm term="Mine Waste" definition="All solid and liquid waste produced during mineral extraction and processing, including tailings, waste rock, and process water">mine waste</GlossaryTerm>, or <GlossaryTerm term="Bulk Waste Rock" definition="Rock discarded prior to metallurgical extraction (overburden, low-grade, refractory, or gangue-rich material)">low-grade deposits</GlossaryTerm>. Certain plants, known as hyperaccumulators, naturally absorb and concentrate metals in their tissues.
              </p>
            </div>

            <div className="space-y-3 text-[#264563]">
              <h4 className="text-base font-semibold">How Phytomining Works</h4>
              <p>
                Plants take up dissolved metals from the soil through their roots as part of normal nutrient uptake. These metals are transported through the plant and stored in leaves, stems, or other tissues.
              </p>
              <p>
                At a high level, phytomining systems perform in three steps:
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <NeedCard
                  title="Uptake"
                  examples={[
                    "Plant roots absorb dissolved metals from soil or water",
                    "Metals enter the plant through normal nutrient transport pathways"
                  ]}
                />
                <NeedCard
                  title="Transport & Accumulation"
                  examples={[
                    "Metals move through the plants vascular system",
                    "Some species concentrate metals in leaves, stems, or other tissues"
                  ]}
                />
                <NeedCard
                  title="Stable & Reusable Material"
                  examples={[
                    "Metal-rich biomass is harvested",
                    "Metals are recovered from the plant material through processing"
                  ]}
                />
              </div>

              <p className="italic">
                The most widely used application is the bioremediation of metal-contaminated soils.
              </p>
            </div>

            <div className="space-y-3 text-[#264563]">
              <h4 className="text-base font-semibold">How Plants Interact With Metals</h4>
              <p>
                Plants influence how metals move through soils by absorbing dissolved metal ions through their roots and transporting them through their tissues. In some species, metals can accumulate to very high concentrations in leaves, stems, or other plant parts, allowing metals to be concentrated in biomass.
              </p>
            </div>
          </div>
        )}
      </div>
      {/* Key Mechanisms */}
      <div className="rounded-xl border-2 border-white overflow-hidden">
        <button
          onClick={() => toggleSubsection('mechanisms')}
          className="w-full p-5 bg-[#264563] flex items-center justify-between hover:bg-[#1e3450] transition-colors"
        >
          <h3 className="text-lg font-semibold text-white">
            Key Mechanisms of Metal Mobilization & Capture
          </h3>
          <div className="flex items-center gap-2 text-white/70 text-sm shrink-0">
            <span>{openSubsections.has('mechanisms') ? 'Click to collapse' : 'Click to expand'}</span>
            {openSubsections.has('mechanisms') ? <ChevronDown className="w-4 h-4 text-white" /> : <ChevronRight className="w-4 h-4 text-white" />}
          </div>
        </button>

        {openSubsections.has('mechanisms') && (
          <div className="p-6 pt-0 border-t border-[#264563]/10 space-y-4">
            <p className="text-[#264563] pt-4">
              Biological systems mobilize and capture metals through several mechanistic pathways. All can be engineered or tuned:
            </p>

            <MechanismCard
              title="Acidolysis"
              description="Production of acids (organic or inorganic) that break down, dissolve, or alter minerals"
              application="Important for carbonates and some sulfide minerals"
              example="Microbes oxidize sulfur to sulfuric acid (H₂SO₄), which attacks chalcopyrite (CuFeS₂)"
              color="amber"
              usedBy="Microbes"
            />

            <MechanismCard
              title="Redoxolysis"
              description={<>Oxidation or reduction of metals or <GlossaryTerm term="Ligand" definition="A molecule that binds to a metal ion to form a complex">ligands</GlossaryTerm> that controls solubility</>}
              application="ferrous iron (Fe²⁺) → ferric iron (Fe³⁺) oxidation, hexavalent uranium (U(VI)) → tetravalent uranium (U(IV)) reduction"
              example="Ferric iron (Fe³⁺) generated by microbes acts as an oxidant to leach copper from sulfides"
              color="blue"
              usedBy="Microbes"
            />

            <MechanismCard
              title="Complexolysis"
              description="Production of ligands that complex (bind) metals and keep them in solution"
              application={<><GlossaryTerm term="Metallophores / Siderophores" definition="Small molecules secreted by microbes that chelate metals with high affinity">Metallophores</GlossaryTerm>, <GlossaryTerm term="Metallophores / Siderophores" definition="Small molecules secreted by microbes that chelate metals with high affinity">siderophores</GlossaryTerm>, organic acids</>}
              example={<>Microbes secrete organic acids that <GlossaryTerm term="Chelation" definition="Formation of a stable complex between a metal ion and an organic molecule">chelate</GlossaryTerm> rare earth elements</>}
              color="emerald"
              usedBy="Microbes, Biomolecules"
            />

            <MechanismCard
              title="Biosorption & Bioaccumulation"
              description={<>Metals stick to cell surfaces or <GlossaryTerm term="Extracellular Polymeric Substances (EPS)" definition="Polymers secreted by microbes that form biofilms and modify local chemistry">EPS</GlossaryTerm> (biosorption), or are actively taken up and stored (<GlossaryTerm term="Bioaccumulation" definition="Active uptake and intracellular storage of metals by living organisms">bioaccumulation</GlossaryTerm>)</>}
              application="Rapid metal capture, often independent of metabolism"
              example={<>Algae and bacteria sorb heavy metals from <GlossaryTerm term="Acid Mine Drainage (AMD)" definition="Acidic, metal-rich water produced when sulfide minerals in mine waste are exposed to air and water; often accelerated by microbial activity">acid mine drainage (AMD)</GlossaryTerm> on cell surfaces</>}
              color="teal"
              usedBy="Microbes, Phytomining"
            />

            <MechanismCard
              title="Bioprecipitation & Biomineralization"
              description="Microbial activity alters local chemistry, causing dissolved metals to precipitate from solution"
              application="Metal removal from solution in remediation and recovery systems"
              example={<><GlossaryTerm term="Sulfate-Reducing Bacteria (SRB)" definition="Bacteria that use sulfate as electron acceptor, producing sulfide">Sulfate-reducing bacteria (SRB)</GlossaryTerm> produce sulfide that precipitates copper (Cu), zinc (Zn), and other metals from solution</>}
              color="sky"
              usedBy="Microbes"
            />
          </div>
        )}
      </div>
    </div>
    );
    }
function Section({ title, icon: Icon, expanded, onToggle, children }) {
  return (
    <div className="rounded-xl mb-4 border-2 border-white overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full bg-[#264563] p-6 flex items-center justify-between hover:bg-[#1e3450] transition-colors"
      >
        <div className="flex items-center gap-3">
          <Icon className="w-6 h-6 text-white" />
          <h2 className="text-lg font-bold text-white">{title}</h2>
        </div>
        <div className="flex items-center gap-2 text-white/70 text-sm shrink-0">
          <span>{expanded ? 'Click to collapse' : 'Click to expand'}</span>
          {expanded ? <ChevronDown className="w-5 h-5 text-white" /> : <ChevronRight className="w-5 h-5 text-white" />}
        </div>
      </button>
      {expanded && <div className="bg-[#edede6] p-6 border-t border-white/20">{children}</div>}
    </div>
  );
}

function NeedCard({ title, examples }) {
  return (
    <div className="bg-white rounded-lg p-4 border border-[#264563]/20">
      <h3 className="text-lg font-bold text-[#264563] mb-2">{title}</h3>
      <ul className="space-y-1">
        {examples.map((ex, i) => (
          <li key={i} className="text-[#264563] text-sm flex items-start gap-2">
            <span className="text-[#264563]" style={{marginTop: '0.05em'}}>→</span>
            <span>{ex}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MicrobeCard({ name, examples, function: func, relevance }) {
  return (
    <div className="bg-white rounded-lg p-4 border border-[#264563]/20">
      <h4 className="text-lg font-bold text-[#264563]">{name}</h4>
      <p className="text-[#264563]/50 text-xs mt-1 italic">{examples}</p>
      <p className="text-[#264563] text-sm mt-2"><strong>Function:</strong> {func}</p>
      <p className="text-[#264563] text-sm mt-1"><strong>Relevance:</strong> {relevance}</p>
    </div>
  );
}

function MechanismCard({ title, description, application, example, color, usedBy }) {
  const colorClasses = {
    blue:    { border: 'border-[#264563]',   text: 'text-[#264563]' },
    amber:   { border: 'border-amber-500',   text: 'text-amber-500' },
    emerald: { border: 'border-emerald-700', text: 'text-emerald-700' },
    teal:    { border: 'border-teal-500',    text: 'text-teal-500' },
    sky:     { border: 'border-sky-500',     text: 'text-sky-500' },
  };
  const { border, text } = colorClasses[color] || colorClasses.blue;

  return (
    <div className={`rounded-lg p-4 border bg-white ${border}`}>
      <div className="flex items-start justify-between mb-1">
        <h3 className={`text-lg font-bold ${text}`}>{title}</h3>
        <span className="text-xs font-medium text-[#264563]/60 bg-[#264563]/5 rounded px-2 py-0.5 ml-3 whitespace-nowrap">Biological system(s): {usedBy}</span>
      </div>
      <p className="text-[#264563] text-sm mb-2">{description}</p>
      <p className="text-[#264563] text-sm mb-2">
        <strong>Application:</strong> {application}
      </p>
      <div className="bg-white rounded p-2 border border-[#264563]/10">
        <p className="text-[#264563] text-xs">
          <strong>Example:</strong> {example}
        </p>
      </div>
    </div>
  );
}

function EmerginTechCard({ expanded, onToggle }) {
  return (
    <div className="rounded-xl border-2 border-emerald-600/20 overflow-hidden mt-4">
      <button
        onClick={onToggle}
        className="w-full bg-emerald-700 px-6 py-4 flex items-center justify-between hover:bg-emerald-800 transition-colors"
      >
        <h4 className="text-base font-bold text-white">Emerging Technologies for REEs & Complex Matrices</h4>
        <div className="flex items-center gap-2 text-white/70 text-sm shrink-0">
          <span>{expanded ? 'Click to collapse' : 'Click to expand'}</span>
          {expanded ? <ChevronDown className="w-5 h-5 text-white" /> : <ChevronRight className="w-5 h-5 text-white" />}
        </div>
      </button>
      {expanded && (
        <div className="bg-white p-5">
          <p className="text-[#264563] text-sm mb-7">Biomolecular ligands and non-chromatographic formats that selectively capture and concentrate <GlossaryTerm term="Rare Earth Elements (REEs)" definition="A group of 17 metallic elements (lanthanides plus scandium and yttrium) critical for electronics, magnets, and clean energy">rare earth elements</GlossaryTerm> and <GlossaryTerm term="Critical Minerals" definition="Minerals essential to economic or national security with supply chains vulnerable to disruption">critical metals</GlossaryTerm> from complex, dilute feed streams.</p>
          <div className="grid grid-cols-3 gap-3 mb-7">
            <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-600/20">
              <p className="text-emerald-800 font-semibold text-xs mb-1">Protein/Peptide-Based Ligands</p>
              <p className="text-emerald-700/70 text-xs">(e.g., lanmodulin) for selective REE capture</p>
            </div>
            <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-600/20">
              <p className="text-emerald-800 font-semibold text-xs mb-1">Hybrid Biomolecular Ligands</p>
              <p className="text-emerald-700/70 text-xs">Peptides + polymers for improved manufacturability</p>
            </div>
            <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-600/20">
              <p className="text-emerald-800 font-semibold text-xs mb-1">Non-Chromatographic Deployments</p>
              <p className="text-emerald-700/70 text-xs">Membranes, beads, structured packings for <GlossaryTerm term="Pregnant Leach Solution (PLS)" definition="Metal-bearing solution collected after leaching ore or concentrate">PLS</GlossaryTerm> polishing</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-3">
            <div>
              <p className="text-sm font-semibold text-[#264563] mb-1 underline">Applications</p>
              <p className="text-[#264563] text-sm mb-7"><GlossaryTerm term="Coal By-products" definition="Coal combustion byproducts including fly ash and bottom ash, rich in REEs and heavy metals; billions of tons stockpiled globally with limited disposal options">Coal by-products</GlossaryTerm>, <GlossaryTerm term="Phosphogypsum" definition="Radioactive waste from fertilizer production containing REEs and other critical metals">phosphogypsum</GlossaryTerm>, <GlossaryTerm term="Red Mud" definition="Caustic bauxite waste with REEs, Sc, and other metals">red mud</GlossaryTerm>, spent catalysts, magnet scrap</p>
              <p className="text-sm font-semibold text-[#264563] mb-1 underline">Integration</p>
              <p className="text-[#264563] text-sm">
                Feed stream → <strong>selective binding</strong> → elution & recovery → purified metal stream
              </p>
            </div>
            <div className="pl-16">
              <p className="text-sm font-semibold text-[#264563] mb-1 underline">Key Parameters</p>
              <ul className="text-[#264563] text-sm space-y-1">
                <li>• Time: Minutes to hours</li>
                <li>• Temperature: Ambient (~20–40°C)</li>
                <li>• pH: Typically 3–6 (feed dependent)</li>
                <li>• Scale: Modular (columns, membranes, contactors)</li>
              </ul>
            </div>
          </div>
          <div className="bg-orange-50 rounded p-2 border border-orange-500 w-1/2">
            <p className="text-xs font-semibold text-orange-500 mb-1">Common Challenges</p>
            <p className="text-orange-600 text-sm">Matrix effects, <GlossaryTerm term="Fouling" definition="Unwanted accumulation of material on equipment surfaces that reduces efficiency">fouling</GlossaryTerm>, immobilization strategies, feed chemistry variability</p>
          </div>
        </div>
      )}
    </div>
  );
}

function BioremediationCard({ expanded, onToggle }) {
  return (
    <div className="rounded-xl border-2 border-emerald-600/20 overflow-hidden mt-4">
      <button
        onClick={onToggle}
        className="w-full bg-emerald-700 px-6 py-4 flex items-center justify-between hover:bg-emerald-800 transition-colors"
      >
        <h4 className="text-base font-bold text-white">Bioremediation & Recovery from Waste</h4>
        <div className="flex items-center gap-2 text-white/70 text-sm shrink-0">
          <span>{expanded ? 'Click to collapse' : 'Click to expand'}</span>
          {expanded ? <ChevronDown className="w-5 h-5 text-white" /> : <ChevronRight className="w-5 h-5 text-white" />}
        </div>
      </button>
      {expanded && (
        <div className="bg-white p-5">
          <p className="text-[#264563] text-sm mb-7">Biological systems that remove or recover metals from mine drainage, waste streams, and secondary sources — converting liabilities into recoverable resources.</p>
          <div className="grid grid-cols-3 gap-3 mb-7">
            <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-600/20">
              <p className="text-emerald-800 font-semibold text-xs mb-1">AMD/ARD Bioremediation</p>
              <p className="text-emerald-700/70 text-xs">Constructed wetlands, <GlossaryTerm term="Sulfate-Reducing Bacteria (SRB)" definition="Bacteria that use sulfate as electron acceptor, producing sulfide">SRB</GlossaryTerm> bioreactors, and algae systems that remove metals and raise pH</p>
            </div>
            <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-600/20">
              <p className="text-emerald-800 font-semibold text-xs mb-1">Metal Recovery from AMD</p>
              <p className="text-emerald-700/70 text-xs">Selective sorbents and biomineralization to recover copper (Cu), zinc (Zn), REEs, and other metals</p>
            </div>
            <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-600/20">
              <p className="text-emerald-800 font-semibold text-xs mb-1">E-waste & Urban Mining</p>
              <p className="text-emerald-700/70 text-xs"><GlossaryTerm term="Bioleaching" definition="Microbially mediated solubilization of metals from solids (ores, tailings, wastes)">Bioleaching</GlossaryTerm> and <GlossaryTerm term="Biosorption" definition="Sorption of dissolved metals onto biomass or extracellular polymeric substances (EPS)">biosorption</GlossaryTerm> applied to circuit boards, magnets, and electronics</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-3">
            <div>
              <p className="text-sm font-semibold text-[#264563] mb-1 underline">Applications</p>
              <p className="text-[#264563] text-sm mb-7">Mine drainage treatment, <GlossaryTerm term="Tailings" definition="Fine-grained residues after metal extraction; typically stored in engineered impoundments">tailings</GlossaryTerm> reprocessing, legacy site remediation, <GlossaryTerm term="E-waste" definition="Discarded electronics rich in Cu, Au, Pd, REEs, and critical metals, but with complex polymer/metal mixtures">e-waste</GlossaryTerm> and magnet scrap</p>
              <p className="text-sm font-semibold text-[#264563] mb-1 underline">Integration</p>
              <p className="text-[#264563] text-sm">Parameters and integration pathways vary by technique and site conditions</p>
            </div>
            <div className="pl-16">
              <p className="text-sm font-semibold text-[#264563] mb-1 underline">Key Parameters</p>
              <p className="text-[#264563] text-sm">• Highly site- and technique-dependent</p>
            </div>
          </div>
          <div className="bg-orange-50 rounded p-2 border border-orange-500 w-1/2">
            <p className="text-xs font-semibold text-orange-500 mb-1">Common Challenges</p>
            <p className="text-orange-600 text-sm">Long treatment timescales, regulatory and discharge compliance</p>
          </div>
        </div>
      )}
    </div>
  );
}

function ModalityCard({ title, description, applications, parameters, integration, challenges, expanded, onToggle }) {
  return (
    <div className="rounded-xl border-2 border-white overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full bg-[#264563] px-6 py-4 flex items-center justify-between hover:bg-[#1e3450] transition-colors"
      >
        <h4 className="text-base font-bold text-white">{title}</h4>
        <div className="flex items-center gap-2 text-white/70 text-sm shrink-0">
          <span>{expanded ? 'Click to collapse' : 'Click to expand'}</span>
          {expanded ? <ChevronDown className="w-5 h-5 text-white" /> : <ChevronRight className="w-5 h-5 text-white" />}
        </div>
      </button>
      {expanded && (
        <div className="bg-white p-5 border-t border-white/20">
          <p className="text-[#264563] text-sm mb-7">{description}</p>

          <div className="grid grid-cols-2 gap-4 mb-3">
            <div>
              <p className="text-sm font-semibold text-[#264563] mb-1 underline">Applications</p>
              <p className="text-[#264563] text-sm mb-7">{applications}</p>
              <p className="text-sm font-semibold text-[#264563] mb-1 underline">Integration</p>
              <p className="text-[#264563] text-sm">{integration}</p>
            </div>
            <div className="pl-16">
              <p className="text-sm font-semibold text-[#264563] mb-1 underline">Key Parameters</p>
              <ul className="text-[#264563] text-sm space-y-1">
                {parameters.map((p, i) => <li key={i}>• {p}</li>)}
              </ul>
            </div>
          </div>

          <div className="bg-orange-50 rounded p-2 border border-orange-500 w-1/2">
            <p className="text-xs font-semibold text-orange-500 mb-1">Common Challenges</p>
            <p className="text-orange-600 text-sm">{challenges}</p>
          </div>
        </div>
      )}
    </div>
  );
}
