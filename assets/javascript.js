/* New York Times API Key and URL */
const nytAPI = "&api-key=4dEHuWfqFQCd7e4ud2acg7d3cGc8EA9z";
const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=4dEHuWfqFQCd7e4ud2acg7d3cGc8EA9z"
/* Search function */
function artSearch (userSearch) {
    
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + userSearch + nytAPI;
    $.ajax({
        url: queryURL,
        method: "Get"
    }).then(function(response) {
        /* Set response info to local storage */
        var localArr = [
            {
                id: "0",
                headline: response.response.docs[0].headline.main,
                snippet: response.response.docs[0].snippet,
                artURL: response.response.docs[0].web_url
            }, 
            {
                id: "1",
                headline: response.response.docs[1].headline.main,
                snippet: response.response.docs[1].snippet,
                artURL: response.response.docs[1].web_url
            },
            {
                id: "2",
                headline: response.response.docs[2].headline.main,
                snippet: response.response.docs[2].snippet,
                artURL: response.response.docs[2].web_url
            },
            {
                id: "3",
                headline: response.response.docs[3].headline.main,
                snippet: response.response.docs[3].snippet,
                artURL: response.response.docs[3].web_url
            },
            {
                id: "4",
                headline: response.response.docs[4].headline.main,
                snippet: response.response.docs[4].snippet,
                artURL: response.response.docs[4].web_url
            }
        ];
        localStorage.setItem("results", localArr);
        console.log(localArr);
        console.log(response.response);
    })
};
/* Get local storage function */
function getLocal () {
    /* Empty Top Articles section */
    
};