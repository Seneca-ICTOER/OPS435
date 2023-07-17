---
id: ansible-setup
title: Ansible Setup
sidebar_position: 1
description: Ansible Setup
---

# Ansible Setup

Collect all the information on a remote host with the Ansible's setup module:

```bash
[rchan@centos7 ansible]$ ansible 192.168.99.153 -m setup
192.168.99.153 | SUCCESS => {
    "ansible_facts": {
        "ansible_all_ipv4_addresses": [
            "192.168.122.99", 
            "192.168.99.153"
        ], 
        "ansible_all_ipv6_addresses": [
            "fe80::5054:ff:fe11:6767", 
            "fe80::5054:ff:fe8c:b67c"
        ], 
        "ansible_architecture": "x86_64", 
        "ansible_bios_date": "04/01/2014", 
        "ansible_bios_version": "1.9.1-5.el7_3.2", 
        "ansible_cmdline": {
            "BOOT_IMAGE": "/vmlinuz-3.10.0-862.14.4.el7.x86_64", 
            "LANG": "en_CA.UTF-8", 
            "console": "ttyS0", 
            "crashkernel": "auto", 
            "quiet": true, 
            "rd.lvm.lv": "centos/root", 
            "rhgb": true, 
            "ro": true, 
            "root": "/dev/mapper/centos-root", 
            "vconsole.font": "latarcyrheb-sun16", 
            "vconsole.keymap": "us"
        }, 
        "ansible_date_time": {
            "date": "2018-11-22", 
            "day": "22", 
            "epoch": "1542902572", 
            "hour": "09", 
            "iso8601": "2018-11-22T16:02:52Z", 
            "iso8601_basic": "20181122T090252832401", 
            "iso8601_basic_short": "20181122T090252", 
            "iso8601_micro": "2018-11-22T16:02:52.832529Z", 
            "minute": "02", 
            "month": "11", 
            "second": "52", 
            "time": "09:02:52", 
            "tz": "MST", 
            "tz_offset": "-0700", 
            "weekday": "Thursday", 
            "weekday_number": "4", 
            "weeknumber": "47", 
            "year": "2018"
        }, 
        "ansible_default_ipv4": {
            "address": "192.168.122.99", 
            "alias": "eth0", 
            "broadcast": "192.168.122.255", 
            "gateway": "192.168.122.1", 
            "interface": "eth0", 
            "macaddress": "52:54:00:11:67:67", 
            "mtu": 1500, 
            "netmask": "255.255.255.0", 
            "network": "192.168.122.0", 
            "type": "ether"
        }, 
        "ansible_default_ipv6": {}, 
        "ansible_devices": {
            "sr0": {
                "holders": [], 
                "host": "", 
                "model": "QEMU DVD-ROM", 
                "partitions": {}, 
                "removable": "1", 
                "rotational": "1", 
                "sas_address": null, 
                "sas_device_handle": null, 
                "scheduler_mode": "deadline", 
                "sectors": "2097151", 
                "sectorsize": "512", 
                "size": "1024.00 MB", 
                "support_discard": "0", 
                "vendor": "QEMU"
            }, 
            "vda": {
                "holders": [], 
                "host": "", 
                "model": null, 
                "partitions": {
                    "vda1": {
                        "holders": [], 
                        "sectors": "1024000", 
                        "sectorsize": 512, 
                        "size": "500.00 MB", 
                        "start": "2048", 
                        "uuid": "56f20e09-e192-48a1-b328-93015d3133df"
                    }, 
                    "vda2": {
                        "holders": [
                            "centos-swap", 
                            "centos-root"
                        ], 
                        "sectors": "9459712", 
                        "sectorsize": 512, 
                        "size": "4.51 GB", 
                        "start": "1026048", 
                        "uuid": null
                    }
                }, 
                "removable": "0", 
                "rotational": "1", 
                "sas_address": null, 
                "sas_device_handle": null, 
                "scheduler_mode": "mq-deadline", 
                "sectors": "10485760", 
                "sectorsize": "512", 
                "size": "5.00 GB", 
                "support_discard": "0", 
                "vendor": "0x1af4"
            }
        }, 
        "ansible_distribution": "CentOS", 
        "ansible_distribution_major_version": "7", 
        "ansible_distribution_release": "Core", 
        "ansible_distribution_version": "7.5.1804", 
        "ansible_dns": {
            "nameservers": [
                "192.168.122.1"
            ], 
            "search": [
                "localhost"
            ]
        }, 
        "ansible_domain": "cp.net", 
        "ansible_env": {
            "HOME": "/home/rchan", 
            "LANG": "en_CA.UTF-8", 
            "LC_ALL": "en_US.utf-8", 
            "LESSOPEN": "||/usr/bin/lesspipe.sh %s", 
            "LOGNAME": "rchan", 
            "LS_COLORS": "rs=0:di=38;5;27:ln=38;5;51:mh=44;38;5;15:pi=40;38;5;11:so=38;5;13:do=38;5;5:bd=48;5;232;38;5;11:cd=48;5;232;38;5;3:or=48;5;232;38;5;9:mi=05;48;5;232;38;5;15:su=48;5;196;38;5;15:sg=48;5;11;38;5;16:ca=48;5;196;38;5;226:tw=48;5;10;38;5;16:ow=48;5;10;38;5;21:st=48;5;21;38;5;15:ex=38;5;34:*.tar=38;5;9:*.tgz=38;5;9:*.arc=38;5;9:*.arj=38;5;9:*.taz=38;5;9:*.lha=38;5;9:*.lz4=38;5;9:*.lzh=38;5;9:*.lzma=38;5;9:*.tlz=38;5;9:*.txz=38;5;9:*.tzo=38;5;9:*.t7z=38;5;9:*.zip=38;5;9:*.z=38;5;9:*.Z=38;5;9:*.dz=38;5;9:*.gz=38;5;9:*.lrz=38;5;9:*.lz=38;5;9:*.lzo=38;5;9:*.xz=38;5;9:*.bz2=38;5;9:*.bz=38;5;9:*.tbz=38;5;9:*.tbz2=38;5;9:*.tz=38;5;9:*.deb=38;5;9:*.rpm=38;5;9:*.jar=38;5;9:*.war=38;5;9:*.ear=38;5;9:*.sar=38;5;9:*.rar=38;5;9:*.alz=38;5;9:*.ace=38;5;9:*.zoo=38;5;9:*.cpio=38;5;9:*.7z=38;5;9:*.rz=38;5;9:*.cab=38;5;9:*.jpg=38;5;13:*.jpeg=38;5;13:*.gif=38;5;13:*.bmp=38;5;13:*.pbm=38;5;13:*.pgm=38;5;13:*.ppm=38;5;13:*.tga=38;5;13:*.xbm=38;5;13:*.xpm=38;5;13:*.tif=38;5;13:*.tiff=38;5;13:*.png=38;5;13:*.svg=38;5;13:*.svgz=38;5;13:*.mng=38;5;13:*.pcx=38;5;13:*.mov=38;5;13:*.mpg=38;5;13:*.mpeg=38;5;13:*.m2v=38;5;13:*.mkv=38;5;13:*.webm=38;5;13:*.ogm=38;5;13:*.mp4=38;5;13:*.m4v=38;5;13:*.mp4v=38;5;13:*.vob=38;5;13:*.qt=38;5;13:*.nuv=38;5;13:*.wmv=38;5;13:*.asf=38;5;13:*.rm=38;5;13:*.rmvb=38;5;13:*.flc=38;5;13:*.avi=38;5;13:*.fli=38;5;13:*.flv=38;5;13:*.gl=38;5;13:*.dl=38;5;13:*.xcf=38;5;13:*.xwd=38;5;13:*.yuv=38;5;13:*.cgm=38;5;13:*.emf=38;5;13:*.axv=38;5;13:*.anx=38;5;13:*.ogv=38;5;13:*.ogx=38;5;13:*.aac=38;5;45:*.au=38;5;45:*.flac=38;5;45:*.mid=38;5;45:*.midi=38;5;45:*.mka=38;5;45:*.mp3=38;5;45:*.mpc=38;5;45:*.ogg=38;5;45:*.ra=38;5;45:*.wav=38;5;45:*.axa=38;5;45:*.oga=38;5;45:*.spx=38;5;45:*.xspf=38;5;45:", 
            "MAIL": "/var/mail/rchan", 
            "PATH": "/usr/local/bin:/usr/bin", 
            "PWD": "/home/rchan", 
            "SELINUX_LEVEL_REQUESTED": "", 
            "SELINUX_ROLE_REQUESTED": "", 
            "SELINUX_USE_CURRENT_RANGE": "", 
            "SHELL": "/bin/bash", 
            "SHLVL": "2", 
            "SSH_CLIENT": "192.168.99.1 49744 22", 
            "SSH_CONNECTION": "192.168.99.1 49744 192.168.99.153 22", 
            "SSH_TTY": "/dev/pts/1", 
            "TERM": "xterm-256color", 
            "USER": "rchan", 
            "XDG_RUNTIME_DIR": "/run/user/1001", 
            "XDG_SESSION_ID": "10", 
            "XMODIFIERS": "@im=ibus", 
            "_": "/usr/bin/python"
        }, 
        "ansible_eth0": {
            "active": true, 
            "device": "eth0", 
            "features": {
                "busy_poll": "off [fixed]", 
                "fcoe_mtu": "off [fixed]", 
                "generic_receive_offload": "on", 
                "generic_segmentation_offload": "on", 
                "highdma": "on [fixed]", 
                "hw_tc_offload": "off [fixed]", 
                "l2_fwd_offload": "off [fixed]", 
                "large_receive_offload": "off [fixed]", 
                "loopback": "off [fixed]", 
                "netns_local": "off [fixed]", 
                "ntuple_filters": "off [fixed]", 
                "receive_hashing": "off [fixed]", 
                "rx_all": "off [fixed]", 
                "rx_checksumming": "on [fixed]", 
                "rx_fcs": "off [fixed]", 
                "rx_udp_tunnel_port_offload": "off [fixed]", 
                "rx_vlan_filter": "on [fixed]", 
                "rx_vlan_offload": "off [fixed]", 
                "rx_vlan_stag_filter": "off [fixed]", 
                "rx_vlan_stag_hw_parse": "off [fixed]", 
                "scatter_gather": "on", 
                "tcp_segmentation_offload": "on", 
                "tx_checksum_fcoe_crc": "off [fixed]", 
                "tx_checksum_ip_generic": "on", 
                "tx_checksum_ipv4": "off [fixed]", 
                "tx_checksum_ipv6": "off [fixed]", 
                "tx_checksum_sctp": "off [fixed]", 
                "tx_checksumming": "on", 
                "tx_fcoe_segmentation": "off [fixed]", 
                "tx_gre_csum_segmentation": "off [fixed]", 
                "tx_gre_segmentation": "off [fixed]", 
                "tx_gso_partial": "off [fixed]", 
                "tx_gso_robust": "off [fixed]", 
                "tx_ipip_segmentation": "off [fixed]", 
                "tx_lockless": "off [fixed]", 
                "tx_nocache_copy": "off", 
                "tx_scatter_gather": "on", 
                "tx_scatter_gather_fraglist": "off [fixed]", 
                "tx_sctp_segmentation": "off [fixed]", 
                "tx_sit_segmentation": "off [fixed]", 
                "tx_tcp6_segmentation": "on", 
                "tx_tcp_ecn_segmentation": "on", 
                "tx_tcp_mangleid_segmentation": "off", 
                "tx_tcp_segmentation": "on", 
                "tx_udp_tnl_csum_segmentation": "off [fixed]", 
                "tx_udp_tnl_segmentation": "off [fixed]", 
                "tx_vlan_offload": "off [fixed]", 
                "tx_vlan_stag_hw_insert": "off [fixed]", 
                "udp_fragmentation_offload": "on", 
                "vlan_challenged": "off [fixed]"
            }, 
            "ipv4": {
                "address": "192.168.122.99", 
                "broadcast": "192.168.122.255", 
                "netmask": "255.255.255.0", 
                "network": "192.168.122.0"
            }, 
            "ipv6": [
                {
                    "address": "fe80::5054:ff:fe11:6767", 
                    "prefix": "64", 
                    "scope": "link"
                }
            ], 
            "macaddress": "52:54:00:11:67:67", 
            "module": "virtio_net", 
            "mtu": 1500, 
            "pciid": "virtio0", 
            "promisc": false, 
            "type": "ether"
        }, 
        "ansible_eth1": {
            "active": true, 
            "device": "eth1", 
            "features": {
                "busy_poll": "off [fixed]", 
                "fcoe_mtu": "off [fixed]", 
                "generic_receive_offload": "on", 
                "generic_segmentation_offload": "on", 
                "highdma": "on [fixed]", 
                "hw_tc_offload": "off [fixed]", 
                "l2_fwd_offload": "off [fixed]", 
                "large_receive_offload": "off [fixed]", 
                "loopback": "off [fixed]", 
                "netns_local": "off [fixed]", 
                "ntuple_filters": "off [fixed]", 
                "receive_hashing": "off [fixed]", 
                "rx_all": "off [fixed]", 
                "rx_checksumming": "on [fixed]", 
                "rx_fcs": "off [fixed]", 
                "rx_udp_tunnel_port_offload": "off [fixed]", 
                "rx_vlan_filter": "on [fixed]", 
                "rx_vlan_offload": "off [fixed]", 
                "rx_vlan_stag_filter": "off [fixed]", 
                "rx_vlan_stag_hw_parse": "off [fixed]", 
                "scatter_gather": "on", 
                "tcp_segmentation_offload": "on", 
                "tx_checksum_fcoe_crc": "off [fixed]", 
                "tx_checksum_ip_generic": "on", 
                "tx_checksum_ipv4": "off [fixed]", 
                "tx_checksum_ipv6": "off [fixed]", 
                "tx_checksum_sctp": "off [fixed]", 
                "tx_checksumming": "on", 
                "tx_fcoe_segmentation": "off [fixed]", 
                "tx_gre_csum_segmentation": "off [fixed]", 
                "tx_gre_segmentation": "off [fixed]", 
                "tx_gso_partial": "off [fixed]", 
                "tx_gso_robust": "off [fixed]", 
                "tx_ipip_segmentation": "off [fixed]", 
                "tx_lockless": "off [fixed]", 
                "tx_nocache_copy": "off", 
                "tx_scatter_gather": "on", 
                "tx_scatter_gather_fraglist": "off [fixed]", 
                "tx_sctp_segmentation": "off [fixed]", 
                "tx_sit_segmentation": "off [fixed]", 
                "tx_tcp6_segmentation": "on", 
                "tx_tcp_ecn_segmentation": "on", 
                "tx_tcp_mangleid_segmentation": "off", 
                "tx_tcp_segmentation": "on", 
                "tx_udp_tnl_csum_segmentation": "off [fixed]", 
                "tx_udp_tnl_segmentation": "off [fixed]", 
                "tx_vlan_offload": "off [fixed]", 
                "tx_vlan_stag_hw_insert": "off [fixed]", 
                "udp_fragmentation_offload": "on", 
                "vlan_challenged": "off [fixed]"
            }, 
            "ipv4": {
                "address": "192.168.99.153", 
                "broadcast": "192.168.99.255", 
                "netmask": "255.255.255.0", 
                "network": "192.168.99.0"
            }, 
            "ipv6": [
                {
                    "address": "fe80::5054:ff:fe8c:b67c", 
                    "prefix": "64", 
                    "scope": "link"
                }
            ], 
            "macaddress": "52:54:00:8c:b6:7c", 
            "module": "virtio_net", 
            "mtu": 1500, 
            "pciid": "virtio4", 
            "promisc": false, 
            "type": "ether"
        }, 
        "ansible_fips": false, 
        "ansible_form_factor": "Other", 
        "ansible_fqdn": "co.cp.net", 
        "ansible_gather_subset": [
            "hardware", 
            "network", 
            "virtual"
        ], 
        "ansible_hostname": "co", 
        "ansible_interfaces": [
            "lo", 
            "eth1", 
            "eth0"
        ], 
        "ansible_kernel": "3.10.0-862.14.4.el7.x86_64", 
        "ansible_lo": {
            "active": true, 
            "device": "lo", 
            "features": {
                "busy_poll": "off [fixed]", 
                "fcoe_mtu": "off [fixed]", 
                "generic_receive_offload": "on", 
                "generic_segmentation_offload": "on", 
                "highdma": "on [fixed]", 
                "hw_tc_offload": "off [fixed]", 
                "l2_fwd_offload": "off [fixed]", 
                "large_receive_offload": "off [fixed]", 
                "loopback": "on [fixed]", 
                "netns_local": "on [fixed]", 
                "ntuple_filters": "off [fixed]", 
                "receive_hashing": "off [fixed]", 
                "rx_all": "off [fixed]", 
                "rx_checksumming": "on [fixed]", 
                "rx_fcs": "off [fixed]", 
                "rx_udp_tunnel_port_offload": "off [fixed]", 
                "rx_vlan_filter": "off [fixed]", 
                "rx_vlan_offload": "off [fixed]", 
                "rx_vlan_stag_filter": "off [fixed]", 
                "rx_vlan_stag_hw_parse": "off [fixed]", 
                "scatter_gather": "on", 
                "tcp_segmentation_offload": "on", 
                "tx_checksum_fcoe_crc": "off [fixed]", 
                "tx_checksum_ip_generic": "on [fixed]", 
                "tx_checksum_ipv4": "off [fixed]", 
                "tx_checksum_ipv6": "off [fixed]", 
                "tx_checksum_sctp": "on [fixed]", 
                "tx_checksumming": "on", 
                "tx_fcoe_segmentation": "off [fixed]", 
                "tx_gre_csum_segmentation": "off [fixed]", 
                "tx_gre_segmentation": "off [fixed]", 
                "tx_gso_partial": "off [fixed]", 
                "tx_gso_robust": "off [fixed]", 
                "tx_ipip_segmentation": "off [fixed]", 
                "tx_lockless": "on [fixed]", 
                "tx_nocache_copy": "off [fixed]", 
                "tx_scatter_gather": "on [fixed]", 
                "tx_scatter_gather_fraglist": "on [fixed]", 
                "tx_sctp_segmentation": "on", 
                "tx_sit_segmentation": "off [fixed]", 
                "tx_tcp6_segmentation": "on", 
                "tx_tcp_ecn_segmentation": "on", 
                "tx_tcp_mangleid_segmentation": "on", 
                "tx_tcp_segmentation": "on", 
                "tx_udp_tnl_csum_segmentation": "off [fixed]", 
                "tx_udp_tnl_segmentation": "off [fixed]", 
                "tx_vlan_offload": "off [fixed]", 
                "tx_vlan_stag_hw_insert": "off [fixed]", 
                "udp_fragmentation_offload": "on", 
                "vlan_challenged": "on [fixed]"
            }, 
            "ipv4": {
                "address": "127.0.0.1", 
                "broadcast": "host", 
                "netmask": "255.0.0.0", 
                "network": "127.0.0.0"
            }, 
            "ipv6": [
                {
                    "address": "::1", 
                    "prefix": "128", 
                    "scope": "host"
                }
            ], 
            "mtu": 65536, 
            "promisc": false, 
            "type": "loopback"
        }, 
        "ansible_machine": "x86_64", 
        "ansible_machine_id": "ff6c8846bc8e4aeaac26ec530ed76453", 
        "ansible_memfree_mb": 562, 
        "ansible_memory_mb": {
            "nocache": {
                "free": 795, 
                "used": 196
            }, 
            "real": {
                "free": 562, 
                "total": 991, 
                "used": 429
            }, 
            "swap": {
                "cached": 0, 
                "free": 511, 
                "total": 511, 
                "used": 0
            }
        }, 
        "ansible_memtotal_mb": 991, 
        "ansible_mounts": [
            {
                "device": "/dev/mapper/centos-root", 
                "fstype": "xfs", 
                "mount": "/", 
                "options": "rw,seclabel,relatime,attr2,inode64,noquota", 
                "size_available": 1217064960, 
                "size_total": 4292870144, 
                "uuid": "7075a36b-b1f3-4e15-965f-0b12102627c0"
            }, 
            {
                "device": "/dev/vda1", 
                "fstype": "xfs", 
                "mount": "/boot", 
                "options": "rw,seclabel,relatime,attr2,inode64,noquota", 
                "size_available": 311169024, 
                "size_total": 520794112, 
                "uuid": "56f20e09-e192-48a1-b328-93015d3133df"
            }
        ], 
        "ansible_nodename": "co.cp.net", 
        "ansible_os_family": "RedHat", 
        "ansible_pkg_mgr": "yum", 
        "ansible_processor": [
            "GenuineIntel", 
            "Intel Xeon E312xx (Sandy Bridge)"
        ], 
        "ansible_processor_cores": 1, 
        "ansible_processor_count": 1, 
        "ansible_processor_threads_per_core": 1, 
        "ansible_processor_vcpus": 1, 
        "ansible_product_name": "KVM", 
        "ansible_product_serial": "NA", 
        "ansible_product_uuid": "NA", 
        "ansible_product_version": "RHEL 7.2.0 PC (i440FX + PIIX, 1996)", 
        "ansible_python": {
            "executable": "/usr/bin/python", 
            "has_sslcontext": true, 
            "type": "CPython", 
            "version": {
                "major": 2, 
                "micro": 5, 
                "minor": 7, 
                "releaselevel": "final", 
                "serial": 0
            }, 
            "version_info": [
                2, 
                7, 
                5, 
                "final", 
                0
            ]
        }, 
        "ansible_python_version": "2.7.5", 
        "ansible_selinux": {
            "config_mode": "enforcing", 
            "mode": "enforcing", 
            "policyvers": 31, 
            "status": "enabled", 
            "type": "targeted"
        }, 
        "ansible_service_mgr": "systemd", 
        "ansible_ssh_host_key_ecdsa_public": "AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBHiwyaa6o0GGSQpUfNnvPnjlvc/B7okYvC5zpanNmRhwvt452w/GoVJYii/NnqUaaNJWCJSUizaXrJh41X9bBVw=", 
        "ansible_ssh_host_key_ed25519_public": "AAAAC3NzaC1lZDI1NTE5AAAAIAmA6+cULTYITLZ+nbkCACr9iPlY9JjWCZ0Cx3G8Buit", 
        "ansible_ssh_host_key_rsa_public": "AAAAB3NzaC1yc2EAAAADAQABAAABAQC8nwe948wsQcmbuGHaASvQQpFNZO0SvyRzTBXbaJuNti4af2hNx5hLfm2i1wgppbsx4u2aH8mbnslj8U7soXtY0siBnkkahx9RT2zx3w9Dr7pQyt/TXAhAtO8NQBqOBNyNW6omdohHM8zMjg/2qxP0CDyTIm4ARJ5D7IU0mccN0mCvSeO8rcdIXiblN8V39MaZPNJ7j+jNRQ+iW6MYzfCgzkkvqjLP8StpK3+eA1wgKH6noblKxvzC2ecq/MCg8P/QnOP5Gw8qfuYoI3AKSjqbZA+Y7TKBZo9Us+mmHN6XdoqNucP1AIsZtygSuybV8oXYwS0tFEYDY/dfxp7hLNH3", 
        "ansible_swapfree_mb": 511, 
        "ansible_swaptotal_mb": 511, 
        "ansible_system": "Linux", 
        "ansible_system_capabilities": [
            ""
        ], 
        "ansible_system_capabilities_enforced": "True", 
        "ansible_system_vendor": "Red Hat", 
        "ansible_uptime_seconds": 3027, 
        "ansible_user_dir": "/home/rchan", 
        "ansible_user_gecos": "", 
        "ansible_user_gid": 1001, 
        "ansible_user_id": "rchan", 
        "ansible_user_shell": "/bin/bash", 
        "ansible_user_uid": 1001, 
        "ansible_userspace_architecture": "x86_64", 
        "ansible_userspace_bits": "64", 
        "ansible_virtualization_role": "guest", 
        "ansible_virtualization_type": "kvm", 
        "module_setup": true
    }, 
    "changed": false
}
```
