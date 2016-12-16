# Filtering Duplicates
# ====================
# see docs to know more.

from random import randint

# set array the limts here
list_start = 1
list_end = 9000000 # 1 to 9,000,000

# generating an array of length 1500 with random values.
numberList = []

print("[ generating array... ]")

for i in range(list_start, list_end):
	numberList.append(i)

print("[ array generated     ]")

# create duplication of a random element
e1 = randint(0, list_end - list_start-1)
e2 = randint(0, list_end - list_start-1)
while (e1 == e2):
	e2 = randint(list_start, list_end)

numberList[e2] = numberList[e1]
print("[ duplicated ]:", e1, "th element and ", e2, "th element are same(", numberList[e1], ")")

print("[ sorting in progress... ]")
numberList.sort()
print("[ array sorted ]")

print("[ finding duplicate element ]: this should return", numberList[e1], "is duplicated")
for i in range(0, list_end - list_start-1):
	if numberList[i]==numberList[i+1]:
		print("*************")
		print("answer: ", numberList[i])
		break

print(":)")

