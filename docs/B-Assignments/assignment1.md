---
id: assignment1
title: Assignment 1
sidebar_position: 1
description: Assignment 1 for Students to Complete and Submit
---

# Assignment 1

## Overview: du Improved

`du` is a tool for inspecting directories. It will return the contents of a directory along with how much drive space they are using. However, it can be parse its output quickly, as it usually returns file sizes as a number of bytes:

```bash
user@host ~ $ du --max-depth 1 /usr/local/lib
```

```bash
164028	/usr/local/lib/heroku
11072	/usr/local/lib/python2.7
92608	/usr/local/lib/node_modules
8	/usr/local/lib/python3.8
267720	/usr/local/lib
```

You will therefore be creating a tool called **duim (du improved)**. Your script will call du and return the contents of a specified directory, and generate a bar graph for each subdirectory. The bar graph will represent the drive space as percent of the total drive space for the specified directory. An example of the finished code your script might produce is this:

```bash
user@host ~ $ ./duim.py /usr/local/lib
```

```bash
 61 % [============        ] 164028	/usr/local/lib/heroku
  4 % [=                   ] 11072	/usr/local/lib/python2.7
 34 % [=======             ] 92608	/usr/local/lib/node_modules
  0 % [                    ] 8	/usr/local/lib/python3.8
Total: 267720 	 /usr/local/lib
```

Notice that total size of the target directory (/usr/local/lib) is around 260 Megabytes. Of that 260 Megabytes, 160 Megabytes can be found in the heroku subdirectory.

164028 represents 61% of the total 267720. The percentages don't have to add up to 100%, since with these arguments we are excluding files in the target directory.

The bar chart in this example is 20 characters long, but this must be dynamic. The 20 characters does _not_ include the square brackets. The resolution of the bar chart must become more accurate as you increase the total size. For example, if the user specifies a length of 100 total characters, in this example 61 of those characters would be equal signs and 39 would be spaces.

The output of each subdirectory should include percentage, size in bytes, the bar chart and the name of the subdirectory. Specific formatting of the final output will be up to you, but should be formatted in such a way that the output is easy to read. (ie. use columns!)

You will be required to fulfill some specific requirements before completing your script. Read on...

## Assignment Requirements

### Starting Code

The first step for the assignment will be to accept the assignment using the invite code provided by your instructor. You will need to create a GitHub account to do this. (If you already have a GitHub account, you may use this).

In your repository you will find a file called **duim.py**. This file contains starting code. You will complete the assignment inside duim.py. **Do not rename this file or the functions inside, unit tests will fail and you will lose marks!**

Also in your repository you will find **checkA1.py**. You can use this check script to check your work.

### Permitted Modules

**Your python script is allowed to import only the os, subprocess, and sys modules from the standard library.**

### Required Functions

You will need to complete the functions inside the provided file called `duim.py`. The provided `checkA1.py` will be used to test these functions.

1. `call_du_sub()` should take the target directory as an argument and return a list of strings returned by the command

```bash
du -d 1 <target directory>
```

   - Use subprocess.Popen or os.popen.
   - '-d 1' specifies a _max depth_ of 1. Your list shouldn't include files, just a list of subdirectories in the target directory.
   - Your list should not contain newline characters.

2. `percent_to_graph()` should take two arguments: percent and the total chars. It should return a 'bar graph' as a string.

      + **max\_length** refers to the total number of characters that the bar graph will be composed of. You can use equal signs `=` or any other character that makes sense, but the empty space **must be composed of spaces**, at least until you have passed the first milestone.
      + The string returned by this function should only be composed of these two characters. For example, calling `percent_to_graph(50, 10)` should return:

```bash
   '=====     '
```

   + **Please note that the _characters should not be part of the output, they are here to indicate that this is a string!_**

3. `create_dir_dict` should take a list as the argument, and should return a dictionary.

      - The list can be the list returned by `call_du_sub()`.
      - The dictionary that you return should have the full directory name as _key_, and the number of bytes in the directory as the _value_. This value should be an integer. For example, using the example of **/usr/local/lib**, the function would return:

```bash
   {'/usr/local/lib/heroku': 164028, '/usr/local/lib/python2.7': 11072, ...}
```

4. `get_max` should take a dictionary and the target directory as arguments, and it should return the total size of the target directory as an integer.

      - The dictionary returned by `create_dir_dict` will be used for this function. When calculating the percentage for each subdirectory, you will need the total size of the target directory as the denominator. This function will return that value.
      - There are many approaches you can take to get this number. Some approaches won't require the target directory as an argument, but pass it in anyway.
  
### Additional Functions

You may create any other functions that you think appropriate, especially if you decide to build additional functionality. Part of your evaluation will be on how "re-usable" your functions are, and sensible use of arguments and return values.

### Use of GitHub

You will be graded partly on the quality of your Github commits. You may make as many commits as you wish, it will have no impact on your grade. The only exception to this is **assignments with very few commits**. These will receive low marks for GitHub use and may be flagged for possible academic integrity violations. **Assignments that do not adhere to these requirements may not be accepted.**

Professionals generally follow these guidelines:

- commit their code after every significant change,
- the code _should hopefully_ run without errors after each commit, and
- every commit has a descriptive commit message.

After completing each function, make a commit and push your code.

After fixing a problem, make a commit and push your code.

**GitHub is your backup and your proof of work.**

These guidelines are not always possible, but you will be expected to follow these guidelines as much as possible. Break your problem into smaller pieces, and work iteratively to solve each small problem. Test your code after each small change you make, and address errors as soon as they arise. It will make your life easier!

### Coding Standard

Your python script must follow the following coding guide:

- [PEP-8 -- Style Guide for writing Python Code](https://www.python.org/dev/peps/pep-0008/)

**Documentation**

There are three types of comments in programming and your assignment should contain each:

The top-level docstring should contain information about what your script does. This is included in the duim.py file. **Please complete the top-level docstring**.
Use Python's function docstrings to document how each of the functions work. The docstring should describe what each function does.
Your script should also include in-line comments to explain anything that isn't immediately obvious to a beginner programmer. For these comments, it's always better to explain _why_ your code is doing what it does rather than _what_ it's doing. Also: **It is expected that you will be able to explain how each part of your code works in detail.**

**Authorship Declaration**

All your Python code for this assignment must be placed in the provided Python file called **duim.py**. **Do not change the name of this file.** Please complete the declaration **as part of the top-level docstring** in your Python source code file (replace "Student Name" with your own name).

## Submission Guidelines and Process

### Clone Your Repo (ASAP)

The first step will be to clone the Assignment 2 repository. The invite link will be provided to you by your professor. **You will need a free GitHub account to complete this assignment**. If you already have an existing GitHub account, you may use it.

The repo will contain a check script, a README file, and the file where you will enter your code.

### The First Milestone (due October 7)

For the first milestone you will have two functions to complete.

- `call_du_sub` will take one argument and return a list. The argument is a target directory. The function will use `subprocess.Popen` to run the command:

```bash
du -d l <target_directory>
```

- `percent_to_graph` will take two arguments and return a string.

In order to complete `percent_to_graph()`, it's helpful to know the equation for converting a number from one scale to another.

![Scaling Formula](https://wiki.cdot.senecacollege.ca/w/imgs/Scaling-formula.png)

In this equation, \`\`x\`\` refers to your input value percent and \`\`y\`\` will refer to the number of symbols to print. The max of percent is 100 and the min of percent is 0. Be sure that you are rounding to an integer, and then print that number of symbols to represent the percentage. The number of spaces that you print will be the inverse.

Test your functions with the Python interpreter. Use `python3`, then:

```python
   import duim
   duim.percent_to_graph(50, 10)
```

To test with the check script, run the following:

```bash
python3 checkA1.py -f -v TestPercent
```

```bash
python3 checkA1.py -f -v TestDuSub
```

### Second Milestone (due October 21)

For the second milestone you will have two more functions to complete.

1. `create_dir_dict` will take your list from `call_du_sub` and return a dictionary.

      - Every item in your list should create a key in your dictionary.
      - Your dictionary values should be a number of bytes.

  - For example: `{'/usr/lib/local': 33400}`

       + Again, test using your Python interpreter or the check script.
       + To run the check script, enter the following:

```bash
python3 checkA1.py -f -v TestDirDict
```

2. `get_total` needs to accept your dictionary, and the target directory, and return the total size in bytes of the target directory.

      - Use the following to test your code:

```bash
python3 checkA1.py -f -v TestTotal
```

### Minimum Viable Product

Once you have achieved the Milestones, you will have to do the following to get a minimum viable product:

- In your `if __name__ == '__main__'` block, you will have to accept a command line argument from the user This will become your target directory.
    - If the user has entered more than one argument, or their argument isn't a valid directory, print an error message.
    - If the user doesn't specify any target, use the current directory.
- Call `call_du_sub` with the target directory.
- Pass the return value from that function to `create_dir_dict`.
- Pass the dictionary into `get_total` to get the total size of the target.
- For each item in your dictionary (excluding the target):
    - Use the total size of the target directory to calculate percentage.
    - Once you've calculated percentage, call `percent_to_graph` with a max\_size of your choice.
    - For every subdirectory, print _at least_ the percent, the bar graph, and the name of the subdirectory.
    - The target directory **should not** have a bar graph.
- Finally, print the total size of the target directory.

### Additional Features

After completing the above, you may choose to add some additional features. Some improvements you could make are:

- Format the output in a way that is easy to read.
- Convert bytes into a human readable format.
- Add colour to the output.
- Include files in the output.
- Include a threshold, so that results that are less than a user-specified size get excluded from results.
- Add more error checking, print a usage message to the user.
- Accept more options from the user.
- Sort the output by percentage, or by filename.

### The Assignment (due November 4, 11:59pm)

- Be sure to make your final commit before the deadline. Don't forget to also use `git push` to push your code into the online repository!
- Then, copy the contents of your **duim.py** file into a Word document, and submit it to Blackboard. _I will use GitHub to evaluate your deadline, but submitting to Blackboard tells me that you wish to be evaluated_.

## Rubric

| Task	| Maximum mark	| Actual mark |
| --- | --- | --- |
| Program Authorship Declaration	| 5	|  |
| First Milestone	| 10 |  |
| Second Milestone	| 10	|  |
| percent function design	| 10	|  |
| get total function design	| 10	|  |
| other functions design	| 5	|  |
| Error checking and exception handling	| 10	|  |
| required functions readability/variable naming	| 5	|  |
| main loop design	| 5	|  |
| main loop readability	| 5	|  |
| docstrings and comments	| 15	|  |
| github.com repository: Commit messages and use	| 10	|  |
| **Total**	| **100**	|  |

## Due Date and Final Submission Requirement

Please submit the following files by the due date:

- [x] Your python script, named as 'duim.py', in your repository, and also **submitted to Blackboard**, by November 4 at 11:59pm.
