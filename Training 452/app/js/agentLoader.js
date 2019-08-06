function loadAgents(){
    $.getJSON('data.json', function(data) {
        var template = $('#agentTpl').html();
        Mustache.parse(template); 
        var rendered = Mustache.render(template, data);
        $('#agent-container').html(rendered);
    });
}