# SOLUTIONS
Vajahath Ahmed,
vajuoff.1@gmail.com

---
### Prerequisite

 - Python 3 should be installed.

### How to run programs?
```shell
$ python filename.py
```
some systems require `python3` instead of `python`

---

## 1. Prime-Finder
> **Q:** Given number `n`, write a function that will determine whether n is prime or not. What is the optimal way to do this?
### Answer:
**Language**: `python`
**File**: `1-prime-finder.py`

Used the square-root test to detect prime numbers.
*[code is self explanatory]*

## 2. Duplicate Filter
> **Q:** You are given an array with integers between 1 and 1,000,000. One integer is in the array twice. How can you determine which one? Can you think of a way to do it using little extra memory.
### Answer
**Language**: `python`
**File**: `2-duplicate-filter.py`

#### **Method**

 - Populate an array with 1500 random elements *(assuming that this can be extended up to 1,000,000)*, out of which one element is duplicated.
 - Sort the array using the builtin `sort()` method of python. 
 **why the builtin `sort()` method?**
 `sort()` uses an algorithm called [Timsort](https://en.wikipedia.org/wiki/Timsort), which is well optimised. According to Wikipedia,

> Timsort is a hybrid sorting algorithm, derived from merge sort and
> insertion sort, designed to perform well on many kinds of real-world
> data. It was invented by Tim Peters in 2002 for use in the Python
> programming language. The algorithm finds subsets of the data that are
> already ordered, and uses the subsets to sort the data more
> efficiently. This is done by merging an identified subset, called a
> run, with existing runs until certain criteria are fulfilled. Timsort
> has been Python's standard sorting algorithm since version 2.3. It is
> now also used to sort arrays in Java SE 7, and on the Android
> platform.

 - Iterate over the array to find an adjacent dual occurrence of the same element.

#### **A view on memory utilisation** 
*(ignore the sorting phase)*
This program uses only a single variable `i` to iterate and check. *So least extra memory utilisation*.
```python
for i in range(0, list_end - list_start-1):
	if numberList[i]==numberList[i+1]:
		print("*************")
		print("answer: ", numberList[i])
		break
```

## 3. Reverse words

> **Q:** Reverse words in a string (words are separated by one or more spaces). Now do it in-place.
### Answer
**File**: `3-reverse.py`

#### **Method**

 - Split the given sentence into words and store it as an array.
 - Reversing the array is easy enough.
 - Joining the array back to sentence is even simpler.

*[code is self explanatory]*

## 4. Palindrome
> **Q:** Write code to check if a string is a palindrome or not
### Answer
**File**: `4-palindrome.py`

#### Method
Look it from both ends.

## 5. Fibonacci
> **Q:** Write a function to print the n-th Fibonacci number

### Answer
**File:** `5-fibonacci.py`
#### Method
Used the non-recursive algorithm.

## 6. Random numbers
> **Q:** Write code to generate random number between a max and min

### Answer
**File:** `6-randomize.py`
#### Method followed

 - We need a source that gives random values to generate a random number.
 - The most easiest one we can use to generate random number is `datetime`, but wait, its not random.
 - To make it random, I md5 hashed the current date time. Now it gives a hexadecimal value.
 - Change it to decimal. That's a very large number.
 - Shrink it to the provided limit by doing :
```
 (large_rand_value % (max-min))+min
```
 - done.

#### Why I used md5 hash?
If I don't use md5, the resulting value someway depends on the previous value. Because, time is in a progressing function.

`md5("this is a tea cup")` and `md5("this is a tea cup_")` are entirely different: like that `md5(cuttent_time_in_millisec)` and `md5(cuttent_time_in_millisec + 1)` are entirely different.

So this method gives a good randomness. 

## 7. Binary Search
> **Q:** Implement binary search of a sorted array of integers.
### Answer
**File: ** `7-bin-search.py`

Programmed in the common binary-search way.

## 8. Square Root function
> **Q:** Implement a square root function
### Answer
**File: ** `8-sqrt.py`
```
2 = 4^.5
```
## b1. Zeros

> **Q: ** Without using a calculator, how many zeros are at the end of "100!"?

### Answer
**24 zeros**

#### How I found it?
*By looking at the pattern.*

 - Multiplying by any multiples of `10` produce trailing zeros. Thus,
	 - `10` produces `1` zero,
	 - `100` produces `2` zero
	 - and so on..
 - Any of `(2, 5)`, `4, 5`, `(8, 5)` produces a trailing zero at the end result.
	 - `5` is common in every tuple.
	 - But if we multiply 3 tuples together, `5*2*4*8 = 320` it wont produce `3`, but  `1` trailing zero. So we don't want want to count all of those tuples, but any of those tuples.
	 - `5*5 * 2*4*8 = 1600` : 2 zeros
		 - **So number of `5`s matters.** So,
			 - 25 has 2 fives (5*5)
			 - 50 has 2 fives (5*5*2)
			 - 75 has 2 fives (5*5*3)
 - Start counting:
	 - 10, 20, 30, ..., 90 :9 tens are being multiplied together -> produces **9 zeros**.
	 - There is a 100 being multiplied at the end -> produces **2 zeros**
	 - counting tuples similar to `(4, 5)`:
		 - (4,5), (14, 15), ..., (94, 95) : 10 tuples should produce *at lest 10 zeros*.
		 - here, there are 3 numbers which need special attention: *the* 25, 50 & 75. They produce double zeros, whereas we counted only once in the above step. So *add 3 more to it*.
		 - So at the end of this step, we have **13 zeros** from this step.
 - 9 zeros + 2 zeros + 13 zeros = **24 zeros**
#### Verification
Run the file `facto.py` and give the `factorial limit` to `100`. It shows the zero's spikes.
> **Note:** `facto.py` is not optimised for higher values.

## b2. Anagrams
> **Q:** Given an English word in the form of a string, how can you quickly find all valid anagrams for that string (all valid rearrangements of the letters that form valid English words)? You are allowed to pre‐compute  whatever  you want to and store Whatever you optionally pre‐compute on disk.

### Answer
**File**:  `b2-anagrams.py`
**Anagram source file:** `anagrams-raw.txt`

>*These are some words to try while running the program:* `came, beast, name, angle, are ...`
>The raw file stores `870` anagrams. See the file to find more.

####File Structure
File structure is important to run this program. This program utilities 3 (more correctly, 2) files to run faster.

 - `anagrams-raw.txt` file stores some list of English words which has anagrams. It is copied form [here](http://www.english-for-students.com/Complete-List-of-Anagrams.html). Content of this file is unusable until we compile it. If you need to update anagram list, 
	 - add those words in this file and
	 - recompile it.
	 - compiling this file will generate/ update the following files.
 - `anagrams-compiled.json` file stores the JSON formatted compiled version of anagrams.
	 - Basically it is an array of arrays.
	 - Words in each sub-arrays are anagrams of one of its word.
 - `anagrams-map.json` is a hash map. It maps `id` of each possible anagrams to its corresponding words in `anagrams-compiled.json` using array index pointer.

#### Algorithm

 1. Get a good list of anagrams and copy it to `anagrams-raw.txt`.
 2. Compile `anagrams-raw.txt` to generate other 2 supporting files.
 3. Load the generated files to program.
	 4. `hash = anagrams-map.json`
	 5. `list = anagrams-compiled.json`
 4. Prompt the user to type a word to find anagrams.
 5. Get the word and force it to lowercase.
 6. Sort the letters.
 7. Lookup in the hash-map with the sorted letters as `key` for more insights as `index = hash.key`:
	 8. If `index` is `null`, no anagrams found. (the database is insufficient to find anagrams)
	 9. else, retrieve the list of words as `anagrams = list[index]`
	 10. Print `anagrams`.

#### What is `PRECOMPILE` flag in the program?
Set this flag to start the program with compiling the anagram source file `anagrams-raw.txt`. It is not necessary to compile this every time if the source file is not changed.

#### Why the compiled files are formatted as JSON?
JSON is the most popular and useful way of representing data. This file can be utilized in other platforms and languages. A sort of *"one way fits all"*. 


## b3. Messenger
> **Q:** Describe a design for an instant messaging program where there are several servers , clients are connected to each server, and the servers communicate with each other. Describe the classes, interfaces, and soon that you would use and how you would organize them.

### Answer
#### Simpler one.
**Broadcast messages sent by clients with appropriate headers to all servers.**
```
   S1 <----------------> S2 <--------------> S3
   |                     |                   |
   c1                    c2                  c3

S* - servers
c* - clients
```
A simple method is to broadcast data including the message to all servers.
Format:
```json
{
	"senderId": "ccB3x",
	"receiverId": "nbb5yu",
	"message": "Kity is so fluffy",
	"datetime": 5665181164
}
```
All servers should have a port listening to these messages and if any server detects the intended receiver under them, it will push the message to that client. Otherwise ignored.
Each server should keep an up-to-date list of all clients under that server.

> Sometimes ago, I've created a browser based chat application that runs in similar (not exact) broadcasting fashion. [Talky Messenger](https://mycolorpad.blogspot.in/2015/12/talky-documentation.html).

#### More Efficient
**Use a hash map**
```
	    	    +---------------+
   +----------->| HASH-MAP-SYNC |<-----------+
   | 	        +---------------+            |
   |                     |                   |
   S1 <----------------> S2 <--------------> S3
   |                     |                   |
   c1,c2                 c3,c4,c5            c6
```
The previous method creates more network traffic. To handle that we create a hash of all clients and its servers. A sync service updates every record in all servers when a new client joins or leaves a specific server.

So each server can directly send messages and need of  abroad cast is avoided.

A sample hash for the above scenario:
```javascript
let hash = {
	"c1": "s1",
	"c2": "s1",
	"c3": "s2",
	"c4": "s2",
	"c5": "s2",
	"c6": "s3"
}
```
now we can locate the server address where recipient `c3` belongs to as:
```javascript
let location = hash.s3 // returns "s2"
```

## b4. Linked Lists
> How can one determine whether a singly linked list has a cycle?

### Answer
#### Method

 - Write function to detect loops.
 - Test is with a good case and bad case.

#### How the program detects loops?
```
   HEAD==>[4 *]--->[5 *]--->[7 *]--->[3 *]--->[1 *]
                             ^                   |
                             |                   |
                             +-------------------+
```
If LL has a loop, when we traverse the LL we reach a position we already reached. So this program grabs each linked list and stores its pointer to an array. When finished, it looks for duplicate pointers. If found, loops are there.

## b5. Binary Search Tree
> **Q:** Write a function to determine whether a given binary tree of distinct integers is a valid binary search tree . Assume that each node contains a pointer to its left child, a pointer to its right child, and an integer, but not a pointer to its parent.You may use any language you like.

### Answer
Since there is no pointer to a nodes parent, we cant use the common traversal algorithms.
So I used a kind of continues replacement algorithm. Which perform the logic as follows:

Consider this tree:
```
                        ROOT
                         |
                         V
 						 5
  					   /    \
 				    3         7
 				 /   \     /    \
 			   1      4   6     10
 			                     
```
Create an array with continuously replacing the nodes in a level. Now, do that `d` times where `d` is the depth.
```
depth, d = 3
i = 1   [L(5),5,R(5)]
i = 2   [L(3),3,R(3),5,R(5)]
        [L(3),3,R(3),5,L(7),7,R(7)]
i = 3   [NULL,1,NULL,3,NULL,4,NULL,5,NULL,6,NULL,7,NULL,10,NULL]

clean NULL s =>
[1, 3, 4, 5, 6, 7, 10]

If it is sorted, the BST is valid. Else invalid.

```

---

Vajahath Ahmed
[mycolorpad.blogspot.in](https://mycolorpad.blogspot.in)