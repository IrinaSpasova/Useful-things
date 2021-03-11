1. Отиваме на File-Preferences-Settings;
2. В полето за търсене в дясно пишем Launch и избираме опцията Debug;
3.От Debyg избираме Edit in settings.jso;
4. Пишем в квадратните скоби (след като отворим къдрави скоби) на configurations следния код

                "type": "node",
                "request": "launch",
                "name": "Launch Program",
                "program": "${file}"
                
   ( Можем да си го копираме и от тук: https://pastebin.com/fHVqzN6f

5. Готово!
