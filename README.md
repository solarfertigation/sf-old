# Raspberry Machine Preparation

> Burn RaspOS Image
- [Download RaspyOS] (https://www.raspberrypi.com/software/operating-systems/)
- [Upload OS in SD Card] (https://www.balena.io/etcher/)

- Upload in SD Card file "ssh" & "wpa_supplicant.conf" to enable SSH Protocol and Wi-Fi Connection
- Install and Follow OS Wizard via HDMI
- Find in your network IP Raspy Address (https://angryip.org)

> 1. SSH Connection
```
sudo ssh <raspberrydefaultuser>@<raspberryipaddress>
default hostname: pi | password: raspberry
```
> 2. Aggiornamento lista e pacchetti 
```
sudo apt-get update -y && sudo apt-get upgrade -y
```
> 3. Cambiare Hostname e Password
- Entrare in 1.System Options 
```
sudo raspi-config
```
> 4. Install NodeJS
```
curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash - && sudo apt-get install -y nodejs
```
- Alternative NodeJS Installation Method for ARM61
```
wget https://nodejs.org/dist/v10.15.3/node-v10.15.3-linux-armv6l.tar.xz | wget https://nodejs.org/dist/v11.9.0/node-v11.9.0-linux-armv6l.tar.xz
tar xvf node-v10.15.3-linux-armv6l.tar.xz | tar xvf node-v11.9.0-linux-armv6l.tar.xz
cd node-v10.15.3-linux-armv6l | cd node-v11.9.0-linux-armv6l
sudo cp -R bin/* /usr/bin/
sudo cp -R lib/* /usr/lib/
sudo apt-get update && sudo apt-get upgrade
sudo apt-get install build-essential
```

- Versione di NodeJS installata
```
node -v
```
> 5. Install GIT
```
sudo apt-get install git -y
```
- Versione di GIT installata
```
git --version
```
> 6. Install Nmap - Discover Raspy IP Address on LAN/WLAN
```
sudo apt update
```
```
sudo apt install -y nmap
```
> 7. Controllo Desktop Remoto: Install RealVNC Server/Viewer
- SSH/VNC Activation
```
sudo raspi-config
```
3 Interface Options --> SSH/VNC ON
```
sudo apt-get update
sudo apt-get install realvnc-vnc-server
sudo apt-get install realvnc-vnc-viewer
```
> 8. Controllo Remoto via SSH: Install Remote.it
```
sudo apt update
```
```
sudo apt install remoteit -y
```
[Device Scanner] - (http://find.remote.it/)
