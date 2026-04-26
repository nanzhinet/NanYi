import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.com.drivedu.chexuetang',
  name: '车学堂',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      fastQuery: true,
      activityIds: '.main.activity.MainActivity_',
      rules: [
        {
          key: 0,
          matches:
            '@[clickable=true][width<82] < [desc^="dislike"] + * >2 [text="广告"][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/16020d11-8e5b-4fb5-8e57-6baaa13ce6a9',
          snapshotUrls: 'https://i.gkd.li/i/15137765',
        },
        {
          key: 1,
          matches:
            '@[name$="View"][width<72][height<72] < FrameLayout <3 FrameLayout <<(6,8) [vid="fragment_ad"]',
          exampleUrls:
            'https://m.gkd.li/57941037/402dc635-354e-4c4b-a6b9-0eebeecfee0d',
          snapshotUrls: 'https://i.gkd.li/i/15148368',
        },
      ],
    },
  ],
});
