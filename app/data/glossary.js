export const glossaryData = {
  mining: [
    {
      term: "Acid Consumption",
      definition: "How much acid your material 'soaks up' prior to reaching a working pH",
      examples: "Carbonate-rich ores consuming sulfuric acid before leaching begins",
      forBiologists: "High acid consumption means your biogenic acid production must outpace buffering. Characterize gangue mineralogy to predict acid demand.",
      forMiners: "Acid consumption is a key economic parameter. Biology can generate acid in situ, potentially reducing reagent transport costs."
    },
    {
      term: "Acid Mine Drainage (AMD)",
      definition: "Acidic, metal-rich water (~pH 2-6) produced when sulfide minerals in mine waste are exposed to air, water, and microbes. Contains elevated sulfate, iron, aluminum, and toxic metals that form rust-colored deposits and can degrade water quality and aquatic ecosystems.",
      examples: "Drainage from waste-rock dumps, tailings seepage, pit-lake inflows",
      forBiologists: "Iron- and sulfur-oxidizing microbes accelerate AMD generation. The same biology that creates the problem can be harnessed for treatment and metal recovery.",
      forMiners: "Major long-term liability. Biological treatment (constructed wetlands, SRB reactors) is often the most cost-effective remediation approach, with potential for metal co-product recovery."
    },
    {
      term: "Bleed Stream",
      definition: "A side-stream of the main process pulled off to control impurity build-up",
      examples: "Removing a fraction of circulating leach solution to prevent iron or sulfate accumulation",
      forBiologists: "Bleed streams are excellent targets for bio-polishing — lower volume, concentrated impurities, and tolerance for slower kinetics.",
      forMiners: "Biology can selectively remove specific impurities from bleed streams, recovering value while maintaining circuit chemistry."
    },
    {
      term: "Bulk Waste Rock",
      definition: "Any rock waste generated prior to metallurgical extraction. This can include gangue material (no relevant mineralization), as well as low-grade or refractory (low target-metal content, high impurity) ore material.",
      examples: "Mine dumps, low-grade stockpiles",
      forBiologists: "Potential future resources. Long time horizons acceptable. Design for low-cost, extensive bio-systems.",
      forMiners: "Biology may unlock value from waste piles too expensive to process conventionally."
    },
    {
      term: "Comminution",
      definition: "Grinding ore into small particles to increase surface area and facilitate extraction of targeted elements; also referred to as 'milling'",
      examples: "Ball mills, SAG mills, HPGR (high-pressure grinding rolls)",
      forBiologists: "Comminution determines particle size distribution, which directly affects leach kinetics and microbial access to mineral surfaces.",
      forMiners: "Often the most energy-intensive step. Biology that allows coarser processing without sacrificing recovery is extremely valuable."
    },
    {
      term: "Complexation",
      definition: "The process of forming a stable complex between two or more compounds. In the case of biomining, microbes can secrete organic molecules that bind metals tightly and keep them soluble, or biomolecules can adsorb metals to surfaces.",
      examples: "Siderophore-iron complexes, organic acid-REE complexes",
      forBiologists: "A key mechanism for metal mobilization. Ligand selectivity and stability constants determine which metals can be targeted.",
      forMiners: "Bio-complexation can keep metals in solution under conditions where they would otherwise precipitate, improving recovery."
    },
    {
      term: "Concentrate",
      definition: "The product of mineral processing that contains a higher concentration of valuable minerals than the original ore, produced by removing gangue through flotation, gravity, or magnetic separation",
      examples: "Copper concentrate (~25-30% Cu), gold concentrate, zinc concentrate",
      forBiologists: "Concentrate is a common feedstock for biooxidation (e.g., refractory gold). Higher grade means higher metal exposure — consider toxicity.",
      forMiners: "Bio-processes can treat concentrates in stirred tanks (e.g., BIOX®) or polish concentrate-derived solutions."
    },
    {
      term: "Concentration",
      definition: "Increasing the amount of a given substance within another substance. Commonly in biomining, this involves removing gangue mineralogy.",
      examples: "Flotation concentrating copper sulfides, gravity separation concentrating gold",
      forBiologists: "Biological surface modification can improve concentration efficiency by altering mineral hydrophobicity or charge.",
      forMiners: "Bio-concentration methods may offer selectivity advantages for complex or polymetallic ores."
    },
    {
      term: "Critical Minerals",
      definition: "Minerals that are both essential to a nation's economy or national security and have supply chains that are vulnerable to disruption. The US Geological Survey (USGS) and Department of Energy (DOE) each have a list (with lots of overlap) as to which elements are considered critical.",
      examples: "Rare earth elements, Ni, Co, Li, Pt-group metals",
      forBiologists: "Often present as minor or trace elements. Selective bio-ligands can capture them as co-products.",
      forMiners: "Biology's selectivity advantage is strongest for complex, multi-metal systems with critical by-products."
    },
    {
      term: "Direct Lithium Extraction (DLE)",
      definition: "Lithium-selective processes for brines, such as adsorption, ion-sieve, or IX processes",
      examples: "Salar brines, geothermal brines, oilfield produced waters",
      forBiologists: "Biological DLE using selective binding proteins or engineered organisms is an emerging area with strong commercial interest.",
      forMiners: "DLE technologies promise higher recovery and lower environmental impact compared to traditional evaporation ponds."
    },
    {
      term: "Drainage",
      definition: "Aqueous discharge from mines and mine wastes; can range from acidic to alkaline and have variable chemistry",
      examples: "Acid mine drainage, neutral mine drainage, pit-lake overflow",
      forBiologists: "Drainage chemistry dictates which organisms can thrive. Characterize pH, metals, and redox before selecting biology.",
      forMiners: "Biological treatment of drainage can be passive and low-cost, especially for long-term closure scenarios."
    },
    {
      term: "Electrowinning (EW)",
      definition: "The electrodeposition of metals from their ores that have been put in solution",
      examples: "Copper cathode production from SX-EW circuits, zinc electrowinning",
      forBiologists: "EW is typically downstream of bio-processes. Solution purity from bioleaching affects EW current efficiency.",
      forMiners: "Standard downstream step. Bio-processes must produce solutions compatible with EW specifications."
    },
    {
      term: "Enhanced Geothermal Systems (EGS)",
      definition: "Adding permeability to hot rock followed by injecting water. The water extracts the heat, which is then pumped to the surface to produce electricity.",
      examples: "Engineered reservoirs in granite or volcanic formations",
      forBiologists: "EGS brines can contain dissolved metals and minerals — a potential feedstock for bio-extraction as a co-product of energy generation.",
      forMiners: "EGS represents a potential new source of critical minerals from geothermal fluids."
    },
    {
      term: "Feedstock",
      definition: "Raw, unprocessed material used to supply an industrial process (i.e. ore to go into the mill)",
      examples: "Ore into the mill, tailings into reprocessing plant",
      forBiologists: "Always characterize your feedstock: mineralogy, grade, particle size, moisture, acid consumption.",
      forMiners: "Bio-feedstock characterization should include microbial toxicity tests and buffering capacity."
    },
    {
      term: "Flowsheet",
      definition: "The standard mining industry term for a diagram showing how ore is processed from feed to final product through a sequence of unit operations—including crushing, grinding, separation, leaching, and refining steps",
      examples: "Copper heap leach flowsheet, refractory gold biooxidation flowsheet, e-waste bioleaching flowsheet",
      forBiologists: "The flowsheet shows where your biology must fit. Understanding the upstream and downstream steps—and their constraints (chemistry, residence time, throughput)—is essential for designing a viable bio-module.",
      forMiners: "Biological steps appear in flowsheets just like any other unit operation—with the same need for mass balance, residence time calculations, and integration with existing infrastructure."
    },
    {
      term: "Fly Ash",
      definition: "A fine, powdery particulate material produced from the burning of pulverized coal in power plants",
      examples: "Coal combustion residuals from power plants, stockpiled globally in billions of tons",
      forBiologists: "Fly ash contains REEs and heavy metals. Bio-extraction may access metals locked in glassy matrices that resist conventional leaching.",
      forMiners: "Massive volumes available. Low grade but accessible — a potential feedstock for bio-recovery of critical minerals."
    },
    {
      term: "Froth Flotation",
      definition: "A physical-chemical process for selectively separating hydrophobic materials from hydrophilic materials; commonly used to process sulfide ores by making the metal of interest hydrophobic. Finely ground ore is mixed with water, air, and chemical reagents; the copper sulfide particles attach to air bubbles and rise to the surface in a froth, while the gangue remains in the water. The froth is then skimmed off, resulting in a higher-grade copper concentrate.",
      examples: "Copper sulfide flotation, zinc-lead separation, phosphate flotation",
      forBiologists: "Microbes can modify mineral surfaces to improve or suppress flotation — an emerging area called bioflotation.",
      forMiners: "Standard concentration method. Biological surface modification may improve selectivity for complex ores."
    },
    {
      term: "Gangue",
      definition: "The commercially worthless material that surrounds, or is closely mixed with, a wanted mineral in an ore deposit",
      examples: "Calcite in sphalerite-bearing ore, quartz in gold ore",
      forBiologists: "Gangue affects pH buffering, competing reactions, and can consume reagents. Always characterize gangue mineralogy.",
      forMiners: "Biology may be more selective than conventional chemistry, potentially handling gangue-rich material better."
    },
    {
      term: "Geothermal Brine",
      definition: "Hot mineralized water arising from geothermal reservoirs",
      examples: "Salton Sea brines (rich in lithium), Iceland geothermal fluids",
      forBiologists: "Thermophilic and halophilic organisms may thrive in these conditions. Bio-extraction of metals from brines is an active research area.",
      forMiners: "A potential source of lithium and other critical metals, especially as a co-product of geothermal energy."
    },
    {
      term: "Grade",
      definition: "The concentration of a valuable mineral or metal in a body of ore, usually expressed as a percentage or in grams per ton",
      examples: "2.5% Cu, 0.8 g/t Au",
      forBiologists: "Grade directly affects energy and reagent budgets. Low-grade material is where biology often has competitive advantage.",
      forMiners: "Biological processes may be economic at lower grades than conventional methods due to lower OPEX."
    },
    {
      term: "Heap Leaching",
      definition: "Also called dump leaching, refers to a leaching process where low grade ores are piled up to form a leach pad and a lixiviant is percolated through the material to solubilize the metal. Pregnant leach solution (PLS) containing the metal is recovered through drains in the pad liner. This PLS can then be processed by conventional metallurgical methods. This is a low-cost (compared to conventional mining and metallurgy), but longer leach time, method to process low grade ores.",
      examples: "Copper heap leach operations, gold heap leaching with cyanide",
      forBiologists: "Many heaps already rely on native acidophiles. Intentional inoculation and management can significantly improve performance.",
      forMiners: "Proven at commercial scale for copper. Biology is often already present — managing it intentionally improves outcomes."
    },
    {
      term: "Hydrometallurgy",
      definition: "A process of extracting metals from ores, concentrates, and recycled materials using aqueous solutions",
      examples: "Leaching, solvent extraction, electrowinning, ion exchange",
      forBiologists: "Most biomining processes are hydrometallurgical. Understanding solution chemistry is essential for designing bio-modules.",
      forMiners: "Biology integrates naturally into hydrometallurgical circuits as a source of lixiviants, oxidants, or selective separation agents."
    },
    {
      term: "In Situ Leach (ISL)",
      definition: "A type of leaching operation that requires minimal surface disturbance in which lixiviant is pumped underground through a permeable sedimentary-hosted deposit and leaches the metal of interest as it passes through the deposit, only to be recovered by another set of pumps further downstream. This pregnant leach solution (PLS) can then be processed by conventional metallurgical methods.",
      examples: "Uranium ISL operations, copper ISL pilots",
      forBiologists: "Subsurface conditions (temperature, pH, oxygen) are harder to control. Indigenous microbial communities may help or hinder leaching.",
      forMiners: "Low surface disturbance is attractive for permitting. Biology can generate lixiviants in situ, reducing chemical injection needs."
    },
    {
      term: "Ion Exchange (IX)",
      definition: "A reversible interchange of an adsorbed ion with a dissolved ion of like charge. In mining, this process is used with selective ion exchange resins to remove, recover, and purify specific metal ions from aqueous solutions, such as process water or brine.",
      examples: "Uranium recovery from leach solutions, lithium extraction from brines",
      forBiologists: "Bio-functionalized IX resins are an emerging area — biomolecules can add selectivity that synthetic resins lack.",
      forMiners: "Standard purification technology. Bio-enhanced resins may offer improved selectivity for complex or polymetallic solutions."
    },
    {
      term: "Leach",
      definition: "To selectively dissolve metals from ore. In mining, there are different types of operational leaching including heap leaching, in situ leaching, and subsurface leaching.",
      examples: "Acid leaching of copper, alkaline leaching of gold, bioleaching of sulfides",
      forBiologists: "Bioleaching is the biological equivalent — using microbial metabolism to generate the acids and oxidants that dissolve metals.",
      forMiners: "Biology can replace or supplement chemical lixiviants, often at lower cost for low-grade or refractory materials."
    },
    {
      term: "Lixiviant",
      definition: "A liquid used to dissolve or extract metals from an ore",
      examples: "Sulfuric acid, ferric sulfate, cyanide solution, biogenic acids",
      forBiologists: "Microbes can produce lixiviants in situ (sulfuric acid, organic acids, ferric iron), reducing chemical transport costs.",
      forMiners: "Biogenic lixiviants can be generated on-site, potentially reducing reagent costs and permitting complexity."
    },
    {
      term: "Metallurgy",
      definition: "The branch of science and technology concerned with the properties of metals and their production and purification",
      examples: "Hydrometallurgy, pyrometallurgy, electrometallurgy",
      forBiologists: "Understanding metallurgical constraints is essential for designing bio-processes that integrate into real operations.",
      forMiners: "Biology adds a new toolkit to metallurgy — one that offers selectivity and mild conditions for complex feedstocks."
    },
    {
      term: "Milling",
      definition: "See 'comminution'",
      examples: "Ball milling, rod milling, SAG milling",
      forBiologists: "Milling determines the particle size your biology will encounter. Finer grinding increases surface area but also increases energy costs.",
      forMiners: "Same as comminution — the energy-intensive step that biology may help bypass through coarser processing."
    },
    {
      term: "Mine Waste",
      definition: "All residues and deposits left after mining activity. Types of mine waste include bulk waste rock, gangue and overburden, aqueous drainages (of all pHs), and tailings.",
      examples: "Waste rock dumps, tailings dams, acid mine drainage, slag heaps",
      forBiologists: "Mine waste is often the most accessible feedstock for bio-recovery — already excavated, partially processed, and representing a liability that recovery can reduce.",
      forMiners: "Biological reprocessing of mine waste can simultaneously reduce environmental liability and generate revenue."
    },
    {
      term: "Mineral",
      definition: "A solid inorganic substance with a well-defined crystal structure and chemical composition",
      examples: "Quartz, chalcopyrite, pyrite",
      forBiologists: "Minerals are the building blocks of rocks that biological systems interact with. Different minerals require different biological strategies for metal extraction.",
      forMiners: "Standard definition - biology doesn't change mineralogy, but can change reaction pathways."
    },
    {
      term: "Mining",
      definition: "The extraction and recovery of metals from materials",
      examples: "Open pit copper mining, underground gold mining, placer mining",
      forBiologists: "Mining is the industry context for your biology. Understanding its scale, economics, and constraints is essential.",
      forMiners: "Biology is a new tool in the mining toolkit — not a replacement for mining, but an enhancement for specific challenges."
    },
    {
      term: "Open Pit Mine",
      definition: "A surface mining technique used to extract rock and minerals from an open excavation in the ground. This is suitable for deposits close to the surface, using explosives and heavy machinery to create a series of horizontal benches or terraces to access deeper ore.",
      examples: "Bingham Canyon (copper), Escondida (copper), Super Pit (gold)",
      forBiologists: "Open pit mines generate massive volumes of waste rock and eventual pit lakes — both potential targets for bio-recovery.",
      forMiners: "Biological treatment of pit-lake water and waste-rock dumps can improve closure outcomes."
    },
    {
      term: "Ore",
      definition: "A naturally occurring solid material from which a metal or valuable mineral can be profitably extracted. 'Ore' contrasts with 'waste' based solely on economics. What is considered waste now may be ore in the future if commodity prices change or mining technologies improve.",
      examples: "Copper ore, gold ore, REE-bearing rock",
      forBiologists: "What counts as 'ore' is price-dependent and process-dependent. Biology can shift the economic threshold.",
      forMiners: "Bio-processes may make sub-economic material economic by reducing processing costs."
    },
    {
      term: "Overburden",
      definition: "Rock or soil overlying a mineral deposit",
      examples: "Topsoil and subsoil removed before open pit mining",
      forBiologists: "Overburden removal exposes sulfide minerals to oxidation, potentially triggering AMD that biology can help manage.",
      forMiners: "Overburden management is a major cost. Biological stabilization can reduce erosion and drainage issues."
    },
    {
      term: "Particle Size Distribution (PSD)",
      definition: "The spread of particle sizes after comminution, which heavily impacts kinetics and permeability",
      examples: "P80 of 75 μm for flotation feed, coarser for heap leaching",
      forBiologists: "PSD affects microbial access to mineral surfaces and oxygen diffusion in heaps. Coarser particles are cheaper but slower to leach.",
      forMiners: "Biology may tolerate coarser PSDs than chemical processes, potentially saving energy on comminution."
    },
    {
      term: "Passivation",
      definition: "A reaction-blocking layer on a mineral surface that slows leaching",
      examples: "Jarosite layers on chalcopyrite, silica coatings on ore particles",
      forBiologists: "A key challenge in bioleaching. Some microbes can disrupt passivation layers — understanding this mechanism is valuable.",
      forMiners: "Passivation limits recovery in both chemical and biological systems. Biology may offer novel approaches to overcome it."
    },
    {
      term: "Pregnant Leach Solution (PLS)",
      definition: "Metal-bearing liquids following leaching processes and prior to downstream processing",
      examples: "Copper-loaded PLS from heap leaching, gold-bearing solution from cyanidation",
      forBiologists: "PLS is what your bioleaching produces. Its chemistry (pH, metal concentrations, impurities) must be compatible with downstream SX/EW.",
      forMiners: "Bio-generated PLS must meet the same quality specifications as chemically generated PLS for downstream processing."
    },
    {
      term: "Produced Water",
      definition: "The water that is brought to the surface during oil and gas extraction, and it is the largest waste stream from this process",
      examples: "Oilfield produced water, coalbed methane water",
      forBiologists: "Produced water can contain dissolved metals and minerals — a potential feedstock for bio-extraction, especially lithium.",
      forMiners: "An emerging secondary resource. Biology may help extract value from produced water while treating it for disposal or reuse."
    },
    {
      term: "Pulp Density",
      definition: "The percentage of solids in a slurry",
      examples: "10-20% solids in bioleach tanks, 50-70% in ball mills",
      forBiologists: "Pulp density affects oxygen transfer, mixing, and microbial activity. Higher density means more throughput but harder conditions for biology.",
      forMiners: "Bio-processes typically operate at lower pulp densities than conventional processes — a key economic consideration."
    },
    {
      term: "Pyrometallurgy",
      definition: "The branch of extractive metallurgy that uses high temperatures to extract and purify metals from ores and concentrates",
      examples: "Copper smelting, iron blast furnace, roasting of sulfide ores",
      forBiologists: "Pyrometallurgy is energy-intensive and generates emissions. Biology offers an alternative pathway under mild conditions.",
      forMiners: "Where pyrometallurgy is too expensive or carbon-intensive, biological alternatives may be competitive."
    },
    {
      term: "Raffinate",
      definition: "Spent aqueous materials after metal recovery, generally reused in a circuit",
      examples: "Raffinate from SX recycled back to heap leaching",
      forBiologists: "Raffinate chemistry affects microbial health when recycled. Monitor for inhibitor build-up.",
      forMiners: "Biology can help condition raffinate (e.g., re-oxidize iron) before it is recycled back into the circuit."
    },
    {
      term: "Rare Earth Elements (REEs)",
      definition: "A group of 17 metallic elements, including the 15 lanthanides plus scandium and yttrium, which have unique magnetic, luminescent, and electrical properties. Despite their name, they are not rare in terms of abundance but are often diffusely dispersed in the Earth's crust, making them difficult and uneconomical to extract in concentrated quantities.",
      examples: "Neodymium (magnets), lanthanum (catalysts), cerium (polishing), yttrium (electronics)",
      forBiologists: "REE separation is where biology's selectivity shines. Proteins like lanmodulin show remarkable selectivity for individual REEs.",
      forMiners: "Conventional REE separation uses large volumes of organic solvents. Biological alternatives may reduce cost and environmental impact."
    },
    {
      term: "Redox Control",
      definition: "Tuning the concentrations of oxidants and reductants in a system to keep target metals soluble or drive selective precipitation",
      examples: "Maintaining Fe³⁺/Fe²⁺ ratios in bioleach solutions, controlling Eh for selective metal precipitation",
      forBiologists: "Microbes are natural redox catalysts. Understanding how to manage redox potential is key to optimizing bioleaching.",
      forMiners: "Biology can provide continuous, self-regenerating redox control — reducing the need for external oxidant addition."
    },
    {
      term: "Refining",
      definition: "Remove impurities or unwanted elements",
      examples: "Electrolytic refining of copper, solvent extraction purification",
      forBiologists: "Bio-refining using selective binding proteins can remove specific impurities under mild conditions.",
      forMiners: "Biological polishing may complement conventional refining, especially for trace impurity removal."
    },
    {
      term: "Rock",
      definition: "A solid, naturally occurring aggregate of one or more minerals or organic matter",
      examples: "Granite, basalt, ore bodies",
      forBiologists: "Your feedstock is rock, not pure minerals. Expect heterogeneity and variable reactivity.",
      forMiners: "Biology works on real rock, not idealized single minerals - important for lab-to-field translation."
    },
    {
      term: "Scaling",
      definition: "Unwanted mineral deposition",
      examples: "Gypsum scaling in pipes, silica deposits on equipment",
      forBiologists: "Scaling can foul bio-reactors and reduce efficiency. Understanding precipitation chemistry helps prevent it.",
      forMiners: "A common operational headache. Some biological approaches may help prevent or remove scale deposits."
    },
    {
      term: "Slag",
      definition: "Stony waste matter separated from metals during the smelting or refining of ore",
      examples: "Copper smelter slag, iron blast furnace slag",
      forBiologists: "Slag can contain residual metals (Cu, Co, REEs) that biology may recover under conditions too harsh for conventional re-processing.",
      forMiners: "Large volumes stockpiled globally. Bio-recovery of residual metals could turn a disposal cost into revenue."
    },
    {
      term: "Solvent Extraction (SX)",
      definition: "A hydrometallurgical process that separates components of a mixture on the basis of their relative solubilities",
      examples: "Copper SX-EW circuits, REE solvent extraction cascades",
      forBiologists: "SX is typically downstream of bio-processes. Bioseparation may complement or replace SX for specific applications.",
      forMiners: "Standard purification step. Bio-alternatives using selective proteins may reduce organic solvent use and waste."
    },
    {
      term: "Subsurface Leach (SSL)",
      definition: "Modified heap leaching technique that involves sinking wells into a leach pad to increase metal leaching by reducing 'dry spots' within the heap leach pad",
      examples: "Wells injected into existing copper heap leach pads",
      forBiologists: "SSL improves solution contact with ore, which also improves microbial access to mineral surfaces.",
      forMiners: "Can improve recovery from existing heaps. Biology benefits from the improved solution distribution."
    },
    {
      term: "Tailings",
      definition: "Waste material left over after the valuable minerals have been extracted from ore during the mining and processing of rocks. This finely ground waste, which includes crushed rock, water, and trace amounts of metals or chemicals, is typically stored in large impoundments or dams.",
      examples: "Post-flotation tailings, heap leach residues",
      forBiologists: "Huge volumes, lower grades, but often accessible and already partially processed. Good bio-targets.",
      forMiners: "Tailings reprocessing with biology can reduce liability while recovering value."
    },
    {
      term: "Underground Mine",
      definition: "The extraction of minerals and ores from deposits located deep beneath the Earth's surface through shafts and tunnels. This method is used when mineral deposits are too deep to be accessed by surface mining or to follow specific metal-bearing veins.",
      examples: "Deep gold mines (South Africa), block caving copper mines",
      forBiologists: "Underground environments host unique microbial communities adapted to extreme conditions — potential sources of novel biomining organisms.",
      forMiners: "In-stope bioleaching in fractured underground zones is an emerging concept that could reduce material handling costs."
    },
    {
      term: "Cyanidation",
      definition: "A hydrometallurgical process that uses cyanide solutions to dissolve and extract gold and silver from ores and concentrates",
      examples: "Carbon-in-leach (CIL), carbon-in-pulp (CIP), heap leach cyanidation",
      forBiologists: "Cyanidation is the dominant gold recovery method. Biooxidation is used as a pre-treatment to expose gold locked in sulfides before cyanidation.",
      forMiners: "Standard gold extraction chemistry. Biology plugs in upstream (biooxidation to liberate refractory gold) and downstream (cyanide destruction)."
    },
    {
      term: "Smelting",
      definition: "A pyrometallurgical process that uses high temperatures to melt and chemically reduce ore or concentrate to separate the metal from its ore minerals",
      examples: "Copper smelting, lead smelting, iron blast furnace",
      forBiologists: "Smelting is energy-intensive and generates emissions. Biological alternatives operate under mild conditions and may complement or reduce the need for smelting.",
      forMiners: "Standard downstream process for concentrates. Biology is most relevant as an alternative pathway for materials where smelting is too costly or carbon-intensive."
    },
    {
      term: "Roasting",
      definition: "A pyrometallurgical process that heats ore or concentrate in the presence of air to oxidize sulfide minerals, drive off volatile impurities, or convert sulfides to oxides prior to further processing",
      examples: "Roasting of refractory gold ores, zinc sulfide roasting",
      forBiologists: "Roasting is an alternative to biooxidation for refractory ores. Both break down sulfide matrices, but biology does so under mild conditions.",
      forMiners: "Proven technology for sulfide ores. Biooxidation (e.g., BIOX®) is a competitive alternative with lower energy and emissions."
    },
    {
      term: "Fouling",
      definition: "The unwanted accumulation of material on equipment surfaces — such as mineral precipitates, biological growth, or organic deposits — that reduces process efficiency",
      examples: "Scale buildup in pipes, biofilm fouling of membranes, precipitate fouling of IX resins",
      forBiologists: "Biofouling can reduce bioseparation performance. Design for regeneration and cleaning cycles.",
      forMiners: "A common operational issue. Biological systems can both cause fouling (biofilms) and help prevent it (enzymatic cleaning)."
    }
  ],
  biology: [
    {
      term: "Acidophile",
      definition: "An organism adapted to low pH, generally between 0-5. This naming convention follows for other 'environment-loving' organisms, such as 'thermophiles' (heat-loving) and 'halophiles' (salt-loving).",
      examples: "Acidithiobacillus, Leptospirillum, Ferroplasma",
      forBiologists: "Acid-tolerant microbes are essential for most bioleaching applications.",
      forMiners: "These are the organisms that work in the harsh, acidic conditions of heaps and tanks."
    },
    {
      term: "Autotroph",
      definition: "An organism that can grow on non-biological sources of energy, e.g. by fixing CO₂ into organic compounds using energy from light or mineral oxidation/reduction, which can then feed other organisms",
      examples: "Acidithiobacillus ferrooxidans, sulfur-oxidizing bacteria",
      forBiologists: "Most bioleaching microbes are autotrophs (CO₂ fixers). They don't need organic carbon — simpler media requirements.",
      forMiners: "Autotrophs don't need organic carbon - cheaper to operate in metal-rich, nutrient-poor environments."
    },
    {
      term: "Bioleaching",
      definition: "The extraction or liberation of metals from ores through the use of organisms, typically by solubilizing metals into aqueous solutions",
      examples: "Heap leaching copper, tank leaching e-waste",
      forBiologists: "Broad category. Can involve acid production, oxidant production, or complexing ligands.",
      forMiners: "The main bio-process for primary metal extraction. Proven at commercial scale for Cu, Au, U, Ni, Co."
    },
    {
      term: "Biomining",
      definition: "The use of biology to aid metal recovery. Unlike the conventional definition, which is typically restricted to microbial bioleaching, we also use 'biomining' to describe applications such as bioseparation of metals using cell-free metal-binding proteins.",
      examples: "Heap bioleaching, tank biooxidation, protein-based metal separation, phytomining",
      forBiologists: "Think broadly — biomining includes any biological mechanism applied to metal recovery, not just microbes in heaps.",
      forMiners: "Biomining is a toolkit of biological modules that can plug into existing flowsheets where biology offers advantages."
    },
    {
      term: "Biooxidation",
      definition: "An oxidation process catalyzed by microbes where the valuable metal remains in the solid phase. In this process, the metal becomes concentrated in the solid phase while the liquid carries away oxidized chemical species.",
      examples: "Pre-treatment of refractory gold ores (BIOX®)",
      forBiologists: "Goal is to break down sulfide matrix, not dissolve the target metal. Different optimization than bioleaching.",
      forMiners: "Proven technology for refractory gold. Exposes gold locked in sulfides for subsequent cyanidation."
    },
    {
      term: "BioOx®",
      definition: "A process involving bacterial oxidation in agitated tanks for pre-treatment of refractory ores and concentrates ahead of a conventional cyanide leach for gold recovery",
      examples: "Commercial BIOX® plants in South Africa, Ghana, Australia",
      forBiologists: "The most commercially successful biomining technology. Uses mesophilic or thermophilic iron/sulfur-oxidizing bacteria.",
      forMiners: "Proven technology operating for 30+ years. Competitive with roasting and pressure oxidation for refractory gold."
    },
    {
      term: "Bioseparation",
      definition: "The use of biomolecules in the separation or concentration of metals or interfering elements in a mining process",
      examples: "Lanmodulin for REE separation, peptide-functionalized resins",
      forBiologists: "Emerging field. Combines selectivity of biology with engineering of deployable systems.",
      forMiners: "Most relevant for high-value, hard-to-separate metals (REEs, platinum group metals (PGMs)). Still early-stage but promising."
    },
    {
      term: "Biosorption",
      definition: "The process by which metals stick to biological surfaces, such as proteins or extracellular polymeric substances (EPS)",
      examples: "Algae accumulating heavy metals, bacterial EPS binding REEs",
      forBiologists: "Rapid, often passive. Can be very selective depending on functional groups on cell surface.",
      forMiners: "Useful for metal capture from dilute streams (AMD, process water). Can be coupled with biomass harvest."
    },
    {
      term: "Chemosynthesis",
      definition: "The process by which carbon is fixed by microorganisms using oxidation of inorganic chemicals and elements as an energy source (a form of autotrophy)",
      examples: "Iron-oxidizing bacteria at hydrothermal vents, sulfur-oxidizing bacteria in caves",
      forBiologists: "Chemosynthesis is the metabolic basis for most bioleaching organisms — they get energy from minerals, not sunlight.",
      forMiners: "These organisms literally eat rock for energy. That's why they're useful in mining — their metabolism drives metal dissolution."
    },
    {
      term: "Extracellular Polymeric Substances (EPS)",
      definition: "A sticky matrix produced by organisms, often capable of binding and immobilizing metals or increasing cellular durability in extreme environments",
      examples: "Polysaccharides, proteins, DNA in biofilms",
      forBiologists: "EPS affects metal binding, diffusion, and surface reactivity.",
      forMiners: "EPS can enhance or inhibit leaching depending on context. Important for heap irrigation design."
    },
    {
      term: "Heterotroph",
      definition: "An organism that cannot produce its own food from inorganic sources, instead taking nutrition from other sources of organic carbon, mainly matter from other organisms",
      examples: "Most fungi, many bacteria",
      forBiologists: "Use organic compounds as their carbon source. Common producers of organic acids and metal-binding ligands.",
      forMiners: "Heterotrophs often grow quickly and produce metal-mobilizing compounds, but require organic carbon input."
    },
    {
      term: "Inoculum",
      definition: "A seed culture that starts off microbial growth",
      examples: "Laboratory-grown acidophile cultures added to a heap leach, SRB starter culture for a bioreactor",
      forBiologists: "Inoculum quality and composition directly affect process startup time and performance.",
      forMiners: "Like seeding a reactor — you introduce the right organisms to kickstart the biological process."
    },
    {
      term: "Lithotroph",
      definition: "An organism that uses a mineral substrate as an energy source (a kind of autotroph)",
      examples: "Iron-oxidizers, sulfur-oxidizers",
      forBiologists: "Key players in bioleaching. They obtain electrons from inorganic minerals.",
      forMiners: "Lithotrophs are the workforce of bioleaching - they generate the acids and oxidants that dissolve metals."
    },
    {
      term: "Metallophores / Siderophores",
      definition: "Organic metal-binding ligands produced by microbes to scavenge low-concentration environmental metals",
      examples: "Siderophores for Fe, lanthanophores for REEs",
      forBiologists: "Natural metal-binding ligands. Can be harvested or expressed heterologously.",
      forMiners: "Highly selective ligands for separations. Potential advantage over synthetic ligands in complex matrices."
    },
    {
      term: "Organotroph",
      definition: "Organisms using organic compounds as electron donors",
      examples: "Aspergillus, Gluconobacter",
      forBiologists: "Standard definition. Obtain electrons from organic molecules.",
      forMiners: "Often produce organic acids and ligands that help dissolve minerals and mobilize metals."
    },
    {
      term: "Sulfate-Reducing Bacteria (SRB)",
      definition: "Bacteria that use sulfate as electron acceptor, producing sulfide",
      examples: "Desulfovibrio, Desulfotomaculum",
      forBiologists: "Opposite of sulfur-oxidizers. Lower redox potential, raise pH, precipitate metals.",
      forMiners: "Core organisms for AMD treatment. Convert dissolved metals to insoluble metal sulfides."
    },
    {
      term: "Cell-Free Proteins",
      definition: "A protein synthesized in vitro using extracted cellular machinery, without the use of intact living cells",
      examples: "Lanmodulin produced cell-free for REE separation, engineered metal-binding proteins",
      forBiologists: "Cell-free systems bypass the need to keep organisms alive in harsh mining conditions. Focus shifts to protein stability and regeneration.",
      forMiners: "Think of these as biological reagents — selective metal-binding chemicals produced from biology but deployed like any other process chemical."
    },
    {
      term: "Consortia",
      definition: "Mixed communities of microorganisms working together to perform chemical transformations that individual species cannot achieve alone",
      examples: "Iron- and sulfur-oxidizing communities in heap leach operations, SRB communities in AMD treatment wetlands",
      forBiologists: "Most biomining environments rely on consortia, not monocultures. Community dynamics affect stability and performance.",
      forMiners: "Rather than a single organism, biomining typically uses teams of microbes that divide labor — some generate acid, others oxidize iron, others scavenge nutrients."
    },
    {
      term: "Metabolite",
      definition: "A small molecule produced or consumed during metabolism — including organic acids, siderophores, and other compounds that can mobilize or bind metals",
      examples: "Organic acids (citric, oxalic), siderophores, amino acids",
      forBiologists: "Metabolites are the chemical tools microbes use to interact with minerals. Identifying key metabolites helps optimize bio-processes.",
      forMiners: "The chemicals that microbes produce as part of their normal life processes — some of these dissolve metals, bind them, or change solution chemistry."
    },
    {
      term: "Enzyme",
      definition: "A biological catalyst — a protein that accelerates specific chemical reactions without being consumed in the process",
      examples: "Oxidases, reductases, rusticyanin in iron oxidation",
      forBiologists: "Enzymes drive the specific reactions that make biomining work. Understanding the key enzymes helps with strain engineering and optimization.",
      forMiners: "Think of enzymes as highly selective catalysts that microbes use to drive the chemical reactions that dissolve or bind metals."
    },
    {
      term: "Peptide",
      definition: "A short chain of amino acids — smaller than a protein — that can be engineered to selectively bind specific metals",
      examples: "Metal-binding peptides for REE capture, peptide-functionalized resins and membranes",
      forBiologists: "Peptides offer a middle ground between small-molecule ligands and full proteins — tunable selectivity with easier manufacturing.",
      forMiners: "Small biological molecules that can be attached to resins or membranes to selectively grab target metals from complex solutions."
    },
    {
      term: "Polysaccharide",
      definition: "A large carbohydrate molecule made of repeating sugar units, often produced by microbes as part of extracellular polymeric substances (EPS) that can bind metals",
      examples: "Bacterial EPS polysaccharides, alginate, xanthan",
      forBiologists: "Polysaccharides in EPS contribute to biofilm structure and metal binding. Their composition affects selectivity.",
      forMiners: "Sticky sugar-based molecules that microbes secrete — they can trap metals on surfaces and play a role in both bioleaching and biosorption."
    },
    {
      term: "Biofilm",
      definition: "A structured community of microorganisms attached to a surface and embedded in a self-produced matrix of extracellular polymeric substances (EPS)",
      examples: "Biofilms on mineral surfaces in heap leach pads, biofilms in bioreactors",
      forBiologists: "Biofilms are the natural state of most biomining microbes. They concentrate cells at mineral surfaces and create local microenvironments.",
      forMiners: "A living coating of microbes on rock or equipment surfaces. In heaps, biofilms on mineral surfaces are where most of the leaching chemistry happens."
    },
    {
      term: "Mesophile",
      definition: "An organism that grows best at moderate temperatures, typically between 20-45°C",
      examples: "Acidithiobacillus ferrooxidans, Leptospirillum ferrooxidans",
      forBiologists: "Most well-studied bioleaching organisms are mesophiles. They're easier to work with in the lab but may limit performance in hot heaps.",
      forMiners: "The 'room temperature' bioleaching organisms. Used in most commercial heap and tank operations where temperatures stay below ~45°C."
    },
    {
      term: "Thermophile",
      definition: "An organism that thrives at elevated temperatures, typically between 45-80°C",
      examples: "Sulfolobus, Acidianus — used in high-temperature biooxidation tanks",
      forBiologists: "Thermophiles enable faster reaction kinetics and can handle the heat generated in large heaps and stirred tanks.",
      forMiners: "Heat-loving organisms used in high-temperature biooxidation tanks (65-85°C). Faster kinetics but more demanding operating conditions."
    },
    {
      term: "Extremophile",
      definition: "An organism adapted to thrive in environmental conditions considered extreme — such as high temperature, low pH, high salinity, or high pressure",
      examples: "Thermophiles, acidophiles, halophiles, radiation-resistant organisms from legacy mine sites",
      forBiologists: "Extremophiles from mining environments are a rich source of novel enzymes and metabolic capabilities for biomining.",
      forMiners: "Organisms that thrive in the harsh conditions found in mines — exactly the kind of biology that can work in real mining environments."
    },
    {
      term: "Bioaccumulation",
      definition: "The active uptake and intracellular storage of metals by living organisms, driven by metabolic processes",
      examples: "Algae accumulating heavy metals, bacteria concentrating uranium intracellularly",
      forBiologists: "Distinct from biosorption (passive surface binding). Bioaccumulation requires living, metabolically active cells.",
      forMiners: "Organisms actively absorb and store metals inside their cells — like a biological sponge that can be harvested to recover the accumulated metals."
    },
    {
      term: "Chelation",
      definition: "The formation of a stable ring-shaped complex between a metal ion and an organic molecule (chelator/ligand) that binds the metal at multiple points, keeping it soluble and available for recovery",
      examples: "Siderophore-iron chelation, EDTA-metal complexes, organic acid-REE chelation",
      forBiologists: "A key mechanism for biological metal mobilization. Chelation strength and selectivity determine which metals can be targeted.",
      forMiners: "A chemical 'claw' that grabs and holds metal ions in solution. Microbes produce natural chelators (siderophores) that are often more selective than synthetic ones."
    },
    {
      term: "Ligand",
      definition: "A molecule that binds to a metal ion to form a complex. In biomining, ligands include siderophores, organic acids, peptides, and engineered proteins used to selectively capture or mobilize metals",
      examples: "Siderophores, citric acid, lanmodulin, peptide-based ligands",
      forBiologists: "Biological ligands offer tuneable selectivity for target metals. Engineering better ligands is a major research frontier.",
      forMiners: "A chemical that grabs onto a specific metal. Biological ligands can be far more selective than conventional extractants, especially for separating similar metals like REEs."
    },
    {
      term: "Bioprospecting",
      definition: "The systematic search for useful organisms, genes, or biomolecules from natural environments — particularly extreme or underexplored habitats like mine sites",
      examples: "Sampling acidophiles from legacy mine drainage, screening thermophiles from hot springs",
      forBiologists: "Mine sites and legacy wastes are rich sources of organisms pre-adapted to metal-rich, extreme conditions.",
      forMiners: "Searching nature for organisms that already know how to handle mining conditions — legacy mine sites are prime hunting grounds."
    },
    {
      term: "Redox Cycling",
      definition: "The repeated oxidation and reduction of chemical species (especially iron and sulfur) that drives metal dissolution in bioleaching systems",
      examples: "Fe²⁺ → Fe³⁺ → Fe²⁺ cycling in heap leach solutions, sulfur oxidation-reduction cycles",
      forBiologists: "Microbes catalyze redox cycling to obtain energy. The regenerated oxidant (e.g., Fe³⁺) then attacks mineral surfaces.",
      forMiners: "The engine of bioleaching — microbes continuously regenerate the chemical oxidants that dissolve metals, reducing the need for external reagent addition."
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
