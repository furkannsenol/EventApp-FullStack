const options = {
    swaggerDefinition: {
        info: {
            title: 'REST API Docs',
            version: '1.0.0',
            description: '17bcaf6d3a99f8967c98606b11d56a0d'
        },
    },
    components: {
        schemas: {
            Category: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string',
                    },
                    // Diğer özellikleri ekleyin
                },
                required: ['name'],
            },
        },
    },
    apis: ['./src/routes/*.ts'],
};

export default options