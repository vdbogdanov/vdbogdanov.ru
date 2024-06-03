# Управление LVM дисками

## Полезные команды

```
sudo pvscan    - список физических томов LVM
sudo pvdisplay - список физических LVM разделов
sudo vgdisplay - список групп LVM разделов
sudo lvdisplay - список логических разделов LVM
```

## Создание LVM диска

Создание раздела на диске с файловой системой "Linux LVM":

```
sudo cfdisk /dev/sdb
```

Создание физического LVM раздела:

```
sudo pvcreate /dev/sdb1
```

Создание группы разделов LVM:

```
sudo vgcreate vgdata /dev/sdb1
```

Создание логического тома LVM:

```
sudo lvcreate -L 100G -n data vgdata
sudo lvcreate -l 100%FREE -n data vgdata
```

Форматирование LVM раздела в файловую систему "xfs":

```
sudo mkfs.xfs /dev/vgdata/data
```

## Увеличение LVM раздела

Вход в утилиту "parted":

```
sudo parted /dev/sdb
```

Распределение свободного места на диск:

```
(parted) p
(parted) resizepart 1
End? [20GB]? 100%
(parted) q
```

Сообщение LVM о увеличении физического раздела:

```
sudo pvresize /dev/sdb1
```

Увеличение логического раздела LVM:

```
sudo lvresize --resizefs --size 120G /dev/vgdata/data
```
