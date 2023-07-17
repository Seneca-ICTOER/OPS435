---
id: lab5
title: Lab 5
sidebar_position: 5
description: Lab 5 for Students to Complete and Submit
---

# Lab 5: Files and Error Handling

## Lab Objectives

So far, you have created Python scripts to get user's input at the command line using the sys.argv list object, prompt a user to input data from the keyboard using the built-in input() function. When creating Python scripts, you may also need to be able to process large volumes of information, or store processed data for further processing. The first investigation in this lab will focus on file management: opening files, saving data to files, and reading files.

**NOTE**: Since many tasks that system administrators perform deal with files, this is a crucial skill to understand.

It is very important to provide logic in your Python script in case it **encounters an runtime error**. An example would be an invalid path-name or trying to write to a file which you don't have permission. The second investigation in this lab will look into how the Python interpreter **handle runtime errors** (commonly referred to as "exception handling") at run time, and learn how to write Python code that will allow the python interpreter to run gracefully even when problems occur during program execution.

### Python Reference

In previous labs, you have been advised to make notes and use online references. This also relates to working with files and learning about objected oriented programming. You may be "overwhelmed" with the volume of information involved in this lab.

Below is a table with links to useful online Python reference sites (by category). You may find these references useful when performing assignments, etc.

| **Category** | **Resource Link** |
| :--- | :--- |
| Handling Errors & Exceptions | [Errors & Exceptions](https://docs.python.org/3/tutorial/errors.html) |
| Built-in Exceptions | [Built-in Exceptions](https://docs.python.org/3/library/exceptions.html) |
| Data Manipulation via Files | [Reading & Writing Files](https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files) |
| Opening Files | [Open File Usage](https://docs.python.org/3/library/functions.html#open) |
| Using Classes | [Classes](https://docs.python.org/3/tutorial/classes.html) |

## Investigation 1: Working with Files

You will now learn how to write Python scripts in order to open text files, to read the contents within a text file, to process the contents, and finally to write the processed contents back into a file. These operations are very common, and are used extensively in programming. Examples of file operations would include situations such as logging output, logging errors, reading and creating configuration/temporary files, etc.

Files are accessed through the use of **file objects**. An **object** is a **storage location** which stores data in the form of **attributes** (variables) and **methods** (functions).

### Part 1 - Reading Data From Files

**Perform the Following Steps:**

  1. Create a new python file for testing.
  2. Create a new text file named **data.txt** in the **lab5** directory:

```bash
cd ~/ops435/lab5
vim ~/ops435/lab5/data.txt
```

  3. Place the following content inside the new text file **data.txt** and save it:

```text
Hello World
This is the second line
Third line
Last line
```

   - In order to read data from a text file, we need to create an file object that will be used to access the data in a file. In some programming languages (like C) this is called a file descriptor, or a file pointer. In Python, it's an **file object**.

  4. Now lets write some python code to open the file **data.txt** created in the previous step for reading. We will create a file object and name it as **f**. We can then use this file object **f** to retrieve content from the text file **data.txt**. Issue the following:

```python
f = open('data.txt', 'r')
```

   - The **open()** function takes two string arguments: a path to a file, and a mode option (to ask for reading, writing, appending, etc). The _open()_ function will return a file object to us, and we use the assignment statement to assign a name to this file object, which will allow us to use it to read the contents of the file .

  5. Here are the most useful methods available for a file object:

```python
f.read()            # read the entire contents and return a single string object
f.readlines()       # read the entire contents and return each line in the file as a list
f.readline()        # return the first line, if run a second time it will return the second line, then third
f.close()           # close the opened file
```

  6. The following two python statement call the read() method on the file object **f** which return the entire contents of the file as a single string and assign the name **read\_data** to the string object; then the print() is use to send the contents of the string object to the screen:

```python
read_data = f.read()
print(read_data)
```

   - After you have completed accessing data from a file, you should **close** the file in order to free up the computer resources. It is sometimes useful to first confirm that the file is still open prior to closing it. But really you should know - it's your code that would have opened it:

```python
f.close()                               # This method will close the file
```

   - Let's take a moment to revisit the **file read** sequence. The following code sequence will open a file, store the contents of the file into a string object which is return by calling the read() method of the file object, close the file and provide confirmation that the file has been closed:

```python
f = open('data.txt', 'r')               # Open file
read_data = f.read()                    # Read from file
f.close()                               # Close file
```

  7. read_data in this case contains the data of the entire file as a single long string. The end of each line in the string will show the special character '**\n**' which represents the **newline character** in a file used to separate lines (or records in a traditional "flat database file"). It would be convenient to **split** the single string object **read\_data** into individual line at the new-line characters to make a list of line and treated them as an item in a list.

  8. Store the contents of our file into a list called **list\_of\_lines**:

```python
read_data.split('\n')                       # Returns a list
list_of_lines = read_data.split('\n')       # name the returned list object as list_of_lines
print(list_of_lines)
```

   - Although the above sequence works, there are **functions** and **methods** the we can use with **our file object (called "f")** to get lines from our file into a **list**. This would help to reduce code and make our python code more readable.

  9. Try these two different means to get data into a list more efficiently:

```python
# METHOD 1:

f = open('data.txt', 'r')
method1 = list(f)
f.close()
print(method1)

# METHOD 2:

f = open('data.txt', 'r')
method2 = f.readlines()
f.close()
print(method2)
```

#### Create a Python Script Demonstrating Reading Files

  1. Create the **~/ops435/lab5/lab5a.py** script.
  2. Use the following as a template:

```python
#!/usr/bin/env python3
# Author ID: [seneca_id]

def read_file_string(file_name):
    # Takes file_name as string for a file name, returns its entire contents as a string

def read_file_list(file_name):
    # Takes a file_name as string for a file name, 
    # return its entire contents as a list of lines without new-line characters

if __name__ == '__main__':
    file_name = 'data.txt'
    print(read_file_string(file_name))
    print(read_file_list(file_name))
```

   - This Python script will read the same file (**data.txt**) that you previously created
   - The **read\_file\_string()** function should return a string
   - The **read\_file\_list()** function should return a list
   - The **read\_file\_list()** function must remove the new-line characters from each line in the list
   - **Both functions must accept one argument** which is a string object containing the name of a file
   - The script should show the exact output as the samples
   - The script should contain no errors

   - **Sample Run 1:**

```bash
python3 lab5a.py 
Hello World
This is the second line
Third line
Last line

['Hello World', 'This is the second line', 'Third line', 'Last line']
```

   - **Sample Run 2 (with import):**

```python
import lab5a        
file_name = 'data.txt'                             
print(lab5a.read_file_string(file_name))
# Will print 'Hello World\nThis is the second line\nThird line\nLast line\n'
print(lab5a.read_file_list(file_name))
# Will print ['Hello World', 'This is the second line', 'Third line', 'Last line']
```

  3. Download the checking script and check your work. Enter the following commands from the bash shell.

```bash
cd ~/ops435/lab5/
pwd #confirm that you are in the right directory
ls CheckLab5.py || wget https://ict.senecacollege.ca/~raymond.chan/ops435/labs/LabCheckScripts/CheckLab5.py
python3 ./CheckLab5.py -f -v lab5a
```

  4. Before proceeding, make certain that you identify all errors in lab5a.py. When the checking script tells you everything is OK - proceed to the next step.

### Part 2 - Writing To Files

Up to this point, you have learned how to access text from a file. In this section, you will learn how to write text to a file. Writing data to a file is useful for creating new content in a file or updating (modifying) existing data contained within a file.

**Risk of Losing File Contents**

A common problem that new Python programmers may encounter is to accidentally erase existing contents of a file when writing new data to a file. When opening files for writing (using the '**w**' open function option), Python assumes existing content in the file is no longer wanted and it's immediately deleted; therefore, if you wish to write data to a file but keep existing content, you need to use the open file option '**a**' (append new data to a file).


  1. When opening a file for writing, the '**w**' option is specified with the **open()** function. When the 'w' option is specified - previous (existing) content inside the file is deleted. This deletion takes place the moment the open() function is executed, not when writing to the file. If the file that is being written to doesn't exist, the file will be created upon the file opening process.

  2. Create a temporary Python file and open a non-existent data file (called **file1.txt**) for writing:

```python
f = open('file1.txt', 'w')
```

  3. To confirm that the new file now exists and is empty, start up another terminal window, 'cd' to the same directory ~/ops435/lab5, and issue the following shell command:

```bash
ls -l file1.txt
```

   - To add lines of text to the file, you can use the **write()** method of the **file object**. Typically you end every line in a text file with the special character '**\n**' to represent a "new line". Multiple lines may also be placed inside a single write operation: simply put the special character '**\n**' wherever a line should end.

  4. Try adding multiple lines:

```python
f.write('Line 1\nLine 2 is a little longer\nLine 3 is too\n')
```

   - Once the **write()** method has completed, the final step is to **close()** the file. The file MUST be closed properly or else data will not consistently be written to the file. **NOTE: Not closing a file can lead to corrupted or missing file contents.**:

```python
f.close()
```

  5. View the contents of the file in the other terminal window and run the following shell command to make sure the data was written successfully:

```bash
cat file1.txt
```

   - You will now create a new file called **file2.txt**, but this time call the write() method multiple times in sequence. You will often write to a file multiple times inside a loop:

```python
f = open('file2.txt', 'w')
f.write('Line 1\nLine 2 is a little longer\nLine 3 is as well\n')
f.write('This is the 4th line\n')
f.write('Last line in file\n')
f.close()
```

  6. Issue the following shell command on the other terminal window to confirm that the contents were written to file2.txt:

```bash
cat file2.txt
```

**Make Backup Copies of Your Data Files**

Since you might make a mistake, and accidentally destroy file contents when writing to your file, it is highly recommended to make backup copies of your files prior to running your Python scripts. This can be particularly useful when performing any future assignment involving writing to files.

**Make Backup Copies of ALL your files**

Since you are now writing code that opens files for writing you may accidentally truncate the wrong file (like your assignment file, for example). Make regular backups of all your work. Just copy it to a USB stick or if you have time - use git or github to backup.


  7. Issue the following shell commands to backup both of your newly-created files and confirm backup:

```bash
cp file1.txt file1.txt.bk
cp file2.txt file2.txt.bk
ls -l file*
```

  8. Let's demonstrate what can happen if you perform an incorrect write() operation:

```python
f = open('file2.txt', 'w')
```

   - On the other terminal window:

```bash
cat file2.txt
```

   - You should notice that the previous content in your file2.txt file was destroyed. Why do you think the previous data is no longer there?

  9. Restore your file from the backup and verify the backup restoration:

```bash
cp file2.txt.bk file2.txt
cat file2.txt
```

   - To avoid overwriting the contents of a file, we can **append** data to the end of the file instead. Use the option 'a' instead of 'w' to perform appending:

```python
f = open('file1.txt', 'a')
f.write('This is the 4th line\n')
f.write('Last line in file\n')
f.close()
```

   - On ther other terminal window:

```bash
cat file1.txt
```

   - The final thing to consider when writing to files is to make certain that the object being written are **strings**. This means that before trying to place integers, floats, lists, or dictionaries into a file, first either convert the value using **str()** function or extract the specific strings from items in the list.

  10. In this example we convert a single number and all the numbers in a list to strings before writing them to a file:

```python
my_number = 1000
my_list = [1,2,3,4,5]
f = open('file3.txt', 'w')
f.write(str(my_number) + '\n')
for num in my_list:
    f.write(str(num) + '\n')
f.close()
```

  11. Confirm that the **write()** operation was successful

```bash
cat file3.txt
```

#### Create a Python Script Demonstrating Writing to Files

  1. Copy **~/ops435/lab5/lab5a.py** script to **~/ops435/lab5/lab5b.py** script (We need the previous read functions that you created).
  2. Add the following functions below the two functions that you already created:

```python
def append_file_string(file_name, string_of_lines):
    # Takes two strings, appends the string to the end of the file

def write_file_list(file_name, list_of_lines):
    # Takes a string and list, writes all items from list to file where each item is one line

def copy_file_add_line_numbers(file_name_read, file_name_write):
    # Takes two strings, reads data from first file, writes data to new file, adds line number to new file
```

  3. **Replace** the main coding block of your Python script near the bottom with the following:

```python
if __name__ == '__main__':
    file1 = 'seneca1.txt'
    file2 = 'seneca2.txt'
    file3 = 'seneca3.txt'
    string1 = 'First Line\nSecond Line\nThird Line\n'
    list1 = ['Line 1', 'Line 2', 'Line 3']
    append_file_string(file1, string1)
    print(read_file_string(file1))
    write_file_list(file2, list1)
    print(read_file_string(file2))
    copy_file_add_line_numbers(file2, file3)
    print(read_file_string(file3))
```

   - **append_file_string()**:

        1. Takes **two string arguments**
        2. **Appends** to the file(Argument 1) all data from the string(Argument 2)

   - **write_file_list()**:

        1. Takes two arguments: a **string** and a **list**
        2. **Writes** to file(Argument 1) all lines of data found in the list(Argument 2)

   - **copy_file_add_line_numbers()**:

        1. Takes two arguments: **Both are files path-names** (which happen to be strings)
        2. **Reads** all data from first file(Argument 1), and writes all lines into second file(Argument 2) **adding** line numbers
        3. Line numbers should be added to the **beginning** of each line with a colon next to them(see sample output below for reference)
        4. **Hint**: Use an extra variable for the line number

   - **Sample Run 1:**

```bash
rm seneca1.txt seneca2.txt seneca3.txt
./lab5b.py 
First Line
Second Line
Third Line

Line 1
Line 2
Line 3

1:Line 1
2:Line 2
3:Line 3
```

   - **Sample Run 2 (run second time):**

```bash
python3 lab5b.py 
First Line
Second Line
Third Line
First Line
Second Line
Third Line

Line 1
Line 2
Line 3

1:Line 1
2:Line 2
3:Line 3
```

   - **Sample Run 3 (with import):**

```python
import lab5b
file1 = 'seneca1.txt'
file2 = 'seneca2.txt'
file3 = 'seneca3.txt'
string1 = 'First Line\nSecond Line\nThird Line\n'
list1 = ['Line 1', 'Line 2', 'Line 3']

lab5b.append_file_string(file1, string1)

lab5b.read_file_string(file1)
# Will print 'First Line\nSecond Line\nThird Line\nFirst Line\nSecond Line\nThird Line\n'

lab5b.write_file_list(file2, list1)

lab5b.read_file_string(file2)
# Will print 'Line 1\nLine 2\nLine 3\n'

lab5b.copy_file_add_line_numbers(file2, file3)

lab5b.read_file_string(file3)
# Will print '1:Line 1\n2:Line 2\n3:Line 3\n'
```

  3. Download the checking script and check your work. Enter the following commands from the bash shell.

```bash
cd ~/ops435/lab5/
pwd #confirm that you are in the right directory
ls CheckLab5.py || wget https://ict.senecacollege.ca/~raymond.chan/ops435/labs/LabCheckScripts/CheckLab5.py
python3 ./CheckLab5.py -f -v lab5b
```

  4. Before proceeding, make certain that you identify all errors in lab5b.py. When the checking script tells you everything is OK - proceed to the next step.

## Investigation 2: Exceptions and Error Handling

Running into errors in programming will be a common occurrence. You should expect that it will happen for any code that you write. In python, when an error occurs, the python interpreter raises an **exception**. This section will show you how to intercept these complaints from the python interpreter when they happen and to direct the python interpreter to continue running, or to stop executing your code with a more user-friendly error message.

### Part 1 - Handling Errors

There is a massive amount of exceptions that can be raised by the python interpreter. Online references can be useful. If you are searching for a common exception check out the [Python Exception Documentation](https://docs.python.org/3/library/exceptions.html#exception-hierarchy).

In this section, we will provide examples of how to handle a few exceptions when creating Python scripts.

  1. To start, open a python3 interactive shell session. Before attempting to handle exception errors, let's create an error, and then see what the python interpreter will say and how we can "handle" it:

```python
print('5' + 10)
```

   - You should get an exception error similar to the following:

```bash
---------------------------------------------------------------------------
Traceback (most recent call last)
 Fiel "<stdin>", line 1, in <module>
TypeError: Can't convert 'int' object to str implicitly
```

   - **Question**: According to the exception error message, what do you think caused the error?

  2. Click on the link 'https://docs.python.org/3/library/exceptions.html#concrete-exceptions.' and scroll or search for **TypeError**. Take a few moments to determine what a _TypeError_ exception error means.

   - You should have learned that the TypeError exception error indicates a mismatch of a type (i.e. string, int, float, list, etc). If Python doesn't know how to handle it, perhaps we could change the number into a string or change the string into a number or at least provide a more user-friendly error message.
   - If we don't want the user of our program to have to learn how to read Python exceptions (which is a very good idea), we can catch/trap/handle this error when it happens. This is done with a specific block of code called a [try clause](https://docs.python.org/3/tutorial/errors.html#handling-exceptions) where you place code in-between the **try**: and the **except**: coding blocks. In a general sense, it works like a modified if-else statement, where the **try** statement acts as a test, and the **except** statement will or will not handle the exception depending if the python interpreter raises any exception when executing the code under the **try**: coding block. That is to say, If no error occurs in the code between the **try**: and the **except**: keywords, the python interpreter will skip the code under the **except**: coding block, but if an error occurs in the **try**: coding block, then the python interpreter will be directed to execute the code under the **except**: coding block, which can instruct the python interpreter to perform more user-friendly processing, like printing a more user-friendly error message.
   - Let's demonstrate how to handle our TypeError error with code that first does not contain an error and then similar code that DOES generate an error.

  3. The following code does **NOT** generate an error:

```python
try:
    print(5 + 10)
except TypeError:
    print('At least one of the values is NOT an integer')

15
```

   - You should notice that since there was NO runtime error, the Python script performed the required task.

  4. The following code handles an exception error raised by the python interpreter and direct the python interpreter to provide a more user-friendly feedback that at least one of the values is not an integer:

```python
try:
    print(5 + 'ten')
except TypeError:
    print('At least one of the values is NOT an integer')

At least one of the values is NOT an integer
```

  5. Let's generate another type of error where we try to open a file that doesn't exist:

```python
f = open('filethatdoesnotexist', 'r')
```

  6. Study the error raised by the python interpreter carefully and closely. In particular, what is the name of the error (or exception).

        - Now, catch and handle this exception error:

```python
try:
    f = open('filethatdoesnotexist', 'r')
    f.write('hello world\n')
    f.close()
except FileNotFoundError:
    print('no file found')
```

Multiple exceptions can also be caught at the same time, such as does not exist, is a directory, or we don't have permission.

  1. To test out the error handling code (previously issued), try removing permissions from the file, or specify a directory instead of a regular file, and then try to open it:

```python
try:
    f = open('filethatdoesnotexist', 'r')
    f.write('hello world\n')
    f.close()
except (FileNotFoundError, PermissionError, IsADirectoryError): 
    print('failed to open file')
```

  2. By taking the time to view the [Python Exception Hierarchy](https://docs.python.org/3/library/exceptions.html#exception-hierarchy), you can see how errors get caught in python. The options **FileNotFoundError**, **PermissionError**, and **IsADirectory** are all inherited from **OSError**. This means that while using more specific errors might be useful for better error messages and handling, it's not always possible to catch every error all the time.

  3. Another way to catch multiple exceptions is with separate `except` blocks:

```python
try:
    f = open(abc, 'r')
    f.write('hello world\n')
    f.close()
except (FileNotFoundError, PermissionError): 
    print('file does not exist or wrong permissions')
except IsADirectoryError:
    print('file is a directory')
except OSError:
    print('unable to open file')
except:
    print('unknown error occured')
    raise
```

   - When catching multiple exceptions, make certain to catch the lowest ones contained in the exception-hierarchy first. For example, if you put 'Exception' first, both 'OSError' and 'FileNotFoundError', would never get caught.
   - **TIP**: In python it's usually best to 'try:' and 'except:' code rather than to attempt to anticipate everything that could go wrong with **if** statements. For example, instead of checking to see if a file exists and we have read permissions, it can be better to just try and read the file and fail and catch any errors with 'OSError'.

#### Create a Python Script Which Handles Errors

  1. Create the **~/ops435/lab5/lab5c.py** script.
  2. Use the following as a template:

```python
#!/usr/bin/env python3
# Author ID: [seneca_id]

def add(number1, number2):
    # Add two numbers together, return the result, if error return string 'error: could not add numbers'

def read_file(filename):
    # Read a file, return a list of all lines, if error return string 'error: could not read file'

if __name__ == '__main__':
    print(add(10,5))                        # works
    print(add('10',5))                      # works
    print(add('abc',5))                     # exception
    print(read_file('seneca2.txt'))         # works
    print(read_file('file10000.txt'))       # exception
```

   - **Sample Run 1:**

```bash
python3 lab5c.py 
15
15
error: could not add numbers
['Line 1\n', 'Line 2\n', 'Line 3\n']
error: could not read file
```

   - **Sample Run 2 (with import):**

```python
import lab5c                

lab5c.add(10,5)             
15                          

lab5c.add('10',5)           
15                          

lab5c.add('10','5')         
15                          

lab5c.add('abc','5')                                                                                                                     
'error: could not add numbers'                                  

lab5c.add('hello','world')                                                                                                               
'error: could not add numbers'                                  

lab5c.read_file('seneca2.txt')
['Line 1\n', 'Line 2\n', 'Line 3\n']           

lab5c.read_file('file10000.txt')   
error: could not read file'
```

  3. Exit the ipython3 shell, download the checking script and check your work. Enter the following commands from the bash shell.

```bash
cd ~/ops435/lab5/
pwd #confirm that you are in the right directory
ls CheckLab5.py || wget https://ict.senecacollege.ca/~raymond.chan/ops435/labs/LabCheckScripts/CheckLab5.py
python3 ./CheckLab5.py -f -v lab5c
```

  4. Before proceeding, make certain that you identify any and all errors in lab5c.py. When the checking script tells you everything is OK before proceeding to the next step.

## Lab 5 Sign-Off (Completing the lab)

Name the output of `./CheckLab5.py -f -v` as **lab5\_\[seneca\_id\].txt**

**Submit the following files individually to Blackboard:**

- [x] `lab5_[seneca_id].txt`
- [x] `lab5a.py, lab5b.py, and lab5c.py`

## Lab Review

  1. What is the purpose of a **file object**?
  2. Write a Python command to **open** the text file called **customers.txt** for _read-only_ operations.
  3. Write Python code to efficiently store the contents of the file in question #2 as a large string (including new-line characters) called **customer-data**.
  4. Write Python code to store the contents of the file in question \#2 as a list, removing the new-line characters.
  5. What is the purpose of **closing** an open file? Write a Python command to close the file opened in question \#2.
  6. Write the Python command to confirm you successfully closed the **customers.txt** file in question \#5. What is the returned status from that command to indicate that the file has been closed?
  7. What is the difference between opening a file for **writing** data as opposed to opening a file for **appending** data? What can be the consequence if you don't understand the difference between writing and appending data?
  8. Write a Python command to open the file **customer-data.txt** for writing data.
  9. Write a Python command to save the text: **customer 1: Guido van Rossum** (including a new-line character) to the opened file called **customer-data.txt**
  10. Briefly explain the process writing a list as separate lines to an open file.
  11. What is the purpose of **handling** exception errors?
  12. Write a Python script to prompt a user for the name of the file to open. Use exception error handling to provide an error message that the specific file name (display that exact name) does not exist; otherwise, open the file for reading and display the entire contents of the file (line-by-line).
