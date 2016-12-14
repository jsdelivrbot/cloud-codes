# Finding prime numbers
# =====================

# get number
n = int(input("Enter the number to test:"))

# Assume n is prime
n_is_prime = True;

# for even numbers
if n%2==0:
	print("Nah, not prime - it's even!")

else:
	# using the famous squre-root test for odd numbers
	root = int(n**(.5))+1
	for i in range(3, root, 2): # testing only for 3, 5, 7 ... by skiping evens
		if n%i == 0:
			n_is_prime = False
			print(n, "is divisible by", i)
			break

	if(n_is_prime): print("Voila! That's a prime\n*********************")
	else: print("Nah, not prime")

print(":)")
