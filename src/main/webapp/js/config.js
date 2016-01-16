System.config({
  //use typescript for compilation
  transpiler: 'typescript',
  //typescript compiler options
  typescriptOptions: {
    emitDecoratorMetadata: true,
  },
  packages: {
    'angular2-google-maps': {
      defaultExtension: 'js'
    }
  }
});