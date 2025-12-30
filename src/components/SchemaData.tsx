
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SchemaType } from '../utils/schemaUtils';

interface SchemaDataProps {
  type: SchemaType | SchemaType[];
  data: Record<string, any> | Record<string, any>[];
}

export const SchemaData = ({ type, data }: SchemaDataProps) => {
  // Handle multiple schemas
  if (Array.isArray(type) && Array.isArray(data) && type.length === data.length) {
    const schemas = type.map((schemaType, index) => ({
      '@context': 'https://schema.org',
      '@type': schemaType,
      ...data[index]
    }));
    
    return (
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemas)}
        </script>
      </Helmet>
    );
  }
  
  // Handle single schema (backward compatible)
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...(Array.isArray(data) ? data[0] : data)
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default SchemaData;
