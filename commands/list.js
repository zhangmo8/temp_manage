import { require } from '../global.js'

export default function viewList() {
  const templateJson = require('./template.json');
  templateJson.forEach((item, i) => {
    console.log(`${i + 1}: ${item.name}`);
  });
}