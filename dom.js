const allSeat=document.getElementsByClassName('seatBtn')


for(const seat of allSeat){
    seat.addEventListener('click', function(e){
    const seatCount=document.getElementById('seatCount').innerText;
     const seatCountParseint=parseInt(seatCount)
     
     if(seatCountParseint>=4){
        alert('you already four sit booked')
     }
     else{
        document.getElementById('seatCount').innerText=seatCountParseint+1;
        const selectContainer=document.getElementById('seatName')
     const seatName=e.target.innerText;
     const p=document.createElement('p')
     p.innerText=seatName;
     const classNameContainer=document.getElementById('className')
     const p2=document.createElement('p')
     p2.innerText='economy'

     const fire=document.getElementById('fire')
     const p3=document.createElement('p');
     p3.innerText=550;

     fire.appendChild(p3)
     classNameContainer.appendChild(p2)
     selectContainer.appendChild(p)

     const rightSit = e.target;
    rightSit.style.backgroundColor = 'green';

    const seatLeft=document.getElementById('seat-left').innerText;
     const seatLeftParseint=parseInt(seatLeft);
     document.getElementById('seat-left').innerText=seatLeftParseint-1;



     const totalPrice=document.getElementById('totalPrice').innerText;
     const totalPriceParsInt=parseInt(totalPrice)
    const OneTicketPrice=550
    document.getElementById('totalPrice').innerText=totalPriceParsInt+OneTicketPrice


     const grandTotal=document.getElementById('grandTotal').innerText
     const grandTotalParseInt=parseInt(grandTotal)
     document.getElementById('grandTotal').innerText=grandTotalParseInt+OneTicketPrice
     }

     
     console.log(grandTotal);
    })
}

// cupon code

function cupon(){
    const apply=document.getElementById('apply').value
    const grandTotal=document.getElementById('grandTotal').innerText
    const cuponHide=document.getElementById('cuponHide')
    console.log(grandTotal);
    if(apply==="NEW15"){
        const discount=grandTotal*0.15
        const discountedTotal = grandTotal - discount;
        document.getElementById('grandTotal').innerText=discountedTotal;
        cuponHide.classList.add('hidden')
        

    }
    else if(apply==='Couple 20'){
        const discount=grandTotal*0.20;
        const discountedTotal = grandTotal - discount;
        document.getElementById('grandTotal').innerText=discountedTotal;
        cuponHide.classList.add('hidden')

    }
    else{
        alert('wrong cupon')
    }
}