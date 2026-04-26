import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.runningquotient.rq',
  name: 'RQrun',
  groups: [
    {
      key: 1,
      name: '功能类-自动签到',
      desc: '点击右侧[签到福利]',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: '.page.common_page.MainActivity',
          matches: '[vid="iv_main_checkin_entry"]',
          snapshotUrls: 'https://i.gkd.li/i/16105502',
        },
        {
          preKeys: [0],
          key: 1,
          activityIds: '.page.common_page.CommonContainerActivity',
          matches:
            '@Button[text="我知道了"][clickable=true] <2 View < [index=parent.childCount.minus(1)] <n WebView <<2 [vid="common_h5_container"]',
          snapshotUrls: 'https://i.gkd.li/i/16105938',
        },
        {
          preKeys: [1],
          key: 2,
          activityIds: '.page.common_page.CommonContainerActivity',
          matches: '[vid="iv_setting_header_view_left"]',
          snapshotUrls: 'https://i.gkd.li/i/16105942',
        },
      ],
    },
  ],
});
