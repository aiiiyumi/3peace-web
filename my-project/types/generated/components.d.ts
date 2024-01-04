import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentDefaultSeo extends Schema.Component {
  collectionName: 'components_component_default_seos';
  info: {
    displayName: 'defaultSeo';
    description: '';
  };
  attributes: {
    MetaTitle: Attribute.String;
    MetaDiscription: Attribute.Text;
    ShareImage: Attribute.Media;
    Favicon: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'component.default-seo': ComponentDefaultSeo;
    }
  }
}
