import { logger } from "../global.js";
import { getList } from "./list.js";

export default function removeTemplate(name) {
  const templateList = getList();
  const i = templateList.findIndex((item) => item.name === name);
  if (i === -1) {
    logger.error(`the ${name} is not find in you template list !!!`)
  } else {

  }
  logger.success('remove successfully')
}