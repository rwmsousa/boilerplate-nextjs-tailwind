'use strict';

module.exports.handler = async (event, context) => {
  console.log('Event received:', JSON.stringify(event, null, 2));

  // Lidar com requisições OPTIONS para CORS
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Amz-Date, X-Api-Key, X-Amz-Security-Token, X-Amz-User-Agent',
        'Content-Type': 'application/json'
      },
      body: ''
    };
  }

  // Verificar o caminho da requisição
  const path = event.path || 'no-path';
  const method = event.httpMethod || 'no-method';

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello from direct JS handler! Path: ${path}, Method: ${method}`,
      event: event,
      time: new Date().toISOString()
    }, null, 2),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Amz-Date, X-Api-Key, X-Amz-Security-Token, X-Amz-User-Agent'
    }
  };
};