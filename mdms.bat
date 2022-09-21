@echo off
echo downloading git bash
powershell -Command "Invoke-WebRequest https://github.com/git-for-windows/git/releases/download/v2.37.3.windows.1/Git-2.37.3-64-bit.exe -Outfile gitbash.exe"

echo downloading tortoise
powershell -Command "Invoke-WebRequest https://osdn.net/projects/tortoisesvn/storage/1.14.3/Application/TortoiseSVN-1.14.3.29387-x64-svn-1.14.2.msi/ -Outfile tortoise.msi"

echo downloading gwt zip file
powershell -Command "Invoke-WebRequest https://github.com/gwtproject/gwt/releases/download/2.10.0/gwt-2.10.0.zip -Outfile gwt.zip"
echo unzipping the file
Call :UnZipFile "C:\Users\keshriha\Desktop" "C:\Users\keshriha\Desktop\demo.zip"



echo setting environment variables
setx /M ANT_MDMS "D:\MDMS_HOME\ant\ant197"
setx /M EA_JAVA_DEVELOPER "MDMS_DEV_KESHRIHA"
setx /M HOME "C:\Git"
setx /M JAVA_HOME "D:\MDMS_HOME\jdk180_92"
setx /M MAVEN_MDMS "D:\MDMS_HOME\maven339"

echo setting path of system path variables
::if below command is not executed altogether run it one by one
setx /M PATH "%PATH%;C:\Program Files\Java\jdk1.8.0_311\bin; D:\MDMS_HOME\gwt-2.10.0; D:\MDMS_HOME\ant\ant197\bin; D:\MDMS_HOME\maven339\bin;"

echo building ant
::do we need to go to the containing folder to run this command?
ant clean build-all-no-unit

echo installing maven
::do we need to go to the containing folder to run this command?
mvn clean install --Dmaven.text.skip=true

echo installing git 
::"path/to/file/with.extension" /S /norestart

echo installing tortoise
::msiexec /i "whole path to msi file/filename.extension" /qn /norestart

echo downloading parent repo
::if only ssh-key is configured
::git clone "ssh://%username%@gerrit-am.landisgyr.net:29418/mdms-lg-parent" folder_name

:UnZipFile <ExtractTo> <newzipfile>
set vbs="%temp%\_.vbs"
if exist %vbs% del /f /q %vbs%
>%vbs%  echo Set fso = CreateObject("Scripting.FileSystemObject")
>>%vbs% echo If NOT fso.FolderExists(%1) Then
>>%vbs% echo fso.CreateFolder(%1)
>>%vbs% echo End If
>>%vbs% echo set objShell = CreateObject("Shell.Application")
>>%vbs% echo set FilesInZip=objShell.NameSpace(%2).items
>>%vbs% echo objShell.NameSpace(%1).CopyHere(FilesInZip)
>>%vbs% echo Set fso = Nothing
>>%vbs% echo Set objShell = Nothing
cscript //nologo %vbs%
if exist %vbs% del /f /q %vbs%

pause > nil