import type { Schema, Attribute } from '@strapi/strapi';

export interface DefaultSeoDefaultSeo extends Schema.Component {
  collectionName: 'components_default_seo_default_seos';
  info: {
    displayName: 'DefaultSeo';
    icon: 'earth';
  };
  attributes: {
    MetaTitle: Attribute.String;
    MetaDiscription: Attribute.Text;
    ShareImage: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'default-seo.default-seo': DefaultSeoDefaultSeo;
    }
  }
}
