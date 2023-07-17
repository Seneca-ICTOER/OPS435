---
id: lab7
title: Lab 7
sidebar_position: 7
description: Lab 7 for Students to Complete and Submit
---

# Lab 7: Classes, Objects, and Scope

## Objectives

  1. Create functions to process programmer-defined type objects.
  2. Bind functions into methods for programmer-defined type objects.
  3. Set the appropriate scope when creating new object: local and global

### Overview

Object-oriented programming is conceptually one level higher than simply structured programming style as you've experienced in Bash or C. In this lab, we're going to study some features of classes and programmer-defined objects by looking at a few object-oriented programming examples using the Python language.
First of all, let's review some of the basic concepts about class in Python.

   - A class is a type, a description of a thing, the definition of what it should look like (data attributes) and what we can do about it (function attributes).
   - An object is an instance of a class, an individual entity described by a class, a specific stuff with properties (aka attributes) defined by a class.
   - The exact definition of the type and what you would expect to store in objects of that type is up to you - the programmer. You would want to design your classes so that you can manage data in your program/script/application as easily as possible.
   - A few points about the mechanics of implementing classes:

        - A class name typically starts with a capital letter, and object names should start with a lowercase letter.
        - Just as you can define a function in a separate python file from where you use it - you can do the same when defining a class. In fact, it's even more common with classes since your're more likely to need to use them in multiple places.
        - The names of the class files are by convention all in lowercase and short - but that's just because most programmers are lazy typists. Feel free use longer file name so you can tell what they are without opening them.

As you try to design the classes, you will quickly realise that there is a potentially infinite number of properties (attributes and methods) that any class can have. What you choose to include in your class definition should be guided by what you intend to do with it.

### Reference

- Time object code: from **Think Python** by Allen B. Downey: [Chapter 16](http://greenteapress.com/thinkpython2/html/thinkpython2017.html) and [Chapter 17](http://greenteapress.com/thinkpython2/html/thinkpython2018.html)
- Data object: [special method name](https://docs.python.org/3/reference/datamodel.html#special-method-names)

## Investigation 1: Objects and Functions

### Part 1 - Simple Object Class with external functions

In this part, we consider a time object which has three data attributes, namely: hour, minute, and second. The following Python script **lab7a.py** provides the blue print for building such a time object and also defines three external functions: format_time(), sum_times(), and valid_time(), which can manipulate the time object.

```python
#!/usr/bin/env python3

class Time:
   """Simple object type for time of the day.
      data attributes: hour, minute, second
   """
   def __init__(self,hour=12,minute=0,second=0):
       """constructor for time object""" 
       self.hour = hour
       self.minute = minute
       self.second = second

def format_time(t):
    """Return time object (t) as a formatted string"""
    return '%.2d:%.2d:%.2d' % (t.hour, t.minute, t.second)

def sum_times(t1, t2):
    """Add two time objests and return the sum."""
    sum = Time(0,0,0)
    sum.hour = t1.hour + t2.hour
    sum.minute = t1.minute + t2.minute
    sum.second = t1.second + t2.second
    return sum

def valid_time(t):
    """check for the validity of the time object attributes:
       24 > hour > 0, 60 > minute > 0, 60 > second > 0 """
    if t.hour < 0 or t.minute < 0 or t.second < 0:
       return False
    if t.minute >= 60 or t.second >= 60 or t.hour >= 24:
       return False
    return True
```

**Perform the following steps:**

  1. [Download](https://ict.senecacollege.ca/~raymond.chan/ops435/labs/lab7/lab7a.py) or create the above Python script **lab7a.py** in your ~/ops435/lab7 directory.
  2. [Download](https://ict.senecacollege.ca/~raymond.chan/ops435/labs/lab7/lab7a1.py) or create a new Python script named **lab7a1.py** in the lab7 directory:

```bash
cd ~/ops435/lab7
vi ~/ops435/lab7/lab7a1.py
```

  3. Place the following content inside the new python file **lab7a1.py** and save it:

```python
#!/usr/bin/env python3
# Student ID: [seneca_id]
from lab7a import *
t1 = Time(8,0,0)
t2 = Time(8,55,0)
t3 = Time(9,50,0)

td = Time(0,50,0)

tsum1 = sum_times(t1,td)
tsum2 = sum_times(t2,td)
tsum3 = sum_times(t3,td)   

ft = format_time
print(ft(t1),'+',ft(td),'-->',ft(tsum1))
print(ft(t2),'+',ft(td),'-->',ft(tsum2))
print(ft(t3),'+',ft(td),'-->',ft(tsum3))
```

  4. The above python script **lab7a1.py** should produce the following output when executed:

```bash
[rchan@centos7 lab7]$ python3 lab7a1.py
08:00:00 + 00:50:00 --> 08:50:00
08:55:00 + 00:50:00 --> 08:105:00
09:50:00 + 00:50:00 --> 09:100:00
```

  5. If you pay a little bit attention on the outputs, you should notice that the sum_times() function did not carry 60 minutes over to hour. It also will not carry 60 seconds over to minute.
  6. To fix that problem, perform the following:

        1. Edit the file **lab7a.py** and modify the function sum_times(). Add code to check the values of the time object's three attributes. If the value of the minute attribute is more than 60, carry it over to the hour until it is less than 60. Do the same for the value of the second attribute.
        2. The illustration below indicates where you should perform the carry over operation in the sum_times() function in **lab7a.py**:

```python
...
...
def sum_times(t1, t2):
    """Add two time objests and return the sum."""
    sum = Time(0,0,0)
    sum.hour = t1.hour + t2.hour
    sum.minute = t1.minute + t2.minute
    sum.second = t1.second + t2.second
    
    #[ insert python code here to check for minute and second 
    #[ attribute here, and carry over when necessary
    #[
    return sum
...
...
```

   3. Save the file.
   4. Test run your script **lab7a1.py** again and make sure that it produces the output to match the following exactly:

```bash
[rchan@centos7 lab7]$ python3 lab7a1.py
08:00:00 + 00:50:00 --> 08:50:00
08:55:00 + 00:50:00 --> 09:45:00
09:50:00 + 00:50:00 --> 10:40:00
```

  7. Download the checking script and check your work. Enter the following commands from the bash shell.

```bash
cd ~/ops435/lab7/
pwd #confirm that you are in the right directory
ls CheckLab7.py || wget https://ict.senecacollege.ca/~raymond.chan/ops435/labs/LabCheckScripts/CheckLab7.py
python3 ./CheckLab7.py -f -v lab7a
```

  8. Before proceeding, make certain that you identify all errors in lab7a.py. When the checking script tells you everything is OK - proceed to the next step.

### Part 2 - Pure Function and Modifiers

In Part 1, the sum_times() function will not make any change to any of the two time objects passed to it. This is called a pure function. In this part, we are going to create a function which changes the value (the three attributes) of a time object based on the integer value passed to the function. We call such type of function a **modifier**. The function we are going to add is called **change\_time(time, seconds)**: where **time** is the time object the function is going to modify, and **seconds** is the number of seconds the function will add to the time object.

  1. Make a copy of lab7a.py and name it as **lab7b.py** in the ~/ops435/lab7 directory

```bash
cd ~/ops435/lab7
cp lab7a.py lab7b.py
```

  2. Add the following new function called **change\_time(time, seconds)** after the **sum\_times()** function into **lab7b.py**:

```python
def change_time(time, seconds):
    time.second += seconds
    if valid_time(time) != True:
        while time.second >= 60:
             time.second -= 60
             time.minute +=1
        while time.minute >= 60:
             time.minute -= 60
             time.hour += 1
    return None
```

  3. Save the file.
  4. Bring up an interactive Python3 shell to test the new function.

        - **Testing change\_time(time, seconds) with import**

```bash
[rchan@centos7 lab7]$ python3
Python 3.4.9 (default, Aug 14 2018, 21:28:57) 
[GCC 4.8.5 20150623 (Red Hat 4.8.5-28)] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from lab7b import *
>>> time1 = Time(9,50,0)
>>> format_time(time1)
'09:50:00'
>>> seconds = 1800
>>> seconds
1800
>>> change_time(time1, seconds)
>>> format_time(time1)
'10:20:00'
```

  5. If you encounter any syntax error or exception, please fix the error before moving on to the next step.
  6. Now try to set seconds to a **negative** value, e.g. -1800, and then call the **change\_time()** function. Will it change the **time1** object back to '09:50:00'? Let's try it out:

```bash
>>> format_time(time1)
'10:20:00'
>>> seconds = -1800
>>> change_time(time1, seconds)
>>> format_time(time1)
'10:20:-1800'
```

  7. The result is not correct! So we have to modify and update the change_time() function so that it can handle positive and negative value correctly. The following steps are necessary:

        1. We must first add code to check on the **second** attribute of the time object to make sure that it is not less than zero. If it is, we must borrow one from the **minute** attribute and add 60 to the **second** attribute. We have to repeat this checking until the **second** attribute is no longer less than zero.
        2. We then have to add code to check on the **minute** attribute. If it is less than zero, we must borrow 1 from the 'hour' attribute and add 60 to the **minute** attribute. We have to repeat this checking until the **minute** attribute is no longer less than zero.
        
```python
# Code for Step i
while time.second < 0:
                time.minute -= 1
                time.second += 60
```

```python
# Code for Step ii
while time.minute < 0:
                time.hour -= 1
                time.minute += 60
```

  8. After updating the change\_time() function with the above additional code, save the file and test it again in a Python interactive  shell by importing the new version of the function.

```bash
[rchan@centos7 lab7]$ python3
Python 3.4.9 (default, Aug 14 2018, 21:28:57) 
[GCC 4.8.5 20150623 (Red Hat 4.8.5-28)] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from lab7b import *
>>> time1 = Time(9,50,0)
>>> format_time(time1)
'09:50:00'
>>> seconds = 1800
>>> change_time(time1, seconds)
>>> format_time(time1)
'10:20:00'
>>> seconds = -1800
>>> change_time(time1, seconds)
>>> format_time(time1)
'09:50:00'
```

  9. Make sure that your **change\_time()** function works correctly for both positive and negative values of 'seconds'.
  10. Download the checking script and check your work. Enter the following commands from the bash shell.

```bash
cd ~/ops435/lab7/
pwd #confirm that you are in the right directory
ls CheckLab7.py || wget https://ict.senecacollege.ca/~raymond.chan/ops435/labs/LabCheckScripts/CheckLab7.py
python3 ./CheckLab7.py -f -v lab7b
```

  11. Before proceeding, make certain that you identify all errors in lab7b.py. When the checking script tells you everything is OK - proceed to the next step.

### Part 3 - Another approach to perform operation on time objects

In previous parts, we recognise the fact that a Time object is essentially a three-digit number in base 60. The "second" attribute is the "ones colume", the "minute" attribute is the "sixties column", and the hour attribute is the "60 x 60" column. This is why we have to carry over "second" to "minute" when the value of "second" exceeds 60, and we have to do the same for the "minute" attribute.

In this part, we are going to use a different approach to manage calculation on Time object. We know that there are 86400 (24 x 60 x 60) seconds in a day. It is relatively easy to convert a Time object in the form of hour:minute:second into an integer value which represent the time in seconds from mid-night. It is equally straight forward to convert a integer number of seconds between 0 and 86399 into hour:minute:second format. Here are two functions: sec_to_time(seconds) and time_to_sec(time) which can do just that:

```python
...
...
def time_to_sec(time):
    '''convert a time object to a single integer representing the number of seconds from mid-night'''
    minutes = time.hour * 60 + time.minute
    seconds = minutes * 60 + time.second
    return seconds

def sec_to_time(seconds):   
    '''convert a given number of seconds to a time object in hour,minute,second format'''
    time = Time()
    minutes, time.second = divmod(seconds, 60)
    time.hour, time.minute = divmod(minutes,60)
    return time
...
...
```

  1. Make a copy of lab7b.py and name it as lab7c.py in the ~/ops435/lab7 directory:

```bash
cd ~/ops435/lab7
cp lab7b.py lab7c.py
```

  2. Add the above two new functions: time\_to\_sec() and sec\_to\_time() to lab7c.py after the change\_time() function.
  3. Save the file, and test the two function in an Python interactive shell:

```bash
[rchan@centos7 lab7]$ python3
Python 3.4.9 (default, Aug 14 2018, 21:28:57) 
[GCC 4.8.5 20150623 (Red Hat 4.8.5-28)] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from lab7c import *
>>> t1 = Time(9,50,0)
>>> sec_t1 = time_to_sec(t1)
>>> sec_t1
35400
>>> t1_sec = sec_to_time(sec_t1)
>>> t1_sec
<lab7c.Time object at 0x7f89f656e048>
>>> format_time(t1_sec)
'09:50:00'
>>>
```

  4. You should get the same result as shown above. If not, please troubleshoot and fix any errors.
  5. Edit your lab7c.py again. Modify the other two functions: sum\_times() and change\_time() to use the two new functions to perform the computation operation.
  6. Create a new Python script named **lab7c1.py** and place the following content in it:

```python
#!/usr/bin/env python3
# Student ID: [seneca_id]
from lab7c import *
t1 = Time(8,0,0)
t2 = Time(8,55,0)
t3 = Time(9,50,0)

td = Time(0,50,0)

tsum1 = sum_times(t1,td)
tsum2 = sum_times(t2,td)
t3None = change_time(t3,1800)   

ft = format_time
print(ft(t1),'+',ft(td),'-->',ft(tsum1))
print(ft(t2),'+',ft(td),'-->',ft(tsum2))
print('09:50:00 + 1800 sec','-->',ft(t3))
```

  7. Test run your script **lab7c1.py**, it should produce the following output:

```bash
[rchan@centos7 lab7]$ python3 lab7c1.py
08:00:00 + 00:50:00 --> 08:50:00
08:55:00 + 00:50:00 --> 09:45:00
09:50:00 + 1800 sec --> 10:20:00
```

  8. Download the checking script and check your work. Enter the following commands from the bash shell.

```bash
cd ~/ops435/lab7/
pwd #confirm that you are in the right directory
ls CheckLab7.py || wget https://ict.senecacollege.ca/~raymond.chan/ops435/labs/LabCheckScripts/CheckLab7.py
python3 ./CheckLab7.py -f -v lab7c
```

  9. Before proceeding, make certain that you identify all errors in lab7a.py. When the checking script tells you everything is OK - proceed to the next step.

## Investigation 2 - Objects and Methods

In the previous investigation, the functions that were defined for manipulating our time object are not tied directly to our time object. Given our time object alone, we won't be able to tell that there exist a function called sum\_times() which can be used to add two time objects and return their sum.

To tie up those functions to our time objects, we only need to move those functions definition under the class block which defines our Time object. When we move an external function into a class block, we need to add an extra function parameter and make it the first in the parameter list. By convention, we always name it as **self**.

### Part 1 - Classes and Methods for our Time objects

The following illustration shows how we can change external functions to become object methods (aka class functions) for our Time object. It is simply by moving the function definitions to be under the class definition for the Time object and add 'self' as the first parameter for each function:

```python
#!/usr/bin/env python3
# Student ID: [seneca_id]
class Time:
   """Simple object type for time of the day.
      data attributes: hour, minute, second
      function attributes: __init__, __str__, __repr__
                           time_to_sec, format_time,
                           change_time, sum_time
   """
   def __init__(self,hour=12,minute=0,second=0):
       """constructor for time object""" 
       self.hour = hour
       self.minute = minute
       self.second = second
   
   def format_time(self):
       """Return time object (t) as a formatted string"""
       return '%.2d:%.2d:%.2d' % (self.hour, self.minute, self.second)

   def sum_times(self, t2):
       """Add two time objests and return the sum."""
       sum = Time(0,0,0)
       self_sec = self.time_to_sec()
       t2_sec = t2.time_to_sec()
       sum = sec_to_time(self_sec + t2_sec)
       return sum

   def change_time(self, seconds):
       time_seconds = self.time_to_sec()
       nt = sec_to_time(time_seconds + seconds)
       self.hour, self.minute, self.second = nt.hour, nt.minute, nt.second 
       return None

   def time_to_sec(self):
       '''convert a time object to a single integer representing the 
       number of seconds from mid-night'''
       minutes = self.hour * 60 + self.minute
       seconds = minutes * 60 + self.second
       return seconds

   def valid_time(self):
       """check for the validity of the time object attributes:
       24 > hour > 0, 60 > minute > 0, 60 > second > 0 """
       if self.hour < 0 or self.minute < 0 or self.second < 0:
          return False
       if self.minute >= 60 or self.second >= 60 or self.hour >= 24:
          return False
       return True

def sec_to_time(seconds):
    '''convert a given number of seconds to a time object in 
       hour, minute, second format'''
    time = Time()
    minutes, time.second = divmod(seconds, 60)
    time.hour, time.minute = divmod(minutes, 60)
    return time
```

Please notice that the function named sec\_to\_time() did not get moved under the class block. It remains as an external function.

  1. [Download](https://ict.senecacollege.ca/~raymond.chan/ops435/labs/lab7/lab7d.py) or create a new python file and name it as **lab7d.py** and place the code listed above in it.
  2. Save the file, and test the new time object in an interactive Python shell:

```bash
[rchan@centos7 lab7]$ python3
Python 3.4.9 (default, Aug 14 2018, 21:28:57) 
[GCC 4.8.5 20150623 (Red Hat 4.8.5-28)] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from lab7d import *
>>> t1 = Time(9,50,0)
>>> t1
<lab7d.Time object at 0x7f1232a79be0>
>>> print(t1)
<lab7d.Time object at 0x7f1232a79be0>
>>> format_time(t1)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'format_time' is not defined
>>> Time.format_time(t1)
'09:50:00'
>>> type(Time.format_time)
<class 'function'>
>>> t1.format_time()
'09:50:00'
>>> type(t1.format_time)
<class 'method'>
>>>
```

  3. Please study the output of the interactive shell session above and note that in order to call the format\_time() function, we have to prefix it with the class name **Time** as it is under the class definition in lab7d.py. Also note that format\_time() is now a method of the time object **t1**.
  4. You may also notice that when we called the print() function with our time object t1, the print function only showed that it is an Time object and its memory location, but did not display its properties (i.e. data attributes) like the values of its hour, minute, and second attributes.
  5. Try to find out how to test the valid_time(), change_time() functions to make sure they all work.
  6. Download the checking script and check your work. Enter the following commands from the bash shell.

```bash
cd ~/ops435/lab7/
pwd #confirm that you are in the right directory
ls CheckLab7.py || wget wget https://ict.senecacollege.ca/~raymond.chan/ops435/labs/LabCheckScripts/CheckLab7.py
python3 ./CheckLab7.py -f -v lab7d
```

  7. Before proceeding, make certain that you identify all errors in lab7d.py. When the checking script tells you everything is OK - proceed to the next step.

### Part 2 - Special object methods

Each programmer-defined object has a few special methods which can be used to manipulate the object, the one we already know is the **\_\_init\_\_** method, which python refers it as the object constructor, and we can associate code to this method in the class definition.

In this part, we are going to investigate and study the **\_\_str\_\_** and **\_\_repr\_\_** special methods.

   - **Associate the following code to the \_\_str\_\_** method for the Time class:
        
```python
def __str__(self):
    '''return a string representation for the object self'''
    return '%.2d:%.2d:%.2d' % (self.hour, self.minute, self.second)
```

  1. Make a copy of lab7d.py and name it as lab7e.py. Add the function definition for \_\_str\_\_() after the \_\_init\_\_() function in lab7e.py. Make sure that the **def \_\_str\_\_(self):** line has the same indentation level as the \_\_init\_\_() function.
  2. Save the file lab7e.py and test it in an interactive Python shell:

```bash
[rchan@centos7 lab7]$ python3
Python 3.4.9 (default, Aug 14 2018, 21:28:57) 
[GCC 4.8.5 20150623 (Red Hat 4.8.5-28)] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from lab7e import *
>>> t1 = Time(9,50,0)
>>> t1
<lab7e.Time object at 0x7f830b498be0>
>>> print(t1)
09:50:00
>>> t1.format_time()
'09:50:00'
>>> print(t1.format_time())
09:50:00
>>>
```

  3. Now with the proper code (same code for the format_time() function) attached to the \_\_str\_\_ methon, we have a string representation for our time object that the print() function can/will use.
  4. You will still notice that typing the time object name itself on an interactive python shell, the Python interpreter will just display the type of the object and its location in memory.
  5. Let's look at the next special object method **\_\_repr\_\_()**. We can also attached code to this function to tell the python interpreter what we would like the object to look like in an interactive shell.

        - **Associate the following code to the \_\_repr\_\_** method for the Time class:
        
```python
def __repr__(self):
    '''return a string representation for the object self'''
    return '%.2d.%.2d.%.2d' % (self.hour, self.minute, self.second)
```

  6. Add the function definition for \_\_repr\_\_() after the \_\_str\_\_() function in lab7e.py. Please note that we use the '.' instead of ':' in the formatting string. Make sure that the **def \_\_repr\_\_(self):** line has the same indentation level as the \_\_init\_\_() function.
  7. Save the file lab7e.py and test it in an interactive Python shell:

```bash
[rchan@centos7 lab7]$ python3
Python 3.4.9 (default, Aug 14 2018, 21:28:57) 
[GCC 4.8.5 20150623 (Red Hat 4.8.5-28)] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from lab7e import *
>>> t1 = Time(9, 50, 0)
>>> t1
09.50.00
>>> print(t1)
09:50:00
>>>
```

   - Note: if you have python code attached to both the \_\_str\_\_ and \_\_repr\_\_ special method, the print() function will use the string return by the \_\_str\_\_ method. If \_\_str\_\_ is not defined, the print() function will use the string return by \_\_repr\_\_.
  
  8. Download the checking script and check your work. Enter the following commands from the bash shell.

```bash
cd ~/ops435/lab7/
pwd #confirm that you are in the right directory
ls CheckLab7.py || wget https://ict.senecacollege.ca/~raymond.chan/ops435/labs/LabCheckScripts/CheckLab7.py
python3 ./CheckLab7.py -f -v lab7e
```

  9. Before proceeding, make certain that you identify all errors in lab7e.py. When the checking script tells you everything is OK - proceed to the next step.

### Part 3 - Operator overloading

Remember we define the sum_times() function to add to time objects and return their sum? After we moved the function definition under the class definition in lab7d.py, it became a class function, and method for the time object. It can be invoked by using the **Time.sum\_times(t1,t2)** syntax or **t1.sum\_times(t2)** syntax. However, there is also a way to invoke it by using a special function which ties to the '+' arithmetic operator.

The '+' operator is bound to the special function of an object's \_\_add\_\_() method. If we attached the same code we have for the sum_times() function to the special function \_\_add\_\_() for the time object, the we can use the '+' operator to tell the python interpreter to perform sum operation on the time object.

Changing or specifying the behaviour of an operator so that it works with programmer-defined types is called **operator overloading**.

Let's add the appropriate code to the \_\_add\_\_ function to overload the '+' operator so that we can use an arithmetic expression to tell the python interpreter to add two time objects.

   - **Associate the code to the \_\_add\_\_ method:**

```python
def __add__(self, t2):
    return self.sum_times(t2)
```

  1. Copy lab7e.py to a new file called lab7f.py. Add the function definition for \_\_add\_\_() after the \_\_str\_\_() function to lab7f.py. Make sure that the **def \_\_add\_\_(self, t2):** line has the same indentation level as the \_\_init\_\_() function.
  2. Save the file lab7f.py and test it in an interactive Python shell:

```bash
[rchan@centos7 lab7]$ python3
Python 3.4.9 (default, Aug 14 2018, 21:28:57) 
[GCC 4.8.5 20150623 (Red Hat 4.8.5-28)] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from lab7f import *
>>> t1 = Time(9,50,0)
>>> t2 = Time(1,1,1)
>>> t1.sum_times(t2)
10.51.01
>>> t2.sum_times(t1)
10.51.01
>>> t1 + t2
10.51.01
>>> x = t1 + t2
>>> type(x)
<class 'lab7f.Time'>
>>> print(x)
10:51:01
```

   - Note: If you get different results, please troubleshoot your lab7f.py file and fix any discrepancy.
  
  3. Download the checking script and check your work. Enter the following commands from the bash shell.

```bash
cd ~/ops435/lab7/
pwd #confirm that you are in the right directory
ls CheckLab7.py || wget https://ict.senecacollege.ca/~raymond.chan/ops435/labs/LabCheckScripts/CheckLab7.py
python3 ./CheckLab7.py -f -v lab7f
```

  4. Before proceeding, make certain that you identify all errors in lab7f.py. When the checking script tells you everything is OK - proceed to the next step.

## Investigation 3 - Objects and Scope

Scope means where an object can be accessed, and how long that object exists.

In this investigation, we will look at the types of scope you're most likely to run into and which are most likely to cause trouble for you. We will not be explicitly looking at class scope, nested functions, built-in objects, constants, and mutability.

### Part 1: Local Scope

In Python any object that is created inside a function has local scope. That means that it is accessible only by code inside that function, and is not accessible by any code outside of the function. In other languages this concept is related to **block** scope but that does not exist in python. Every block inside a function has the same scope.

Try the following code. Have each in a separate Python file.

[lab7g.py](https://ict.senecacollege.ca/~raymond.chan/ops435/labs/lab7/lab7g.py) - local scope:

```python
#!/usr/bin/env python3
# Student ID: [seneca_id]
def function1():
    # This object 'a' is completely unrelated to the object 'a' in function2():
    a = 'object_function1'
    print('print() call in function1 on a:',a)

def function2():
    # This variable 'a' is completely unrelated to the variable 'a' in function1():
    a = 'function2_object'
    print('print() call in function2 on a:',a)

# Note that you cannot access the value of object '''a''' created in function1()
# or function2() with the print() functions after the calling function1() and function2()
# All the print() retrieved the value of object '''a''' defined in the main script.
a = 'object_in_main'
print('print() call in main on a:',a)
function1()
print('print() call in main on a:',a)
function2()
print('print() call in main on a:',a)
```

### Part 2: Global Scope

Sometimes you want to have an object accessible from anywhere in your program, including inside and outside any functions. Here's an example:

  1. [lab7h.py](https://ict.senecacollege.ca/~raymond.chan/ops435/labs/lab7/lab7h.py) - global scope

```python
#!/usr/bin/env python3
# Student ID: [seneca_id]
def function1():
    print('print() in function1 on schoolName:',schoolName)

def function2():
    print('print() in function2 on schoolName:',schoolName)

schoolName = 'Seneca College'
print('print() in main on schoolName:',schoolName)
function1()
print('print() in main on schoolName:',schoolName)
function2()
print('print() in main on schoolName:',schoolName)
```

  2. Note that the same thing is printed over and over because the **schoolName** object is defined outside a function which makes it global which makes it accessible from anywhere.
  3. Python has one weird quirk when it comes to global scope: if you assign something to an existing object inside a function - it will assume you want to create a new object in that function's local scope. That will hide the global object inside the function unless you declare it explicitly with the global keyword:
  4. [lab7i.py](https://ict.senecacollege.ca/~raymond.chan/ops435/labs/lab7/lab7i.py) - global keyword

```python
#!/usr/bin/env python3
# Student ID: [seneca_id]
def function1():
    schoolName = 'SICT'
    print('print() in function1 on schoolName:',schoolName)

def function2():
    global schoolName
    schoolName = 'SSDO'
    print('print() in function2 on schoolName:',schoolName)

schoolName = 'Seneca'
print('print() in main on schoolName:',schoolName)
function1()
print('print() in main on schoolName:',schoolName)
function2()
print('print() in main on schoolName:',schoolName)
```

   - The execution of the script **lab7i.py** shown above should give you the following:

```python
[rchan@centos7 lab7]$ python3 lab7i.py
print() in main on schoolName: Seneca
print() in function1 on schoolName: SICT
print() in main on schoolName: Seneca
print() in function2 on schoolName: SSDO
print() in main on schoolName: SSDO
```

   - Note that the function1() call does not modify the global **schoolName** object but function2() does.

  5. As the last task for this lab: modify the script above so that it would print the following, by changing only the scope of some objects. Save the program as **lab7i.py**:

```python
print() in main on schoolName: Seneca
print() in function1 on schoolName: SICT
print() in main on schoolName: SICT
print() in function2 on schoolName: SSDO
print() in main on schoolName: SSDO
```

  6. Download the checking script and check your work. Enter the following commands from the bash shell.

```bash
cd ~/ops435/lab7/
pwd #confirm that you are in the right directory
ls CheckLab7.py || wget https://ict.senecacollege.ca/~raymond.chan/ops435/labs/LabCheckScripts/CheckLab7.py
python3 ./CheckLab7.py -f -v lab7i
```

  7. Before proceeding, make certain that you identify all errors in lab7i.py. When the checking script tells you everything is OK - proceed to the next step.

### Object/Instance Scope

Every object can have attributes that exist for that object only. You create and access those attribute with the name of the object itself using the dot '.' notation. Note that these may not part of the **class** object's attribute. Each object has its own set of **instance** attributes. You will have seen that when you created objects in the Classes and Objects section above.

## Lab 7 Sign-Off (Completing the lab)

Name the output of `./CheckLab7.py -f -v` as **lab7\_\[seneca\_id\].txt**

**Submit the following files individually to Blackboard:**

- [x] `lab7_[seneca_id].txt`
- [x] `lab7a.py, lab7b.py, lab7c.py, lab7d.py, lab7e.py, lab7f.py, and lab7i.py.`

## Lab Review

  1. What is a program-defined type object?
  2. What python keyword is used to create a blue-print for a new type of objects?
  3. What are the two types of attributes a Python object may have?
  4. Where does a program-defined python object get its methods from?
  5. What is the difference between a pure function and a modifier function?
  6. What does the time\_to\_sec() function do?
  7. What does the sec\_to\_time() function do?
  8. What is the reason for not making sec\_to\_time() a mothod for the Time object?
  9. How do you make an external function to be a method of a programmer-defined object?
  10. What does the special method **\_\_init\_\_** do?
  11. What does the special method **\_\_str\_\_** do?
  12. What does the special method **\_\_repr\_\_** do?
  13. What does **operator overloading** refer to in Python?
  14. What does the term **scope** mean in Python?
  15. When do you want to create an object with **global** scope?
  16. What **scope** does an object have if it is created in a function?
