type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/chat-POST': {
        parameters: [
            {
                name: 'messages'
            },
            {
                name: 'model_config'
            },
            {
                name: 'project'
            },
            {
                name: 'project_id'
            },
            {
                name: 'session_id'
            },
            {
                name: 'session_reference_id'
            },
            {
                name: 'parent_id'
            },
            {
                name: 'parent_reference_id'
            },
            {
                name: 'inputs'
            },
            {
                name: 'source'
            },
            {
                name: 'metadata'
            },
            {
                name: 'source_datapoint_id'
            },
            {
                name: 'provider_api_keys'
            },
            {
                name: 'num_samples'
            },
            {
                name: 'stream'
            },
            {
                name: 'user'
            },
            {
                name: 'tool_choice'
            },
            {
                name: 'tool_call'
            },
            {
                name: 'seed'
            },
            {
                name: 'response_format'
            },
        ]
    },
    '/chat-deployed-POST': {
        parameters: [
            {
                name: 'messages'
            },
            {
                name: 'project'
            },
            {
                name: 'project_id'
            },
            {
                name: 'session_id'
            },
            {
                name: 'session_reference_id'
            },
            {
                name: 'parent_id'
            },
            {
                name: 'parent_reference_id'
            },
            {
                name: 'inputs'
            },
            {
                name: 'source'
            },
            {
                name: 'metadata'
            },
            {
                name: 'source_datapoint_id'
            },
            {
                name: 'provider_api_keys'
            },
            {
                name: 'num_samples'
            },
            {
                name: 'stream'
            },
            {
                name: 'user'
            },
            {
                name: 'tool_choice'
            },
            {
                name: 'tool_call'
            },
            {
                name: 'seed'
            },
            {
                name: 'response_format'
            },
            {
                name: 'environment'
            },
        ]
    },
    '/chat-experiment-POST': {
        parameters: [
            {
                name: 'messages'
            },
            {
                name: 'experiment_id'
            },
            {
                name: 'project'
            },
            {
                name: 'project_id'
            },
            {
                name: 'session_id'
            },
            {
                name: 'session_reference_id'
            },
            {
                name: 'parent_id'
            },
            {
                name: 'parent_reference_id'
            },
            {
                name: 'inputs'
            },
            {
                name: 'source'
            },
            {
                name: 'metadata'
            },
            {
                name: 'source_datapoint_id'
            },
            {
                name: 'provider_api_keys'
            },
            {
                name: 'num_samples'
            },
            {
                name: 'stream'
            },
            {
                name: 'user'
            },
            {
                name: 'tool_choice'
            },
            {
                name: 'tool_call'
            },
            {
                name: 'seed'
            },
            {
                name: 'response_format'
            },
        ]
    },
    '/chat-model-config-POST': {
        parameters: [
            {
                name: 'messages'
            },
            {
                name: 'model_config_id'
            },
            {
                name: 'project'
            },
            {
                name: 'project_id'
            },
            {
                name: 'session_id'
            },
            {
                name: 'session_reference_id'
            },
            {
                name: 'parent_id'
            },
            {
                name: 'parent_reference_id'
            },
            {
                name: 'inputs'
            },
            {
                name: 'source'
            },
            {
                name: 'metadata'
            },
            {
                name: 'source_datapoint_id'
            },
            {
                name: 'provider_api_keys'
            },
            {
                name: 'num_samples'
            },
            {
                name: 'stream'
            },
            {
                name: 'user'
            },
            {
                name: 'tool_choice'
            },
            {
                name: 'tool_call'
            },
            {
                name: 'seed'
            },
            {
                name: 'response_format'
            },
        ]
    },
    '/completion-POST': {
        parameters: [
            {
                name: 'model_config'
            },
            {
                name: 'project'
            },
            {
                name: 'project_id'
            },
            {
                name: 'session_id'
            },
            {
                name: 'session_reference_id'
            },
            {
                name: 'parent_id'
            },
            {
                name: 'parent_reference_id'
            },
            {
                name: 'inputs'
            },
            {
                name: 'source'
            },
            {
                name: 'metadata'
            },
            {
                name: 'source_datapoint_id'
            },
            {
                name: 'provider_api_keys'
            },
            {
                name: 'num_samples'
            },
            {
                name: 'logprobs'
            },
            {
                name: 'stream'
            },
            {
                name: 'suffix'
            },
            {
                name: 'seed'
            },
            {
                name: 'user'
            },
        ]
    },
    '/completion-deployed-POST': {
        parameters: [
            {
                name: 'project'
            },
            {
                name: 'project_id'
            },
            {
                name: 'session_id'
            },
            {
                name: 'session_reference_id'
            },
            {
                name: 'parent_id'
            },
            {
                name: 'parent_reference_id'
            },
            {
                name: 'inputs'
            },
            {
                name: 'source'
            },
            {
                name: 'metadata'
            },
            {
                name: 'source_datapoint_id'
            },
            {
                name: 'provider_api_keys'
            },
            {
                name: 'num_samples'
            },
            {
                name: 'logprobs'
            },
            {
                name: 'stream'
            },
            {
                name: 'suffix'
            },
            {
                name: 'seed'
            },
            {
                name: 'user'
            },
            {
                name: 'environment'
            },
        ]
    },
    '/completion-experiment-POST': {
        parameters: [
            {
                name: 'experiment_id'
            },
            {
                name: 'project'
            },
            {
                name: 'project_id'
            },
            {
                name: 'session_id'
            },
            {
                name: 'session_reference_id'
            },
            {
                name: 'parent_id'
            },
            {
                name: 'parent_reference_id'
            },
            {
                name: 'inputs'
            },
            {
                name: 'source'
            },
            {
                name: 'metadata'
            },
            {
                name: 'source_datapoint_id'
            },
            {
                name: 'provider_api_keys'
            },
            {
                name: 'num_samples'
            },
            {
                name: 'logprobs'
            },
            {
                name: 'stream'
            },
            {
                name: 'suffix'
            },
            {
                name: 'seed'
            },
            {
                name: 'user'
            },
        ]
    },
    '/completion-model-config-POST': {
        parameters: [
            {
                name: 'model_config_id'
            },
            {
                name: 'project'
            },
            {
                name: 'project_id'
            },
            {
                name: 'session_id'
            },
            {
                name: 'session_reference_id'
            },
            {
                name: 'parent_id'
            },
            {
                name: 'parent_reference_id'
            },
            {
                name: 'inputs'
            },
            {
                name: 'source'
            },
            {
                name: 'metadata'
            },
            {
                name: 'source_datapoint_id'
            },
            {
                name: 'provider_api_keys'
            },
            {
                name: 'num_samples'
            },
            {
                name: 'logprobs'
            },
            {
                name: 'stream'
            },
            {
                name: 'suffix'
            },
            {
                name: 'seed'
            },
            {
                name: 'user'
            },
        ]
    },
    '/datapoints-DELETE': {
        parameters: [
        ]
    },
    '/datapoints/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/datapoints/{id}-PATCH': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'inputs'
            },
            {
                name: 'messages'
            },
            {
                name: 'target'
            },
        ]
    },
    '/projects/{project_id}/datasets-POST': {
        parameters: [
            {
                name: 'description'
            },
            {
                name: 'name'
            },
            {
                name: 'project_id'
            },
        ]
    },
    '/datasets/{dataset_id}/datapoints-POST': {
        parameters: [
            {
                name: 'dataset_id'
            },
            {
                name: 'log_ids'
            },
            {
                name: 'inputs'
            },
            {
                name: 'messages'
            },
            {
                name: 'target'
            },
        ]
    },
    '/datasets/{id}-DELETE': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/datasets/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/projects/{project_id}/datasets-GET': {
        parameters: [
            {
                name: 'project_id'
            },
        ]
    },
    '/datasets/{dataset_id}/datapoints-GET': {
        parameters: [
            {
                name: 'dataset_id'
            },
            {
                name: 'page'
            },
            {
                name: 'size'
            },
        ]
    },
    '/datasets/{id}-PATCH': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'description'
            },
            {
                name: 'name'
            },
        ]
    },
    '/projects/{project_id}/evaluations-POST': {
        parameters: [
            {
                name: 'config_id'
            },
            {
                name: 'evaluator_ids'
            },
            {
                name: 'dataset_id'
            },
            {
                name: 'project_id'
            },
            {
                name: 'provider_api_keys'
            },
        ]
    },
    '/evaluations/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'evaluator_aggregates'
            },
        ]
    },
    '/projects/{project_id}/evaluations-GET': {
        parameters: [
            {
                name: 'project_id'
            },
            {
                name: 'evaluator_aggregates'
            },
        ]
    },
    '/evaluations/{id}/datapoints-GET': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'page'
            },
            {
                name: 'size'
            },
        ]
    },
    '/evaluations/{evaluation_run_external_id}/result-POST': {
        parameters: [
            {
                name: 'log_id'
            },
            {
                name: 'evaluator_id'
            },
            {
                name: 'evaluation_run_external_id'
            },
            {
                name: 'result'
            },
            {
                name: 'error'
            },
        ]
    },
    '/evaluations/{id}/status-PATCH': {
        parameters: [
            {
                name: 'status'
            },
            {
                name: 'id'
            },
        ]
    },
    '/evaluators-POST': {
        parameters: [
            {
                name: 'description'
            },
            {
                name: 'name'
            },
            {
                name: 'arguments_type'
            },
            {
                name: 'return_type'
            },
            {
                name: 'type'
            },
            {
                name: 'code'
            },
            {
                name: 'model_config'
            },
        ]
    },
    '/evaluators/{id}-DELETE': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/evaluators/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/evaluators-GET': {
        parameters: [
        ]
    },
    '/evaluators/{id}-PATCH': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'description'
            },
            {
                name: 'name'
            },
            {
                name: 'arguments_type'
            },
            {
                name: 'return_type'
            },
            {
                name: 'code'
            },
            {
                name: 'model_config'
            },
        ]
    },
    '/projects/{project_id}/experiments-POST': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'positive_labels'
            },
            {
                name: 'project_id'
            },
            {
                name: 'config_ids'
            },
            {
                name: 'set_active'
            },
        ]
    },
    '/experiments/{experiment_id}-DELETE': {
        parameters: [
            {
                name: 'experiment_id'
            },
        ]
    },
    '/projects/{project_id}/experiments-GET': {
        parameters: [
            {
                name: 'project_id'
            },
        ]
    },
    '/experiments/{experiment_id}/model-config-GET': {
        parameters: [
            {
                name: 'experiment_id'
            },
        ]
    },
    '/experiments/{experiment_id}-PATCH': {
        parameters: [
            {
                name: 'experiment_id'
            },
            {
                name: 'name'
            },
            {
                name: 'positive_labels'
            },
            {
                name: 'config_ids_to_register'
            },
            {
                name: 'config_ids_to_deregister'
            },
        ]
    },
    '/feedback-POST': {
        parameters: [
            {
                name: 'type'
            },
            {
                name: 'value'
            },
            {
                name: 'data_id'
            },
            {
                name: 'user'
            },
            {
                name: 'created_at'
            },
            {
                name: 'unset'
            },
        ]
    },
    '/projects/{project_id}/finetunes-POST': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'dataset_id'
            },
            {
                name: 'config'
            },
            {
                name: 'project_id'
            },
            {
                name: 'metadata'
            },
            {
                name: 'provider_api_keys'
            },
        ]
    },
    '/projects/{project_id}/finetunes-GET': {
        parameters: [
            {
                name: 'project_id'
            },
        ]
    },
    '/projects/{project_id}/finetunes/summary-POST': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'dataset_id'
            },
            {
                name: 'config'
            },
            {
                name: 'project_id'
            },
            {
                name: 'metadata'
            },
            {
                name: 'provider_api_keys'
            },
        ]
    },
    '/finetunes/{id}-PATCH': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'project_id'
            },
            {
                name: 'name'
            },
        ]
    },
    '/logs-DELETE': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/logs-GET': {
        parameters: [
            {
                name: 'project_id'
            },
            {
                name: 'search'
            },
            {
                name: 'metadata_search'
            },
            {
                name: 'start_date'
            },
            {
                name: 'end_date'
            },
            {
                name: 'size'
            },
            {
                name: 'page'
            },
        ]
    },
    '/logs-POST': {
        parameters: [
            {
                name: 'project'
            },
            {
                name: 'project_id'
            },
            {
                name: 'session_id'
            },
            {
                name: 'session_reference_id'
            },
            {
                name: 'parent_id'
            },
            {
                name: 'parent_reference_id'
            },
            {
                name: 'inputs'
            },
            {
                name: 'source'
            },
            {
                name: 'metadata'
            },
            {
                name: 'source_datapoint_id'
            },
            {
                name: 'reference_id'
            },
            {
                name: 'trial_id'
            },
            {
                name: 'messages'
            },
            {
                name: 'output'
            },
            {
                name: 'config_id'
            },
            {
                name: 'config'
            },
            {
                name: 'environment'
            },
            {
                name: 'feedback'
            },
            {
                name: 'created_at'
            },
            {
                name: 'error'
            },
            {
                name: 'duration'
            },
            {
                name: 'output_message'
            },
        ]
    },
    '/logs/{id}-PATCH': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'output'
            },
            {
                name: 'error'
            },
            {
                name: 'duration'
            },
        ]
    },
    '/logs-PATCH': {
        parameters: [
            {
                name: 'reference_id'
            },
            {
                name: 'output'
            },
            {
                name: 'error'
            },
            {
                name: 'duration'
            },
        ]
    },
    '/model-configs/deserialize-POST': {
        parameters: [
            {
                name: 'config'
            },
        ]
    },
    '/model-configs/{id}/export-POST': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/model-configs/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/model-configs-POST': {
        parameters: [
            {
                name: 'model'
            },
            {
                name: 'description'
            },
            {
                name: 'name'
            },
            {
                name: 'provider'
            },
            {
                name: 'max_tokens'
            },
            {
                name: 'temperature'
            },
            {
                name: 'top_p'
            },
            {
                name: 'stop'
            },
            {
                name: 'presence_penalty'
            },
            {
                name: 'frequency_penalty'
            },
            {
                name: 'other'
            },
            {
                name: 'seed'
            },
            {
                name: 'response_format'
            },
            {
                name: 'project'
            },
            {
                name: 'project_id'
            },
            {
                name: 'experiment'
            },
            {
                name: 'prompt_template'
            },
            {
                name: 'chat_template'
            },
            {
                name: 'endpoint'
            },
            {
                name: 'tools'
            },
        ]
    },
    '/model-configs/serialize-POST': {
        parameters: [
            {
                name: 'description'
            },
            {
                name: 'name'
            },
            {
                name: 'provider'
            },
            {
                name: 'model'
            },
            {
                name: 'max_tokens'
            },
            {
                name: 'temperature'
            },
            {
                name: 'top_p'
            },
            {
                name: 'stop'
            },
            {
                name: 'presence_penalty'
            },
            {
                name: 'frequency_penalty'
            },
            {
                name: 'other'
            },
            {
                name: 'seed'
            },
            {
                name: 'response_format'
            },
            {
                name: 'endpoint'
            },
            {
                name: 'chat_template'
            },
            {
                name: 'tools'
            },
            {
                name: 'prompt_template'
            },
        ]
    },
    '/projects-POST': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'feedback_types'
            },
            {
                name: 'directory_id'
            },
        ]
    },
    '/projects/{id}/feedback-types-POST': {
        parameters: [
            {
                name: 'type'
            },
            {
                name: 'id'
            },
            {
                name: 'values'
            },
            {
                name: 'class'
            },
        ]
    },
    '/projects/{id}/active-config-DELETE': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'environment'
            },
        ]
    },
    '/projects/{id}/active-experiment-DELETE': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'environment'
            },
        ]
    },
    '/projects/{id}-DELETE': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/projects/{project_id}/deployed-config/{environment_id}-DELETE': {
        parameters: [
            {
                name: 'project_id'
            },
            {
                name: 'environment_id'
            },
        ]
    },
    '/projects/{project_id}/deploy-config-PATCH': {
        parameters: [
            {
                name: 'project_id'
            },
            {
                name: 'config_id'
            },
            {
                name: 'experiment_id'
            },
            {
                name: 'environments'
            },
        ]
    },
    '/projects/{id}/export-POST': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'page'
            },
            {
                name: 'size'
            },
        ]
    },
    '/projects/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/projects/{id}/active-config-GET': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'environment'
            },
        ]
    },
    '/projects-GET': {
        parameters: [
            {
                name: 'page'
            },
            {
                name: 'size'
            },
            {
                name: 'filter'
            },
            {
                name: 'user_filter'
            },
            {
                name: 'sort_by'
            },
            {
                name: 'order'
            },
        ]
    },
    '/projects/{id}/configs-GET': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'evaluation_aggregates'
            },
        ]
    },
    '/projects/{id}/deployed-configs-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/projects/{id}-PATCH': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'name'
            },
            {
                name: 'active_experiment_id'
            },
            {
                name: 'active_config_id'
            },
            {
                name: 'positive_labels'
            },
            {
                name: 'directory_id'
            },
        ]
    },
    '/projects/{id}/feedback-types-PATCH': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/sessions-POST': {
        parameters: [
        ]
    },
    '/sessions/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/sessions-GET': {
        parameters: [
            {
                name: 'project_id'
            },
            {
                name: 'page'
            },
            {
                name: 'size'
            },
        ]
    },
}