module.exports = () =>
{
	const config =
	{
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
					message: 'pip uninstall autogenstudio -y',
					path: 'autogen',
					venv: 'env'
				}
			},
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
					title: 'Update complete',
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