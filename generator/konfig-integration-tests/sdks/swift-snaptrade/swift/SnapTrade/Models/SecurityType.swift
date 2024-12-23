//
// SecurityType.swift
//
// Generated by Konfig
// https://konfigthis.com
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

/** Security Type */
public struct SecurityType: Codable, JSONEncodable, Hashable {

    public var id: String?
    public var code: String?
    public var description: String?
    public var isSupported: Bool?

    public init(id: String? = nil, code: String? = nil, description: String? = nil, isSupported: Bool? = nil) {
        self.id = id
        self.code = code
        self.description = description
        self.isSupported = isSupported
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case id
        case code
        case description
        case isSupported = "is_supported"
    }

    public var additionalProperties: [String: AnyCodable] = [:]

    public subscript(key: String) -> AnyCodable? {
        get {
            if let value = additionalProperties[key] {
                return value
            }
            return nil
        }

        set {
            additionalProperties[key] = newValue
        }
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(id, forKey: .id)
        try container.encodeIfPresent(code, forKey: .code)
        try container.encodeIfPresent(description, forKey: .description)
        try container.encodeIfPresent(isSupported, forKey: .isSupported)
        var additionalPropertiesContainer = encoder.container(keyedBy: String.self)
        try additionalPropertiesContainer.encodeMap(additionalProperties)
    }

    // Decodable protocol methods

    public init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)

        id = try container.decodeIfPresent(String.self, forKey: .id)
        code = try container.decodeIfPresent(String.self, forKey: .code)
        description = try container.decodeIfPresent(String.self, forKey: .description)
        isSupported = try container.decodeIfPresent(Bool.self, forKey: .isSupported)
        var nonAdditionalPropertyKeys = Set<String>()
        nonAdditionalPropertyKeys.insert("id")
        nonAdditionalPropertyKeys.insert("code")
        nonAdditionalPropertyKeys.insert("description")
        nonAdditionalPropertyKeys.insert("is_supported")
        let additionalPropertiesContainer = try decoder.container(keyedBy: String.self)
        additionalProperties = try additionalPropertiesContainer.decodeMap(AnyCodable.self, excludedKeys: nonAdditionalPropertyKeys)
    }
}

