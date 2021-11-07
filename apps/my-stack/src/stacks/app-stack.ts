import * as path from 'path';

import * as cdk from '@aws-cdk/core';
import { NodejsFunction } from '@aws-cdk/aws-lambda-nodejs';

import { PublicBucket } from '@testing/cdk-constructs';

export class AppStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new NodejsFunction(this, 'test-function', {
      entry: path.join(__dirname, '..', 'lambdas', 'ok.handler.ts')
    })

    new PublicBucket(this, 'public-bucket-testing-red', {
      bucketName: 'public-bucket-testing-red',
    })
  }
}
