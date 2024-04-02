import matplotlib.pyplot as plt
import matplotlib.ticker as mtick

# Define the range for the number of accounts (e.g., 1 to 10)
accounts = list(range(1, 110))  # Adjust the upper limit as needed

# Calculate the total cost for universal API solutions ($100 per account per month)
api_costs = [100 * account for account in accounts]

# Define the fixed cost for Konfig SDKs
konfig_cost = [50] * len(accounts)  # $50 per month

# Create the plot
plt.figure(figsize=(10, 6))

# Plot the universal API solutions cost
plt.plot(accounts, api_costs, label='Universal API Solutions Cost ($100/account/month)', color='red')

# Plot the fixed cost for Konfig SDKs
plt.plot(accounts, konfig_cost, label='Konfig SDKs Cost ($50/month fixed)', linestyle='-', color='blue')

# Mark the dots and label them
for i, account in enumerate(accounts):
    if account in [25, 50, 100]:
        plt.scatter(account, api_costs[i], color='red')
        plt.text(account, api_costs[i], f'${api_costs[i]:,}', fontsize=14, ha='right', va='bottom')
        plt.scatter(account, konfig_cost[i], color='blue')
        plt.text(account, konfig_cost[i], f'${konfig_cost[i]:,}', fontsize=14, ha='right', va='bottom')

# Adding title and labels
plt.title('Cost Comparison: Usage-Based vs. Fixed Pricing')
plt.xlabel('Number of Connected Accounts')
plt.ylabel('Total Monthly Cost')
plt.legend()

# Show the plot
plt.grid(True)

# Format the y-axis to include commas in the numbers
plt.gca().yaxis.set_major_formatter(mtick.StrMethodFormatter('${x:,.0f}'))

# Save the plot to a file
plt.savefig('cost_comparison.png')

