console.log('我是main.js')

// getCSS.onclick = () => {
//   const request = new XMLHttpRequest()
//   request.open('GET', '/style.css')

//   request.onload = () => {
//     console.log('请求css成功了')
//     console.log('request.response:')
//     console.log(request.response)
//     console.log('------')
//     // 创建css标签
//     const style = document.createElement('style')
//     style.innerHTML = request.response
//     document.head.appendChild(style)
//   }

//   request.onerror = () => {
//     console.log('请求css失败了')
//   }

//   request.send()
// }

// 加载 CSS
getCSS.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/style.css')
  request.onreadystatechange = () => {
    console.log(request.readyState)
    if (request.readyState === 4) {
      // 用 2xx 的状态码来判断请求成功, 失败一般是 4xx 或 5xx
      if (request.status >= 200 && request.status < 300) {
        const style = document.createElement('style')
        style.innerHTML = request.response
        document.head.appendChild(style)
        alert('加载CSS成功')
      } else {
        alert('加载CSS失败')
      }
    }
  }

  request.send()
}

// 加载 JS
getJS.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/2.js')
  request.onload = () => {
    console.log('请求js成功了')
    console.log('request.response:')
    console.log(request.response)

    const script = document.createElement('script')
    script.innerHTML = request.response
    document.body.appendChild(script)

    console.log('------')
  }
  request.onerror = () => {
    console.log('请求js失败了')
  }
  request.send()
}

// 加载 HTML
getHTML.onclick = () => {
  const request = new XMLHttpRequest
  request.open('GET', '/3.html')
  request.onload = () => {
    console.log('请求HTML成功了')
    console.log('request.response:')
    console.log(request.response)
    console.log('------')

    const div = document.createElement('div')
    div.innerHTML = request.response
    document.body.appendChild(div)
  }
  request.onerror = () => {
    console.log('请求HTML失败了')
  }
  request.send()
}

// 加载 XMXL
getXML.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/4.xml')
  request.onreadystatechange = () => {
    console.log(request.readyState)
    if (request.readyState === 4) {
      // 用 2xx 的状态码来判断请求成功, 失败一般是 4xx 或 5xx
      if (request.status >= 200 && request.status < 300) {
        console.log('请求XML成功了')
        console.log('request.response:')
        console.log(request.responseXML)
        const dom = request.responseXML
        const text = dom.getElementsByTagName('warning')[0].textContent
        console.log(text.trim()) //trim() 取出多余的空格跟回车
        console.log('------')

        // alert('加载XML成功')
      } else {
        alert('加载XML失败')
      }
    }
  }
  request.send()
}

// 加载JSON
getJSON.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/5.json')
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response)
      const object = JSON.parse(request.response)
      console.log(object)
    }
  }
  request.send()
}