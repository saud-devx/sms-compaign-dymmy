import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { testStrapiConnection, testStrapiContentTypes } from '@/utils/strapiTest';
import { CONTENT_SOURCE } from '@/api/hybrid';

const StrapiStatus = () => {
  const [connectionStatus, setConnectionStatus] = useState<any>(null);
  const [contentTypesStatus, setContentTypesStatus] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const checkConnection = async () => {
    setIsLoading(true);
    try {
      const connStatus = await testStrapiConnection();
      setConnectionStatus(connStatus);

      if (connStatus.isConnected) {
        const ctStatus = await testStrapiContentTypes();
        setContentTypesStatus(ctStatus);
      }
    } catch (error) {
      setConnectionStatus({
        isConnected: false,
        message: 'Error testing connection',
        details: { error: error instanceof Error ? error.message : 'Unknown error' }
      });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    // Only auto-check if we're configured to use Strapi
    if (CONTENT_SOURCE.posts === 'strapi' || CONTENT_SOURCE.pages === 'strapi') {
      checkConnection();
    }
  }, []);

  if (CONTENT_SOURCE.posts !== 'strapi' && CONTENT_SOURCE.pages !== 'strapi') {
    return (
      <Card className="p-4 bg-blue-50 border-blue-200">
        <p className="text-blue-800">
          📝 App is currently using {CONTENT_SOURCE.posts} for content. 
          To test Strapi, update CONTENT_SOURCE in src/api/hybrid.ts
        </p>
      </Card>
    );
  }

  return (
    <Card className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Strapi CMS Status</h3>
        <Button onClick={checkConnection} disabled={isLoading} variant="outline" size="sm">
          {isLoading ? 'Testing...' : 'Test Connection'}
        </Button>
      </div>

      {connectionStatus && (
        <div className={`p-3 rounded-md ${
          connectionStatus.isConnected 
            ? 'bg-green-50 border border-green-200' 
            : 'bg-red-50 border border-red-200'
        }`}>
          <p className={connectionStatus.isConnected ? 'text-green-800' : 'text-red-800'}>
            {connectionStatus.message}
          </p>
          {connectionStatus.details && (
            <pre className="mt-2 text-xs opacity-70">
              {JSON.stringify(connectionStatus.details, null, 2)}
            </pre>
          )}
        </div>
      )}

      {contentTypesStatus && connectionStatus?.isConnected && (
        <div className="space-y-2">
          <h4 className="font-medium">Content Types Status:</h4>
          <div className="grid grid-cols-2 gap-3">
            <div className={`p-2 rounded text-center ${
              contentTypesStatus.posts?.exists 
                ? 'bg-green-100 text-green-800' 
                : 'bg-yellow-100 text-yellow-800'
            }`}>
              <div className="font-medium">Posts</div>
              <div className="text-sm">
                {contentTypesStatus.posts?.exists ? '✅ Available' : '⚠️ Not found'}
              </div>
            </div>
            <div className={`p-2 rounded text-center ${
              contentTypesStatus.pages?.exists 
                ? 'bg-green-100 text-green-800' 
                : 'bg-yellow-100 text-yellow-800'
            }`}>
              <div className="font-medium">Pages</div>
              <div className="text-sm">
                {contentTypesStatus.pages?.exists ? '✅ Available' : '⚠️ Not found'}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="text-sm text-gray-600 space-y-1">
        <p>📍 <strong>Expected Strapi URL:</strong> http://localhost:1337</p>
        <p>🔧 <strong>Configure content types:</strong> Posts and Pages collections needed</p>
        <p>🔑 <strong>API Permissions:</strong> Enable public access for find/findOne operations</p>
      </div>
    </Card>
  );
};

export default StrapiStatus;