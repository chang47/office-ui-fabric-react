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
      fontFamily: `"FabricMDL2IconSet-6"`,
      src: `url('data:application/octet-stream;base64,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') format('woff')`,
    },
    icons: {
      'AustralianRules': '\uEE70',
      'WifiEthernet': '\uEE77',
      'DateTimeMirrored': '\uEE93',
      'StopSolid': '\uEE95',
      'DoubleChevronUp12': '\uEE96',
      'DoubleChevronDown12': '\uEE97',
      'DoubleChevronLeft12': '\uEE98',
      'DoubleChevronRight12': '\uEE99',
      'CalendarAgenda': '\uEE9A',
      'AddEvent': '\uEEB5',
      'AssetLibrary': '\uEEB6',
      'DataConnectionLibrary': '\uEEB7',
      'DocLibrary': '\uEEB8',
      'FormLibrary': '\uEEB9',
      'FormLibraryMirrored': '\uEEBA',
      'ReportLibrary': '\uEEBB',
      'ReportLibraryMirrored': '\uEEBC',
      'ContactCard': '\uEEBD',
      'CustomList': '\uEEBE',
      'CustomListMirrored': '\uEEBF',
      'IssueTracking': '\uEEC0',
      'IssueTrackingMirrored': '\uEEC1',
      'PictureLibrary': '\uEEC2',
      'OfficeAddinsLogo': '\uEEC7',
      'OfflineOneDriveParachute': '\uEEC8',
      'OfflineOneDriveParachuteDisabled': '\uEEC9',
      'TriangleSolidUp12': '\uEECC',
      'TriangleSolidDown12': '\uEECD',
      'TriangleSolidLeft12': '\uEECE',
      'TriangleSolidRight12': '\uEECF',
      'TriangleUp12': '\uEED0',
      'TriangleDown12': '\uEED1',
      'TriangleLeft12': '\uEED2',
      'TriangleRight12': '\uEED3',
      'ArrowUpRight8': '\uEED4',
      'ArrowDownRight8': '\uEED5',
      'DocumentSet': '\uEED6',
      'DelveAnalytics': '\uEEEE',
      'ArrowUpRightMirrored8': '\uEEEF',
      'ArrowDownRightMirrored8': '\uEEF0',
      'OneDriveAdd': '\uEF32',
      'Header2': '\uEF36',
      'Header3': '\uEF37',
      'Header4': '\uEF38',
      'MarketDown': '\uEF42',
      'CalendarWorkWeek': '\uEF51',
      'SidePanel': '\uEF52',
      'GlobeFavorite': '\uEF53',
      'CaretTopLeftSolid8': '\uEF54',
      'CaretTopRightSolid8': '\uEF55',
      'ViewAll2': '\uEF56',
      'DocumentReply': '\uEF57',
      'PlayerSettings': '\uEF58',
      'ReceiptForward': '\uEF59',
      'ReceiptReply': '\uEF5A',
      'ReceiptCheck': '\uEF5B',
      'Fax': '\uEF5C',
      'RecurringEvent': '\uEF5D',
      'ReplyAlt': '\uEF5E',
      'ReplyAllAlt': '\uEF5F',
      'EditStyle': '\uEF60',
      'EditMail': '\uEF61',
      'Lifesaver': '\uEF62',
      'LifesaverLock': '\uEF63',
      'InboxCheck': '\uEF64',
      'FolderSearch': '\uEF65',
      'CollapseMenu': '\uEF66',
      'ExpandMenu': '\uEF67',
      'Boards': '\uEF68',
      'SunAdd': '\uEF69',
      'SunQuestionMark': '\uEF6A',
      'LandscapeOrientation': '\uEF6B',
      'DocumentSearch': '\uEF6C',
      'PublicCalendar': '\uEF6D',
      'PublicContactCard': '\uEF6E',
      'PublicEmail': '\uEF6F',
      'PublicFolder': '\uEF70',
      'WordDocument': '\uEF71',
      'PowerPointDocument': '\uEF72',
      'ExcelDocument': '\uEF73',
      'GroupedList': '\uEF74',
      'ClassroomLogo': '\uEF75',
      'Sections': '\uEF76',
      'EditPhoto': '\uEF77',
      'Starburst': '\uEF78',
      'ShareiOS': '\uEF79',
      'AirTickets': '\uEF7A',
      'PencilReply': '\uEF7B',
      'Tiles2': '\uEF7C',
      'SkypeCircleCheck': '\uEF7D',
      'SkypeCircleClock': '\uEF7E',
      'SkypeCircleMinus': '\uEF7F',
      'SkypeMessage': '\uEF83',
      'ClosedCaption': '\uEF84',
      'ATPLogo': '\uEF85',
      'OfficeFormsLogoInverse': '\uEF86',
      'RecycleBin': '\uEF87',
      'EmptyRecycleBin': '\uEF88',
      'Hide2': '\uEF89',
      'iOSAppStoreLogo': '\uEF8A'
    }
  });
}
