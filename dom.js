const allSeat=document.getElementsByClassName('seatBtn')


for(const seat of allSeat){
    seat.addEventListener('click', function(){
    const seatCount=document.getElementById('seatCount').innerText;
     const seatCountParseint=parseInt(seatCount)
     console.log(seatCountParseint);
     document.getElementById('seatCount').innerText=seatCountParseint+1;


    })
}