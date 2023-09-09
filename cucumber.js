module.exports = {
	default: {
		tags:  '',
		formatOptions: {
			snippetInterface: 'async-await',
		},
		paths: ['src/test/features/', 'features'],
		publishQuiet: true,
		// dryRun: true,
		require: ['src/test/step_definitions/*.ts', 'src/hooks/hooks.ts'], // Locate Step Defs and hooks
		requireModule: ['ts-node/register'],
		format: [
			// 'usage',
			'progress-bar',
			'html:target/cucumber_report.html',
			'json:target/cucumber_report.json',
			'rerun:@rerun.txt',
		],
		// parallel: 2,
	},
	rerun: {
		formatOptions: {
			snippetInterface: 'async-await',
		},
		publishQuiet: true,
		dryRun: false,
		require: ['src/test/steps/*.ts', 'src/hooks/hooks.ts'],
		requireModule: ['ts-node/register'],
		format: [
			// 'usage',
			'progress',
			'html:target/cucumber-report.html',
			'json:target/cucumber-report.json',
			'rerun:@rerun.txt',
		],
		parallel: 2,
	},
};
