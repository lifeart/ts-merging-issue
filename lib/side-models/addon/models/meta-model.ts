import DS from 'ember-data';

export default class MetaModel extends DS.Model.extend({
  name: 'addon-meta-model'
}) {
  // normal class body definition here
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    'meta-model': MetaModel;
  }
}
