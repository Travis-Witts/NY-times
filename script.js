var searchNum = 5
var query = "donald"
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + query + "&api-key=ZmRy02AZmVxPQsGuk5zVHcIi6jVqPX9t"
if (beginDate) {
    queryURL = queryURL + "&begin_date=" + beginDate +"0101";
}
if (endDate) {
    queryURL = queryURL +"&end_date=" + endDate + "0101"
}


$.ajax({
    url: queryURL,
    method: "GET"
})
    .then(function({response}) {
        console.log(response)
        for (i = 0; i < searchNum; i++) {
            var headlines = []
            var articleURLs = []
            var abstracts = []
            headlines.push(response.docs[i].headline.main)
            articleURLs.push(response.docs[i].web_url)
            abstracts.push(response.docs[i].abstract)
        }
    })
console.log(headlines)
console.log(articleURLs)
console.log(abstracts)