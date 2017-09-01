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
      fontFamily: `"FabricMDL2IconSet-11"`,
      src: `url('${baseUrl}fabricIcons-11.woff') format('woff')`,
    },
    icons: {
      'MailUndelivered': '\uF415',
      'MailTentative': '\uF416',
      'MailTentativeMirrored': '\uF417',
      'MailReminder': '\uF418',
      'ReceiptUndelivered': '\uF419',
      'ReceiptTentative': '\uF41A',
      'ReceiptTentativeMirrored': '\uF41B',
      'Inbox': '\uF41C',
      'IRMReply': '\uF41D',
      'IRMReplyMirrored': '\uF41E',
      'IRMForward': '\uF41F',
      'IRMForwardMirrored': '\uF420',
      'VoicemailIRM': '\uF421',
      'EventAccepted': '\uF422',
      'EventTentative': '\uF423',
      'EventTentativeMirrored': '\uF424',
      'EventDeclined': '\uF425',
      'IDBadge': '\uF427',
      'OfficeFormsLogoInverse16': '\uF433',
      'OfficeFormsLogo': '\uF434',
      'OfficeFormsLogoFill': '\uF435',
      'OfficeFormsLogo16': '\uF436',
      'OfficeFormsLogoFill16': '\uF437',
      'OfficeFormsLogoInverse24': '\uF43A',
      'OfficeFormsLogo24': '\uF43B',
      'OfficeFormsLogoFill24': '\uF43C',
      'PageLock': '\uF43F',
      'NotExecuted': '\uF440',
      'NotImpactedSolid': '\uF441',
      'FieldReadOnly': '\uF442',
      'FieldRequired': '\uF443',
      'BacklogBoard': '\uF444',
      'ExternalBuild': '\uF445',
      'ExternalTFVC': '\uF446',
      'ExternalXAML': '\uF447',
      'IssueSolid': '\uF448',
      'DefectSolid': '\uF449',
      'LadybugSolid': '\uF44A',
      'MTMLogo': '\uF44B',
      'NugetLogo': '\uF44C',
      'TFVCLogo': '\uF44D',
      'ProjectLogo32': '\uF47E',
      'ProjectLogoFill32': '\uF47F',
      'ProjectLogo16': '\uF480',
      'ProjectLogoFill16': '\uF481',
      'SwayLogo32': '\uF482',
      'SwayLogoFill32': '\uF483',
      'SwayLogo16': '\uF484',
      'SwayLogoFill16': '\uF485',
      'ClassNotebookLogo32': '\uF486',
      'ClassNotebookLogoFill32': '\uF487',
      'ClassNotebookLogo16': '\uF488',
      'ClassNotebookLogoFill16': '\uF489',
      'ClassNotebookLogoInverse32': '\uF48A',
      'ClassNotebookLogoInverse16': '\uF48B',
      'StaffNotebookLogo32': '\uF48C',
      'StaffNotebookLogoFill32': '\uF48D',
      'StaffNotebookLogo16': '\uF48E',
      'StaffNotebookLogoFill16': '\uF48F',
      'StaffNotebookLogoInverted32': '\uF490',
      'StaffNotebookLogoInverted16': '\uF491',
      'KaizalaLogo': '\uF492',
      'TaskLogo': '\uF493',
      'ProtectionCenterLogo32': '\uF494',
      'NonprofitLogo32': '\uF495',
      'GallatinLogo': '\uF496',
      'Globe2': '\uF49A',
      'Guitar': '\uF49B',
      'Breakfast': '\uF49C',
      'Brunch': '\uF49D',
      'BeerMug': '\uF49E',
      'Vacation': '\uF49F',
      'Teeth': '\uF4A0',
      'Taxi': '\uF4A1',
      'Chopsticks': '\uF4A2',
      'SyncOccurence': '\uF4A3',
      'UnsyncOccurence': '\uF4A4'
    }
  });
}
