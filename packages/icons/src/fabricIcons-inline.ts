// tslint:disable:max-line-length

import { registerIcons } from '@uifabric/styling/lib/index';

export function initializeIcons(baseUrl: string = ''): void {
  registerIcons({
    style: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      fontStyle: 'normal',
      fontWeight: 'normal',
      speak: 'none'
    },
    fontFace: {
      fontFamily: `"FabricMDL2IconSet"`,
      src: `url('data:application/octet-stream;base64,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') format('woff')`,
    },
    icons: {
      'StatusCircleCheckmark': '\uF13E',
      'Cancel': '\uE711',
      'ChevronDown': '\uE70D',
      'ChevronLeft': '\uE76B',
      'ChevronRight': '\uE76C',
      'ChevronUp': '\uE70E',
      'SkypeCheck': '\uEF80',
      'SkypeClock': '\uEF81',
      'SkypeMinus': '\uEF82',
      'Clear': '\uE894',
      'Search': '\uE721',
      'FavoriteStar': '\uE734',
      'FavoriteStarFill': '\uE735',
      'AddFriend': '\uE8FA',
      'Tag': '\uE8EC',
      'More': '\uE712',
      'Ascending': '\uEDC0',
      'Descending': '\uEDC1',
      'Filter': '\uE71C',
      'Sort': '\uE8CB',
      'SortDown': '\uEE69',
      'SortLines': '\uE9D0',
      'SortUp': '\uEE68',
      'LargeGrid': '\uEECB',
      'List': '\uEA37',
      'View': '\uE890',
      'Add': '\uE710',
      'Download': '\uE896',
      'Calendar': '\uE787',
      'Edit': '\uE70F',
      'Embed': '\uECCE',
      'GlobalNavButton': '\uE700',
      'Info': '\uE946',
      'Mail': '\uE715',
      'Settings': '\uE713',
      'Share': '\uE72D',
      'Tiles': '\uECA5',
      'Upload': '\uE898',
      'CircleRing': '\uEA3A',
      'CheckMark': '\uE73E'
    }
  });
}
