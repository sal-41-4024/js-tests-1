import getHealthStatus from '../app';

test('returns correct string with 60', () => {
  expect(getHealthStatus({ name: 'Warrior', health: 60 }))
    .toBe('healthy');
});

test('returns correct string with 50', () => {
  expect(getHealthStatus({ name: 'Warrior', health: 50 }))
    .toBe('wounded');
});

test('returns correct string with 40', () => {
  expect(getHealthStatus({ name: 'Warrior', health: 40 }))
    .toBe('wounded');
});

test('returns correct string with 15', () => {
  expect(getHealthStatus({ name: 'Warrior', health: 15 }))
    .toBe('wounded');
});

test('returns correct string with 10', () => {
  expect(getHealthStatus({ name: 'Warrior', health: 10 }))
    .toBe('critical');
});

test('returns correct string with health absence', () => {
  expect(getHealthStatus({ name: 'Warrior' }))
    .toBe(undefined);
});
