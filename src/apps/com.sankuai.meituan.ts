// 来源：Lin-arm/GKD_subscription v605。保留上游已发布规则的选择器、动作和匹配限制。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sankuai.meituan',
  name: '美团',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: 'TextView[text*="跳过"][text.length<8][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/28997249',
          excludeSnapshotUrls: 'https://i.gkd.li/i/17827264',
        },
      ],
      order: -10,
    },
  ],
});
