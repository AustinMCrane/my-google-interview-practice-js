# Sorting Algorithms

## Insertion Sort
### Attributes
* in place sort
* O(n^2) run time
* ø(n) best case run time

### Pseudo

```
for each element i sort i in place
	for j = i -1 element j
		check if element j > element i
			swap j with i and i with j
```

## Merge Sort
### Attributes
* in memory permutation, creates new memory for sorted list
* O(nlog(n)) best case run time
* ø(nlog(n)) I think…. Because all steps are done anyway?

### Pseudo

```
recursively split array into a left and right array with split = lenght /2
if split < 2 return array

check each element 0 of left and right
	if left[0] > right[0]
		push right[0] to new sorted array
		pop right[0]
	else
		push left[0] to new sorted array
		pop left[0]
	return new sorted array

merge all sub arrays recursevely
```
