# implementing binary search
# ===========================

print("initializing...")

# initialize array of 1000 elements in sorted order
ar = []
for i in range(0, 1001):
	ar.append(i)

print("created array [ 0 -> 1000 ]")

# get key
key = int(input("\nsearch key: "))

# initialize starting point(b) ending point(e)
b = 0
e = len(ar)-1

found = False

# bin-search starts here
while found == False:
	# bounds swaps -> i.e., key not found yet.
	if e<b:
		break

	# otherwise find the mid
	mid = int(b +(e-b)/2)

	print("checking ", mid)
	if ar[mid]==key:
		found = True
		break

	if ar[mid]<key:
		b = mid + 1

	if ar[mid]>key:
		e = mid - 1

if found:
	print("\nha! found")
else:
	print("\nNot in the array")