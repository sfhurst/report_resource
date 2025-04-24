const bridgeComponents = [
  // Alignment
  {
    name: "Approach Roadway Alignment",
    item_id: "B.AP.01",
    format: "AN (1)",
    frequency: "EI",
    referenece: "SNBI",
    category: "Alignment",
    commentary_page_id: "bridge-alignment-pg1",
    example_comments_page_id: "bridge-alignment-pg3",
    commentary: `<p>
    This item identifies bridges that do not function adequately due to the horizontal or vertical alignment of the bridge and approach roadway. It is not intended
    that the alignment be compared to current standards, but rather to the existing roadway alignment.
    </p>
    <br />
    <p>
    The basic criterion is how the alignment of the bridge and approach roadway relates to the general highway alignment for the section of highway the bridge
    carries.
    </p>
    <br />
    <p>Do not consider speed reductions due to the bridge width or intersecting highways when reporting this item.</p>
    <br />
    <p>The operating speed reduction is in comparison to the posted speed limit for the highway segment:</p>
    <ul class="content-container-paragraphs-ul">
    <li>Use code G when the operating speed is no different at the bridge than the rest of the highway segment that crosses the bridge.</li>
    <li>Use code F when the operating speed is noticeably different at the bridge than the rest of the highway segment that crosses the bridge.</li>
    <li>Use code P when the operating speed is substantially different at the bridge than the rest of the highway segment that crosses the bridge.</li>
    </ul>`,
    example_comments: [
      ["No speed reduction is necessary."],
      ["A minor speed reduction is expected due to the approach roadway geometry."],
      // "An intersection is present at the north approach.",
      // "The bridge is at a traffic light and carries part of the queue.",
      ["The bridge is in a horizontal curve."],
      ["The bridge is in a superelevated horizontal curve."],
      ["There are advisory speed signs recommending a speed reduction for curves in the approach alignment."],
      ["There are horizontal alignment signs warning of curves in the approach alignment."],
      ["The bridge is in a sag vertical curve."],
      ["The bridge is in a crest vertical curve."],
      ["The bridge is over/carries a railroad. INDOT personnel may access the railroad right-of-way based on rule IC 8-3-15-3 (d)(8)."],
    ],

    rating_table: [
      {
        code: "N",
        condition: "NOT APPLICABLE",
        description: "The bridge does not carry vehicular traffic and does not have an operating speed.",
      },
      {
        code: "G",
        condition: "GOOD",
        description: "The operating speed at the bridge is no different than the rest of the highway segment.",
      },
      {
        code: "F",
        condition: "FAIR",
        description: "The operating speed at the bridge is noticeably different compared to the rest of the highway segment.",
      },
      {
        code: "P",
        condition: "POOR",
        description: "The operating speed at the bridge is substantially different compared to the rest of the highway segment.",
      },
    ],

    glossary_page_id: "bridge-alignment-pg5",
    glossary: [
      {
        term: "Annual Average Daily Traffic (AADT)",
        definition:
          "The total annual volume of traffic passing a point or segment of a highway in both directions divided by the number of days in a year.",
        search: `What is "Annual Average Daily Traffic" in transportation engineering?`,
        page: ["bridge-alignment-pg5"],
      },
      {
        term: "Annual Average Daily Truck Traffic (AADTT)",
        definition:
          "The total annual volume of truck traffic passing a point or segment of a highway in both directions divided by the number of days in a year.",
        search: `What is "Annual Average Daily Truck Traffic" in transportation engineering?`,
        page: ["bridge-alignment-pg5"],
      },
      {
        term: "Approach Roadway Alignment",
        definition:
          "The portion of the roadway leading up to a bridge, consisting of horizontal and vertical curves and grades. It provides a predictable path for drivers and ensures a smooth, safe transition to the bridge. Properly constructed approach roadways minimize abrupt changes in direction or slope, maintaining vehicle comfort and safety.",
        discipline: "bridge design",
        page: ["bridge-alignment-pg5"],
      },
      {
        term: "Centerline",
        definition:
          "The yellow painted line, or the imaginary line, that separates traffic moving in opposite directions on a roadway. It serves as a visual guide for drivers, indicating the boundary between lanes of traffic going in opposite directions.",
        discipline: "bridge design",
        page: ["bridge-alignment-pg5"],
      },
      {
        term: "Crest Vertical Curve",
        definition:
          "A curve in the roadway profile that connects an ascending grade to a descending grade, typically used to smooth transitions at the crest of a hill.",
        discipline: "bridge design",
        page: ["bridge-alignment-pg5"],
      },
      {
        term: "Cross Slope",
        definition: "The slope of the roadway surface perpendicular to the direction of travel, designed to allow for proper drainage of water.",
        discipline: "bridge design",
        page: ["bridge-alignment-pg5"],
      },
      {
        term: "Crossover",
        definition:
          "A designated area or path, often a short roadway, that allows vehicles to cross a median or divider to access opposing roadways or areas. Crossovers are commonly found on divided highways or interstates to provide access between different sides of the road.",
        discipline: "bridge design",
        page: ["bridge-alignment-pg5"],
      },
      {
        term: "Crosswalk",
        definition:
          "A designated area on a road or street, marked to provide a safer path for pedestrians to cross. It typically consists of painted lines or markings to make the crossing more visible to drivers.",
        discipline: "bridge design",
        page: ["bridge-alignment-pg5"],
      },
      {
        term: "Curve Length",
        definition: "The length of a curved section of the roadway or bridge, typically measured along the centerline.",
        discipline: "bridge design",
        page: ["bridge-alignment-pg5"],
      },
      {
        term: "Horizontal Alignment",
        definition: "The layout of the roadway in the horizontal plane, including curves, tangents, and transitions.",
        discipline: "bridge design",
        page: ["bridge-alignment-pg5"],
      },
      {
        term: "Horizontal Curve Radius",
        definition: "The radius of a curve in the roadway or bridge, determining the sharpness or gentleness of the curve.",
        discipline: "bridge design",
        page: ["bridge-alignment-pg5"],
      },
      {
        term: "Line of Sight",
        definition: "The unobstructed view along the roadway, crucial for driver safety, allowing the driver to see upcoming curves or obstacles.",
        discipline: "bridge design",
        page: ["bridge-alignment-pg5"],
      },
      {
        term: "Off-Ramp",
        definition: "A roadway that allows vehicles to exit a highway or freeway.",
        discipline: "bridge design",
        page: ["bridge-alignment-pg5"],
      },
      {
        term: "On-Ramp",
        definition: "A roadway that allows vehicles to enter a highway or freeway.",
        discipline: "bridge design",
        page: ["bridge-alignment-pg5"],
      },
      {
        term: "Right-of-Way",
        definition:
          "The land designated for the roadway and its components, including the traveled way, shoulders, and any additional space required for construction and maintenance.",
        discipline: "bridge design",
        page: ["bridge-alignment-pg5"],
      },
      {
        term: "Sag Vertical Curve",
        definition:
          "A curve in the roadway profile that connects a descending grade to an ascending grade, typically used to smooth transitions at the bottom of a dip or valley.",
        discipline: "bridge design",
        page: ["bridge-alignment-pg5"],
      },
      {
        term: "Superelevation",
        definition: "The banking of the roadway at curves to counteract centrifugal force and improve vehicle stability.",
        discipline: "bridge design",
        page: ["bridge-alignment-pg5"],
      },
      {
        term: "Transition Curve",
        definition: "A curve that gradually changes the curvature of the road to provide a smoother transition between straight and curved sections.",
        discipline: "bridge design",
        page: ["bridge-alignment-pg5"],
      },
      {
        term: "Vertical Alignment",
        definition: "The configuration of the roadway in the vertical plane, including grades, curves, and elevations.",
        discipline: "bridge design",
        page: ["bridge-alignment-pg5"],
      },
      {
        term: "Vertical Curve",
        definition: "A curve in the vertical alignment of the roadway, typically used to transition between different grades.",
        discipline: "bridge design",
        page: ["bridge-alignment-pg5"],
      },
      {
        term: "Vertical Grade",
        definition: "The slope or incline of the roadway along the vertical plane, expressed as a percentage.",
        discipline: "bridge design",
        page: ["bridge-alignment-pg5"],
      },
    ],
  },

  //Approach
  {
    name: "Approach Slabs",
    item_id: "B.C.01b",
    format: "AN (1)",
    frequency: "EI",
    referenece: "SNBI",
    category: "Approach",
    commentary_page_id: "bridge-approach-pg1",
    example_comments_page_id: "bridge-approach-pg3",
    commentary: `<p>
                  Use destructive or non-destructive testing results or visual condition indicators of materials covering the surfaces being assessed when top is not visible for
                  assessment. Past inspection reports and repair records may also provide supplemental information to aid in the determination of the condition rating.
                </p>
                <br />
                <p>Consider the settlement of the approach slab. Use any indicators present to determine the stability of the soil beneath the slab.</p>
                <br />
                <p>Consider the roughness and ride provided by the approach slab.</p>`,
    example_comments: [
      ["There are no deficiencies to report."],
      ["No significant settlement has occurred."],
      ["There are no deficiencies to report. The approach slabs show no noticeable settlement or visible surface defects."],
      ["The approach slabs have been covered with an overlay."],
      ["The approach slabs appear level and stable with no signs of shifting."],
      ["There are sealed cracks in the approach slabs."],
      ["There are sound concrete patches in the approach slabs."],
      ["There is minor settlement of the approach slabs."],
    ],
    rating_table: [
      {
        code: "N",
        condition: "NOT APPLICABLE",
        description: "Bridge does not have approach slabs.",
      },
      {
        code: "9",
        condition: "EXCELLENT",
        description: "Isolated inherent defects.",
      },
      {
        code: "8",
        condition: "VERY GOOD",
        description: "Some inherent defects.",
      },
      {
        code: "7",
        condition: "GOOD",
        description: "Some minor defects.",
      },
      {
        code: "6",
        condition: "SATISFACTORY",
        description: "Widespread minor or isolated moderate defects.",
      },
      {
        code: "5",
        condition: "FAIR",
        description: "Some moderate defects; strength and performance of the component are not affected.",
      },
      {
        code: "4",
        condition: "POOR",
        description: "Widespread moderate or isolated major defects; strength and/or performance of the component is affected.",
      },
      {
        code: "3",
        condition: "SERIOUS",
        description:
          "Major defects; strength and/or performance of the component is seriously affected. Condition typically necessitates more frequent monitoring, load restrictions, and/or corrective actions.",
      },
      {
        code: "2",
        condition: "CRITICAL",
        description:
          "Major defects; component is severely compromised. Condition typically necessitates frequent monitoring, significant load restrictions, and/or corrective actions in order to keep the bridge open.",
      },
      {
        code: "1",
        condition: "IMMINENT FAILURE",
        description: "Approach slabs have failed and are ineffective.",
      },
      {
        code: "0",
        condition: "FAILED",
        description: "Approach slabs have failed and present a safety hazard.",
      },
    ],
    glossary_page_id: "bridge-approach-pg7",
    glossary: [
      {
        term: "Approach Slab",
        definition: "A reinforced concrete slab that provides a smooth transition between the roadway and the bridge deck.",
        discipline: "bridge design",
        page: ["bridge-approach-pg7"],
      },
    ],
  },

  // Terminal
  {
    name: "Terminal Joints",
    item_id: "B.C.08a",
    format: "AN (1)",
    frequency: "EI",
    referenece: "SNBI",
    category: "Joints",
    commentary_page_id: "bridge-joints-pg4",
    example_comments_page_id: "bridge-joints-pg6",
    commentary: `<p>
                  Terminal joints are designed to accommodate thermal movements of integral and semi-integral abutments by allowing expansion to occur between the approach slabs
                  and the approach pavement. Terminal joints are only required for integral or semi-integral bridges.
                </p>
                <br />
                <p>
                  Previous terminal joint design details for Portland Cement Concrete Pavement (PCCP) used 2 feet of asphalt at the ends of the approach, and there was no design
                  detail for HMA pavement adjacent to bridges with approach slabs having integral or semi-integral abutments. Both cases have proven problematic, so to improve
                  functionality, new terminal joint design details were introduced in September 2019 with Design Memo 19-10, RSP 503-R-692, and RPD 503-R-692d (now E 503-BATJ
                  series).
                </p>
                <br />
                <p>Consider the pavement roughness and ride at the transition between the approach slabs and the approach pavement.</p>
                <br />
                <p>Do not consider if the terminal joint meets the current standard.</p>`,
    example_comments: [
      ["The terminal joints are in good condition."],
      ["The joints provide a smooth transition."],
      ["The bridge has HMA terminal joints."],
      ["The bridge has compression seal (BS) terminal joints."],
      [
        "The bridge has integral or semi-integral abutments but no designated terminal joints; the construction joints at the end of the approach slabs function as terminal joints.",
      ],
      [
        "The west construction joint is slightly raised due to thermal expansion and compression from the approach slab, creating a slight unevenness in the roadway.",
      ],
      ["The terminal joints present a rough transition to the bridge."],
      ["There are no terminal joints at either end."],
    ],
    rating_table: [
      {
        code: "N",
        condition: "NOT APPLICABLE",
        description: "The bridge abutments are not integral or semi-integral. The bridge does not have terminal joints.",
      },
      {
        code: "G",
        condition: "GOOD",
        description: "The terminal joints do not need maintenance, and meet the current standards.",
      },
      {
        code: "F",
        condition: "FAIR",
        description: "The terminal joints do not need maintenance, but do not meet the current standards.",
      },
      {
        code: "P",
        condition: "POOR",
        description: "The terminal joints need maintenance.",
      },
    ],
  },

  // Joints
  {
    name: "Bridge Joints",
    item_id: "B.C.08",
    format: "AN (1)",
    frequency: "EI",
    referenece: "SNBI",
    category: "Joints",
    commentary_page_id: "bridge-joints-pg1",
    example_comments_page_id: "bridge-joints-pg3",
    commentary: `<p>
                  This item addresses the condition of all types and shapes of bridge deck joints. The condition assessment includes all aspects of the joints such as any seals,
                  headers (metal or concrete), connections, and other metal members.
                </p>
                <br />
                <p>
                  When a joint is designed as an open joint, leakage or lack of a seal is not considered a defect.
                </p>
                <br />
                <p>
                  Do not consider the condition of protective coatings and other protection systems when determining the condition rating code for this item, except to the extent
                  that problems with the protective coating system are indicative of problems with the underlying joint material.
                </p>
                <br />
                <p>
                  In cases where the joint is not visible, the condition can be assessed based on other indirect indicators of the condition.
                </p>`,
    example_comments: [
      ["There are no deficiencies to report."],
      ["The expansion joints are functioning as designed."],
      ["The bridge has integral or semi-integral abutments."],
      ["The joints are partially full of debris."],
      // "There are areas of the joints that have been repaired with pourable material.",
      ["There is some leaking at the expansion joints."],
      // "The joints are leaking throughout.",
      // "There are several punctures and a loss of adhesion with the nosing in both the north and south joints.",
      ["The joints have multiple areas that have lost adhesion."],
      // "The joints have a loss of adhesion throughout.",
      ["The joints are full of debris, which may impact their functionality."],
    ],
    rating_table: [
      {
        code: "N",
        condition: "NOT APPLICABLE",
        description: "Bridge does not have deck joints.",
      },
      {
        code: "9",
        condition: "EXCELLENT",
        description: "Isolated inherent defects.",
      },
      {
        code: "8",
        condition: "VERY GOOD",
        description: "Some inherent defects.",
      },
      {
        code: "7",
        condition: "GOOD",
        description: "Some minor defects.",
      },
      {
        code: "6",
        condition: "SATISFACTORY",
        description: "Widespread minor or isolated moderate defects.",
      },
      {
        code: "5",
        condition: "FAIR",
        description: "Some moderate defects.",
      },
      {
        code: "4",
        condition: "POOR",
        description: "Widespread moderate or isolated major defects.",
      },
      {
        code: "3",
        condition: "SERIOUS",
        description: "Some major defects.",
      },
      {
        code: "2",
        condition: "CRITICAL",
        description: "Widespread major defects.",
      },
      {
        code: "1",
        condition: "IMMINENT FAILURE",
        description: "Joints have failed and are ineffective.",
      },
      {
        code: "0",
        condition: "FAILED",
        description: "Joints have failed and present a safety hazard.",
      },
    ],
    glossary_page_id: "bridge-joints-pg9",
    glossary: [
      {
        term: "Adhesion",
        definition: "The ability of a sealant or material to bond to a surface and remain attached under stress or movement.",
        discipline: "bridge design",
        page: ["bridge-joints-pg9"],
      },
      {
        term: "Armor (Two Steel Angles) Joint",
        definition:
          "A joint made of two steel angles designed to provide a protective barrier and allow some movement while maintaining a seal. Steel angles can suffer from corrosion, lack flexibility, and may lead to leakage if the sealant is improperly applied.",
        discipline: "bridge design",
        page: ["bridge-joints-pg9"],
      },
      {
        term: "Asphalt Plug Joint",
        definition:
          "A joint system that uses a flexible asphalt-based material to accommodate small movements while providing a smooth riding surface.",
        discipline: "bridge design",
        page: ["bridge-joints-pg9"],
      },

      {
        term: "Compression Seal (BS) Joint",
        definition:
          "A joint system that uses a flexible seal material that compresses to close the gap between two bridge sections. This joint prevents water and debris infiltration by maintaining a tight seal during movement. Over time, compression seals can lose flexibility, accumulate debris, and suffer from misalignment, leading to ineffective sealing and water leakage.",
        discipline: "bridge design",
        page: ["bridge-joints-pg9"],
      },
      {
        term: "Construction Joint",
        definition:
          "A joint used in the construction process to separate different phases of work, typically where two sections of a structure meet. It allows for the continuation of construction while providing a defined break between sections, but may require additional treatment to prevent movement or water infiltration.",
        discipline: "bridge design",
        page: ["bridge-joints-pg9"],
      },
      {
        term: "Crumb Rubber",
        definition: "Recycled rubber from scrap tires, often used as an additive in asphalt to enhance flexibility and durability.",
        discipline: "bridge design",
        page: ["bridge-joints-pg9"],
      },
      {
        term: "Expansion Joint",
        definition:
          "A joint designed to accommodate movement in a structure due to thermal expansion, contraction, or other forces, preventing damage by allowing parts of the structure to shift independently.",
        discipline: "bridge design",
        page: ["bridge-joints-pg9"],
      },
      {
        term: "Hot Mix Asphalt (HMA)",
        definition: "A combination of asphalt binder and aggregates heated and mixed to form a durable pavement material.",
        discipline: "bridge design",
        page: ["bridge-joints-pg9"],
      },
      {
        term: "Integral Abutment (IA or 1A) Joint",
        definition:
          "A design where the abutment and superstructure are connected without a physical joint, often functioning as a construction joint. While it minimizes maintenance, it may not accommodate thermal expansion or contraction, potentially leading to cracking and structural deformation over time.",
        discipline: "bridge design",
        page: ["bridge-joints-pg9"],
      },

      {
        term: "Joint Sealant",
        definition: "A material used to fill and seal joints to prevent water infiltration and debris accumulation.",
        discipline: "bridge design",
        page: ["bridge-joints-pg9"],
      },
      {
        term: "Modular Joint",
        definition:
          "A joint system made of prefabricated components designed to allow movement while maintaining a seal, often used in large bridges with high movement requirements. Modular joints are complex systems with many moving parts, making them more prone to malfunction and requiring expensive installation and maintenance.",
        discipline: "bridge design",
        page: ["bridge-joints-pg9"],
      },
      {
        term: "Nosing",
        definition:
          "The rounded or beveled edge at the intersection of a joint, such as an expansion or contraction joint. It helps protect the joint from damage and wear, allowing for smoother transitions between sections and reducing the risk of cracking by distributing stress more evenly.",
        discipline: "bridge design",
        page: ["bridge-joints-pg9"],
      },
      {
        term: "Open Joint",
        definition:
          "A simple, unsealed joint that allows for unrestricted movement but leaves the bridge vulnerable to water and debris infiltration. Open joints are prone to water infiltration, debris accumulation, and additional structural stress due to the lack of sealing.",
        discipline: "bridge design",
        page: ["bridge-joints-pg9"],
      },
      {
        term: "Polymer Modified Asphalt (LDI and PaveTech) Joint",
        definition:
          "A joint filled with polymer-modified asphalt, designed to accommodate movement while providing sealing and protection against water infiltration. Polymer-modified asphalt can degrade over time from UV exposure, crack under stress, and take longer to cure, delaying repairs.",
        discipline: "bridge design",
        page: ["bridge-joints-pg9"],
      },

      {
        term: "Poured Silicone (XJS) Joint",
        definition:
          "A joint filled with a poured silicone material, often used for narrow-width joints that need flexibility and sealing properties. Poured silicone joints are limited to narrow-width applications, degrade under UV exposure, and may fail to bond properly if not installed correctly.",
        discipline: "bridge design",
        page: ["bridge-joints-pg9"],
      },
      {
        term: "Relief Joint",
        definition:
          "A joint designed to relieve internal stresses in a structure, often created to control cracking caused by shrinkage, thermal expansion, or other forces. It allows controlled movement or cracking at specific locations to prevent damage to the overall structure.",
        discipline: "bridge design",
        page: ["bridge-joints-pg9"],
      },
      {
        term: "Sliding Steel Plate Joint",
        definition:
          "A joint system that uses steel plates that slide over each other to allow movement while maintaining a seal. Steel plates are prone to corrosion, require maintenance and lubrication to avoid jamming, and have limited movement capacity in extreme temperatures.",
        discipline: "bridge design",
        page: ["bridge-joints-pg9"],
      },
      {
        term: "Strip Seal (SS) Joint",
        definition:
          "A joint system consisting of a steel extrusion and a flexible neoprene gland that accommodates movement while maintaining a seal. Strip seals are effective at preventing water infiltration but have limited movement capacity. If the gland is damaged or dislodged, water intrusion can lead to deck deterioration. Improper installation or debris buildup can also compromise performance.",
        discipline: "bridge design",
        page: ["bridge-joints-pg9"],
      },

      {
        term: "Terminal Joint",
        definition: "A joint located at the end of a bridge deck or approach slab, designed to accommodate expansion and contraction.",
        discipline: "bridge design",
        page: ["bridge-joints-pg9"],
      },
      {
        term: "Tooth (Finger) Joint",
        definition:
          "A mechanical joint where two interlocking finger-like projections fit together to accommodate relative movement between bridge sections. Finger joints can create noise under traffic, collect debris leading to clogging, and suffer from misalignment during installation, causing uneven wear.",
        discipline: "bridge design",
        page: ["bridge-joints-pg9"],
      },
    ],
  },

  // Railings
  {
    name: "Bridge Railings",
    item_id: "B.C.05",
    format: "AN (1)",
    frequency: "EI",
    referenece: "SNBI",
    category: "Railings",
    commentary_page_id: "bridge-railings-pg1",
    example_comments_page_id: "bridge-railings-pg3",
    commentary: `<p>
                  This item addresses the condition of all types and shapes of bridge railings (parapets, median barriers, or structure mounted) located on the bridge or that cross
                  over buried structures. The condition assessment includes the portions of the railings, posts, blocking, and curbs that are part of the bridge railing system.
                </p>
                <br />
    
                <p>Do not consider pedestrian railings when coding this item, except to the extent that the pedestrian railing is integral to the traffic barrier.</p>
                <br />
    
                <p>
                  Do not consider the condition of protective coatings and other protection systems when determining the condition rating code for this item, except to the extent
                  that problems with the protective coating system are indicative of problems with the underlying railing material.
                </p>`,
    example_comments: [
      ["There are no deficiencies to report."],
      ["The railings are functioning as designed with only minor issues."],
      ["There is an isolated area of collision damage."],
      ["There are widely spaced hairline vertical cracks in the concrete barrier walls."],
      ["There are intermittently spaced hairline vertical cracks with efflorescence in the concrete barrier walls."],
      ["There is horizontal cracking in the concrete barrier walls."],
      ["The steel railings are anchored into the exterior box beams."],
      ["There is some minor corrosion in the steel railings."],
    ],
    rating_table: [
      {
        code: "N",
        condition: "NOT APPLICABLE",
        description: "Component does not exist.",
      },
      {
        code: "9",
        condition: "EXCELLENT",
        description: "Isolated inherent defects.",
      },
      {
        code: "8",
        condition: "VERY GOOD",
        description: "Some inherent defects.",
      },
      {
        code: "7",
        condition: "GOOD",
        description: "Some minor defects.",
      },
      {
        code: "6",
        condition: "SATISFACTORY",
        description: "Widespread minor or isolated moderate defects.",
      },
      {
        code: "5",
        condition: "FAIR",
        description: "Some moderate defects; strength and performance of the component are not affected.",
      },
      {
        code: "4",
        condition: "POOR",
        description: "Widespread moderate or isolated major defects; strength and/or performance of the component is affected.",
      },
      {
        code: "3",
        condition: "SERIOUS",
        description:
          "Major defects; strength and/or performance of the component is seriously affected. Condition typically necessitates more frequent monitoring, load restrictions, and/or corrective actions.",
      },
      {
        code: "2",
        condition: "CRITICAL",
        description:
          "Major defects; component is severely compromised. Condition typically necessitates frequent monitoring, significant load restrictions, and/or corrective actions in order to keep the bridge open.",
      },
      {
        code: "1",
        condition: "IMMINENT FAILURE",
        description: "Bridge is closed to traffic due to component condition. Repair or rehabilitation may return the bridge to service.",
      },
      {
        code: "0",
        condition: "FAILED",
        description: "Bridge is closed due to component condition, and is beyond corrective action. Replacement is required to restore service.",
      },
    ],
    glossary_page_id: "bridge-railings-pg9",
    glossary: [
      {
        term: "Asymmetric Barrier Design",
        definition:
          "A barrier design in which the shape, size, or orientation of the guardrail or barrier varies on each side to account for differing road conditions, clear zones, or traffic flow. Asymmetric barriers are commonly used in situations where one side of the barrier faces a more hazardous area, such as a steep drop-off, requiring enhanced protection.",
        discipline: "bridge design",
        page: ["bridge-railings-pg9"],
      },

      {
        term: "Attenuators",
        definition: "Crash barriers designed to absorb and dissipate the energy of an impacting vehicle, reducing the severity of collisions.",
        discipline: "bridge design",
        page: ["bridge-railings-pg9"],
      },
      {
        term: "Breakaway Cable Terminal",
        definition:
          "A safety device used in guardrail systems designed to absorb impact energy by allowing the terminal to break away upon vehicle collision. It typically consists of a cable system that slows and redirects the vehicle, minimizing injury and damage while preventing the guardrail from becoming a rigid obstruction.",
        discipline: "bridge design",
        page: ["bridge-railings-pg9"],
      },

      {
        term: "Breakaway Wooden Posts",
        definition:
          "Wooden posts used in guardrail systems designed to break away upon impact. These posts help to reduce the transfer of energy during a collision, minimizing vehicle damage and injury risk. Typically found in areas with low traffic volume where flexibility and safety are prioritized.",
        discipline: "bridge design",
        page: ["bridge-railings-pg9"],
      },

      {
        term: "Bridge Railing",
        definition:
          "A protective barrier installed on bridges to prevent vehicles and pedestrians from leaving the structure. Designed to meet specific structural and safety requirements, it balances impact resistance, visibility, and load considerations.",
        discipline: "bridge design",
        page: ["bridge-railings-pg9"],
      },

      {
        term: "Cable Barrier System",
        definition:
          "A flexible guardrail system consisting of multiple strands of tensioned steel cable supported by posts. Designed to absorb impact by deflecting vehicles, it is often more cost-effective and easier to repair than rigid barriers, making it a common choice for medians and roadsides.",
        discipline: "bridge design",
        page: ["bridge-railings-pg9"],
      },

      {
        term: "Concrete Barrier Wall",
        definition:
          "A rigid, high-impact-resistant concrete structure used to separate traffic or protect roadways and bridges. Common types include the New Jersey barrier, F-shape barrier, and single-slope barrier, each designed to manage vehicle impact and reduce rollover risk.",
        discipline: "bridge design",
        page: ["bridge-railings-pg9"],
      },
      {
        term: "Deflector Plate",
        definition:
          "A plate installed on guardrails or barriers designed to direct or deflect the impact of a vehicle away from a hazard or obstruction. Typically used to redirect a vehicle’s path and reduce the risk of injury or damage during a collision.",
        discipline: "bridge design",
        page: ["bridge-railings-pg9"],
      },
      {
        term: "Delineators",
        definition:
          "Reflective markers mounted on flexible or rigid posts to guide drivers by indicating road alignment, lane boundaries, or hazards. They are commonly used along curves, ramps, and medians for enhanced nighttime and low-visibility conditions.",
        discipline: "bridge design",
        page: ["bridge-railings-pg9"],
      },

      {
        term: "End Treatment",
        definition: "Specially designed components at the end of guardrails that minimize the risk of injury or vehicle damage during impact.",
        discipline: "bridge design",
        page: ["bridge-railings-pg9"],
      },
      {
        term: "Flare",
        definition:
          "A curved or angled section of a guardrail system at the end of a barrier, designed to gradually direct traffic away from the hazard or prevent vehicles from impacting the end of the guardrail. Commonly used at the ends of roadways, ramps, or bridges for safer transitions.",
        discipline: "bridge design",
        page: ["bridge-railings-pg9"],
      },

      {
        term: "Guardrail Post",
        definition: "Vertical supports that hold the rail in place, typically made of steel, wood, or concrete and anchored in the ground.",
        discipline: "bridge design",
        page: ["bridge-railings-pg9"],
      },
      {
        term: "Guardrail Rail",
        definition:
          "The main horizontal part of the guardrail that absorbs the force of a collision. It can be W-beam, box beam, or thrie beam, depending on the type.",
        discipline: "bridge design",
        page: ["bridge-railings-pg9"],
      },
      {
        term: "Guide Rail Brackets",
        definition: "Attach the rail to the posts, allowing for flexing and movement to absorb impact.",
        discipline: "bridge design",
        page: ["bridge-railings-pg9"],
      },
      {
        term: "Indiana Type 5 Aluminum Bridge Railing",
        definition:
          "An aluminum bridge railing system used in Indiana, featuring horizontal aluminum rails supported by vertical posts. Designed for durability, corrosion resistance, and visibility, it provides both vehicular and pedestrian protection while maintaining a lightweight structure.",
        discipline: "bridge design",
        page: ["bridge-railings-pg9"],
      },
      {
        term: "Parabolic Offsets",
        definition:
          "Curved offsets used in guardrail and barrier systems to gradually redirect vehicles and reduce impact forces. The parabolic shape helps to guide the vehicle away from the hazard in a controlled manner, improving safety and minimizing the risk of severe collisions.",
        discipline: "bridge design",
        page: ["bridge-railings-pg9"],
      },

      {
        term: "Parapet",
        definition:
          "A low protective wall along the edge of a bridge, roadway, or structure, designed to prevent vehicles or pedestrians from falling off. It can be made of concrete, masonry, or metal and may also serve as a structural or aesthetic element.",
        discipline: "bridge design",
        page: ["bridge-railings-pg9"],
      },

      {
        term: "Sand Container",
        definition:
          "A container filled with sand, typically used in construction or highway safety applications. In guardrail systems, sand containers are sometimes used as impact-absorbing barriers or as part of a temporary protective system to help dissipate the energy of a vehicle during a collision.",
        discipline: "bridge design",
        page: ["bridge-railings-pg9"],
      },

      {
        term: "Scupper",
        definition:
          "An opening in a bridge deck or parapet designed to drain water off the structure, preventing ponding and reducing the risk of deterioration caused by moisture buildup.",
        discipline: "bridge design",
        page: ["bridge-railings-pg9"],
      },
      {
        term: "Slipforming",
        definition:
          "A construction method where concrete is poured continuously into a form that is gradually moved upwards as the concrete hardens. This technique is commonly used for constructing barrier walls. Horizontal cracking can sometimes occur over time due to shrinkage, temperature changes, or the weight of the concrete during curing. If the curing process isn't properly controlled, or if there is uneven setting or stress distribution, it can lead to the formation of cracks along the horizontal plane of the wall.",
        discipline: "bridge design",
        page: ["bridge-railings-pg9"],
      },

      {
        term: "Steel Tube Bridge Railing",
        definition:
          "A bridge railing system made of steel tubes, designed to provide vehicle and pedestrian protection while maintaining visibility. Commonly used for its strength, durability, and ability to accommodate aesthetic or architectural designs.",
        discipline: "bridge design",
        page: ["bridge-railings-pg9"],
      },
      {
        term: "TGB Transition",
        definition:
          "A guardrail transition system that connects rigid concrete bridge railings with W-Beam approach rails using a Thrie Beam segment. This transition ensures a smooth, safe connection between the rigid concrete barrier and the flexible W-Beam rail, while leveraging the Thrie Beam segment to accommodate the shift in barrier type.",
        discipline: "bridge design",
        page: ["bridge-railings-pg9"],
      },
      {
        term: "Thrie Beam Guardrail",
        definition: "A guardrail similar to the W-beam but with an additional flange for extra strength, used in higher-risk locations.",
        discipline: "bridge design",
        page: ["bridge-railings-pg9"],
      },
      {
        term: "Traffic Barrier",
        definition: "A safety barrier used to separate lanes, protect vehicles, and prevent roadway departures.",
        discipline: "bridge design",
        page: ["bridge-railings-pg9"],
      },
      {
        term: "Transition Railing",
        definition:
          "A section of guardrail used to smoothly transition between different types of guardrails, ensuring seamless vehicle redirection.",
        discipline: "bridge design",
        page: ["bridge-railings-pg9"],
      },
      {
        term: "Turned-Down End Terminal",
        definition:
          "A type of guardrail end terminal designed with a downward-curved end to redirect vehicles safely upon impact. This design helps to reduce the risk of vehicle penetration or severe damage, allowing for a more controlled deceleration and safer collision outcome.",
        discipline: "bridge design",
        page: ["bridge-railings-pg9"],
      },
      {
        term: "W-Beam Guardrail",
        definition:
          "A common guardrail type with a W-shaped cross-section, typically used on highways. It’s effective in absorbing impact and redirecting vehicles.",
        discipline: "bridge design",
        page: ["bridge-railings-pg9"],
      },

      {
        term: "WGB Transition",
        definition:
          "A guardrail transition system used to connect rigid concrete bridge railings to W-beam approach rails. This transition ensures a smooth and safe shift between the more rigid concrete barrier and the flexible W-beam rail, enhancing vehicle containment and impact absorption.",
        discipline: "bridge design",
        page: ["bridge-railings-pg9"],
      },
      {
        term: "WT Transition",
        definition:
          "A guardrail transition system designed to connect Thrie Beam bridge rail to W-Beam approach guardrail. This transition provides a smooth and safe connection between the rigid Thrie Beam barrier and the more flexible W-Beam rail, ensuring proper vehicle containment and impact resistance.",
        discipline: "bridge design",
        page: ["bridge-railings-pg9"],
      },
    ],
  },

  // Transitions

  {
    name: "Bridge Railing Transitions",
    item_id: "B.C.06",
    format: "AN (1)",
    frequency: "EI",
    referenece: "SNBI",
    category: "Railings",
    commentary_page_id: "bridge-railings-pg4",
    example_comments_page_id: "bridge-railings-pg6",
    commentary: `<p>
                  This item addresses the condition of the transition from the bridge railing to the approach guardrail. The condition assessment includes the portions of the
                  railings, posts, blocking, and curbs that are part of the bridge railing transitions.
                </p>
                <br />
    
                <p>
                  Do not consider the condition of protective coatings and other protection systems when determining the condition rating code for this item, except to the extent
                  that problems with the protective coating system are indicative of problems with the underlying railing transition material.
                </p>`,
    example_comments: [
      ["There are no deficiencies to report."],
      ["The bridge railing transitions are functioning as designed."],
      ["There is some collision damage in the railing at the transition."],
      // "To accomadate other roadway features, the transition railings are designed as attenuators.",
    ],
    rating_table: [
      {
        code: "N",
        condition: "NOT APPLICABLE",
        description: "Component does not exist.",
      },
      {
        code: "9",
        condition: "EXCELLENT",
        description: "Isolated inherent defects.",
      },
      {
        code: "8",
        condition: "VERY GOOD",
        description: "Some inherent defects.",
      },
      {
        code: "7",
        condition: "GOOD",
        description: "Some minor defects.",
      },
      {
        code: "6",
        condition: "SATISFACTORY",
        description: "Widespread minor or isolated moderate defects.",
      },
      {
        code: "5",
        condition: "FAIR",
        description: "Some moderate defects; strength and performance of the component are not affected.",
      },
      {
        code: "4",
        condition: "POOR",
        description: "Widespread moderate or isolated major defects; strength and/or performance of the component is affected.",
      },
      {
        code: "3",
        condition: "SERIOUS",
        description:
          "Major defects; strength and/or performance of the component is seriously affected. Condition typically necessitates more frequent monitoring, load restrictions, and/or corrective actions.",
      },
      {
        code: "2",
        condition: "CRITICAL",
        description:
          "Major defects; component is severely compromised. Condition typically necessitates frequent monitoring, significant load restrictions, and/or corrective actions in order to keep the bridge open.",
      },
      {
        code: "1",
        condition: "IMMINENT FAILURE",
        description: "Bridge is closed to traffic due to component condition. Repair or rehabilitation may return the bridge to service.",
      },
      {
        code: "0",
        condition: "FAILED",
        description: "Bridge is closed due to component condition, and is beyond corrective action. Replacement is required to restore service.",
      },
    ],
  },

  // Wearing
  {
    name: "Wearing Surface",
    item_id: "B.C.01a",
    format: "AN (1)",
    frequency: "EI",
    referenece: "SNBI",
    category: "Deck",
    commentary_page_id: "bridge-deck-pg4",
    example_comments_page_id: "bridge-deck-pg6",
    commentary: `<p>
                  The type of wearing surface must be considered in order to determine the appropriate condition rating. Please follow the guidance on wearing surfaces provided in
                  Part 7 of the INDOT Bridge Inspection Manual (BIM) linked below.
                </p>
                <br>
                <p>
                  If the wearing surface is monolithic with the deck, the BIM allows the deck rating to be one higher than the wearing surface. If either rating drops to a 5 or 
                  below, both the deck and the wearing surface must be rated the same and assigned the lower rating.
                </p>`,
    example_comments: [
      ["There are no deficiencies to report."],
      ["The wearing surface is monolithic with the deck.", "The wearing surface is cast monolithically with the deck."],
      ["The wearing surface is monolithic with the deck. See the deck comments."],
      ["There are sealed cracks in the wearing surface."],
      ["There are unsealed cracks visible across less than 10% of the total surface area."],
      ["There are isolated areas of minor peeling in the epoxy overlay."],
      ["There are scattered areas of peeling in less than 5% of the total surface area."],
      ["There are numerous areas of bituminous and concrete patching throughout the wearing surface."],
      [
        "The concrete bridge deck has a bituminous wearing surface and is not protected by an agency-approved membrane; therefore, the wearing surface rating must be a 4 or less.",
      ],
    ],
    rating_table: [
      {
        code: "N",
        condition: "NOT APPLICABLE",
        description: "Component does not exist.",
      },
      {
        code: "9",
        condition: "EXCELLENT",
        description: "Isolated inherent defects.",
      },
      {
        code: "8",
        condition: "VERY GOOD",
        description: "Some inherent defects.",
      },
      {
        code: "7",
        condition: "GOOD",
        description: "Some minor defects.",
      },
      {
        code: "6",
        condition: "SATISFACTORY",
        description: "Widespread minor or isolated moderate defects.",
      },
      {
        code: "5",
        condition: "FAIR",
        description: "Some moderate defects.",
      },
      {
        code: "4",
        condition: "POOR",
        description: "Widespread moderate or isolated major defects.",
      },
      {
        code: "3",
        condition: "SERIOUS",
        description: "Some major defects.",
      },
    ],
  },

  // Deck
  {
    name: "Deck",
    item_id: "B.C.01",
    format: "AN (1)",
    frequency: "EI",
    referenece: "SNBI",
    category: "Deck",
    commentary_page_id: "bridge-deck-pg1",
    example_comments_page_id: "bridge-deck-pg3",
    commentary: `<p>This item represents the condition of the deck as determined from the inspection of all deck surfaces (top, underside, and edges).</p>
                <br />
                <p>Visual assessments may be supplemented with non-destructive or destructive testing results.</p>
                <br />
                <p>
                  Use destructive or non-destructive testing results or visual condition indicators of materials covering the surfaces being assessed when top, underside or both
                  surfaces are not visible for assessment. Past inspection reports and repair records may also provide supplemental information to aid in the determination of the
                  condition rating.
                </p>
                <br />
                <p>
                  Do not consider the condition of non-monolithic wearing surfaces (i.e. overlays), stay-in-place deck forms, joint assemblies, expansion devices, bridge rails, or
                  scuppers when determining the condition rating code for this item, except insofar as they indicate the condition of the deck itself.
                </p>
                <br />
                <p>
                  Consider the condition of a joint header only when the deck serves as a joint header. For bridges with integral decks/top flanges (e.g. rigid frames, decked
                  girders or tee beams, voided slab beams, box girders, etc.), the deck condition may affect the superstructure condition rating; however, the superstructure
                  condition does not affect the deck condition rating.
                </p>
                <br />
                <p>The deck and superstructure condition ratings are the same for slab bridges.</p>`,
    example_comments: [
      ["There are no deficiencies to report."],
      ["Strength and performance are not affected."],
      ["The top of the deck is covered by an epoxy overlay."],
      // "No deficiencies are showing through the overlay.",
      ["The deck underside is concealed by stay-in-place forms and the copings are protected from runoff by concrete barrier walls."],
      // "The deck underside is concealed by stay-in-place forms and the top of the deck by an epoxy overlay.",
      ["No corrosion was found in the stay-in-place forms and the copings are in good condition."],
      // "The copings are exposed to runoff beneath the metal guardrails.",
      // "The copings have isolated hairline cracks and isolated areas of staining.",
      ["There are scattered areas of minor corrosion in the stay-in-place forms."],
      ["There are moderate spalls with delamination and exposed rebar around the deck drains."],
      ["There is heavy spalling with multiple layers of exposed rebar exhibiting moderate section loss along the north coping in all spans."],
      // "There are large areas of deep spalling with exposed rebar exhibiting moderate section loss on the underside of the deck.",
      // "Water is penetrating the deck.",
      ["There is efflorescence between the box beams, indicating that water is moving through the deck."],
      ["There is no evidence of water contacting or moving through the deck."],
      // "There is not sufficient evidence to suggest that water is moving through the deck or to warrant a lower rating.",
    ],
    rating_table: [
      {
        code: "N",
        condition: "NOT APPLICABLE",
        description: "Component does not exist.",
      },
      {
        code: "9",
        condition: "EXCELLENT",
        description: "Isolated inherent defects.",
      },
      {
        code: "8",
        condition: "VERY GOOD",
        description: "Some inherent defects.",
      },
      {
        code: "7",
        condition: "GOOD",
        description: "Some minor defects.",
      },
      {
        code: "6",
        condition: "SATISFACTORY",
        description: "Widespread minor or isolated moderate defects.",
      },
      {
        code: "5",
        condition: "FAIR",
        description: "Some moderate defects; strength and performance of the component are not affected.",
      },
      {
        code: "4",
        condition: "POOR",
        description: "Widespread moderate or isolated major defects; strength and/or performance of the component is affected.",
      },
      {
        code: "3",
        condition: "SERIOUS",
        description:
          "Major defects; strength and/or performance of the component is seriously affected. Condition typically necessitates more frequent monitoring, load restrictions, and/or corrective actions.",
      },
      {
        code: "2",
        condition: "CRITICAL",
        description:
          "Major defects; component is severely compromised. Condition typically necessitates frequent monitoring, significant load restrictions, and/or corrective actions in order to keep the bridge open.",
      },
      {
        code: "1",
        condition: "IMMINENT FAILURE",
        description: "Bridge is closed to traffic due to component condition. Repair or rehabilitation may return the bridge to service.",
      },
      {
        code: "0",
        condition: "FAILED",
        description: "Bridge is closed due to component condition, and is beyond corrective action. Replacement is required to restore service.",
      },
    ],
    glossary_page_id: "bridge-deck-pg11",
    glossary: [
      {
        term: "Bridge Deck",
        definition: "The roadway surface of a bridge, typically made of concrete or steel.",
        discipline: "bridge design",
        page: ["bridge-deck-pg11"],
      },
      {
        term: "Deck Joint",
        definition: "A joint in the bridge deck that allows for expansion, contraction, and movement due to temperature changes or load variations.",
        discipline: "bridge design",
        page: ["bridge-deck-pg11"],
      },
      {
        term: "Deck Slab",
        definition: "The reinforced concrete slab forming the bridge deck, providing structural support for traffic loads.",
        discipline: "bridge design",
        page: ["bridge-deck-pg11"],
      },
      {
        term: "Downspout",
        definition: "A drainage component that directs water from the bridge deck to a designated drainage system.",
        discipline: "bridge design",
        page: ["bridge-deck-pg11"],
      },
      {
        term: "Expansion Joint",
        definition: "A structural joint that allows movement caused by thermal expansion, contraction, or other forces.",
        discipline: "bridge design",
        page: ["bridge-deck-pg11"],
      },
      {
        term: "Nominal",
        definition:
          "Referring to an approximate or standard value, typically used when the exact measurement may vary slightly but is considered close to the stated value.",
        search: ``,
        discipline: "bridge design",
        page: ["bridge-deck-pg11"],
      },
    ],
  },

  // Super
  {
    name: "Superstructure",
    item_id: "B.C.02",
    format: "AN (1)",
    frequency: "EI",
    referenece: "SNBI",
    category: "Super",
    commentary_page_id: "bridge-super-pg1",
    example_comments_page_id: "bridge-super-pg3",
    commentary: ` <p>This item represents the condition of the superstructure as determined from the inspection of all superstructure members.</p>
                <br />
                <p>
                  Consider primary load carrying members when determining the condition rating code for this item, which includes cross-frames and diaphragms for curved girder
                  bridges. Consider secondary members only if they adversely impact the primary members. Visual assessments may be supplemented with non-destructive or destructive
                  testing results.
                </p>
                <br />
                <p>The superstructure includes:</p>
                <ul class="content-container-paragraphs-ul">
                  <li>members above the bearings for bridges with non-integral superstructure and substructure;</li>
                  <li>girders/beams for integral superstructures;</li>
                  <li>members above the spring line for arch bridges;</li>
                  <li>slabs of concrete rigid frame bridges; and</li>
                  <li>legs, knees and girders for concrete and steel rigid K-Frame or Delta-Frame bridges.</li>
                </ul>
                <br />
                <p>Consider the condition of integral headwalls and wingwalls to the first expansion joint.</p>
                <br />
                <p>
                  Do not consider the condition of bearings when determining the condition rating code for this item except to the extent that the bearings are causing distress in
                  the superstructure.
                </p>
                <br />
                <p>
                  Do not consider the condition of protective coating systems when determining the condition rating code for this item except to the extent that problems with the
                  protective coating system are indicative of problems with the underlying superstructure material. A well-formed patina on weathering steel is considered a
                  protective coating and is not considered a defect.
                </p>
                <br />
                <p>
                  Do not consider the presence of drift, debris, and soil accumulation when determining the condition rating code for this item, except to the extent that these
                  items are causing distress in the superstructure.
                </p>
                <br />
                <p>
                  Superstructure types without substructures may be affected by scour. When observed conditions are not consistent with the scour design or the assumptions used in
                  the scour appraisal, scour is considered when reporting the code for this item. In this case, observed conditions also indicate a need to reevaluate Item B.AP.03
                  (Scour Vulnerability). Observed scour that is less than the tolerable limit determined in the scour appraisal does not affect this item.
                </p>`,
    example_comments: [
      ["There are no deficiencies to report."],
      ["Strength and performance are not affected."],
      ["The superstructure is a reinforced concrete slab. See the deck comments."],

      ["The steel beams are painted, with no defects in the protective coating."],
      ["There are some areas of minor pitting in the lower flanges, but no active corrosion. "],
      ["There is heavy section loss and rust scale in the beam ends at the abutments under the joints."],

      ["There is minor cracking and delamination in the beam ends at the abutments beneath the joints."],
      // "There are exposed strands in Beam 1 at the west abutment.",

      ["There is a moderate, diagonal crack running up toward the center of the beam (indicating shear failure)."],
    ],
    rating_table: [
      {
        code: "N",
        condition: "NOT APPLICABLE",
        description: "Component does not exist.",
      },
      {
        code: "9",
        condition: "EXCELLENT",
        description: "Isolated inherent defects.",
      },
      {
        code: "8",
        condition: "VERY GOOD",
        description: "Some inherent defects.",
      },
      {
        code: "7",
        condition: "GOOD",
        description: "Some minor defects.",
      },
      {
        code: "6",
        condition: "SATISFACTORY",
        description: "Widespread minor or isolated moderate defects.",
      },
      {
        code: "5",
        condition: "FAIR",
        description: "Some moderate defects; strength and performance of the component are not affected.",
      },
      {
        code: "4",
        condition: "POOR",
        description: "Widespread moderate or isolated major defects; strength and/or performance of the component is affected.",
      },
      {
        code: "3",
        condition: "SERIOUS",
        description:
          "Major defects; strength and/or performance of the component is seriously affected. Condition typically necessitates more frequent monitoring, load restrictions, and/or corrective actions.",
      },
      {
        code: "2",
        condition: "CRITICAL",
        description:
          "Major defects; component is severely compromised. Condition typically necessitates frequent monitoring, significant load restrictions, and/or corrective actions in order to keep the bridge open.",
      },
      {
        code: "1",
        condition: "IMMINENT FAILURE",
        description: "Bridge is closed to traffic due to component condition. Repair or rehabilitation may return the bridge to service.",
      },
      {
        code: "0",
        condition: "FAILED",
        description: "Bridge is closed due to component condition, and is beyond corrective action. Replacement is required to restore service.",
      },
    ],
    glossary_page_id: "bridge-super-pg9",
    glossary: [
      {
        term: "Cover Plate",
        definition:
          "A steel plate welded or bolted to the flange of a beam or girder to increase its load-carrying capacity and reduce stress in high-moment regions.",
        discipline: "bridge design",
        page: ["bridge-super-pg9"],
      },
      {
        term: "Cross Bracing",
        definition: "A system of diagonal braces used to strengthen and stabilize the bridge structure, typically placed between girders or beams.",
        discipline: "bridge design",
        page: ["bridge-super-pg9"],
      },
      {
        term: "Curtain Wall",
        definition:
          "A vertical barrier on a bridge, typically positioned perpendicular to the beams, designed to protect the interior of the bridge structure from debris, water, or other external elements. It is commonly used in areas like piers or abutments.",
        discipline: "bridge design",
        page: ["bridge-super-pg9"],
      },
      {
        term: "Diaphragm",
        definition: "A structural element that distributes loads across the width of a bridge, preventing distortion or movement of the deck.",
        discipline: "bridge design",
        page: ["bridge-super-pg9"],
      },
      {
        term: "Girder Line",
        definition: "The alignment of girders supporting the bridge deck.",
        discipline: "bridge design",
        page: ["bridge-super-pg9"],
      },
      {
        term: "Jacking Frame",
        definition:
          "A diaphragm, typically found on a steel beam or steel girder bridge, designed to accommodate the loads required to support the bridge during bearing replacement. These are typically only included at support locations and will be more robust than a typical diaphragm.",
        discipline: "bridge design",
        page: ["bridge-super-pg9"],
      },
      {
        term: "Longitudinal Stiffener",
        definition: "A stiffener placed parallel to the length of a structural member to improve its resistance to bending and buckling under load.",
        discipline: "bridge design",
        page: ["bridge-super-pg9"],
      },
      {
        term: "Shear Crack",
        definition:
          "A diagonal crack in a structural member caused by shear forces, often forming near supports and extending upward toward the midpoint of the member. Shear cracks indicate significant structural stress and can compromise the integrity of the member if not addressed.",
        discipline: "bridge design",
        page: ["bridge-super-pg9"],
      },
      {
        term: "Shear Key",
        definition:
          "A recessed or protruding element cast into concrete or built into structural joints to improve shear resistance and prevent movement between connected components.",
        discipline: "bridge design",
        page: ["bridge-super-pg9"],
      },
      {
        term: "Splice Plate",
        definition:
          "A steel plate used to join two structural members end-to-end, transferring loads across the connection and maintaining continuity in the structure.",
        discipline: "bridge design",
        page: ["bridge-super-pg9"],
      },
      {
        term: "Steel Girder",
        definition: "A large steel beam used to support a bridge deck and distribute loads to the substructure.",
        discipline: "bridge design",
        page: ["bridge-super-pg9"],
      },
      {
        term: "Stiffener",
        definition:
          "A structural element, typically a plate or rib, used to reinforce and increase the rigidity of beams, girders, or other members to prevent deformation or buckling.",
        discipline: "bridge design",
        page: ["bridge-super-pg9"],
      },
      {
        term: "Superelevation",
        definition: "The banking of the roadway at curves to counteract centrifugal force and improve vehicle stability.",
        discipline: "bridge design",
        page: ["bridge-super-pg9"],
      },
      {
        term: "Superstructure Span",
        definition: "The portion of the bridge above the substructure that supports traffic loads.",
        discipline: "bridge design",
        page: ["bridge-super-pg9"],
      },
      {
        term: "Sway Bracing",
        definition: "Bracing used to resist lateral forces that cause side-to-side movement of a structure, improving its stability.",
        discipline: "bridge design",
        page: ["bridge-super-pg9"],
      },
      {
        term: "Transverse Stiffener",
        definition: "A stiffener installed perpendicular to the length of a structural member to resist web buckling and improve shear capacity.",
        discipline: "bridge design",
        page: ["bridge-super-pg9"],
      },
    ],
  },

  // Paint
  {
    name: "Paint",
    item_id: "B.C.02a",
    format: "AN (1)",
    frequency: "EI",
    referenece: "SNBI",
    category: "Super",
    commentary_page_id: "bridge-super-pg4",
    example_comments_page_id: "bridge-super-pg6",
    commentary: `<p>Consider surface dulling, chalking, rust and peeling when evaluating the condition rating.</p>
                <br />
                <p>At stages of advanced deterioration, consider any section loss in the painted material.</p>`,
    example_comments: [
      ["There are no deficiencies to report."],
      ["The steel beams of the superstructure have a protective coating."],
      ["There are some areas where surface corrosion has initiated."],
      ["The piles are painted."],
      ["There is minor chalking and surface dulling throughout."],
      ["There are some areas of light rust and minor peeling."],
      ["There is moderate to heavy rust at the ends of the beams under the joints."],
      ["There are some areas where the protective coating is no longer effective, and corrosion has initiated."],
      ["The protective coating is no longer effective."],
    ],
    rating_table: [
      {
        code: "N",
        condition: "NOT APPLICABLE",
        description: "Component does not exist.",
      },
      {
        code: "9",
        condition: "EXCELLENT",
        description: "Newly painted.",
      },
      {
        code: "8",
        condition: "VERY GOOD",
        description: "There is very minor surface dulling.",
      },
      {
        code: "7",
        condition: "GOOD",
        description: "There is minor chalking and surface dulling.",
      },
      {
        code: "6",
        condition: "SATISFACTORY",
        description: "There are minor areas of rust and chalking.",
      },
      {
        code: "5",
        condition: "FAIR",
        description: "There are areas of light rust and minor peeling.",
      },
      {
        code: "4",
        condition: "POOR",
        description: "There are large areas of light rust and peeling with some pitting.",
      },
      {
        code: "3",
        condition: "SERIOUS",
        description: "There is greater than 40% loss of paint and large areas of section loss.",
      },
      {
        code: "2",
        condition: "CRITICAL",
        description: "There is greater than 60% loss of paint and large areas of measurable section loss.",
      },
      {
        code: "1",
        condition: "IMMINENT FAILURE",
        description: "There is greater than 75% loss of paint and large areas of measurable section loss.",
      },
      {
        code: "0",
        condition: "FAILED",
        description: "The paint has failed and is no longer protecting the bridge.",
      },
    ],
  },

  // Bearings
  {
    name: "Bridge Bearings",
    item_id: "B.C.07",
    format: "AN (1)",
    frequency: "EI",
    referenece: "SNBI",
    category: "Bearings",
    commentary_page_id: "bridge-bearings-pg1",
    example_comments_page_id: "bridge-bearings-pg3",
    commentary: `<p>This item addresses the condition of all types and shapes of bridge bearings.</p>
                <br />
                <p>
                  Do not consider the condition of protective coatings and other protection systems when determining the condition rating code for this item, except to the extent
                  that problems with the protective coating system are indicative of problems with the underlying bearing material.
                </p>
                <br />
                <p>
                  In cases where the bearing device is not visible, the condition can be assessed based on alignment, grade across the joint, or other indirect indicators of the
                  condition.
                </p>`,
    example_comments: [
      ["There are no deficiencies to report."],
      ["The bearings are adequately positioned beneath the bridge beams and fully supported by the substructure."],
      ["There is minor corrosion in the bearings at the abutments."],
      // "There is minor pitting in the bearings at the abutments that has been painted over.",
      ["There is moderate pack rust and heavy corrosion in the bearings at the abutments."],
      ["There is rust (lamellar) scaling between the bottom of the bearings and the masonry plates at the bearings under the abutments."],
      ["The bearings are slightly misaligned."],
      ["The bridge has integral abutments."],
    ],
    rating_table: [
      {
        code: "N",
        condition: "NOT APPLICABLE",
        description: "Component does not exist.",
      },
      {
        code: "9",
        condition: "EXCELLENT",
        description: "Isolated inherent defects.",
      },
      {
        code: "8",
        condition: "VERY GOOD",
        description: "Some inherent defects.",
      },
      {
        code: "7",
        condition: "GOOD",
        description: "Some minor defects.",
      },
      {
        code: "6",
        condition: "SATISFACTORY",
        description: "Widespread minor or isolated moderate defects.",
      },
      {
        code: "5",
        condition: "FAIR",
        description: "Some moderate defects; strength and performance of the component are not affected.",
      },
      {
        code: "4",
        condition: "POOR",
        description: "Widespread moderate or isolated major defects; strength and/or performance of the component is affected.",
      },
      {
        code: "3",
        condition: "SERIOUS",
        description:
          "Major defects; strength and/or performance of the component is seriously affected. Condition typically necessitates more frequent monitoring, load restrictions, and/or corrective actions.",
      },
      {
        code: "2",
        condition: "CRITICAL",
        description:
          "Major defects; component is severely compromised. Condition typically necessitates frequent monitoring, significant load restrictions, and/or corrective actions in order to keep the bridge open.",
      },
      {
        code: "1",
        condition: "IMMINENT FAILURE",
        description: "Bridge is closed to traffic due to component condition. Repair or rehabilitation may return the bridge to service.",
      },
      {
        code: "0",
        condition: "FAILED",
        description: "Bridge is closed due to component condition, and is beyond corrective action. Replacement is required to restore service.",
      },
    ],
    glossary_page_id: "bridge-bearings-pg6",
    glossary: [
      {
        term: "Bearing Pad",
        definition: "A pad placed between the bridge superstructure and substructure to accommodate movement and distribute loads.",
        discipline: "bridge design",
        page: ["bridge-bearings-pg6"],
      },
    ],
  },

  // Sub
  {
    name: "Substructure",
    item_id: "B.C.03",
    format: "AN (1)",
    frequency: "EI",
    referenece: "SNBI",
    category: "Sub",
    commentary_page_id: "bridge-sub-pg1",
    example_comments_page_id: "bridge-sub-pg3",
    commentary: `<p>This item addresses the condition of piers, abutments, piles, footings, and other substructure members.</p>
                <br />
                <p>
                  For bridges that have substructures not visible for inspection, use appropriate visual condition indicators from the superstructure or surrounding foundation
                  materials to determine the applicable code. Visual assessments may be supplemented with non-destructive or destructive testing results.
                </p>
                <br />
    
                <p>Consider the condition of integral abutment wingwalls to the first construction or expansion joint when determining the condition rating code for this item.</p>
                <br />
    
                <p>
                  Do not consider the condition of protective coatings, fenders and other substructure protection systems when determining the condition rating code for this item,
                  except to the extent that these items indicate distress of the substructure, or adversely affect its condition.
                </p>
                <br />
    
                <p>
                  Do not consider the presence of drift, debris, and soil accumulation when determining the condition rating code for this item, except to the extent that these
                  items are causing distress in the substructure.
                </p>
                <br />
    
                <p>The substructure includes:</p>
                <ul class="content-container-paragraphs-ul">
                  <li>backwalls and the members below the bearings for bridges with non-integral superstructure and substructure;</li>
                  <li>members below the girders/beams for integral superstructures;</li>
                  <li>thrust blocks and other members below the spring line for arch bridges;</li>
                  <li>legs of concrete rigid frame bridges;</li>
                  <li>abutments and footings/foundations below the leg bearings for concrete and steel rigid K-Frame or Delta-Frame bridges; and</li>
                  <li>foundation piles exposed by erosion or scour.</li>
                </ul>
                <br />
    
                <p>
                  When observed conditions are not consistent with the scour design or the assumptions used in the scour appraisal, scour is considered in the coding of this item.
                  In this case, observed conditions also indicate a need to reevaluate Item B.AP.03 (Scour Vulnerability). Observed scour that is less than the tolerable limit
                  determined in the scour appraisal does not affect this item.
                </p>`,
    example_comments: [
      ["There are no deficiencies to report."],
      ["Strength and performance are not affected."],
      ["There is light abrasion in the interior piers at the waterline."],
      ["There is minor staining and insignificant surface defects on the interior piers and in the abutment backwalls."],
      ["There are some minor-width vertical cracks in the interior piers and in the abutment backwalls."],
      ["There are several surface spalls with exposed reinforcing steel in the piers and abutments."],
      // "There is an area of moderate spalling in the Pier 2 pier cap near the bearing area of Beams 1 and 2. There is still good bearing beneath the beams.",
      ["There is moderate erosion at the east abutment due to unchanneled drainage and excessive runoff."],
      ["There is moderate scour at the upstream end of Pier 2 where it is directly impacted by the channel."],
      ["There are several piles exposed at the north abutment."],
      ["No significant settlement has occurred and the substructure is not being undermined."],
      // "There is a wide-width horizontal crack (indicating settlement) running the length of the west abutment.",
    ],
    rating_table: [
      {
        code: "N",
        condition: "NOT APPLICABLE",
        description: "Component does not exist.",
      },
      {
        code: "9",
        condition: "EXCELLENT",
        description: "Isolated inherent defects.",
      },
      {
        code: "8",
        condition: "VERY GOOD",
        description: "Some inherent defects.",
      },
      {
        code: "7",
        condition: "GOOD",
        description: "Some minor defects.",
      },
      {
        code: "6",
        condition: "SATISFACTORY",
        description: "Widespread minor or isolated moderate defects.",
      },
      {
        code: "5",
        condition: "FAIR",
        description: "Some moderate defects; strength and performance of the component are not affected.",
      },
      {
        code: "4",
        condition: "POOR",
        description: "Widespread moderate or isolated major defects; strength and/or performance of the component is affected.",
      },
      {
        code: "3",
        condition: "SERIOUS",
        description:
          "Major defects; strength and/or performance of the component is seriously affected. Condition typically necessitates more frequent monitoring, load restrictions, and/or corrective actions.",
      },
      {
        code: "2",
        condition: "CRITICAL",
        description:
          "Major defects; component is severely compromised. Condition typically necessitates frequent monitoring, significant load restrictions, and/or corrective actions in order to keep the bridge open.",
      },
      {
        code: "1",
        condition: "IMMINENT FAILURE",
        description: "Bridge is closed to traffic due to component condition. Repair or rehabilitation may return the bridge to service.",
      },
      {
        code: "0",
        condition: "FAILED",
        description: "Bridge is closed due to component condition, and is beyond corrective action. Replacement is required to restore service.",
      },
    ],
    glossary_page_id: "bridge-sub-pg9",
    glossary: [
      {
        term: "Abutment",
        definition: "A structure that supports the end of a bridge and transfers loads to the foundation.",
        discipline: "bridge design",
        page: ["bridge-sub-pg9"],
      },
      {
        term: "Backwall",
        definition: "The vertical wall at the rear of an abutment that retains the roadway fill behind a bridge.",
        discipline: "bridge design",
        page: ["bridge-sub-pg9"],
      },
      {
        term: "Bridge Seat",
        definition: "The upper surface of an abutment or pier where bridge bearings rest, providing support for the superstructure.",
        discipline: "bridge design",
        page: ["bridge-sub-pg9"],
      },
      {
        term: "Crash Wall",
        definition: "A reinforced protective wall built around bridge piers or critical infrastructure to absorb and deflect vehicle impacts.",
        discipline: "bridge design",
        page: ["bridge-sub-pg9"],
      },
      {
        term: "Footing",
        definition: "The foundation element of a bridge that distributes loads to the ground.",
        discipline: "bridge design",
        page: ["bridge-sub-pg9"],
      },
      {
        term: "Headwall",
        definition: "A retaining wall at the end of a culvert or bridge opening that stabilizes the structure and prevents erosion.",
        discipline: "bridge design",
        page: ["bridge-sub-pg9"],
      },
      {
        term: "Mechanically Stabilized Earth (MSE) Wall",
        definition:
          "Mechanically stabilized earth, sometimes referred to as reinforced soil, is a soil mass embankment constructed with artificial reinforcing that typically consist of either geosynthetics or steel material. When used as retaining walls, MSE walls are designed as gravity walls built with multiple layers of horizontal reinforcing in granular backfill connected to wall face components.",
        discipline: "bridge design",
        page: ["bridge-sub-pg9"],
      },
      {
        term: "Pier Cap",
        definition: "The upper part of a bridge pier that distributes loads from the superstructure to the pier columns.",
        discipline: "bridge design",
        page: ["bridge-sub-pg9"],
      },
      {
        term: "Pier Wall",
        definition: "A vertical structural element that supports bridge spans and transfers loads to the foundation, often part of a pier system.",
        discipline: "bridge design",
        page: ["bridge-sub-pg9"],
      },
      {
        term: "Pile",
        definition:
          "A structural element driven or drilled into the ground to resist vertical and/or horizontal loads. Piles are usually rolled steel shapes, concrete, or timber.",
        discipline: "bridge design",
        page: ["bridge-sub-pg9"],
      },
      {
        term: "Pile Cap",
        definition: "A reinforced concrete slab that connects multiple foundation piles, distributing loads more effectively.",
        discipline: "bridge design",
        page: ["bridge-sub-pg9"],
      },
      {
        term: "Retaining Wall",
        definition:
          "A permanent, relatively rigid structure that supports a soil mass at slopes steeper than their angle of rest to provide usable space both above and in front of the wall.",
        discipline: "bridge design",
        page: ["bridge-sub-pg9"],
      },
      {
        term: "Slopewall",
        definition: "A protective concrete or riprap covering placed on embankments to prevent soil erosion near bridges and culverts.",
        discipline: "bridge design",
        page: ["bridge-sub-pg9"],
      },
      {
        term: "Wingwall",
        definition: "A sidewall extending from an abutment or headwall that helps retain soil and direct water flow away from a bridge or culvert.",
        discipline: "bridge design",
        page: ["bridge-sub-pg9"],
      },
    ],
  },

  // Slopewall
  {
    name: "Slopewall",
    item_id: "B.C.03a",
    format: "AN (1)",
    frequency: "EI",
    referenece: "SNBI",
    category: "Sub",
    commentary_page_id: "bridge-sub-pg4",
    example_comments_page_id: "bridge-sub-pg6",
    commentary: `<p>
                  Consider settlement and cracking in the slopewall and any voids that may cause defects in the abutment or approach slab. Use any visible indicators to assess
                  the stability of the soil beneath the slopewall.
                </p>`,
    example_comments: [
      ["The slopewalls are in good condition."],
      ["There are some settlement cracks in the slopewalls."],
      ["The slopewalls appear to be stable with no signs of distress or movement."],
      ["The east slopewall has wide cracking."],
      ["The slopewall exhibits minor settlement, but there are no signs of structural instability."],
      ["There are minor voids present behind the slopewall, but they do not appear to be affecting stability."],
      // "There is moderate erosion under the east slopewall.",
      ["The slopewall is overgrown with vegetation, which may be hiding potential issues."],
      ["The structure has MSE walls."],
      ["There are no obvious structural deficiencies in the MSE walls."],
    ],
    rating_table: [
      {
        code: "N",
        condition: "NOT APPLICABLE",
        description: "Bridge does not have slopewalls.",
      },
      {
        code: "G",
        condition: "GOOD",
        description: "Some minor defects.",
      },
      {
        code: "P",
        condition: "POOR",
        description: "Widespread moderate or isolated major defects.",
      },
    ],
  },

  // Culvert
  {
    name: "Culvert",
    item_id: "B.C.04",
    format: "AN (1)",
    frequency: "EI",
    referenece: "SNBI",
    category: "Culvert",
    commentary_page_id: "bridge-culvert-pg1",
    example_comments_page_id: "bridge-culvert-pg3",
    commentary: `<p>This item addresses the condition of culverts. The condition assessment includes footings, piles, and other foundation members when present.</p>
                <br />
    
                <p>
                  For culverts that have components not visible for inspection, use appropriate visual condition indicators from the roadway or surrounding foundation materials to
                  determine the applicable code. Visual assessments may be supplemented with non-destructive or destructive testing results.
                </p>
                <br />
    
                <p>
                  Consider the condition of integral wingwalls and headwalls to the first construction or expansion joint when determining the condition rating code for this item.
                </p>
                <br />
    
                <p>
                  Do not consider the condition of protective coatings and other culvert protection systems when determining the condition rating code for this item, except to the
                  extent that these items indicate distress of the culvert, or adversely affect its condition.
                </p>
                <br />
    
                <p>
                  Do not consider the presence of drift, debris, and soil accumulation when determining the condition rating code for this item, except to the extent that these
                  items are causing distress in the culvert.
                </p>
                <br />
    
                <p>The culvert includes:</p>
                <ul class="content-container-paragraphs-ul">
                  <li>buried pipe or box;</li>
                  <li>footings below the walls of a 3-sided box; and</li>
                  <li>foundation piles exposed by erosion or scour.</li>
                </ul>
                <br />
    
                <p>
                  When observed conditions are not consistent with the scour design or the assumptions used in the scour appraisal, scour is considered in the coding of this item.
                  In this case, observed conditions also indicate a need to reevaluate Item B.AP.03 (Scour Vulnerability). Observed scour that is less than the tolerable limit
                  determined in the scour appraisal does not affect this item.
                </p>`,
    example_comments: [
      ["There are no deficiencies to report."],
      ["Strength and performance are not affected."],
      ["There is minor leaking between the segments."],
      ["There are minor deformations to the pipe shape."],
      ["There is minor corrosion at the waterline."],
      // "There is complete section loss in the pipe invert on the north end for 20'.",
      ["There is some minor- to moderate-width cracking with efflorescence in the barrel."],
      ["There is cracking and efflorescence in the spandrel wall."],
      ["There is minor cracking with heavy efflorescence at the outer edge of the arch ring."],
      ["The spandrel walls are intact with no signs of backfill loss at the base."],
    ],
    rating_table: [
      {
        code: "N",
        condition: "NOT APPLICABLE",
        description: "Component does not exist.",
      },
      {
        code: "9",
        condition: "EXCELLENT",
        description: "Isolated inherent defects.",
      },
      {
        code: "8",
        condition: "VERY GOOD",
        description: "Some inherent defects.",
      },
      {
        code: "7",
        condition: "GOOD",
        description: "Some minor defects.",
      },
      {
        code: "6",
        condition: "SATISFACTORY",
        description: "Widespread minor or isolated moderate defects.",
      },
      {
        code: "5",
        condition: "FAIR",
        description: "Some moderate defects; strength and performance of the component are not affected.",
      },
      {
        code: "4",
        condition: "POOR",
        description: "Widespread moderate or isolated major defects; strength and/or performance of the component is affected.",
      },
      {
        code: "3",
        condition: "SERIOUS",
        description:
          "Major defects; strength and/or performance of the component is seriously affected. Condition typically necessitates more frequent monitoring, load restrictions, and/or corrective actions.",
      },
      {
        code: "2",
        condition: "CRITICAL",
        description:
          "Major defects; component is severely compromised. Condition typically necessitates frequent monitoring, significant load restrictions, and/or corrective actions in order to keep the bridge open.",
      },
      {
        code: "1",
        condition: "IMMINENT FAILURE",
        description: "Bridge is closed to traffic due to component condition. Repair or rehabilitation may return the bridge to service.",
      },
      {
        code: "0",
        condition: "FAILED",
        description: "Bridge is closed due to component condition, and is beyond corrective action. Replacement is required to restore service.",
      },
    ],
    glossary_page_id: "bridge-culvert-pg6",
    glossary: [
      {
        term: "Abrasion",
        definition: "Wearing or grinding away of material by water containing sand, gravel, or stones.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Abrasive Condition",
        definition:
          "The presence of granular material accompanied with a stream gradient or flow sufficient to cause movement of the granular material in the streambed.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Abutment",
        definition:
          "A support structure at either end of the bridge that holds the ends of the arch in place and transfers the loads from the bridge to the ground.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Arch Crown",
        definition:
          "The highest point of the arch, located at the center of the span, which experiences compressive forces that help distribute loads across the arch structure.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Arch Ring",
        definition:
          "The curved, topmost portion of an arch that carries the compressive load across the span of the bridge, ensuring structural stability.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Arch Springing",
        definition: "The point or line at which the arch ring meets the abutments, where the arch begins to support the load from the bridge.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Backfill",
        definition:
          "The material placed behind a bridge abutment or retaining wall to provide support, distribute loads, and aid in drainage. It is typically composed of soil, granular fill, or other engineered materials.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Barrel (Arch)",
        definition:
          "The curved, continuous part of an arch bridge, typically referring to the overall length or span of the arch that supports the load.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Barrel (Culvert)",
        definition: "The main body of a culvert structure that transports water beneath the roadway.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Blistering",
        definition:
          "Process of water infiltrating the first layer of a fiberglass-reinforced plastic large culvert structure causing bubbles to form near the surface.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Channel",
        definition: "A waterway used to transport water from one location to another.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Corrosion",
        definition: "Deterioration or dissolution of a material by chemical or electrochemical reaction with the surrounding environment.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Cover",
        definition: "The depth of backfill present between the top of a culvert structure and the base layer of the roadway.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Culvert",
        definition:
          "A structure located beneath a roadway where it intersects with a waterway. The structure provides a structural function of support to the roadway above while allowing waterway movement through the embankment below.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Deflection",
        definition: "Change in the original or specified vertical or horizontal measurement of a culvert structure.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Delamination",
        definition: "Separation of a layer of concrete generally through internal cracking parallel to the concrete surface.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Deterioration",
        definition: "Decline in quality over time due to chemical or physical wearing.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Differential Settlement",
        definition: "Uneven settlement between footings or supports.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Efflorescence",
        definition: "Deposits of salts on the surface of a porous material caused by the migration of salt-laden water to the surface.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Embankment",
        definition: "Soil constructed above the natural ground surface that encases a culvert structure and supports a roadway.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Erosion",
        definition: "The removal of a material or surface over time by flowing water.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Exfiltration",
        definition: "The process of water exiting a culvert structure and entering the surrounding soil through unintended openings.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Extrados",
        definition: "The outer surface of the arch ring, which is under tension and provides the structural shape for the arch.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Flexible Culvert",
        definition:
          "A culvert that relies on a consistent application of pressure from the surrounding soil envelope to develop structural strength.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Galvanization",
        definition: "Application of zinc coating along the surface of a structure.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Infiltration",
        definition: "The process of water or backfill material entering the culvert structure through unintended openings.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Inlet",
        definition: "The initial 5 ft of the upstream end of a culvert structure.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Intrados",
        definition: "The inner surface of the arch ring, which is in compression and typically carries the load from the bridge deck.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Invert",
        definition: "The bottom or lowest region along the internal surface of a pipe.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Joint",
        definition:
          "Connection where two sections of a culvert structure meet. Additional material may be present to ensure a watertight connection between sections.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Keystone",
        definition:
          "The central, topmost stone or concrete block of an arch that locks the other blocks or sections in place, crucial for the arch’s structural integrity.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Large Culvert",
        definition:
          "A culvert structure with a measured span length between 4 ft and 20 ft as measured perpendicular to the centerline of the parent roadway.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Outlet",
        definition: "The final 5 ft of the downstream end of a culvert structure.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Pier",
        definition:
          "A vertical support structure that transfers loads from the bridge superstructure to the foundation. Piers are typically located between abutments to support spans over water, roadways, or other obstacles.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Piping",
        definition: "The process of erosion along the exterior perimeter of a culvert barrel.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Pressure Head",
        definition: "Height of water above a plane or point of reference.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Rehabilitation",
        definition: "Repairing a culvert to return it to its initial condition or better.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Replacement",
        definition: "Removal of existing structure and construction of a new culvert.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Rigid Culvert",
        definition: "A culvert that relies on internal material properties to develop structural strength.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Rise",
        definition:
          "The vertical distance from the base of the arch to the highest point of the arch, influencing the curvature and load distribution of the arch.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Scaling",
        definition: "Disintegration of cement paste caused by chemical attacks or freeze-thaw cycles that erode the concrete surface.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Scour",
        definition: "Erosion of the streambed of a channel where it meets the inlet and outlet of a culvert structure.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Section Loss",
        definition: "Loss of a material’s thickness caused by chemical or physical degradation.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Slabbing",
        definition: "Straightening of rounded concrete sections accompanied by cracking and/or spalls.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Soil Envelope",
        definition: "Soil or backfill encasing a culvert structure and applying pressure due to the weight of the soil.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Spalling",
        definition: "Separation of surface concrete due to fractures within the material.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Span",
        definition: "The horizontal distance between the supports (abutments) of the arch, determining the size and shape of the arch structure.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Spandrel Wall",
        definition:
          "The vertical wall or partition that supports the arch ring and fills the space between the arch and the roadbed, providing additional stability to the structure.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Springline",
        definition:
          "The horizontal line at which the arch ring begins to curve from the abutment, marking the transition between the arch ring and the abutments. The horizontal distance between two springlines is the span distance.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Underfill Concrete Arch",
        definition:
          "A type of bridge structure consisting of a concrete arch with a fill material placed underneath the arch to support and distribute the load, providing stability and reducing the amount of material required for the arch.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Underfill Material",
        definition:
          "A material, such as compacted soil or granular aggregate, placed beneath the arch ring to help distribute loads evenly and enhance the bridge’s stability.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Undermining",
        definition:
          "Erosion process that removes material from below and threatens the structural integrity of the above member; typically occurs around footings and other supports.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
      {
        term: "Vertical Offset",
        definition: "Displacement of an object from its original position in the vertical direction.",
        discipline: "bridge design",
        page: ["bridge-culvert-pg6"],
      },
    ],
  },

  // Channel
  {
    name: "Channel",
    item_id: "B.C.09",
    format: "AN (1)",
    frequency: "EI",
    referenece: "SNBI",
    category: "Channel",
    commentary_page_id: "bridge-channel-pg1",
    example_comments_page_id: "bridge-channel-pg3",
    commentary: `<p>
                  This item is used to provide a condition rating for the channel at the bridge. Consider the channel upstream and downstream only insofar as it threatens the
                  bridge and approach roadway.
                </p>
                <br />
    
                <p>The condition of channel protection devices is addressed under a separate item. Refer to Item B.C.10 (Channel Protection Condition Rating).</p>
                <br />
    
                <p>
                  For concrete lined channels, channel defects typically do not apply, except for Aggradation and Debris. The condition of the channel lining would be addressed by
                  Item B.C.10 (Channel Protection Condition Rating).
                </p>`,
    example_comments: [
      ["There are no deficiencies to report."],
      ["Under normal conditions, the shallow, low-velocity channel flows from north to south through Span B."],
      ["The interior piers are located near the channel banks and are frequently exposed to water when levels are at or near normal pool."],
      ["There are localized areas of minor erosion."],
      ["The channel is free of significant debris accumulation that would obstruct flow."],
      ["The channel condition does not threaten the roadway or the bridge."],
      ["Flow direction varies with rising and receding water levels."],
      ["Accumulated debris has caused localized flow obstruction in the channel."],
      ["The channel flows against the south abutment, creating a low spot in the channel."],
      ["The bridge is not over water."],
    ],
    rating_table: [
      {
        code: "N",
        condition: "NOT APPLICABLE",
        description: "Bridge does not cross over water.",
      },
      {
        code: "9",
        condition: "EXCELLENT",
        description: "No defects.",
      },
      {
        code: "8",
        condition: "VERY GOOD",
        description: "Inherent defects only.",
      },
      {
        code: "7",
        condition: "GOOD",
        description: "Some minor defects.",
      },
      {
        code: "6",
        condition: "SATISFACTORY",
        description: "Widespread minor or isolated moderate defects.",
      },
      {
        code: "5",
        condition: "FAIR",
        description: "Moderate defects; bridge and approach roadway are not threatened.",
      },
      {
        code: "4",
        condition: "POOR",
        description: "Widespread moderate or isolated major defects; bridge and/or approach roadway is threatened.",
      },
      {
        code: "3",
        condition: "SERIOUS",
        description:
          "Major defects; bridge or approach roadway is seriously threatened. Condition typically necessitates more frequent monitoring, load restrictions, and/or corrective actions.",
      },
      {
        code: "2",
        condition: "CRITICAL",
        description:
          "Major defects. Bridge or approach roadway is severely threatened. Condition typically necessitates frequent monitoring, significant load restrictions, and/or corrective actions in order to keep the bridge open.",
      },
      {
        code: "1",
        condition: "IMMINENT FAILURE",
        description: "Bridge is closed to traffic due to channel condition. Channel rehabilitation may return the bridge to service.",
      },
      {
        code: "0",
        condition: "FAILED",
        description:
          "Bridge is closed due to channel condition, and is beyond corrective action. Bridge location or design can no longer accommodate the channel, and bridge replacement is needed to restore service.",
      },
    ],
    glossary_page_id: "bridge-channel-pg8",
    glossary: [
      {
        term: "Aggradation",
        definition:
          "The process of sediment deposition that raises the level of a riverbed or streambed, often due to reduced water flow or velocity.",
        discipline: "bridge design",
        page: ["bridge-channel-pg8"],
      },
      {
        term: "Armoring",
        definition:
          "The process of applying protective materials, such as riprap, concrete, or steel, to embankments, shorelines, or structures to prevent erosion. Armoring aims to resist the forces of water, wind, or ice, protecting the surface from degradation and maintaining stability.",
        discipline: "bridge design",
        page: ["bridge-channel-pg8"],
      },
      {
        term: "Articulating Concrete Blocks",
        definition: "Pre-cast, interlocking concrete units used to form erosion-resistant surfaces.",
        discipline: "bridge design",
        page: ["bridge-channel-pg8"],
      },
      {
        term: "Backwater",
        definition:
          "The increase in the upstream water elevation resulting from an obstruction to flow, such as a bridge and/or embankment placed in the floodplain.",

        discipline: "bridge design",
        page: ["bridge-channel-pg8"],
      },
      {
        term: "Bedload",
        definition: "The sediment that moves along the bottom of a river or streambed, contributing to scour and erosion.",
        discipline: "bridge design",
        page: ["bridge-channel-pg8"],
      },
      {
        term: "Bedrock",
        definition: "The solid rock layer beneath soil, sand or silt.",
        discipline: "bridge design",
        page: ["bridge-channel-pg8"],
      },
      {
        term: "Bendway Weirs",
        definition: "A type of river training structure used to guide water flow along a river bend, reducing bank erosion and scour.",
        discipline: "bridge design",
        page: ["bridge-channel-pg8"],
      },
      {
        term: "Cavitation",
        definition:
          "The formation of vapor bubbles in the water that collapse near a surface, leading to localized erosion, often seen around hydraulic structures like gates or valves.",
        discipline: "bridge design",
        page: ["bridge-channel-pg8"],
      },

      {
        term: "Channel Bed",
        definition: "The bottom surface of a channel, often composed of rock, sediment, or soil, through which the flow of water moves.",
        discipline: "bridge design",
        page: ["bridge-channel-pg8"],
      },

      {
        term: "Channel Migration",
        definition:
          "The natural process by which a river or stream shifts its course over time, typically due to erosion on one bank and deposition on the opposite bank. This movement can alter the shape and location of the channel, impacting surrounding areas.",
        discipline: "bridge design",
        page: ["bridge-channel-pg8"],
      },

      {
        term: "Check Dams",
        definition: "Small structures used in rivers or streams to slow the flow of water and reduce erosion.",
        discipline: "bridge design",
        page: ["bridge-channel-pg8"],
      },
      {
        term: "Concrete Slope Paving",
        definition: "A protective layer of concrete used to stabilize slopes and prevent erosion.",
        discipline: "bridge design",
        page: ["bridge-channel-pg8"],
      },
      {
        term: "Confluence",
        definition: "The point at which two or more streams or rivers meet, often forming a larger channel or river.",
        discipline: "bridge design",
        page: ["bridge-channel-pg8"],
      },
      {
        term: "Cut Bank",
        definition: "The outer bank of a meander, where erosion is most active, often forming steep, vertical walls.",
        discipline: "bridge design",
        page: ["bridge-channel-pg8"],
      },
      {
        term: "Degradation",
        definition:
          "The process of erosion or removal of sediment from the riverbed or streambed, leading to a lowering of the watercourse or shoreline.",
        discipline: "bridge design",
        page: ["bridge-channel-pg8"],
      },

      {
        term: "Designed Scour Countermeasures",
        definition:
          "Engineered channel armoring specifically designed to address scour vulnerability. These measures use materials like concrete blocks, gabions, or riprap, carefully planned and calculated based on flow rate, water velocity, soil properties, and site conditions to effectively mitigate erosion and protect vulnerable areas.",
        discipline: "bridge design",
        page: ["bridge-channel-pg8"],
      },

      {
        term: "Drop Structures",
        definition:
          "A river training feature that is placed in the channel to control the flow of water and reduce scouring effects on the streambed.",
        discipline: "bridge design",
        page: ["bridge-channel-pg8"],
      },
      {
        term: "Erosion",
        definition:
          "The gradual removal of soil, rock, or other surface materials by natural forces such as wind, water, or ice. Scour is a type of erosion.",
        discipline: "bridge design",
        page: ["bridge-channel-pg8"],
      },

      {
        term: "Floodplain",
        definition:
          "The flat, often expansive area adjacent to a channel that is subject to periodic flooding, typically formed by sediment deposition during high-water events.",
        discipline: "bridge design",
        page: ["bridge-channel-pg8"],
      },
      {
        term: "Flow Line",
        definition: "The lowest point within a channel, pipe, or culvert where water is expected to flow under normal conditions.",
        discipline: "bridge design",
        page: ["bridge-channel-pg8"],
      },
      {
        term: "Freeboard",
        definition: "The clearance between the bottom of the superstructure and the design high-water elevation.",
        discipline: "bridge design",
        page: ["bridge-channel-pg8"],
      },

      {
        term: "Gabion Mattresses",
        definition: "A riverbank protection system made of mesh baskets filled with rocks, providing stability and preventing erosion.",
        discipline: "bridge design",
        page: ["bridge-channel-pg8"],
      },
      {
        term: "Grout-Filled Mats",
        definition: "A protective matting system filled with grout to stabilize riverbanks and prevent erosion.",
        discipline: "bridge design",
        page: ["bridge-channel-pg8"],
      },
      {
        term: "Grouted Riprap",
        definition: "A type of riprap that is bonded together with grout to form a more stable, cohesive surface.",
        discipline: "bridge design",
        page: ["bridge-channel-pg8"],
      },
      {
        term: "Guide Banks",
        definition: "A type of river training countermeasure designed to direct flow away from the banks and toward the center of the channel.",
        discipline: "bridge design",
        page: ["bridge-channel-pg8"],
      },
      {
        term: "Headcutting",
        definition:
          "The erosion of the upstream end of a channel, often occurring when a sudden drop in elevation (such as a waterfall) leads to rapid erosion and deepening.",
        discipline: "bridge design",
        page: ["bridge-channel-pg8"],
      },

      {
        term: "Instability",
        definition: "The condition in which a channel or bank is prone to failure due to erosion, over saturation, or improper structural design.",
        discipline: "bridge design",
        page: ["bridge-channel-pg8"],
      },

      {
        term: "Meander",
        definition:
          "A curve or bend in a channel, typically occurring in low-gradient rivers or streams, where the water flow erodes one bank and deposits sediment on the other.",
        discipline: "bridge design",
        page: ["bridge-channel-pg8"],
      },
      {
        term: "Piping",
        definition:
          "The erosion caused by the flow of water through soil or sediment, creating underground channels and leading to the collapse of the surface material.",
        discipline: "bridge design",
        page: ["bridge-channel-pg8"],
      },
      {
        term: "Point Bar",
        definition: "A crescent-shaped deposit of sediment on the inside of a meander curve, formed by the slower flow of water.",
        discipline: "bridge design",
        page: ["bridge-channel-pg8"],
      },
      {
        term: "Pressure Head",
        definition:
          "The height of a column of water that represents the potential energy of water due to pressure. It is used to quantify the pressure at a specific point in a system, often in relation to its ability to move or flow.",
        discipline: "bridge design",
        page: ["bridge-channel-pg8"],
      },
      {
        term: "Revetment",
        definition: "A facing of masonry or stones to protect an embankment from erosion.",
        discipline: "bridge design",
        page: ["bridge-channel-pg8"],
      },
      {
        term: "Revetment Riprap",
        definition:
          "A form of erosion control using a layer of riprap placed along the base of a slope or shoreline. Revetment riprap acts as a protective armor to prevent undermining and scour by dissipating wave or water flow energy, typically used in more permanent applications.",
        discipline: "bridge design",
        page: ["bridge-channel-pg8"],
      },
      {
        term: "Rill Erosion",
        definition:
          "Shallow, small channels formed on the soil surface by the concentrated flow of water, often caused by rainfall or surface runoff.",
        discipline: "bridge design",
        page: ["bridge-channel-pg8"],
      },
      {
        term: "Riprap",
        definition: "Loose stone or rock material placed along embankments, shorelines, or riverbeds to prevent erosion.",
        discipline: "bridge design",
        page: ["bridge-channel-pg8"],
      },
      {
        term: "Scour",
        definition:
          "Localized erosion caused by the force of flowing water around structures like bridge piers, abutments, or embankments, often leading to foundation instability.",
        discipline: "bridge design",
        page: ["bridge-channel-pg8"],
      },
      {
        term: "Sediment Deposition",
        definition:
          "The accumulation of eroded materials such as sand, silt, or gravel within a channel, typically occurring when the flow velocity decreases.",
        discipline: "bridge design",
        page: ["bridge-channel-pg8"],
      },
      {
        term: "Sheet Pile",
        definition:
          "A long, thin structural member, typically made of steel, with interlocking edges driven into the ground to form a continuous wall. Used to retain earth or water and resist lateral pressure, it is commonly used for bridge abutments, cofferdams, channel protection, and temporary excavation support.",
        discipline: "bridge design",
        page: ["bridge-channel-pg8"],
      },
      {
        term: "Sloughing",
        definition:
          "The downward movement or collapse of soil, rock, or embankment material due to erosion, saturation, or loss of support. Sloughing can occur on slopes, embankments, or channel banks, potentially compromising stability and requiring corrective measures such as drainage improvements, soil reinforcement, or protective armoring.",
        discipline: "bridge design",
        page: ["bridge-channel-pg8"],
      },
      {
        term: "Splash Erosion",
        definition: "Erosion caused by the impact of raindrops dislodging small soil particles, which are then carried away by water or wind.",
        discipline: "bridge design",
        page: ["bridge-channel-pg8"],
      },
      {
        term: "Spurs",
        definition:
          "A river training countermeasure that extends from the bank to control flow direction and reduce erosion by deflecting water away from vulnerable areas.",
        discipline: "bridge design",
        page: ["bridge-channel-pg8"],
      },

      {
        term: "Temporary Scour Countermeasures",
        definition:
          "Short-term erosion control methods, often involving the use of loosely placed materials like riprap, gravel, or dumped rock, to protect vulnerable areas from scour and erosion until more permanent solutions can be implemented.",
        discipline: "bridge design",
        page: ["bridge-channel-pg8"],
      },

      {
        term: "Thalweg",
        definition:
          "The line of lowest elevation within a channel, often following the natural flow path of water, marking the deepest part of the channel.",
        discipline: "bridge design",
        page: ["bridge-channel-pg8"],
      },

      {
        term: "Undercutting",
        definition:
          "The erosion of the base of a channel's bank or bed, causing instability and leading to the collapse or sloughing of the bank material.",
        discipline: "bridge design",
        page: ["bridge-channel-pg8"],
      },
      {
        term: "Undermining",
        definition:
          "The erosion process where material is removed from beneath a structure or support, leading to a loss of stability and potential failure of the overlying or surrounding elements. This commonly occurs around foundations, footings, or piers.",
        discipline: "bridge design",
        page: ["bridge-channel-pg8"],
      },
      {
        term: "Waterline",
        definition: "The elevation or mark indicating the typical level of water in a stream, river, or other water body near a structure.",
        discipline: "bridge design",
        page: ["bridge-channel-pg8"],
      },

      {
        term: "Widening",
        definition: "The increase in the horizontal width of a channel, typically caused by bank erosion or undercutting.",
        discipline: "bridge design",
        page: ["bridge-channel-pg8"],
      },
    ],
  },

  // Channel Protection
  {
    name: "Channel Protection",
    item_id: "B.C.10",
    format: "AN (1)",
    frequency: "EI",
    referenece: "SNBI",
    category: "Channel",
    commentary_page_id: "bridge-channel-pg4",
    example_comments_page_id: "bridge-channel-pg6",
    commentary: `<p>This item is used to provide a condition rating for channel protection devices.</p>
                <br />
    
                <p>
                  Evaluate the condition and effectiveness of channel protection devices installed on banks or in the stream to mitigate channel issues that may impact the bridge.
                  When reporting this item, consider erosion and scour, damage (unraveling, displacement, separation, and sagging), and material defects (scaling, abrasion,
                  spalling, corrosion, cracking, splitting, and decay).
                </p>
                <br />
    
                <p>
                  Channel protection devices are considered countermeasures that control, inhibit, delay, or minimize stream instability and scour problems, including river
                  training and armoring countermeasures.
                </p>
                <br />
    
                <p>
                  River training countermeasures may include: spurs, bendway weirs, guide banks, drop structures, and check dams. Additional river training countermeasures can be
                  found in HEC-23 and elsewhere.
                </p>
                
                <p>
                  Armoring countermeasures may include: rock riprap, grouted riprap, concrete slope paving, articulating concrete blocks, gabion mattresses, and grout-filled mats. 
                  Additional armoring countermeasures can be found in HEC-23 and elsewhere.
                </p>

                <p>
                  For bridges that have countermeasures not visible for inspection, use appropriate visual condition indicators to determine the applicable code. These may include 
                  measurements taken at the bridge face(s) during every inspection to help determine degree of degradation, aggradation, and/or channel migration.
                </p>


                <p>
                  For this item, a minor defect does not limit the effectiveness of the channel protection, while a moderate defect may limit its effectiveness. A major defect 
                  indicates that the channel protection is missing or is no longer effective as determined by a hydraulic review.
                </p>
                
                `,
    example_comments: [
      ["There are no deficiencies to report."],
      ["Under normal conditions, none of the substructure components are in the channel."],
      ["All channel protection measures appear to be functioning as designed."],
      ["The interior piers and abutments are protected with riprap."],
      ["No channel protection is visible at the bridge."],
      ["No channel protection is visible at the interior piers."],
      ["Some riprap has washed away leaving sections of bank unprotected."],
      ["Most of the riprap under the end spans has washed away."],
      ["The channel protection is ineffective; a yellow maintenance deficiency was submitted for erosion control."],
    ],
    rating_table: [
      {
        code: "N",
        condition: "NOT APPLICABLE",
        description: "Bridge does not cross over water or channel protection devices do not exist.",
      },
      {
        code: "9",
        condition: "EXCELLENT",
        description: "Isolated inherent defects.",
      },
      {
        code: "8",
        condition: "VERY GOOD",
        description: "Some inherent defects.",
      },
      {
        code: "7",
        condition: "GOOD",
        description: "Some minor defects.",
      },
      {
        code: "6",
        condition: "SATISFACTORY",
        description: "Widespread minor or isolated moderate defects.",
      },
      {
        code: "5",
        condition: "FAIR",
        description: "Some moderate defects; performance of the channel protection is not affected.",
      },
      {
        code: "4",
        condition: "POOR",
        description: "Widespread moderate or isolated major defects; performance of channel protection is affected.",
      },
      {
        code: "3",
        condition: "SERIOUS",
        description:
          "Major defects; performance of channel protection is seriously affected. Condition typically necessitates more frequent monitoring or corrective actions.",
      },
      {
        code: "2",
        condition: "CRITICAL",
        description:
          "Major defects; channel protection is severely compromised. Condition typically necessitates more frequent monitoring or corrective actions.",
      },
      {
        code: "1",
        condition: "IMMINENT FAILURE",
        description: "Channel protection has failed, but corrective action could restore it to working condition.",
      },
      {
        code: "0",
        condition: "FAILED",
        description: "Channel protection is beyond repair and must be replaced.",
      },
    ],
  },

  // Scour
  {
    name: "Scour",
    item_id: "B.C.11",
    format: "AN (1)",
    frequency: "EI",
    referenece: "SNBI",
    category: "Scour",
    commentary_page_id: "bridge-scour-pg1",
    example_comments_page_id: "bridge-scour-pg3",
    commentary: `<p>Refer to Item B.AP.03 (Scour Vulnerability) to verify if the bridge has been determined to be stable or unstable for appraised scour conditions.</p>
                <br />
    
                <p>
                  Consider design scour depth and critical scour depth, commonly found in hydraulic designs, scour evaluations, and POAs, when determining the scour condition
                  ratings.
                </p>
                <br />
    
                <p>
                  When observed conditions are not consistent with the scour design or the assumptions used in the scour appraisal, this indicates a need to reevaluate Item B.AP.03
                  (Scour Vulnerability).
                </p>`,
    example_comments: [
      ["There is no scour present."],
      ["There is no significant scour present."],
      ["There is no visible scour at the bridge."],
      ["There is minor localized scour at the interior piers."],
      ["The designed countermeasures are in good condition."],
      ["There is moderate scour at the base of the upstream piers, but it does not appear to affect the stability of the structure."],
      ["Scour has exposed the top of the footing at Pier 2, but no undermining was found."],
      ["The structure is an underfill arch with low susceptibility to scour."],
      ["Not evaluated during this inspection."],
      ["Please review the scour POA."],
    ],
    rating_table: [
      {
        code: "N",
        condition: "NOT APPLICABLE",
        description: "Bridge does not cross over water.",
      },
      {
        code: "9",
        condition: "EXCELLENT",
        description: "No scour.",
      },
      {
        code: "8",
        condition: "VERY GOOD",
        description: "Insignificant scour.",
      },
      {
        code: "7",
        condition: "GOOD",
        description: "Some minor scour.",
      },
      {
        code: "6",
        condition: "SATISFACTORY",
        description: "Widespread minor or isolated moderate scour.",
      },
      {
        code: "5",
        condition: "FAIR",
        description: "Moderate scour; strength and stability of the bridge are not affected.",
      },
      {
        code: "4",
        condition: "POOR",
        description: "Widespread moderate or isolated major scour; strength and/or stability of the bridge is affected.",
      },
      {
        code: "3",
        condition: "SERIOUS",
        description:
          "Major scour; strength and/or stability of the bridge is seriously affected. Condition typically necessitates more frequent monitoring, load restrictions, and/or corrective actions.",
      },
      {
        code: "2",
        condition: "CRITICAL",
        description:
          "Major scour; strength and/or stability of the bridge is severely compromised. Condition typically necessitates frequent monitoring, significant load restrictions, and/or corrective actions to keep the bridge open.",
      },
      {
        code: "1",
        condition: "IMMINENT FAILURE",
        description: "Bridge is closed to traffic due to scour condition. Channel rehabilitation may return the bridge to service.",
      },
      {
        code: "0",
        condition: "FAILED",
        description: "Bridge is closed due to scour condition, and is beyond corrective action. Bridge replacement is needed to restore service.",
      },
    ],
    glossary_page_id: "bridge-scour-pg7",
    glossary: [
      {
        term: "Aggradation",
        definition:
          "The process of sediment deposition that raises the level of a riverbed or streambed, often due to reduced water flow or velocity.",
        discipline: "bridge design",
        page: ["bridge-scour-pg7"],
      },
      {
        term: "Armoring",
        definition:
          "The process of applying protective materials, such as riprap, concrete, or steel, to embankments, shorelines, or structures to prevent erosion. Armoring aims to resist the forces of water, wind, or ice, protecting the surface from degradation and maintaining stability.",
        discipline: "bridge design",
        page: ["bridge-scour-pg7"],
      },
      {
        term: "Articulating Concrete Blocks",
        definition: "Pre-cast, interlocking concrete units used to form erosion-resistant surfaces.",
        discipline: "bridge design",
        page: ["bridge-scour-pg7"],
      },
      {
        term: "Backwater",
        definition:
          "The increase in the upstream water elevation resulting from an obstruction to flow, such as a bridge and/or embankment placed in the floodplain.",

        discipline: "bridge design",
        page: ["bridge-scour-pg7"],
      },
      {
        term: "Bedload",
        definition: "The sediment that moves along the bottom of a river or streambed, contributing to scour and erosion.",
        discipline: "bridge design",
        page: ["bridge-scour-pg7"],
      },
      {
        term: "Bedrock",
        definition: "The solid rock layer beneath soil, sand or silt.",
        discipline: "bridge design",
        page: ["bridge-scour-pg7"],
      },
      {
        term: "Bendway Weirs",
        definition: "A type of river training structure used to guide water flow along a river bend, reducing bank erosion and scour.",
        discipline: "bridge design",
        page: ["bridge-scour-pg7"],
      },
      {
        term: "Cavitation",
        definition:
          "The formation of vapor bubbles in the water that collapse near a surface, leading to localized erosion, often seen around hydraulic structures like gates or valves.",
        discipline: "bridge design",
        page: ["bridge-scour-pg7"],
      },

      {
        term: "Channel Bed",
        definition: "The bottom surface of a channel, often composed of rock, sediment, or soil, through which the flow of water moves.",
        discipline: "bridge design",
        page: ["bridge-scour-pg7"],
      },

      {
        term: "Channel Migration",
        definition:
          "The natural process by which a river or stream shifts its course over time, typically due to erosion on one bank and deposition on the opposite bank. This movement can alter the shape and location of the channel, impacting surrounding areas.",
        discipline: "bridge design",
        page: ["bridge-scour-pg7"],
      },

      {
        term: "Check Dams",
        definition: "Small structures used in rivers or streams to slow the flow of water and reduce erosion.",
        discipline: "bridge design",
        page: ["bridge-scour-pg7"],
      },
      {
        term: "Confluence",
        definition: "The point at which two or more streams or rivers meet, often forming a larger channel or river.",
        discipline: "bridge design",
        page: ["bridge-scour-pg7"],
      },
      {
        term: "Concrete Slope Paving",
        definition: "A protective layer of concrete used to stabilize slopes and prevent erosion.",
        discipline: "bridge design",
        page: ["bridge-scour-pg7"],
      },
      {
        term: "Cut Bank",
        definition: "The outer bank of a meander, where erosion is most active, often forming steep, vertical walls.",
        discipline: "bridge design",
        page: ["bridge-scour-pg7"],
      },
      {
        term: "Degradation",
        definition:
          "The process of erosion or removal of sediment from the riverbed or streambed, leading to a lowering of the watercourse or shoreline.",
        discipline: "bridge design",
        page: ["bridge-scour-pg7"],
      },

      {
        term: "Designed Scour Countermeasures",
        definition:
          "Engineered channel armoring specifically designed to address scour vulnerability. These measures use materials like concrete blocks, gabions, or riprap, carefully planned and calculated based on flow rate, water velocity, soil properties, and site conditions to effectively mitigate erosion and protect vulnerable areas.",
        discipline: "bridge design",
        page: ["bridge-scour-pg7"],
      },

      {
        term: "Drop Structures",
        definition:
          "A river training feature that is placed in the channel to control the flow of water and reduce scouring effects on the streambed.",
        discipline: "bridge design",
        page: ["bridge-scour-pg7"],
      },
      {
        term: "Erosion",
        definition:
          "The gradual removal of soil, rock, or other surface materials by natural forces such as wind, water, or ice. Scour is a type of erosion.",
        discipline: "bridge design",
        page: ["bridge-scour-pg7"],
      },

      {
        term: "Floodplain",
        definition:
          "The flat, often expansive area adjacent to a channel that is subject to periodic flooding, typically formed by sediment deposition during high-water events.",
        discipline: "bridge design",
        page: ["bridge-scour-pg7"],
      },
      {
        term: "Flow Line",
        definition: "The lowest point within a channel, pipe, or culvert where water is expected to flow under normal conditions.",
        discipline: "bridge design",
        page: ["bridge-scour-pg7"],
      },
      {
        term: "Freeboard",
        definition: "The clearance between the bottom of the superstructure and the design high-water elevation.",
        discipline: "bridge design",
        page: ["bridge-scour-pg7"],
      },

      {
        term: "Gabion Mattresses",
        definition: "A riverbank protection system made of mesh baskets filled with rocks, providing stability and preventing erosion.",
        discipline: "bridge design",
        page: ["bridge-scour-pg7"],
      },
      {
        term: "Grout-Filled Mats",
        definition: "A protective matting system filled with grout to stabilize riverbanks and prevent erosion.",
        discipline: "bridge design",
        page: ["bridge-scour-pg7"],
      },
      {
        term: "Grouted Riprap",
        definition: "A type of riprap that is bonded together with grout to form a more stable, cohesive surface.",
        discipline: "bridge design",
        page: ["bridge-scour-pg7"],
      },
      {
        term: "Guide Banks",
        definition: "A type of river training countermeasure designed to direct flow away from the banks and toward the center of the channel.",
        discipline: "bridge design",
        page: ["bridge-scour-pg7"],
      },
      {
        term: "Headcutting",
        definition:
          "The erosion of the upstream end of a channel, often occurring when a sudden drop in elevation (such as a waterfall) leads to rapid erosion and deepening.",
        discipline: "bridge design",
        page: ["bridge-scour-pg7"],
      },

      {
        term: "Instability",
        definition: "The condition in which a channel or bank is prone to failure due to erosion, over saturation, or improper structural design.",
        discipline: "bridge design",
        page: ["bridge-scour-pg7"],
      },

      {
        term: "Meander",
        definition:
          "A curve or bend in a channel, typically occurring in low-gradient rivers or streams, where the water flow erodes one bank and deposits sediment on the other.",
        discipline: "bridge design",
        page: ["bridge-scour-pg7"],
      },
      {
        term: "Point Bar",
        definition: "A crescent-shaped deposit of sediment on the inside of a meander curve, formed by the slower flow of water.",
        discipline: "bridge design",
        page: ["bridge-scour-pg7"],
      },
      {
        term: "Piping",
        definition:
          "The erosion caused by the flow of water through soil or sediment, creating underground channels and leading to the collapse of the surface material.",
        discipline: "bridge design",
        page: ["bridge-scour-pg7"],
      },
      {
        term: "Pressure Head",
        definition:
          "The height of a column of water that represents the potential energy of water due to pressure. It is used to quantify the pressure at a specific point in a system, often in relation to its ability to move or flow.",
        discipline: "bridge design",
        page: ["bridge-scour-pg7"],
      },
      {
        term: "Revetment",
        definition: "A facing of masonry or stones to protect an embankment from erosion.",
        discipline: "bridge design",
        page: ["bridge-scour-pg7"],
      },
      {
        term: "Revetment Riprap",
        definition:
          "A form of erosion control using a layer of riprap placed along the base of a slope or shoreline. Revetment riprap acts as a protective armor to prevent undermining and scour by dissipating wave or water flow energy, typically used in more permanent applications.",
        discipline: "bridge design",
        page: ["bridge-scour-pg7"],
      },
      {
        term: "Riprap",
        definition: "Loose stone or rock material placed along embankments, shorelines, or riverbeds to prevent erosion.",
        discipline: "bridge design",
        page: ["bridge-scour-pg7"],
      },
      {
        term: "Rill Erosion",
        definition:
          "Shallow, small channels formed on the soil surface by the concentrated flow of water, often caused by rainfall or surface runoff.",
        discipline: "bridge design",
        page: ["bridge-scour-pg7"],
      },
      {
        term: "Scour",
        definition:
          "Localized erosion caused by the force of flowing water around structures like bridge piers, abutments, or embankments, often leading to foundation instability.",
        discipline: "bridge design",
        page: ["bridge-scour-pg7"],
      },
      {
        term: "Sediment Deposition",
        definition:
          "The accumulation of eroded materials such as sand, silt, or gravel within a channel, typically occurring when the flow velocity decreases.",
        discipline: "bridge design",
        page: ["bridge-scour-pg7"],
      },
      {
        term: "Sheet Pile",
        definition:
          "A long, thin structural member, typically made of steel, with interlocking edges driven into the ground to form a continuous wall. Used to retain earth or water and resist lateral pressure, it is commonly used for bridge abutments, cofferdams, channel protection, and temporary excavation support.",
        discipline: "bridge design",
        page: ["bridge-scour-pg7"],
      },
      {
        term: "Sloughing",
        definition:
          "The downward movement or collapse of soil, rock, or embankment material due to erosion, saturation, or loss of support. Sloughing can occur on slopes, embankments, or channel banks, potentially compromising stability and requiring corrective measures such as drainage improvements, soil reinforcement, or protective armoring.",
        discipline: "bridge design",
        page: ["bridge-scour-pg7"],
      },
      {
        term: "Splash Erosion",
        definition: "Erosion caused by the impact of raindrops dislodging small soil particles, which are then carried away by water or wind.",
        discipline: "bridge design",
        page: ["bridge-scour-pg7"],
      },
      {
        term: "Spurs",
        definition:
          "A river training countermeasure that extends from the bank to control flow direction and reduce erosion by deflecting water away from vulnerable areas.",

        discipline: "bridge design",
        page: ["bridge-scour-pg7"],
      },

      {
        term: "Temporary Scour Countermeasures",
        definition:
          "Short-term erosion control methods, often involving the use of loosely placed materials like riprap, gravel, or dumped rock, to protect vulnerable areas from scour and erosion until more permanent solutions can be implemented.",
        discipline: "bridge design",
        page: ["bridge-scour-pg7"],
      },

      {
        term: "Thalweg",
        definition:
          "The line of lowest elevation within a channel, often following the natural flow path of water, marking the deepest part of the channel.",
        discipline: "bridge design",
        page: ["bridge-scour-pg7"],
      },

      {
        term: "Undercutting",
        definition:
          "The erosion of the base of a channel's bank or bed, causing instability and leading to the collapse or sloughing of the bank material.",
        discipline: "bridge design",
        page: ["bridge-scour-pg7"],
      },
      {
        term: "Undermining",
        definition:
          "The erosion process where material is removed from beneath a structure or support, leading to a loss of stability and potential failure of the overlying or surrounding elements. This commonly occurs around foundations, footings, or piers.",
        discipline: "bridge design",
        page: ["bridge-scour-pg7"],
      },
      {
        term: "Waterline",
        definition: "The elevation or mark indicating the typical level of water in a stream, river, or other water body near a structure.",
        discipline: "bridge design",
        page: ["bridge-scour-pg7"],
      },

      {
        term: "Widening",
        definition: "The increase in the horizontal width of a channel, typically caused by bank erosion or undercutting.",
        discipline: "bridge design",
        page: ["bridge-scour-pg7"],
      },
    ],
  },

  // Scour Vulnerability
  {
    name: "Scour Vulnerability",
    item_id: "B.AP.03",
    format: "AN (1)",
    frequency: "I",
    referenece: "SNBI",
    category: "Scour",
    commentary_page_id: "bridge-scour-pg4",
    example_comments_page_id: "bridge-scour-pg6",
    commentary: `<p>The intent of this item is to report the status and vulnerability determination from scour appraisals required by the NBIS.</p>
                <br />
    
                <p>
                  The codes for this item are based on the appraised scour vulnerability as described in HEC-18, Evaluating Scour at Bridges; HEC-23, Bridge Scour and Stream
                  Instability Countermeasures; and HEC-20, Stream Stability at Highway Structures.
                </p>
                <br />
    
                <p>Scour appraisals are typically performed by a multidisciplinary team of hydraulic, geotechnical, and structural engineers (Scour Appraisal Team).</p>
                <br />
    
                <p>FHWA Hydraulic Technical Advisories, manuals, and software can be found in the link below.</p>
                <br />
    
                <p>
                  Refer to item B.C.11 (Scour Condition Rating) in the Component Condition Ratings subsection to address field observed scour conditions and the effect on bridge
                  components.
                </p>
                <br />
    
                <p>
                  Use code B when designed, installed, and functioning countermeasures are used to address potential scour and to maintain bridge stability for new or existing
                  bridges, or bridges with unknown foundations.
                </p>
                <br />
    
                <p>
                  Use code B when the Scour Appraisal Team determines that the in-place, non-designed countermeasures are fully functioning and are appropriate to mitigate the risk
                  of scour.
                </p>
                <br />
    
                <p>Use code C for bridges that could become unstable for the potential scour, and temporary countermeasures are installed that were not designed.</p>`,
    example_comments: [
      ["The bridge is not scour critical."],
      ["The bridge is scour critical."],
      ["The designed countermeasures are in good condition."],
      ["The scour vulnerability status is undetermined."],
      ["The bridge is potentially vulnerable to scour; temporary countermeasures have been installed."],
      ["Scour conditions are not critical, but further monitoring is recommended."],
      ["The bridge is not currently at risk of instability due to scour."],
    ],
    rating_table: [
      {
        code: "0",
        condition: "NOT COMPLETE",
        description: "Scour appraisal has not been completed.",
      },
      {
        code: "A",
        condition: "STABLE",
        description: "Scour appraisal completed. Bridge determined to be stable for scour.",
      },
      {
        code: "B",
        condition: "COUNTERMEASURES",
        description: "Scour appraisal completed. Bridge determined to be stable for scour, dependent upon designed, and functioning countermeasures.",
      },
      {
        code: "C",
        condition: "TEMPORARY COUNTERMEASURES",
        description:
          "Scour appraisal completed. Bridge could become unstable for scour. Temporary (not designed) countermeasure installed to mitigate scour. Bridge is scour critical.",
      },
      {
        code: "D",
        condition: "UNSTABLE",
        description: "Scour appraisal completed. Bridge is, or may become, unstable for scour. Bridge is scour critical.",
      },
      {
        code: "E",
        condition: "NOT COMPLETED",
        description: "Scour appraisal has not been completed. Temporary (not designed) countermeasure installed to mitigate scour.",
      },
      {
        code: "U",
        condition: "UNKNOWN",
        description: "Scour appraisal has not been completed due to unknown foundations.",
      },
    ],
  },

  // Overtopping
  {
    name: "Overtopping Likelihood",
    item_id: "B.AP.02",
    format: "AN (1)",
    frequency: "EI",
    referenece: "SNBI",
    category: "Overtopping",
    commentary_page_id: "bridge-overtopping-pg1",
    example_comments_page_id: "bridge-overtopping-pg3",
    commentary: `<p>An overtopping occurrence is when the waterway overtops the riding surface carried on the bridge.</p>
                <br />
    
                <p>
                  Bridge overtopping likelihood, since the year built (B.W.01), is typically determined from historical bridge inspection or maintenance records, hydraulic studies,
                  local residents/landowners, and/or site indicators including highwater marks on the bridge or its surroundings, debris remains on bridge upper members, etc.
                </p>
                <br />
    
                <p>
                  For newer bridges with limited historical inspection or maintenance information, hydraulic design information can be used to establish an overtopping likelihood.
                </p>
                <br />
    
                <p>This item does not apply to the likelihood of the waterway overtopping approach roadways.</p>`,
    example_comments: [
      ["The Q100/HW elevation is significantly below the low structure elevation."],
      ["The Q100/HW elevation is below the low structure elevation."],
      ["The Q100/HW elevation is above the low structure elevation."],
      ["The Q100/HW elevation is 582.2' and 4.3' below the low structure elevation of 586.5'."],
      ["The maximum backwater elevation overtops the bridge."],
      ["There is nothing to indicate overtopping has ever occurred."],
      ["There is drift and debris deposited on the superstructure."],
      ["Based on the surrounding terrain, overtopping is unlikely."],
      [
        "Based on the surrounding terrain, overtopping may occur during major hydrologic events due to the limited hydraulic capacity of the structure.",
      ],
    ],
    rating_table: [
      {
        code: "N",
        condition: "NOT APPLICABLE",
        description: "Bridge does not cross over water.",
      },
      {
        code: "0",
        condition: "NEVER",
        description: "The bridge is never overtopped.",
      },
      {
        code: "1",
        condition: "REMOTE",
        description: "Once every 100 years or less frequently.",
      },
      {
        code: "2",
        condition: "VERY LOW",
        description: "Once every 51 to 99 years.",
      },
      {
        code: "3",
        condition: "LOW",
        description: "Once every 26 to 50 years.",
      },
      {
        code: "4",
        condition: "MODERATE",
        description: "Once every 11 to 25 years.",
      },
      {
        code: "5",
        condition: "HIGH",
        description: "Once every 3 to 10 years.",
      },
      {
        code: "6",
        condition: "VERY HIGH",
        description: "Once every 2 years or more frequently.",
      },
    ],
  },

  // Swallows
  {
    name: "Cliff Swallows",
    item_id: "",
    format: "AN (1)",
    frequency: "EI",
    referenece: "SNBI",
    category: "Wildlife",
    commentary_page_id: "bridge-wildlife-pg1",
    commentary: `<p>Information on cliff swallows can be found in Part 9 of the INDOT BIM and in the INDOT Protected Species Guidance. Both documents are linked below.</p>`,
    example_comments: [["No swallows or nests were observed."], ["Swallows and/or nests were observed."]],
    rating_table: [
      {
        code: "N",
        condition: "NO",
        description: "No swallows or nests were observed.",
      },
      {
        code: "Y",
        condition: "YES",
        description: "Swallows and/or nests were observed.",
      },
    ],
  },

  // Bats
  {
    name: "Bats",
    item_id: "",
    format: "AN (1)",
    frequency: "EI",
    referenece: "SNBI",
    category: "Wildlife",
    commentary_page_id: "bridge-wildlife-pg4",
    commentary: `<p>Information on bats can be found in Part 9 of the INDOT BIM and in the INDOT Protected Species Guidance. Both documents are linked below.</p>
                <br />
                <p>
                  Bridge/structure inspections must be completed by qualified individuals. In order to become a qualified individual, the INDOT Bat Training must be completed.
                  Contact INDOT ESD to request access for completing the INDOT Bat Training.
                </p>`,
    example_comments: [
      ["No bats were seen or heard."],
      ["Bats and/or guano were observed."],
      ["Bats heard nesting at bridge or inside bridge components."],
    ],
    rating_table: [
      {
        code: "N",
        condition: "NO",
        description: "No bats were seen or heard.",
      },
      {
        code: "Y",
        condition: "YES",
        description: "Bats and/or guano were observed.",
      },
      {
        code: "H",
        condition: "HEARD",
        description: "Bats heard nesting at bridge or inside bridge components.",
      },
    ],
  },
];

// ::: -------------------------------------------------------- Build code descriptions here --------------------------------------------------------
const bridgeData = [
  {
    variable: "deck",
    category: "",
    values: [
      { code: "N", description: "Not Applicable" },
      { code: "9", description: "Excellent Condition" },
      { code: "8", description: "Very Good Condition" },
      { code: "7", description: "Good Condition" },
      { code: "6", description: "Satisfactory Condition" },
      { code: "5", description: "Fair Condition" },
      { code: "4", description: "Poor Condition" },
      { code: "3", description: "Serious Condition" },
      { code: "2", description: "Critical Condition" },
      { code: "1", description: "Imminent Failure" },
      { code: "0", description: "Failed" },
    ],
  },
  {
    variable: "superstructure",
    category: "",
    values: [
      { code: "N", description: "Not Applicable" },
      { code: "9", description: "Excellent Condition" },
      { code: "8", description: "Very Good Condition" },
      { code: "7", description: "Good Condition" },
      { code: "6", description: "Satisfactory Condition" },
      { code: "5", description: "Fair Condition" },
      { code: "4", description: "Poor Condition" },
      { code: "3", description: "Serious Condition" },
      { code: "2", description: "Critical Condition" },
      { code: "1", description: "Imminent Failure" },
      { code: "0", description: "Failed" },
    ],
  },
  {
    variable: "substructure",
    category: "",
    values: [
      { code: "N", description: "Not Applicable" },
      { code: "9", description: "Excellent Condition" },
      { code: "8", description: "Very Good Condition" },
      { code: "7", description: "Good Condition" },
      { code: "6", description: "Satisfactory Condition" },
      { code: "5", description: "Fair Condition" },
      { code: "4", description: "Poor Condition" },
      { code: "3", description: "Serious Condition" },
      { code: "2", description: "Critical Condition" },
      { code: "1", description: "Imminent Failure" },
      { code: "0", description: "Failed" },
    ],
  },
  {
    variable: "culvert",
    category: "",
    values: [
      { code: "N", description: "Not Applicable" },
      { code: "9", description: "Excellent Condition" },
      { code: "8", description: "Very Good Condition" },
      { code: "7", description: "Good Condition" },
      { code: "6", description: "Satisfactory Condition" },
      { code: "5", description: "Fair Condition" },
      { code: "4", description: "Poor Condition" },
      { code: "3", description: "Serious Condition" },
      { code: "2", description: "Critical Condition" },
      { code: "1", description: "Imminent Failure" },
      { code: "0", description: "Failed" },
    ],
  },
  {
    variable: "lowestValue",
    category: "",
    values: [
      { code: "9", description: "Excellent Condition" },
      { code: "8", description: "Very Good Condition" },
      { code: "7", description: "Good Condition" },
      { code: "6", description: "Satisfactory Condition" },
      { code: "5", description: "Fair Condition" },
      { code: "4", description: "Poor Condition" },
      { code: "3", description: "Serious Condition" },
      { code: "2", description: "Critical Condition" },
      { code: "1", description: "Imminent Failure" },
      { code: "0", description: "Failed" },
    ],
  },
  {
    variable: "postedValue",
    category: "NBI 041: Structure Open, Posted, or Closed to Traffic",
    values: [
      { code: "R", description: "Posted For Other Load-Capacity Restriction" },
      { code: "P", description: "Posted For Load" },
      { code: "K", description: "Closed" },
      { code: "G", description: "New Bridge, Not Open Yet" },
      { code: "E", description: "Open, Temporary Structure" },
      { code: "D", description: "Open, Temporary Shoring" },
      { code: "B", description: "Open, Posting Required" },
      { code: "A", description: "Open" },
    ],
  },
  {
    variable: "",
    category: "Scour Analysis Status",
    values: [
      { code: "N/A", description: "Bridge not over water" },
      { code: "1", description: "Scour Analysis on file" },
      { code: "2", description: "Scour POA on file" },
      { code: "3", description: "Scour Analysis is NOT on file, bridge should have been designed for scour" },
      { code: "4", description: "Scour Analysis is not on file, scour analysis being performed in house" },
      { code: "5", description: "Scour Analysis not on file, scour analysis needed" },
      { code: "6", description: "Scour Analysis not needed. Structure type is not susceptible to scour" },
      { code: "7", description: "Bridge programmed to be rehabbed or replaced" },
    ],
  },
  {
    variable: "",
    category: "Scour Analysis Determination",
    values: [
      { code: "N/A", description: "Bridge Not Over Water" },
      { code: "1", description: "Scour Analysis complete, bridge is NOT hydraulically scour critical by analysis" },
      { code: "2", description: "Scour Analysis complete, bridge IS hydraulically scour critical by analysis" },
      { code: "3", description: "Scour Assessment on file" },
    ],
  },
  {
    variable: "",
    category: "Scour Critical Safety Status",
    values: [
      { code: "N/A", description: "Bridge not over water" },
      { code: "1", description: "Bridge is NOT scour Critical based on analysis findings" },
      { code: "2", description: "Bridge IS scour critical based on analysis findings, Scour POA or Countermeasures REQUIRED" },
      { code: "3", description: "Bridge IS scour critical based on analysis findings and Scour POA is ON FILE" },
      { code: "4", description: "Bridge IS scour critical based on analysis findings and Countermeasures are installed and FIELD VERIFIED" },
    ],
  },
  {
    variable: "",
    category: "MAD Joint Type",
    values: [
      { code: "A", description: "BS" },
      { code: "B", description: "SS" },
      { code: "C", description: "Tooth (Finger)" },
      { code: "F", description: "Sliding Steel Plate" },
      { code: "G", description: "Armor (Two Steel Angles)" },
      { code: "H", description: "1A (At Hinges Only)" },
      { code: "I", description: "Modular" },
      { code: "J", description: "Open" },
      { code: "L", description: "Unknown (Covered With Bituminous)" },
      { code: "M", description: "Other types" },
      { code: "N", description: "No Joints" },
      { code: "O", description: "XJS" },
      { code: "P", description: "Poured Silicone (Narrow Width)" },
      { code: "Q", description: "Polymer Modified Asphalt Expansion" },
    ],
  },
  {
    variable: "deckStructureType",
    category: "NBI 107: Deck Structure Type",
    values: [
      { code: "N", description: "Not Applicable" },
      { code: "1", description: "Concrete Cast-In-Place" },
      { code: "2", description: "Concrete Precast Panels" },
      { code: "3", description: "Open Grating" },
      { code: "5", description: "Steel Plate (Includes Orthotropic)" },
      { code: "6", description: "Corrugated Steel" },
      { code: "8", description: "Wood Or Timber" },
      { code: "9", description: "Other" },
    ],
  },
  {
    variable: "deckProtectionType",
    category: "NBI 108C: Deck Protection",
    values: [
      { code: "N", description: "NA" },
      { code: "0", description: "None" },
      { code: "1", description: "Epoxy Coated Reinforcing" },
      { code: "2", description: "Galvanized Reinforcing" },
      { code: "4", description: "Cathodic Protection" },
      { code: "8", description: "Unknown" },
      { code: "9", description: "Other" },
    ],
  },
  {
    variable: "wearingSurfaceType",
    category: "NBI 108A: Type of Wearing Surface",
    values: [
      { code: "N", description: "Not Applicable" },
      { code: "9", description: "Other" },
      { code: "8", description: "Gravel" },
      { code: "7", description: "Wood Or Timber" },
      { code: "6", description: "Bituminous" },
      { code: "5", description: "Epoxy Overlay" },
      { code: "3", description: "Latex Concrete Or Similar Additive" },
      { code: "2", description: "Integral Concrete" },
      { code: "1", description: "Monolithic Concrete" },
      { code: "0", description: "None" },
    ],
  },
  {
    variable: "deckMembraneType",
    category: "NBI 108B: Type of Membrane",
    values: [
      { code: "N", description: "Not Applicable" },
      { code: "9", description: "Other" },
      { code: "8", description: "Unknown" },
      { code: "3", description: "Epoxy" },
      { code: "2", description: "Preformed Fabric" },
      { code: "1", description: "Built-Up" },
      { code: "0", description: "None" },
    ],
  },
  {
    variable: "highwaySystem",
    category: "NBI 104: Highway System-Inv Route",
    values: [
      // { code: "0", description: "Structure/Route is NOT on NHS" },
      // { code: "1", description: "Structure/Route is on NHS" },
      { code: "0", description: "Not Element" },
      { code: "1", description: "Element" },
    ],
  },
  {
    variable: "mainMatType",
    category: "NBI 043A: Structure Type, Main: Kind of Material/Design",
    values: [
      { code: "9", description: "Aluminum, Wrought Iron Or Cast Iron" },
      { code: "8", description: "Masonry" },
      { code: "7", description: "Wood Or Timber" },
      { code: "6", description: "Prestressed Concrete Continuous" },
      { code: "5", description: "Prestressed Concrete" },
      { code: "4", description: "Steel Continuous" },
      { code: "3", description: "Steel" },
      { code: "2", description: "Concrete Continuous" },
      { code: "1", description: "Concrete" },
      { code: "0", description: "Other" },
    ],
  },
  {
    variable: "mainDesignType",
    category: "NBI 043B: Structure Type, Main: Type of Design/Construction",
    values: [
      { code: "00", description: "Other" },
      { code: "01", description: "Slab" },
      { code: "02", description: "Stringer/Multi-Beam Or Girder" },
      { code: "03", description: "Girder And Floorbeam System" },
      { code: "04", description: "Tee Beam" },
      { code: "05", description: "Box Beam Or Girders - Multiple" },
      { code: "06", description: "Box Beam Or Girders - Single Or Spread" },
      { code: "07", description: "Frame (Except Frame Culverts)" },
      { code: "10", description: "Truss - Thru" },
      { code: "11", description: "Arch - Deck" },
      { code: "12", description: "Arch - Thru" },
      { code: "14", description: "Stayed Girder" },
      { code: "16", description: "Movable - Bascule" },
      { code: "19", description: "Culvert (Includes Frame Culverts)" },
      { code: "20", description: "Mixed Types" },
      { code: "21", description: "Segmental Box Girder" },
      { code: "22", description: "Channel Beam" },
    ],
  },
  {
    variable: "approachMatType",
    category: "NBI 043A: Structure Type, Main: Kind of Material/Design",
    values: [
      { code: "9", description: "Aluminum, Wrought Iron Or Cast Iron" },
      { code: "8", description: "Masonry" },
      { code: "7", description: "Wood Or Timber" },
      { code: "6", description: "Prestressed Concrete Continuous" },
      { code: "5", description: "Prestressed Concrete" },
      { code: "4", description: "Steel Continuous" },
      { code: "3", description: "Steel" },
      { code: "2", description: "Concrete Continuous" },
      { code: "1", description: "Concrete" },
      { code: "0", description: "Other" },
    ],
  },
  {
    variable: "approachDesignType",
    category: "NBI 043B: Structure Type, Main: Type of Design/Construction",
    values: [
      { code: "00", description: "Other" },
      { code: "01", description: "Slab" },
      { code: "02", description: "Stringer/Multi-Beam Or Girder" },
      { code: "03", description: "Girder And Floorbeam System" },
      { code: "04", description: "Tee Beam" },
      { code: "05", description: "Box Beam Or Girders - Multiple" },
      { code: "06", description: "Box Beam Or Girders - Single Or Spread" },
      { code: "07", description: "Frame (Except Frame Culverts)" },
      { code: "10", description: "Truss - Thru" },
      { code: "11", description: "Arch - Deck" },
      { code: "12", description: "Arch - Thru" },
      { code: "14", description: "Stayed Girder" },
      { code: "16", description: "Movable - Bascule" },
      { code: "19", description: "Culvert (Includes Frame Culverts)" },
      { code: "20", description: "Mixed Types" },
      { code: "21", description: "Segmental Box Girder" },
      { code: "22", description: "Channel Beam" },
    ],
  },
  {
    variable: "highwayAgencyDistrict",
    category: "(2) Highway Agency District:",
    values: [
      { code: "1", description: "Crawfordsville" },
      { code: "2", description: "Fort Wayne" },
      { code: "3", description: "Greenfield" },
      { code: "4", description: "La Porte" },
      { code: "5", description: "Seymour" },
      { code: "6", description: "Vincennes" },
      { code: "7", description: "Toll" },
    ],
  },
  {
    variable: "scourVulnerability",
    category: "(B.AP.03) Scour Vulnerability",
    values: [
      { code: "0", description: "Not Complete" },
      { code: "A", description: "Stable" },
      { code: "B", description: "Countermeasures" },
      { code: "C", description: "Temporary Countermeasures - Unstable" },
      { code: "D", description: "Unstable" },
      { code: "E", description: "Not Complete - Temporary Countermeasures" },
      { code: "U", description: "Unknown" },
      { code: "AB-T", description: "Stable or Countermeasures" },
      { code: "BCE-T", description: "Countermeasure Dependent" },
      { code: "CD-T", description: "Temporary Countermeasures or Unstable" },
    ],
  },
  {
    variable: "scourCritical",
    category: "(B.AP.03) Scour Vulnerability",
    values: [
      { code: "0", description: "Undetermined" },
      { code: "A", description: "No" },
      { code: "B", description: "No" },
      { code: "C", description: "Yes" },
      { code: "D", description: "Yes" },
      { code: "E", description: "Undetermined" },
      { code: "U", description: "Undetermined" },
      { code: "AB-T", description: "No" },
      { code: "BCE-T", description: "Undetermined" },
      { code: "CD-T", description: "Yes" },
    ],
  },
  {
    variable: "countyCode",
    category: "(3) County Code:",
    values: [
      { code: "01", description: "Adams" },
      { code: "02", description: "Allen" },
      { code: "03", description: "Bartholomew" },
      { code: "04", description: "Benton" },
      { code: "05", description: "Blackford" },
      { code: "06", description: "Boone" },
      { code: "07", description: "Brown" },
      { code: "08", description: "Carroll" },
      { code: "09", description: "Cass" },
      { code: "10", description: "Clark" },
      { code: "11", description: "Clay" },
      { code: "12", description: "Clinton" },
      { code: "13", description: "Crawford" },
      { code: "14", description: "Daviess" },
      { code: "15", description: "Dearborn" },
      { code: "16", description: "Decatur" },
      { code: "17", description: "Dekalb" },
      { code: "18", description: "Delaware" },
      { code: "19", description: "Dubois" },
      { code: "20", description: "Elkhart" },
      { code: "21", description: "Fayette" },
      { code: "22", description: "Floyd" },
      { code: "23", description: "Fountain" },
      { code: "24", description: "Franklin" },
      { code: "25", description: "Fulton" },
      { code: "26", description: "Gibson" },
      { code: "27", description: "Grant" },
      { code: "28", description: "Greene" },
      { code: "29", description: "Hamilton" },
      { code: "30", description: "Hancock" },
      { code: "31", description: "Harrison" },
      { code: "32", description: "Hendricks" },
      { code: "33", description: "Henry" },
      { code: "34", description: "Howard" },
      { code: "35", description: "Huntington" },
      { code: "36", description: "Jackson" },
      { code: "37", description: "Jasper" },
      { code: "38", description: "Jay" },
      { code: "39", description: "Jefferson" },
      { code: "40", description: "Jennings" },
      { code: "41", description: "Johnson" },
      { code: "42", description: "Knox" },
      { code: "43", description: "Kosciusko" },
      { code: "44", description: "LaGrange" },
      { code: "45", description: "Lake" },
      { code: "46", description: "LaPorte" },
      { code: "47", description: "Lawrence" },
      { code: "48", description: "Madison" },
      { code: "49", description: "Marion" },
      { code: "50", description: "Marshall" },
      { code: "51", description: "Martin" },
      { code: "52", description: "Miami" },
      { code: "53", description: "Monroe" },
      { code: "54", description: "Montgomery" },
      { code: "55", description: "Morgan" },
      { code: "56", description: "Newton" },
      { code: "57", description: "Noble" },
      { code: "58", description: "Ohio" },
      { code: "59", description: "Orange" },
      { code: "60", description: "Owen" },
      { code: "61", description: "Parke" },
      { code: "62", description: "Perry" },
      { code: "63", description: "Pike" },
      { code: "64", description: "Porter" },
      { code: "65", description: "Posey" },
      { code: "66", description: "Pulaski" },
      { code: "67", description: "Putnam" },
      { code: "68", description: "Randolph" },
      { code: "69", description: "Ripley" },
      { code: "70", description: "Rush" },
      { code: "71", description: "St. Joseph" },
      { code: "72", description: "Scott" },
      { code: "73", description: "Shelby" },
      { code: "74", description: "Spencer" },
      { code: "75", description: "Starke" },
      { code: "76", description: "Steuben" },
      { code: "77", description: "Sullivan" },
      { code: "78", description: "Switzerland" },
      { code: "79", description: "Tippecanoe" },
      { code: "80", description: "Tipton" },
      { code: "81", description: "Union" },
      { code: "82", description: "Vanderburgh" },
      { code: "83", description: "Vermillion" },
      { code: "84", description: "Vigo" },
      { code: "85", description: "Wabash" },
      { code: "86", description: "Warren" },
      { code: "87", description: "Warrick" },
      { code: "88", description: "Washington" },
      { code: "89", description: "Wayne" },
      { code: "90", description: "Wells" },
      { code: "91", description: "White" },
      { code: "92", description: "Whitley" },
    ],
  },
];
