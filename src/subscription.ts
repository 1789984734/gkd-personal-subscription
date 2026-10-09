import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 551761801,
  name: '个人开屏广告订阅',
  version: 1,
  checkUpdateUrl: './gkd.version.json5',
  categories,
  globalGroups,
  apps: await batchImportApps(import.meta.dirname + '/apps'),
});
