import { execSync } from 'child_process';

function validateEnvironment(): void {
  try {
    const nodeVersion = process.version;
    console.log(`Node.js version: ${nodeVersion}`);

    const cdkVersion = execSync('cdk --version').toString().trim();
    console.log(`CDK version: ${cdkVersion}`);

    const awsVersion = execSync('aws --version').toString().trim();
    console.log(`AWS CLI version: ${awsVersion}`);

    const callerIdentity = execSync(
      'aws sts get-caller-identity --profile sandbox'
    )
      .toString()
      .trim();
    console.log(`Caller identity: ${callerIdentity}`);

    console.log('Environment validation successful!!! ✅');
  } catch (error) {
    console.error('Environment validation failed!!! ❌');
    console.error(error);
    process.exit(1);
  }
}

validateEnvironment();
