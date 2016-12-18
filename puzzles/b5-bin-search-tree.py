# Binary search tree validation
# =============================

# Function to find depth
def depth(t):
	if t == None:
		return 0
	else:
		dlc = depth(t.lChild)
		drc = depth(t.rChild)
		if dlc>=drc:
			mxd = dlc + 1
		else:
			mxd = drc + 1
	return mxd

# Function to determine if the BST is valid
def validateBTree(t):
	# Find depth
	d = depth(t)
	# Construct a flattend array
	values = [t.lChild, t.data, t.rChild]
	for i in range(0, d):
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

###################################################/

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
# ========================================================
# ** valid BST
#                        ROOT
#                         |
#                         V
# 						  5
# 					  /      \
# 				    3         7
# 				 /   \     /    \
# 			   1      4   6     10
# 			                      \
# 			                       11

validBST = Tree()
validBST.root = Node(5)
validBST.root.lChild = Node(3)
validBST.root.lChild.lChild = Node(1)
validBST.root.lChild.rChild = Node(4)
validBST.root.rChild = Node(7)
validBST.root.rChild.lChild = Node(7)
validBST.root.rChild.rChild = Node(10)
validBST.root.rChild.rChild.rChild = Node(11)

# ----------------------------------------
# ** invalid BST
#                        ROOT
#                         |
#                         V
# 						  5
# 					  /      \
# 				   *10        7
# 				 /   \     /    \
# 			   1      4  *1     10
# 			                      \
# 			                       11
#

invalidBST = Tree()
invalidBST.root = Node(5)
invalidBST.root.lChild = Node(10)
invalidBST.root.lChild.lChild = Node(1)
invalidBST.root.lChild.rChild = Node(4)
invalidBST.root.rChild = Node(7)
invalidBST.root.rChild.lChild = Node(1)
invalidBST.root.rChild.rChild = Node(10)
invalidBST.root.rChild.rChild.rChild = Node(11)


# Validating
print("\n\nchecking validity of 'validBST':")
print("validateBTree(validBST) = ", validateBTree(validBST.root)) # should return true
print("\n\nchecking validity of 'invalidBST':")
print("validateBTree(invalidBST) = ", validateBTree(invalidBST.root)) # should return false