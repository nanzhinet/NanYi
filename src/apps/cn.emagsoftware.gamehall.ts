import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.emagsoftware.gamehall',
  name: '咪咕快游',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.migugame.home_module.ui.activity.HomeActivity',
          matches: '[vid="btn_update"] -2 [vid="btn_cancle"]',
          snapshotUrls: 'https://i.gkd.li/i/13448894', //旧快照 (无vid)
        },
      ],
    },
  ],
});
