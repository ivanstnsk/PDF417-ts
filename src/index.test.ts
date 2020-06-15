import { printTestMessage } from './index';

test('Test print message', () => {
  expect(printTestMessage('one')).toBe('Test one');
});