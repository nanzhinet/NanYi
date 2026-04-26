import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miHoYo.cloudgames.hkrpg',
  name: '云·星穹铁道',
  groups: [
    {
      key: 0,
      name: '功能类-自动点击[下载版本更新]',
      fastQuery: true,
      activityIds: 'com.mihoyo.cloudgame.main.MiHoYoCloudMainActivity',
      rules: [
        {
          key: 0,
          name: '点击[立即更新]',
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          matches: '[text="立即更新"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/26311879',
          exampleUrls: 'https://e.gkd.li/eda9555c-565a-4c75-844d-3529d552e203',
        },
        {
          preKeys: [0],
          name: '点击[开始安装]',
          actionMaximum: 1,
          resetMatch: 'app',
          matches: '[text="开始安装"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/26311880',
          exampleUrls: 'https://e.gkd.li/752b4fcb-f86a-4a69-b29b-17eaa7c62763',
        },
      ],
    },
    {
      key: 1,
      name: '功能类-自动点击[使用流量进行游戏]',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.mihoyo.cloudgame.main.MiHoYoCloudMainActivity',
          matches: '[text="使用流量进行游戏"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/f33b53ea-32a2-48b3-a4a8-54bfa8b1fdd8',
          snapshotUrls: 'https://i.gkd.li/i/14784161',
        },
      ],
    },
  ],
});
