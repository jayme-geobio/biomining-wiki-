export const glossaryData = {
  mining: [
    {
      term: "Mineral",
      definition: "Naturally occurring, inorganic solid substance with a defined chemical composition and crystalline structure",
      examples: "Quartz, chalcopyrite, pyrite",
      forBiologists: "Minerals are the building blocks of rocks that biological systems interact with. Different minerals require different biological strategies for metal extraction.",
      forMiners: "Standard definition - biology doesn't change mineralogy, but can change reaction pathways."
    },
    {
      term: "Rock",
      definition: "Aggregate of one or more minerals; composition and texture can be heterogeneous",
      examples: "Granite, basalt, ore bodies",
      forBiologists: "Your feedstock is rock, not pure minerals. Expect heterogeneity and variable reactivity.",
      forMiners: "Biology works on real rock, not idealized single minerals - important for lab-to-field translation."
    },
    {
      term: "Ore",
      definition: "Rock that contains a commodity (metal/mineral) in concentrations and contexts that are economically mineable",
      examples: "Copper ore, gold ore, REE-bearing rock",
      forBiologists: "What counts as 'ore' is price-dependent and process-dependent. Biology can shift the economic threshold.",
      forMiners: "Bio-processes may make sub-economic material economic by reducing processing costs."
    },
    {
      term: "Gangue",
      definition: "The unwanted minerals that accompany ore minerals in a rock",
      examples: "Calcite in sphalerite-bearing ore, quartz in gold ore",
      forBiologists: "Gangue affects pH buffering, competing reactions, and can consume reagents. Always characterize gangue mineralogy.",
      forMiners: "Biology may be more selective than conventional chemistry, potentially handling gangue-rich material better."
    },
    {
      term: "Grade",
      definition: "Concentration of a valuable element or mineral in ore",
      examples: "2.5% Cu, 0.8 g/t Au",
      forBiologists: "Grade directly affects energy and reagent budgets. Low-grade material is where biology often has competitive advantage.",
      forMiners: "Biological processes may be economic at lower grades than conventional methods due to lower OPEX."
    },
    {
      term: "Feedstock",
      definition: "Material fed into a process step",
      examples: "Ore into the mill, tailings into reprocessing plant",
      forBiologists: "Always characterize your feedstock: mineralogy, grade, particle size, moisture, acid consumption.",
      forMiners: "Bio-feedstock characterization should include microbial toxicity tests and buffering capacity."
    },
    {
      term: "Tailings",
      definition: "Fine-grained residues after metal extraction; typically stored in engineered impoundments",
      examples: "Post-flotation tailings, heap leach residues",
      forBiologists: "Huge volumes, lower grades, but often accessible and already partially processed. Good bio-targets.",
      forMiners: "Tailings reprocessing with biology can reduce liability while recovering value."
    },
    {
      term: "Bulk Waste Rock",
      definition: "Rock discarded prior to metallurgical extraction (overburden, low-grade, refractory, or gangue-rich material)",
      examples: "Mine dumps, low-grade stockpiles",
      forBiologists: "Potential future resources. Long time horizons acceptable. Design for low-cost, extensive bio-systems.",
      forMiners: "Biology may unlock value from waste piles too expensive to process conventionally."
    },
    {
      term: "Critical Minerals",
      definition: "Elements deemed essential to economic or national security and vulnerable to supply disruption",
      examples: "Rare earth elements, Ni, Co, Li, Pt-group metals",
      forBiologists: "Often present as minor or trace elements. Selective bio-ligands can capture them as co-products.",
      forMiners: "Biology's selectivity advantage is strongest for complex, multi-metal systems with critical by-products."
    },
    {
      term: "Concentrate",
      definition: "The product of mineral processing that contains a higher concentration of valuable minerals than the original ore, produced by removing gangue through flotation, gravity, or magnetic separation",
      examples: "Copper concentrate (~25-30% Cu), gold concentrate, zinc concentrate",
      forBiologists: "Concentrate is a common feedstock for biooxidation (e.g., refractory gold). Higher grade means higher metal exposure — consider toxicity.",
      forMiners: "Bio-processes can treat concentrates in stirred tanks (e.g., BIOX®) or polish concentrate-derived solutions."
    }
  ],
  biology: [
    {
      term: "Autotroph",
      definition: "Organisms that use CO₂ as their carbon source",
      examples: "Acidithiobacillus",
      forBiologists: "Standard definition. Most bioleaching microbes are autotrophs (CO₂ fixers).",
      forMiners: "Autotrophs don't need organic carbon - cheaper to operate in metal-rich, nutrient-poor environments."
    },
    {
      term: "Heterotroph",
      definition: "Organisms that rely on organic carbon",
      examples: "Most fungi",
      forBiologists: "Standard definition. Use organic compounds as their carbon source.",
      forMiners: "Heterotrophs often grow quickly and produce metal-mobilizing compounds."
    },
    {
      term: "Lithotroph",
      definition: "Organisms using inorganic electron donors such as Fe²⁺, reduced sulfur, or H₂",
      examples: "Iron-oxidizers, sulfur-oxidizers",
      forBiologists: "Key players in bioleaching. They obtain electrons from inorganic minerals.",
      forMiners: "Lithotrophs are the workforce of bioleaching - they generate the acids and oxidants that dissolve metals."
    },
    {
      term: "Organotroph",
      definition: "Organisms using organic compounds as electron donors",
      examples: "Aspergillus, Gluconobacter",
      forBiologists: "Standard definition. Obtain electrons from organic molecules.",
      forMiners: "Often produce organic acids and ligands that help dissolve minerals and mobilize metals."
    },
    {
      term: "Bioleaching",
      definition: "Microbially mediated solubilization of metals from solids (ores, tailings, wastes)",
      examples: "Heap leaching copper, tank leaching e-waste",
      forBiologists: "Broad category. Can involve acid production, oxidant production, or complexing ligands.",
      forMiners: "The main bio-process for primary metal extraction. Proven at commercial scale for Cu, Au, U, Ni, Co."
    },
    {
      term: "Biooxidation",
      definition: "Microbially driven oxidation of sulfides where the valuable metal remains in the solid phase",
      examples: "Pre-treatment of refractory gold ores (BIOX®)",
      forBiologists: "Goal is to break down sulfide matrix, not dissolve the target metal. Different optimization than bioleaching.",
      forMiners: "Proven technology for refractory gold. Exposes gold locked in sulfides for subsequent cyanidation."
    },
    {
      term: "Biosorption",
      definition: "Sorption of dissolved metals onto biomass or extracellular polymeric substances (EPS)",
      examples: "Algae accumulating heavy metals, bacterial EPS binding REEs",
      forBiologists: "Rapid, often passive. Can be very selective depending on functional groups on cell surface.",
      forMiners: "Useful for metal capture from dilute streams (AMD, process water). Can be coupled with biomass harvest."
    },
    {
      term: "Metallophores / Siderophores",
      definition: "Small molecules secreted by microbes that chelate metals with high affinity",
      examples: "Siderophores for Fe, lanthanophores for REEs",
      forBiologists: "Natural metal-binding ligands. Can be harvested or expressed heterologously.",
      forMiners: "Highly selective ligands for separations. Potential advantage over synthetic ligands in complex matrices."
    },
    {
      term: "Bioseparation",
      definition: "Use of biomolecules (proteins, peptides, polymers, whole cells) as selective sorbents or separation agents",
      examples: "Lanmodulin for REE separation, peptide-functionalized resins",
      forBiologists: "Emerging field. Combines selectivity of biology with engineering of deployable systems.",
      forMiners: "Most relevant for high-value, hard-to-separate metals (REEs, PGMs). Still early-stage but promising."
    },
    {
      term: "Acidophile",
      definition: "Organism that thrives at low pH (typically pH < 3)",
      examples: "Acidithiobacillus, Leptospirillum, Ferroplasma",
      forBiologists: "Acid-tolerant microbes are essential for most bioleaching applications.",
      forMiners: "These are the organisms that work in the harsh, acidic conditions of heaps and tanks."
    },
    {
      term: "Sulfate-Reducing Bacteria (SRB)",
      definition: "Bacteria that use sulfate as electron acceptor, producing sulfide",
      examples: "Desulfovibrio, Desulfotomaculum",
      forBiologists: "Opposite of sulfur-oxidizers. Lower redox potential, raise pH, precipitate metals.",
      forMiners: "Core organisms for AMD treatment. Convert dissolved metals to insoluble metal sulfides."
    },
    {
      term: "Extracellular Polymeric Substances (EPS)",
      definition: "Polymers secreted by microbes that form biofilms and modify local chemistry",
      examples: "Polysaccharides, proteins, DNA in biofilms",
      forBiologists: "EPS affects metal binding, diffusion, and surface reactivity.",
      forMiners: "EPS can enhance or inhibit leaching depending on context. Important for heap irrigation design."
    }
  ]
};

// Build a flat lookup map for quick access by term name
export function getGlossaryMap() {
  const map = {};
  [...glossaryData.mining, ...glossaryData.biology].forEach(entry => {
    map[entry.term.toLowerCase()] = entry;
  });
  return map;
}
