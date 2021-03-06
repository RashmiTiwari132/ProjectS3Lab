#Set the base image to Ubuntu
FROM ubuntu:14.04

#File Author / Mainetainer
MAINTAINER Maintainer S3LabUF

# Update the sources list
RUN apt-get update

#Install Python and Basic Python Tools
RUN apt-get install -y python python-dev python-distribute python-pip

#Copy the application folder inside the container
ADD /my_application /my_application

#Set the default directory where CMD will execute
WORKDIR /my_application

#Set the default command to execute
CMD python samplepython.py
