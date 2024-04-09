@testable import Leap

import XCTest

class SimpleTest: XCTestCase {
    var leap: LeapClient!

    override func setUpWithError() throws {
        self.leap = LeapClient(
            apiKey: "API_KEY",
            basePath: "http://127.0.0.1:4120"
        )
    }

    override func tearDownWithError() throws {}

    func simpleTest() async throws {
        let expectation = XCTestExpectation(description: "API call successful")
        do {
            let result = try await self.leap.workflowRuns.getWorkflowRun(workflowRunId: "rnp_x3p27VQk6MyJfLe")
            print(result)
            expectation.fulfill()
        } catch {
            print(error)
        }
        await fulfillment(of: [expectation], timeout: 10.0)

        let expectation2 = XCTestExpectation(description: "API call successful")
        do {
            let result = try await self.leap.bulkWorkflowRuns.getBulk(bulkRunId: "rnp_x3p27VQk6MyJfLe")
            print(result)
            expectation2.fulfill()
        } catch {
            print(error)
        }
        await fulfillment(of: [expectation2], timeout: 10.0)
    }
}