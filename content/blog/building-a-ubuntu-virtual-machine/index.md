---
title: Building a Ubuntu Desktop Virtual Machine with VirtualBox
date: '2019-06-03'
spoiler: It is easier than you think
---


# Why?

There are a number of reasons to build a Ubuntu virtual machine.

- Maybe you are curious about Linux 
- Perhaps hear or think you _should_ learn it
- You could run a local web or database server on it
- In production your app runs on Ubuntu and you want to ease the pain of deployment by developing the app on Ubuntu.
- You are already a Linux user but want to experiment in some way whithout modifying your development machine

Whatever you motivation, here is a step-by-step guild to make it easy.


## Definitions
- **Host:** - The host machine is the machine you install VirtualBox on. This will be a Linux, Mac or Windows machine running directly on the machines hardware.
- **Guest:** - The guest machine is the virtual machine.

## Prerequisetes

### Memory

The short answer: 16 GB is plenty. 8 GB is likely enough. 4 GB isn't enough. 

If you are going to be doing development on the guest you'll need to give the guest 4 to 6 GB of memory. Check you host system after a fresh boot to see how much free memory it has. The equation isn't really 'host memory after boot' + '4 to 6 for guest' = 'amount of memory on host'. A little extra is always needed.

### Processor

Any processor, Intel or AMD, made in the last 10 years is probably good.

### Free hard drive space
25 GB should be enough for the guest, but remember a full disk runs slow and it is best to have 25% of the disk unused.

## Download Ubuntu 18.04 Desktop LTS
- Go to: https://www.ubuntu.com/download/desktop
- Click 'Download' next to Ubuntu 18.04 LTS
- Wait for the download to complete or, if you have the bandwidth, move on to the next step while it downloads.

> Ubuntu 19.04 is beautiful to look at compared to 18.04, but it is a short-term release and therefore not widly supported by all of the apps and tools you will need.

## Installing VirtualBox
Go to the [VirtualBox download page](https://www.virtualbox.org/wiki/Downloads) and download the package for your host OS. Then follow the usuall installation proceedure for your host OS.


## Create the VM

- Select Machine > New

### Name and operating system
  - Name: something short and to the point
  - Machine Folder: the default is good
  - Type: Linux
  - Version: Ubuntu (64-bit)
  - Click Next

![Name and operating system](name-and-operating-system.png)

### Memory Size
  How much memory you allocate to the guest machine depends on how much memory you have on the host and what you will be doing with the VM for. With 16 GB on my host I allocate 6 GB to the guest and can do software development with MongoDB running locally. I haven't experimented but my guess is 4 GB is enough.
  - Enter the memory in MB (e.g., 6 * 1024 MB = 6144 or 6 GB)
  - Click Next

![Memory size](memory-size.png)

### Hard disk
  - Use the default: 'Create a virtual hard disk now'
  - Click Create

![Hard disk](hard-disk.png)

### Hard disk file type
  - Use the default: 'VDI (VirtualBox Disk Image)'
  - Click Next

![Hard disk file type](hard-disk-file-type.png)

### Storeage and physical hard disk
  - Use the default 'Dynamically allocated'
  - Click Next

      ![Storage on physical hard disk](storage-on-physical-hard-disk.png)

### File location and size
  'Dynamically allocated', chosen in the previous step, means the file size of the VM's hard drive will start at the minimum needed and grow as necessary up to the size you set in the current screen. This means you could enter 100 GB here and the initial size will still be under 3 GB. 100 GB would be the maximum size it can grow to. I recommend putting in a large number but something significantly less then the available space on your host's hard drive.
  - Leave the location as is
  - Enter a size (eg. 100.00 GB)
  - Click Create

![File location and size](file-location-and-size.png)

## Virtual Machine Settings

A few changes will give you a better VM experience

Right-click the new VM and select 'Settings...'

![click settings](click-settings.png)

### General > Advanced 
- Set both 'Shared Clipboard' and 'Drag'n'Drop' to 'Bidirectional'

![general advanced](general-advanced.png)

### System > Processor

By default the VM was given one processor. For my machine it says I have 8 CPUs. I actually have 4 cores with 2 threads per core. 2 CPUs is plenty but feel free to experiment with more.

![system processor](system-processor.png)

### Display > Screen

- Video Memory: 70 MB is good
- Check 'Enable 3D Acceleration'

You can also use multiple monitors with the VM. Leave it at one for now.

![display screen](display-screen.png)

## Installing the OS

You now have a VM with no operating system. You'll install one in the steps that follow.

- In the left pane, double click the the VM you just created or select it and click Start

![VM in left hand pane](vm-in-left-hand-pane.png)

### Select start-up disk
- Click the folder icon and navigate to the ubuntu ISO file you downloaded
- Click Start

![Select a start-up disk](select-start-up-disk.png)

### Welecome
- Click Install Ubuntu

![welcome screen](welcome.png)

### Keyboard layout
- Select your desired keyboard layout and click Continue

![keyboard layout](keyboard-layout.png)

### Updates and other software
'Normal installation' will give you a full featured desktop experience with word processor, spreasheet, media player and much more. 'Minimal installation' is, well, fewer applications but perfectly good for software development. If you are curious about the full Ubuntu experience, choose 'Normal installation'. If you want to save space choose 'Minimal installation'. You can always install additional software later.

With Ubuntu 16.04, the last long term release, I experienced the build hanging if 'Download updates while installing ubuntu' was checked and suggest you leave it unchecked. Ubuntu will prompt you shortly after installation is complete to install the updates.


'Install third-party software for graphics and Wi-Fi hardware and additional media formats' is generally beneficial. Make it checked.

- Select 'Normal installation' or 'Minimal installation'
- Un-check Download updatees while installing Ubuntu
- Check 'Install third-party software for graphics and Wi-Fi hardware and additional media formats'
- Click Continue

![updates and other software](updates-and-other-software.png)

### Installation type
- Take the defaults
- Click Install Now

![installation type](installation-type.png)

### Write the changes to disks?
- Click Continue

![Write the changes to disk](write-the-changes-to-disk.png)

### Where are you?
- Select your timezone
- Click Continue

![where are you](where-are-you.png)


### Who are you?
- Your name: Enter any name
- Your computer's name: The most noticable palce this will show-up is on the command line. Enter a name for your computer.
- Pick a username: This will be the name of the first user created and will also show-up on the command line. Enter your username.
- Choose a password: Enter a password
- Confirm your password: Re-enter the password
- Click 'Log in automatically' or 'Require my password to log in' - your choice

> NOTE: By default, the VM will not accept any incoming requests/conections. I also have a firewall on my host and, no surprise, my local network is behind a router. Additionally, if the host is locked, no one can log into the guest without the host password. Given all of that, I choose the convenience of using a short 4 character password, that isn't super secret at all, as well as 'Log in automatically'.

![Who are you](who-are-you.png)



### Installation will now begin.

Ubuntu doesn't take very long to install but you likely have time to make a cup of coffee or tea.

![welcome to ubuntu](welcome-to-ubuntu.png)

### Installation Complete

The installation of Ubuntu is compelte.

- Click Restart Now

![installation complete](installation-copmplete.png)


### Press Enter

Ubuntu doesn't know you are installing it as a virtual machine. It thinks it is being installed from a media such as CD, DVD or USB drive. In our case, just press Enter.

![press-enter](press-enter.png)

##  Software updates

At some point soon after installation, you will soon see a message from the Ubuntu software updater. This first update will be fairly large and likely contains security updates so you should install the updates as soon as you see this notice.

![software-updater](software-updater.png)

## All Done? Not Quite.

You now have a Ubuntu Virtual Machine but need to install VirtualBox 'Guest Additions' which will add crutial features to the VM. The most noticable of these is that the virtual machine will display full-screen instead of the small box you have seen so far.

![all done](all-done.png)
  
# Install Guest Additions

## Ubuntu Host

To install Guest Additions you first need to install the build-essential package

```
sudo apt install build-essential
```

From the VirtualBox menu select 'Insert Guest Additions CD image...'

![insert guest additions cd image](insert-guest-additions-cd-image.png)


> TODO: Is this the right order?

![authentication required](run-guest-additions.png)

You will be asked to enter the current user's password.

![authentication required](authentication-required.png)




## Windows