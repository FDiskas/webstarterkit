FROM nimmis/apache

MAINTAINER nimmis <kjell.havneskold@gmail.com>

# disable interactive functions
ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update && \
apt-get install -y php5 libapache2-mod-php5  \
php5-fpm php5-cli php5-mysqlnd php5-pgsql php5-sqlite php5-redis npm acl \
php5-apcu php5-intl php5-imagick php5-mcrypt php5-json php5-gd php5-curl && \
php5enmod mcrypt && \
rm -rf /var/lib/apt/lists/* && \
cd /tmp && curl -sS https://getcomposer.org/installer | php && mv composer.phar /usr/local/bin/composer && \
npm upgrade -g npm && npm install -g gulp && npm install -g bower && npm install -g grunt-cli && ln -s /usr/bin/nodejs /usr/bin/node

RUN usermod -u 1000 www-data

WORKDIR /var/www

ONBUILD RUN cd /var/www && npm install && composer install && bower install --allow-root
