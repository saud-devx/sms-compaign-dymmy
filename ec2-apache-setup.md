
# Apache Setup Guide for SPA on EC2

This guide helps you configure Apache on EC2 to properly handle SPA routing.

## Enable Required Apache Modules

Make sure these Apache modules are enabled:

```bash
sudo a2enmod rewrite
sudo a2enmod headers
```

## Apache Configuration

Edit your Apache configuration file:

```bash
# For Amazon Linux
sudo nano /etc/httpd/conf/httpd.conf

# For Ubuntu
sudo nano /etc/apache2/sites-available/000-default.conf
```

Add or modify the configuration for your document root:

```apache
<Directory /var/www/html>
    Options Indexes FollowSymLinks
    AllowOverride All
    Require all granted
</Directory>
```

The `AllowOverride All` directive is crucial as it allows the .htaccess file to override Apache's default settings.

## Restart Apache

After making changes:

```bash
# For Amazon Linux
sudo systemctl restart httpd

# For Ubuntu
sudo systemctl restart apache2
```

## Test Your Configuration

Test if your Apache configuration is valid:

```bash
# For Amazon Linux
sudo apachectl configtest

# For Ubuntu
sudo apache2ctl configtest
```

## Common Issues and Solutions

1. **Still getting 404 on refresh:**
   - Check if the .htaccess file was uploaded to the correct location
   - Verify Apache is reading .htaccess files (`AllowOverride All`)
   - Check Apache error logs for clues

2. **Permission issues:**
   - Ensure correct ownership: `sudo chown -R apache:apache /var/www/html/`
   - Set proper permissions: `sudo chmod -R 755 /var/www/html/`

3. **Module not found errors:**
   - Check if all required modules are enabled

## Deployment Workflow

1. Build your React application: `npm run build`
2. Upload the contents of the `dist` directory to `/var/www/html/` on your EC2 instance
3. Make sure to include the `.htaccess` file in the root directory
4. Restart Apache if needed
