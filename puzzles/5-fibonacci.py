# nth Fibonacci
# ==========================
# see docs for more details

# initialize
x =0
y =1

# get n
n = int(input("nth fibonacci, n: "))

if n<=0:
	print("invalid")
elif n==1:
	z=x
elif n==2:
	z=y
else:
	for i in range(2, n+2):
		z=x+y
		# print(z) # uncomment this line to print the series
		y=x
		x=z

print("ans:", z)
