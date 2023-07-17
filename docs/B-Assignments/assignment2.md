---
id: assignment2
title: Assignment 2
sidebar_position: 2
description: Assignment 2 for Students to Complete and Submit
---

# Assignment 2

## Usage Report

**Weight**: 15% of the overall grade

**Due Date**: Please follow the three stages of submission schedule:

- Complete the requirements for the first milestone and push to GitHub by November 25, 2022 by 11:59 PM,
- Complete the requirements for the second milestone and push to GitHub by December 2, 2022 by 11:59 PM
- Complete the your Python script and push to GitHub by December 9, 2022 at 11:59 PM, and
- Copy your Python script into a Word document and submit to Blackboard by December 9, 2022 at 11:59 PM.

## Overview

Most system administrators would like to know the utilization of their systems by their users. On a Linux system, each user's login records are normally stored in the binary file /var/log/wtmp. The login records in this binary file can not be viewed or edited directly using normal Linux text commands like 'less', 'cat', etc. The 'last' command is often used to display the login records stored in this file in a human readable form. Please check the man page of the 'last' command for available options. The following is the contents of the file named "usage\_data\_file", which is a sample output of the 'last' command with the '-Fiw' flag on:

```bash
$ last -Fiw > usage_data_file
$ cat usage_data_file
rchan    pts/9        10.40.91.236     Tue Feb 13 16:53:42 2018 - Tue Feb 13 16:57:02 2018  (00:03)    
cwsmith  pts/10       10.40.105.130    Wed Feb 14 23:09:12 2018 - Thu Feb 15 02:11:23 2018  (03:02)
rchan    pts/2        10.40.91.236     Tue Feb 13 16:22:00 2018 - Tue Feb 13 16:45:00 2018  (00:23)    
rchan    pts/5        10.40.91.236     Tue Feb 15 16:22:00 2018 - Tue Feb 15 16:55:00 2018  (00:33)    
asmith   pts/2        10.43.115.162    Tue Feb 13 16:19:29 2018 - Tue Feb 13 16:22:00 2018  (00:02)    
tsliu2   pts/4        10.40.105.130    Tue Feb 13 16:17:21 2018 - Tue Feb 13 16:30:10 2018  (00:12)    
cwsmith  pts/13       10.40.91.247     Tue Mar 13 18:08:52 2018 - Tue Mar 13 18:46:52 2018  (00:38)    
asmith   pts/11       10.40.105.130    Tue Feb 13 14:07:43 2018 - Tue Feb 13 16:07:43 2018  (02:00)
```

It is always desirable to have a daily, or monthly usage reports by user or by remote host based on the above information.

## Tasks for this assignment

In this assignment, you will create a script that can generate usage reports based off of output from the last command or from a file in a similar format. You will use usage\_data\_file for testing but the script should also be tested on some other Linux machines and on Matrix.

Depending on the options selected, your script should list users or remote IP addresses, either overall or limited by a specific date. It should also generate daily usage reports for specific users/remote hosts, or weekly usage reports as well.

## Allowed Python Modules

- the **os**, **sys** modules
- the **argparse** module
- The **datetime** module
- The **subprocess** module

### Argparse

Argparse is a much, much better way of dealing with command line arguments. It not only handles positional arguments, but options as well and will generate usage messages. It's _very highly recommended_ that you spend at least a few minutes reading through the [Argparse Tutorial](https://docs.python.org/3/howto/argparse.html).

### Datetime

Since Python is a _batteries_ included language, it's important to get accustomed with using some of the modules in the standard library. Since we are dealing with dates and times, you are required to work with the datetime module. The full docs can be found [here](https://docs.python.org/3/library/datetime.html).

Datetime objects can be initialized from strings that match a particular format. One example is provided for you in the codebase: [the strptime](https://docs.python.org/3/library/datetime.html#datetime.datetime.strptime) function.

Once you have created datetime objects, you can do useful things with them:

- `d1 > d2` will return True is d1 is **later** than d2.
- `d2 - d1` will return a _timedelta_ object, which is an amount of time between d2 and d1.

More interesting methods are in the [table](https://docs.python.org/3/library/datetime.html#datetime.datetime.fold) in the docs.

### Timedelta

When performing some operations with datetime objects, we may see timedelta objects being created. In math, **delta** refers to a difference. So a timedelta object is essentially an object that represents a duration.

You can do useful things with timedelta objects:

- `delta1 + delta2` will add up two durations. For example, if delta1 is two hours and delta2 is three hours, then this operation will return five hours.
- `str(delta1)` will represent the timedelta in a friendly format: H:MM:SS if the duration is less than 24 hours.

More interesting methods are in the [table](https://docs.python.org/3/library/datetime.html#datetime.datetime.fold) in the docs.

## Instructions

Accept the Assignment #2 via the link on Blackboard, and clone the Github repository on a Linux machine of your choosing. Your code should only be located in the file "assignment2.py".

### Program Name and valid command line arguments

Your script must accept one or more "file name" as its command line parameters and other optional parameters as shown below. Your python script should produce the following usage text when run with the --help option:

```bash
[eric@centos7 a1]$ python3 ./assignment2.py -h
usage: assignment2.py [-h] [-l {user,host}] [-r RHOST] [-t {daily,weekly}]
                      [-d DATE] [-u USER] [-v]
                      [files]

Usage Report based on the last command

positional arguments:
  files                 file to be processed, if blank, will call last

optional arguments:
  -h, --help            show this help message and exit
  -l {user,host}, --list {user,host}
                        generate user name or remote host IP from the given
                        files
  -r RHOST, --rhost RHOST
                        usage report for the given remote host IP
  -t {daily,weekly}, --time {daily,weekly}
                        type of report: day or week
  -d DATE, --date DATE  specify date for report
  -u USER, --user USER  usage report for the given user name
  -v, --verbose         turn on output verbosity

Copyright 2022 - Eric Brauer
```

Replace the last line with your own full name.

Compare the usage output you have now with the one above. There is one option missing, you will need to change the `argparse` function to implement it.

You will that there is an 'args' object in assignment2.py. Once the `parse_command_args()` function is called, it will return an args object. The command line arguments will be stored as attributes of that object. **Do not use sys.argv to parse arguments**.

If there is a file name provided at the command line, read the login/logout records from the contents of the given file. If there is not file name, get the record on the system your script is being execute using the Linux command "last -iwF". The format of each line in the file should be the same as the output of 'last -Fiw'. Filter out incomplete login/logout record (hints: check for the number of fields in each record).

### Header

All your Python codes for this assignment must be placed in a **single source file**. Please include the following declaration by **you** as the **script level docstring** in your Python source code file (replace \[Student\_id\] with your Seneca email user name, and "Student Name" with your own name):

```python
OPS435 Assignment 2 - Fall 2022
Program: assignment2.py
Author: "Student Name"
The python code in this file assignment2.py is original work written by
"Student Name". No code in this file is copied from any other source 
including any person, textbook, or on-line resource except those provided
by the course instructor. I have not shared this python file with anyone
or anything except for submission for grading.  
I understand that the Academic Honesty Policy will be enforced and violators 
will be reported and appropriate action will be taken.
```

### Use of Github

You will once again be graded partly on **correct use of version control**, that is use of numerous commits with sensible commit messages. In professional practice, this is critically important for the timely delivery of code. You will be expected to use:

1. `git add assignment2.py`
2. `git commit -m "a message that describes the change"`
3. `git push` after completing each step. There is no penalty for "too many commits", there is no such thing!

## Suggested Process

1. Read the rest of this document, try and understand what is expected.
2. Use the invite link posted to Blackboard to accept the assignment, and clone the repo to a Linux machine.
3. Run the script itself. Investigate argparse. **In the main block, print(args)**. Experiment with the various options.
4. Read the usage output in the docs, what option must you implement? Go ahead and implement it. **Commit the change**.
5. Use the check script to check your work: `./checkA2.py -f -v TestHelp`. It should succeed.
6. Investigate the `parse_for_user()` function, with the `usage_data_file`.
7. `parse_for_user()` should take the list of lines from the file, and instead return a list of usernames. **In main, print the title header and the output. Commit the change.**
8. **Once you have `output` --\> `parse_for_user()` --\> correct output being printed, use if conditions to print only when `-l user` is in the command line arguments.**
9. Test using `./checkA2.py -f -v TestList`. You should see some tests succeeding, but some failing. Use the check script to start implementing the functions needed for **-l host**.
10. **Continue committing these changes as your proceed**. Your script should now be passing the TestList tests.
11. Now implement the -d <date\> option. This will filter your user list based on the date provided by the user.
12. Use `./checkA2.py -f -v TestDate` to check your work. **You have completed the first milestone!**
13. Use `./checkA2.py -f -v TestDaily` and `./checkA2.py -f -v TestWeekly` to check your work. **You have completed the second milestone!**
14. The next stage will be to implement the daily/weekly reports. Use `TestDaily` and `TestWeekly` with the check script.
15. Perform last checks and document your code. Write _why_ your code is doing what it does, rather than _what_ it's doing. You should have 100% of tests succeeding.

## Output Format

The format of your log tables should be identical to the sample output below, in order to minimize test check error. The horizontal banner between title and data should be composed of equal signs (=), and be the length of the title string. List tables should need no extra formatting. For daily/montly tables with two columns, The first column should be 10 characters long and be left-aligned. The second column should be 15 characters long and be right-aligned.

```bash
Daily Usage Report for rchan < same number of characters
============================ <
Date                Usage < right justified
13/02/2018        0:26:00 <
15/02/2018        0:33:00
Total             0:59:20
llllllllllrrrrrrrrrrrrrrr    < left column is 10 chars, right column is 15
^left just.
```

### Sample Outputs

The following are the reports generated by the usage report script (ur.py) with the "usage\_data\_file" mentioned in the overview section.

**User List**

The following is the user list extracted from the usage\_data\_file created by the command:

```bash
[eric@centos7 a2]$ ./assignment2.py -l user usage_data_file
```

```bash
User list for usage_data_file
=============================
asmith
cwsmith
rchan
tsliu2
```

**Remote Host List**

The following is the remote host list extracted from the usage\_file\_file created by the command:

```bash
[eric@centos7 a2]$ ./assignment2.py -l host usage_data_file
```

```bash
Host list for usage_data_file
=============================
10.40.105.130
10.40.91.236
10.40.91.247
10.43.115.162
```

**The Verbose Option**

Either of the following two tests can be modified with the `--verbose` option. You shouldn't have to do anything to get this working:

```bash
[eric@centos7 a2]$ ./assignment2.py -l host -v usage_data_file
```

```bash
Files to be processed: usage_data_file
Type of args for files <class 'str'>
Host list for usage_data_file
=============================
10.40.105.130
10.40.91.236
10.40.91.247
10.43.115.162
```

**List For Specific Day**

Specifying a `--date` in YYYY-MM-DD format should list all users or hosts that were logged in at some point during that date, even if their start time or end time is different. For example, user `cwsmith` logged in on Feb 14 and logged off on Feb 15, but they show up when the following command is run:

```bash
[eric@centos7 a2]$ ./assignment2.py -l user -d 2018-02-14 usage_data_file
```

```bash
User list for usage_data_file
=============================
cwsmith
```

This should work for hosts as well:

```bash
[eric@centos7 a2]$ ./assignment2.py -l host -d 2018-02-14 usage_data_file
```

```bash
Host list for usage_data_file
=============================
10.40.105.130
```

If the user types in an invalid date, the script should halt and print the following error message:

```bash
[eric@centos7 a2]$ ./assignment2.py -l host -d 2018-02-xx usage_data_file
```

```text
Date not recognized. Use YYYY-MM-DD format.
```

**Daily Usage Report by User**

The following are Daily Usage Report is created for user rchan.

```bash
[eric@centos a2]$ ./assignment2.py -u rchan -t daily usage_data_file
```

```bash
Daily Usage Report for rchan
============================
Date                Usage
13/02/2018        0:26:00
15/02/2018        0:33:00
Total             0:59:20
```

Be also sure to test with the `--verbose`

**Daily Usage Report by Remote Host**

The following is a Daily Usage Report created for the Remote Host 10.40.105.103 by the command:

```bash
[eric@centos7 a2]$ ./assignment2.py -r 10.40.105.130 -t daily usage_data_file
```

```bash
Daily Usage Report for 10.40.105.130
====================================
Date                Usage
14/02/2018        3:02:11
13/02/2018        2:12:49
Total             5:15:00
```

**Weekly Usage Report by User**

The following is a Weekly Usage Report created for user cwsmith by the command:

```bash
[eric@centos7 a2]$ ./assignment2.py -u cwsmith -t weekly usage_data_file
```

```bash
Weekly Usage Report for cwsmith
===============================
Date                Usage
2018 06           3:02:11
2018 10           0:38:00
Total             3:40:11
```

**Weekly Usage Report by Remote Host**

The following is a Weekly Usage Report created for the remote host 10.40.105.130 by the command:

```bash
[eric@centos7 a2]$ ./assignment2.py -r 10.43.115.162 -t weekly usage_data_file
```

```bas
Weekly Usage Report for 10.43.115.162
=====================================
Date                Usage
2018 06           0:02:31
Total             0:02:31
```

**Daily Report From Online**

Running the script with **no filename** as a file argument should call a subprocess.Popen object and run the command `last -Fiw`.

```bash
[eric@mtrx-node06pd ~]$ ./assignment2.py -l user
```

(Example Output from Matrix):

```bash
User list for online
====================
aabbas28
aaddae1
aali309
aaljajah
aalves-staffa
aanees1
aarham
aassankanov
abalandin
abhaseen
abholay
acamuzcu
acchikoti
adas20
adeel.javed
...
```

```bash
[eric@mtrx-node06pd ~]$ ./assignment2.py -u adas20 -t daily
```

```bash
Daily Usage Report for abholay
==============================
Date                Usage
16/07/2020       00:13:09
17/07/2020       00:08:59
Total            00:22:08
```

Please note that there will no unit test for this, but it is still a requirement.

## First Milestone

By the first deadline, you should have your `TestHelp`, `TestList` and `TestDate` tests all passing. Make sure that the code is in your GitHub repository. I will use a pull request comment to give feedback, suggest changes or get you unstuck.

## Second Milestone

By the second deadline, you should have `TestDaily` as well as `TestWeekly` tests passing. Again, make sure that the code pushed to GitHub includes your latest work.

## Python script coding and debugging

For each function, identify what type of objects should be passed to the function, and what type of objects should be returned to the caller. Once you have finished coding a function, you should start a Python3 interactive shell, import your functions and manually test each function and verify its correctness.

## Final Test

Once you have all the individual function tested and that each is working properly, perform the final test with test data provided by your professor and verify that your script produces the correct results before submitting your python program on Blackboard. Upload all the files for this assignment 2 to your vm in myvmlab and perform the final test.

## Rubric

| Task	| Maximum mark	| Actual mark |
| --- | --- | --- |
| First Milestone	| 10	|  |  |
| Second Milestone	| 10	|  |
| Additional Check: 'online'	| 5	|  |
| GitHub Use	| 10	|  |
| List Functions	| 10	|  |
| Daily/Weekly Functions	| 10	|  |
| Date Functions	| 10	|  |
| Error checking and exception handline	| 10	|  |
| Overall Design/Coherence	| 10	|  |
| Documentation	| 15	|  |
| **Total**	| **100**	|  |

## Submission

- Stage 1: Complete the first milestone on GitHub by November 25, 2022.
- Stage 2: Complete the second milestone on GitHub by December 2, 2022.
- Stage 3: Use commits to push your python script for this assignment to Github.com. The final state of your repository will be looked at on December 9, 2022 at 11:59 PM.
- Additionally: Copy your python script into a Word document and submit to Blackboard by December 9, 2022 at 11:59 PM.
