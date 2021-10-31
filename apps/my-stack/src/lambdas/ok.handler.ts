import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  console.log('Will it update? Trigger it!!!')

  return {
    statusCode: 200,
    body: 'OK'
  };
};