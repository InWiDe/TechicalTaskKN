export default {
  swagger: '2.0',
  info: {
    version: '1.0.0', // version of the OpenAPI Specification
    title: 'K+N Assignment',
    description: 'K+N Application API',
    license: {
      name: 'MIT',
      url: 'https://opensource.org/licenses/MIT'
    }
  },
  host: 'localhost:8080',
  basePath: '/',
  tags: [
    {
      name: 'Data Operations',
      description: 'API for K+N Application'
    }
  ],
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
  paths: {
    '/data/{from}/{to}': {
      parameters: [{
        name: 'from',
        type: 'string',
        in: 'path',
        description: 'from the specific date: MM-DD-YY'
      }, {
        name: 'to',
        type: 'string',
        in: 'path',
        description: 'to the specific date: MM-DD-YY'
      }],
      get: {
        tags: ['Data Operations'],
        summary: 'Get all processed data',
        responses: {
          200: {
            description: 'OK'
          },
          404: {
            description: 'Not found'
          },
          400: {
            description: 'Bad Request'
          }
        }
      }
    }
  },
  definitions: {
    Data: {
      properties: {
        _id: {
          type: 'integer',
          uniqueItems: true
        },
        code: {
          type: 'string'
        },
        name: {
          type: 'string'
        },
        date: {
          type: 'string'
        }
      }
    },
    ProcessedData: {
      properties: {
        year: {
          type: 'string'
        },
        quantity: {
          type: 'integer'
        }
      }
    }
  }
}
