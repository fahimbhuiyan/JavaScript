function plotHist(){
    //You can easily use numbers in x
    var xOld = $('#x').val().split("");
    var w=$('#w').val().split("");
    
    var x=[];
    for(var i=0;i<xOld.length;i++){//checks for only alphabets in word
        if(w.indexOf(xOld[i])!=-1){
            x.push(xOld[i]);
    }
    }
    
    alert(x);
    
    var histElements = {
        x: x,
        type: 'histogram',
        marker: {color: '#FFC300',},
    };
    
    var layout = {
        bargap: 0.05,
        bargroupgap: 0.5,
        barmode: "overlay",
        title: "Histogram",
        xaxis: {title: "Values",},
        yaxis: {title: "Count"},   
    };
    
    var data = [histElements];

    //Using ID for div to plot the graph
    Plotly.newPlot("graph", data, layout);
    
    }