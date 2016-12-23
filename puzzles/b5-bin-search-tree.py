# Binary search tree validation
# =============================

import itertools

# lets create a bin tree
class Node:
	lChild = None
	rChild = None
	data = None

	def __init__(self, key):
		self.rChild = None
		self.lChild = None
		self.data = key
	def __str__(self):
		return "Node(%d)" %(self.data)

class Tree:
	root = None

	def __str__(self):
		return "Tree"

	def __init__(self):
		self.root = None

# manually creating binary tree instead of
# writing a separate function for insertion
# for the purpose of demonstration and testing.(see docs)
t = Tree()
t.root = Node(5)
t.root.lChild = Node(3)
t.root.lChild.lChild = Node(1)
t.root.lChild.rChild = Node(4)
t.root.rChild = Node(7)
t.root.rChild.lChild = Node(7)
t.root.rChild.rChild = Node(10)

depth = 3

print(t.root)
print(t.root.lChild)
print(t.root.lChild.lChild)
print(t.root.lChild.rChild)
print(t.root.rChild)
print(t.root.rChild.lChild)
print(t.root.rChild.rChild)

# Function to determine if the BST is valid
def validateBTree(t):
	# Find depth
	
	# Construct a flattend array
	values = [t.lChild, t.data, t.rChild]
	for i in range(1, 4):
		j = 0
		while j<len(values):
			if hasattr(values[j], 'lChild') or hasattr(values[j], 'rChild'):
				t = values[j]
				del values[j]
				values.insert(j, t.lChild)
				values.insert(j+1, t.data)
				values.insert(j+2, t.rChild)
				j = j + 3
			else:
				j = j + 1

	# clean array
	j = 0
	while j<len(values):
		if values[j] == None:
			del values[j]
		j = j + 1
	print(values)

	# determine if it is valid
	for i in range(0, len(values)-1):
		if values[i]>values[i+1]:
			return False;
	
	return True

# Tests
print(validateBTree(t.root)) # should return true