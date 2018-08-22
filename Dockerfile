FROM tomcat:7-jre8

ARG SERVICE_VER
ARG CLIENT_VER

ENV ZAFIRA_SERVICE_VERSION=${SERVICE_VER}
ENV ZAFIRA_CLIENT_VERSION=${CLIENT_VER}
ENV ZAFIRA_URL=http://localhost:8080
ENV ZAFIRA_USER=qpsdemo
ENV ZAFIRA_PASS=qpsdemo
ENV ZAFIRA_JDBC_URL=jdbc:postgresql://localhost:5432/postgres
ENV ZAFIRA_JDBC_USER=postgres
ENV ZAFIRA_JDBC_PASS=postgres

ENV ZAFIRA_REDIS_HOST=redis
ENV ZAFIRA_REDIS_PORT=6379

ENV ZAFIRA_RABBITMQ_HOST=localhost
ENV ZAFIRA_RABBITMQ_PORT=5672
ENV ZAFIRA_RABBITMQ_USER=guest
ENV ZAFIRA_RABBITMQ_PASS=guest
ENV ZAFIRA_RABBITMQ_STOMP_HOST=rabbitmq
ENV ZAFIRA_RABBITMQ_STOMP_PORT=61613

ENV ZAFIRA_LDAP_ENABLED=false
ENV ZAFIRA_LDAP_PROTOCOL=ldap
ENV ZAFIRA_LDAP_SERVER=localhost
ENV ZAFIRA_LDAP_PORT=389
ENV ZAFIRA_LDAP_DN=ou=People,dc=qaprosoft,dc=com
ENV ZAFIRA_LDAP_SEARCH_FILTER=uid
ENV ZAFIRA_LDAP_USER=
ENV ZAFIRA_LDAP_PASSWORD=

ENV ZAFIRA_NEWRELIC_ENABLED=false
ENV ZAFIRA_NEWRELIC_KEY=
ENV ZAFIRA_NEWRELIC_APP=zafira
ENV ZAFIRA_NEWRELIC_AUDIT_MODE=false
ENV ZAFIRA_NEWRELIC_LOG_LEVEL=info

ENV ZAFIRA_ELASTICSEARCH_URL=

ENV ZAFIRA_SELENIUM_URL=http://localhost:4444/wd/hub

RUN apt-get update && apt-get install zip

COPY sources/zafira-ws/target/zafira-ws.war ${CATALINA_HOME}/temp/
COPY sources/zafira-web/target/zafira.war ${CATALINA_HOME}/temp/
COPY tools/newrelic.zip ${CATALINA_HOME}/temp/
COPY entrypoint.sh /

EXPOSE 8080

ENTRYPOINT /entrypoint.sh
