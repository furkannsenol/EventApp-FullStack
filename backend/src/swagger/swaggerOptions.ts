const options = {
    swaggerDefinition: {
        info: {
            title: 'REST API Docs',
            version: '1.0.0',
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