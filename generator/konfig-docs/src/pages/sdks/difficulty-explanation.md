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

$score = w_1 * o + w_2 * s + w_3 * p$

If $w_1 = 1$, $w_2 = 0.5$, $w_3 = 0.25$, then $score = 28$

Let us imagine that $\mu = 80$ and $\sigma = 200$. We then calculate the z-score as follows:

$z = \frac{X - \mu}{\sigma}$

Plugging in the numbers, we get $z = -0.26$. This would fall into the "Easy" bucket. The bucket thresholds are as follows:

Very Easy: $z <= -0.3$
Easy: $-0.3 < z <= -0.1$
Medium: $-0.1 < z <= 0.1$
Hard: $0.1 < z <= 1$
Very Hard: $z > 1$

![Difficulty score histogram](../../static/img/difficulty-histogram.png)
