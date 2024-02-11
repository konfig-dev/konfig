@testable import SnapTrade

import XCTest


class ClientInstanceTest: XCTestCase {
    var snapTrade: SnapTradeClient!

    override func setUpWithError() throws {
        self.snapTrade = SnapTradeClient(
            partnerClientId: "clientId",
            partnerSignature: "signature",
            partnerTimestamp: "timestamp",
            basePath: "http://127.0.0.1:4082"
        )
    }

    override func tearDownWithError() throws {}

    func testRegisterSnapTradeUser() async throws {
        let response = try await self.snapTrade.authentication.registerSnapTradeUser(userId: "1234")

        // print the response
        print(response)

        XCTAssertNotNil(response)
    }
}