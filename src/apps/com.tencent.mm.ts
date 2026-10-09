// 来源：Lin-arm/GKD_subscription v605。保留上游已发布规则的选择器、动作和匹配限制。
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
  ],
});
