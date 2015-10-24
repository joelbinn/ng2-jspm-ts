System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  paths: {
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "typescript": "npm:typescript@1.6.2"
  },

  packages: {
    app: {
      defaultExtension: "ts",
      meta: {
        "*.ts": {
          "loader": "typescript"
        }
      }
    }
  },

  typescriptOptions: {
    "noImplicitAny": true,
    "typeCheck": true,              // also accepts "strict"
    "tsconfig": true,               // also accepts a path
    "resolveAmbientRefs": true
  }
});
