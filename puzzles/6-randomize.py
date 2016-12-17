# Random number generation
# ========================
# see docs for more details.

from time import time
from hashlib import md5

minl = int(input("Minimum range: "))
maxl = int(input("Maximum range: "))

# function to generate random number
def dice(minl, maxl):
	# swap input if it is in the other way
	if maxl < minl:
		t = maxl
		maxl = minl
		minl = t

	# make the md5 hash of current datetime (why? see docs)
	h = md5(str(time()).encode('utf-8')).hexdigest()

	# convert to decimal
	deci = int(h, 16)

	# limit the result and return (see docs)
	return (deci % (maxl-minl))+minl


print("\nThrowing dice...")
print(dice(minl, maxl))
print("\n:)")
