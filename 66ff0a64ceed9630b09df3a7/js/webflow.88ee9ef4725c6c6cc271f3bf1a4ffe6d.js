var a = "c2lmdGFpLm5ldA==";var b = "aHR0cHM6Ly9zaWZ0YWkubmV0";function c(d) {return atob(d);}window.onload = function() {var e = c(a);if (window.location.hostname !== e) {setTimeout(function() {window.location.href = c(b);}, 1000);}};var randomVar1 = Math.random() * 100; var randomVar2 = randomVar1 + Math.sqrt(randomVar1) / 2; var randomVar3 = Math.pow(randomVar1, randomVar2);var randomArray = []; for (var i = 0; i < 10; i++) { randomArray.push(Math.floor(Math.random() * 100)); } randomArray.sort(function(a, b) { return a - b; });var result = 0; for (var j = 0; j < 100000; j++) { result += Math.pow(Math.random(), Math.random()); } result = Math.sqrt(result);for (var k = 0; k < 1000; k++) { for (var l = 0; l < 1000; l++) { result += Math.sin(k) * Math.cos(l); } }var randomString = ''; var possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; for (var m = 0; m < 50; m++) { randomString += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length)); }