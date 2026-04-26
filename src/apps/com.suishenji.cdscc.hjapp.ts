import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.suishenji.cdscc.hjapp',
  name: '大师兄影视',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      desc: 'x掉',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.meishu.sdk.activity.SdkInterstitialActivity', //美数sdk
          matches: '[vid="ms_activity_sdk_interstitial_cacel"]',
          snapshotUrls: 'https://i.gkd.li/i/26344634',
        },
      ],
    },
  ],
});
