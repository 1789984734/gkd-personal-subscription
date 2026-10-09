// 来源：Lin-arm/GKD_subscription v605。保留上游已发布规则的选择器、动作和匹配限制。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.bankabc',
  name: '中国农业银行',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchRoot: true,
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches: '[vid="close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/67cfc2f8-a108-4382-976a-0da7d13764e9',
          snapshotUrls: 'https://i.gkd.li/i/14179162',
        },
        {
          key: 1,
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/a5f6ec81-04f6-4678-b1d5-f2f326521945',
          snapshotUrls: 'https://i.gkd.li/i/17879768',
        },
      ],
      order: -10,
    },
  ],
});
