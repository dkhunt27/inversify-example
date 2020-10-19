
const InjectableTypes = {
  LibAConfigProvider: Symbol.for('LibAConfigProvider'),
  LibBService: Symbol.for('LibBService'),
  ProgCService: Symbol.for('ProgCService'),

  // should have to include dependencies of libraries
  Axios: Symbol.for("Axios"),
  LibAService: Symbol.for("LibAService")
};

export { InjectableTypes };


