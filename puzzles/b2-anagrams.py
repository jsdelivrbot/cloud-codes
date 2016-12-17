# Anagram finder
# ===============
# see docs for details

import json

# part 1 : PRECOMPILE THE raw-file to get JSON representation (why? see docs)
PRECOMPILE = False # set this flag to compile the database

if PRECOMPILE == True:
	# open raw file
	rawfile = open('./anagram-raw.txt')
	
	# read all values and make it undestandable
	rawdata = rawfile.read().split()

	# close the file
	rawfile.close()
	del rawfile
	
	# get a separate sorted list of it
	rawhash = list(rawdata)
	for i in range(0, len(rawhash)):
		rawhash[i] = ''.join(sorted(rawhash[i]))
	
	# zip it
	zipped = list(zip(rawhash, rawdata))

	# we don't need this anymore: optimization matters
	del rawdata
	del rawhash

	# stores the structured anagram list
	anagrams = []
	anagrams_map = {}

	# make it structured
	mapcount = 0
	for i in range(0, len(zipped)):
		key = zipped[i][0].lower()
		if key in anagrams_map:
			arPointer = anagrams_map[key]
			anagrams[arPointer].append(zipped[i][1].lower())
		else:
			arPointer = mapcount
			anagrams_map[key] = arPointer
			anagrams.append([zipped[i][1].lower()])
			mapcount = mapcount + 1

	# write out anagrams_map.json file
	mapJson = open('./anagrams-map.json', "w")
	mapJson.write(json.dumps(anagrams_map))
	mapJson.close()
	del mapJson
	del anagrams_map

	# write out anagrams compiled file
	anagrFile = open('./anagrams-compiled.json', "w")
	anagrFile.write(json.dumps(anagrams))
	anagrFile.close()
	del anagrFile
	del anagrams

	# compilation phase over :)

# Actual program to find anagrams
# ===============================

print("[ gathering required files ]")

# load anagrams_map.json
anagrams_map_file = open('./anagrams-map.json')
anagrams_map = anagrams_map_file.read()
anagrams_map_file.close()
del anagrams_map_file
# parse it 
anagrams_map = json.loads(anagrams_map)

# load compiled file
anagrams_compiled_file = open('./anagrams-compiled.json')
anagrams_compiled = anagrams_compiled_file.read()
anagrams_compiled_file.close()
del anagrams_compiled_file
# parse it 
anagrams_compiled = json.loads(anagrams_compiled)

# get string to find anagrams
stringToFind = input("Give string to find anagrams: ").lower()

# get key by sorting it
key = ''.join(sorted(stringToFind))

# Now, get all the anagrams: the quickest way EVER
if key in anagrams_map:
	print("\nHere you go ...\n")
	for word in anagrams_compiled[anagrams_map[key]]:
		print(word)
else:
	print("\nAh snap! No anagrams found!\nSee docs to find some examples.\nOr try something like 'care', 'later', 'name' etc.")
