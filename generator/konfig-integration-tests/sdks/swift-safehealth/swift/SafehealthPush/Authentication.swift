import Foundation

class Authentication {
    /// Sets the authentication parameters based on the specified location.
    ///
    /// - Parameters:
    ///   - headers: The headers dictionary to update.
    ///   - url: The URL components to update.
    ///   - location: The location where the authentication parameter should be set. Valid values are "query", "path", and "header".
    ///   - name: The name of the authentication parameter.
    ///   - value: The value of the authentication parameter.
    /// - Returns: The modified headers and URL components.
    static func setAuthenticationParameters(headers: inout [String: String], url: inout URLComponents?, in location: String, name: String, value: String?) throws {
        guard value != nil, !(value?.isEmpty ?? true) else {
            throw NSError(domain: "AuthenticationError", code: 0, userInfo: [NSLocalizedDescriptionKey: "Value for \(name) is empty"])
        }

        guard url != nil else {
            throw NSError(domain: "AuthenticationError", code: 0, userInfo: [NSLocalizedDescriptionKey: "URL is empty"])
        }

        switch location {
        case "query":
            if url?.queryItems == nil {
                url?.queryItems = []
            }
            url?.queryItems?.append(URLQueryItem(name: name, value: value))
        case "path":
            // Assuming the path component is "/path/{name}/"
            let updatedPath = url?.path.replacingOccurrences(of: "{\(name)}", with: value!)
            url?.path = updatedPath!
        case "header":
            headers[name] = value
        default:
            break
        }
    }
}