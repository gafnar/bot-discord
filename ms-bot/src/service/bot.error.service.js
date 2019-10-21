class botError extends Error {
  constructor(obj) {
    super(obj.warnings[0].msg);
    this.name = 'botError';
    this.details = obj;
  }
}
module.exports = botError;