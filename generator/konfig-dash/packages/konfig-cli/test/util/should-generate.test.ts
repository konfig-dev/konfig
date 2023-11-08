import { shouldGenerate } from '../../src/util/should-generate'
import { expect } from 'chai'

describe('shouldGenerate', () => {
  it('no filter', () => {
    expect(
      shouldGenerate({
        generatorName: 'go',
        generatorFilter: null,
        generators: {
          go: {
            language: 'go',
            outputDirectory: 'go',
            defaultChangesetBumpType: 'patch',
            defaultTimeout: 0,
            userAgent: '',
            packageName: 'test',
            version: '1.0.0',
            git: { repoName: '', host: '', userId: '', repoId: '' },
          },
        },
      })
    ).to.eql({
      language: 'go',
      outputDirectory: 'go',
      defaultTimeout: 0,
      userAgent: '',
      packageName: 'test',
      version: '1.0.0',
      git: { repoName: '', host: '', userId: '', repoId: '' },
    })
  })
  it('included in filter', () => {
    expect(
      shouldGenerate({
        generatorName: 'go',
        generatorFilter: ['go'],
        generators: {
          go: {
            language: 'go',
            outputDirectory: 'go',
            defaultTimeout: 0,
            defaultChangesetBumpType: 'patch',
            userAgent: '',
            packageName: 'test',
            version: '1.0.0',
            git: { repoName: '', host: '', userId: '', repoId: '' },
          },
        },
      })
    ).to.eql({
      language: 'go',
      outputDirectory: 'go',
      defaultTimeout: 0,
      userAgent: '',
      packageName: 'test',
      version: '1.0.0',
      git: { repoName: '', host: '', userId: '', repoId: '' },
    })
  })
  it('undefined', () => {
    expect(
      shouldGenerate({
        generatorName: 'go',
        generatorFilter: [],
        generators: {
          go: {
            language: 'go',
            outputDirectory: 'go',
            defaultTimeout: 0,
            userAgent: '',
            packageName: 'test',
            defaultChangesetBumpType: 'patch',
            version: '1.0.0',
            git: { repoName: '', host: '', userId: '', repoId: '' },
          },
        },
      })
    ).to.be.undefined
    expect(
      shouldGenerate({
        generatorName: 'go',
        generatorFilter: ['python'],
        generators: {
          go: {
            language: 'go',
            outputDirectory: 'go',
            defaultTimeout: 0,
            defaultChangesetBumpType: 'patch',
            userAgent: '',
            packageName: 'test',
            version: '1.0.0',
            git: { repoName: '', host: '', userId: '', repoId: '' },
          },
        },
      })
    ).to.be.undefined
    expect(
      shouldGenerate({
        generatorName: 'go',
        generatorFilter: ['go'],
        generators: {},
      })
    ).to.be.undefined
  })
})
