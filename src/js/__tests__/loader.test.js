import GameSavingLoader from '../gameloader';

test('Должна создавать объект типа GameSaving', (done) => {
  const result = new GameSavingLoader();
  result.load().then((saving) => expect(JSON.parse(saving)).toEqual(
    {
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1, name: 'Hitman', level: 10, points: 2000,
      },
    },
  ));
  done();
});

test('Если promise будет выполнен с ошибкой', () => {
  expect.assertions(1);
  const result = new GameSavingLoader();
  return result.load().catch((e) => expect(e).toMatch('error'));
});
