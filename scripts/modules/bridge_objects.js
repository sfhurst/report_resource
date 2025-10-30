const bridgeComponents = [
  // Alignment
  {
    name: "Approach Roadway Alignment",
    item_id: "B.AP.01",
    format: "AN (1)",
    frequency: "EI",
    reference: "SNBI",
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
      [
        // General
        ["No speed reduction is necessary."],
        ["No speed reduction is necessary; the speed at the bridge is the same as the rest of the highway segment."],
      ],
      [
        // Signs
        ["There is no signage indicating a speed reduction for the segment."],
        [
          "There are advisory speed signs recommending a speed reduction for curves in the approach alignment.",
          "Advisory speed signs recommend reduced speeds for curves in the approach alignment.",
          "Advisory speed signs suggest reduced speeds for approach alignment curves.",
        ],
        ["There are horizontal alignment signs marking curves in the approach alignment.", "Horizontal alignment signs are present for curves in the approach alignment."],
      ],
      [
        // Horizontal curve
        ["The bridge is in a horizontal curve."],
        ["The bridge is in a horizontal curve that is supperelvated on the north side.", "The bridge is supperelevated on the north side"],
        ["The bridge is in a horizontal curve that is supperelvated on the south side.", "The bridge is supperelevated on the south side"],
        ["The bridge is in a horizontal curve that is supperelvated on the east side.", "The bridge is supperelevated on the east side"],
        ["The bridge is in a horizontal curve that is supperelvated on the west side.", "The bridge is supperelevated on the west side"],
        ["The bridge is in a superelevated horizontal curve."],
      ],
      [
        // Vertical curve
        ["The bridge is in a sag vertical curve.", "The bridge is located within a sag vertical curve."],
        ["The bridge is in a crest vertical curve.", "The bridge is located within a crest vertical curve."],
      ],
      [
        // Railroad
        [
          "The bridge carries a railroad; INDOT personnel may access the railroad right-of-way based on rule IC 8-3-15-3 (d)(8).",
          "The bridge is a railroad owned and maintained structure; INDOT personnel may access the railroad right-of-way based on rule IC 8-3-15-3 (d)(8).",
        ],
        [
          "The bridge is over a railroad; INDOT personnel may access the railroad right-of-way based on rule IC 8-3-15-3 (d)(8).",
          "The bridge crosses a railroad; INDOT personnel may access the railroad right-of-way based on rule IC 8-3-15-3 (d)(8).",
          "The bridge spans a railroad; INDOT personnel may access the railroad right-of-way based on rule IC 8-3-15-3 (d)(8).",
        ],
      ],
      [
        // Summary railroad inspection
        [
          "This railroad-owned structure is inspected and maintained by other agencies under the guidance of the Federal Railroad Administration. INDOT is not responsible for its inspection or maintenance, and its condition is not documented in this report. A safety inspection was performed to assess conditions affecting the roadway below, and no obvious hazards were found.",
          "This railroad-owned structure is inspected and maintained by other agencies under the guidance of the Federal Railroad Administration. INDOT is not responsible for its inspection or maintenance, and its condition is not documented in this report. A safety inspection was performed to assess conditions affecting the roadway below; no obvious hazards were found.",
        ],
      ],
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
  },

  //Approach
  {
    name: "Approach Slabs",
    item_id: "B.C.01b",
    format: "AN (1)",
    frequency: "EI",
    reference: "SNBI",
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
      [
        // No problems
        ["There are no deficiencies or significant defects present."],
      ],
      [
        // Partial
        ["The bridge has partial approach slabs that support only the travel lanes; the shoulders have no slab and are slightly lower than the travel lanes."],
      ],
      [
        // Overlay
        ["The approach slabs have been covered with an overlay."],
      ],
      [
        // Settlement
        ["Minor settlement is present at the approach slabs, which have been covered with an overlay to protect ride quality."],
        ["No significant settlement has occurred.", "No noticeable settlement is present.", "The approach slabs show no noticeable settlement."],
        ["There is minor settlement of the approach slabs.", "Some minor settlement is present at the approach slabs."],
      ],
      [
        // Complete
        ["The approach slabs provide a smooth transition from the approach roadway to the bridge. No significant settlement has occurred."],
        ["The approach slabs provide a smooth transition from the approach roadway to the bridge. No noticeable settlement is present."],
        ["Ride quality is generally smooth with no obvious impact. No noticeable settlement is present."],
        ["Ride quality is generally smooth with no obvious impact. No significant settlement has occurred."],
      ],
      [
        // Cracking
        ["The approach slabs have some insignificant cracking.", "Only inherent cracking is present in the approach slabs."],
        ["There are some minor cracks in the approach slabs.", "Some minor cracking is present in the approach slabs."],
      ],
      [
        // Patching
        ["There are some sound concrete patches in the approach slabs.", "Some sound concrete patching is present in the approach slabs."],
      ],
      [
        // Spalling
        ["There are some shallow-depth spalls in the approach slabs.", "The approach slabs have some shallow-depth spalling.", "Some shallow-depth spalling is present in the approach slabs. "],
        ["There are some minor spalls in the approach slabs.", "The approach slabs have some minor spalling.", "Some minor spalling is present in the approach slabs. "],
      ],
      [
        // Ride quality
        ["Ride quality is generally smooth with no obvious impact.", "The approach slabs provide a smooth transition from the approach roadway to the bridge."],
        ["There is some impact to ride quality.", "Ride quality is somewhat impacted.", "The approach slabs create a rough transition to the bridge."],
      ],
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
  },

  // Terminal
  {
    name: "Terminal Joints",
    item_id: "B.C.08a",
    format: "AN (1)",
    frequency: "EI",
    reference: "SNBI",
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
      [
        //
        ["The terminal joints are in good condition."],
      ],
      [
        //
        ["The joints provide a smooth transition."],
      ],
      [
        //
        ["The bridge has HMA terminal joints."],
      ],
      [
        //
        ["The bridge has compression seal (BS) terminal joints."],
      ],
      [
        //
        ["The bridge has integral abutments but no designed terminal joints; the construction joints at the end of the approach slabs are not designed for thermal expansion."],
        ["The bridge has semi-integral abutments but no designed terminal joints; the construction joints at the end of the approach slabs are not designed for thermal expansion."],
      ],
      [
        //
        ["The west construction joint is slightly raised due to thermal expansion and compression from the approach slab, creating a slight unevenness in the roadway."],
      ],
      [
        //
        ["The terminal joints present a rough transition to the bridge."],
      ],
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
    reference: "SNBI",
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
      [
        // No problems
        ["There are no deficiencies or significant defects present."],
      ],
      [
        // Functioning
        ["The expansion joints are functioning as designed.", "The joints are functioning as designed."],
      ],
      [
        // No joints
        ["The bridge has integral abutments and does not have expansion joints."],
        ["The bridge has semi-integral abutments and does not have expansion joints."],
        ["The bridge has integral or semi-integral abutments and does not have expansion joints."],
        ["The bridge does not have expansion joints."],
      ],
      [
        // Debris
        ["The expansion joints are partially full of debris.", "The joints are partially full of debris."],
        ["The expansion joints are full of debris, which may impact their functionality.", "The joints are full of debris, which may impact their functionality."],
      ],
      [
        // Leaking
        ["There is some minor leaking in the expansion joints.", "There is some minor leaking in the joints."],
        ["The expansion joints have localized areas of moderate leaking.", "The joints have localized areas of moderate leaking."],
        ["The expansion joints have some moderate punctures and widespread leaking.", "The joints have some moderate punctures and widespread leaking."],
      ],
      [
        // Adhesion
        ["The expansion joints have multiple areas that have lost adhesion.", "The joints have multiple areas that have lost adhesion."],
        ["There is some adhesion loss in the expansion joints.", "There is some adhesion loss in the joints."],
        ["There is a widespread loss of adhesion in the expansion joints.", "There is a widespread loss of adhesion in the joints."],
      ],
      [
        // Repairs and General Defects
        ["There are areas of the expansion joints that have been repaired with pourable material.", "There are areas of the joints that have been repaired with pourable material."],
        ["There is patching along the expansion joints.", "There is patching along the joints."],
        ["There is some minor chipping along the expansion joint nosing.", "There is some minor chipping along the joint nosing."],
      ],
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
  },

  // Railings
  {
    name: "Bridge Railings",
    item_id: "B.C.05",
    format: "AN (1)",
    frequency: "EI",
    reference: "SNBI",
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
      [
        //
        ["There are no deficiencies or significant defects present."],
      ],
      [
        //
        ["The railings are functioning as designed and appear capable of redirecting errant vehicles."],
      ],
      [
        //
        ["There is an isolated area of collision damage."],
      ],
      [
        //
        ["Some minor deformations are present in the aluminum railing."],
      ],
      [
        //
        ["There is some minor corrosion in the steel railings.", "Some minor corrosion is present in the steel railings."],
      ],
      [
        //
        ["There are widely spaced hairline vertical cracks in the concrete bridge railings.", "Some minor cracking is present in the concrete bridge railings."],
      ],
      [
        //
        ["There are intermittently spaced hairline vertical cracks with efflorescence in the concrete bridge railings."],
      ],
      [
        //
        ["There is horizontal cracking in the concrete bridge railings."],
      ],
      [
        //
        ["The steel railings are anchored into the exterior box beams."],
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

  // Transitions

  {
    name: "Bridge Railing Transitions",
    item_id: "B.C.06",
    format: "AN (1)",
    frequency: "EI",
    reference: "SNBI",
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
      [
        //
        ["There are no deficiencies or significant defects present."],
      ],
      [
        //
        ["The bridge railing transitions are functioning as designed."],
      ],
      [
        //
        ["The bridge railing transitions are functioning as designed and align properly with the bridge and approach railings."],
      ],
      [
        //
        ["There is some collision damage in the railing at the transition."],
      ],
      [
        //
        ["There is no transition between the bridge railings and the approach railings. These railings are the same type."],
      ],
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
    reference: "SNBI",
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
      [
        // General
        ["There are no deficiencies or significant defects present."],
        ["There are no deficiencies or significant defects present; ride quality is good and the deck is protected from water and mineral intrusion."],
      ],
      [
        // Type
        ["The wearing surface is monolithic with the deck. See the deck comments."],
        ["The bridge has a thin deck epoxy overlay."],
        ["The bridge has a latex-modified overlay."],
      ],
      [
        // Cracking
        ["There are partially sealed cracks in the wearing surface."],
        ["Some partially sealed cracks are present in the wearing surface."],
        ["There are unsealed cracks visible across less than 10% of the total surface area."],
      ],
      [
        // Peeling
        ["There are isolated areas of minor peeling in the epoxy overlay.", "Isolated areas of minor peeling are present in the overlay."],
        ["There are some areas of peeling in less than 5% of the total surface area."],
      ],
      [
        // Patching
        [
          "There are some bituminous and concrete patches present; the patches are in good condition.",
          "The wearing surface has some bituminous and concrete patching; the patches are in good condition.",
        ],
        [
          "There are widespread bituminous and concrete patches present; the patches are in various states of deterioration but are generally in good condition.",
          "The wearing surface has widespread bituminous and concrete patching; the patches are in various states of deterioration but are generally in good condition.",
        ],
        [
          "There are some bituminous and concrete patches present; the patches are in various states of deterioration but are generally in poor condition.",
          "The wearing surface has some bituminous and concrete patching; the patches are in various states of deterioration but are generally in poor condition.",
        ],
        [
          "There are widespread bituminous and concrete patches present; the patches are in various states of deterioration but are generally in poor condition.",
          "The wearing surface has widespread bituminous and concrete patching; the patches are in various states of deterioration but are generally in poor condition.",
        ],
      ],
      [
        // Rideability
        ["Ride quality is somewhat diminished."],
        ["Ride quality remains good."],
      ],
      [
        // Membrane & Bituminous
        ["The concrete bridge deck has a bituminous wearing surface and is not protected by an agency-approved membrane; therefore, the wearing surface rating must be a 4 or less."],
        ["The bridge has a bituminous wearing surface with an agency-approved membrane."],
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
    reference: "SNBI",
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
      [
        // General
        ["There are no deficiencies or significant defects present."],
        ["There are no deficiencies or significant defects present; the deck shows no indication of water infiltration."],
      ],
      [
        // Top concealment
        ["The top of the deck is covered by an epoxy overlay."],
        ["The top of the deck is covered by an epoxy overlay; no defects are showing through the overlay."],
        ["The top of the deck is covered by a latex modified overlay."],
        ["The top of the deck is covered by a bituminous wearing surface."],
      ],
      [
        // Top Cracking
        ["There is some minor longitudinal cracking in the top of the deck."],
        ["There is some minor transverse cracking in the top of the deck."],
        ["There is some moderate longitudinal cracking in the top of the deck."],
        ["There is some moderate transverse cracking in the top of the deck."],
        ["There are some areas of pattern cracking in the top of the deck."],
        ["There is widespread pattern cracking in the top of the deck."],
      ],
      [
        // Spalling
        ["There is isolated shallow-depth spalling in the top of the deck.", "The top of the deck has isolated shallow-depth spalling."],
        ["There are some shallow-depth spalls in the top of the deck.", "The top of the deck has some shallow-depth spalling."],
        [
          "There are some minor spalls in the top of the deck; a yellow deficiency was submitted for deck patching.",
          "The top of the deck has some minor spalling; a yellow deficiency was submitted for deck patching.",
        ],
        ["There are widespread patches and shallow-depth spalls in the top of the deck.", "The top of the deck has widespread patching and shallow-depth spalling."],
      ],
      [
        // Underside concealment
        ["The deck underside is concealed by stay-in-place forms and the copings are protected from runoff by concrete bridge railings."],
        [
          "The deck underside is concealed by stay-in-place forms and the copings are protected from runoff by concrete bridge railings; no corrosion was found in the stay-in-place forms and the copings are in good condition.",
        ],
        ["The deck underside is concealed by stay-in-place forms and the copings are protected from runoff by concrete bridge railings; some corrosion was found in the stay-in-place forms."],
      ],
      [
        // Underside Cracking
        ["There is some minor transverse cracking with efflorescence in the underside of the deck."],
        ["There is some moderate transverse cracking with efflorescence in the underside of the deck."],
        ["There are some areas of pattern cracking with rust staining and efflorescence in the underside of the deck; no spalling is present."],
        ["There are some areas of pattern cracking with rust staining and efflorescence in the underside of the deck."],
      ],
      [
        // Coping spalls in slab
        [
          "The copings are exposed to runoff beneath the metal guardrails. There is heavy spalling with multiple layers of exposed rebar exhibiting moderate section loss along the north coping in all spans.",
          "The copings are exposed to runoff beneath the metal guardrails. Widespread spalling with exposed rebar exhibiting moderate section loss is present along the north coping in all spans.",
        ],
        [
          "The copings are exposed to runoff beneath the metal guardrails. There is heavy spalling with multiple layers of exposed rebar exhibiting moderate section loss along the south coping in all spans.",
          "The copings are exposed to runoff beneath the metal guardrails. Widespread spalling with exposed rebar exhibiting moderate section loss is present along the south coping in all spans.",
        ],
        [
          "The copings are exposed to runoff beneath the metal guardrails. There is heavy spalling with multiple layers of exposed rebar exhibiting moderate section loss along the east coping in all spans.",
          "The copings are exposed to runoff beneath the metal guardrails. Widespread spalling with exposed rebar exhibiting moderate section loss is present along the east coping in all spans.",
        ],
        [
          "The copings are exposed to runoff beneath the metal guardrails. There is heavy spalling with multiple layers of exposed rebar exhibiting moderate section loss along the west coping in all spans.",
          "The copings are exposed to runoff beneath the metal guardrails. Widespread spalling with exposed rebar exhibiting moderate section loss is present along the west coping in all spans.",
        ],
        ["There are moderate spalls with delamination and exposed rebar around the deck drains.", "Some moderate spalling with delamination and exposed rebar is present around the deck drains."],
      ],
      [
        // Water
        ["There is no evidence of water contacting or moving through the deck."],
        ["Water is penetrating the deck and corrosion has initiated in the reinforcing steel."],
        [
          // Box Beams
          "There is efflorescence between the box beams, indicating water moving through the deck.",
          "Some efflorescence is showing between the box beams, indicating water moving through the deck.",
        ],
      ],
      [
        // End Notes
        ["Strength and performance are not affected."],
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

  // Super
  {
    name: "Superstructure",
    item_id: "B.C.02",
    format: "AN (1)",
    frequency: "EI",
    reference: "SNBI",
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
      [
        // General
        ["There are no deficiencies or significant defects present."],
        ["There are no deficiencies or significant defects present. There is no obvious deformation or structural instability."],
        ["There are no deficiencies or significant defects present; the superstructure appears stable with no signs of structural distress."],
      ],
      [
        // Slab (defer to deck)
        ["The superstructure is a reinforced concrete slab. See the deck comments."],
      ],
      [
        // Painted
        ["The steel beams are painted; there are no defects in the protective coating."],
        ["The steel beams are painted; there are some areas where corrosion has initiated."],
      ],
      [
        // Pitting, no corrosion (used to justify a 7)
        ["There are some painted over areas of minor pitting in the lower flanges of the steel beams; there is no active corrosion present."],
        ["Some painted over pitting is present in the lower flanges of the steel beams; no active corrosion is present."],
        ["The lower flanges of the steel beams have some areas of painted over pitting; there is no active corrosion present."],
      ],
      [
        // Steel beam end deterioration
        ["There is heavy corrosion and rust scale in the beam ends at the abutments under the joints; there is minor to moderate section loss, but no perforations or holes are present."],
        ["Some heavy corrosion and rust scaling is present in the beam ends at the abutments under the joints; there is minor to moderate section loss, but no perforations or holes are present."],
        ["The ends of the beams at the abutments have moderate corrosion and rust scaling; there is minor to moderate section loss, but no perforations or holes are present."],
      ],
      [
        // Concrete beam end deterioration
        ["There is minor cracking and delamination in the beam ends at the abutments beneath the joints; there is no loss of bearing."],
        ["Some minor cracking and delamination is present in the beam ends at the abutments beneath the joints; there is no loss of bearing."],
      ],
      [
        // Concrete shear failure
        ["There is a moderate diagonal crack running up toward the center of the beam (indicating shear failure)."],
      ],
      [
        // End note
        ["Strength and performance are not affected."],
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

  // Paint
  {
    name: "Paint",
    item_id: "B.C.02a",
    format: "AN (1)",
    frequency: "EI",
    reference: "SNBI",
    category: "Super",
    commentary_page_id: "bridge-super-pg4",
    example_comments_page_id: "bridge-super-pg6",
    commentary: `<p>Consider surface dulling, chalking, rust and peeling when evaluating the condition rating.</p>
                <br />
                <p>At stages of advanced deterioration, consider any section loss in the painted material.</p>`,
    example_comments: [
      [
        // General
        ["There are no deficiencies or significant defects present."],
      ],
      [
        // Beam protection
        ["The steel beams of the superstructure have a protective coating.", "The steel beams are painted."],
        ["The bridge beams are weathering steel; the ends of the beams have a protective coating.", "The ends of the beams are painted."],
        ["The bridge piles for the interior piers have a protective coating.", "The piles are painted."],
      ],
      [
        // Corrosion
        ["There are some areas where surface corrosion has initiated."],
        ["Some areas of minor corrosion are present in the protective coating."],
        ["There are some areas where the protective coating is no longer effective, and corrosion has initiated."],
      ],
      [
        // Chaulking
        ["There is minor chalking and surface dulling throughout."],
        ["Widespread minor chalking and surface dulling is present in the protective coating."],
      ],
      [
        // Peeling
        ["There are some areas of light rust and minor peeling."],
        ["Some areas of light rust and minor peeling are present."],
      ],
      [
        // Bearings and beam ends
        ["There is moderate to heavy rust at the ends of the beams under the joints."],
        ["There is moderate to heavy corrosion in the bearings under the joints."],
      ],
      [
        // Worst case
        ["The protective coating is no longer effective."],
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
    reference: "SNBI",
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
      [
        // General
        ["There are no deficiencies or significant defects present."],
        ["There are no deficiencies or significant defects present; the bearings are adequately positioned beneath the bridge beams and fully supported by the substructure."],
      ],
      [
        // Elastomeric general
        ["The elastomeric bearings are adequately positioned beneath the bridge beams and fully supported by the substructure."],
      ],
      [
        // Steel general
        ["The steel bearings are adequately positioned beneath the bridge beams and fully supported by the substructure."],
      ],
      [
        // Corrosion
        ["There is minor corrosion in the bearings at the abutments.", "Some minor corrosion is present in the steel bearings at the abutments."],
        ["There is moderate corrosion in the bearings at the abutments.", "Some moderate corrosion is present in the steel bearings at the abutments."],
        ["There is heavy corrosion in the bearings at the abutments.", "Some heavy corrosion is present in the steel bearings at the abutments."],
        ["There is moderate pack rust and heavy corrosion in the bearings at the abutments.", "Some moderate pack rust and heavy corrosion is present in the steel bearings at the abutments."],
      ],
      [
        // Alignment and movement
        [
          "The steel rocker bearings are slightly misaligned, but still have freedom of movement.",
          "The steel rocker bearings have a slightly outward lean relative to the ambient temperature.",
          "The steel rocker bearings are leaning away from the center of the bridge in the expanded position; movement appears restricted with no room for expansion.",
          "The steel rocker bearings appear to be locked in place with no freedom of movement.",
        ],
      ],
      [
        // No bearings
        ["The bridge has integral abutments.", "The bridge has semi-integral abutments."],
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

  // Sub
  {
    name: "Substructure",
    item_id: "B.C.03",
    format: "AN (1)",
    frequency: "EI",
    reference: "SNBI",
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
      [
        // General
        ["There are no deficiencies or significant defects present."],
        ["There are no deficiencies or significant defects present; the substructure appears stable with no signs of settlement or movement."],
      ],
      [
        // Abutment Type
        ["The bridge has integral abutments.", "The bridge has semi-integral abutments."],
      ],
      [
        // Comments for a 7
        ["There is light abrasion in the interior piers at the waterline."],
        ["There is minor staining and insignificant surface defects on the interior piers and in the abutment backwalls."],
        ["Some minor staining and insignificant surface defects are present on the interior piers and in the abutment backwalls."],
      ],
      [
        // Cracks (Piers and Abutments)
        [
          "There is some minor vertical cracking in the interior piers and in the abutment backwalls.",
          "Some minor vertical cracking is present in the interior piers and abutment backwalls.",
          "Some minor vertical cracking is present in the interior piers and abutment backwalls: the cracking in the backwalls has some light efflorescence.",
        ],
        ["There is some minor vertical cracking in the interior piers.", "Some minor vertical cracking is present in the interior piers."],
        [
          "There is some minor vertical cracking in the abutment backwalls.",
          "Some minor vertical cracking is present in the abutment backwalls: the cracking in the backwalls has some light efflorescence.",
          "Some minor vertical cracking is present in the abutment backwalls.",
        ],
      ],
      [
        // Spalls (Piers and Abutments)
        [
          "There are some surface spalls with exposed reinforcing steel in the piers and abutments, typical of insufficient concrete cover.",
          "Some surface spalling with exposed reinforcing steel is present in the piers and abutments; typical of insufficient concrete cover.",
        ],
        [
          "There are some surface spalls with exposed reinforcing steel in the abutments, typical of insufficient concrete cover.",
          "Some surface spalling with exposed reinforcing steel is present in the abutments; typical of insufficient concrete cover.",
        ],
        [
          "There are some surface spalls with exposed reinforcing steel in the piers, typical of insufficient concrete cover.",
          "Some surface spalling with exposed reinforcing steel is present in the piers; typical of insufficient concrete cover.",
        ],
      ],
      [
        // Pier Caps and Columns
        [
          "There are some surface spalls with exposed reinforcing steel in the piers and abutments, typical of insufficient concrete cover.",
          "Some surface spalling with exposed reinforcing steel is present in the piers and abutments; typical of insufficient concrete cover.",
        ],
        [
          "There are some surface spalls with exposed reinforcing steel in the abutments, typical of insufficient concrete cover.",
          "Some surface spalling with exposed reinforcing steel is present in the abutments; typical of insufficient concrete cover.",
        ],
        [
          "There are some surface spalls with exposed reinforcing steel in the piers, typical of insufficient concrete cover.",
          "Some surface spalling with exposed reinforcing steel is present in the piers; typical of insufficient concrete cover.",
        ],
      ],
      [
        // Settlement
        ["There is a moderate horizontal crack (indicating settlement) running the length of the west abutment."],
        ["There is some minor differential settlement at the abutments."],
      ],
      [
        // Slope Erosion
        ["There is moderate erosion in the slope at the north abutment due to unchanneled drainage and excessive stormwater runoff."],
        ["There is moderate erosion in the slope at the south abutment due to unchanneled drainage and excessive stormwater runoff."],
        ["There is moderate erosion in the slope at the east abutment due to unchanneled drainage and excessive stormwater runoff."],
        ["There is moderate erosion in the slope at the west abutment due to unchanneled drainage and excessive stormwater runoff."],
      ],
      [
        // Scour
        ["There is minor scour at the upstream end of the piers in the channel."],
        ["There is moderate scour at the upstream end of the piers in the channel."],
      ],
      [
        // End notes
        ["Strength and performance are not affected."],
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

  // Slopewall
  {
    name: "Slopewall",
    item_id: "B.C.03a",
    format: "AN (1)",
    frequency: "EI",
    reference: "SNBI",
    category: "Sub",
    commentary_page_id: "bridge-sub-pg4",
    example_comments_page_id: "bridge-sub-pg6",
    commentary: `<p>
                  Consider settlement and cracking in the slopewall and any voids that may cause defects in the abutment or approach slab. Use any visible indicators to assess
                  the stability of the soil beneath the slopewall.
                </p>`,
    example_comments: [
      [
        //
        ["The slopewalls are in good condition."],
      ],
      [
        //
        ["There are some settlement cracks in the slopewalls."],
      ],
      [
        //
        ["The slopewalls appear to be stable with no signs of distress or movement."],
      ],
      [
        //
        ["The slopewalls are overgrown with vegetation, which may be hiding potential issues."],
      ],
      [
        //
        ["The structure has MSE walls."],
      ],
      [
        //
        ["There are no obvious structural defects in the MSE walls."],
      ],
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
    reference: "SNBI",
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
      [
        //
        ["There are no deficiencies or significant defects present."],
      ],
      [
        //
        ["Strength and performance are not affected."],
      ],
      [
        //
        ["There is minor leaking between the segments."],
      ],
      [
        //
        ["There are minor deformations to the pipe shape."],
      ],
      [
        //
        ["There is minor corrosion at the waterline."],
      ],
      [
        //
        ["There is some minor- to moderate-width cracking with efflorescence in the barrel."],
      ],
      [
        //
        ["There is cracking and efflorescence in the spandrel wall."],
      ],
      [
        //
        ["There is minor cracking with heavy efflorescence at the outer edge of the arch ring."],
      ],
      [
        //
        ["The spandrel walls are intact with no signs of backfill loss at the base."],
      ],
      // "There is complete section loss in the pipe invert on the north end for 20'.",
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

  // Channel
  {
    name: "Channel",
    item_id: "B.C.09",
    format: "AN (1)",
    frequency: "EI",
    reference: "SNBI",
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
      [
        // General
        ["There are no deficiencies or significant defects present."],
      ],
      [
        //
        ["The channel flows from north to south through Span B, and is generally well aligned."],
        ["The channel flows from south to north through Span B, and is generally well aligned."],
        ["The channel flows from east to west through Span B, and is generally well aligned."],
        ["The channel flows from west to east through Span B, and is generally well aligned."],
      ],
      [
        //
        ["When the channel is at normal pool, it is shallow enough to access on foot.", "When the channel is at normal pool, access is limited.", "The channel was dry at the time of inspection."],
      ],
      [
        //
        ["The interior piers are located near the channel banks and are frequently exposed to water when levels are at or near the ordinary high water mark."],
        ["The interior piers are set back from the channel and are not typically in the water."],
      ],
      [
        //
        ["There are localized areas of minor erosion in the banks."],
      ],
      [
        //
        [
          "The channel bed consists of exposed bedrock; this is a stable condition with a high resistance to erosion; the lack of sediment indicates that high flows are capable of transporting large stones and gravel.",
        ],
        [
          "The channel bed consists of well-graded stones, cobbles, and boulders; this is a stable condition, as the coarse material protects the bed from erosion; the composition indicates that high flows are strong enough to remove finer material but not to mobilize cobbles or boulders.",
        ],
        [
          "The channel bed consists of sand and pebbles; this is an unstable condition; these finer materials are easily displaced during high flows, which can result in channel degradation or lateral movement.",
        ],
        [
          "The channel bed consists of silt and clay; this is a stable condition typical of slow, low-velocity flow; the fine material indicates that flow velocities are consistently low enough to allow sediment deposition.",
        ],
      ],
      [
        //
        ["The channel condition does not threaten the roadway or the bridge."],
      ],
      [
        //
        ["Flow direction varies with rising and receding water levels."],
      ],
      [
        //
        ["Accumulated debris has caused localized flow obstruction in the channel."],
      ],
      [
        //
        ["The channel has some minor aggradation from a buildup of soft sediment."],
      ],
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
        description: "Major defects; bridge or approach roadway is seriously threatened. Condition typically necessitates more frequent monitoring, load restrictions, and/or corrective actions.",
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
  },

  // Channel Protection
  {
    name: "Channel Protection",
    item_id: "B.C.10",
    format: "AN (1)",
    frequency: "EI",
    reference: "SNBI",
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
      [
        //
        ["There are no deficiencies or significant defects present."],
      ],
      [
        ["Under normal conditions, none of the substructure components are in the channel."],
        ["The interior piers and abutments are above the ordinary high water mark, and are only in the water during periods of occasional flooding."],
      ],
      [
        //
        ["All channel protection measures appear to be functioning as designed."],
      ],
      [
        //
        ["The interior piers and abutments are protected with riprap."],
      ],
      [
        //
        ["The abutments are protected with riprap. The interior piers are in the channel and no channel protection is visible."],
      ],
      [
        //
        ["No channel protection is visible at the bridge.", "No riprap is visible at the interior piers or abutments. "],
      ],
      [
        //
        ["No channel protection is visible at the interior piers.", "No riprap is visible at the interior piers."],
      ],
      [
        //
        ["Some riprap has washed away leaving sections of bank unprotected."],
      ],
      [
        //
        ["The channel side of the interior piers is submerged and cannot be visually inspected; based on channel measurements no significant scour has occurred."],
      ],
      [
        //
        ["The channel protection is ineffective; a yellow maintenance deficiency was submitted for erosion control."],
      ],
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
        description: "Major defects; performance of channel protection is seriously affected. Condition typically necessitates more frequent monitoring or corrective actions.",
      },
      {
        code: "2",
        condition: "CRITICAL",
        description: "Major defects; channel protection is severely compromised. Condition typically necessitates more frequent monitoring or corrective actions.",
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
    reference: "SNBI",
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
      [
        //
        ["There is no scour present."],
      ],
      [
        //
        ["There is no significant scour present."],
      ],
      [
        //
        ["There is no visible scour at the bridge."],
      ],
      [
        //
        ["There is minor localized scour at the interior piers."],
      ],
      [
        //
        ["The designed countermeasures are in good condition."],
      ],
      [
        //
        ["There is moderate scour at the base of the upstream piers, but it does not appear to affect the stability of the structure."],
      ],
      [
        //
        ["Scour has exposed the top of the footing at Pier 2, but no undermining was found."],
      ],
      [
        //
        ["The structure is an underfill arch with low susceptibility to scour."],
      ],
      [
        //
        ["Not evaluated during this inspection."],
      ],
      [
        //
        ["Please review the scour POA."],
      ],
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
  },

  // Scour Vulnerability
  {
    name: "Scour Vulnerability",
    item_id: "B.AP.03",
    format: "AN (1)",
    frequency: "I",
    reference: "SNBI",
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
      [
        //
        ["The bridge is not scour critical."],
      ],
      [
        //
        ["The bridge is scour critical."],
      ],
      [
        //
        ["The designed countermeasures are in good condition."],
      ],
      [
        //
        ["The scour vulnerability status is undetermined."],
      ],
      [
        //
        ["The bridge is potentially vulnerable to scour; temporary countermeasures have been installed."],
      ],
      [
        //
        ["Scour conditions are not critical, but further monitoring is recommended."],
      ],
      [
        //
        ["The bridge is not currently at risk of instability due to scour."],
      ],
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
        description: "Scour appraisal completed. Bridge could become unstable for scour. Temporary (not designed) countermeasure installed to mitigate scour. Bridge is scour critical.",
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
    reference: "SNBI",
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
      [
        //
        ["There is nothing to indicate overtopping has ever occurred."],
      ],
      [
        //
        ["Based on the surrounding terrain, overtopping is unlikely."],
      ],
      [
        //
        ["The Q100/HW elevation is significantly below the low structure elevation."],
      ],
      [
        //
        ["The Q100/HW elevation is below the low structure elevation."],
      ],
      [
        //
        ["The Q100/HW elevation is above the low structure elevation."],
      ],
      [
        //
        ["The Q100/HW elevation is 582.2' and 4.3' below the low structure elevation of 586.5'."],
      ],
      [
        //
        ["The maximum backwater elevation overtops the bridge."],
      ],
      [
        //
        ["There is drift and debris deposited on the superstructure."],
      ],
      [
        //
        ["Based on the surrounding terrain, overtopping may occur during major hydrologic events due to the limited hydraulic capacity of the structure."],
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
    reference: "SNBI",
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
    reference: "SNBI",
    category: "Wildlife",
    commentary_page_id: "bridge-wildlife-pg4",
    commentary: `<p>Information on bats can be found in Part 9 of the INDOT BIM and in the INDOT Protected Species Guidance. Both documents are linked below.</p>
                <br />
                <p>
                  Bridge/structure inspections must be completed by qualified individuals. In order to become a qualified individual, the INDOT Bat Training must be completed.
                  Contact INDOT ESD to request access for completing the INDOT Bat Training.
                </p>`,
    example_comments: [["No bats were seen or heard."], ["Bats and/or guano were observed."], ["Bats heard nesting at bridge or inside bridge components."]],
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
