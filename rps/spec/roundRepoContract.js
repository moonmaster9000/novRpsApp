const {Round} = require("../src/rps")

function roundRepoContract(repoClass){
    describe("repo contract", function () {
        let repo

        beforeEach(function () {
            repo = new repoClass()
        })

        describe("when no rounds have been saved", function () {
            it('is empty', function () {
                expect(repo.isEmpty()).toBe(true)
            })

        })

        describe("when rounds have been saved", function () {
            let round

            beforeEach(function () {
                round = new Round()
                repo.save(round)
            })

            it("is not empty", function () {
                expect(repo.isEmpty()).toBe(false)
            })

            it("returns all saved rounds", function () {
                expect(repo.all()).toContain(round)
            })
        })
    })
}

module.exports = roundRepoContract