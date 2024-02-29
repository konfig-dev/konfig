type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/simple-endpoint-GET': {
        parameters: [
            {
                name: 'input'
            },
        ]
    },
}