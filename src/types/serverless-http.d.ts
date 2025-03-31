declare module 'serverless-http' {
  import { APIGatewayProxyEvent, Context, APIGatewayProxyResult } from 'aws-lambda';

  interface ServerlessHttp {
    (app: any): (event: APIGatewayProxyEvent, context: Context) => Promise<APIGatewayProxyResult>;
  }

  const serverlessHttp: ServerlessHttp;
  export default serverlessHttp;
}
