
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

locationRouteLibrary.findRoute('New York', 'Los Angeles', apiKey,  (route) => {
    console.log(route);
});
```
Bu kod, "New York" ve "Los Angeles" arasındaki rotayı hesaplar
ve sonuç olarak rota bilgilerini ekrana yazdırır.

## Ön Koşullar
Bu kütüphaneyi kullanabilmek için bir Google Maps API anahtarına ihtiyacınız vardır. Google Cloud Console'da bir proje oluşturarak ve
Google Maps API'yi etkinleştirerek bir anahtar alabilirsiniz.


## Lisans

Bu kütüphane MIT Lisansı ile lisanslanmıştır.
Detaylı bilgi için LICENSE dosyasına bakın.

[MIT](https://choosealicense.com/licenses/mit/)

