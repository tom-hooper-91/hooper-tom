FROM php:fpm-alpine
WORKDIR /app
COPY . /app
# Install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer install