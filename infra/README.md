# AWS CDK Infrastructure

This directory contains AWS CDK code to provision infrastructure for the One-Time Secret app.

## Prerequisites
- Node.js >= 14
- AWS CLI configured (`aws configure`)
- AWS CDK installed globally: `npm install -g aws-cdk`

## Usage
1. Install dependencies:
   cd infra
   npm install
2. Bootstrap your AWS environment (once per account/region):
   cdk bootstrap
3. Synthesize the CloudFormation template:
   cdk synth
4. Deploy the stack:
   cdk deploy

## What it creates
- S3 bucket for secrets (can be extended for Secrets Manager, ECS, etc.) 