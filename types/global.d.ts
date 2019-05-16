// Types for compiled templates
declare module 'ts-app/templates/*' { 
  import { TemplateFactory } from 'htmlbars-inline-precompile';
  const tmpl: TemplateFactory;
  export default tmpl;
}
