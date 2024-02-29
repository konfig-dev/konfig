operation_parameter_map = {
    '/v2/payments/upi/link-POST': {
        'parameters': [
            {
                'name': 'reference_id'
            },
            {
                'name': 'payee_account'
            },
            {
                'name': 'amount'
            },
            {
                'name': 'purpose_message'
            },
            {
                'name': 'generate_qr'
            },
            {
                'name': 'expiry_time'
            },
            {
                'name': 'customized_qr_with_logo'
            },
            {
                'name': 'generate_uri'
            },
        ]
    },
    '/v2/payments/transaction/{transaction_id}/status-GET': {
        'parameters': [
            {
                'name': 'transaction_id'
            },
        ]
    },
    '/v2/payments/collection-POST': {
        'parameters': [
            {
                'name': 'reference_id'
            },
            {
                'name': 'payer_upi'
            },
            {
                'name': 'payee_account'
            },
            {
                'name': 'amount'
            },
            {
                'name': 'purpose_message'
            },
            {
                'name': 'expiry_time'
            },
        ]
    },
    '/v2/payments/upi/refund-POST': {
        'parameters': [
            {
                'name': 'reference_id'
            },
            {
                'name': 'transaction_id'
            },
            {
                'name': 'bank_reference_number'
            },
            {
                'name': 'purpose_message'
            },
        ]
    },
    '/v2/payments/vpa/validate-POST': {
        'parameters': [
            {
                'name': 'reference_id'
            },
            {
                'name': 'upi_id'
            },
            {
                'name': 'type'
            },
        ]
    },
};