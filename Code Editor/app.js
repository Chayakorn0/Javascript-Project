function displayResult() {
    let codeHtml = document.getElementById('html').value
    let codeCss = document.getElementById('css').value
    let codeJs = document.getElementById('js').value
    let resultEl = document.getElementById('result')
    resultEl.contentDocument.body.innerHTML = `${codeHtml}<style>${codeCss}</style>`
    resultEl.contentWindow.eval(codeJs)
}