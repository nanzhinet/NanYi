import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'icu.freedomIntrovert.biliSendCommAntifraud',
  name: '哔哩发评反诈',
  groups: [
    {
      key: 1,
      name: '功能类-检查评论自动点击后台等待',
      rules: [
        {
          fastQuery: true,
          actionDelay: 400, //过早触发动画没加载完就动作导致操作无效
          activityIds: '.ByXposedLaunchedActivity',
          matches: 'Button[text="后台等待"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/25240613',
            'https://i.gkd.li/i/25320069',
          ],
        },
      ],
    },
  ],
});
