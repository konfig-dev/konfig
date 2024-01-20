---
title: API Difficulty Explanation
description: A description of what the difficulty of an API means and how it is computed.
hide_table_of_contents: true
---

## What Does Difficulty Mean?

The API is assigned a difficulty from the following buckets: Very Easy, Easy, Medium, Hard, and Very Hard.
The difficulty is computed as a function of the number of operations, schemas, and parameters of the API, relative to the other APIs in Konfig's database.
More difficult APIs can be expected to have a large number of operations, schemas, and/or parameters.
The number of operations, schemas, and parameters are weighted and summed.
Then, the API's z-score (number of standard deviations above/below the mean) is calculated.
The API is bucketed according to the z-score thresholds of each bucket.

## Example

Let us consider an API with 15 operations, 16 schemas, and 20 parameters.

![Example calculation](/img/example-difficulty-calculation.png)

## Visualization

Below is a histogram of all of the difficulty scores of the APIs in our database. Approximate bucket margins are drawn below the x-axis.

![Difficulty score histogram](/img/difficulty-histogram.png)
