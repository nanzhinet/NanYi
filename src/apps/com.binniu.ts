import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.binniu',
  name: '半导小芯',
  groups: [
    {
      key: 1,
      name: '功能类-自动点击更多封装',
      desc: '规格书-分析-查看更多',
      rules: [
        {
          fastQuery: true,
          activityIds: '.ui.activity.classify.ChipChoiceCompareActivity',
          matches:
            '@[vid="ll_more"] > [vid="tv_more"][text!^="收起"] + [vid="iv_more"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/26836800',
          exampleUrls: 'https://e.gkd.li/bf5ab2de-d817-4f93-9dfd-26b76862a961',
        },
      ],
    },
  ],
});
