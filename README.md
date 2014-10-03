# socket.io-ndjson

Install with `npm install socket.io-ndjson -g`. It will install a bin called `socketio`.


## Usage

For a website with a socket.io code like this

```js
var socket = io('https://chat.meatspac.es/')
socket.on('message', function (data) {
  console.log(data)
})

```

You can use the cli like this:

```
socketio https://chat.meatspac.es/ message
{"message":"bacon pancake","fingerprint":"56a2750091fac36f34bacedakjkj0f6b6","media":"data:video/webm;base64,..","owner":false,"ttl":600000,"key":"1412319095032!516742a0-9556-4c76-82ac-5786d916de98","created":1412319095032}
{"message":"bacon pancake, making baking pancake \o/","fingerprint":"56a2750091fac36f34bacedakjkj0f6b6","media":"data:video/webm;base64,..","owner":false,"ttl":600000,"key":"1412319095032!516742a0-9556-4c76-82ac-5786d916de98","created":1412319095032}
```