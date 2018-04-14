FROM java

ADD wait-for-it.sh /opt/wait-for-it.sh
ADD target/apiindex-microbundle.jar /opt/microbundle.jar

RUN chmod +x /opt/wait-for-it.sh

CMD [ "java", "-jar", "/opt/microbundle.jar" ]