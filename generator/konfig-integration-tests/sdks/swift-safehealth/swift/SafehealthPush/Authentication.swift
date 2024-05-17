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
    ///   - prefix: The prefix to use for the authentication parameter.
    /// - Returns: The modified headers and URL components.
    static func setAuthenticationParameters(headers: inout [String: String], url: inout URLComponents?, in location: String, name: String, value: String?, prefix: String?) throws {
        guard value != nil, !(value?.isEmpty ?? true) else {
            return // Sometimes there are multiple security schemes, and unused schemes may have an empty value
        }

        guard url != nil else {
            throw NSError(domain: "AuthenticationError", code: 0, userInfo: [NSLocalizedDescriptionKey: "URL is empty"])
        }

        let finalValue = prefix != nil ? "\(prefix!)\(value!)" : value!

        switch location {
        case "query":
            if url?.queryItems == nil {
                url?.queryItems = []
            }
            url?.queryItems?.append(URLQueryItem(name: name, value: finalValue))
        case "path":
            // Assuming the path component is "/path/{name}/"
            let updatedPath = url?.path.replacingOccurrences(of: "{\(name)}", with: finalValue)
            url?.path = updatedPath!
        case "header":
            headers[name] = finalValue
        default:
            break
        }
    }
}