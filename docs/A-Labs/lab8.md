---
id: lab8
title: Lab 8
sidebar_position: 8
description: Lab 8 for Students to Complete and Submit
---

# Lab 8: Configuration management

## Lab Objectives

1. Review SSH setup and SSH remote shell command execution
2. Explore the Fabric Python library (Fabric API) and its command line tool "fab".
3. Create Fabric scripts utilizing Fabric's API and environment objects to define tasks for the **fab** command.
4. Use the **fab** command to execute fabric script to perform pre-defined tasks on remote Linux machines.

### Prerequisites

1. Has the user account named "student" and password for your VM with access port on myvmlab.senecacollege.ca
2. Regular account on Matrix.senecacollege.ca

### Overview

Fabric is a Python library and command-line tool for streamlining the use of SSH for application deployment or system administration tasks. It has two major components:

   1. a command-line interface program called "fab" which lets you execute arbitrary Python functions on local and remote machines.
   2. a set of Python APIs that you can use and call in your Python functions to make executing shell commands over SSH much easier.

We are going to use the Fabric API to define tasks and use the **fab** command to execute those tasks on one or more remote Linux machines.

### Reference

  1. These links are helpful for learning more about Fabric's features:

| **Category** | **Resource Link** |
| :--- | :--- |
| Official Fabric tutorial | [\[1\]](http://docs.fabfile.org/en/1.13/tutorial.html) |
| Better Fabric tutorial | [\[2\]](https://www.digitalocean.com/community/tutorials/how-to-use-fabric-to-automate-administration-tasks-and-deployments) |
| Official **Fabric** website | [\[3\]](http://www.fabfile.org/) |

**Please note that the version of Fabric currently installed on matrix.senecacollege.ca 1.14.0 and it supports only Python version 2**. The Fabric script files we are going to create in this lab have to meet Python version 2.x requirements. (e.g. print is a keyword, not a built-in function in Python 2.x)

  2. You should have some experience on the following topics in OPS235 and or OPS335. Please review them to prepare for the activities in this lab:

        - Create and configure a regular user on a Linux system.
        - Configure and manage sudo privilege for a regular user
        - Configure sudoers using the visudo command
        - Using the yum command to install, remove, and update rpm packages

## Investigation 1: The Fabric Environment

The Fabric environment consists of the following components:

  1. Controller workstation - the machine that has the Fabric package installed and runs the "fab" command

        1. the Fabric Python Library (aka the fabric api)- the fabric package (already installed on matrix)
        2. the Fabric command **- fab**: runs Fabric script, name of the script is default to fabfile.py in the current working directory unless specified otherwise with the '-f' option.
        3. Fabric script: contains fabric environment object value and Python functions (or tasks) to be executed by the **fab** command.
  
  2. Remote machine: the target machine on which one or more Fabric tasks will be executed.

        1. running the ssh server daemon
        2. use public key (or password based) authentication for ssh connections

### Part 1 - Configure and test your controller workstation

In this lab you will use your login account on matrix.senecacollege.ca as your Fabric controller workstation.

The Fabric package version 1.14.0 has already been installed on matrix.senecacollege.ca. You should have access to the **fab** command on matrix. Login to matrix.senecacollege.ca and run the following command to confirm the version of the fabric package:

```bash
fab --version
```

Type the following command to get the command line options of the fab command:

```bash
fab --help
```

You should get something similar to the following:

```bash
Usage: fab [options] <command>[:arg1,arg2=val2,host=foo,hosts='h1;h2',...] ...

Options:
  -h, --help            show this help message and exit
  -d NAME, --display=NAME
                        print detailed info about command NAME
  -F FORMAT, --list-format=FORMAT
                        formats --list, choices: short, normal, nested
  -I, --initial-password-prompt
                        Force password prompt up-front
  --initial-sudo-password-prompt
                        Force sudo password prompt up-front
  -l, --list            print list of possible commands and exit
  --set=KEY=VALUE,...   comma separated KEY=VALUE pairs to set Fab env vars
  --shortlist           alias for -F short --list
  -V, --version         show program's version number and exit
  -a, --no_agent        don't use the running SSH agent
  -A, --forward-agent   forward local agent to remote end
  --abort-on-prompts    abort instead of prompting (for password, host, etc)
  -c PATH, --config=PATH
                        specify location of config file to use
  --colorize-errors     Color error output
  -D, --disable-known-hosts
                        do not load user known_hosts file
  -e, --eagerly-disconnect
                        disconnect from hosts as soon as possible
  -f PATH, --fabfile=PATH
                        python module file to import, e.g. '../other.py'
  -g HOST, --gateway=HOST
                        gateway host to connect through
  --gss-auth            Use GSS-API authentication
  --gss-deleg           Delegate GSS-API client credentials or not
  --gss-kex             Perform GSS-API Key Exchange and user authentication
  --hide=LEVELS         comma-separated list of output levels to hide
  -H HOSTS, --hosts=HOSTS
                        comma-separated list of hosts to operate on
  -i PATH               path to SSH private key file. May be repeated.
  -k, --no-keys         don't load private key files from ~/.ssh/
  --keepalive=N         enables a keepalive every N seconds
  --linewise            print line-by-line instead of byte-by-byte
  -n M, --connection-attempts=M
                        make M attempts to connect before giving up
  --no-pty              do not use pseudo-terminal in run/sudo
  -p PASSWORD, --password=PASSWORD
                        password for use with authentication and/or sudo
  -P, --parallel        default to parallel execution method
  --port=PORT           SSH connection port
  -r, --reject-unknown-hosts
                        reject unknown hosts
  --sudo-password=SUDO_PASSWORD
                        password for use with sudo only
  --system-known-hosts=SYSTEM_KNOWN_HOSTS
                        load system known_hosts file before reading user
                        known_hosts
  -R ROLES, --roles=ROLES
                        comma-separated list of roles to operate on
  -s SHELL, --shell=SHELL
                        specify a new shell, defaults to '/bin/bash -l -c'
  --show=LEVELS         comma-separated list of output levels to show
  --skip-bad-hosts      skip over hosts that can't be reached
  --skip-unknown-tasks  skip over unknown tasks
  --ssh-config-path=PATH
                        Path to SSH config file
  -t N, --timeout=N     set connection timeout to N seconds
  -T N, --command-timeout=N
                        set remote command timeout to N seconds
  -u USER, --user=USER  username to use when connecting to remote hosts
  -w, --warn-only       warn, instead of abort, when commands fail
  -x HOSTS, --exclude-hosts=HOSTS
                        comma-separated list of hosts to exclude
  -z INT, --pool-size=INT
                        number of concurrent processes to use in parallel mode
```

**Please pay special attention and study the following command-line options for fab as they will be used in some of the activities in this lab:**

1. **-H**
2. **-f**
3. **-i**
4. **-l**
5. **--port**
6. **--user**
7. **--initial-sudo-password-prompt**

### Part 2: Connect to VM in myvmlab.senecacollege.ca

You should have received an email from ITS containing the following information:

   - account name: (usually 'student')
   - password: (let's assume it is 'P@ssw0rd' for the following instruction in this lab)
   - port number for SSH access via myvmlab.senecacollege.ca (e.g. 7200)

This VM will be used as the remote Linux machine in our Fabric environment. Login to matrix and try the following SSH command to test the connectivity between matrix and your assigned VM:

```bash
[raymond.chan@mtrx-node05pd lab8]$ ssh -p 7200 student@myvmlab.senecacollege.ca
student@myvmlab.senecacollege.ca's password: [type the password for the student user here]
Last login: Fri Jul  3 11:06:24 2020 from mtrx-node05pd.dcm.senecacollege.ca
```

Once you are on your VM, try the following commands: hostname, id, and df, and record the results for later comparison with the results of other commands:

```bash
[student@centos7 ~]$ hostname
centos7
[student@centos7 ~]$ id
uid=1002(student) gid=1002(student) groups=1002(student),10(wheel)
[student@centos7 ~]$ df
Filesystem              1K-blocks    Used Available Use% Mounted on
devtmpfs                   878260       0    878260   0% /dev
tmpfs                      889792       0    889792   0% /dev/shm
tmpfs                      889792    9492    880300   2% /run
tmpfs                      889792       0    889792   0% /sys/fs/cgroup
/dev/mapper/centos-root  38680112 1745524  36934588   5% /
/dev/sda2                 1038336  331228    707108  32% /boot
/dev/sda1                  204580   11296    193284   6% /boot/efi
/dev/mapper/centos-home  18880512   33160  18847352   1% /home
tmpfs                      177960       0    177960   0% /run/user/1002
```

  1. Logout from your VM and get back to matrix.
  2. The previous SSH command when executed successfully, created a login shell on the remote machine. If the previous SSH command is followed by a specific bash command, it will be executed on the remote host instead of creating a login shell. Consider the following:

```bash
[raymond.chan@mtrx-node05pd lab8]$ ssh -p 7200 student@myvmlab.senecacollege.ca 'hostname;id;df'
student@myvmlab.senecacollege.ca's password:
centos7
uid=1002(student) gid=1002(student) groups=1002(student),10(wheel)
Filesystem              1K-blocks    Used Available Use% Mounted on
devtmpfs                   878260       0    878260   0% /dev
tmpfs                      889792       0    889792   0% /dev/shm
tmpfs                      889792    9492    880300   2% /run
tmpfs                      889792       0    889792   0% /sys/fs/cgroup
/dev/mapper/centos-root  38680112 1745608  36934504   5% /
/dev/sda2                 1038336  331228    707108  32% /boot
/dev/sda1                  204580   11296    193284   6% /boot/efi
/dev/mapper/centos-home  18880512   33160  18847352   1% /home
tmpfs                      177960       0    177960   0% /run/user/1002
```

  3. The three shell commands: hostname, id, and df were executed sequentially. Compare the outputs above with the previous results when executing the corresponding commands in the login shell.
  4. Please note that your VM was configured to ask for the user's password for every SSH connection attemp. We are going to change that behaviour next.

### Part 3: Set up SSH login with public key authentication

In order for you to run multiple tasks on multiple remote machines without typing the in the password for each connection, you need to configure your VM to accept SSH public key authentication in addtion to password authentication. You've done this in both OPS235 and OPS335, and here is a summary of how to do it between your account on matrix and your VM:

  1. Create a new SSH key pair (one private, and one public) under your account on matrix.senecacollege.ca.
  2. Once you have both keys, you can use the **ssh-copy-id** command to copy your public key to the student account on your VM, replace the port number with the correct value for your VM:

```bash
ssh-copy-id -i ~/.ssh/id_rsa.pub -p 7200 student@myvmlab.senecacollege.ca
```

  3. The above command should add the contents of your pub key to ~/.ssh/authorized_keys under your student account on your VM. \[**Note**: If you want to setup another controller workstation, you can either copy the **private key** to it, or generate another SSH key pair, and copy the **public key** to the VM.\]

  4. Verify and confirm that your account on matrix can SSH to your VM as 'student' without being prompted for a password:

```bash
[raymond.chan@mtrx-node05pd lab8]$ ssh -p 7200 student@myvmlab.senecacollege.ca
Last login: Fri Jul  3 12:46:19 2020 from mtrx-node05pd.dcm.senecacollege.ca
[student@centos7 ~]$ exit
logout
Connection to myvmlab.senecacollege.ca closed.

[raymond.chan@mtrx-node05pd lab8]$ ssh -p 7200 student@myvmlab.senecacollege.ca 'date;hostname;id'
Fri Jul  3 12:55:22 EDT 2020
centos7
uid=1002(student) gid=1002(student) groups=1002(student),10(wheel)
[raymond.chan@mtrx-node05pd lab8]$
```

  5. If you got similar result as shown above, you have successfully configured your controller workstation and your VM to use public key authentication.

## Investigation 2: Running the fab command in ad-hoc mode

The fab command relies on SSH to make the connection to the remote machine before executing the intended commands. The fab command can run in ad-hoc mode:

```bash
fab [options] -- [shell commands]
```

When running the fab command in ad-hoc mode, it is very similar to running the SSH with commands attached at the end.

### Part 1: running non-privileged shell commands on remote machines

In the following example, we use the **fab** to execute the "date", "hostname", and "id" command remotely on our VM. Try the following ad-hoc fab commands and record their results for later use, replace the port number with the correct value for your VM:

```bash
[raymond.chan@mtrx-node05pd lab8]$ fab --host=myvmlab.senecacollege.ca --port=7200 --user=student -- 'date;hostname;id'
[myvmlab.senecacollege.ca] Executing task '<remainder>'
[myvmlab.senecacollege.ca] run: date;hostname;id
[myvmlab.senecacollege.ca] out: Fri Jul  3 13:05:39 EDT 2020
[myvmlab.senecacollege.ca] out: centos7
[myvmlab.senecacollege.ca] out: uid=1002(student) gid=1002(student) groups=1002(student),10(wheel)
[myvmlab.senecacollege.ca] out:


Done.
Disconnecting from myvmlab.senecacollege.ca:7200... done.
[raymond.chan@mtrx-node05pd lab8]$
```

Note that there is no password prompting if you complete "Part 3" successfully, otherwise, the SSH server daemon on your VM will prompt you for a password. The output from the fab's ad-hoc mode is not much different from the SSH command with shell command attached at the end, however, please note that the additional information on the output from the fab command can be very useful for record keeping purpose - what has been done and whether the commands had been carried out successfully or not.

### Part 2: running privileged commands on remote machines

**WARNING: Running privileged commands incorrectly with sudo may cause irreparable damage to your remote machine.**

We say that running an ad-hoc fab command is very similar to the SSH command with shell commands attached at the end. Let's try both with privileged commands, like the "yum" command.

**Run the "yum" command on remote machine with SSH**

  1. By default, your VM doesn't have the "tree" rpm package installed. You can verify this with the following SSH command (remember to replace the port number with the correct value for your VM):

```bash
[raymond.chan@mtrx-node05pd lab8]$ ssh -p 7200 student@myvmlab.senecacollege.ca "yum list tree"
Loaded plugins: fastestmirror
Loading mirror speeds from cached hostfile
 * base: centos.mirror.colo-serv.net
 * extras: centos.mirror.colo-serv.net
 * updates: centos.mirror.ca.planethoster.net
Available Packages
tree.x86_64                          1.6.0-10.el7                           base
[raymond.chan@mtrx-node05pd lab8]$
```

Please note that the tree package is "Available", but not yet installed.

  1. Let's try to install the "tree" package with the shell command "yum install tree -y":

```bash
[raymond.chan@mtrx-node05pd lab8]$ ssh -p student@myvmlab.senecacollege.ca "yum install tree -y"
Loaded plugins: fastestmirror
You need to be root to perform this command.
```

  2. Using the "yum" command to query rpm package doesn't need special privilege, however, it does when you try to install or remove rpm packages.
  3. Your "student" account on your VM was configured to allow you to run the "sudo" command to perform software management using the "yum" command. So, let's login to your VM and try the following "sudo" command to install and then remove the "tree" rpm package:

```bash
[raymond.chan@mtrx-node05pd lab8]$ ssh -p 7200 student@myvmlab.senecacollege.ca
Last login: Fri Jul  3 16:51:07 2020 from mtrx-node05pd.dcm.senecacollege.ca
[student@centos7 ~]$ sudo yum install tree -y
[sudo] password for student:
Loaded plugins: fastestmirror
Loading mirror speeds from cached hostfile
 * base: less.cogeco.net
 * extras: centos.mirror.colo-serv.net
 * updates: mirror.calgah.com
Resolving Dependencies
--> Running transaction check
---> Package tree.x86_64 0:1.6.0-10.el7 will be installed
--> Finished Dependency Resolution

Dependencies Resolved

========================================================================================================================
 Package                  Arch                       Version                             Repository                Size
========================================================================================================================
Installing:
 tree                     x86_64                     1.6.0-10.el7                        base                      46 k

Transaction Summary
========================================================================================================================
Install  1 Package

Total download size: 46 k
Installed size: 87 k
Downloading packages:
tree-1.6.0-10.el7.x86_64.rpm                                                                     |  46 kB  00:00:00
Running transaction check
Running transaction test
Transaction test succeeded
Running transaction
  Installing : tree-1.6.0-10.el7.x86_64                                                                             1/1
  Verifying  : tree-1.6.0-10.el7.x86_64                                                                             1/1

Installed:
  tree.x86_64 0:1.6.0-10.el7

Complete!
[student@centos7 ~]$
```

  4. Please note that when you run the "sudo" command the first time, it asks you for the user's password (i.e. user student's password). Let's now remove the "tree" package:

```bash
[student@centos7 ~]$ yum remove tree -y
Loaded plugins: fastestmirror
You need to be root to perform this command.
[student@centos7 ~]$ sudo yum remove tree -y
Loaded plugins: fastestmirror
Resolving Dependencies
--> Running transaction check
---> Package tree.x86_64 0:1.6.0-10.el7 will be erased
--> Finished Dependency Resolution

Dependencies Resolved

========================================================================================================================
 Package                  Arch                       Version                            Repository                 Size
========================================================================================================================
Removing:
 tree                     x86_64                     1.6.0-10.el7                       @base                      87 k

Transaction Summary
========================================================================================================================
Remove  1 Package

Installed size: 87 k
Downloading packages:
Running transaction check
Running transaction test
Transaction test succeeded
Running transaction
  Erasing    : tree-1.6.0-10.el7.x86_64                                                                             1/1
  Verifying  : tree-1.6.0-10.el7.x86_64                                                                             1/1

Removed:
  tree.x86_64 0:1.6.0-10.el7

Complete!
[student@centos7 ~]$
```

  5. The above tests confirmed that the student user is allowed to execute the sudo command to run the yum command to install and remove rpm packages. Now, let's logout from the VM and go back to matrix. On matrix, try to run the sudo command using SSH:

```bash
[student@centos7 ~]$ exit
logout
Connection to myvmlab.senecacollege.ca closed.
[raymond.chan@mtrx-node05pd lab8]$ ssh -p 7211 student@myvmlab.senecacollege.ca "sudo yum install tree -y"
sudo: no tty present and no askpass program specified
[raymond.chan@mtrx-node05pd lab8]$
```

  6. The above error indicated that you need a tty for the SSH session to prompt you for the sudo password. Please look up the ssh man page to find out the option which turn on a tty for the SSH session.

**Run the privileged yum command on remote machine using ad-hoc fab command**

  1. Let's try the corresponding ad-hoc fab command on your VM:

```bash
fab --host=myvmlab.senecacollege.ca --port=7200 --user=student -- 'sudo yum install tree -y'
```

  2. Type in your user student's password when prompted for "sudo password", the **yum install** command should be executed successfully and install the **tree** rpm package. If the tree rpm package is already installed, you can remove it with the following ad-hoc fab command:

```bash
fab --host=myvmlab.senecacollege.ca --port=7200 --user=student -- 'sudo yum remove tree -y'
```

## Investigation 3: Running the fab command in script mode

From investigation 2, we can see that running **fab** in ad-hoc mode is quick, straight forward, and easy. However, the rich output generated can not be easily captured and processed. If you have a need to capture and process the output generated by the commands executed on the remote machines, the solution is to run the **fab** command in script mode.

The first step in running the **fab** command in script mode is to create a fabric script file.

Let's start with a simple fabric script file to demonstrate some basic concepts that use the API from the Fabric python library.

On matrix, cd to your lab8 directory and create a simple fabric script file named **fabfile.py** (this is the default filename used by the fab command when you invoke it without the '-f' option):

### Part 1: Non-privileged task example

**Create non-privileged tasks: Getting the hostname of remote machines**

  1. Add the following contents to the default fabric script called "fabfile.py" in your lab8 directory:

```python
from fabric.api import *

# Set the name of the user login to the remote host
env.user = 'student'

# Define the task to get the hostname of remote machines:
def getHostname():
    name = run("hostname")
    print("The host name is:",name)
```

  2. To check for syntax error in the fabric script, run the following command in the lab8 directory where it contains the fabric script named "fabfile.py":

```bash
fab -l
```

  3. You should get a list of tasks defined in your fabfile.py:

```bash
[raymond.chan@mtrx-node05pd lab8]$ fab -l
Available commands:

    getHostname
```

  4. To perform the task of getHostname on your VM (replace with the actual port # for connecting to your VM), run the fab command on matrix:

```bash
[raymond.chan@mtrx-node05pd lab8]$ fab --hosts=myvmlab.senecacollege.ca --port=7200 getHostname
[myvmlab.senecacollege.ca] Executing task 'getHostname'
[myvmlab.senecacollege.ca] run: hostname
[myvmlab.senecacollege.ca] out: centos7
[myvmlab.senecacollege.ca] out:

The host name is: centos7

Done.
Disconnecting from myvmlab.senecacollege.ca:7200... done.
[raymond.chan@mtrx-node05pd lab8]$
```

  5. Notice that there is no need to specify the user name at the **fab** command line since we defined it in the fabric script file (env.user = 'student'). Also notice that we can capture the hostname returned from the "hostname" command and print it out together with a descriptive text in a line.
  6. In the above executed **fab** command, the fab program imports the fabric script named "fabfile.py" and execute the getHostname function on the VM connect at port 7200 on myvmlab.senecacollege.ca. Note that the port number for your VM will likely have a different value.

If you did all the setup right and you got a password prompt when executing the above command, read the prompt carefully and see who's password it was prompting you for. If it is not for the user student, verify that you have the following line in your fabfile.py and you can ssh to your VM as the user student without password:

```bash
env.user = 'student'
```

In the above output from the **fab** command, you have:

   - Lines with the FQDN of the remote machine you are working on.
   - Messages from the controller workstation (e.g. "Executing task...", and "run: ...").
   - Output from the remote machine ("out: ...")
   - Output generated on the controller workstation from your fab file (the print statement)

You should get used to the above messages from the **fab** command. It's a lot of output but it's important to understand where each piece of information is coming from, so you are able to debug problems when they happen.

### Part 2: Privileged Tasks Examples

**Create privileged tasks: install and remove rpm package on remote machines**

  1. Add the following two new functions to the end of the fabric script "fabfile.py" in your lab8 directory:

```python
def installPackage(pkg='dummy'):
    cmd = 'yum install ' + pkg + ' -y'
    status = sudo(cmd)
    print(status)

def removePackage(pkg=''):
    if pkg == '':
       cmd = 'yum remove dummy -y'
    else:
       cmd = 'yum remove ' + pkg + ' -y'
    status = sudo(cmd)
    print(status)
```

  2. Note that both functions take one function argument in different ways. However, if no function argument is passed when calling the function, both will default to a string value of "dummy". Both functions call the sudo() from the fabric.api to execute the command contained in the "cmd" object on the remote machine via sudo.
  3. To check for any syntax error in your updated fabric script, run the following command in the same directory as the fabfile.py:

```bash
fab -l
```

  4. You should get a list of tasks defined similar to the following:

```bash
[raymond.chan@mtrx-node05pd lab8]$ fab -l
Available commands:

    getHostname
    installPackage
    removePackage
[raymond.chan@mtrx-node05pd lab8]$
```

  5. If you only need to connect to the same remote machine, you can specify the host and port number in the fabfile.py to save some typing when executing the fab command. Add the following two lines after the env.user line in your fabfile.py:

```bash
env.port = '7200' # <-- please replace with the actual value of your VM's port number
env.hosts =['myvmlab.senecacollege.ca']
```

  6. You can also store the user's password in this file so that it will respond to the "sudo password" prompt for sudo() call. It is not safe to do so as you can configure the sudo module on the remote machine not to ask for sudo password.
  7. Now you can run the fab command without the "--host" and "--port" options.
  8. Run the following two fab commands, note the results and compare their difference:

```bash
fab installPackage

fab installPackage:tree
```

  9. Run the following two fab commands, note the results and compare their difference:

```bash
fab removePackage

fab removePackage:tree
```

### Part 3: Create remote task for updating rpm packages

Add a new function called "updatePackage" to your fabfile.py according to the following requirements:

   - Accept optional function argument as the rpm package name
   - If no function argument was given when called, default to all the packages installed

The output of the updatePackage when executed, should produce similar output as shown below:

1. Update a single package:

```bash
fab updatePackage:tree
```

   - **Sample output:**

```bash
[raymond.chan@mtrx-node05pd lab8]$ fab updatePackage:tree
[myvmlab.senecacollege.ca] Executing task 'updatePackage'
[myvmlab.senecacollege.ca] sudo: yum update tree -y
[myvmlab.senecacollege.ca] out: sudo password:
[myvmlab.senecacollege.ca] out: Loaded plugins: fastestmirror
[myvmlab.senecacollege.ca] out: Loading mirror speeds from cached hostfile
[myvmlab.senecacollege.ca] out:  * base: less.cogeco.net
[myvmlab.senecacollege.ca] out:  * extras: centos.mirror.ca.planethoster.net
[myvmlab.senecacollege.ca] out:  * updates: less.cogeco.net
[myvmlab.senecacollege.ca] out: No packages marked for update
[myvmlab.senecacollege.ca] out:

Loaded plugins: fastestmirror
Loading mirror speeds from cached hostfile
 * base: less.cogeco.net
 * extras: centos.mirror.ca.planethoster.net
 * updates: less.cogeco.net
No packages marked for update

Done.
Disconnecting from myvmlab.senecacollege.ca:7200... done.
[raymond.chan@mtrx-node05pd lab8]$
```

2. Update all installed package:

```bash
fab updatePackage:
```

   - The following output had been trimmed, only showing the first few lines:

```bash
[myvmlab.senecacollege.ca] Executing task 'updatePackage'
[myvmlab.senecacollege.ca] sudo: yum update -y
[myvmlab.senecacollege.ca] out: sudo password:
[myvmlab.senecacollege.ca] out: Loaded plugins: fastestmirror
[myvmlab.senecacollege.ca] out: Loading mirror speeds from cached hostfile
[myvmlab.senecacollege.ca] out:  * base: less.cogeco.net
[myvmlab.senecacollege.ca] out:  * extras: centos.mirror.ca.planethoster.net
[myvmlab.senecacollege.ca] out:  * updates: less.cogeco.net
...

  Verifying  : systemd-219-73.el7_8.5.x86_64                                                                      53/54
  Verifying  : systemd-libs-219-73.el7_8.5.x86_64                                                                 54/54

Removed:
  kernel.x86_64 0:3.10.0-862.el7

Installed:
  kernel.x86_64 0:3.10.0-1127.13.1.el7

Updated:
  bind-export-libs.x86_64 32:9.11.4-16.P2.el7_8.6          binutils.x86_64 0:2.27-43.base.el7_8.1
  ca-certificates.noarch 0:2020.2.41-70.0.el7_8            device-mapper.x86_64 7:1.02.164-7.el7_8.2
  device-mapper-event.x86_64 7:1.02.164-7.el7_8.2          device-mapper-event-libs.x86_64 7:1.02.164-7.el7_8.2
  device-mapper-libs.x86_64 7:1.02.164-7.el7_8.2           kernel-tools.x86_64 0:3.10.0-1127.13.1.el7
  kernel-tools-libs.x86_64 0:3.10.0-1127.13.1.el7          lvm2.x86_64 7:2.02.186-7.el7_8.2
  lvm2-libs.x86_64 7:2.02.186-7.el7_8.2                    microcode_ctl.x86_64 2:2.1-61.10.el7_8
  net-snmp.x86_64 1:5.7.2-48.el7_8.1                       net-snmp-agent-libs.x86_64 1:5.7.2-48.el7_8.1
  net-snmp-libs.x86_64 1:5.7.2-48.el7_8.1                  net-snmp-utils.x86_64 1:5.7.2-48.el7_8.1
  ntp.x86_64 0:4.2.6p5-29.el7.centos.2                     ntpdate.x86_64 0:4.2.6p5-29.el7.centos.2
  python-perf.x86_64 0:3.10.0-1127.13.1.el7                rsyslog.x86_64 0:8.24.0-52.el7_8.2
  selinux-policy.noarch 0:3.13.1-266.el7_8.1               selinux-policy-targeted.noarch 0:3.13.1-266.el7_8.1
  systemd.x86_64 0:219-73.el7_8.8                          systemd-libs.x86_64 0:219-73.el7_8.8
  systemd-sysv.x86_64 0:219-73.el7_8.8                     yum-plugin-fastestmirror.noarch 0:1.1.31-54.el7_8

Complete!

Done.
Disconnecting from myvmlab.senecacollege.ca:7200... done.
[raymond.chan@mtrx-node05pd lab8]$
```

## Optional Lab Exercise: Create a Fabric task called makeUser()

1. Study the Fabric API run(), sudo(), local(), and put() and utilize them to create a new Fabric task called makeUser()
2. The makeUser() task should perform the following on a remote machine to:

      - create a new user called "ops435p" with home directory "/home/ops435p".
      - add the new user to the sudo group called "wheel".
      - from your instructor, get the ssh public key which is posted on the internet to your controller workstation.
      - add the ssh public key obtained from your instructor to the file named "authorized_keys" in the ~ops435p/.ssh directory on the remote machine. (Note: Make sure that you set the proper ownership and permissions on both the directory ~ops435p/.ssh and the file "~ops435p/.ssh/authorized_keys )

3. Add the makeUser() to your final version of fabfile.py.
4. Run the new task makeUser() on your VM.
5. Verify and confirm that your new makeUser() task is working correctly.

## Lab 8 Sign-Off (SHOW INSTRUCTOR)

Complete each part of the lab and upload the version of your **fabfile.py** to Blackboard by the due date.
