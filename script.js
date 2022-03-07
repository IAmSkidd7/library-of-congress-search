var fetchContainer = document.getElementById('fetch-container')

function getApi() {
    var requestUrl = 'https://www.loc.gov/search/?q={}l&fo=json'

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                
                
            }
        })
}