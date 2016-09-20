import fileExists from 'node-file-exists';
import { join } from 'path';
import { runnerPath } from '../../constants';


const nestedPath = [__dirname, '..', '..', '..', '..'].concat(runnerPath);
const flattenedPath = [__dirname, '..', '..', '..', 'node_modules'].concat(runnerPath);

export default function getRunner(): string {
  // runner, location may differ based on NPM version
  if (fileExists(join(...nestedPath))) {
    return join(...nestedPath);
  } else if (fileExists(join(...flattenedPath))) {
    return join(...flattenedPath);
  }
  throw new Error('Error finding test runner.');
}
