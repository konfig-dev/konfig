import * as fs from 'fs-extra'
import { KonfigYaml, KonfigYamlInputType } from 'konfig-lib'
import { generateStatisticsFileForSdks } from '../../src/util/generate-statistics-file-for-sdks'
import * as os from 'os'
import * as path from 'path'
import Git from 'simple-git'

describe('util', () => {
  it('generateStatisticsFileForSdks', async () => {
    // setup a temporary directory with git initialized and a file with a couple lines it
    // then run generateStatisticsFileForSdks and check that the output is as expected
    const testDir = path.join(os.tmpdir(), 'konfig-cli-util-test-dir')
    console.log('testDir:', testDir)

    // delete testDir if it exists and recreate it
    if (fs.existsSync(testDir)) {
      fs.removeSync(testDir)
    }
    fs.ensureDirSync(testDir)

    // init git directory in tmpDir using "simple-git"
    const git = Git(testDir)
    await git.addConfig('user.name', 'konfig-dev', false, 'local')
    await git.addConfig(
      'user.email',
      'engineering@konfigthis.com',
      false,
      'local'
    )
    await git.init()

    const typescriptOutputDirectory = path.join(testDir, 'typescript')
    const phpOutputDirectory = path.join(testDir, 'php')
    fs.ensureDirSync(testDir)
    const konfigYamlInput: KonfigYamlInputType = {
      specPath: 'big-oas.yaml',
      generators: {
        typescript: {
          outputDirectory: 'typescript',
          npmName: 'acme-test-sdk',
          version: '1.0.0',
          clientName: 'Acme',
          git: {
            userId: 'konfig-dev',
            repoId: 'acme-sdks',
          },
        },
        php: {
          outputDirectory: 'php',
          invokerPackage: 'acme-test-sdk',
          version: '1.0.0',
          packageName: 'acme-php-sdk',
          git: {
            userId: 'konfig-dev',
            repoId: 'acme-sdks',
          },
        },
      },
    }
    // put a file inside all output directories with 1 line, ensure a directory exists first
    fs.ensureDirSync(typescriptOutputDirectory)
    fs.writeFileSync(path.join(typescriptOutputDirectory, 'test.txt'), 'test\n')

    // make PHP a submodule of the testDir
    fs.ensureDirSync(phpOutputDirectory)
    fs.writeFileSync(path.join(phpOutputDirectory, 'test.txt'), 'test\n')
    fs.writeFileSync(path.join(phpOutputDirectory, 'test-2.txt'), 'test\n')
    const php = Git(phpOutputDirectory)
    await php.init()
    await php.add('test.txt')
    await php.commit('init')
    await git.subModule(['add', phpOutputDirectory])

    const konfigYaml = KonfigYaml.parse(konfigYamlInput)

    const statistics = generateStatisticsFileForSdks({
      konfigYaml,
      cwd: testDir,
    })

    expect(statistics).toMatchInlineSnapshot(`
      "# SDK Statistics

      | SDK Name | Lines of Code |
      | -------- | ------------- |
      | typescript | 1 |
      | php | 2 |
      | **Total** | 3 |
      "
    `)
  })
})
