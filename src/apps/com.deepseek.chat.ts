import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.deepseek.chat',
  name: 'DeepSeek',
  groups: [
    {
      key: 1,
      name: '功能类-自动折叠思考过程',
      rules: [
        {
          activityIds: '.MainActivity',
          actionCd: 3000,
          matches: '@[clickable=true] > [text*="思考"] + View[desc="折叠"]',
          snapshotUrls: [
            'https://i.gkd.li/i/23982641', // 正在思考 待[折叠]
            'https://i.gkd.li/i/23982613', // 已思考 待[折叠]
            'https://i.gkd.li/i/25364857', // 已深度思考
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/23982615', // 排除 [展开]
        },
      ],
    },
  ],
});
