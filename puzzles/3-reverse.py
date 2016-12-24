# Reversing string
# ==========================


# get string
s = input("give the string to reverse: ")

s = s.split()

# reverse words
e = len(s)-1
for b in range(0, len(s)-1):
	t = s[b]
	s[b] = s[e]
	s[e] = t
	e = e-1
	#print("%d and %d" % (b,e))

s = ' '.join(s)

print(s)
print(":)")