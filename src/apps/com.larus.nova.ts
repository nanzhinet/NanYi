import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.larus.nova',
  name: '豆包',
  groups: [
    {
      key: 1,
      name: '功能类-自动创建新对话',
      desc: '每次进入豆包自动创建新对话',
      fastQuery: true,
      activityIds: 'com.larus.home.impl.MainActivity',
      actionMaximum: 1,
      matchTime: 5000,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: '[vid="back_icon"][desc="对话列表"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/26175174',
        },
        {
          preKeys: [0],
          matches:
            '[vid="side_bar_create_conversation"][desc="创建新对话"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/26175178',
        },
      ],
    },
  ],
});
