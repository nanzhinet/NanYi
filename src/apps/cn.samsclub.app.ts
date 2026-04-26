import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.samsclub.app',
  name: '山姆会员商店',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches:
            '@ImageView[clickable=true] <2 [vid="advertising_container"]',
          snapshotUrls: 'https://i.gkd.li/i/13609106', //无vid旧快照
        },
        {
          key: 1,
          matches: '@ImageView[vid="close_view"]',
          snapshotUrls: 'https://i.gkd.li/i/15879369',
        },
      ],
    },
    {
      key: 1,
      name: '权限提示-定位权限',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.ui.MainActivity',
          matches: '[vid="tips_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13609113', //无vid旧快照
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-底部横幅广告',
      desc: 'x掉[亲友卡待赠送]',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.ui.MainActivity',
          matches: '[vid="fragment_home_window_delete_iv"]',
          snapshotUrls: 'https://i.gkd.li/i/13609113', //无vid旧快照
        },
      ],
    },
  ],
});
