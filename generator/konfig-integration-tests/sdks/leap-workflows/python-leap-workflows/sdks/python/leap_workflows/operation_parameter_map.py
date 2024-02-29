operation_parameter_map = {
    '/v1/runs/{workflow_run_id}-GET': {
        'parameters': [
            {
                'name': 'workflow_run_id'
            },
        ]
    },
    '/v1/runs-POST': {
        'parameters': [
            {
                'name': 'workflow_id'
            },
            {
                'name': 'webhook_url'
            },
            {
                'name': 'input'
            },
        ]
    },
};