exports.config = {
    framework: 'jasmine',
    specs: ['./users/user.component.e2e-spec.ts'], 
  
    capabilities: {
      browserName: 'chrome' 
    },
  
    directConnect: true, 
  
    baseUrl: 'http://localhost:4200', 
  
    onPrepare: function() {
        
    }
  };
  