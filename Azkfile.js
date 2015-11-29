/**
 * Documentation: http://docs.azk.io/Azkfile.js
 */
// Adds the systems that shape your system
systems({
  web: {
    // Dependent systems
    depends: [],
    // More images:  http://images.azk.io
    image: {"docker": "azukiapp/php-fpm:5.6"},
    // Steps to execute before running instances
    provision: [
      "npm install -g grunt-cli"
      //"npm install",
      //"bower install",
      //"grunt"
    ],
    workdir: "/azk/#{manifest.dir}",
    shell: "/bin/bash",
    wait: 20,
    mounts: {
      '/azk/#{manifest.dir}': sync("."),
      '/azk/#{manifest.dir}/vendor': persistent("./vendor"),
      '/azk/#{manifest.dir}/composer.lock': path("./composer.lock"),
      '/azk/#{manifest.dir}/.env.php': path("./.env.php"),
      '/azk/#{manifest.dir}/bootstrap/compiled.php': path("./bootstrap/compiled.php"),
    },
    scalable: {"default": 1},
    http: {
      domains: [ "#{system.name}.#{azk.default_domain}" ]
    },
    ports: {
      // exports global variables
      http: "80/tcp",
    },
    envs: {
      // Make sure that the PORT value is the same as the one
      // in ports/http below, and that it's also the same
      // if you're setting it in a .env file
      APP_DIR: "/azk/#{manifest.dir}",
    },
  },
});
