# Finding cycles in linked lists
# ==============================

# Function to detect loops
def isLooped(l):
	pointers = [0]
	loop = False
	for i in l:
		pointers.append(i[1])
	pointers.sort()
	# loop and detect duplicates
	for i in range(0, len(pointers)-1):
		if pointers[i] == pointers[i+1]:
			loop = True
			break

	return loop

# generate a linked list with cyle
ll1 = []
for i in range(0, 10):
	if i == 8:
		ll1.append(("hi", 6))
	else:
		ll1.append(("hi", i+1))

# generate a linked list with-out cycle
ll2 = []
for i in range(0, 10):
	ll2.append(("hi", i+1))


print("\nTesting linked list with cycle for cycles:")
if isLooped(ll1)==True:
	print("Loop detected: SUCCESS")
else:
	print("Loop not detected: ERROR")


print("\nTesting linked list with without cycle for cycles:")
if isLooped(ll2)==False:
	print("Loop not detected: SUCCESS")
else:
	print("Loop detected: ERROR")
