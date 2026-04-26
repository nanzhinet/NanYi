import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.systemui',
  name: '系统界面',
  groups: [
    // 以下规则组快照截取自小米手机，可能不适配其他系统。
    {
      key: 1,
      name: '功能类-自动允许网易云音乐共享整个屏幕',
      fastQuery: true,
      activityIds:
        '.mediaprojection.permission.MediaProjectionPermissionActivity',
      rules: [
        {
          key: 1,
          matches: [
            '[text="要与“网易云音乐”共享屏幕吗？"]',
            '[vid="screen_share_mode_spinner"][clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/23451390',
        },
        {
          preKeys: [1],
          key: 2,
          matches: '@[clickable=true] > [text="共享整个屏幕"]',
          snapshotUrls: 'https://i.gkd.li/i/23451403',
        },
        {
          preKeys: [2],
          key: 3,
          matches: 'Button[text="共享屏幕"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/23451416',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-自动允许白描共享整个屏幕',
      fastQuery: true,
      activityIds:
        '.mediaprojection.permission.MediaProjectionPermissionActivity',
      rules: [
        {
          key: 1,
          matches: [
            '[text="要与“白描”共享屏幕吗？"]',
            '[vid="screen_share_mode_spinner"][clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/23451390',
        },
        {
          preKeys: [1],
          key: 2,
          matches: '@[clickable=true] > [text="共享整个屏幕"]',
          snapshotUrls: 'https://i.gkd.li/i/23451403',
        },
        {
          preKeys: [2],
          key: 3,
          matches: 'Button[text="共享屏幕"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/23451416',
        },
      ],
    },
    {
      key: 3,
      name: '功能类-自动允许QQ音乐共享整个屏幕',
      fastQuery: true,
      activityIds:
        '.mediaprojection.permission.MediaProjectionPermissionActivity',
      rules: [
        {
          key: 1,
          matches: [
            '[text="要与“QQ音乐”共享屏幕吗？"]',
            '[vid="screen_share_mode_spinner"][clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/23451390',
        },
        {
          preKeys: [1],
          key: 2,
          matches: '@[clickable=true] > [text="共享整个屏幕"]',
          snapshotUrls: 'https://i.gkd.li/i/23451403',
        },
        {
          preKeys: [2],
          key: 3,
          matches: 'Button[text="共享屏幕"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/23451416',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-自动允许USB调试',
      desc: '点击 ①✅一律允许 ②确定',
      fastQuery: true,
      // activityIds: [
      //   '.usb.HwUsbDebuggingActivity', //华为
      //   '.usb.UsbDebuggingActivity',   //小米,VIVO
      // ],
      rules: [
        {
          key: 0,
          matches:
            '[text$="这台计算机进行调试"][clickable=true][checked=false]',
          exampleUrls: 'https://e.gkd.li/124fdf00-8901-463e-bb0b-ed6e8aadf3f7',
          snapshotUrls: [
            'https://i.gkd.li/i/25254577', //真我📱 无界面id
            'https://i.gkd.li/i/25256690', //华为📱
            'https://i.gkd.li/i/25256846', //红米📱 [checked=true]是选中状态
            'https://i.gkd.li/i/25257004', //小米📱
            'https://i.gkd.li/i/25619878', //VIVO📱 未选中
            'https://i.gkd.li/i/25619884', //VIVO📱 已选中
          ],
        },
        {
          preKeys: [0],
          matches: '[text="允许" || text="确定"][clickable=true]', // 快照参考 子key 0 的
        },
      ],
    },
    {
      key: 5,
      name: '功能类-自动允许无线调试(真我📱)',
      desc: '点击 ①✅始终允许 ②允许',
      fastQuery: true,
      rules: [
        {
          key: 0,
          matches:
            '[text$="通过此网络进行调试"][clickable=true][checked=false]',
          exampleUrls: 'https://e.gkd.li/7e2c5172-1b35-4ddf-8a4c-b19d25330d64',
          snapshotUrls: 'https://i.gkd.li/i/25256451', //真我📱 无界面id
        },
        {
          preKeys: [0],
          matches: '[text="允许" || text="确定"][clickable=true]',
        },
      ],
    },
  ],
});
