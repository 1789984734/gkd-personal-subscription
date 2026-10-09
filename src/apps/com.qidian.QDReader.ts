// 来源：Lin-arm/GKD_subscription v605。保留上游已发布规则的选择器、动作和匹配限制。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qidian.QDReader',
  name: '起点读书',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          action: 'clickCenter',
          matches:
            '([text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]) || ([vid="splash_skip_button"][visibleToUser=true])',
          exampleUrls: 'https://e.gkd.li/3e2357fd-dced-4929-85e0-a9a06ce5fea0',
          snapshotUrls: [
            'https://i.gkd.li/i/19580847',
            'https://i.gkd.li/i/19633020',
          ],
        },
      ],
      order: -10,
    },
  ],
});
