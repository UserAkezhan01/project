'use-strict';

// console.log (document.body.lastChild);
// console.log (document.querySelector ('#btn').parentElement);
// console.log (document.querySelector ('#nav').nextElementSibling);

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }

    console.log (node);
}