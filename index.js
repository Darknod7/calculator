document.querySelector('table').addEventListener('click',function(e){
    if(e.target.textContent === '='){
        document.getElementById('result').textContent = eval(document.getElementById('result').textContent)
    }
    else if(e.target.textContent === 'C'){
        document.getElementById('result').textContent = ''
    }
    else if(e.target.textContent === '⌫'){
        document.getElementById('result').textContent = document.getElementById('result').textContent.slice(0,-1)
    }
    else if(e.target.textContent === 'x²'){
        document.getElementById('result').textContent += '**2'
    }
    else if(e.target.textContent === '√'){
        document.getElementById('result').textContent = Math.sqrt(eval(document.getElementById('result').textContent))
    }
    else if(e.target.tagName === 'TD'){
        document.getElementById('result').textContent  += e.target.innerHTML
    }
})