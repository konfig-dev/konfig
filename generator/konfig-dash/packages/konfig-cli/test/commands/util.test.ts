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
    await git.init()
    await git.addConfig('user.name', 'konfig-dev', false, 'local')
    await git.addConfig(
      'user.email',
      'engineering@konfigthis.com',
      false,
      'local'
    )

    const typescriptOutputDirectory = path.join(testDir, 'typescript')
    const phpOutputDirectory = path.join(testDir, 'php')
    const csharpOutputDirectory = path.join(testDir, 'csharp')
    fs.ensureDirSync(testDir)
    const konfigYamlInput: KonfigYamlInputType = {
      specPath: 'big-oas.yaml',
      additionalGenerators: {
        cs: {
          clientName: 'Acme',
          generator: 'csharp',
          outputDirectory: 'csharp',
          version: '1.0.0',
          packageName: 'Acme.Net',
          logoPath: 'logo.png',
          git: {
            userId: 'konfig-dev',
            repoId: 'acme-sdks',
          },
        },
      },
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
    fs.writeFileSync(
      path.join(typescriptOutputDirectory, 'test-2.txt'),
      'test\n'
    )

    // do the same for csharp
    fs.ensureDirSync(csharpOutputDirectory)
    fs.writeFileSync(path.join(csharpOutputDirectory, 'test.txt'), 'test\n')
    // add a .gitignore with Debug/ in it and add a file under src/Acme.Net.Test/bin/Debug/
    const debugDir = path.join(
      csharpOutputDirectory,
      'src',
      'Acme.Net.Test',
      'bin',
      'Debug'
    )
    fs.ensureDirSync(debugDir)
    fs.writeFileSync(path.join(debugDir, 'test.txt'), 'test\n')
    fs.writeFileSync(
      path.join(csharpOutputDirectory, '.gitignore'),
      '[Dd]ebug/\n[Bb]in/'
    )

    // make PHP a submodule of the testDir
    fs.ensureDirSync(phpOutputDirectory)
    fs.writeFileSync(path.join(phpOutputDirectory, 'test.txt'), 'test\n')
    fs.writeFileSync(path.join(phpOutputDirectory, 'test-2.txt'), 'test\n')
    fs.writeFileSync(
      path.join(phpOutputDirectory, '.gitignore'),
      'test-2.txt\n'
    )
    const php = Git(phpOutputDirectory)
    await php.init()
    await php.addConfig('user.name', 'konfig-dev', false, 'local')
    await php.addConfig(
      'user.email',
      'engineering@konfigthis.com',
      false,
      'local'
    )
    await php.add('test.txt')
    await php.commit('init')
    await git.subModule(['add', phpOutputDirectory])

    const konfigYaml = KonfigYaml.parse(konfigYamlInput)

    const statistics = await generateStatisticsFileForSdks({
      konfigYaml,
      cwd: testDir,
    })

    expect(statistics).toMatchInlineSnapshot(`
      "# SDK Statistics

      | SDK Name | Lines of Code |
      | -------- | ------------- |
      | typescript | 2 |
      | php | 2 |
      | cs | 2 |
      | **Total** | 6 |
      "
    `)
  })
})
