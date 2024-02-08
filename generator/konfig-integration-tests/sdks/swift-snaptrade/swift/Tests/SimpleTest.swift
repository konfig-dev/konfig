@testable import SnapTrade

import XCTest


func isRunningInDocker() -> Bool {
    let fileManager = FileManager.default
    return fileManager.fileExists(atPath: "/.dockerenv")
}

class SimpleTest: XCTestCase {
    override func setUpWithError() throws {
        // Set the base path to the local server http://127.0.0.1:4082
        // if running in docker, then set to http://host.docker.internal:4082
        SnapTradeAPI.basePath = isRunningInDocker() ? "http://host.docker.internal:4082" : "http://127.0.0.1:4082"
    }

    override func tearDownWithError() throws {}

    func testStatusCheck() throws {
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

    func testStatusCheckAsyncAwait() async throws {
        let response = try await APIStatusAPI.checkAsync()

        // print the response
        print(response)

        XCTAssertNotNil(response)
    }
}