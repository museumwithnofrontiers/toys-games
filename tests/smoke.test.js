import { describeGallerySmoke } from '@museumwnf/viewer-layout/dxa/testing'
import { catalogues as sharedTexts } from '@museumwnf/viewer-i18n/gallery'
import manifest from '@inventory-data/manifest.json'
import ownTexts from '../locales/en.json'
import config from '../src/dataset.config.js'

// The gallery family's smoke test, run against this gallery's own dataset.
// The picks are records of that dataset the tests look for; each is described
// in the suite's own documentation (@museumwnf/viewer-layout/dxa/testing).
describeGallerySmoke({
  config,
  sharedTexts,
  ownTexts,
  manifest,
  namespace: 'toysGames',
  picks: {
    collection: {
      tiles: 9,
      paginations: 2,
    },
    about: 'Toys and Games',
    credits: 'LOCAL PROJECT TEAMS',
    chip: {
      item: 'f22479d3-546f-553a-8322-e8c56a9254ef',
      project: 'Discover Islamic Art',
      className: 'mwnf-chip--ISLandEPM',
    },
    noticeItem: '1b55ef6a-0fb1-56d2-9274-4f0775c2cee9',
    dynasty: {
      item: '8845579c-c381-5bae-bc18-01294691208f',
      name: 'Abbasids',
    },
    timeline: {
      code: 'tr',
      id: 'tur',
      country: 'Türkiye',
    },
    partner: {
      id: 'a05b0a22-d90a-5e08-85e3-53fd66868e26',
      name: 'Museum of Islamic Art',
      city: 'Doha',
      country: 'Qatar',
      objects: 1,
    },
  },
})
