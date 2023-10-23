document.addEventListener('DOMContentLoaded', () => {
    const body = document.body
    function parser(element) {
        const node = element.childNodes
        node.forEach(item => {
            if(item.nodeName == 'H1') {
                return console.log(item)
            }
            parser(item)
        })
    }
    parser(body)
})