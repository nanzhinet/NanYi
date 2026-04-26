import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.medlive.guideline.android',
  name: '临床指南',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'cn.medlive.vip.AdDialogActivity',
          matches:
            'ViewGroup > [vid="imgAd"] + [vid="icClose"][clickable=true][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/bce1c836-88d1-49a0-a417-b2ecca2991ab',
          snapshotUrls: 'https://i.gkd.li/i/25769524',
        },
        {
          key: 1,
          activityIds: 'com.quick.jsbridge.view.QuickWebLoader',
          matches:
            '@Button[clickable=true][visibleToUser=true] + [text="开通用药会员"] <2 View[childCount=5]',
          exampleUrls: 'https://e.gkd.li/2ee23070-6091-49e3-b035-02618bc1e3df',
          snapshotUrls: 'https://i.gkd.li/i/25769624',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-签到自动退出',
      fastQuery: true,
      activityIds: 'cn.medlive.guideline.activity.GuidelineTaskCenterActivity',
      rules: [
        {
          key: 0,
          matches:
            'ViewGroup[childCount=2] > [vid="clDialog"] + [vid="ivClose"][clickable=true][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/6f3a356e-cca2-4526-be9c-ed8bf4113ea7',
          snapshotUrls: 'https://i.gkd.li/i/25769782',
        },
        {
          preKeys: [0],
          matches:
            '[vid="included_layout_title"] > @ImageButton[clickable=true][visibleToUser=true] + [vid="app_header_title"]',
          exampleUrls: 'https://e.gkd.li/bcc9072e-a4f1-4509-b667-9aab569742cf',
          snapshotUrls: 'https://i.gkd.li/i/25769880',
        },
      ],
    },
    {
      key: 3,
      name: '功能类-说明书自动翻译',
      desc: '药品说明书-点击右下角翻译按钮',
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          activityIds: 'cn.medlive.drug.ui.DrugDetailActivity',
          matches:
            '[vid="llBottom"] > [vid="tvTranslate"][clickable=true][visibleToUser=true]',
          exampleUrls: [
            'https://e.gkd.li/06c6e7b8-edc7-43ea-a626-9bcb8c80c11a',
            'https://e.gkd.li/7855c4ce-eae0-4152-a2f0-ecd2ab4f2904',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/25770071', // 翻译前
            'https://i.gkd.li/i/25770005', // 翻译后
          ],
        },
      ],
    },
  ],
});
