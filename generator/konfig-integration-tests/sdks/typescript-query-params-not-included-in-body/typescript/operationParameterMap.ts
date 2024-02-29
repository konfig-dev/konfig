type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/test-POST': {
        parameters: [
            {
                name: 'bodyParam1'
            },
            {
                name: 'bodyParam2'
            },
            {
                name: 'queryParam1'
            },
            {
                name: 'queryParam1'
            },
        ]
    },
}