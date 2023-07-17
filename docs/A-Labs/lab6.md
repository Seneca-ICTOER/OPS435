---
id: lab6
title: Lab 6
sidebar_position: 6
description: Lab 6 for Students to Complete and Submit
---

# Lab 6: Writing Python Classes

## Lab Objectives

- Create new type of objects using the Class construct and investigate different ways in using them.

     + Python is an object oriented programming language.
     + Python uses the concept of "object" to store data(attributes - data values) and code(methods - function code) efficiently for later use. By using objects, programming languages gain the advantage of making large/complex programs into smaller and modular codes, which can be used or shared with other users/programs.
     + In Python, almost everything that we have used is actually an object with a specific purpose, however, starting in this lab we will create our own objects, and investigate different ways to use them.

### Python Reference

In previous labs, you have been advised to make notes and use online references. This also apply to learning about object oriented programming.

Below is a table with links to online Python document for Classes and objects. Please study the information given below and make sure you understand the key concepts introduced and discussed before start working on this lab.

| **Category** | **Resource Link** |
| :--- | :--- |
| Using Classes | [Classes](https://docs.python.org/3/tutorial/classes.html) |
| Classes and Objects | [Think Python Chapter 15](http://greenteapress.com/thinkpython2/html/thinkpython2016.html) |
| Classes and functions | [Think Python Chapter 16](http://greenteapress.com/thinkpython2/html/thinkpython2017.html) |
| Classes and methods | [Think Python Chapter 17](http://greenteapress.com/thinkpython2/html/thinkpython2018.html) |

### Key Concepts related to Python Class and Object

- Programmer-defined types
- Class Object
- Class functions: \_\_init\_\_, \_\_str\_\_, etc
- Class instance: attributes
- Object instantiation
- Object Attributes: data attributes and methods
- Pure Function
- Scopes and Namespaces: local, nonlocal, and global
- Class definition syntax

## Investigation 1: Creating Classes

In this first investigation you will be introduced to classes. A class is a blue print to creating an object, first we write what we want the object to contain inside the class, then we can instantiate(create the object) by providing the class type. Once an object is created, interacting with the object will look very familiar, because you have been using objects throughout the entire course, the only difference is these object will be created by you.

### Part 1 - Creating a Class

Each object of a class that we write in Python can contain values, functions, code, but none of the code is executed or run until the class is used to create an object. Remember that the class is a blueprint for how your object will work, the object that will be created is what will actually be processed by the python interpreter. This part of a class works in the same way as a function definition, the function doesn't run until it's executed, code inside classes doesn't get executed until they are made into objects.

**Perform the Following Steps:**

   1.  Create a new python script in the lab6 directory:

```bash
cd ~/ops435/lab6
vim ~/ops435/lab6/student.py
```

   2. Place the following content inside the new python script and save it. Read through this script and the comments inside.

```python
#!/usr/bin/env python3
# Author ID: [seneca_id]

class Student:

    # Define the name and student ID number (which is a string) when a student object is created, ex. student1 = Student('john', '025969102')
    def __init__(self, name, number):
        self.name = name
        self.number = number
        self.courses = {}

    # Display student name and number
    def displayStudent(self):
        print('Student Name: ' + self.name)
        print('Student Number: ' + self.number)

    # Add a new course and grade to students record
    def addGrade(self, course, grade):
        self.courses[course] = grade

    # Calculate the grade point average of all courses and display it
    def displayGPA(self):
        gpa = 0.0
        for course in self.courses.keys():
            gpa = gpa + self.courses[course]
        print('GPA of student ' + self.name + ' is ' + str(gpa / len(self.courses)))
```

   3. This is the Student class, with this class multiple Student objects can be created. There are a number of parts of this script that should look familiar, such as functions, for loops, values. Functions indented underneath the class definition are called methods. Values starting with **self**. are called public attributes. In the next steps lets break down this class and explain each part in detail.

### Part 2 - Understanding Class Structure

   1. First is the definition of the class:

```python
class Student:
```

   2. This is how you give the class a name, now when you need to create a new Student object we know the class is called Student. **Everything** indented underneath the **class Student**: will be a part of the class's definition.
   3. Next indented under the class is the \_\_init\_\_() method. This works similarly to a function, it contains code indented underneath it, that code is executed when you call the function. But \_\_init\_\_() is a special method, instead of manually calling this method, it will automatically be executed when we create a object. Inside the \_\_init\_\_() we create values(object attributes), these are created using **self.name**, where **name** is the name of the attribute. The **self.** portion before the value name is to let the class know that this value can be accessed from anywhere inside the class and outside of the class, as a public attribute. Lets come back to this later.

```python
def __init__(self, name, number):
    self.name = name
    self.number = number
    self.courses = {}
```

   4. The next method definition prints out values self.name and self.number, both of these values were set in the \_\_init\_\_() method. Normally creating vaules inside a function means they can only be accessed inside of that specific function. But classes give us the ability to share data throughout the class with all other objects. Place **self.** before the value name to allow that value to be shared with different functions, these values are called public attributes. However, as we will soon come to see this value is only shared within a single instance of the class(more on this to come).

```python
# Display student name and number
def displayStudent(self):
    print('Student Name: ' + self.name)
    print('Student Number: ' + self.number)
```

   5. This next method accepts some arguments. The first argument of the method is **self**, this is required syntax for making methods inside of a class, and allows the method to access any variables you created/saved in the class previously, such as, **self.courses**. This method will take two additional arguments: course and grade. The method will then store these inside a dictionary **self.courses**, with the key being **course** and the value being **grade**.

```python
# Add a new course and grade to students record
def addGrade(self, course, grade):
    self.courses[course] = grade
```

   6. This final method will do a bit of calculations. It will get the average of all values found inside the dictionary, add them up, and divide them by the number of values. When it finishes, the method will print out a message with the GPA of the student inside.

```python
# Calculate the grade point average of all courses and display it
def displayGPA(self):
    gpa = 0.0
    for course in self.courses.keys():
        gpa = gpa + self.courses[course]
    print('GPA of student ' + self.name + ' is ' + str(gpa / len(self.courses)))
```

   7. Now that the class has been broken down, the code inside is simple on it's own, but what does it mean when it all works together? Before you can use a class, we must create a new object. A single class description can be used to create as many objects as you like, not just a single object. Our **Student** class will be used to create lots of different student objects, each object will be created using the blueprint of the class, but they will all be separate and contain separate data to store each and every student's data. Try to think of an object as any other python data structure (list, set, dictionary): you can create multiple dictionaries and store different data inside, even if some of the data is the same.
   8. In a new file, import the Student class:

```python
from student import Student
```

   9. Create a new student object and assign values to it:

```python
# Creates an instance of the Student class, it will be separate from all other objects created with the Student class:
student1 = Student('John', '013454900')
```

   10. Have a look at the contents of the object student1:

```python
print(student1.name)
print(student1.number)
print(student1.courses)
student1.displayStudent()
```

   11. Before going further with **student1**, lets create a second object, to demonstrate that these are different data structures:

```python
student2 = Student('Jessica', '023384103')
```

   12. Take a closer look at some of these different attributes and methods.

```python
print(student2.name)
print(student2.number)
print(student2.courses)
student2.displayStudent()
```

   13. Now lets run some methods that are specific to each object's instance:

```python
# Add new courses for student1
student1.addGrade('uli101', 4.0)
student1.addGrade('ops235', 3.5)
student1.addGrade('ops435', 3.0)

# Add new courses for student2
student2.addGrade('ipc144', 4.0)
student2.addGrade('cpp244', 4.0)
```

   14. Investigate what has changed in each object:

```python
print(student1.name)
print(student1.courses)
print(student2.name)
print(student2.courses)
```

   15. The method **addGrade()** changes the **self.courses** dictionary. But both student1 and student2 have their OWN courses dictionary.
   16. Once an object is created the attributes inside may be modified externally. Though you may need to be careful, if a value is a string, and you change it to another type such as a integer or a list, it's possible the class was not designed to deal with the different type and may throw a error when you run a method. For example, changing the name to a integer would break the displayStudent method, because it would try and concatenate strings and integers (maybe the method should be written better).

```python
# student1.name is a string like any other
print(student1.name)
student1.name = 'Jack'
print(student1.name)
len(student1.name)
```

   17. The final part to creating objects is understanding how to pass values into newly created objects, such as, **student2 = Student('Jessica', '023384103')**. How did it know that Jessica is the name instead of the long string of numbers? This is done when the class is written, inside the \_\_init\_\_() method. Look at the arguments used for in the \_\_init\_\_ definition:

```python
def __init__(self, name, number):
    self.name = name
    self.number = number
    self.courses = {}
```

   18. First was self, but this is required and we can ignore this for now. Next is **name**, this is the classes first argument when we instantiate(create) it, the second argument is **number**.

```python
# student3 is the object, Student is the class name, 'Jen' is the first argument passed to __init__, '034686901' is the second argument passed to init.
student3 = Student('Jen', '034686901')
```

#### Create a Python Script Demonstrating Classes

   1. The following python script is broken. It has two major problems to fix and one new feature to add:

         - **first problem** is providing the student number as an integer causes an error(TypeError) when displayStudent() is run,
         - **second problem** is in displayGPA() may divide by zero(ZeroDivisionError) if no courses are added to the dictionary or the grades added to the dictionary are 0.0 floats.
         - **Finally**, you will add a new method to this class that prints out a formatted list of all courses the student has taken.

   2. Create the **~/ops435/lab6/lab6a.py** script.
   3. Use the following as a template(warning this is NOT the same as student.py):

```python
#!/usr/bin/env python3
# Author ID: [seneca_id]

class Student:

    # Define the name and number when a student object is created, ex. student1 = Student('john', 025969102)
    def __init__(self, name, number):
        self.name = name
        self.number = number
        self.courses = {}

    # Return student name and number
    def displayStudent(self):
        return 'Student Name: ' + self.name + '\n' + 'Student Number: ' + self.number

    # Add a new course and grade to students record
    def addGrade(self, course, grade):
        self.courses[course] = grade

    # Calculate the grade point average of all courses and return a string
    def displayGPA(self):
        gpa = 0.0
        for course in self.courses.keys():
            gpa = gpa + self.courses[course]
        return 'GPA of student ' + self.name + ' is ' + str(gpa / len(self.courses))

    # Return a list of course that the student passed (not a 0.0 grade)
    def displayCourses(self):
        return

if __name__ == '__main__':
    # Create first student object and add grades for each class
    student1 = Student('John', '013454900')
    student1.addGrade('uli101', 1.0)
    student1.addGrade('ops235', 2.0)
    student1.addGrade('ops435', 3.0)

    # Create second student object and add grades for each class
    student2 = Student('Jessica', '123456')
    student2.addGrade('ipc144', 4.0)
    student2.addGrade('cpp244', 3.5)
    student2.addGrade('cpp344', 0.0)

    # Display information for student1 object
    print(student1.displayStudent())
    print(student1.displayGPA())
    print(student1.displayCourses())

    # Display information for student2 object
    print(student2.displayStudent())
    print(student2.displayGPA())
    print(student2.displayCourses())
```

   - The **displayStudent()** method will not break if the object was created with an integer, example, student2 = Student('Jessica', 123456)
   - The **displayGPA()** will cleanly handle a ZeroDivisionError
   - The **displayCourses()** will return a list of courses that the student passed(not 0.0 grade)
   - The script should show the exact output as the samples(order of courses in list is not important)
   - The script should contain no errors


   - **Sample Run 1:**

```bash
./lab6a.py
Student Name: John
Student Number: 013454900
GPA of student John is 2.0
['ops435', 'ops235', 'uli101']
Student Name: Jessica
Student Number: 123456
GPA of student Jessica is 2.5
['cpp244', 'ipc144']
```

   - **Sample Run 2 (with import):**

```python
from lab6a import Student

student1 = Student('Jack', 931686102)

student1.addGrade('ops535', 2.0)

student1.addGrade('win310', 0.0)

student1.displayStudent()
# Will print: 'Student Name: Jack\nStudent Number: 931686102'

student1.displayGPA()
# Will print: 'GPA of student Jack is 1.0'

student1.displayCourses()
# Will print: ['ops535']

student2 = Student('Jen', 987654321)

student2.displayGPA()
# Will print: 'GPA of student Jen is 0.0'

student2.displayCourses()
# Will print: []
```

   3. Download the checking script and check your work. Enter the following commands from the bash shell.

```bash
cd ~/ops435/lab6/
pwd #confirm that you are in the right directory
ls CheckLab6.py || wget https://ict.senecacollege.ca/~raymond.chan/ops435/labs/LabCheckScripts/CheckLab6.py
python3 ./CheckLab6.py -f -v lab6a
```

   4. Before proceeding, make certain that you identify all errors in lab6a.py. When the checking script tells you everything is OK - proceed to the next step.

## Lab 6 Sign-Off (Completing the lab)

Name the output of `./CheckLab6.py -f -v` as **lab6\_\[seneca\_id\].txt**

**Submit the following files individually to Blackboard:**

- [x] `lab6_[seneca_id].txt`
- [x] `lab6a.py`

## Lab Review

   1. What is object oriented programming?
   2. What is the difference between a object and a class?
   3. What does the dir() function tell you about objects?
   4. What happens if you try and make a copy of an object?
   5. When does the \_\_init\_\_() method get executed?
   6. What is an attribute? How do you create an attribute?
   7. What is a method?
   8. What is the difference between a method and a function?
   9. What is self used for in an object?
   10. What does it mean to instantiate an object?
   11. Import the Student class into python3, instantiate some objects, and try changing different attributes, and adding new attributes.
   12. Make a copy of lab6a.py called lab6practice.py, make the Student class accept another argument called program. When you create the new object: student = Student('name', '123456789', 'CTY'). Can you print the new students program out with student.program?
   13. Create a new method in lab6practice.py that checks to make sure the program is either "CTY" or "CNS", if it's not one of these, change the value to "unknown". Make sure the attribute is changed after your object is created.
