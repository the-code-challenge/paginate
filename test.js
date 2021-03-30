const challengeFunction = require('./index.js')
const assert = require('assert')

describe('ChallengeTemplate', () => {

    /**
     * TEST DESCRIPTION
     */
    it('Test1', () => {

        let result = challengeFunction(1)
        let expected = 1

        assert.strictEqual(result,expected)
    })

    /**
     * TEST DESCRIPTION
     */
    it('Test2', () => {
        let result = challengeFunction(2)
        let expected = 2

        assert.strictEqual(result,expected)
    })

    /**
     * TEST DESCRIPTION
     */
    it('Test3', () => {
        let result = challengeFunction(3)
        let expected = 3

        assert.strictEqual(result,expected)
    })

})
