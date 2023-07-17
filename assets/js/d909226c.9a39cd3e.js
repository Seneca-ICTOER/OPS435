"use strict";(self.webpackChunkOPS435=self.webpackChunkOPS435||[]).push([[426],{3905:function(n,e,t){t.d(e,{Zo:function(){return l},kt:function(){return u}});var o=t(7294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function f(n,e){if(null==n)return{};var t,o,i=function(n,e){if(null==n)return{};var t,o,i={},s=Object.keys(n);for(o=0;o<s.length;o++)t=s[o],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(o=0;o<s.length;o++)t=s[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var r=o.createContext({}),_=function(n){var e=o.useContext(r),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},l=function(n){var e=_(n.components);return o.createElement(r.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(n,e){var t=n.components,i=n.mdxType,s=n.originalType,r=n.parentName,l=f(n,["components","mdxType","originalType","parentName"]),d=_(t),u=i,x=d["".concat(r,".").concat(u)]||d[u]||c[u]||s;return t?o.createElement(x,a(a({ref:e},l),{},{components:t})):o.createElement(x,a({ref:e},l))}));function u(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var s=t.length,a=new Array(s);a[0]=d;var f={};for(var r in e)hasOwnProperty.call(e,r)&&(f[r]=e[r]);f.originalType=n,f.mdxType="string"==typeof n?n:i,a[1]=f;for(var _=2;_<s;_++)a[_]=t[_];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5237:function(n,e,t){t.r(e),t.d(e,{assets:function(){return r},contentTitle:function(){return a},default:function(){return c},frontMatter:function(){return s},metadata:function(){return f},toc:function(){return _}});var o=t(3117),i=(t(7294),t(3905));const s={id:"ansible-setup",title:"Ansible Setup",sidebar_position:1,description:"Ansible Setup"},a="Ansible Setup",f={unversionedId:"C-ExtraResources/ansible-setup",id:"C-ExtraResources/ansible-setup",title:"Ansible Setup",description:"Ansible Setup",source:"@site/docs/C-ExtraResources/ansible-setup.md",sourceDirName:"C-ExtraResources",slug:"/C-ExtraResources/ansible-setup",permalink:"/OPS435/C-ExtraResources/ansible-setup",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/OPS435/tree/main/docs/C-ExtraResources/ansible-setup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"ansible-setup",title:"Ansible Setup",sidebar_position:1,description:"Ansible Setup"},sidebar:"courseNotesSidebar",previous:{title:"Assignment 2",permalink:"/OPS435/B-Assignments/assignment2"},next:{title:"Sample Ansible Hosts",permalink:"/OPS435/C-ExtraResources/sample-ansible-hosts"}},r={},_=[],l={toc:_};function c(n){let{components:e,...t}=n;return(0,i.kt)("wrapper",(0,o.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ansible-setup"},"Ansible Setup"),(0,i.kt)("p",null,"Collect all the information on a remote host with the Ansible's setup module:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'[rchan@centos7 ansible]$ ansible 192.168.99.153 -m setup\n192.168.99.153 | SUCCESS => {\n    "ansible_facts": {\n        "ansible_all_ipv4_addresses": [\n            "192.168.122.99", \n            "192.168.99.153"\n        ], \n        "ansible_all_ipv6_addresses": [\n            "fe80::5054:ff:fe11:6767", \n            "fe80::5054:ff:fe8c:b67c"\n        ], \n        "ansible_architecture": "x86_64", \n        "ansible_bios_date": "04/01/2014", \n        "ansible_bios_version": "1.9.1-5.el7_3.2", \n        "ansible_cmdline": {\n            "BOOT_IMAGE": "/vmlinuz-3.10.0-862.14.4.el7.x86_64", \n            "LANG": "en_CA.UTF-8", \n            "console": "ttyS0", \n            "crashkernel": "auto", \n            "quiet": true, \n            "rd.lvm.lv": "centos/root", \n            "rhgb": true, \n            "ro": true, \n            "root": "/dev/mapper/centos-root", \n            "vconsole.font": "latarcyrheb-sun16", \n            "vconsole.keymap": "us"\n        }, \n        "ansible_date_time": {\n            "date": "2018-11-22", \n            "day": "22", \n            "epoch": "1542902572", \n            "hour": "09", \n            "iso8601": "2018-11-22T16:02:52Z", \n            "iso8601_basic": "20181122T090252832401", \n            "iso8601_basic_short": "20181122T090252", \n            "iso8601_micro": "2018-11-22T16:02:52.832529Z", \n            "minute": "02", \n            "month": "11", \n            "second": "52", \n            "time": "09:02:52", \n            "tz": "MST", \n            "tz_offset": "-0700", \n            "weekday": "Thursday", \n            "weekday_number": "4", \n            "weeknumber": "47", \n            "year": "2018"\n        }, \n        "ansible_default_ipv4": {\n            "address": "192.168.122.99", \n            "alias": "eth0", \n            "broadcast": "192.168.122.255", \n            "gateway": "192.168.122.1", \n            "interface": "eth0", \n            "macaddress": "52:54:00:11:67:67", \n            "mtu": 1500, \n            "netmask": "255.255.255.0", \n            "network": "192.168.122.0", \n            "type": "ether"\n        }, \n        "ansible_default_ipv6": {}, \n        "ansible_devices": {\n            "sr0": {\n                "holders": [], \n                "host": "", \n                "model": "QEMU DVD-ROM", \n                "partitions": {}, \n                "removable": "1", \n                "rotational": "1", \n                "sas_address": null, \n                "sas_device_handle": null, \n                "scheduler_mode": "deadline", \n                "sectors": "2097151", \n                "sectorsize": "512", \n                "size": "1024.00 MB", \n                "support_discard": "0", \n                "vendor": "QEMU"\n            }, \n            "vda": {\n                "holders": [], \n                "host": "", \n                "model": null, \n                "partitions": {\n                    "vda1": {\n                        "holders": [], \n                        "sectors": "1024000", \n                        "sectorsize": 512, \n                        "size": "500.00 MB", \n                        "start": "2048", \n                        "uuid": "56f20e09-e192-48a1-b328-93015d3133df"\n                    }, \n                    "vda2": {\n                        "holders": [\n                            "centos-swap", \n                            "centos-root"\n                        ], \n                        "sectors": "9459712", \n                        "sectorsize": 512, \n                        "size": "4.51 GB", \n                        "start": "1026048", \n                        "uuid": null\n                    }\n                }, \n                "removable": "0", \n                "rotational": "1", \n                "sas_address": null, \n                "sas_device_handle": null, \n                "scheduler_mode": "mq-deadline", \n                "sectors": "10485760", \n                "sectorsize": "512", \n                "size": "5.00 GB", \n                "support_discard": "0", \n                "vendor": "0x1af4"\n            }\n        }, \n        "ansible_distribution": "CentOS", \n        "ansible_distribution_major_version": "7", \n        "ansible_distribution_release": "Core", \n        "ansible_distribution_version": "7.5.1804", \n        "ansible_dns": {\n            "nameservers": [\n                "192.168.122.1"\n            ], \n            "search": [\n                "localhost"\n            ]\n        }, \n        "ansible_domain": "cp.net", \n        "ansible_env": {\n            "HOME": "/home/rchan", \n            "LANG": "en_CA.UTF-8", \n            "LC_ALL": "en_US.utf-8", \n            "LESSOPEN": "||/usr/bin/lesspipe.sh %s", \n            "LOGNAME": "rchan", \n            "LS_COLORS": "rs=0:di=38;5;27:ln=38;5;51:mh=44;38;5;15:pi=40;38;5;11:so=38;5;13:do=38;5;5:bd=48;5;232;38;5;11:cd=48;5;232;38;5;3:or=48;5;232;38;5;9:mi=05;48;5;232;38;5;15:su=48;5;196;38;5;15:sg=48;5;11;38;5;16:ca=48;5;196;38;5;226:tw=48;5;10;38;5;16:ow=48;5;10;38;5;21:st=48;5;21;38;5;15:ex=38;5;34:*.tar=38;5;9:*.tgz=38;5;9:*.arc=38;5;9:*.arj=38;5;9:*.taz=38;5;9:*.lha=38;5;9:*.lz4=38;5;9:*.lzh=38;5;9:*.lzma=38;5;9:*.tlz=38;5;9:*.txz=38;5;9:*.tzo=38;5;9:*.t7z=38;5;9:*.zip=38;5;9:*.z=38;5;9:*.Z=38;5;9:*.dz=38;5;9:*.gz=38;5;9:*.lrz=38;5;9:*.lz=38;5;9:*.lzo=38;5;9:*.xz=38;5;9:*.bz2=38;5;9:*.bz=38;5;9:*.tbz=38;5;9:*.tbz2=38;5;9:*.tz=38;5;9:*.deb=38;5;9:*.rpm=38;5;9:*.jar=38;5;9:*.war=38;5;9:*.ear=38;5;9:*.sar=38;5;9:*.rar=38;5;9:*.alz=38;5;9:*.ace=38;5;9:*.zoo=38;5;9:*.cpio=38;5;9:*.7z=38;5;9:*.rz=38;5;9:*.cab=38;5;9:*.jpg=38;5;13:*.jpeg=38;5;13:*.gif=38;5;13:*.bmp=38;5;13:*.pbm=38;5;13:*.pgm=38;5;13:*.ppm=38;5;13:*.tga=38;5;13:*.xbm=38;5;13:*.xpm=38;5;13:*.tif=38;5;13:*.tiff=38;5;13:*.png=38;5;13:*.svg=38;5;13:*.svgz=38;5;13:*.mng=38;5;13:*.pcx=38;5;13:*.mov=38;5;13:*.mpg=38;5;13:*.mpeg=38;5;13:*.m2v=38;5;13:*.mkv=38;5;13:*.webm=38;5;13:*.ogm=38;5;13:*.mp4=38;5;13:*.m4v=38;5;13:*.mp4v=38;5;13:*.vob=38;5;13:*.qt=38;5;13:*.nuv=38;5;13:*.wmv=38;5;13:*.asf=38;5;13:*.rm=38;5;13:*.rmvb=38;5;13:*.flc=38;5;13:*.avi=38;5;13:*.fli=38;5;13:*.flv=38;5;13:*.gl=38;5;13:*.dl=38;5;13:*.xcf=38;5;13:*.xwd=38;5;13:*.yuv=38;5;13:*.cgm=38;5;13:*.emf=38;5;13:*.axv=38;5;13:*.anx=38;5;13:*.ogv=38;5;13:*.ogx=38;5;13:*.aac=38;5;45:*.au=38;5;45:*.flac=38;5;45:*.mid=38;5;45:*.midi=38;5;45:*.mka=38;5;45:*.mp3=38;5;45:*.mpc=38;5;45:*.ogg=38;5;45:*.ra=38;5;45:*.wav=38;5;45:*.axa=38;5;45:*.oga=38;5;45:*.spx=38;5;45:*.xspf=38;5;45:", \n            "MAIL": "/var/mail/rchan", \n            "PATH": "/usr/local/bin:/usr/bin", \n            "PWD": "/home/rchan", \n            "SELINUX_LEVEL_REQUESTED": "", \n            "SELINUX_ROLE_REQUESTED": "", \n            "SELINUX_USE_CURRENT_RANGE": "", \n            "SHELL": "/bin/bash", \n            "SHLVL": "2", \n            "SSH_CLIENT": "192.168.99.1 49744 22", \n            "SSH_CONNECTION": "192.168.99.1 49744 192.168.99.153 22", \n            "SSH_TTY": "/dev/pts/1", \n            "TERM": "xterm-256color", \n            "USER": "rchan", \n            "XDG_RUNTIME_DIR": "/run/user/1001", \n            "XDG_SESSION_ID": "10", \n            "XMODIFIERS": "@im=ibus", \n            "_": "/usr/bin/python"\n        }, \n        "ansible_eth0": {\n            "active": true, \n            "device": "eth0", \n            "features": {\n                "busy_poll": "off [fixed]", \n                "fcoe_mtu": "off [fixed]", \n                "generic_receive_offload": "on", \n                "generic_segmentation_offload": "on", \n                "highdma": "on [fixed]", \n                "hw_tc_offload": "off [fixed]", \n                "l2_fwd_offload": "off [fixed]", \n                "large_receive_offload": "off [fixed]", \n                "loopback": "off [fixed]", \n                "netns_local": "off [fixed]", \n                "ntuple_filters": "off [fixed]", \n                "receive_hashing": "off [fixed]", \n                "rx_all": "off [fixed]", \n                "rx_checksumming": "on [fixed]", \n                "rx_fcs": "off [fixed]", \n                "rx_udp_tunnel_port_offload": "off [fixed]", \n                "rx_vlan_filter": "on [fixed]", \n                "rx_vlan_offload": "off [fixed]", \n                "rx_vlan_stag_filter": "off [fixed]", \n                "rx_vlan_stag_hw_parse": "off [fixed]", \n                "scatter_gather": "on", \n                "tcp_segmentation_offload": "on", \n                "tx_checksum_fcoe_crc": "off [fixed]", \n                "tx_checksum_ip_generic": "on", \n                "tx_checksum_ipv4": "off [fixed]", \n                "tx_checksum_ipv6": "off [fixed]", \n                "tx_checksum_sctp": "off [fixed]", \n                "tx_checksumming": "on", \n                "tx_fcoe_segmentation": "off [fixed]", \n                "tx_gre_csum_segmentation": "off [fixed]", \n                "tx_gre_segmentation": "off [fixed]", \n                "tx_gso_partial": "off [fixed]", \n                "tx_gso_robust": "off [fixed]", \n                "tx_ipip_segmentation": "off [fixed]", \n                "tx_lockless": "off [fixed]", \n                "tx_nocache_copy": "off", \n                "tx_scatter_gather": "on", \n                "tx_scatter_gather_fraglist": "off [fixed]", \n                "tx_sctp_segmentation": "off [fixed]", \n                "tx_sit_segmentation": "off [fixed]", \n                "tx_tcp6_segmentation": "on", \n                "tx_tcp_ecn_segmentation": "on", \n                "tx_tcp_mangleid_segmentation": "off", \n                "tx_tcp_segmentation": "on", \n                "tx_udp_tnl_csum_segmentation": "off [fixed]", \n                "tx_udp_tnl_segmentation": "off [fixed]", \n                "tx_vlan_offload": "off [fixed]", \n                "tx_vlan_stag_hw_insert": "off [fixed]", \n                "udp_fragmentation_offload": "on", \n                "vlan_challenged": "off [fixed]"\n            }, \n            "ipv4": {\n                "address": "192.168.122.99", \n                "broadcast": "192.168.122.255", \n                "netmask": "255.255.255.0", \n                "network": "192.168.122.0"\n            }, \n            "ipv6": [\n                {\n                    "address": "fe80::5054:ff:fe11:6767", \n                    "prefix": "64", \n                    "scope": "link"\n                }\n            ], \n            "macaddress": "52:54:00:11:67:67", \n            "module": "virtio_net", \n            "mtu": 1500, \n            "pciid": "virtio0", \n            "promisc": false, \n            "type": "ether"\n        }, \n        "ansible_eth1": {\n            "active": true, \n            "device": "eth1", \n            "features": {\n                "busy_poll": "off [fixed]", \n                "fcoe_mtu": "off [fixed]", \n                "generic_receive_offload": "on", \n                "generic_segmentation_offload": "on", \n                "highdma": "on [fixed]", \n                "hw_tc_offload": "off [fixed]", \n                "l2_fwd_offload": "off [fixed]", \n                "large_receive_offload": "off [fixed]", \n                "loopback": "off [fixed]", \n                "netns_local": "off [fixed]", \n                "ntuple_filters": "off [fixed]", \n                "receive_hashing": "off [fixed]", \n                "rx_all": "off [fixed]", \n                "rx_checksumming": "on [fixed]", \n                "rx_fcs": "off [fixed]", \n                "rx_udp_tunnel_port_offload": "off [fixed]", \n                "rx_vlan_filter": "on [fixed]", \n                "rx_vlan_offload": "off [fixed]", \n                "rx_vlan_stag_filter": "off [fixed]", \n                "rx_vlan_stag_hw_parse": "off [fixed]", \n                "scatter_gather": "on", \n                "tcp_segmentation_offload": "on", \n                "tx_checksum_fcoe_crc": "off [fixed]", \n                "tx_checksum_ip_generic": "on", \n                "tx_checksum_ipv4": "off [fixed]", \n                "tx_checksum_ipv6": "off [fixed]", \n                "tx_checksum_sctp": "off [fixed]", \n                "tx_checksumming": "on", \n                "tx_fcoe_segmentation": "off [fixed]", \n                "tx_gre_csum_segmentation": "off [fixed]", \n                "tx_gre_segmentation": "off [fixed]", \n                "tx_gso_partial": "off [fixed]", \n                "tx_gso_robust": "off [fixed]", \n                "tx_ipip_segmentation": "off [fixed]", \n                "tx_lockless": "off [fixed]", \n                "tx_nocache_copy": "off", \n                "tx_scatter_gather": "on", \n                "tx_scatter_gather_fraglist": "off [fixed]", \n                "tx_sctp_segmentation": "off [fixed]", \n                "tx_sit_segmentation": "off [fixed]", \n                "tx_tcp6_segmentation": "on", \n                "tx_tcp_ecn_segmentation": "on", \n                "tx_tcp_mangleid_segmentation": "off", \n                "tx_tcp_segmentation": "on", \n                "tx_udp_tnl_csum_segmentation": "off [fixed]", \n                "tx_udp_tnl_segmentation": "off [fixed]", \n                "tx_vlan_offload": "off [fixed]", \n                "tx_vlan_stag_hw_insert": "off [fixed]", \n                "udp_fragmentation_offload": "on", \n                "vlan_challenged": "off [fixed]"\n            }, \n            "ipv4": {\n                "address": "192.168.99.153", \n                "broadcast": "192.168.99.255", \n                "netmask": "255.255.255.0", \n                "network": "192.168.99.0"\n            }, \n            "ipv6": [\n                {\n                    "address": "fe80::5054:ff:fe8c:b67c", \n                    "prefix": "64", \n                    "scope": "link"\n                }\n            ], \n            "macaddress": "52:54:00:8c:b6:7c", \n            "module": "virtio_net", \n            "mtu": 1500, \n            "pciid": "virtio4", \n            "promisc": false, \n            "type": "ether"\n        }, \n        "ansible_fips": false, \n        "ansible_form_factor": "Other", \n        "ansible_fqdn": "co.cp.net", \n        "ansible_gather_subset": [\n            "hardware", \n            "network", \n            "virtual"\n        ], \n        "ansible_hostname": "co", \n        "ansible_interfaces": [\n            "lo", \n            "eth1", \n            "eth0"\n        ], \n        "ansible_kernel": "3.10.0-862.14.4.el7.x86_64", \n        "ansible_lo": {\n            "active": true, \n            "device": "lo", \n            "features": {\n                "busy_poll": "off [fixed]", \n                "fcoe_mtu": "off [fixed]", \n                "generic_receive_offload": "on", \n                "generic_segmentation_offload": "on", \n                "highdma": "on [fixed]", \n                "hw_tc_offload": "off [fixed]", \n                "l2_fwd_offload": "off [fixed]", \n                "large_receive_offload": "off [fixed]", \n                "loopback": "on [fixed]", \n                "netns_local": "on [fixed]", \n                "ntuple_filters": "off [fixed]", \n                "receive_hashing": "off [fixed]", \n                "rx_all": "off [fixed]", \n                "rx_checksumming": "on [fixed]", \n                "rx_fcs": "off [fixed]", \n                "rx_udp_tunnel_port_offload": "off [fixed]", \n                "rx_vlan_filter": "off [fixed]", \n                "rx_vlan_offload": "off [fixed]", \n                "rx_vlan_stag_filter": "off [fixed]", \n                "rx_vlan_stag_hw_parse": "off [fixed]", \n                "scatter_gather": "on", \n                "tcp_segmentation_offload": "on", \n                "tx_checksum_fcoe_crc": "off [fixed]", \n                "tx_checksum_ip_generic": "on [fixed]", \n                "tx_checksum_ipv4": "off [fixed]", \n                "tx_checksum_ipv6": "off [fixed]", \n                "tx_checksum_sctp": "on [fixed]", \n                "tx_checksumming": "on", \n                "tx_fcoe_segmentation": "off [fixed]", \n                "tx_gre_csum_segmentation": "off [fixed]", \n                "tx_gre_segmentation": "off [fixed]", \n                "tx_gso_partial": "off [fixed]", \n                "tx_gso_robust": "off [fixed]", \n                "tx_ipip_segmentation": "off [fixed]", \n                "tx_lockless": "on [fixed]", \n                "tx_nocache_copy": "off [fixed]", \n                "tx_scatter_gather": "on [fixed]", \n                "tx_scatter_gather_fraglist": "on [fixed]", \n                "tx_sctp_segmentation": "on", \n                "tx_sit_segmentation": "off [fixed]", \n                "tx_tcp6_segmentation": "on", \n                "tx_tcp_ecn_segmentation": "on", \n                "tx_tcp_mangleid_segmentation": "on", \n                "tx_tcp_segmentation": "on", \n                "tx_udp_tnl_csum_segmentation": "off [fixed]", \n                "tx_udp_tnl_segmentation": "off [fixed]", \n                "tx_vlan_offload": "off [fixed]", \n                "tx_vlan_stag_hw_insert": "off [fixed]", \n                "udp_fragmentation_offload": "on", \n                "vlan_challenged": "on [fixed]"\n            }, \n            "ipv4": {\n                "address": "127.0.0.1", \n                "broadcast": "host", \n                "netmask": "255.0.0.0", \n                "network": "127.0.0.0"\n            }, \n            "ipv6": [\n                {\n                    "address": "::1", \n                    "prefix": "128", \n                    "scope": "host"\n                }\n            ], \n            "mtu": 65536, \n            "promisc": false, \n            "type": "loopback"\n        }, \n        "ansible_machine": "x86_64", \n        "ansible_machine_id": "ff6c8846bc8e4aeaac26ec530ed76453", \n        "ansible_memfree_mb": 562, \n        "ansible_memory_mb": {\n            "nocache": {\n                "free": 795, \n                "used": 196\n            }, \n            "real": {\n                "free": 562, \n                "total": 991, \n                "used": 429\n            }, \n            "swap": {\n                "cached": 0, \n                "free": 511, \n                "total": 511, \n                "used": 0\n            }\n        }, \n        "ansible_memtotal_mb": 991, \n        "ansible_mounts": [\n            {\n                "device": "/dev/mapper/centos-root", \n                "fstype": "xfs", \n                "mount": "/", \n                "options": "rw,seclabel,relatime,attr2,inode64,noquota", \n                "size_available": 1217064960, \n                "size_total": 4292870144, \n                "uuid": "7075a36b-b1f3-4e15-965f-0b12102627c0"\n            }, \n            {\n                "device": "/dev/vda1", \n                "fstype": "xfs", \n                "mount": "/boot", \n                "options": "rw,seclabel,relatime,attr2,inode64,noquota", \n                "size_available": 311169024, \n                "size_total": 520794112, \n                "uuid": "56f20e09-e192-48a1-b328-93015d3133df"\n            }\n        ], \n        "ansible_nodename": "co.cp.net", \n        "ansible_os_family": "RedHat", \n        "ansible_pkg_mgr": "yum", \n        "ansible_processor": [\n            "GenuineIntel", \n            "Intel Xeon E312xx (Sandy Bridge)"\n        ], \n        "ansible_processor_cores": 1, \n        "ansible_processor_count": 1, \n        "ansible_processor_threads_per_core": 1, \n        "ansible_processor_vcpus": 1, \n        "ansible_product_name": "KVM", \n        "ansible_product_serial": "NA", \n        "ansible_product_uuid": "NA", \n        "ansible_product_version": "RHEL 7.2.0 PC (i440FX + PIIX, 1996)", \n        "ansible_python": {\n            "executable": "/usr/bin/python", \n            "has_sslcontext": true, \n            "type": "CPython", \n            "version": {\n                "major": 2, \n                "micro": 5, \n                "minor": 7, \n                "releaselevel": "final", \n                "serial": 0\n            }, \n            "version_info": [\n                2, \n                7, \n                5, \n                "final", \n                0\n            ]\n        }, \n        "ansible_python_version": "2.7.5", \n        "ansible_selinux": {\n            "config_mode": "enforcing", \n            "mode": "enforcing", \n            "policyvers": 31, \n            "status": "enabled", \n            "type": "targeted"\n        }, \n        "ansible_service_mgr": "systemd", \n        "ansible_ssh_host_key_ecdsa_public": "AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBHiwyaa6o0GGSQpUfNnvPnjlvc/B7okYvC5zpanNmRhwvt452w/GoVJYii/NnqUaaNJWCJSUizaXrJh41X9bBVw=", \n        "ansible_ssh_host_key_ed25519_public": "AAAAC3NzaC1lZDI1NTE5AAAAIAmA6+cULTYITLZ+nbkCACr9iPlY9JjWCZ0Cx3G8Buit", \n        "ansible_ssh_host_key_rsa_public": "AAAAB3NzaC1yc2EAAAADAQABAAABAQC8nwe948wsQcmbuGHaASvQQpFNZO0SvyRzTBXbaJuNti4af2hNx5hLfm2i1wgppbsx4u2aH8mbnslj8U7soXtY0siBnkkahx9RT2zx3w9Dr7pQyt/TXAhAtO8NQBqOBNyNW6omdohHM8zMjg/2qxP0CDyTIm4ARJ5D7IU0mccN0mCvSeO8rcdIXiblN8V39MaZPNJ7j+jNRQ+iW6MYzfCgzkkvqjLP8StpK3+eA1wgKH6noblKxvzC2ecq/MCg8P/QnOP5Gw8qfuYoI3AKSjqbZA+Y7TKBZo9Us+mmHN6XdoqNucP1AIsZtygSuybV8oXYwS0tFEYDY/dfxp7hLNH3", \n        "ansible_swapfree_mb": 511, \n        "ansible_swaptotal_mb": 511, \n        "ansible_system": "Linux", \n        "ansible_system_capabilities": [\n            ""\n        ], \n        "ansible_system_capabilities_enforced": "True", \n        "ansible_system_vendor": "Red Hat", \n        "ansible_uptime_seconds": 3027, \n        "ansible_user_dir": "/home/rchan", \n        "ansible_user_gecos": "", \n        "ansible_user_gid": 1001, \n        "ansible_user_id": "rchan", \n        "ansible_user_shell": "/bin/bash", \n        "ansible_user_uid": 1001, \n        "ansible_userspace_architecture": "x86_64", \n        "ansible_userspace_bits": "64", \n        "ansible_virtualization_role": "guest", \n        "ansible_virtualization_type": "kvm", \n        "module_setup": true\n    }, \n    "changed": false\n}\n')))}c.isMDXComponent=!0}}]);