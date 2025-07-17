import { Stack, StackProps, RemovalPolicy } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { CfnOutput } from 'aws-cdk-lib';

export class SecretManagerStack extends Stack {
  public readonly secretsBucket: Bucket;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // S3 bucket for storing secrets (can be extended for real use)
    this.secretsBucket = new Bucket(this, 'SecretsBucket', {
      removalPolicy: RemovalPolicy.DESTROY, // NOT for production!
      autoDeleteObjects: true, // NOT for production!
    });

    new CfnOutput(this, 'SecretsBucketName', {
      value: this.secretsBucket.bucketName,
      exportName: 'SecretsBucketName',
    });

    // TODO: Add Secrets Manager, ECS, etc.
  }
} 