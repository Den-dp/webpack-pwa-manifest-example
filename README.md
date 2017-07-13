# webpack-pwa-manifest-example

Windows bug repro for `webpack-pwa-manifest`

```
npm i
npm start
```

Back slashes in href

```html
<!DOCTYPE html>
<html>
  <head>
    ...
  <link rel="manifest" href="\dist\manifest.4466c3f4fea7b27f07a4ac0a5cec3584.json" />
  </head>
  <body>
  ...
  </body>
</html>
```

double back slashes in json

```json
{
  "icons": [
    {
      "src": "\\dist\\icon_192x192.6a8a89c14be3a2a64da657be4fa07be6.png",
        ...
    }
  ],
  ...
}
```
