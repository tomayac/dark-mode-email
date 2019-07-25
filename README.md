# 🌒 Dark Mode Email

It is possible to send email 📧 that is sensitive to the user's `prefers-color-scheme` (☀️/🌒) setting.

## Dark Mode Email Template

The below is a future-proof email template for dark mode:

```html
<html>
  <head>
    <meta name="color-scheme" content="light dark">
    <meta name="supported-color-schemes" content="light dark">
    <style>
      :root {
        color-scheme: light dark;
        supported-color-schemes: light dark;
      }
      body {
        background-color: #eee;
        color: #111;
      }
      @media (prefers-color-scheme: dark) {
        body {
          background-color: #111;
          color: #eee;
        }
      }
    </style>
  </head>
  <body>
    🖖 Hello Dark Mode!
  </body>
</html>
```

## Dark Mode Email Example

The screenshots below show a slightly more involved
[example](https://github.com/tomayac/dark-mode-email/blob/05230b181bb902e9ae968cfb43024a1e27a0224a/index.js#L22-L80)
that includes a dynamically switching image, because, why not…
On email clients that currently don't support `prefers-color-scheme`,
it silently falls back to light mode.

<table>
  <tr>
    <td>
      <figure>
        <img style="border:solid 1px black;" width="200" alt="" src="https://user-images.githubusercontent.com/145676/61888762-658d4d80-af04-11e9-84ae-3255213fb9da.PNG">
        <figcaption><br>iOS Mail (dark mode)</figcaption>
      </figure>
    </td>
    <td>
      <figure>
        <img width="200" alt="" src="https://user-images.githubusercontent.com/145676/61888763-658d4d80-af04-11e9-8aa0-fab1104ae687.PNG">
        <figcaption><br>iOS Mail (light mode)</figcaption>
      </figure>      
    </td>
    <td>
      <figure>
        <img width="200" alt="" src="https://user-images.githubusercontent.com/145676/61888764-658d4d80-af04-11e9-815e-300616660253.PNG">
        <figcaption><br>iOS Gmail (fallback light mode)</figcaption>
      </figure>    
    </td>
  </tr>
  <tr>
    <td colspan="3">
      <figure>
        <img width="700" alt="" src="https://user-images.githubusercontent.com/145676/61888754-5efed600-af04-11e9-828d-8b2251343485.png">
        <figcaption><br>Desktop Gmail (fallback light mode)</figcaption>
      </figure>                
    </td>
  </tr>
</table>

## Who Made This

Made with HTML and CSS by 🐦 [@tomayac](https://twitter.com/tomayac).

## License

Apache 2.0.
