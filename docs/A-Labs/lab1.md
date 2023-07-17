---
id: lab1
title: Lab 1
sidebar_position: 1
description: Lab 1 for Students to Complete and Submit
---

# Lab 1: Introduction to git, github.com, and Python

## Lab Objectives

- Using the "git clone" command to clone a repository into a new directory
- Set up account on github.com for creating, tracking, and managing a repository
- configure and explore the Python interpreter on matrix.senecacollege.ca

## Overview

- In this lab, you will create an account on github.com and follow the Github "Hello World guide" to create a new public repository on github to and explore the basic workflow of using github to track and manage revisions of software or other contents. The essential operations provided by Github includes
    - creating new repository,
    - creating a new branch,
    - making changes to files,
    - creating a pull request, and
    - opening and merging a pull request.
- You will then use the git client (git clone) on matrix.senecacollege.ca to access and download the contents of the repository you created on github. Note: if you have your own Linux VM ready, you can also install and use the git client on your VM.
- You will also use the git client on matrix.senecacollege.ca to clone the repository on github.com which hosts the Python scripts for lab 1.
- Finally, study, create and execute simple Python scripts.

## Reference

- [Github git Cheat sheet](https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf)
- [Github Hello World Guide](https://guides.github.com/activities/hello-world/)

## Glossary

- git - a distributed revision control system with rich command set that provides both high-level operations and full access to git's internals.
- github.com - a code hosting platform for version control and collaboration that lets people work together on software projects from anywhere.

## Unit Feedback Script : CheckLabX.py

**Unit Feedback Scripts**

Each **Part** (within an 'Investigation) is referred to as a **Unit**. Each Unit will require that the student download and run a **Unit Feedback Script**, which provides the OPS435 student "real-time feedback" of their completed work.

This feedback is not considered to be perfect or fool-proof; however, it may provide feedback (hints) in case a student gets stuck or experiences an error when performing administration tasks or when creating their Python scripts. These unit feedback scripts can also be used to confirm that the student's Python script is on the right track, and provide a consistent record of their Python scripting progress throughout their labs.

## Investigation 1 - git and github.com

### Task 1: Create a Github.com account

- Start your web browser and go to github.com and use your own email to sign up for a new github account if you don't already have one.

     + **\[Note: Please be aware that Seneca's spam filter block email from github.com by default, if you use your Seneca email to sign up for an account on github.com, you might have to re-configure your email spam filter to allow confirmation email from github.com to reach your inbox.\]**

- Record your github.com user name on your lab logbook.
- email your github.com user name to your OPS435 professor from your Seneca email account.

### Task 2: Create a project and make a pull request on GitHub

Follow the Github "Hello World Guide" [here](https://guides.github.com/activities/hello-world/) to perform the following activities:

- Create a repository
- Create a branch
- Make and commit changes
- Open a pull request, and
- Merge your pull request

Please make the following **changes** when following the guide:

- name the new repository using your **Seneca user name** instead of "hello-world".
- add your full name, and OPS435 section to the README file, do not post any other personal information there.

### Task 3: Clone a Github.com repository into a new directory on a Linux system

You can do the following steps either on matrix.senecacollege.ca or on your CentOS 7 vm:

- login to matrix.senecacollege.ca or your CentOS 7 vm
- create a directory named ops435/lab1 under your home directory
- change your working directory to ~/ops435/lab1
- run the following git command to clone the repository you created in Task 2 on github.com

```bash
git clone https://github.com/[your_github_user_name]/[your_seneca_user_name]
```

for example, if your github user name is **rc2030**, and your seneca user name is **rchan**, the git command to clone the repository you created in Task 2 should be:

```bash
git clone https://github.com/rc2030/rchan
```

- change your working directory to your cloned git repository, which should be ~/ops435/lab1/\[your\_seneca\_user\_name\]
- run the following two commands and capture their output to the named files:

```bash
git log > ~/ops435/lab1/gitlog.txt
```

```bash
tree -a > ~/ops435/lab1/repo_tree.txt
```

- Make sure that gitlog.txt and repo_tree.txt are not empty and are under the ~/ops435/lab1 directory. Review and study the contents of gitlog.txt and repo\_tree.txt
- Download the check script and check your work. Enter the following commands from the bash shell.

```bash
cd ~/ops435/lab1/
pwd #confirm that you are in the right directory
ls -l lab1a.py #confirm that you have the directory for you github repo, the files gitlog.txt and repo_tree.txt 
ls CheckLab1.py || wget 'https://github.com/ops435/lab1-template/blob/master/CheckLab1.py?raw=true' -O CheckLab1.py
python3 ./CheckLab1.py -f -v lab0a
```

## Investigation 2 - Python on Matrix

**A few background information about the Python programming language**

- The Python Interpreter understanding the Python language and this is why we are going to learn this programming language in this course.
- The Python Language supports both object-oriented programming and procedural programming paradigms.
- The Python programming environment consists of a few basic components: language keywords, symbols, modules, and data objects.
- The Python Interpreter supports two mode of operations: script mode and interactive mode.
- In interactive mode, the Python interpreter allows us to run python code one statement at a time. Currently, there are two major versions of the Python interpreter available on matrix.senecacollege.ca: version 2 and version3.
- To start an interactive Python version 2 shell, type "python" at the command prompt.
- To start an interactive Python version 3 shell, type "python3" at the command prompt.

### Part I - Python Versions on Matrix

- You can access the Python Interpreter on Matrix from a Linux machine or a Windows 10 machine.

#### Login to matrix.senecacollege.ca from a Windows 10 machine

- Please follow the instruction at [Seneca Student VPN](https://inside.senecacollege.ca/its/services/vpn/studentvpn.html) to download and install the GlobalProtect VPN client and connect to the Seneca VPN to your Windows Machine.
- Login to matrix.senecacollege.ca with your Seneca user name from Windows 10's run box.

![Windows 10 SSH](https://wiki.cdot.senecacollege.ca/w/imgs/Window10_ssh.png)

#### Identify and explore Python versions on Matrix

- Once you are on matrix.senecacollege.ca, run the **python** command to start a Python version 2 interactive shell at the command prompt. The last line displayed should be **\>\>\>**. the **\>\>\>** sign is referred to as the Python interactive shell prompt.
    - python
    - at the **\>\>\>** prompt, type help('keywords') and record the output
    - at the **\>\>\>** prompt, type help('symbols') and record the output
    - type exit() at the **\>\>\>** prompt to exit from the Python interactive shell.
- Run the **python3** command to start a Python version 3 interactive shell session at the command prompt.
    - python3
    - at the **\>\>\>** prompt, type help('keywords') and record the output
    - at the **\>\>\>** prompt, type help('symbols') and record the output
    - type exit() at the **"\>\>\>"** prompt to exit from the Python interactive shell.
- Compare the list of keywords and symbols for Python version 2 and version 3. Which keyword(s) is/are remove from version 2 in version 3?

### Part II - Create directory structure for Labs and Assignments

#### Create directory structure using BASH commands

- Lets setup and reserve the following directories for storing and organizing files for labs and assignments. Execute the following commands at the command prompt:

```bash
  mkdir ~/ops435/lab2
  mkdir ~/ops435/lab3
  mkdir ~/ops435/lab4
  mkdir ~/ops435/lab5
  mkdir ~/ops435/lab6
  mkdir ~/ops435/lab7
  mkdir ~/ops435/lab8
  mkdir ~/ops435/a1
  mkdir ~/ops435/a2
```

#### Verify the directory structure created

- Download the sample.py script from https://github.com/rayfreeping/ops435-lab1 repository to ~/ops435/lab1 directory
- Study and Explore the sample.py python script and identify the following sections:
    - the shebang line
    - the script level doctstring
    - the import section to import functions from the standard library module
    - the function definition section
    - the main script section
- Also identify the following items appear in the sample.py script:
    - the Python keywords
    - the decision code segement
    - the looping code segment
    - the run time error (exception) handling code segment
- Run the sample script with the following given command line options and study its output:

```bash
python3 sample.py
```

```bash
python3 sample.py test
```

```bash
python3 sample.py 2>/dev/null
```

```bash
python3 sample.py test 2>/dev/null
```

- Download the check script and check your work. Enter the following commands from the bash shell.

```bash
cd ~/ops435/lab1/
pwd #confirm that you are in the right directory
ls -l ~/ops435/ #confirm that you have create the directory structure under ~/ops435
ls CheckLab1.py || wget 'https://github.com/ops435/lab1-template/blob/master/CheckLab1.py?raw=true' -O CheckLab1.py
python3 ./CheckLab1.py -f -v lab0b
```

## Investigation 3 - exploring and using Python's built-in functions

### Part I - Interactive (leaning) mode: using the Python Interactive Shell

- In this mode, you can instruct the Python Interpreter to execute python statement or python expression one at a time, call a function, or display the representation of a python data object.
- To start the Python version 3 Interactive shell, type the command

```bash
[raymond.chan@mtrx-node05pd lab1]$ python3
```

   + at the Linux command prompt.

- You should get a startup message similar to the following:

```bash
[raymond.chan@mtrx-node05pd lab1]$ python3
Python 3.6.8 (default, Apr  2 2020, 13:34:55) 
[GCC 4.8.5 20150623 (Red Hat 4.8.5-39)] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>>
```

- Note that when you see the **\>\>\>** Python interactive shell prompt, which indicates that the Python Interpreter is listening and waiting to carry out your instruction written in the **Python language**. Try the following commands at the python command prompt, and record their outputs for future reference:

     + \>\>\> copyright
     + \>\>\> credits
     + \>\>\> license
     + \>\>\> help

- The output of the last command should tell you how to enter the interactive help, or how to get help on a **Python Object**. You should see the following message when entering the interactive help utility:

```bash
Welcome to Python 3.6's help utility!

If this is your first time using Python, you should definitely check out
the tutorial on the Internet at https://docs.python.org/3.6/tutorial/.

Enter the name of any module, keyword, or topic to get help on writing
Python programs and using Python modules.  To quit this help utility and
return to the interpreter, just type "quit".

To get a list of available modules, keywords, symbols, or topics, type
"modules", "keywords", "symbols", or "topics".  Each module also comes
with a one-line summary of what it does; to list the modules whose name
or summary contain a given string such as "spam", type "modules spam".

help>
```

- Please note that the prompt changed from **\>\>\>** to **help\>**. Try the suggestion and feel free to explore the interactive help utility. Simple press the **Enter** key to get out of the interactive help utility.
- At the **\>\>\>** prompt, type **dir()** to call the built-in function named **dir** without passing any function argument to it. The **dir()** function will return a list of data object names known to the Python interpreter at that moment. You should get a list of items similar to the following:

```bash
>>> dir()
['__annotations__', '__builtins__', '__doc__', '__loader__', '__name__', '__package__', '__spec__', 'x']
>>>
```

We are interested in the **object** named **\_\_builtins\_\_** at this moment. We can ask the Python interpreter to tell us more about the **\_\_builtins\_\_** object by passing its name **\_\_builtins\_\_** as the function argument to the **dir()** function:

```bash
>>> dir(__builtins__)
['ArithmeticError', 'AssertionError', 'AttributeError', 'BaseException', 'BlockingIOError', 
...
ValueError', 'Warning', 'ZeroDivisionError', '_', '__build_class__', '__debug__', '__doc__',
'__import__', '__loader__', '__name__', '__package__', '__spec__', 'abs', 'all', 'any',
'ascii', 'bin', 'bool', 'bytearray', 'bytes', 'callable', 'chr', 'classmethod', 'compile', 
'complex', 'copyright', 'credits', 'delattr', 'dict', 'dir', 'divmod', 'enumerate', 'eval', 
'exec', 'exit', 'filter', 'float', 'format', 'frozenset', 'getattr', 'globals', 'hasattr',
'hash', 'help', 'hex', 'id', 'input', 'int', 'isinstance', 'issubclass', 'iter', 'len', 
'license', 'list', 'locals', 'map', 'max', 'memoryview', 'min', 'next', 'object', 'oct', 
'open', 'ord', 'pow', 'print', 'property', 'quit', 'range', 'repr', 'reversed', 'round', 
'set', 'setattr', 'slice', 'sorted', 'staticmethod', 'str', 'sum', 'super', 'tuple', 
'type', 'vars', 'zip']
```

- The above output shows a list of the so-called **built-in run-time error codes** and **bulit-in function names**. We are going to learn how to use them effectively in order to save our coding effort when writing Python programs/scripts.
- Let starts with the following built-in functions:

     + print()
     + help()
     + type()

- We can learn more about the above built-in functions within the Python interactive shell. Study the output of the following command at the **\>\>\>** prompt and keep a record of them for future reference:

```bash
>>> help(help)

>>> help(print)

>>> help(type)

>>> type(type)

>>> type(help)

>>> type(print)
```

### Part II - Script (execution) mode: creating Python script

- In this part we will start writing our very first python script. The scripts we are going to try will be very basic and it is use to help us practice the language syntax and explore the foundational coding skills, such as:
    - sending text to the screen,
    - storing value in an data object,

#### Task 1 - Python script using builtin Functions

**Creating the "Hello World" Python Script**

You will learn to create a simple python script in this section. This python script will just call the Python builtin function print() to send the text "hello world" to the screen. The "hello world" is an old traditional first program students usually are taught to create, which is based on the first programming example from the first C programming text co-written by Dennis Ritchie, the creator of the C programming language and Brian Kernighan. You will learn how to run the Python script in the Python3 shell as well as to learn how to run the Python script from the bash shell.

**Perform the following steps:**

1. Create a new Python file in your ~/ops435/lab1 directory. Call it lab1a.py. The first Python code we will write is going to call the print() function. A function is code that has been defined somewhere. Functions can take arguments, use these arguments in some way, and then usually, but not always, return a result. The first function we will use is the "print()" functions, it's sole purpose is to send data to the screen.
2. Add the following line into your source code file:

```python
print()
```

   - And run it from the command-line:

```bash
python3 ./lab1a.py
```

   - You will notice that nothing is printed even though we called the "print()" function. This is because we didn't pass any arguments to it, lets try again.

3. Modify your call to print() to include an argument ('hello world'):

```python
print('hello world')
```

   - This time we should now see that the python function "print()" has sent something to the screen - the words 'hello world'. In Python a word or a bunch of characters like 'hello world' is called a 'string'. In the above example, a **string** was passed as an **argument** to the **print** function. These words are important for understanding and talking about different aspects of code.

4. Note that there are similarities between the Python print() function and the Bash echo command, but Python is more picky than bash (which is a good thing). Try to run print without the brackets or without the quotes to see what happens.

**Reading errors:** One of the things that makes a good programmer is debugging skills. The first and most important debugging technique is reading and understanding error messages. Try to understand what the errors are saying even if you think you already know what the problem is and already have some idea about how to fix it.

5. Write the following code into our Python file. Note the she-bang line at the top of the file to run this script in the python3 environment. You will need to add this she-bang line for all python scripts you create for this course.

```python
#!/usr/bin/env python3
'''Description: This program will output "hello world" to the screen.'''

# Any line that starts with a "#" is also known as a comment,
# these lines are ignored by the python interpreter even if
# they contain code. The very first line is called a Shebang line, 
# it is used to tell the system which interpreter to 
# use(python2, python3, bash, etc). 

print('Hello world')
```

6. Another way of running a Python program is executing it directly, e.g.:

```bash
./lab1a.py
```

   - Note that the file will need execute permissions even though you ran it just fine earlier. Why is that?

7. Download the check script and check your work. Enter the following commands from the bash shell.

```bash
cd ~/ops435/lab1/
pwd #confirm that you are in the right directory
ls lab1a.py #confirm that you have the lab1a.py script in your directory
ls CheckLab1.py || wget 'https://github.com/ops435/lab1-template/blob/master/CheckLab1.py?raw=true' -O CheckLab1.py
python3 ./CheckLab1.py -f -v lab1a
```

8. Before moving on to the next step make sure you identify any and all errors in "lab1a.py". When the check script tells you everything is "ok", you may proceed to the next step.

## Investigation 4 - exploring Python's built-in Data Objects

In Python, a data object is used to store data for use later in the program. This data can be a string, integer, decimal number, characters, etc. We will only be covering **string** and **integer** objects in this lab. You will learn and use other Python built-in data object types in future labs.

### String Objects

String objects contain text to be used in your program. Examples of strings could be user-names, full-names, item descriptions, etc. We will now demonstrate how to assign a string to an object and how to display contents stored in a string object.

**Perform the following steps:**

1. Create a python script (called lab1b.py) and first - start with a few simple things to try:
2. Let's make a new object containing a value:

```python
name =  'Thomas'
```

3. Print the value to the screen:

```python
print(name)
```

4. Think about why this does something different:

```python
print('name')
```

5. Now lets try something new, we are going to print out the string and concatenate/combine it with another string. The plus sign can be used to join two strings together. However, make sure that the name of your object is always outside the quotes, or it will not resolve to a value.

```python
print('I have a friend named ' + name)
```

6. To gain practice, complete your Python script with the following content and details:

      + The script should have a **Shebang line** like you did for your lab1a.py python script
      + The script should use a single object called "name"
      + The value of the "name" object should be "Isaac"
      + The script, when executed, should print out "How old are you Isaac?"
      + Sample run:

```bash
cd ~/ops435/lab1/
./lab1b.py
How old are you Isaac?
```

   - Try the checking script as you are working through a script to sometimes get hints.

7. Download and run the checking script. Enter the following commands from the **bash shell**:

```bash
cd ~/ops435/lab1/
pwd #confirm that you are in the right directory
ls CheckLab1.py || wget https://ict.senecacollege.ca/~raymond.chan/ops435/labs/CheckScripts/CheckLab1.py
python3 ./CheckLab1.py -f -v lab1b
```

8. Before proceeding, make certain that you identify any and all errors in "lab1b.py". When the check script tells you everything is "ok", you may proceed to the next step.

### Integer Objects

In Python, integer objects are used to store an integer numbers that can be used for mathematical operations (discussed in the next section). Integers do NOT contain decimals, and they can be signed (+ or -) or unsigned. Here we will store integers in a object, perform math operations, and display the results.

**Perform the following steps:**

1. Create a python script (called lab1c.py) and first - start with a few simple things to try:
2. Lets create two new objects, num1 and num2, to play with.

```python
num1 = 5
num2 = 10
```

3. You can print the values in those integer objects:

```python
print(num1)
print(num2)
```

4. Now we will make a new object called "sum", and try some math:

```python
sum = num1 + num2
```

   - This will add the values contained in the integer objects together and assign the result to the object named "sum". However you will note that there is no data show up on the screen. Let's inspect the contents of the new object named "sum":

```python
print(sum)
```

   - Does this value look right? Are you sure?

5. Now lets try printing this sum out with a string:

```python
print('The sum is: ' + sum)
```

   - What happened? Did you receive an error? This may have been the first time you've seen this error, but it won't be the last. What we tried to do is combine a string with a number, and this won't work.
   - In order concatenate a sting and an integer object, we will have to use another builtin function called "str()" to convert an integer object to a string first. The "str()" function will return a string of your number and provide it as a argument to "print()". This function will not change the value of your object, your object is still an integer object.

6. Issue the following:

```python
print('The sum is: ' + str(sum))
```

   - What did you notice this time?

7. To gain practice, complete your python script with the following features:

      + The script should have a Shebang line.
      + The script should have an object called **name**
      + The script should have an object called **age**
      + The value of the **name** object should be **Isaac**
      + The object **age** should contain a **integer**
      + The value of the **age** object should be **72**
      + The script, when executed, should print out "Isaac is 72 years old!"

  - Example run:

```bash
cd ~/ops435/lab1/
./lab1c.py
Isaac is 72 years old!
```

   - Try the check script as you are working through a script to sometimes get hints.

8. Download and run the checking script. Enter the following commands from the bash shell:

```bash
cd ~/ops435/lab1/
pwd #confirm that you are in the right directory
ls CheckLab1.py || wget 'https://github.com/ops435/lab1-template/blob/master/CheckLab1.py?raw=true' -O CheckLab1.py
python3 ./CheckLab1.py -f -v lab1c
```

9. Before moving on to the next step make sure you identify any and all errors in "lab1c.py". When the check script tells you everything is "ok", you may proceed to the next step.

## Investigation 5 - exploring on how to get Python to do maths

In the previous section, you performed a couple of simple mathematical operations. In this section, you will learn some additional mathematical operations.

**Perform the following steps:**

1. Try some of the following to see what happens in Python:

```python
print(10 + 5)    # addition
print(10 - 5)    # subtraction
print(10 * 5)    # multiplication
print(10 / 5)    # division
print(10 ** 5)   # exponents
```

   - NOTE: You must be careful when combining more complex math operators together. Python uses **PEMDAS** (**P**arentheses, **E**xponents, **M**ultiplication and **D**ivision, **A**ddition and **S**ubtraction) to resolve math.

2. Go over the below examples and see if you understand each situation:

```python
print(10 + 5 * 2)		# multiplication happens before addition
print((10 + 5) * 2) 		# parentheses happen before multiplication
print(10 + 5 * 2 - 10 ** 2)	# first exponents, then multiplication, then addition and subtraction from left-to-right
print(15 / 3 * 4)		# division and multiplication happen from left-to-right
print(100 / ((5 + 5) * 2))	# the inner most parentheses are first performing addition, then parentheses again with multiplication, finally the division
```

3. To gain practice, complete your script with the following content and details:

      - The script should have a Shebang line.
      - The object **x** should contain a integer with the value **10**
      - The object **y** should contain a integer with the value **2**
      - The object **z** should contain a integer with the value **5**
      - The script, when executed, should print out "10 + 2 \* 5 = 20" (the printout should change if the values in the objects change)

  - Example run:

```bash
cd ~/ops435/lab1/
./lab1d.py
10 + 2 * 5 = 20
```

   - Try the checking script as you are working through a script to sometimes get hints.

4. Download and run the checking script. Enter the following commands from the bash shell:

```bash
cd ~/ops435/lab1/
pwd #confirm that you are in the right directory
ls CheckLab1.py || wget 'https://github.com/ops435/lab1-template/blob/master/CheckLab1.py?raw=true' -O CheckLab1.py
python3 ./CheckLab1.py -f -v lab1d
```

   - Before moving on to the next step make sure you identify any and all errors in "lab1d.py".

5. When the check script tells you everything is "ok", you may proceed to the next step.

## Lab 1 Sign-Off Upload the following files individually to Blackboard

**Run the CheckLab1.py script and capture the result**

```bash
python3 ./CheckLab1.py -f -v &> lab1_[seneca_id].txt
```

Submit the following files individually to Blackboard:

- [x] `lab1_[seneca_id].txt`
- [x] `gitlog.txt`, `repo_tree.txt`, `lab1a.py`, `lab1b.py lab1c.py`, `lab1d.py`

## Lab Review

1. What is a git repository?
2. What kinds of data can be stored in a git repository?
3. What is a git branch?
4. What is the name of the definitive branch in a git repository?
5. What is a "pull request" related to a branch in a git repository?
6. Write Python code that when run, will perform the following tasks:

      1. Contain a she-bang line
      2. Display a greetings message to the user
      3. display an empty line (**hint**: use the special character **\n** to print the a new-line character)
      4. Display text, "**Your current directory is:**" (You are NOT required to display quotation marks)
      5. Display the current working directory pathname (using an appropriate command)
      6. Display another empty line

7. How do you execute a Python script when you are within the interactive **python3** shell? (Hint: make use of a function provided by the os python module.)
8. How do you execute a Python script when you are in the **Bash Shell** (i.e. NOT within the python3 shell)?
9. Write the pipeline command to check if the CheckLab1.py checking script exists, and download it from the location: https://ict.senecacollege.ca/~raymond.chan/ops435/labs/LabCheckScripts/CheckLab1.py
