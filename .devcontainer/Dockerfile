# Base Image: PHP 8.2 FPM
FROM php:8.2-fpm

# Instalar dependências do sistema
RUN apt-get update && apt-get install -y \
    zip unzip git curl libpng-dev libonig-dev libxml2-dev \
    sqlite3 libsqlite3-dev gnupg ca-certificates lsb-release \
    sudo \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common \
    nodejs \
    npm \
    docker.io \
    docker-compose

# Instalar Docker Compose V2
RUN curl -SL https://github.com/docker/compose/releases/download/v2.33.1/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose \
    && chmod +x /usr/local/bin/docker-compose

# Instalar o Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Expor a porta do PHP-FPM
EXPOSE 9000

CMD ["php-fpm"]
