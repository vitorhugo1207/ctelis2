FROM php:8.2-fpm
# Instala extensões PHP necessárias
RUN apt-get update && apt-get install -y \
    zip unzip git curl libpng-dev libonig-dev libxml2-dev \
    && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd
# Instala Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer
