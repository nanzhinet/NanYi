import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.phoenix.read',
  name: '红果免费短剧',
  groups: [
    {
      key: 1,
      name: '全屏广告-视频广告自动上滑(新版)',
      activityIds: [
        'com.dragon.read.component.shortvideo.impl.ShortSeriesActivity',
      ],
      rules: [
        {
          name: '检测到「上滑继续观看短剧」时自动上滑',
          fastQuery: true,
          matches: '[vid="ang"][text="上滑继续观看短剧"][visibleToUser=true]',
          swipeArg: {
            start: {
              x: 'screenWidth/2',
              y: 'screenHeight*0.8',
            },
            end: {
              x: 'screenWidth/2',
              y: 'screenHeight*0.2',
            },
            duration: 300,
          },
          snapshotUrls: 'https://i.gkd.li/i/27098752',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-视频广告自动上滑(旧版)',
      activityIds: [
        'com.dragon.read.component.shortvideo.impl.ShortSeriesActivity',
      ],
      rules: [
        {
          name: '检测到「上滑继续观看短剧」时自动上滑',
          fastQuery: true,
          matches: '[vid="ana"][text="上滑继续观看短剧"][visibleToUser=true]',
          swipeArg: {
            start: {
              x: 'screenWidth/2',
              y: 'screenHeight*0.8',
            },
            end: {
              x: 'screenWidth/2',
              y: 'screenHeight*0.2',
            },
            duration: 300,
          },
          snapshotUrls: 'https://i.gkd.li/i/27098752',
        },
      ],
    },
  ],
});
