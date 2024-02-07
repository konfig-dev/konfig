@testable import SnapTrade

import XCTest

class SimpleTest: XCTestCase {
    override func setUpWithError() throws {
        SnapTradeAPI.basePath = "https://127.0.0.1:4082"
    }

    override func tearDownWithError() throws {}

    func testGeneratePaymentLink() throws {
        let expectation = XCTestExpectation(description: "Response is not null")
        APIStatusAPI.check() { response, error in
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
}