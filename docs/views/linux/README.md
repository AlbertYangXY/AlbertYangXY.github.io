---
title: CentOS7 内核升级
date: 2020-03-02
tags:
 - Kernel
 - Linux
 - CentOS 
categories:
 -  Linux
 -  Kernel
 -  CentOS
---

::: tip 介绍
主要记录内核升级用到的命令。
:::

----------
升级主要分为小版本升级和大版本升级两种。

## 小版本升级 ##
### 1. 查看当前和可升级版本 ###
    yum list kernel
### 2.升级操作 ###
    yum update kernel -y
### 3.重启并检查 ###
    reboot
    uname -r
    
## 大版本升级 ##
### 1. 载入公钥 ###
    rpm --import https://www.elrepo.org/RPM-GPG-KEY-elrepo.org
### 2. 升级安装ELRepo ###
    yum install https://www.elrepo.org/elrepo-release-7.0-4.el7.elrepo.noarch.rpm
### 3. 载入elrepo-kernel元数据 ###
     yum --disablerepo=\* --enablerepo=elrepo-kernel repolist
### 4. 查看可用的rpm包 ###
yum --disablerepo=\* --enablerepo=elrepo-kernel list kernel*
> lt  ：long term support，长期支持版本；
> ml：mainline，主线版本；
### 5. 安装最新版本的kernel ###

    yum --disablerepo=\* --enablerepo=elrepo-kernel install  kernel-ml.x86_64  -y
### 6. 删除旧版本工具包 ###
    yum remove kernel-lt-tools kernel-lt-tools-libs
### 7. 安装新版本工具包 ###
    yum --disablerepo=\* --enablerepo=elrepo-kernel install kernel-ml-tools.x86_64  -y
### 8. 查看内核插入顺序 ###
	awk -F \' '$1=="menuentry " {print i++ " : " $2}' /etc/grub2.cfg
> 默认新内核是从头插入，默认启动顺序也是从0开始（当前顺序还未生效）
### 9. 查看当前实际启动顺序 ###
    grub2-editenv list
### 10. 设置默认启动 ###
    grub2-set-default 0
### 11. 重启并检查 ###
    reboot
    uname -r
