
# Server Setup Guide for SPA Routing

To ensure your Single Page Application (SPA) works correctly when deployed to your server, you need to configure your web server to handle client-side routing properly.

## Apache Server

If you're using Apache, create a `.htaccess` file in your build directory with the following content:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

## Nginx Server

If you're using Nginx, add this to your server block:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## Other Servers

For other web servers, the principle is the same: redirect all requests that don't match a file to index.html, allowing your React Router to handle the routing.
