import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  async load() {
    const data = await read(); // возвращается Promise!
    const value = await json(data); // возвращается Promise!
    return value;
  }
}
