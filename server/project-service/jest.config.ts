import { Config } from '@jest/types'

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '^.+\\.graphql$': 'graphql-import-node/jest',
    },
    modulePathIgnorePatterns: ['src/__tests__/utils'],
}

export default config
