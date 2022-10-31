#!/usr/bin/env node

try {
  require.resolve('@neptunelabs/fsi-samples-framework/start-sample')
}
catch{
  console.warn('Missing modules.')
  console.warn('Please install node modules first.')
  console.warn('npm install')
  console.warn('or')
  console.warn('yarn install')

  process.exit(1)
}
