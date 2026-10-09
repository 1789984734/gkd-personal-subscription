import assert from 'node:assert/strict';
import { checkSubscription } from '@gkd-kit/tools';
import scope from '../config/scope.json' with { type: 'json' };
import subscription from '../src/subscription';

checkSubscription(subscription);

assert.ok(subscription.apps, '订阅缺少应用规则列表');
assert.ok(subscription.globalGroups, '订阅缺少通用规则列表');
assert.ok(subscription.categories, '订阅缺少分类列表');

const allowedIds = new Set(scope.apps.map((app) => app.id));
assert.equal(allowedIds.size, scope.apps.length, '应用清单存在重复包名');
assert.equal(
  subscription.id > 0 && subscription.id !== 667,
  true,
  '请使用独立订阅 ID',
);
assert.equal(
  subscription.apps.length,
  allowedIds.size,
  '订阅应用数量与清单不一致',
);
assert.equal(subscription.globalGroups.length, 1, '只保留通用开屏广告');
assert.deepEqual(
  subscription.categories.map((category) => category.name),
  ['开屏广告', '功能类'],
);

for (const app of subscription.apps) {
  assert.ok(allowedIds.has(app.id), `清单之外的应用：${app.id}`);
  for (const group of app.groups) {
    assert.ok(
      group.name.startsWith('开屏广告') ||
        (app.id === 'com.max.xiaoheihe' &&
          group.name === '功能类-签到成功弹窗'),
      `超出维护范围：${app.name} / ${group.name}`,
    );
  }
}

for (const group of subscription.globalGroups) {
  assert.ok(group.apps, '通用规则缺少应用清单');
  assert.equal(group.matchAnyApp, false, '通用规则必须限制在应用清单内');
  assert.equal(
    group.apps.length,
    allowedIds.size,
    '通用规则应用范围与清单不一致',
  );
  assert.equal(new Set(group.apps.map((app) => app.id)).size, allowedIds.size);
  for (const app of group.apps) {
    assert.ok(allowedIds.has(app.id), `通用规则包含清单之外的应用：${app.id}`);
  }
  for (const rule of group.rules) {
    assert.notEqual(rule.matchAnyApp, true, '子规则不能重新开启任意应用匹配');
    for (const app of rule.apps ?? []) {
      assert.ok(
        allowedIds.has(app.id),
        `通用子规则包含清单之外的应用：${app.id}`,
      );
    }
  }
}

console.log(
  `校验通过：${allowedIds.size} 个应用，${subscription.apps.reduce((total, app) => total + app.groups.length, 0)} 个应用规则组，1 个通用开屏规则组。`,
);
