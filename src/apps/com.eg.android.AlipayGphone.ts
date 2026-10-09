// 来源：Lin-arm/GKD_subscription v605。保留上游已发布规则的选择器、动作和匹配限制。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    {
      key: 24,
      name: '开屏广告-小程序开屏广告',
      desc: '①点击[跳过] ②坐标点击[关闭]',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'match',
      priorityTime: 10000,
      activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$',
      rules: [
        {
          key: 1,
          name: '①点击[跳过]',
          matches:
            '@View[id=null][text=null][childCount=0][visibleToUser=true] < ViewGroup[id=null][text=null][childCount=1][index=parent.childCount.minus(1)] <(7,8) ViewGroup <2 ViewGroup < ViewGroup < LinearLayout < RelativeLayout <(1,2) [id="android:id/content"]',
          exampleUrls: 'https://e.gkd.li/a243e31f-f1b5-4689-8d1a-c53250be651e',
          snapshotUrls: [
            'https://i.gkd.li/i/17141999',
            'https://i.gkd.li/i/28130319',
          ],
        },
        {
          key: 2,
          name: '②坐标点击[关闭]',
          position: {
            left: 'width * 0.2490',
            top: 'width * 0.0435',
          },
          matches:
            'View[width=getPrev(5).width] - @ViewGroup[childCount=1][height<150][getChild(0).name$=".View"][visibleToUser=true] < [childCount>3] < ViewGroup < LinearLayout < RelativeLayout <2 [id="android:id/content"][childCount=2]',
          snapshotUrls: [
            'https://i.gkd.li/i/28133622',
            'https://i.gkd.li/i/28337298',
          ],
        },
      ],
      order: -10,
    },
  ],
});
