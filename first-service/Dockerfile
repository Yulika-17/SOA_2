FROM openjdk:17-jdk-slim

# Создаём директорию для приложения
WORKDIR /app

# Аргумент для JAR-файла
ARG JAR_FILE=target/first-service-0.0.1-SNAPSHOT.jar

# Копируем JAR-файл
COPY ${JAR_FILE} app.jar

# Команда запуска
ENTRYPOINT ["java", "-jar", "app.jar"]
