import BaseModel from './base-model';
import { computed } from "@ember/object";

export default class MetaModel extends BaseModel.extend({
  fullName: computed('name', 'baseName', function(){
    return this.name + '/' + this.baseName;
  })
}) {
  // normal class body definition here
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    'metaModel': MetaModel;
  }
}
