import MetaModel from 'side-models/models/meta-model';

export default class BaseModel extends MetaModel.extend({
  baseName: 'baseModel'
}) {
  // normal class body definition here
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    'base-model': BaseModel;
  }
}
