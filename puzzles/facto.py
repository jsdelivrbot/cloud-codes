# not a prt of question
# for testing purpose only

print("NOT A PART OF QUESTION\nfor tesing purpose only\nthis fn is not optimised for higher values\n==============")
f = int(input("factorial limit: "))

fa = 1
for i in range(1, f+1):
	# for j in range(1, i+1):
	fa = fa * i
	sfa = str(fa)
	c = 0
	for x in range(len(sfa)-1, -1, -1):
		if sfa[x] == '0':
			c = c + 1
		else:
			break

	print("%d has - %d zeros" % (i, c))

# print(fa)