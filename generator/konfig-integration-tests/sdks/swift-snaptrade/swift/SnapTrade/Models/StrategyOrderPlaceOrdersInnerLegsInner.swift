//
// StrategyOrderPlaceOrdersInnerLegsInner.swift
//
// Generated by Konfig
// https://konfigthis.com
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct StrategyOrderPlaceOrdersInnerLegsInner: Codable, JSONEncodable, Hashable {

    public var legId: Int?
    public var symbol: String?
    public var symbolId: Int?
    public var legRatioQuantity: Int?
    public var side: String?
    public var avgExecPrice: Int?
    public var lastExecPrice: String?

    public init(legId: Int? = nil, symbol: String? = nil, symbolId: Int? = nil, legRatioQuantity: Int? = nil, side: String? = nil, avgExecPrice: Int? = nil, lastExecPrice: String? = nil) {
        self.legId = legId
        self.symbol = symbol
        self.symbolId = symbolId
        self.legRatioQuantity = legRatioQuantity
        self.side = side
        self.avgExecPrice = avgExecPrice
        self.lastExecPrice = lastExecPrice
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case legId
        case symbol
        case symbolId
        case legRatioQuantity
        case side
        case avgExecPrice
        case lastExecPrice
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
        try container.encodeIfPresent(legId, forKey: .legId)
        try container.encodeIfPresent(symbol, forKey: .symbol)
        try container.encodeIfPresent(symbolId, forKey: .symbolId)
        try container.encodeIfPresent(legRatioQuantity, forKey: .legRatioQuantity)
        try container.encodeIfPresent(side, forKey: .side)
        try container.encodeIfPresent(avgExecPrice, forKey: .avgExecPrice)
        try container.encodeIfPresent(lastExecPrice, forKey: .lastExecPrice)
        var additionalPropertiesContainer = encoder.container(keyedBy: String.self)
        try additionalPropertiesContainer.encodeMap(additionalProperties)
    }

    // Decodable protocol methods

    public init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)

        legId = try container.decodeIfPresent(Int.self, forKey: .legId)
        symbol = try container.decodeIfPresent(String.self, forKey: .symbol)
        symbolId = try container.decodeIfPresent(Int.self, forKey: .symbolId)
        legRatioQuantity = try container.decodeIfPresent(Int.self, forKey: .legRatioQuantity)
        side = try container.decodeIfPresent(String.self, forKey: .side)
        avgExecPrice = try container.decodeIfPresent(Int.self, forKey: .avgExecPrice)
        lastExecPrice = try container.decodeIfPresent(String.self, forKey: .lastExecPrice)
        var nonAdditionalPropertyKeys = Set<String>()
        nonAdditionalPropertyKeys.insert("legId")
        nonAdditionalPropertyKeys.insert("symbol")
        nonAdditionalPropertyKeys.insert("symbolId")
        nonAdditionalPropertyKeys.insert("legRatioQuantity")
        nonAdditionalPropertyKeys.insert("side")
        nonAdditionalPropertyKeys.insert("avgExecPrice")
        nonAdditionalPropertyKeys.insert("lastExecPrice")
        let additionalPropertiesContainer = try decoder.container(keyedBy: String.self)
        additionalProperties = try additionalPropertiesContainer.decodeMap(AnyCodable.self, excludedKeys: nonAdditionalPropertyKeys)
    }
}
