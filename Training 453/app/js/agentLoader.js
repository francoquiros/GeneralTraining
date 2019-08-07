function loadAgents(){
    getAgents
    .then(data => {
        var template = $('#agentTpl').html();
        Mustache.parse(template); 
        var rendered = Mustache.render(template, data);
        $('#agent-container').html(rendered);})
        
    .catch(error => {console.log(error);})
}

let getAgents = new Promise(
    function(resolve, reject){
        let data = $.getJSON('https://api.myjson.com/bins/1bpb69');
        let error = 'Could not load data';
        
        resolve(data);
        reject(error);
    }
)
