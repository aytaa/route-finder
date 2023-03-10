[![Build Status](https://app.travis-ci.com/aytaa/route-finder.svg?branch=master)](https://app.travis-ci.com/aytaa/route-finder)

# Konum Rota Kütüphanesi

Bu kütüphane, Google Maps API kullanarak iki konum arasındaki rotayı hesaplar. Kütüphane,
node.js projelerinde kullanılabilecek bir JavaScript modülüdür.

# Kurulum
Kütüphaneyi kurmak için aşağıdaki komutu kullanın:




```bash
npm i @unalayta/route-finder

```


## Kullanım

Kütüphaneyi kullanmak için aşağıdaki örneği kullanabilirsiniz:

```javascript
const locationRouteLibrary = require('@unalayta/route-finder');

// Google Maps API anahtarını değişkenden alın
const apiKey = process.env.API_KEY;

locationRouteLibrary.findRoute('New York', 'Los Angeles', apiKey, traffic_model , (route) => {
  console.log(route);
});
```
Bu kod, "New York" ve "Los Angeles" arasındaki trafik durumu ile beraber anlık olarak rotayı hesaplar
ve sonuç olarak rota bilgilerini ekrana yazdırır.

## Ön Koşullar
Bu kütüphaneyi kullanabilmek için bir Google Maps API anahtarına ihtiyacınız vardır. Google Cloud Console'da bir proje oluşturarak ve
Google Maps API'yi etkinleştirerek bir anahtar alabilirsiniz.


## Lisans

Bu kütüphane MIT Lisansı ile lisanslanmıştır.
Detaylı bilgi için LICENSE dosyasına bakın.

[MIT](https://choosealicense.com/licenses/mit/)

