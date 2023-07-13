# js-data-structure-algorithms

### Data structure and Algorithms in JavaScript

---

[Big-O cheatsheet](https://zerotomastery.io/cheatsheets/big-o-cheat-sheet/?utm_source=udemy&utm_medium=coursecontent)

---

Pre-requisites: Make sure you have node.js installed in your laptop/machine

---

- cd to the git cloned folder, checkout `main` branch and run command `git pull`

- To run any JS file, simply run below command:

```
node <fileName.js>

Output:
XXXXXXXXXXXXXXXXXXXXX
```

---

- Big-O notations

```
O(1) - Constant time
O(n) - Linear time
O(n^2) - Quadratic
O(n!) - Adding a loop for every element
```

---

- Rules to calculate Big-O

```
1) Worst case scenario
2) Remove constants
3) Different terms for multiple inputs/parameters
4) Drop non-dominants
```

---

- 3 pillars of coding

```
1) Readability
2) Speed a.k.a Time complexity (Operations, Comparisons, Looping, Outside function calls)
3) Memory a.k.a Space complexity (Variables, Data structures, Function call, Allocations)
```

---

- Heap and Stack

```
Heap - Assigned variables are kept
Stack - Function calls are stored
```

---

- Arrays

```
Lookup = O(1)
Add/push/pop = O(1)
Insert = O(n)
Delete = O(n)
```

---

- Primitive (Defined by programming language) and Reference (Created by programmer) datatypes

```
Primitive:
Number, Strings, Boolean, Undefined, Null
```

```
Reference:
Objects {}
Arrays []
```

---

- Arrays implementation output

> Filename: array-implementation.js

```
arr1:  MyArray { length: 0, data: {} }
get(index):  undefined
After push(1):  MyArray { length: 1, data: { '0': 1 } }
get(0):  1
After push('Hello'):  MyArray { length: 2, data: { '0': 1, '1': 'Hello' } }
get(1):  Hello
pop():  Hello MyArray { length: 1, data: { '0': 1 } }
After adding A, B, C, D:  MyArray {
  length: 5,
  data: { '0': 1, '1': 'A', '2': 'B', '3': 'C', '4': 'D' }
}
Deleting item at index 1:  A
After deleting item at index 1:  MyArray { length: 4, data: { '0': 1, '1': 'B', '2': 'C', '3': 'D' } }
Deleting item at index 0:  1
After deleting item at index 0:  MyArray { length: 3, data: { '0': 'B', '1': 'C', '2': 'D' } }
```
