---
id: lab2
title: Lab 2
sidebar_position: 2
description: Lab 2 for Students to Complete and Submit
---

# Lab 2: Understanding Python Code

## Lab Objectives

This lab covers two of the many methods which allow a user to provide data to a running Python process. Based on the data provided, the python process will flow in a way according to rules given in the script.

**Objectives**

Learn the following python topics:

  - **builtin functions**: input(), print(), len(), str(), int()
  - **builtin module**: sys - special list object sys.argv
  - **flow control statements and block**: if, if/else, if/elif/else, while
  - **code indentation** - 4 spaces (avoid using tabs)

Write Python code in order to:

  - **Accept data from users** at the command line, such as name and age.
  - **Prompt the user to provide specific data** from the stdin (standard input channel), such as a username or password.
  - **Process the inputted data** using **Conditional Statements**.
    - This means that the program will change how it behaves based on the input given, an example would be, providing the correct password or providing the wrong password.
  - **Process the inputted data** using **Looping Statements**.
    - Looping (iteration) is the ability for your script to repeatedly run the same block of codes over and over until a given condition is met. For example, an authentication process would allow your 3 attempts to provide the correct password, and it will deny you access after 3 attempts have been tried and failed.

## Investigation 1: User Input

### Part 1 - Prompt the user for input data

In this section, you will learn how to prompt (ask) the user running the python script for data. The script may not immediately use the data the user provided, it may use that data later in script to change how a Python process flow through the script.

**Storing User Input data to Python objects**

**Perform the following steps:**

  1. Login to matrix or launch your Centos VM, open your code editor, and a a shell terminal (as a regular user) for executing your code.
  2. To begin, let's start out with a very basic script. This script will use objects that will display specific values to your terminal. Create the file **lab2a.py** in your **~/ops435/lab2** directory, containing the following content:

```python
#!/usr/bin/env python3

name = 'Jon'
age = 20
print('Hi ' + name + ', you are ' + str(age) + ' years old.')
```

  3. Try running this script and study the output:

```bash
./lab2a.py
```

  4. Download the checking script and check your work. Run the following commands from the bash shell.

```bash
cd ~/ops435/lab2/
pwd #confirm that you are in the right directory
ls CheckLab2.py || wget https://ict.senecacollege.ca/~raymond.chan/ops435/labs/LabCheckScripts/CheckLab2.py
python3 ./CheckLab2.py -f -v lab2a
```

  5. Before proceeding, make certain that you identify any and all errors in **lab2a.py**. When the check script tells you everything is **OK**, you may procede to the next step.
  6. The above Python script **lab2a.py** is not very useful - the data are **hard wired** into the script: it displays the same output regardless of the number of times that this Python script is run. The built-in **input()** function can be used to accept data in **string form** from the user and assign a name to the string object (used to be called a variable). It is typical to place a question (or hint) as an argument in the input() function: this will aid the user in typing in the correct data.
  7. Copy lab2a.py to lab2a1.py and replace the print() call in lab2a1.py with the following (you can just comment-out the print() call using a \# at the beginning of the line):

```python
colour = input("Type in a colour and press enter: ")
```

  8. When prompted, type the text: **red** and press ENTER. Did anything display? Why not?
  9. Add another line to your script:

```python
print(colour)
```

   - What was displayed?
  10. Now replace that line with this:

```python
print('The colour I typed in is: ' + colour)
```

  - Note what was displayed.

**Practice Storing User Input data**

Now it's time to create a new script to prompt the user to enter data and display that data on their terminal. Refer to object name and prompt text information when creating your Python script. Refer to Sample Runs displayed below for exact prompt and output requirements.

**Perform the following Instructions:**

  1. Make a copy of **lab2a.py** and call it **lab2b.py**.
  2. Modify **lab2b.py** so that it prompts the user for both the user's **name** and **age**.
    
   - **Input / Output Requirements**
      - The script should have a **Shebang line**
      - The script should use an object called **name**
      - The script should use an object called **age**
      - The script should prompt the user for "Name: "
      - The script should prompt the user for "Age: "
      - The script should store the values in the correctly spelled objects (case sensitivity counts)
      - The script should print the EXACT OUTPUT as shown (case sensitivity counts)

   - **Sample run 1:**

```bash
./lab2b.py
Name: Jon
Age: 20
Hi Jon, you are 20 years old.
```

   - **Sample run 2:**

```bash
./lab2b.py
Name: Jen
Age: 25
Hi Jen, you are 25 years old.
```

  3. Download the checking script and check your work. Run the following commands from the bash shell.

```bash
cd ~/ops435/lab2/
pwd #confirm that you are in the right directory
ls CheckLab2.py || wget https://ict.senecacollege.ca/~raymond.chan/ops435/labs/LabCheckScripts/CheckLab2.py
python3 ./CheckLab2.py -f -v lab2b
```

  4. Before proceeding, make certain that you identify any and all errors in **lab2b.py**. When the check script tells you everything is **OK**, you may procede to the next step.


### Part 2 - Command line arguments

A command line argument is a data item that is passed to a program that can be used within that program. A function argument is also a data item that is passed to a function that can be used within that function. In the previous section, you passed an argument to the **input()** function. In this section, you will learn how to pass an argument to your Python script, but this time, this argument will be passed when we execute your Python script from the bash shell.

**Perform the following steps:**

  1. Use a temporary file for testing your work for this section.
  2. In order to access command line arguments in Python, we will need to use a special python object called **sys.argv** from the **sys** module. We can use the python keyword **import** to load the **sys** module so that we can access it in our python script. **sys.argv** is a list object which is used to hold everything given at the command line, including the command itself. The **sys** module is one of the built-in modules comes with the Python interpreter. By issuing the **import sys** statement at the top of a python script, it will load the code written by other person, each 'library' (or 'module') that gets loaded will give us extra functionality and objects to our python script.
  3. Start with the following line to import additional python objects:

```python
import sys
```

  4. Call the following functions and note what they do:

```python
print(sys.version) # tells us the version of the python currently in use
print(sys.platform) # tells us our operating system platform
print(sys.argv) # tells us a list of all items given at the command line when running our python script from a command shell
print(len(sys.argv)) # tells us the number of command line arguments the user provide from a command shell
sys.exit() # will immediately end the running Python script, ignoring the remaining lines in the Python script
```

   - Instead of using the **input()** function to prompt the user for data, we can use the list object **sys.argv** to capture the data items provided at the command line when a Python script is being executed. The list object **sys.argv**, when used within your Python script can store the following:
        
        - **sys.argv** - stores all argument items as string objects
        - **sys.argv\[0\]** - stores the name of the script/program
        - **sys.argv\[1\]** - stores the first argument as a string object
        - **sys.argv\[2\]** - stores the second argument as a string object
        - etc...
        - **len(sys.argv)** - gives the number of arguments

  5. Create a new script called **~/ops435/lab2/showargs.py** and add the following content:

```python
#!/usr/bin/env python3

import sys

arguments = sys.argv
name = sys.argv[0]

print('Print out ALL script arguments: ', arguments)
print('Print out the script name: ' + name)
print('Print out the number of argument: ', len(sys.argv))
```

  6. Run the script and examine the output by running the Python script without and with arguments:

```bash
./showargs.py
./showargs.py testing different arguments
./showargs.py argument1 argument2 argument3 argument4
```

**Practice Using Arguments**

Now it's time to create a new script, but unlike prompting the user for data, the data items provided at the command line (as arguments from running your Python script) will be used instead. Refer to object name and prompt text information when creating your Python script. Refer to Sample Runs displayed below for exact prompt and output requirements.

**Perform the following Instructions:**

  1. Make a copy of **lab2b.py** and call it **lab2c.py**.
  2. Modify **lab2c.py** to use the **sys.argv\[1\]** and **sys.argv\[2\]** list items instead of the **input()** function (used in your previous _lab2b.py_ script).

   - **Input / Output Requirements**
        
        - The script should have a **Shebang line**
        - The script should contain **import sys**
        - The script should use a string object called **name**
        - The script should use an integer object called **age**
        - The script should use **sys.argv\[1\]** (first argument) and assign it to the string object named **name**
        - The script should use **sys.argv\[2\]** (second argument) and assign it to the integer object named **age**
        - The script should print the EXACT OUTPUT as shown (including case sensitivity)

   - **Sample run 1:**

```bash
./lab2c.py Jon 20
Hi Jon, you are 20 years old.
```

   - **Sample run 2:**

```bash
./lab2c.py Jen 25
Hi Jen, you are 25 years old.
```

   - Note that running **Sample run 3** (shown below) will result in an error message. This error happens if you run the script without any arguments. It is important to note that an error such as this can occur, so you can avoid this type of error when creating Python scripts (explained in the next section). Let's continue in this section for now...

   - **Sample run 3:**

```bash
./lab2c.py
---------------------------------------------------------------------------
IndexError                                Traceback (most recent call last)

...
...
...

IndexError: list index out of range
```

  3. Download the checking script and check your work. Enter the following commands from the **bash shell**.

```bash
cd ~/ops435/lab2/
pwd #confirm that you are in the right directory
ls CheckLab2.py || wget https://ict.senecacollege.ca/~raymond.chan/ops435/labs/LabCheckScripts/CheckLab2.py
python3 ./CheckLab2.py -f -v lab2c
```

  4. Before proceeding, make certain that you identify any and all errors in **lab2c.py**. When the check script tells you everything is **OK**, you may procede to the next step.

## Investigation 2: Using Conditional Statements

In computer programming, control flow statement can be used to change the execution path (flow) of a program. The [diagram here](https://en.wikipedia.org/wiki/Flowchart) may help you visualize it. In this section, you will focus on LOGIC control flow statements that are used to change the way each statement in a script being executed. The flow may be based on data (either via the input() function, or command arguments via the list object sys.argv) provided by the user. In this section, we will discuss several LOGIC control flow statements including: IF, and IF/ELIF/ELSE.

### Part 1 - Using IF Statements

An **IF** statement is a control flow statement that executes or does not execute different code based on whether the condition is **True** or **False**.

**Understanding If Statements**

**Perform the following steps:**

  1. Create a temporary python file for testing things in this section.
  2. Let's create an if statement.

   - Try the following 2 lines, indenting the second line:

```python
if True:
    print('This print is apart of the if statement')
```

   - What happened when you ran this code? It is important to note a couple of things with the IF statement:
   - When the expression in an IF statement **evaluates to True**, it runs the code that is indented underneath it. In this case, we can use the boolean value "True" to make this happen, or test to see if an expression is evaluated to true or false.
   - However, if the expression in an IF statement evaluates to **False**, then it will not run the code indented underneath it. Any code not indented under the IF statement will perform normally as the main program and is NOT associated with the control flow statement.
   - Indentation means to start a line with spaces or tabs before your text. Using **indentation** will direct the script what code should be run as part of the IF statement and which code should be run regardless. Also, using indentation makes it easier for a programmer to identify Control Flow statements. From this point on, be VERY careful and consistent with indentation because it will affect how your code works.

**4 spaces**

While python allows some flexibility with your indentation - please don't be creative with it. Always use 4 spaces for each new block. There will be exceptions later on, but start with this now. You may find it helpful to configure your editor to insert for spaces instead of a tab when you press the tab key.

  3. Try the following 4 lines, indenting the second and third lines, but NOT the fourth line:

```python
if False:
    print('This first print statement will never run')
    print('This second print statement will also not run')
print('This print statement will run')
```

   - What do you notice?

   - So far, you have been using only the **Boolean values True or False** for your IF statements. Although this can be useful, it can be more practical to state an expression that will be evaluated to a **True** or **False** Boolean value to be used with control flow statements (referred to as: **Boolean Logic**).

  4. let's create an IF statement that runs under specific conditions. Issue the following code below:

```python
password = input('Please enter a secret password')
if password == 'P@ssw0rd':
    print('You have succesfully used the right password')
```

   - What happened? In the above example, you are making a comparison between the value you entered via the **input()** function, which in turn, was saved into the **password** object. The IF statement is using that object (named password), followed by == which represents **identical to**, followed by the string '**P@ssw0rd**' . Never use **=** to 'compare values since this is used to store the value into an object and may not allow IF statement to properly evaluate the expression! Also note that a **space is used to separate arguments with the IF statement**. The IF statement tests that expression to see if it is **True or False**. If that expression is **True**, it will run the code indented below. On the other hand, if that expression is **False**, it will not run the code. Try experimenting with different combinations of passwords.
   - If statements can also be used to compare numbers. We can do this by using comparison operators (such as: **==**, **!=**, **\>**, **\>=**, **<**, **<=**), but we can also use functions. The function **len()** can be used to return the number of characters in a word (plus other features). length of words and other objects. We can also use the **len()** function to give us the number of argumuents provided to our script by using 'len(sys.argv)' and it should return a number. Below we are also using '!='. Which stands for not eqal to.

  5. Try the following program:

```python
import sys

print(len(sys.argv))

if len(sys.argv) != 10:
    print('you do not have 10 arguments')
    sys.exit()
```

   - What happened?

**Number of Arguments with len(sys.argv)**

If you are calling the **len()** function with the **sys.argv** argument, the number of arguments returned will be always be at least '1'. This number will always be one higher than the actual number of arguments entered, since it also counts the script name as a argument.

**Practice Using IF Statements**

Now it's time to create a new script. You will be modifying the previous Python script to provide a message if the user did NOT provide any argument when running the script, and abort the script if two additional arguments are not provided. Refer to Sample Runs displayed below for exact prompt and output requirements.

**Perform the following Instructions:**

  1. Make a copy of **lab2c.py** and call it **lab2d.py**.
  2. Modify **lab2d.py** by adding an if statement immediately BEFORE your print statements. This if statement should make sure that lab2d.py is using '2' additional arguments.

   - **Input / Output / Processing Requirements**

      - The script should have a **Shebang line**
      - The script should **import sys**
      - The script should print a **usage message** if zero arguments present, or if not exactly 2 arguments are provided when running the script (NOTE: Use **sys.argv\[0\]** value in this message in case you rename the script at a later date!)
      - The script should exit without attempting to do any more work if exactly 2 arguments are not provided when running script
      - The script should use an object called **name**
      - The script should use an object called **age**
      - The script should assign the string **sys.argv\[1\]** (first argument) to the object "name"
      - The script should assign the string **sys.argv\[2\]** (second argument) to the object "age"
      - The script should print the EXACT OUTPUT as shown

   - **Sample run 1:**

```bash
./lab2d.py Jon 20
Hi Jon, you are 20 years old.
```

   - **Sample run 2:**

```bash
./lab2d.py Jen 25
Hi Jen, you are 25 years old.
```

   - **Sample run 3:**

```bash
./lab2d.py 
Usage: ./lab2d.py name age
```

   - **Sample run 4:**

```bash
./lab2d.py Jon is 20
Usage: ./lab2d.py name age
```

  3. Download the checking script and check your work. Enter the following commands from the bash shell.

```bash
cd ~/ops435/lab2/
pwd #confirm that you are in the right directory
ls CheckLab2.py || wget https://ict.senecacollege.ca/~raymond.chan/ops435/labs/LabCheckScripts/CheckLab2.py
python3 ./CheckLab2.py -f -v lab2d
```

  4. Before proceeding, make certain that you identify any and all errors in **lab2d.py**. When the check script tells you everything is **OK**, you may proceed to the next step.


### Part 2 - Using IF/ELIF/ELSE Statements

There are many ways to use IF statements in more advanced configurations. This section will provide a few more examples and provide an explanation of how they work.

  1. For the following examples, try changing the numbers in the objects to get different results.
  2. Create one or more new files for testing the following steps (you don't need to submit them).
  3. Let's use an expression in an IF statement to test a condition of two object values. In this case, we have two integer objects 'a' and 'b'. If object 'a' is greater than object 'b', then print a message, if False, do nothing.

```python
a = 10
b = 15
if a > b:
    print('a is greater than b')
```

   - What happened? Let's now use an IF/ELSE statement.

  4. Try the following code instead:

```python
a = 10
b = 15
if a > b:
    print('a is greater than b')
else:
    print('b is greater than a')
```

   - What happened?

   - This is neat, but what if 'a' is equal to 'b'? In order to make this work, we would need to perform another test! The 'elif' statement allows us to string together multiple if statement. This new statement 'elif' means: IF the first expression is False, it will check the second expression under 'elif'. HOWEVER, if the first expression is True, it will run the code indented under the first expression and SKIP the 'elif' statement. Finally, we include the ELSE statement - in this case, if 'a' is equal to 'b' (i.e. fails first test since 'a' is not greater than 'b' and fails second test since 'a' is not less than 'b', so they must be equal to check other).

  5. Modify your program to looks like this:

```python
a = 10
b = 10
if a > b:
    print('a is greater than b')
elif a < b:
    print('b is greater than a')
else:
    print('a is not greater than b')
    print('a is not less than b')
    print('Therefore, a is equal to b')
```

## Investigation 3: Using Loop Statements

In the first two investigations, you have been exposed to builtin function and special list object to write powerful Python scripts. In Part 1 of the first investigation, this includes using using integer and string objects. In Part 2 you learned how to get data from the user by either prompting the user for data using the input() function or get it from the command line using the sys.argv list object within a Python script that you run. You also learned about LOGIC control-flow statements in order to make the Python script behave differently based on different condition.

You will start to learn about the second major category of control flow statements by learning how to repeatedly executing a python statement or a series of python statements. Although, you will be learning other scripting techniques, the ability to know how to use different objects, CONDITIONAL and LOOPING control-flow statements will allow you to create useful and powerful script to assist you when managing your computer system (including virtual machines).

### Part 1 - Understanding While Loops

**WHILE loops** may use the same type of expression found in IF statements. While the expression is evaluated to True, the code indented under the while loop will be repeated. When the expression becomes False the loop will stop repeating the indented code.

**Perform the following steps**

  1. Create a temporary python file for practising with the following examples.
  2. A **WHILE** loop is not the most common type of loop in Python but it's the simplest. Below is a WHILE loop which will run five times. Each time the loop is run, it will add one to the integer count object, increasing the value of the count object:

```python
count = 0
while count != 5:
    print(count)
    count = count + 1
print('loop has ended')
```

   - Sometimes you know in advance how many times a loop will execute, this is referred as a determinant loop, but often you don't. For example loops are extremely useful for **error-checking** in order to prevent incorrect data being accepted and causing the script not to perform correctly.

  3. Here is an example of a loop used for error-checking. Run this code and type several incorrect passwords then the correct one to see what happens:

```python
password = ''
while password != 'P@ssw0rd':
    password = input("Type in a password: ")
print('Congratulations you guessed the correct password!')
```

   - Now it's time to create a new script. You will be creating an entirely new Python script to use a WHILE loop as a determinant loop. This while loop will count down from 10, print each value as it counts down. When it gets to the end it will output 'blast off!' Refer to Sample Runs displayed below for exact prompt and output requirements.

**Perform the following Instructions:**

  1. Make a new file called **lab2e.py**, this script will contain a WHILE loop.

   - **Input / Output / Processing Requirements**

      - The script should have a Shebang line
      - The script should have a comment line which contains the word "Author:" and your **full name**
      - The script should have another comment line which contains the word "Author ID:" and your **seneca_id**
      - The script should have another comment line which contains the word "Date Created:" and the actual date in "yyyy/mm/dd" format
      - The script should use an integer object named timer with a value of 10
      - The script should have a while loop that repeats until timer equals 0
      - The script should print the EXACT OUTPUT as shown

   - **Sample run:**

```bash
./lab2e.py
10
9
8
7
6
5
4
3
2
1
blast off!
```

  2. Download the check script and check your work. Enter the following commands from the bash shell.

```bash
cd ~/ops435/lab2/
pwd #confirm that you are in the right directory
ls CheckLab2.py || wget https://ict.senecacollege.ca/~raymond.chan/ops435/labs/LabCheckScripts/CheckLab2.py
python3 ./CheckLab2.py -f -v lab2e
```

  3. Before proceeding, make certain that you identify any and all errors in **lab2e.py**. When the check script tells you everything is **OK**, you may proceed to the next step.

### Part 2 - Using While loops with script arguments

You will now learn to make your Python scripts more flexible by getting numbers as arguments to be used with WHILE loops in your script. You will learn that all command line arguments captured by using the special object sys.argv are all strings (not numbers). Even the item provided at the command line is a pure number, it cannot be used in Mathematical operations unless it is converted into an integer object. You will be learning how to use the int() builtin function to convert a numeric string object into an integer object.

**Perform the Following Steps:**

  1. Make a copy of **lab2e.py** and call it **lab2f.py**.
  2. Modify **lab2f.py** to change the initial value of the variable **count** to the first command line argument when running your Python script. **WARNING**: When using arguments as numbers/integers or performing math on arguments you must wrap them in the int() function, for example: **count = int(sys.argv\[1\])**

   - **Additional Input / Output / Processing Requirements**

      - The script should have a **Shebang line**
      - The script should have a comment line which contains the word "Author:" and your **full name**
      - The script should have another comment line which contains the word "Author ID:" and your **seneca_id**
      - The script should have another comment line which contains the word "Date Created:" and the actual date in "yyyy/mm/dd" format
      - The script should **import sys**
      - The script should assign the value of **int(sys.argv\[1\])** to an object named timer
      - The script should have a while loop that repeats until timer equals 0]
      - The script should print the EXACT OUTPUT as shown

   - **Sample run 1:**

```bash
./lab2f.py 10
10
9
8
7
6
5
4
3
2
1
blast off!
```

   - **Sample run 2:**

```bash
./lab2f.py 3
3
2
1
blast off!
```

  3. Download the check script and check your work. Enter the following commands from the bash shell.

```bash
cd ~/ops435/lab2/
pwd #confirm that you are in the right directory
ls CheckLab2.py || wget https://ict.senecacollege.ca/~raymond.chan/ops435/labs/LabCheckScripts/CheckLab2.py
python3 ./CheckLab2.py -f -v lab2f
```

  4. Before proceeding, make certain that you identify any and all errors in **lab2f.py**. When the check script tells you everything is **OK**, you may proceed to the next step.

### Part 3 - Combining While loops with IF statements

Let's improve upon your previous python script to further prevent errors from incorrect command line input. You can combine LOGIC control-flow statements with other LOGIC control-flow statements for more complex programming. For example, if you ran the previous Python script without an argument (i.e. empty string), you would encounter an error since it could not convert an empty string to an integer.

**Perform the Following Steps**

  1. Make a copy of **lab2f.py** and call it **lab2g.py**.
  2. Modify **lab2g.py**, add an IF statement to the script that checks to see if a argument was entered. If a argument was entered use that number for the timer, if no argument was entered, then by default, the timer should equal 3.

**ADDITIONAL WARNINGS**

When using arguments as numbers/integers or performing math on arguments you must wrap them in the **int()** function:

```python
timer = int(sys.argv[1])
```

Remember to check the number of arguments in an IF statement using:

```python
len(sys.argv)
```

   - **Additional Input / Output / Processing Requirements**

      - The script should have a **Shebang line**
      - The script should have a comment line which contains the word "Author:" and your **full name**
      - The script should have another comment line which contains the word "Author ID:" and your **seneca_id**
      - The script should have another comment line which contains the word "Date Created:" and the actual date in "yyyy/mm/dd" format
      - The script should **import sys**
      - The script should assign the value of **3** to an object named **timer** when there is **no arguments** provided.
      - The script should assign the value of **int(sys.argv\[1\])** if an object named **timer** when one command line argument (sys.argv\[1\]) are entered
      - The script should have a WHILE loop that repeats until (and not including when) timer equals 0
      - The script should print the EXACT OUTPUT as shown

   - **Sample run 1:**

```bash
./lab2g.py 5
5
4
3
2
1
blast off!
```

   - **Sample run 2:**

```bash
./lab2g.py 2
2
1
blast off!
```

   - **Sample run 3:**

```bash
./lab2g.py
3
2
1
blast off!
```

  3. Download the check script and check your work. Enter the following commands from the bash shell.

```bash
cd ~/ops435/lab2/
pwd #confirm that you are in the right directory
ls CheckLab2.py || wget https://ict.senecacollege.ca/~raymond.chan/ops435/labs/LabCheckScripts/CheckLab2.py
python3 ./CheckLab2.py -f -v lab2g
```

  4. Before proceeding, make certain that you identify any and all errors in **lab2g.py**. When the check script tells you everything is **OK**, you may proceed to the next step.

## Lab 2 Sign-Off (Completing the lab)

**Run the CheckLab2.py script and capture the result**

```bash
python3 ./CheckLab2.py -f -v &> lab2_[seneca_id].txt
```

Submit the following files individually to Blackboard:

- [x] `lab2_[seneca_id].txt`
- [x] `lab2a.py, lab2b.py lab2c.py, lab2d.py, lab2e.py, lab2f.py, and lab2g.py`

Please do not zip, or compress any file when submitting to blackboard. Double check the name of each file and make sure that they are all correct.

## Lab Review

  1. Write a short Python script to ask the user to provide their shoe size at the keyboard, and store the result in an integer object called **shoeSize**.
  2. Add codes to the previous Python script to display the shoe size entered using the same integer object created. (For example: **Your shoe size is: 16**).
  3. What is the purpose of importing special module from your system?
  4. Write a short Python script to display two arguments from running your Python script.

       - For example if your Python script was called **myscript.py** and you issued the command: **python myscript.py happy afternoon**, you would get the following output:
       - The first argument is: happy
       - The second argument is afternoon

  5. What is the purpose of using an **if** statement?
  6. What is the purpose of using an **if-else** statement?
  7. Write a short Python script which terminates the execution of the Python script if there are not exactly 3 arguments given at the command line.
  8. What is the purpose of an **if-elif-else** statement?
  9. Write a Python script to prompt the user for a course mark (no error checking is required... you can assume that the input will be a valid mark from 0 to 100). Use an if-elif-else statement to convert the mark to a letter grade. For simplicity, you don't have to worry about D+, C+, B+, or A+
  10. Write a Python script to print the text **I love Python** twenty times (on a separate line).
  11. Identify and list the Python 3 keywords used in this lab.
  12. Identify and list the Python 3 built-in functions used in this lab. (hint: the functions provided by the \_\_builtins\_\_ module)
  13. **INTERESTING CHALLENGE**: Perform a Netsearch to see how you can write Python code to perform error-checking (using a loop) to force a user to enter a number for the shoe size script (created in question #2). There are two things to consider:

      1. A number as opposed to a string
      2. It has to be an acceptable range from 1 to 20
