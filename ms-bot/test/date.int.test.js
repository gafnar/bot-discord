const { subDaysToDate } = require('../src/service/date.service');

const dateValidatorSub = [
  [14, 'number'],
  [15, 'number'],
  [11, 'number'],
  [0, 'number'],
  ['sasa', 'number'],
];

describe.each(dateValidatorSub)('dateService', (days, expected) => {
  test(`return ${expected}`, () => {
    expect(typeof subDaysToDate(days)).toBe(expected);
    expect(subDaysToDate(days)).toBe(false);
  });
});
