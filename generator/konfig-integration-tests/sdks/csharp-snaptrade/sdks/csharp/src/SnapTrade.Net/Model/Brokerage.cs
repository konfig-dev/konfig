/*
 * SnapTrade
 *
 * Connect brokerage accounts to your app for live positions and trading
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: api@snaptrade.com
 * Generated by: https://konfigthis.com
 */


using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.IO;
using System.Runtime.Serialization;
using System.Text;
using System.Text.RegularExpressions;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Linq;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = SnapTrade.Net.Client.OpenAPIDateConverter;

namespace SnapTrade.Net.Model
{
    /// <summary>
    /// Brokerage
    /// </summary>
    [DataContract(Name = "Brokerage")]
    public partial class Brokerage : IEquatable<Brokerage>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Brokerage" /> class.
        /// </summary>
        /// <param name="id">id.</param>
        /// <param name="name">name.</param>
        /// <param name="displayName">displayName.</param>
        /// <param name="description">description.</param>
        /// <param name="awsS3LogoUrl">awsS3LogoUrl.</param>
        /// <param name="slug">slug.</param>
        /// <param name="url">url.</param>
        /// <param name="enabled">enabled.</param>
        /// <param name="maintenanceMode">maintenanceMode.</param>
        /// <param name="allowsFractionalUnits">allowsFractionalUnits.</param>
        /// <param name="allowsTrading">allowsTrading.</param>
        /// <param name="hasReporting">hasReporting.</param>
        /// <param name="isRealTimeConnection">isRealTimeConnection.</param>
        /// <param name="allowsTradingThroughSnaptradeApi">allowsTradingThroughSnaptradeApi.</param>
        /// <param name="isScrapingIntegration">isScrapingIntegration.</param>
        /// <param name="defaultCurrency">defaultCurrency.</param>
        /// <param name="brokerageType">brokerageType.</param>
        /// <param name="exchanges">List of exchange ID supported by brokerage.</param>
        public Brokerage(string id = default(string), string name = default(string), string displayName = default(string), string description = default(string), string awsS3LogoUrl = default(string), string slug = default(string), string url = default(string), bool enabled = default(bool), bool maintenanceMode = default(bool), bool? allowsFractionalUnits = default(bool?), bool? allowsTrading = default(bool?), bool? hasReporting = default(bool?), bool isRealTimeConnection = default(bool), bool? allowsTradingThroughSnaptradeApi = default(bool?), bool isScrapingIntegration = default(bool), string defaultCurrency = default(string), BrokerageType brokerageType = default(BrokerageType), List<Object> exchanges = default(List<Object>)) : base()
        {
            this.Id = id;
            this.Name = name;
            this.DisplayName = displayName;
            this.Description = description;
            this.AwsS3LogoUrl = awsS3LogoUrl;
            this.Slug = slug;
            this.Url = url;
            this.Enabled = enabled;
            this.MaintenanceMode = maintenanceMode;
            this.AllowsFractionalUnits = allowsFractionalUnits;
            this.AllowsTrading = allowsTrading;
            this.HasReporting = hasReporting;
            this.IsRealTimeConnection = isRealTimeConnection;
            this.AllowsTradingThroughSnaptradeApi = allowsTradingThroughSnaptradeApi;
            this.IsScrapingIntegration = isScrapingIntegration;
            this.DefaultCurrency = defaultCurrency;
            this.BrokerageType = brokerageType;
            this.Exchanges = exchanges;
            this.AdditionalProperties = new Dictionary<string, object>();
        }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// Gets or Sets Name
        /// </summary>
        [DataMember(Name = "name", EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// Gets or Sets DisplayName
        /// </summary>
        [DataMember(Name = "display_name", EmitDefaultValue = false)]
        public string DisplayName { get; set; }

        /// <summary>
        /// Gets or Sets Description
        /// </summary>
        [DataMember(Name = "description", EmitDefaultValue = false)]
        public string Description { get; set; }

        /// <summary>
        /// Gets or Sets AwsS3LogoUrl
        /// </summary>
        [DataMember(Name = "aws_s3_logo_url", EmitDefaultValue = false)]
        public string AwsS3LogoUrl { get; set; }

        /// <summary>
        /// Gets or Sets Slug
        /// </summary>
        [DataMember(Name = "slug", EmitDefaultValue = false)]
        public string Slug { get; set; }

        /// <summary>
        /// Gets or Sets Url
        /// </summary>
        [DataMember(Name = "url", EmitDefaultValue = false)]
        public string Url { get; set; }

        /// <summary>
        /// Gets or Sets Enabled
        /// </summary>
        [DataMember(Name = "enabled", EmitDefaultValue = true)]
        public bool Enabled { get; set; }

        /// <summary>
        /// Gets or Sets MaintenanceMode
        /// </summary>
        [DataMember(Name = "maintenance_mode", EmitDefaultValue = true)]
        public bool MaintenanceMode { get; set; }

        /// <summary>
        /// Gets or Sets AllowsFractionalUnits
        /// </summary>
        [DataMember(Name = "allows_fractional_units", EmitDefaultValue = true)]
        public bool? AllowsFractionalUnits { get; set; }

        /// <summary>
        /// Gets or Sets AllowsTrading
        /// </summary>
        [DataMember(Name = "allows_trading", EmitDefaultValue = true)]
        public bool? AllowsTrading { get; set; }

        /// <summary>
        /// Gets or Sets HasReporting
        /// </summary>
        [DataMember(Name = "has_reporting", EmitDefaultValue = true)]
        public bool? HasReporting { get; set; }

        /// <summary>
        /// Gets or Sets IsRealTimeConnection
        /// </summary>
        [DataMember(Name = "is_real_time_connection", EmitDefaultValue = true)]
        public bool IsRealTimeConnection { get; set; }

        /// <summary>
        /// Gets or Sets AllowsTradingThroughSnaptradeApi
        /// </summary>
        [DataMember(Name = "allows_trading_through_snaptrade_api", EmitDefaultValue = true)]
        public bool? AllowsTradingThroughSnaptradeApi { get; set; }

        /// <summary>
        /// Gets or Sets IsScrapingIntegration
        /// </summary>
        [DataMember(Name = "is_scraping_integration", EmitDefaultValue = true)]
        public bool IsScrapingIntegration { get; set; }

        /// <summary>
        /// Gets or Sets DefaultCurrency
        /// </summary>
        [DataMember(Name = "default_currency", EmitDefaultValue = false)]
        public string DefaultCurrency { get; set; }

        /// <summary>
        /// Gets or Sets BrokerageType
        /// </summary>
        [DataMember(Name = "brokerage_type", EmitDefaultValue = false)]
        public BrokerageType BrokerageType { get; set; }

        /// <summary>
        /// List of exchange ID supported by brokerage
        /// </summary>
        /// <value>List of exchange ID supported by brokerage</value>
        [DataMember(Name = "exchanges", EmitDefaultValue = false)]
        public List<Object> Exchanges { get; set; }

        /// <summary>
        /// Gets or Sets additional properties
        /// </summary>
        [JsonExtensionData]
        public IDictionary<string, object> AdditionalProperties { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class Brokerage {\n");
            sb.Append("  ").Append(base.ToString().Replace("\n", "\n  ")).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  DisplayName: ").Append(DisplayName).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  AwsS3LogoUrl: ").Append(AwsS3LogoUrl).Append("\n");
            sb.Append("  Slug: ").Append(Slug).Append("\n");
            sb.Append("  Url: ").Append(Url).Append("\n");
            sb.Append("  Enabled: ").Append(Enabled).Append("\n");
            sb.Append("  MaintenanceMode: ").Append(MaintenanceMode).Append("\n");
            sb.Append("  AllowsFractionalUnits: ").Append(AllowsFractionalUnits).Append("\n");
            sb.Append("  AllowsTrading: ").Append(AllowsTrading).Append("\n");
            sb.Append("  HasReporting: ").Append(HasReporting).Append("\n");
            sb.Append("  IsRealTimeConnection: ").Append(IsRealTimeConnection).Append("\n");
            sb.Append("  AllowsTradingThroughSnaptradeApi: ").Append(AllowsTradingThroughSnaptradeApi).Append("\n");
            sb.Append("  IsScrapingIntegration: ").Append(IsScrapingIntegration).Append("\n");
            sb.Append("  DefaultCurrency: ").Append(DefaultCurrency).Append("\n");
            sb.Append("  BrokerageType: ").Append(BrokerageType).Append("\n");
            sb.Append("  Exchanges: ").Append(Exchanges).Append("\n");
            sb.Append("  AdditionalProperties: ").Append(AdditionalProperties).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public string ToJson()
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(this, Newtonsoft.Json.Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as Brokerage);
        }

        /// <summary>
        /// Returns true if Brokerage instances are equal
        /// </summary>
        /// <param name="input">Instance of Brokerage to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(Brokerage input)
        {
            if (input == null)
            {
                return false;
            }
            return base.Equals(input) && 
                (
                    this.Id == input.Id ||
                    (this.Id != null &&
                    this.Id.Equals(input.Id))
                ) && base.Equals(input) && 
                (
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
                ) && base.Equals(input) && 
                (
                    this.DisplayName == input.DisplayName ||
                    (this.DisplayName != null &&
                    this.DisplayName.Equals(input.DisplayName))
                ) && base.Equals(input) && 
                (
                    this.Description == input.Description ||
                    (this.Description != null &&
                    this.Description.Equals(input.Description))
                ) && base.Equals(input) && 
                (
                    this.AwsS3LogoUrl == input.AwsS3LogoUrl ||
                    (this.AwsS3LogoUrl != null &&
                    this.AwsS3LogoUrl.Equals(input.AwsS3LogoUrl))
                ) && base.Equals(input) && 
                (
                    this.Slug == input.Slug ||
                    (this.Slug != null &&
                    this.Slug.Equals(input.Slug))
                ) && base.Equals(input) && 
                (
                    this.Url == input.Url ||
                    (this.Url != null &&
                    this.Url.Equals(input.Url))
                ) && base.Equals(input) && 
                (
                    this.Enabled == input.Enabled ||
                    this.Enabled.Equals(input.Enabled)
                ) && base.Equals(input) && 
                (
                    this.MaintenanceMode == input.MaintenanceMode ||
                    this.MaintenanceMode.Equals(input.MaintenanceMode)
                ) && base.Equals(input) && 
                (
                    this.AllowsFractionalUnits == input.AllowsFractionalUnits ||
                    (this.AllowsFractionalUnits != null &&
                    this.AllowsFractionalUnits.Equals(input.AllowsFractionalUnits))
                ) && base.Equals(input) && 
                (
                    this.AllowsTrading == input.AllowsTrading ||
                    (this.AllowsTrading != null &&
                    this.AllowsTrading.Equals(input.AllowsTrading))
                ) && base.Equals(input) && 
                (
                    this.HasReporting == input.HasReporting ||
                    (this.HasReporting != null &&
                    this.HasReporting.Equals(input.HasReporting))
                ) && base.Equals(input) && 
                (
                    this.IsRealTimeConnection == input.IsRealTimeConnection ||
                    this.IsRealTimeConnection.Equals(input.IsRealTimeConnection)
                ) && base.Equals(input) && 
                (
                    this.AllowsTradingThroughSnaptradeApi == input.AllowsTradingThroughSnaptradeApi ||
                    (this.AllowsTradingThroughSnaptradeApi != null &&
                    this.AllowsTradingThroughSnaptradeApi.Equals(input.AllowsTradingThroughSnaptradeApi))
                ) && base.Equals(input) && 
                (
                    this.IsScrapingIntegration == input.IsScrapingIntegration ||
                    this.IsScrapingIntegration.Equals(input.IsScrapingIntegration)
                ) && base.Equals(input) && 
                (
                    this.DefaultCurrency == input.DefaultCurrency ||
                    (this.DefaultCurrency != null &&
                    this.DefaultCurrency.Equals(input.DefaultCurrency))
                ) && base.Equals(input) && 
                (
                    this.BrokerageType == input.BrokerageType ||
                    (this.BrokerageType != null &&
                    this.BrokerageType.Equals(input.BrokerageType))
                ) && base.Equals(input) && 
                (
                    this.Exchanges == input.Exchanges ||
                    this.Exchanges != null &&
                    input.Exchanges != null &&
                    this.Exchanges.SequenceEqual(input.Exchanges)
                )
                && (this.AdditionalProperties.Count == input.AdditionalProperties.Count && !this.AdditionalProperties.Except(input.AdditionalProperties).Any());
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = base.GetHashCode();
                if (this.Id != null)
                {
                    hashCode = (hashCode * 59) + this.Id.GetHashCode();
                }
                if (this.Name != null)
                {
                    hashCode = (hashCode * 59) + this.Name.GetHashCode();
                }
                if (this.DisplayName != null)
                {
                    hashCode = (hashCode * 59) + this.DisplayName.GetHashCode();
                }
                if (this.Description != null)
                {
                    hashCode = (hashCode * 59) + this.Description.GetHashCode();
                }
                if (this.AwsS3LogoUrl != null)
                {
                    hashCode = (hashCode * 59) + this.AwsS3LogoUrl.GetHashCode();
                }
                if (this.Slug != null)
                {
                    hashCode = (hashCode * 59) + this.Slug.GetHashCode();
                }
                if (this.Url != null)
                {
                    hashCode = (hashCode * 59) + this.Url.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.Enabled.GetHashCode();
                hashCode = (hashCode * 59) + this.MaintenanceMode.GetHashCode();
                if (this.AllowsFractionalUnits != null)
                {
                    hashCode = (hashCode * 59) + this.AllowsFractionalUnits.GetHashCode();
                }
                if (this.AllowsTrading != null)
                {
                    hashCode = (hashCode * 59) + this.AllowsTrading.GetHashCode();
                }
                if (this.HasReporting != null)
                {
                    hashCode = (hashCode * 59) + this.HasReporting.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.IsRealTimeConnection.GetHashCode();
                if (this.AllowsTradingThroughSnaptradeApi != null)
                {
                    hashCode = (hashCode * 59) + this.AllowsTradingThroughSnaptradeApi.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.IsScrapingIntegration.GetHashCode();
                if (this.DefaultCurrency != null)
                {
                    hashCode = (hashCode * 59) + this.DefaultCurrency.GetHashCode();
                }
                if (this.BrokerageType != null)
                {
                    hashCode = (hashCode * 59) + this.BrokerageType.GetHashCode();
                }
                if (this.Exchanges != null)
                {
                    hashCode = (hashCode * 59) + this.Exchanges.GetHashCode();
                }
                if (this.AdditionalProperties != null)
                {
                    hashCode = (hashCode * 59) + this.AdditionalProperties.GetHashCode();
                }
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        public IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}
