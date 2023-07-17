---
id: lab4
title: Lab 4
sidebar_position: 4
description: Lab 4 for Students to Complete and Submit
---

# Lab 4: Basic Data Structure and String Manipulation

## Lab Objectives

The **first investigation** in this lab will focus on Python's **Built-in Data Structures** objects. Each built-in data structure object has its own advantages and limitations. This lab will emphasize the most important differences between them.

The **second investigation** will focus on string objects. You have been using and storing string in objects since our first class, however in this lab we will dive into the more complex nature of string object manipulation. Finally, this lab will cover how to use a variety of built-in functions and string object methods for searching and performing input validation.

### Python Reference

As you develop your Python language skills, you may start to be "overwhelmed" with the volume of information that you have absorbed over these labs. One way to help is to learn to use online references effectively in order to obtain information regarding techniques and tools for manipulating various Python built-in objects in our Python scripts.

Below is a table with links to useful online Python reference sites (by category). You may find these references useful for your python coding tasks, etc.

| **Data Structures**	| **Lists & List Comprehension** | **Strings** | **Miscellaneous** |
| :--- | :--- | :--- | :--- |
| [Tuples](https://docs.python.org/3/tutorial/datastructures.html#tuples-and-sequences) | [Lists](https://docs.python.org/3/tutorial/introduction.html#lists) | [Strings](https://docs.python.org/3/tutorial/introduction.html#strings) | [Dictionaries](https://docs.python.org/3/tutorial/datastructures.html#dictionaries) |
| [Sets](https://docs.python.org/3/tutorial/datastructures.html#sets) | [More on Lists](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists) | [String Comparisons](https://docs.python.org/3/library/string.html) | |
| | [List Comprehensions](https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions) | | |

## Investigation 1: Data Structures

In this investigation, you will learn several data structure objects commonly used in Python scripting. These include **lists**, **tuples**, **sets**, and **dictionaries**.

### Part 1 - Tuples

Many often confuse a **tuple** with a **list** (which you learned about in a previous lab). A **tuple** is a type of list whose values cannot be changed. In fact, nothing in a tuple can be changed after it's created (like adding, removing list elements).

There are many advantages to using tuples when creating Python scripts:

  - **Data protection** (eg. values are NOT allowed to change so you won't modify them accidentally)
  - Tuples can be used as **keys in data dictionaries** (which are NOT allowed to change)
  - Tuples allow for **faster access** than lists

The term to indicate that a data structure cannot be changed is called **immutable** (as opposed to "_mutable_" which means the data structure can be changed).

**Perform the Following Steps:**

  1. Let's create two tuples in a temporary Python file, so we can learn how to use them and learn how they differ from lists.

      - Note: **tuples are defined by using parenthesis ( )** as opposed to **lists which are defined by using square brackets \[ \]**

```python
t1 = ('Prime', 'Ix', 'Secundus', 'Caladan')
t2 = (1, 2, 3, 4, 5, 6)
```

  2. Values from a tuple can be retrieved in the same way as a list. For example:

```python
print(t1[0])
print(t2[2:4])
```

  3. You can also check to see whether a value exists inside a tuple or not. To demonstrate try:

```python
print('Ix' in t1)
print('Geidi' in t1)
```

   - Let's now see how a tuple differs from a list. We will now create a list and note the difference between them:

```python
list2 = [ 'uli101', 'ops235', 'ops335', 'ops435', 'ops535', 'ops635' ]
```

  4. See if you can change the value of your list:

```python
list2[0]= 'ica100'
print(list2[0])
print(list2)
```

   - You should have been successful in changing the value of your list.

  5. Now, try changing the value of your previously-created tuple:

```python
t2[1] = 10
```

   - Did it work? Once created an item in a tuple can not be changed.

   - If you would like a tuple with an item different from the tuple you currently have, then you must create a new one.

  6. The following creates a new tuple (t3) with a contents from a slice of the t2 tuple. Slicing works the same way for tuples as for lists:

```python
t3 = t2[2:3]
```

  7. Also, as with lists, you can use for loops to iterate the values of tuples:

```python
for item in t1:
    print('item: ' + item)
```

### Part 2 - Sets

So far, you have been exposed to two structures that are used to contain data items: _lists_ and _tuples_. You can modify the values of any items within a list as well as modify the structure of a list (i.e. add and remove elements), whereby you cannot with a tuple.

In this section, you will learn about **sets**. A set has similar characteristics as a list, but there are two major differing characteristics:

   - Sets are **un-ordered**
   - Sets **cannot contain duplicate values**

Since new duplicate entries will be automatically removed when using sets, they are very useful for performing tasks such as **comparisons: finding similarities or differences in multiple sets.**

  1. Create some sets to work with in a temporary Python file:

```python
s1 = {'Prime', 'Ix', 'Secundus', 'Caladan'}
s2 = {1, 2, 3, 4, 5}
s3 = {4, 5, 6, 7, 8}
```

   - Note: **Sets are defined by using braces { }** as opposed to tuples which use parenthesis ( ), or lists which use square brackets [ ]

  2. Try to access a set through the index:

```python
print(s1[0])
```

   - This should have caused an **error**. You cannot access data inside a set this way because the elements inside are **unordered**. Instead, you should use the **in** operator to check to see whether a value is contained in the set:

```python
print('Ix' in s1)
print('Geidi' in s1)
```

   - **Sets can be combined**, but it is important to note that any **duplicate values (shared among sets) will be deleted.**

  3. Print the contents of the sets and note the values that are common:

```python
print(s2)
print(s3)
```

  4. This is how you get a set containing only UNIQUE values (no duplicates) from both sets:

```python
print(s2 | s3)         # returns a set containing all values from both sets
print(s2.union(s3))    # same as s2 | s3
```

   - Notice that both methods above have the same result, which one you choose depends purely on your style.

   - Instead of combining sets, we can display **values that are common to both sets**. This is known in mathematical terms as an **intersection** between the lists:

```python
print(s2 & s3)             # returns a set containing all values that s2 and s3 share
print(s2.intersection(s3)) # same as s2 & s3
```

  5. Sets can also have their values compared against other sets. First find out what items are in **s2** but not in **s3**. This is also called a **difference**:

```python
print(s2)
print(s3)
print(s2 - s3)             # returns a set containing all values in s2 that are not found in s3
print(s2.difference(s3))   # same as s2 - s3
```

  6. In order to see every difference between both sets, you need to find the **symmetric difference**. This will return a set that shows all numbers that both sets do not share together:

```python
print(s2 ^ s3)                     # returns a set containing all values that both sets DO NOT share
print(s2.symmetric_difference(s3)) # same as s2 ^ s3
```

   - Note: the **set()** function can convert lists into sets, and the **list()** function can convert sets into lists. The operations in this section can only be applied to sets, so if you need to perform a union, intersection, or difference between lists, you need to convert them to sets first. For example:

```python
l2 = [1, 2, 3, 4, 5]
l3 = [4, 5, 6, 7, 8]
temporary_set = set(l2).intersection(set(l3))
new_list = list(temporary_set)  # '''set()''' can make lists into sets. '''list()''' can make sets into lists.
print(new_list)
```

**Create a Python Script Demonstrating Comparing Sets**

**Perform the Following Instructions**

  1. Create the **~/ops435/lab4/lab4a.py** script. The purpose of this script will be to demonstrate the different way of comparing sets. There will be three functions, each returning a different set comparison.
  2. Use the following template to get started:

```python
#!/usr/bin/env python3

def join_sets(s1, s2):
    # join_sets will return a set that contains every value from both s1 and s2

def match_sets(s1, s2):
    # match_sets will return a set that contains all values found in both s1 and s2

def diff_sets(s1, s2):
    # diff_sets will return a set that contains all different values which are not shared between the sets

if __name__ == '__main__':
    set1 = set(range(1,10))
    set2 = set(range(5,15))
    print('set1: ', set1)
    print('set2: ', set2)
    print('join: ', join_sets(set1, set2))
    print('match: ', match_sets(set1, set2))
    print('diff: ', diff_sets(set1, set2))
```

   - The join\_sets() function should return a set that contains all values from both sets
   - The match\_sets() function should return a set that contains all values found in both sets
   - The diff\_sets() function should return a set that contains all values which are not shared between both sets
   - All three functions should accept **two arguments** both are sets
   - The script should show the exact output as the samples
   - The script should contain no errors

   - **Sample Run 1:**

```bash
./lab4a.py
set1:  {1, 2, 3, 4, 5, 6, 7, 8, 9}
set2:  {5, 6, 7, 8, 9, 10, 11, 12, 13, 14}
join:  {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14}
match:  {8, 9, 5, 6, 7}
diff:  {1, 2, 3, 4, 10, 11, 12, 13, 14}
```

   - Sample Run 2 (with import):

```python
import lab4a
set1 = {1,2,3,4,5}
set2 = {2,1,0,-1,-2}
print(lab4a.join_sets(set1,set2))
# Will output {-2, -1, 0, 1, 2, 3, 4, 5}
print(lab4a.match_sets(set1,set2))
# Will output {1, 2}
print(lab4a.diff_sets(set1,set2))
# Will output {-2, -1, 0, 3, 4, 5}
```

  3. Download the checking script and check your work. Enter the following commands from the bash shell:

```bash
cd ~/ops435/lab4/
pwd #confirm that you are in the right directory
ls CheckLab4.py || wget wget https://ict.senecacollege.ca/~eric.brauer/ops435/labs/LabCheckScripts/CheckLab4.py
python3 ./CheckLab4.py -f -v lab4a
```

  4. Before proceeding, make certain that you identify all errors in lab4a.py. When the checking script tells you everything is OK - proceed to the next step.

**Create a Python Script Demonstrating Comparing Lists**

**Perform the Following Instructions**

  1. Create the **~/ops435/lab4/lab4b.py** script. The purpose of this script will be to improve the previous script to perform the same joins, matches, and diffs, but this time on lists.
  2. Use the following as a template:

```python
#!/usr/bin/env python3

def join_lists(l1, l2):
    # join_lists will return a list that contains every value from both l1 and l2

def match_lists(l1, l2):
    # match_lists will return a list that contains all values found in both l1 and l2

def diff_lists(l1, l2):
    # diff_lists will return a list that contains all different values, which are not shared between the lists

if __name__ == '__main__':
    list1 = list(range(1,10))
    list2 = list(range(5,15))
    print('list1: ', list1)
    print('list2: ', list2)
    print('join: ', join_lists(list1, list2))
    print('match: ', match_lists(list1, list2))
    print('diff: ', diff_lists(list1, list2))
```

   - The match_lists() function should return a list that contains all values found in both lists
   - The diff_lists() function should return a list that contains all values which are not shared between both lists
   - The join_lists() function should return a list that contains all values from both lists
   - All three functions should accept **two arguments** both are lists
   - The script should show the exact output as the samples
   - The script should contain no errors

   - **Sample Run 1:**

```bash
./lab4b.py
list1:  [1, 2, 3, 4, 5, 6, 7, 8, 9]
list2:  [5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
join:  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
match:  [5, 6, 7, 8, 9]
diff:  [1, 2, 3, 4, 10, 11, 12, 13, 14]
```

   - **Sample Run 2 (with import) under interactive python shell:**

```python
import lab4b
list1 = [1,2,3,4,5]
list2 = [2,1,0,-1,-2]
print(lab4b.join_lists(list1,list2)))
# Will output [0, 1, 2, 3, 4, 5, -2, -1]
print(lab4b.match_lists(list1,list2))                                                                                                                 
# Will output [1, 2]
print(lab4b.diff_lists(list1,list2))                                                                                                                  
# Will output [0, 3, 4, 5, -2, -1]
```

  3. Download the checking script and check your work. Enter the following commands from the bash shell.

```bash
cd ~/ops435/lab4/
pwd #confirm that you are in the right directory
ls CheckLab4.py || wget https://ict.senecacollege.ca/~eric.brauer/ops435/labs/LabCheckScripts/CheckLab4.py
python3 ./CheckLab4.py -f -v lab4b
```

  4. Before proceeding, make certain that you identify all errors in lab4b.py. When the checking script tells you everything is OK - proceed to the next step.

### Part 3 - Dictionaries

In Python, a **dictionary** is a set of key-value pairs. Dictionaries are **unordered**, like sets, however any value can be retrieved from a dictionary if you know the key. This section will go over how to create, access, and change dictionaries, giving you a new powerful tool to store and manipulate data.

**Perform the Following Steps:**

  1. Let's begin by creating a new dictionary in a temporary Python file:

```python
dict_york = {'Address': '70 The Pond Rd', 'City': 'Toronto', 'Postal Code': 'M3J3M6'}
```

   - You should note that the syntax to define a dictionary is similar to defining sets (i.e. using **{}**), but unlike sets dictionaries use `key:value` pairs within the dictionary, each _key:value_ pair is separated by commas.

  2. All the values in a dictionary can be retrieved by using the **dictionary.values()** function. This particular function provides a **list** containing all values:

```python
print(dict_york.values())
```

   - All keys to access the _key:pair_ values within a dictionary can be retrieved using the **dictionary.keys()** function:

```python
dict_york.keys()
```

   - We can retrieve individual values from a dictionary by providing the key associated with the value:

```python
print(dict_york['Address'])
print(dict_york['Postal Code'])
```

  3. Dictionary keys can be any **immutable** values (i.e. not permitted for value to be changed). Types of values include: **strings**, **numbers**, and **tuples**.
  4. Try adding a new key and value to the dictionary:

```python
dict_york['Country'] = 'Canada'
print(dict_york)
print(dict_york.values())
print(dict_york.keys())
```

  5. Let's change the province value to BC:

```python
dict_york['Province'] = 'BC'
print(dict_york)
print(dict_york.values())
print(dict_york.keys())
```

   - **WARNING: Dictionary keys must be unique**. Attempting to add a key that already exists in the dictionary will overwrite the existing value for that key! For example:

```python
dict_york['Province'] = 'ON'
print(dict_york)
print(dict_york.values())
print(dict_york.keys())
```

   - You should notice that value for the 'Province' key has been changed back to 'ON'.
   - The lists that contain the values and keys of the dictionary are not real python lists - they are "views of the dictionary" and therefore are immutable. You could change these views into usable lists by using the list() function:

```python
list_of_keys = list(dict_york.keys())
print(list_of_keys[0])
```

  6. Lists can be used with **for loops**:

```python
list_of_keys = list(dict_york.keys())
for key in list_of_keys:
    print(key)
for value in dict_york.values():
    print(value)
```

**Create a Python Script for Managing Dictionaries**

**Perform the Following Instructions**

  1. Create the **~/ops435/lab4/lab4c.py** script. The purpose of this script will be to create dictionaries, extract data from dictionaries, and to make comparisons between dictionaries.
  2. Use the following as a template:

```python
#!/usr/bin/env python3

# Dictionaries
dict_york = {'Address': '70 The Pond Rd', 'City': 'Toronto', 'Country': 'Canada', 'Postal Code': 'M3J3M6', 'Province': 'ON'}
dict_newnham = {'Address': '1750 Finch Ave E', 'City': 'Toronto', 'Country': 'Canada', 'Postal Code': 'M2J2X5', 'Province': 'ON'}
# Lists
list_keys = ['Address', 'City', 'Country', 'Postal Code', 'Province']
list_values = ['70 The Pond Rd', 'Toronto', 'Canada', 'M3J3M6', 'ON']

def create_dictionary(keys, values):
    # Place code here - refer to function specifics in section below

def shared_values(dict1, dict2):
    # Place code here - refer to function specifics in section below


if __name__ == '__main__':
    york = create_dictionary(list_keys, list_values)
    print('York: ', york)
    common = shared_values(dict_york, dict_newnham)
    print('Shared Values', common)
```

   - The script should contain **two** functions:

        - **create_dictionary()**

        1. **accepts** two lists as arguments keys and values, **combines** these lists together to **create** a dictionary (**Tip**: use a while loop to access elements in both the keys and values lists at the same time)
        2. **returns a dictionary** that has the keys and associated values from the lists

        - **shared_values()**
        1. **accepts** two dictionaries as arguments and **finds** all values that are shared between the two dictionaries (**Tip**: generate sets containing only values for each dictionary, then use a function mentioned in a previous section to store the values that are common to both lists)
        2. **returns a set** containing **ONLY values** found in **BOTH dictionaries**

   - make sure the functions have the correct number of arguments required
   - The script should show the exact output as the samples
   - The script should contain no errors

   - **Sample Run 1:**

```bash
./lab4c.py
York:  {'Country': 'Canada', 'Postal Code': 'M3J3M6', 'Address': '70 The Pond Rd', 'Province': 'ON', 'City': 'Toronto'}
Shared Values {'Canada', 'ON', 'Toronto'}
```

   - **Sample Run 2 (with import):**

```python
import lab4c
dict_york = {'Address': '70 The Pond Rd', 'City': 'Toronto', 'Country': 'Canada', 'Postal Code': 'M3J3M6', 'Province': 'ON'}
dict_newnham = {'Address': '1750 Finch Ave E', 'City': 'Toronto', 'Country': 'Canada', 'Postal Code': 'M2J2X5', 'Province': 'ON'}
list_keys = ['Address', 'City', 'Country', 'Postal Code', 'Province']
list_values = ['70 The Pond Rd', 'Toronto', 'Canada', 'M3J3M6', 'ON']

york = lab4c.create_dictionary(list_keys, list_values)

print(york)
# Will print: {'Address': '70 The Pond Rd',
               'City': 'Toronto',
               'Country': 'Canada',
               'Postal Code': 'M3J3M6',
               'Province': 'ON'}

common = lab4c.shared_values(dict_york, dict_newnham)

print(common)
# Will print: {'Canada', 'ON', 'Toronto'}
```

  3. Download the checking script and check your work. Enter the following commands from the bash shell.

```bash
cd ~/ops435/lab4/
pwd #confirm that you are in the right directory
ls CheckLab4.py || wget https://ict.senecacollege.ca/~eric.brauer/ops435/labs/LabCheckScripts/CheckLab4.py
python3 ./CheckLab4.py -f -v lab4c
```

  4. Before proceeding, make certain that you identify all errors in lab4c.py. When the checking script tells you everything is OK proceed to the next step.

## Investigation 2: Strings

Strings are basically a list of characters (bits of text). This section will investigate strings in more detail such as **cutting strings into sub-strings**, **joining strings**, **formatting strings**, **searching through strings**, and **matching strings against patterns**.

Strings are **immutable** data objects - this means that once a string is created, it cannot be modified. In order to make a change inside a string, you would first make a copy of the part of the string (i.e. sub-string) for manipulation.

### Part 1 - Strings and Substrings

This first part will explain basic concepts of using strings, printing strings, and manipulating sub-strings.

**Perform the Following Steps:**

  1. Create some strings in a temporary Python file:

```python
course_name = 'Open System Automation'
course_code = 'OPS435'
course_number = 435
```

   - Strings can contain any **characters** inside them, whether they are **letters**, **numbers**, or **symbols**.

  2. Strings can also be **concatenated** (i.e. "combined together") by using the **+** sign, just make sure string are only concatenating strings with strings (no lists, no numbers, no dictionaries, etc.):

```python
print(course_name)
print(course_code)
print(str(course_number))
print(course_name + ' ' + course_code + ' ' + str(course_number))
```

   - When using the **print()** function, you can display **special characters**. One such special character is the is the newline character (denoted by the symbol: \n). This allows you to separate content between new lines or empty lines:

```python
print('Line 1\nLine 2\nLine 3\n')
```

  3. Strings have many built-in functions that we can use to manipulate text. [Here's a list](https://docs.python.org/3/library/stdtypes.html#string-methods).

  4. Lets try out several different functions:

```python
print(course_name.lower())         # Returns a string in lower-case letters
print(course_name.upper())         # Returns a string in upper-case letters
print(course_name.swapcase())      # Returns a string with upper-case and lower-case letters swapped
print(course_name.title())         # Returns a string with upper-case first letter of each word, lowercase for remaining text
print(course_name.capitalize())    # Returns a string with upper-case first letter only, lowercase for remaining text
```

  5. These values can be saved inside new strings and then reused:

```python
lower_name = course_name.lower()    # Save returned string lower-case string inside new string variable
print(lower_name)
```

  6. If a string contains many values separated by a single character, such as a space, the string can be split on those values and create a list of values

```python
lower_name.split(' ')       # Provide the split() function with a character to split on
```

   - The above example will return a list of strings, which we can access just like all of lists.

  7. Let's practice more string manipulation:

```python
list_of_strings = lower_name.split(' ')     # Split string on spaces and store the list in a variable
print(list_of_strings)                      # Display list
print(list_of_strings[0])                   # Display first item in list
```

   - Since lists are actually a list of **strings**, you should be able to use any function that works with a string on a list:

```python
list_of_strings[0].upper()           # Use the function after the index to affect a single string within a list
first_word = list_of_strings[0]
print(first_word)
```

   - The **index** that is used to access items within a list, can also be used to access characters within a string. For practice, let's create a new string, and start accessing the strings index:

```python
course_name = 'Open System Automation'
course_code = 'OPS435'
course_number = 435
print(course_code[0])                          # Print the first character in course_code
print(course_code[2])                          # Print the third character in course_code
print(course_code[-1])                         # Print the last character in course_code
print(str(course_number)[0])                   # Turn the integer into a string, return first character in that string, and print it
print(course_code[0] + course_code[1] + course_code[2])
```

  8. You can use a technique that uses index numbers of a string to **cut-out** or "**parse**" smaller portions of text within a string. This term is referred to as a **substring**. We can use this to create a new string or display only a small portion of it:

```python
print(course_name[0:4])                 # Print the first four characters (values of index numbers 0,1,2, and 3) 
first_word = course_name[0:4]           # Save this substring for later use
print(course_code[0:3])                 # Print the first three characters (values of index numbers 0,1,and 2)
```

  9. The index allows a few **extra functions** using the same parsing technique:

```python
course_name = 'Open System Automation'
print(course_name[12:])                        # Print the substring '12' index until end of string
print(course_name[5:])                         # Print the substring '5' index until end of string
print(course_name[-1])                         # Print the last character
```

   - With **negative indices**, **-1** would represent the **last** character, **-2** index would represent the **second last** character, etc.:

```python
course_name = 'Open System Automation'
print(course_name[-1])
print(course_name[-2])
```

  10. Practice some of the skills that you have learned in this section:

```python
course_name = 'Open System Automation'
print(course_name[-10:])                            # Return the last ten characters
print(course_name[-10:-6])                          # Try and figure out what this is returning 
print(course_name[0:4] + course_name[-10:-6])       # Combine substrings together
substring = course_name[0:4] + course_name[-10:-6]  # Save the combined substring as a new string for later
print(substring)
```

  11. The real power found in substrings goes beyond just manually writing index values and getting back words. The next part of this investigation will cover how to search through a string for a specific word, letter, number, and return the index to that search result.

**Create a Python Script Demostrating Substrings**

**Perform the Following Instructions**

  1. Create the **~/ops435/lab4/lab4d.py** script. The purpose of this script is to demonstrate creating and manipulating strings. There will be four functions each will return a single string.
  2. Use the following template to get started:

```python
#!/usr/bin/env python3
# Strings 1

str1 = 'Hello World!!'
str2 = 'Seneca College'

num1 = 1500
num2 = 1.50

def first_five():
    # Place code here - refer to function specifics in section below

def last_seven():
    # Place code here - refer to function specifics in section below

def middle_number():
    # Place code here - refer to function specifics in section below

def first_three_last_three():
    # Place code here - refer to function specifics in section below


if __name__ == '__main__':
    print(first_five(str1))
    print(first_five(str2))
    print(last_seven(str1))
    print(last_seven(str2))
    print(middle_number(num1))
    print(middle_number(num2))
    print(first_three_last_three(str1, str2))
    print(first_three_last_three(str2, str1))
```

   - The script should contain **four** functions (use your own argument names):

        - **first_five():**
        
        1. Accepts a single string argument
        2. Returns a string that contains the first five characters of the argument given

        - **last_seven():**

        1. Accepts a single string argument
        2. Returns a string that contains the last seven characters of the argument given

        - **middle_number():**

        1. Accepts a integer as a argument
        2. Returns a string containing the second and third characters in the number

        - **first_three_last_three():**

        1. Accepts two string arguments
        2. Returns a single string that starts with the first three characters of argument1 and ends with the last three characters of argument2

   - Example: first\_three\_last\_three('abcdefg', '1234567') returns single string 'abc567'

   - **Sample Run 1**

```bash
./lab4d.py 
Hello
Senec
World!!
College
50
.5
Helege
Send!!
```

   - **Sample Run 2 (with import)**

```python
import lab4d

str1 = 'Hello World!!'
str2 = 'Seneca College'
num1 = 1500
num2 = 1.50

print(lab4d.first_five(str1))
# Will output 'Hello'
print(lab4d.first_five(str2))
# Will output 'Senec'
print(lab4d.last_seven(str1))
# Will output 'World!!'
print(lab4d.last_seven(str2))
# Will output 'College'
print(lab4d.middle_number(num1))
# Will output '50'
print(lab4d.middle_number(num2))
# Will output '.5'
print(lab4d.first_three_last_three(str1, str2))
# Will output 'Helege'
print(lab4d.first_three_last_three(str2, str1))
# Will output 'Send!!'
```

  3. Download the checking script and check your work. Enter the following commands from the bash shell.

```bash
cd ~/ops435/lab4/
pwd #confirm that you are in the right directory
ls CheckLab4.py || wget https://ict.senecacollege.ca/~eric.brauer/ops435/labs/LabCheckScripts/CheckLab4.py
python3 ./CheckLab4.py -f -v lab4d
```

  4. Before proceeding, make certain that you identify all errors in lab4d.py. When the checking script tells you everything is OK - proceed to the next step.

### Part 2 - Searching and Validating

This second part will study how to look for specific character(s) in a string object and also how to verify that a given string object contains only certain type of characters.

**Perform the following steps:**

  1. Create a temporary python script with the following contents:

```python
text = 'Seneca'
letter = text[1]
print(letter)
```

   - 'text' is a string object which contains a sequence of characters. You can access any characters from a string object one at a time with the bracket operator '\[1\]'. The number (or expression) in the square brackets is called an index and it must be an integer. Note that the first letter in an string object has an index of 0. The use of index in Python is usually consider as an offset from the beginning of the string; and the offset of the first character is zero.

  2. Modify the previous python file to:

```python
text = 'Seneca'
offset = 0
length = len(text)
while offset < length:
    print(offset, text[offset])
    offset = offset + 1
```

   - **len()** is a built-in function which returns the number of characters when a string object is passed to it as an argument. We normally refer this return number as the length of the string object. The maximum offset (i.e. index) a string object can have is its length minus 1. The while loop traverses the string object and displays each character on a line by itself with the offset (index) value that was used to retrieve the character. The loop condition "offset < length" will be **False** when offset is equal to the length of the string, and the loop will stop. The last character printed is the one with the offset equal to **length - 1**, which is the last character in the string object.

  3. String object is, like a list object, an iterable object. Each character in a string object can be traversed by using the **for** **..** **in** **..** construct as shown in the Python code below:

```python
text = "Seneca"
for letter in text:
    print(letter)
```

   - You can use the above python code as a template to create a function to search for a specific character in a string object.

  4. Consider the following python code:

```python
def find(text,char):
    for letter in text:
        if letter == char:
             return True
    return False

if __name__ == '__main__':
    s1 = 'Seneca'
    print(s1,'contains letter s? ->',find(s1,'s'))
    print(s1,'contains letter S? ->',find(s1,'S'))
```

   - The find() function defined above, is not needed, as it can be replaced by the python keyword **in**, which can be used as a boolean operator. This boolean operator takes two strings, and return **True** if the first appears as a substring in the second.

Try the following python script:

```python
s1 = 'Seneca'
print(s1, 'contains letter s? ->', 's' in s1)
print(s1, 'contains letter S? ->', 'S' in s1)
```

Did it produce the same result as the find() function in previous python code example?

  1. Try the following python code to search and count for all vowel characters in a string object:

```python
def is_vowel(char):
    if char in 'aeiou':
        return True
    return False
      
if __name__ == '__main__':
    text = 'Seneca'
    vowel_count = 0
    for char in text:
        if is_vowel(char):
             vowel_count = vowel_count + 1
    print('There are',vowel_count,'vowel(s) in',text)
```

Can you create a similar python function called is_digits() to check whether a string object contains only numeric digits? Do you still remember what does the built-in function input() do? It prompts the user on the keyboard and return whatever the user typed as a string!

**Create a Python script to validate user input**

**Perform the following instructions**

  1. Create the **~/ops435/lab4/lab4e.py** script. The purpose of this script is to define a function called is_digits(), which takes a string object as its argument and return True if all the characters in the string are all digits, i.e 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9; return False if any one of the characters is not a digit.

  2. Use the following template to get started:

```python
#!/usr/bin/env python3
# Author ID: [seneca_id]

def is_digits(sobj):
    # place code here - loop through each character in sobj 

if __name__ == '__main__':
    test_list = ['x3058','3058','8503x','8503']
    for item in test_list:
        if is_digits(item):
            print(item,'is an integer.')
        else:
            print(item,'is not an integer.')
```

   - **Sample run 1:**

```bash
./lab4e.py
x3058 is not an integer.
3058 is an integer.
8503x is an not integer.
8503 is an integer.
```

   - **Sample run 2 (with import):**

```python
import lab4e

print(is_digits('65'))
# will output True
print(is_digits('1F'))
# will print False
print(is_digits('-12'))
# will print False
```

  3. Download the checking script and check your work. Enter the following commands from the bash shell:

```bash
cd ~/ops435/lab4/
pwd #confirm that you are in the right directory
ls CheckLab4.py || wget https://ict.senecacollege.ca/~eric.brauer/ops435/labs/LabCheckScripts/CheckLab4.py
python3 ./CheckLab4.py -f -v lab4e
```

  4. Before proceeding, make certain that you identify all errors in lab4e.py. When the checking script tells you everything is OK - proceed to the next step.

## Lab 4 Sign-Off (Completing the lab)

Capture and name the output of `python3 ./CheckLab4.py -f -v` as lab4\_\[seneca\_id\].txt.

Upload the following files individually to blackboard:

- [x] `lab4_[seneca_id].txt`
- [x] `lab4a.py, lab4b.py, lab4c.py, lab4d.py, and lab4e.py`

## Lab Review

  1. What is the purpose of a **tuple**? How does a tuple differ from a list?
  2. How do you define elements within a tuple?
  3. Write Python code to confirm if the string '**OPS435**' exists within the tuple called **courses**.
  4. What is the purpose of a **set**? How do sets differ from lists or tuples?
  5. How do you define elements within a set?
  6. Assuming you have defined two sets called **set1** and **set2**. Write Python code to:

        1. Return a set containing all values of both sets
        2. Returns a set containing all values in set1 that are not found in set2
        3. Return a set containing all values that both sets DO NOT share

  7. What is the purpose of a dictionary?
  8. How do you define elements within a dictionary?
  9. Write Python commands to display for a dictionary called **my\_dictionary** the dictionary key called **my\_key** and a dictionary value for that key?
  10. What is the purpose for the **range()**, **len()**, **append()**, and **map()** functions for a dictionary?
  11. List and briefly explain the following string methods: **lower()** , **upper()** , **swapcase()** , **title()** , **captilize()** , **split()**
  12. Assume you issued the following command in your ipython3 shell:

   - `course_name = 'Programming with Python'`

   - What will be the output for each of the following Python commands?

        1. `course_name[3:11]`
        2. `course_name[10:]`
        3. `course_name[-1]`

  13. Create a string object **text = "Seneca"** in the Python Interactive shell and study the string methods: **text.find()**, **text.count()** using the built-in help() function.
