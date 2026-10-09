// 开屏规则来源：Lin-arm/GKD_subscription v605。
// 青桔弹窗规则来源：用户提供的快照 33254913。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      key: 10,
      name: '开屏广告-微信小程序',
      fastQuery: true,
      matchTime: 10000,
      forcedTime: 10000,
      priorityTime: 10000,
      activityIds: [
        '.plugin.appbrand.ui.AppBrandUI',
        '.plugin.appbrand.launching.AppBrandLaunchProxyUI',
        '.plugin.appbrand.ui.AppBrandPluginUI',
      ],
      rules: [
        {
          key: 0,
          actionDelay: 800,
          matches: [
            '[text="广告" || text="廣告"][visibleToUser=true]',
            '[text="跳过" || text="跳過"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/12785183',
            'https://i.gkd.li/i/13306883',
            'https://i.gkd.li/i/13407275',
            'https://i.gkd.li/i/15108441',
            'https://i.gkd.li/i/32969391',
          ],
        },
        {
          key: 1,
          matchRoot: true,
          actionCd: 500,
          matches:
            '@TextView[text*="跳过"][text.length<10][height<150] <<(25-n) FrameLayout[childCount=2] <(1,2) * < [id="android:id/content"]',
          snapshotUrls: [
            'https://i.gkd.li/i/26677309',
            'https://i.gkd.li/i/26747393',
          ],
        },
      ],
      order: -10,
    },
    {
      key: 1000,
      name: '全屏广告-青桔小程序弹窗',
      desc: '点击弹窗下方的 X 关闭按钮',
      enable: true,
      activityIds: '.plugin.appbrand.ui.AppBrandUI',
      actionCd: 2000,
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          matches: [
            '[text*="青桔"]',
            '[text="扫码用车"][visibleToUser=true]',
            // 弹窗内容和“我知道了”均在图片中；定位图片下方的 X。
            '@Image[visibleToUser=true][width<parent.width.div(5)][height<parent.width.div(5)][top>parent.getChild(0).bottom] - View[visibleToUser=true][childCount=1] > Image[visibleToUser=true][height>width]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/33254913',
        },
      ],
    },
  ],
});
