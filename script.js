

function getElement(id) {
    return document.getElementById(id);
}

getElement("service-box").addEventListener("click", function (e) {

    // Heart counted
    if (e.target.classList.contains("click-heart")) {
        const calculateHeart = getElement("total-heart").innerText;
        const currentHeart = Number(calculateHeart) + 1;
        getElement("total-heart").innerText = currentHeart;
    }
    //copy counted

if (e.target.classList.contains("click-copy")) {
    // total copy 
    const calculateCopy = getElement("total-copy").innerText;
    const currentCopy = Number(calculateCopy) + 1;
    getElement("total-copy").innerText = currentCopy;


    const card = e.target.closest(".bg-white");
    const number = card.querySelector(".service-number").innerText;


    navigator.clipboard.writeText(number).then(() => {
        // Alert
        alert(`Number Copied: ${number}`);
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
}



    // Call button clicked
    if (e.target.classList.contains("alert-call")) {
        const totalCoinElement = getElement("total-coin");
        let totalCoin = Number(totalCoinElement.innerText);

        if (totalCoin < 20) {
            alert("❌Not enough coins. At least 20 coins needed");
            return;
        }

        // Coin quantity
        totalCoin -= 20;
        totalCoinElement.innerText = totalCoin;

        const card = e.target.closest(".bg-white");
        const title = card.querySelector(".service-title").innerText;
        const number = card.querySelector(".service-number").innerText;
        const callText = e.target.innerText;

        // Alert 
        alert(`${callText} ${title} ${number}`);

        // Call history 
        const callHistoryContainer = document.querySelector(".flex-1.overflow-y-auto"); // right side container
        const timeNow = new Date();
        const formattedTime = timeNow.toLocaleTimeString(); 

        const historyItem = document.createElement("div");
       
        historyItem.innerHTML = `
                  <div class="flex-1 overflow-y-auto space-y-3 text-sm text-gray-600">
        <div class="flex justify-between bg-gray-100 p-3 rounded-lg">
                      <p><span class="font-bold text-black">${title}</span><br><span>${number}</span></p>
            <p>${formattedTime}</p>
          <p></p>
        </div>
      </div>
        `;

        callHistoryContainer.prepend(historyItem); 
    }
   


    

});
    //clear button
    document.getElementById('btn-clear').addEventListener('click',function(){
    const callHistoryContainer = getElement('call-history-container');
    callHistoryContainer.innerHTML = "";

});


