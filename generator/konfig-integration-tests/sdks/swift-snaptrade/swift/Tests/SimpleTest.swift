@testable import SnapTrade

import XCTest


class SimpleTest: XCTestCase {
    override func setUpWithError() throws {
        SnapTradeAPI.basePath = "http://127.0.0.1:4082"
        SnapTradeAPI.partnerSignature = "signature"
        SnapTradeAPI.partnerClientId = "clientId"
        SnapTradeAPI.partnerTimestamp = "timestamp"
    }

    override func tearDownWithError() throws {}

    func testStatusCheck() throws {
        let expectation = XCTestExpectation(description: "Response is not null")
        ApiStatusAPI.checkSync() { response, error in
            guard error == nil else {
                print(error!)
                return
            }

            if response != nil {
                expectation.fulfill()
            }
        }
        wait(for: [expectation], timeout: 10.0)
    }

    // func testLoginSnapTradeUser() async throws {
    //     let response = try await AuthenticationAPI.loginSnapTradeUserAsync(userId: "1234", userSecret: "1234")

    //     // print the response
    //     print(response)

    //     XCTAssertNotNil(response)
    // }

    func testRegisterSnapTradeUser() async throws {
        let response = try await AuthenticationAPI.registerSnapTradeUser(userId: "1234")

        // print the response
        print(response)

        XCTAssertNotNil(response)
    }
}