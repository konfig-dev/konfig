export const ensureSetup = `import * as fs from 'fs';
import execa from 'execa';

const directory = 'typescript'; // Replace with the actual directory path you want to check
if (fs.existsSync(directory)) {
  execa.commandSync('yarn', { cwd: directory, shell: true });
  execa.commandSync('yarn build', { cwd: directory, shell: true });
}
`;
