import os from 'os';
import { execaCommand } from 'execa'
import { logger, __dirname } from '../global.js'

export default async function openFileManager() {
  const platform = os.platform();
  let commandStr = '';
  switch (platform) {
    case 'darwin':
      commandStr = `open ${__dirname}`
      break;
    case 'linux':
      commandStr = `nautilus ${__dirname}`
      break;
    case 'win32':
      commandStr = `explorer ${__dirname}`
      break;
    default:
      logger.error("Unable to determine operating system!")
  }
  try {
    await execaCommand(commandStr);
  } catch (e) {
    logger.error(e.toString())
  }
}