// Add a new entry at the TOP of the `versions` array only when you start a
// new review/update branch. Each entry has its own authors + contributors,
// so each revision can credit a different set of people.
//
// Small fixes pushed to an existing branch don't need a new entry — the
// "Updated [date]" stamp in the footer refreshes automatically on each push.
//
// PHOTO CREDIT RULE: any person named as the Source of a photo added in a
// given version (see `imageSource` on Complex Materials and Mining 101
// image modals) must be listed in that version's `contributors` array,
// unless they're already in `authors`. The inline caption credit still
// stays on the image itself.
//
// PER-VERSION CHANGE LOG: `summary` is a one-line headline for the release;
// `changes` (optional) is a bulleted list of notable updates shown below
// the summary on the Version History page.

export const versions = [
  {
    version: '1.0',
    publishedDate: '2026-04-16',
    summary: 'Initial publication of the Biomining Handbook.',
    changes: [
      'Launched the Biomining Handbook with core sections: What Is Biomining, Mining 101, Biology 101, Complex Materials Playbook, Example Flowsheets, Technology Assessment Checklists, Frontier Challenges, Core Glossary, and References.',
    ],
    authors: [
      'Ariana Caiati',
      'Colbey Derwin',
      'Jayme Feyhl-Buska',
    ],
    contributors: [
      'Mackenzie Best',
      'Wenying Liu',
      'Erin Marshall',
      'Daniel Merino-Garcia',
      'Sasha Milshteyn',
      'Paul Reginato',
      'Gerhard (Gary) Schenk',
      'Alan Tordoir',
      'Luis Valencia',
    ],
  },
];

export const currentVersion = versions[0];
