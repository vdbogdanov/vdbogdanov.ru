# Активация лицензий

## Активация ОС

{% code fullWidth="false" %}
```
slmgr /ipk "W269N-WFGWX-YVC9B-4J6C9-T83GX"
slmgr /skms kms.digiboy.ir
slmgr /ato
```
{% endcode %}

## Активация Office

```
cd "C:\Program Files\Microsoft Office\Office16"
cscript ospp.vbs /inpkey:NMMKJ-6RK4F-KMJVX-8D9MJ-6MWKP
cscript ospp.vbs /sethst:kms.digiboy.ir
cscript ospp.vbs /act
```
