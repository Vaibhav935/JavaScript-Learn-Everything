jab bhi aaap click krte ho ya koi bhi event raise krte ho to apka jo event fow do phases mein chalta hai.

phase 1: event top lever element se neeche ki taraf aayega
phase 2: event raised element se parent ke taraf jaayega

aur phle phase 1 hoti hai -- Capturing 

Hamesha phase 1 hi phale hoti hai par wo by default off rahati hai agar tm use onn kr do to phle phase 1 ka ans milega 

aur dusra bubbling phase hota hai 

bubbling phase by default onn rahata hai to wo chal jata hai aur capturing phase onn krne me chalta hai 



Event Bubbling is a concept where if any element has not given event listener then the performed event get passed to it's parent element in search of that event until the window objects, if it finds that parent event gets triggred if not nothing happens.
But there's a catch let say the element we clicked had an event but still it will bubble and it's all parent element's event will also get targeted. Example available in code.
*FROM INSIDE TO OUTSIDE*
