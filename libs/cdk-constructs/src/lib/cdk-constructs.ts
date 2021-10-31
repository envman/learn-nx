import * as cdk from '@aws-cdk/core'
import * as s3 from '@aws-cdk/aws-s3'
import * as iam from '@aws-cdk/aws-iam'

export type PublicBucketProps = Omit<s3.BucketProps, 'blockPublicAccess'>

const publicBucketPrincipal = new iam.AnyPrincipal()
export class PublicBucket extends s3.Bucket {
  constructor(scope: cdk.Construct, id: string, props: PublicBucketProps) {
    super(scope, id, {
      ...props,
      blockPublicAccess: new s3.BlockPublicAccess({ restrictPublicBuckets: false }),
    })

    const publicBucketPolicy = new iam.PolicyStatement({
      actions: ['s3:GetObject'],
      resources: [`${this.bucketArn}/*`],
      principals: [publicBucketPrincipal],
    })

    this.addToResourcePolicy(publicBucketPolicy)
  }
}