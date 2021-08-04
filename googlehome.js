$("#form").submit(function (e) {
    e.preventDefault();

    var query = $("#inptsbar").val()

    var keyAPI = '04fc3169f54b39fa600aeff4c964147b'

    var result
    var knowledge

    var url = 'http://api.serpstack.com/search?access_key=' + keyAPI + '&type=web&query=' + query
    
    console.log(url)

    $.get(url, function (data) {

        $("#result").html('')
        console.log("data:", data)

        data.organic_results.forEach(res => {

            result = `
            
            <h2>${res.title}</h2><br><a href="${res.url}">${res.url}</a>
            <p>${res.snippet}</p><div id="linez"><div/>

            `

            $("#result").append(result)
        })

        data.organic_results.forEach(res => {

            knowledge = `
            
            <h2>${res.title}</h2><br><a href="${res.url}">${res.url}</a>
            <p>${res.snippet}</p><div id="linez"><div/>

            `

            $("#result").append(result)
        })
    })
    
})