import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.settings',
  name: '设置',
  groups: [
    {
      key: 1,
      name: '功能类-选默认USB连接方式',
      desc: '(小米华为📱)点击[取消]', // 取消不选即默认
      enable: false,
      rules: [
        {
          // activityIds: [],
          fastQuery: true,
          matches: [
            '[text="USB 用于" || text="USB 连接方式"][visibleToUser=true]',
            '[text="取消"][clickable=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23428639', // (小米Android 12📱)
            'https://i.gkd.li/i/23696166', // (小米Android 11📱)
            'https://i.gkd.li/i/25351690', // (华为Android 10📱)① 鸿蒙3 此时按返回键无效
            'https://i.gkd.li/i/25351689', // (华为Android 10📱)② 由这两个快照看出 界面id 不固定
          ],
          exampleUrls: 'https://e.gkd.li/1ab102bd-99dd-471a-8841-33a7aaf2790a',
        },
      ],
    },
  ],
});
