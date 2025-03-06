param storageAccountName string ='stracclscbicepdemo'
param location string = 'eastus'
param skuName string = 'Standard_LRS'

resource storageAccount 'Microsoft.Storage/storageAccounts@2023-05-01' = {
  name: storageAccountName
  location: location
  kind: 'StorageV2'
  properties: {
    accessTier: 'Hot'
  }
  sku: {
    name: skuName
  }
}
