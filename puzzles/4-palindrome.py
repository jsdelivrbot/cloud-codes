# Palindrome
# ==========================
# see docs for more details

# get string
print("Tesing palindrome")
s = input("give the string to test: ")
palin = True

e = len(s)-1
for i in range(0, len(s)-1):
	if(s[i] != s[e]):
		palin = False
		break
	e = e-1

if(palin):
	print("Palindrome")
else:
	print("Not Palindrome")

print(":)")