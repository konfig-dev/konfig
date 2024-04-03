@testable import Carbon

import XCTest

class SimpleTest: XCTestCase {
    var carbon: CarbonClient!
    var carbonWithToken: CarbonClient!

    override func setUpWithError() throws {
        self.carbon = CarbonClient(
            accessToken: nil,
            apiKey: "API_KEY",
            customerId: "CUSTOMER_ID",
            basePath: "http://127.0.0.1:4060"
        )
    }

    override func tearDownWithError() throws {}

    func testAuthMethods() async throws {
        let expectation = XCTestExpectation(description: "Token is not null")
        var token: TokenResponse?

        do {
            let tokenResponse = try await self.carbon.auth.getAccessToken()
            token = tokenResponse
            expectation.fulfill()
        } catch {
            print(error)
        }
        
        await fulfillment(of: [expectation], timeout: 10.0)

        self.carbonWithToken = CarbonClient(
            accessToken: token!.accessToken,
            apiKey: nil,
            customerId: nil,
            basePath: "http://127.0.0.1:4060"
        )

        let expectation2 = XCTestExpectation(description: "White labeling is not null")
        do {
            let _ = try await self.carbonWithToken.auth.getWhiteLabeling()
            expectation2.fulfill()
        } catch {
            print(error)
        }
        await fulfillment(of: [expectation2], timeout: 10.0)
    }

    func testVariousEndpoints() async throws {
        let expectation = XCTestExpectation(description: "API call successful")
        do {
            let pagination = Pagination(limit: 10, offset: 0)
            let orderBy = OrganizationUserDataSourceOrderByColumns.createdAt
            let orderDir = OrderDir.desc
            let filter = OrganizationUserDataSourceFilters(source: .googleDrive)
            let result = try await self.carbon.dataSources.queryUserDataSources(pagination: pagination, orderBy: orderBy, orderDir: orderDir, filters: filter)
            print(result)
            expectation.fulfill()
        } catch {
            print(error)
        }
        await fulfillment(of: [expectation], timeout: 10.0)

        let expectation2 = XCTestExpectation(description: "API call successful")
        do {
            let fileInput = S3GetFileInput(id: "ID", bucket: "BUCKET")
            let result = try await self.carbon.integrations.syncS3Files(ids: [fileInput])
            print(result)
            expectation2.fulfill()
        } catch {
            print(error)
        }
        await fulfillment(of: [expectation2], timeout: 10.0)

        let expectation3 = XCTestExpectation(description: "API call successful")
        do {
            let url = URL(fileURLWithPath: "./README.md")
            let result = try await self.carbon.files.upload(file: url)
            print(result)
            expectation3.fulfill()
        } catch {
            print(error)
        }
        await fulfillment(of: [expectation3], timeout: 10.0)

        let expectation4 = XCTestExpectation(description: "API call successful")
        do {
            let filters = OrganizationUserFilesToSyncFilters(ids: [1,2,3])
            let result = try await self.carbon.files.deleteV2(filters: filters, sendWebhook: false)
            print(result)
            expectation4.fulfill()
        } catch {
            print(error)
        }
        await fulfillment(of: [expectation4], timeout: 10.0)
    }
}