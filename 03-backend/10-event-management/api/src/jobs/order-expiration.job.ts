import { CronJob } from "cron";

import { cancelExpiredOrder } from "../services/order.service.js";

export const orderExpirationJob = new CronJob(
  "*/10 * * * * *",
  async () => {
    console.info("⏱️ Checking for expired Orders!");
    const result = await cancelExpiredOrder();

    if (result.count > 0) {
      console.info(`❌ ${result.count} orders expired due to timeout`);
    }
  },
  null,
  false,
  "UTC",
);
