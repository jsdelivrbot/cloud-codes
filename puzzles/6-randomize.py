# Random number generation
# ========================
# see docs for more details.

from time import time
from hashlib import md5

minl = int(input("Min : "))
maxl = int(input("Max : "))

# function to generate random number
def dice(minl, maxl):
	# swap input if it is in the other way
	if maxl < minl:
		print("\neveryone knew the min-max things..")
		t = maxl
		maxl = minl
		minl = t

	if(maxl - minl < 2):
		print("\nIt's more kind of 'certain' than 'random'")
	
	maxl = maxl + 1

	# make the md5 hash of current datetime (why? see docs)
	h = md5(str(time()).encode('utf-8')).hexdigest()

	# convert to decimal
	deci = int(h, 16)

	# limit the result and return (see docs)
	print("\nThrowing dice...")
	return (deci % (maxl-minl))+minl


print(dice(minl, maxl))
print("\n:)")
