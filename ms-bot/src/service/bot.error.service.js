class BotError extends Error {
  constructor(obj) {
    super(obj.warnings[0].msg);
    this.name = 'BotError';
    this.details = obj;
  }
}
module.exports = BotError;
