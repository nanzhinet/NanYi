import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chuanyuanyi.zkcl',
  name: '船员易综合服务平台',
  groups: [
    {
      key: 1,
      name: '通知提示',
      desc: '点击[忽略]',
      matchRoot: true,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.uzmap.pkg.EntranceActivity',
          matches:
            '@TextView[text="忽略"] <3 View < View < View < View < WebView[text="弹窗公告"] < WebView < FrameLayout <2 RelativeLayout < ViewGroup < FrameLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/27011641',
        },
      ],
    },
  ],
});
