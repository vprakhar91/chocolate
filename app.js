document.addEventListener("DOMContentLoaded", function () {
    const chocolates = document.querySelectorAll(".chocolate");
    const selectedChocolates = document.getElementById("selected-chocolates");
    const totalPriceElement = document.getElementById("total-price");
    const maxItems = 8;

    let selectedItems = [];
    let totalPrice = 0;

    function updateUI() {
       
        selectedChocolates.innerHTML = "";

       
        selectedItems.forEach((item, index) => {
            const selectedChocolate = document.createElement("li");

            const deleteButton = document.createElement("button");
            deleteButton.className = "delete-btn";
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", () => {
                removeItem(index);
            });

            selectedChocolate.textContent = item.name;
            selectedChocolate.appendChild(deleteButton);

            selectedChocolates.appendChild(selectedChocolate);
        });

        totalPriceElement.textContent = totalPrice.toFixed(2) + " USD";
    }

    function removeItem(index) {
        if (index >= 0 && index < selectedItems.length) {
            const removedItem = selectedItems.splice(index, 1)[0];
            totalPrice -= removedItem.price;
            totalPrice = parseFloat(totalPrice.toFixed(2));
            updateUI();
        }
    }

    chocolates.forEach((chocolate) => {
        const addButton = chocolate.querySelector(".add-btn");
        const price = parseFloat(addButton.getAttribute("data-price"));
        const chocolateName = chocolate.querySelector("p").textContent;

        addButton.addEventListener("click", () => {
            if (selectedItems.length < maxItems) {
                selectedItems.push({ name: chocolateName, price: price });
                totalPrice += price;
                totalPrice = parseFloat(totalPrice.toFixed(2));
                updateUI();
            } else {
                alert("You've reached the maximum limit of 8 items in your pack.");
            }
        });
    });
});
