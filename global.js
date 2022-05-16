import { createRequire } from 'module'
import chalk from 'chalk'
import path from 'path';
import { fileURLToPath } from 'url';

export const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const require = createRequire(import.meta.url);
 
export const logger = {
  info(text) {
    console.log(text)
  },
  success(text) {
    console.log(chalk.hex('#00c48f')(text))
  },
  warning(text) {
    console.log(chalk.hex('#ff9800')(text))
  },
  error(text) {
    console.log(chalk.hex('#f44336')(text))
  },
}
