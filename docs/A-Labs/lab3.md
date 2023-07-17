---
id: lab3
title: Lab 3
sidebar_position: 3
description: Lab 3 for Students to Complete and Submit
---

# Lab 3: Reusing Python Code

## Lab Objectives

In this lab, you will learn how to identify and create different types of **functions**, study the properties of **list objects** and learn how to manipulate them using their built-in methods, and finally we will explore how **loop** can be used to reduce code repetition.

**Objectives**

Write Python code in order to:

  - **Call built-in and user created functions** - using the **def** and **import** keywords to create and use user defined functions, understand the **None** keyword, study the **os.system()**, **os.popen()**, and **subprocess.Popen()** functions
  - **Obtain properties and manipulate list object** - using the built-in function: len(), min(), max(), and list object methods: copy(), sort(), append(), insert(), and remove()
  - **Looping through lists** - Looping (iteration) is the method of using loop to process items in a list object one at a time using the same code to reduce code repetition in your Python script. This will result in a better, more efficient and effective program execution.

## Investigation 1: Creating Simple Functions

"In the context of computer programming, a **function** is a named sequence of statements that perform a computation" -- Think Python 2nd Edition by Allen Donway.

Usually, a **function** contains **programming code** and most likely placed near the top of a python file, and before the main processing section.

When a Python program is run, the **function's code is read into the corresponding process memory**, waiting to be executed when the function is called. Until a Function is specifically called, its code will sit still in the memory.

When creating programs that define and use functions, **a large programming task can be broken-down into smaller elements** (or **modules**). This is why creating programs that use functions is referred to as "**modular programming**".

### Four type of Functions

There are four major type of functions based on the arguments they will take and the value (or stuff) they will return:

  1. function that does not take any function argument or return a value
  2. function that does not take any function argument but do return a value
  3. function that takes function argument(s) but does not return a value
  4. function that takes function argument((s) and also return value(s)

### Part 1 - Function that does not take argument or return value

In this investigation, we will focus on creating functions that **do NOT** return a value.

You will now learn how to define and run functions that print **string data** to standard output (default to screen) when a function is called.

**Perform the Following Steps:**

  1. Create a new python file for testing code in this section.
  2. Whenever you want to create a function, you must start with the keyword "**def**". The **def** keyword is used to start the definition of the function, and it should be followed first by the name of the function, and secondly arguments (if there is any) it expected, and finally a ":". When the python interpreter see the function declaration and its code, it does not run the code right wary. Functions, just like if statements, must have all code under them indented.

```python
def hello():
    print('Hello World')
    print('Inside a Function')
```

  3. Executing your file you should have noticed that nothing happened. Well actually, something did happen... the function called **hello()** has been defined and stored in process's memory in order for it to run when called by its function name. Now that our function was created, we can use it over and over.
  4. To execute the code inside the function, run the function name with "**()**" **brackets** at the end of the function name.
Try calling the **hello()** function by name three times by adding the following three lines after the function declaration, like this:

```python
def hello():
    print('Hello World')
    print('Inside a Function')

hello()
hello()
hello()
```

   - You should notice that the function just does the same thing over-and-over no matter how many times your call the function by name. On one hand, that is OK. On the other hand, you may want to create and use a function to do something useful, like perform error checking or some other task that report something back to the **caller** for further processing. For example, return a **true** or **false** value by an error checking function that was called to check where there is an error. But let's stick to some simple examples first, before tackling more complex use of functions. In Python, when a function does not return a value, the Python interpreter will automatically return a special Python object called **None**. **None** is a Python 3.x keyword which is used to indicate that there is "nothing". 'None' is not the same as an empty object, like an empty string. Let update the above Python script to the following version:

```python
def hello():
    print('Hello World')
    print('Inside a Function')

my_stuff = hello()
print('Stuff return from hello():',my_stuff)
print('the object my_stuff is of type:',type(my_stuff))
```

   - You can assume that there is a hidden **return** statement at the end of any function if it does not have one implicitly. The following python script should produce the same result as the one above:

```python
def hello():
    print('Hello World')
    print('Inside a Function')
    return

my_stuff = hello()
print('Stuff return from hello():',my_stuff)
print('the object my_stuff is of type:',type(my_stuff))
```

### Part 2 - Function that does not take argument but returns a string

  1. Let's create a function that **returns** some data to the caller after the function is called. This function does not print out any text: instead; it creates new objects and at the end, returns one of the object named **greeting**, which is a string object containing 'Good Morning Terry'.

```python
def return_text_value():
    name = 'Terry'
    greeting = 'Good Morning ' + name 
    return greeting
```

  2. Call the function like this:

```python
return_text_value()
```

   - One major difference between a function **returning a value** and simply **printing a value** is that **returned** values can be caught and assigned to a object and can be used in the program (that called the function) at a later time. Once the returned value has been assigned to an object, it can be printed, manipulated, compared in IF statements, etc. Below will cover how to assign a returned value to an object.

  3. Notice that this syntax looks just the call to the input() function which you've used in the last lab:

```python
text = return_text_value()
```

  4. Now the returned string from the function has been assigned to an object named "**text**". It can be used like any string object now.

```python
print(text)
```

### Part 3 - Function that does not take argument but returns an number

You will now learn how to define and call functions that will return **integer data**. In this section, you will define a function that will be returning an integer values instead of string. There is not a big difference, but when returning number values, care needs to be taken if you try combining it with a string!

**Perform the Following steps:**

  1. Define the return_number_value() function:

```python
def return_number_value():
    num1 = 10
    num2 = 5
    num3 = num1 + num2
    return num3
```

  2. And call it:

```python
number = return_number_value()
print(number)
print(number + 5)
print(return_number_value() + 10)
```

   - What do you notice?

  3. Now, display both strings and numbers:

```python
number = return_number_value()
print('my number is ' + number)
```

   - What do you notice? You should notice a warning message. This occurs because the returning value is a **numeric** object and NOT a **string** object! Combining numbers and strings in a statement (such as **print()**) can cause errors. The error message should appear similar to the one displayed below:

```bash
Traceback (most recent call last):
  File "test.py", line 2, in <module>
    print('my number is ' + number)
TypeError: cannot concatenate 'str' and 'int' objects
```

  4. If a number needs to be combined with a string, use the **str()** predefined function that was discussed in a previous lab in order to convert the returned number object into a string object:

```python
number = return_number_value()
print('my number is ', number)
print('my number is ' + str(number))
print('my number is ' + str(return_number_value()))
```

### Part 4 - Creating a Python Script with Functions and use them in another Python script

**Creating a Python Script**

Now it's time to create a Python script that defines two functions. One function returns a string value to greet the user, where the other function returns the result of adding two values (the two values are stored within the function as integer objects).

**Perform the following Instructions:**

  1. Create a new script **~/ops435/lab3/lab3a.py**

   - **Input / Output Requirements**

      - The script should have a **Shebang line**
      - Below the **Shebang line**, add an **empty line** followed by a comment stating: **\# return_text_value() function**
      - Add an **comment line** and put the string **Author ID**: followed by your \[seneca_id\] in that line
      - Add an **empty line** followed by the **return\_text\_value()** function **definition** that you previously entered in part 3.
      - Add another **empty line** followed by a comment stating: **\# return_number_value() function**
      - Add another **empty line** following by the **return\_number\_value()** function **definition** that you previously entered in the shell.
      - Add a **couple of empty lines**, following by a comment stating: **\# Main Program**
      - Add another **couple of empty lines**, followed by the statements displayed below:

```python
if __name__ == '__main__':
    print('python code')
    text = return_text_value()
    print(text)
    number = return_number_value()
    print(str(number))
```

   - Running your program you should have seen three lines being displayed: the text "python code", a greeting, and a result of a math calculation. The if statement in the code above is a special if statement needed to make sure that your "main" code only runs when your script is executed by the Python interpreter directly, and will be ignored when your python file is being imported by other script, or by an interactive python shell. More on that later.

**Importing Functions From other Python Scripts**

In order to use functions from other scripts, you use the **import** statement.

  1. Let's see what happens if we forget to import functions from your lab3a.py script prior to calling a function. Create a new python file and try to call the return\_text\_value() function:

```python
text = lab3a.return_text_value()
```

   - You should notice an error indicating **"name 'lab3a' is not defined"**. This error occurs since you failed to instruct python to **import** or "load existing defined functions from your lab3a.py script" to your new running python script's **process memory**.

  2. Modify your script like this:

```python
import lab3a
text = lab3a.return_text_value()
print(text)
lab3a.return_number_value()
```

   - You should notice that although your script runs without any error, however, it only prints out text returned from the return_text_vaule() function. It does not print out the value returned from the return_number_value() function. Modify the last line like this:

```python
import lab3a
text = lab3a.return_text_value()
print(text)
print(lab3a.return_number_value())
```

   - You should see the values retuned form all of the function calls now.

  3. Download the checking script and check your work. Enter the following commands from the bash shell.

```bash
cd ~/ops435/lab3/
pwd #confirm that you are in the right directory
ls CheckLab3.py || wget wget https://ict.senecacollege.ca/~raymond.chan/ops435/labs/LabCheckScripts/CheckLab3.py
python3 ./CheckLab3.py -f -v lab3a
```

  4. Before proceeding, make certain that you identify any and all errors in lab3a.py. When the checking script tells you everything is OK before proceeding to the next step.

## Investigation 2: Functions With Arguments And Return Values

### Part 1 - Providing Functions With Arguments

Functions can receive **arguments** - data to be used for processing. In this section, you will learn how to define functions that accept arguments and learn how to call functions with arguments (such as mathematical operations or testing conditions, which is useful for error-checking).

**Passing up Single and Multiple Arguments to a Function**

**Perform the Following Steps:**

  1. Create a new Python file for testing.
  2. When passing arguments to functions, you put data such as **strings**, **numbers**, or **other object names** within brackets immediately following the function name.

   - NOTE: If a function accepts arguments, then those arguments must be declared (using argument names) when the function is declared. Those declared names are then used within the function for processing. Also, when you call a function with arguments, the number of arguments passed up to the function must match the number of arguments that were specified in the function declaration.

  3. Define a function called **square()**:

```python
def square(number):
    return number ** 2
```

   - **FYI:** You may have learned that you multipley a number by itself in order to "square" the number. In python, the \*\* operator will raise the operand on the left to the power of the operand on the right, which will give the same result as muliplying the number by itself.

   - When calling functions with multiple arguments, the arguments are separated by **commas**. See what happens if you provide strings, strings without using quotes, or numbers with decimals in the following examples.

  4. Test your **square()** function:

```python
def square(number):
    return number ** 2
square(5)
square(10)
square(12)
square(square(2))
square('2')
```

   - Notice that nothing is printed by the above script, you need to print the values the functions return to see what they are. Update your test script as shown below:

```python
def square(number):
    return number ** 2
print(square(5))
print(square(10))
print(square(12))
print(square(square(2)))
print(square('2'))
```

  5. The last function call should produce an **error message**. This is caused by sending a **string** instead of a number that is processed by the function. We could use the int() function to convert any value passed in as a string by mistake to an integer number.

  6. Declare the function sum_numbers():

```python
def sum_numbers(number1, number2):
    return int(number1) + int(number2)
```

  7. Call that function to see what happens:

```python
sum_numbers(5, 10)
sum_numbers(50, 100)
```

  8. You can also do what looks like calling a function within another function, but it's actually just calling sum_numbers() first, then calling square() with the return from sum_numbers as an argument:

```python
square(sum_numbers(5, 5))
```

   - **NOTE**: Running functions with multiple arguments is the same. When call a function as an argument of another function, the **inner-most function will run first**, and the return the value from that will be used as the argument for the **outer function**. In the example below, **sum\_numbers(5, 5)** will return **10**, thus providing that result to be square with that value **square(10)**.

**Practice Creating a Function that Accepts Arguments and Returns a Value**

It is time to practice creating a shell script that uses a function that accepts arguments, and returns a value.

**Perform the Following Instructions:**

  1. Create a new script **~/ops435/lab3/lab3b.py**. Refer to the **Python Script template** and the **Additional Requirements** sections when creating your Python script. Refer to Sample Run and Sample Imports displayed below for exact prompt and output

   - **Python Script Template**

```python
#!/usr/bin/env python3
'''Lab 3 Part 1 script - functions'''
# Author ID: [seneca_id] 

def sum_numbers(number1, number2):
    # Make this function add number1 and number2 and return the value

def subtract_numbers(number1, number2):
    # Make this function subtract number1 and number2 and return the value
    # Remember to make sure the function accepts 2 arguments

def multiply_numbers(number1, number2):
    # Make this function multiply number1 and number2 and return the value
    # Remember to make sure the function accepts 2 arguments

if __name__ == '__main__':
    print(sum_numbers(10, 5))
    print(subtract_numbers(10, 5))
    print(multiply_numbers(10, 5))
```

   - **Additional Requirements**

      - All functions should accept two arguments
      - All functions should return an integer
      - The script should contain no errors

   - **Sample Run:**

```bash
./lab3b.py
15
5
50
```

   - **Other examples:**

```python
import lab3b

lab3b.sum_numbers(10, 5)
# Will return 15
lab3b.sum_numbers(25, 25)
# Will return 50
lab3b.subtract_numbers(10, 5)
# Will return 5
lab3b.subtract_numbers(5, 10)
# Will return -5
lab3b.multiply_numbers(10, 5)
# Will return 50
lab3b.multiply_numbers(10, 2)
# Will return 20
```

  2. Download the checking script and check your work. Enter the following commands from the bash shell.

```bash
cd ~/ops435/lab3/
pwd #confirm that you are in the right directory
ls CheckLab3.py || wget https://ict.senecacollege.ca/~raymond.chan/ops435/labs/LabCheckScripts/CheckLab3.py
python3 ./CheckLab3.py -f -v lab3b
```

  3. Before proceeding, make certain that you identify any and all errors in lab3b.py. When the checking script tells you everything is OK - proceed to the next step.

**Passing up Multiple Arguments and Using Conditional Statements**

You will now create a more complex function that will not only accept arguments, but also include logic to control the flow of the function and what value it returns, and therefore affect how your Python script will response. You will create a function that uses an **if/elif/else** statement.

**Perform the Following Steps:**

  1. Use a temporary Python file to define the following function:

```python
def describe_temperature(temp):
    if temp > 30:
        return 'hot'
    elif temp < 0:
        return 'cold'
    elif temp == 20:
        return 'perfect'
    return 'ok'
```

   - The final **return** "**ok**" will only take place if a previous return has not taken place before it. Once return has been used in a function, the function immediately exits and returns the value to the caller.

  2. Call describe_temperature like this to confirm the results:

```python
print(describe_temperature(50))
# Will return 'hot'
print(describe_temperature(20))
# Will return 'perfect'
print(describe_temperature(-50))
# Will return 'cold'
print(describe_temperature(25))
# Will return 'ok'
print(describe_temperature(10))
# Will return 'ok'
```

**Create a Python Function Receiving Multiple Arguments**

**Perform the Following Instructions:**

  1. Create the **~/ops435/lab3/lab3c.py** script. The purpose of the script is to have a single function that can perform addition, subtraction, or multiplication on a pair of numbers. But the function will allow us to choose exactly what operation we want to perform on the two numbers when we call it. If the operate function does NOT understand the operator given, it should return an error message (e.g. calling the function to 'divide' two numbers).
  2. Use this template to get started:

```python
#!/usr/bin/env python3
'''Lab 3 Inv 2 function operate '''
# Author ID: [seneca_id]

def operate(number1, number2, operator):
    # Place logic in this function

if __name__ == '__main__':
    print(operate(10, 5, 'add'))
    print(operate(10, 5, 'subtract'))
    print(operate(10, 5, 'multiply'))
    print(operate(10, 5, 'divide'))
```

   - The operate() function should use **conditional** statements

        - **FYI**: Remember that you MUST consistently **indent ALL code** for within each section (or test).

   - The operate() function should accept **three arguments**.
   - The operate() function should **return** the result.
   - The operate() function should **return** an error message if the operation is unknown

        - **FYI**: Use single quotes or double-quotes to pass a string value.

   - The script should produce the exact output as the sample run shown below.
   - The script should contain no errors.
   - As an extra exercise, try to write your function with only one return statement.

   - **Sample Run 1:**

```bash
./lab3c.py
15
5
50
Error: function operator can be "add", "subtract", or "multiply"
```

   - **Sample Run 2 (using import from another Python file):**

```python
import lab3c
lab3c.operate(10, 20, 'add')
# Will return 30
lab3c.operate(2, 3, 'add')
# Will return 5
lab3c.operate(100, 5, 'subtract')
# Will return 95
lab3c.operate(10, 20, 'subtract')
# Will return -10
lab3c.operate(5, 5, 'multiply')
# Will return 25
lab3c.operate(10, 100, 'multiply')
# Will return 1000
lab3c.operate(100, 5, 'divide')
# Will return Error: function operator can be "add", "subtract", or "multiply"
lab3c.operate(100, 5, 'power')
# Will return Error: function operator can be "add", "subtract", or "multiply"
```

  3. Download the checking script and check your work. Enter the following commands from the bash shell.

```bash
cd ~/ops435/lab3/
pwd #confirm that you are in the right directory
ls CheckLab3.py || wget https://ict.senecacollege.ca/~raymond.chan/ops435/labs/LabCheckScripts/CheckLab3.py
python3 ./CheckLab3.py -f -v lab3c
```

  4. Before proceeding, make certain that you identify any and all errors in lab3c.py. When the checking script tells you everything is OK - proceed to the next step.

### Part 2 - Launching Linux command and controlling its process with builtin functions in os and subprocess modules

The remainder of this investigation will allow you to explore the behaviour of some functions from the os and subprocess modules. All of these functions will take function argument(s), some will return value(s), and some will not. The functions we are going to explore are: os.system(), os.popen(), and subprocess.Popen(). All of them can be used to launch any Linux commands and can interact with the their processes via the standard input, standard output, and standard error data channels.

**Perform the Following Steps:**

  1. Create a new python file for testing.
  2. Import the **os** module in your python file.
  3. You can issue operating system commands by using the **system()** function. Try it:

```python
os.system('ls')
os.system('whoami')
os.system('ifconfig')
```

   - Notice that the output from the system programs **ls**, **whoami**, and **ifconfig** is printed on your screen. Try to compare them with the output from the following function calls:

```python
ls_return = os.system('ls')
print('The contents of ls_return:',ls_return)
whoami_return = os.system('whoami')
print('The contents of whoami_return:',whoami_return)
ifconfig_return = os.system('ifconfig')
print('The contents of ifconfig_return:',ifconfig_return)
```

   - Does the os.system() function return something? If it does, what does the return value represent?

  4. Try this also:

```python
ipconfig_return = os.system('ipconfig')
print('The contents of ipconfig_return:',ipconfig_return)
```

   - You should notice an error message: '**ipconfig: command not found**'. That error occurs since that command was an MS Windows command, and our current platform is Linux.

It is not always a good idea to run system commands in Python by calling the os.system() function, this makes your Python code less portable and makes it require a specific operating system or a system that has those commands available.


**Perform the Following Steps:**

  1. The os module has another function called **popen()** which is capable of launching a Linux command as a process and capture its output and then return it to the caller.
  2. Create a new python file for testing.
  3. Import the ***os*** module in your python file.
  4. You can launch a Linux commands by using the **os.popen()** function. Try it:

```python
import os
os.popen('ls')
os.popen('whoami')
os.popen('ifconfig')
```

   - Notice that there is no observable output from running the Python script listed above. Try to compare it with the output from the following function calls:

```python
import os
ls_return = os.popen('ls')
print('The contents of ls_return:',ls_return)
whoami_return = os.popen('whoami')
print('The contents of whoami_return:',whoami_return)
ifconfig_return = os.popen('ifconfig')
print('The contents of ifconfig_return:',ifconfig_return)
```

   - Does the os.popen() function return something? If it does, what does the return value represent?

  5. Try this also:

```python
import os
whoami_return=os.popen('whoami')
whoami_contents = whoami_return.read()
print('whoami_contents:',whoami_contents)
```

   - What conclusion would you draw from the about python script?

  6. Try another one:

```python
ipconfig_return = os.popen('ipconfig')
ipconfig_contents = ipconfig_return.read()
print('The contents of ipconfig_return:',ipconfig_contents)
```


As you may recall from lab2, you issued **import sys** to import special object from that built-in module. You can also import the subprocess module to load a function called **Popen()** which will allow you to have better control of the output produce by Linux commands like 'ls', 'whoami', and 'ifconfig', etc.

  1. Import the subprocess module in your python file.
  2. There are many features available as part of the subprocess module, we are interested in "**Popen()**" function. This function subprocess.Popen() can be used to run system commands as a child process to your Python script. The code below will create a new child process object, which we assign the name p. In Python we can control the behaviour of this new process through the new Python object we just created, "**p**". "**p**" now has a collection of methods(functions that are apart of an object) available.

  3. To demonstrate, issue the following:

```python
p = subprocess.Popen(['date'], stdout=subprocess.PIPE, stdin=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
```

   - This function call and the following step is full of details we haven't yet talked about which is why it may look a little scary. By the time we're finished with the course - you will be able to look at code like this and not be intimidated. If you're curious and want to look ahead - you can find the definition for the [Popen function in the Python reference manual](https://docs.python.org/3/library/subprocess.html#subprocess.Popen).

  4. This next step is going to communicate with the process and get the retrieve it's output (stdout).

```python
output = p.communicate()
print(output)
print(output[0])
# The above stdout is stored in bytes
# Convert stdout to a string and strip off the newline characters
stdout = output[0].decode('utf-8').strip()
print(stdout)
```

  5. Sometimes you will be able to use purely python code to get your job done, but often you will need to call existing system commands. It's important to learn how to call them and how to interact with those external processes.

**Practice Running System Commands From Python**

**Perform the Following Instructions:**

  1. Create the "**~/ops435/lab3/lab3d.py**" script. The purpose of this script is to create a Python function that can return the free disk space on a Linux system's root directory.

   - The script should contain a comment line with "Author ID: [seneca_id]"
   - The script should **import the correct module**
   - The script should launch the Linux command: **df -h | grep '/$' | awk '{print $4}'** as a new process
   - The script should contain the function called: **free_space()**
   - The function **free_space()** should return a string which is in **utf-8** and has **newline characters strip**
   - **Note**: your output may be completely different, the free/available disk space on every computers root directory may be different.

   - **Sample Run 1:**

```bash
./lab3d.py
9.6G
```

   - **Sample Run 2 (using import from another Python file):**

```python
import lab3d
lab3d.free_space()
# Will return 9.6G
```

  2. Download the checking script and check your work. Enter the following commands from the bash shell.

```bash
cd ~/ops435/lab3/
pwd #confirm that you are in the right directory
ls CheckLab3.py || wget https://ict.senecacollege.ca/~raymond.chan/ops435/labs/LabCheckScripts/CheckLab3.py
python3 ./CheckLab3.py -f -v lab3d
```

  3. Before proceeding, make certain that you identify any and all errors in lab3d.py. When the checking script tells you everything is OK - proceed to the next step.

## Investigation 3: Using Lists

**List** is one of the important **data-types** in Python. A list is a series of **comma separated items found between two square brackets**. Items in a list can be any python objects: **strings**, **integers**, and even **other lists**. In this section, you will study lists and how to use them properly, and this will set the foundation for you to use lists effectively in later labs and assignments. It is important to realise that although lists may appear very similar to arrays in other languages, they are different in a number of aspects including the fact that they don't have a fixed size.

### Part 1 - Navigating Items in Lists

**Perform the Following Steps**

  1. Create a new Python file for testing new concepts in this section.
  2. Create a few lists with different type of items: list1 contains only **integer** objects, list2 contains only **string** objects, list3 contains a combination of both **integer and string** objects

  3. 

```python
list1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
list2 = [ 'uli101', 'ops235', 'ops335', 'ops435', 'ops535', 'ops635' ]
list3 = [ 'uli101', 1, 'ops235', 2, 'ops335', 3, 'ops435', 4, 'ops535', 5, 'ops635', 6 ]
```

   - The best way to access individual **item** in a list is using the list **index**.
   - The index is a number starting from 0 to (**number\_of\_items - 1**), the list index starts counting at **0**.

  4. Inspect specified items in your lists:

```python
print(list1[0])  # First item in list1
print(list2[1])  # Second item in list2
print(list3[-1]) # Last item in list3
```

  5. You can also retrieve ranges of items from a list (these are called slices):

```python
print(list1[0:5]) # Starting with index 0 and stopping before index 5
print(list2[2:4]) # Starting with index 2 and stopping before index 4
print(list3[3:])  # Starting with index 3 and going to the end
```

**Practice Using Functions and Using the List Index**

**Perform the Following Instructions**

  1. Create a Python script called: **~/ops435/lab3/lab3e.py**

   - The purpose of this script is to have a number of functions that **return** a selected number of items from a given list. Each function will return either a single item from the list OR will create a new list and return the entire new list.

  2. Use the following as the template and fill in the proper code for each named function. The code after the special if statement is referred as the main block of the python script:

```python
#!/usr/bin/env python3

# Create the list called "my_list" here, not within any function defined below.
# That makes it a global object. We'll talk about that in another lab.


def give_list():
    # Does not accept any arguments
    # Returns all of items in the global object my_list unchanged

def give_first_item():
    # Does not accept any arguments
    # Returns the first item in the global object my_list as a string

def give_first_and_last_item():
    # Does not accept any arguments
    # Returns a list that includes the first and last items in the global object my_list

def give_second_and_third_item():
    # Does not accept any arguments
    # Returns a list that includes the second and third items in the global object my_list

if __name__ == '__main__':   # This section also referred to as a "main block"
    print(give_list())
    print(give_first_item())
    print(give_first_and_last_item())
    print(give_second_and_third_item())
```
    
   - **Additional Requirements**

        - The script should declare a list called **my\_list** created BEFORE any function definition
        - The list called **my\_list** should have the values: **100**, **200**, **300**, and '**six hundred**'
        - The script should have the proper code to **implement** the named functions - i.e. you have to fill in the bodies for these functions

   - **Sample Run 1:**

```bash
./ lab3e.py
[100, 200, 300, 'six hundred']
100
[100, 'six hundred']
[200, 300]
```

   - **Sample Run 2 (when imported by another script):**

```python
import lab3e
lab3e.give_list()
# Will print [100, 200, 300, 'six hundred']
lab3e.give_first_item()
# Will print 100
lab3e.give_first_and_last_item()
# Will print [100, 'six hundred']
lab3e.give_second_and_third_item()
# Will print [200, 300]
```

  3. Download the checking script and check your work. Enter the following commands from the bash shell.

```bash
cd ~/ops435/lab3/
pwd #confirm that you are in the right directory
ls CheckLab3.py || wget https://ict.senecacollege.ca/~raymond.chan/ops435/labs/LabCheckScripts/CheckLab3.py
python3 ./CheckLab3.py -f -v lab3e
```

  4. Before proceeding, make certain that you identify any and all errors in lab3e.py. When the checking script tells you everything is OK - proceed to the next step.

### Part 2 - Manipulating Items in Lists

There are a number of ways to obtain information about lists as well as change the data that is contained within a list. In this section, you will learn how to manipulate lists.

**Perform the Following Steps:**

  1. Let's perform a simple change to a list element. Try the following code:

```python
courses = [ 'uli101', 'ops235', 'ops335', 'ops435', 'ops535', 'ops635' ]
print(courses[0])
courses[0] = 'eac150'
print(courses[0])
print(courses)
```

  2. Below are some examples of using built-in methods (they are functions that are associated with to list object, you use the dot notation with the name of the list as the prefix when calling those methods ) to **manipulate** list objects. Take your time to see how each method can be a useful tool for making changes to existing lists:

```python
courses.append('ops235')    # Add a new item to the end of the list object named courses
print(courses)

courses.insert(0, 'hwd101') # Add a new item to the specified index location, 
                            # the original item will be pushed to the next index location
print(courses)

courses.remove('ops335')    # Remove first occurrence of a matching item in the list object
print(courses)

sorted_courses = courses.copy() # Create a copy of the courses list
sorted_courses.sort()           # Sort the new list 
print(courses)
print(sorted_courses)
```

  3. In addition to using built-in methods to manipulate lists, there are functions that are useful to provide **information** regarding the list such as the number of items in a list, the smallest value and largest value in a list:

```python
list_of_numbers = [ 1, 5, 2, 6, 8, 5, 10, 2 ]
length_of_list = len(list_of_numbers)    # Returns the length of the list
smallest_in_list = min(list_of_numbers)  # Returns the smallest value in the list
largest_in_list = max(list_of_numbers)   # Returns the largest value in the list

# Notice how the long line below is wrapped to fit on one screen:
print("List length is " + str(length_of_list) + 
      ", smallest element in the list is " + str(smallest_in_list) +
      ", largest element in the list is " + str(largest_in_list))
```

### Part 3 - Iterating Over Lists

This following demonstrates an extremely useful way of processing a list: the ability to quickly **loop through every value in the list**. The **For loops** have a set number of times they loop. The **for** loop will execute all indented code for each item (element) in the list.

**Perform the Following Steps**

  1. Run this from a temporary Python file:

```python
list_of_numbers = [ 1, 5, 2, 6, 8, 5, 10, 2 ]
for item in list_of_numbers:
    print(item)
```

  2. As you can see: instead of writing eight function calls for each **item** in the list, we can call the function in a loop. And we won't have to rewrite the code even number of items in of the list changes.
  
  3. Run the following code:

```python
list_of_numbers = [ 1, 5, 2, 6, 8, 5, 10, 2 ]

def square(num):
    return num * num

for value in list_of_numbers:
    print(square(value))
```

   - The code above only prints the squares and does not save them for future use. The next example uses a function that loops through list, squares the values, and also saves the squares in a new list.

  4. Run the following code:

```python
list_of_numbers = [ 1, 5, 2, 6, 8, 5, 10, 2 ]

# Squares each item in a list of numbers, returns new list with squared numbers
def square_list(number_list):
    new_list = []
    for number in number_list:
        new_list.append(number * number)
    return new_list

new_list_of_numbers = square_list(list_of_numbers)
print(list_of_numbers)
print(new_list_of_numbers)
```

   - The above is just one example of a quick use of for loops mixed with lists. But be careful when passing lists into functions. When you give a function a list as an argument, it is the actual list reference and NOT a copy. This means a function can change the list without making a new list. While you do have to be careful, this can also be useful. A function can modify any given list _without_ having to return it.

  5. To demonstrate, run the following code:

```python
list_of_numbers = [ 1, 5, 2, 6, 8, 5, 10, 2 ]
def delete_numbers(numbers):
    numbers.remove(5)
    numbers.remove(6)
    numbers.remove(8)
    numbers.remove(5)
delete_numbers(list_of_numbers)
print(list_of_numbers)
```

**Practice Functions, Lists, Loops**

**Perform the Following Instructions:**

  1. Create the **~/ops435/lab3/lab3f.py** script. The purpose of this script is to use functions to modify items inside a list.

```python
#!/usr/bin/env python3

# Place my_list below this comment (before the function definitions)



def add_item_to_list(ordered_list):
    # Appends new item to end of list with the value (last item + 1)

def remove_items_from_list(ordered_list, items_to_remove):
    # Removes all values, found in items_to_remove list, from ordered_list

# Main code
if __name__ == '__main__':
    print(my_list)
    add_item_to_list(my_list)
    add_item_to_list(my_list)
    add_item_to_list(my_list)
    print(my_list)
    remove_items_from_list(my_list, [1,5,6])
    print(my_list)
```

   - **Additional Requirements**

        - The missing list should have the values: **1, 2, 3, 4, 5**
        - The program should have a function called **add\_item\_to\_list(ordered\_list)** This function takes a single argument which is a list name itself. It will then look at the value of the last existing item in the list, it will then append a new value that is one unit bigger (i.e. **+1** and modifying that same list without returning any value).
        - The script should have a function called **remove\_items\_from\_list(ordered\_list, items\_to\_remove)** This function takes two arguments: a list, and a list of numbers to remove from the list. This function will then check if those items exist within that list, and if they exist, then they will be removed. This function will modify the list without returning any value.

   - **Sample Run 1:**

```bash
run lab3f.py
[1, 2, 3, 4, 5]
[1, 2, 3, 4, 5, 6, 7, 8]
[2, 3, 4, 7, 8]
```

   - **Sample Run 2 (with import):**

```python
from lab3f import *
print(my_list)
# Will print [1, 2, 3, 4, 5]
add_item_to_list(my_list)
add_item_to_list(my_list)
add_item_to_list(my_list)
print(my_list)
# Will print [1, 2, 3, 4, 5, 6, 7, 8]
remove_items_from_list(my_list, [1,5,6])
print(my_list)
# Will print [2, 3, 4, 7, 8]
```

  2. Download the checking script and check your work. Enter the following commands from the bash shell.

```bash
cd ~/ops435/lab3/
pwd #confirm that you are in the right directory
ls CheckLab3.py || wget https://ict.senecacollege.ca/~raymond.chan/ops435/labs/LabCheckScripts/CheckLab3.py
python3 ./CheckLab3.py -f -v lab3f
```

  3. Before proceeding, make certain that you identify any and all errors in lab3f.py. When the checking script tells you everything is OK - proceed to the next step.

## Lab 3 Sign Off (Completing the lab)

**Run the CheckLab3.py script and capture the result**

```bash
python3 ./CheckLab3.py -f -v &> lab3_[seneca_id].txt
```

Submit the following files individually to Blackboard:
- [x] `lab3_[seneca_id].txt`
- [x] `lab3a.py`, `lab3b.py`, `lab3c.py`, `lab3d.py`, `lab3e.py`, and `lab3f.py`

## Lab Review

  1. What is the purpose of using functions in a Python script?
  2. Write Python code to define a function called **greetings()** that when called will greet the user by name and on the next line display the current date. \[hint: use the os.system() function to display the current date.\]
  3. Why is it useful for functions to accept **arguments** passed-up upon function execution?
  4. What is the purpose of the **import** command? What can be the consequence if the import command is not used prior to running a function by name?
  5. Write Python code to declare a function called **join()** that accepts two arguments which will be be stored as **word1** and **word2** respectively during the execution of the function.
  6. What is the command to return a value from a function?
  7. What is the purpose of the **system()** function in the os module?
  8. What is the purpose of a **list** object?
  9. Assume that the following list has been defined: **mylist = \[ 'apple', 1, 'grape', 2, 'banana', 3, \]**

     - Based on that, what will the following contain?

```python
mylist[0]
mylist[3]
mylist[-1]
mylist[0:1]
```

  10. Assume that the following list has been defined: **combined\_list = \[ \[7, 5\], \['x', 'y'\], \[ 5, 'f' \] \]**

      - Based on that, what will the following contain?

```python
combined_list[0]
combined_list[1]
combined_list[1][0]
combined_list[2][0:2]
```

  11. Briefly explain the purpose of each of the following methods that can be used with lists: **append**, **insert**, **remove**, **sort**, **copy**.
  12. Write the **functions** that perform the following operations on a list:

      1. Returns the length of the list
      2. Returns the smallest value in the list
      3. Returns the largest value in the list

  13. Write a Python script to display all of the items in a simple list, one item per line.
