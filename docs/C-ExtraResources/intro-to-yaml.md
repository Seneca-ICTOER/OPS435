---
id: intro-to-yaml
title: Introduction to YAML
sidebar_position: 3
description: Introduction to YAML
---

# Introduction to YAML

## What is YAML?

- YAML stands for "YAML Ain’t markup language"
- It is a human-readable data serialization language that is used in Ansible to package output and its playbooks

## What are the major components in YAML?

- declarations: name: 'yum'
- lists:
    - 'item\_a'
    - 'item\_b'
    - 'item\_c'
- associative arrays:
    - item\_a:
        + name: 'Name A'
        + id: '12345678'
    - item\_b:
        + name: 'Name B'
        + id: '98765432'

## Some examples: file written in YAML

### YAML File and Python

File name: students.yaml

```yaml
students:   
  - name: David     
    id_number: 012345678     
    program: CTY   
  - name: Raymond
    id_number: 112001987
    program: CNS 
```

The above file contains data equivalent to the following dictionary data object in Python:

```python
{'students': [{'id_number': '012345678', 'name': 'David', 'program': 'CTY'}, 
{'id_number': 112001987, 'name': 'Raymond', 'program': 'CNS'}]}
```

The contents of students.yaml can be created by the following python code:

```python
#!/usr/bin/env python3
import yaml

students = {'students': [{'name': 'David', 'id_number': '012345678', 'program': 'CTY'},
            {'name': 'Raymond', 'id_number': 112001987, 'program': 'CNS'}]}

print(yaml.dump(students))
```

### Ansible playbooks

File Name: get_os_version.yaml

```yaml
---
- hosts: all
  remote_user: rchan
  tasks:
  - name: Print Linux distribution and version
    debug:
       msg: '{{ ansible_distribution }} {{ ansible_distribution_version }}'
```

The file above contains data equivalent to the following data object in Python:

```python
[{'hosts': 'all', 'remote_user': 'rchan', 'tasks': [{'debug': {'msg': '{{ ansible_distribution }}
 {{ ansible_distribution_version }}'}, 'name': 'Print Linux distribution and version'}]}]
```
