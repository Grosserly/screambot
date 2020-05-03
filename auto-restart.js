const { CronJob } = require("cron");
const job = new CronJob({
	cronTime: "00 00 00 * * *",
	onTick: () => {
		/*
		 * Restart Screambot every midnight.
		 */
		console.info("*** Another day, another fresh instance of Screambot! Restarting... ***");
		process.exit();
	},
	start: false,
	timeZone: "Etc/UTC"
});

job.start();
