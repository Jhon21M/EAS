//!Integracion de la grafica........
const $ctx=document.querySelector("#mi-grafico")
const names=['Enero','Febrero','Marzo','Abril','Mayo']
const edades=[3100,2300,2846,2967,3210]
const grafica=new Chart($ctx,{
    type:'bar',
    data:{
       labels: names,
       datasets: [{
        label:'Ventas',
        data:edades,
        backgroundColor:[
            'rgba(0, 183, 255,0.2)',
            'rgba(66, 71, 76,0.2)',
            'rgba(25, 67, 174,0.2)',
            'rgba(253, 206, 18,0.2)',
            'rgba(212, 75, 71,0.2)'
        ],
        borderColor:[
            'rgba(0, 183, 255,1)',
            'rgba(66, 71, 76,1)',
            'rgba(25, 67, 174,1)',
            'rgba(253, 206, 18,1)',
            'rgba(212, 75, 71,1)'
        ],
        borderWidth:1.5
       }]
    },
    options:
    {
        scales:{
            yAxes:[{
                ticks:{
                  beginAtZero:true
                }
            }],
        },
    }
}); 



