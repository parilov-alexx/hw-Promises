import GameSavingLoader from './gameloader';

const result = new GameSavingLoader();
result.load().then((saving) => saving, (error) => {
  throw error;
});
