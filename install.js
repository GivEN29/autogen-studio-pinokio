module.exports = async kernel =>
{
	const config =
	{
		requires:
		[
			{
				type: 'conda',
				name:
				[
					'ffmpeg'
				],
				args: '-c conda-forge'
			}
		],
		run:
		[
			{
				method: 'shell.run',
				params:
				{
					env:
					{
						PYTHONNOUSERSITE: 'True'
					},
					message: 'pip install autogenstudio',
					path: 'autogen',
					venv: 'env'
				}
			},
			{
				method: 'input',
				params:
				{
					title: 'Install complete',
					description: 'Go back to the dashboard and launch the application.'
				}
			},
			{
				method: 'browser.open',
				params:
				{
					uri: '/?selected=autogen'
				}
			}
		]
	};

	return config;
};
