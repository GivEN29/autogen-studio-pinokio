module.exports = () =>
{
	const config =
	{
		daemon: true,
		run:
		[
			{
				method: 'shell.run',
				params:
				{
					message: 'autogenstudio ui --port 8081',
					path: 'autogen',
					venv: 'env',
					on:
					[
						{
							event: '/(http:\/\/[0-9.:]+)/',
							done: true
						}
					]
				}
			},
			{
				method: 'browser.open',
				params:
				{
					uri: '{{self.session.url}}',
					target: '_blank'
				}
			}
		]
	};

	return config;
};
