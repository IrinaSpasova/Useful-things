Правят се с ![]() :

![Снимка1](https://stock.evgenidinev.com/photo/lavender-9904d2.jpg)

## Aко искаме текст при hover: 
![Снимка1](https://stock.evgenidinev.com/photo/lavender-9904d2.jpg "Снимка1")

[] - може да се оставят празни, до да има текст е важно за достъпността.
\
\
\

## Снимка с препратка (може да е число и текст):
![Снимка2][pic]

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, mauris quis consectetur bibendum, libero mi gravida turpis.

[pic]: https://maksoft.net/img_preview.php?image_file=web/images/upload/maksoft/web_images.png&img_width=300&ratio=strict

## Снимка с препратка към по-голяма снимка:

[![](https://picsum.photos/100/100)](https://picsum.photos/200/200)

или

[<img src="https://picsum.photos/100/100">](https://picsum.photos/200/200)

или

<img src="dog.jpg" width="500" height="500" alt="">

<style>
    img {
        width:200px;
    }
</style>

! За фигура се пише HTML:

<figure>
<img src="https://media/cc0-images/elephant-660-480.jpg"
         alt="Elephant at sunset">
<figcaption>An elephant at sunse
</figcaption>
</figure>

<style>
    figure {
    border: thin #c0c0c0 solid;
    display: flex;
    flex-flow: column;
    padding: 5px;
    max-width: 220px;
    margin: auto;
}

img {
    max-width: 220px;
    max-height: 150px;
}

figcaption {
    background-color: #222;
    color: #fff;
    font: italic smaller sans-serif;
    padding: 3px;
    text-align: center;
}
</style>

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption