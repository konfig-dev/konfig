type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/authorize-POST': {
        parameters: [
            {
                name: 'client_id'
            },
            {
                name: 'client_secret'
            },
            {
                name: 'audience'
            },
            {
                name: 'use_cache'
            },
        ]
    },
    '/leads/{code}-DELETE': {
        parameters: [
            {
                name: 'code'
            },
        ]
    },
    '/leads-POST': {
        parameters: [
            {
                name: 'first_name'
            },
            {
                name: 'last_name'
            },
            {
                name: 'lead_type'
            },
            {
                name: 'lead_record_type'
            },
            {
                name: 'description'
            },
            {
                name: 'external_id'
            },
            {
                name: 'lead_source'
            },
            {
                name: 'email'
            },
            {
                name: 'phone'
            },
            {
                name: 'origin_postal_code'
            },
            {
                name: 'origin_street'
            },
            {
                name: 'origin_city'
            },
            {
                name: 'origin_state'
            },
            {
                name: 'origin_square_feet'
            },
            {
                name: 'destination_postal_code'
            },
            {
                name: 'destination_street'
            },
            {
                name: 'destination_city'
            },
            {
                name: 'destination_state'
            },
            {
                name: 'clickid'
            },
            {
                name: 'gclid'
            },
            {
                name: 'utm_medium'
            },
            {
                name: 'utm_source'
            },
            {
                name: 'utm_campaign'
            },
            {
                name: 'msclkid'
            },
            {
                name: 'load_date'
            },
            {
                name: 'close_date'
            },
        ]
    },
    '/leads/{code}-GET': {
        parameters: [
            {
                name: 'code'
            },
        ]
    },
    '/leads-GET': {
        parameters: [
            {
                name: 'email'
            },
        ]
    },
    '/leads/{code}-PATCH': {
        parameters: [
            {
                name: 'description'
            },
            {
                name: 'code'
            },
            {
                name: 'close_date'
            },
            {
                name: 'load_date'
            },
        ]
    },
    '/locations-POST': {
        parameters: [
            {
                name: 'line_1'
            },
            {
                name: 'city'
            },
            {
                name: 'state'
            },
            {
                name: 'postal_code'
            },
            {
                name: 'property_type'
            },
            {
                name: 'line_2'
            },
            {
                name: 'country'
            },
            {
                name: 'rooms'
            },
            {
                name: 'area'
            },
            {
                name: 'garage'
            },
            {
                name: 'stories'
            },
            {
                name: 'floor'
            },
            {
                name: 'attic'
            },
            {
                name: 'basement'
            },
        ]
    },
    '/orders/{quote_id}-POST': {
        parameters: [
            {
                name: 'quote_id'
            },
        ]
    },
    '/postal-codes/serviceability-GET': {
        parameters: [
            {
                name: 'origin_postal_code'
            },
            {
                name: 'destination_postal_code'
            },
        ]
    },
    '/quotes/service_groups/{service_group_id}/locations-PUT': {
        parameters: [
            {
                name: 'service_group_id'
            },
        ]
    },
    '/quotes/{quote_id}/service-groups-POST': {
        parameters: [
            {
                name: 'service_codes'
            },
            {
                name: 'locations'
            },
            {
                name: 'start_datetime'
            },
            {
                name: 'quote_id'
            },
        ]
    },
    '/quotes/{quote_id}/service_groups/{service_group_id}/flexible-POST': {
        parameters: [
            {
                name: 'start_date'
            },
            {
                name: 'end_date'
            },
            {
                name: 'quote_id'
            },
            {
                name: 'service_group_id'
            },
            {
                name: 'local_hours'
            },
        ]
    },
    '/quotes/{quote_id}/service-group/{service_group_id}-DELETE': {
        parameters: [
            {
                name: 'quote_id'
            },
            {
                name: 'service_group_id'
            },
        ]
    },
    '/quotes/{quote_id}/service-group/{service_group_id}-GET': {
        parameters: [
            {
                name: 'quote_id'
            },
            {
                name: 'service_group_id'
            },
        ]
    },
    '/quotes/{quote_id}/service-groups/{service_group_id}-PATCH': {
        parameters: [
            {
                name: 'flexible_quote_id'
            },
            {
                name: 'quote_id'
            },
            {
                name: 'service_group_id'
            },
        ]
    },
    '/quotes/{quote_id}/service-groups/{service_group_id}/services-PUT': {
        parameters: [
            {
                name: 'service_workers'
            },
            {
                name: 'quote_id'
            },
            {
                name: 'service_group_id'
            },
            {
                name: 'duration'
            },
        ]
    },
    '/quotes-POST': {
        parameters: [
            {
                name: 'customer'
            },
            {
                name: 'start_datetime'
            },
            {
                name: 'service_code'
            },
            {
                name: 'locations'
            },
        ]
    },
}