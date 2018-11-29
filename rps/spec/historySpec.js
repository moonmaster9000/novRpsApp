const Requests = require("../src/rps")

describe("history", function () {
    describe("no rounds", function () {
        it("should tell the ui there are no rounds", function () {
            let ui = jasmine.createSpyObj("ui", ["noRounds"])

            new Requests().getHistory(ui)

            expect(ui.noRounds).toHaveBeenCalled()
        })
    })
})