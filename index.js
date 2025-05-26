document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("textlist");
    const addBtn = document.getElementById("addbtn");
    const itemContainer = document.getElementById("additem");
    const errorDiv = document.getElementById("error");

    function addItem() {
        const value = input.value.trim();

        if (value === "") {
            errorDiv.textContent = "Error: input is empty!";
            return;
        }

        errorDiv.textContent = ""; // Clear error

        // Create item container
        const item = document.createElement("div");
        item.className = "todo-item";

        // Create text span
        const textSpan = document.createElement("span");
        textSpan.textContent = value;
        textSpan.className = "todo-text";

        // Create delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Remove";
        deleteBtn.className = "delete-btn";

        // Delete on click
        deleteBtn.addEventListener("click", function () {
            itemContainer.removeChild(item);
        });

        item.appendChild(textSpan);
        item.appendChild(deleteBtn);
        itemContainer.appendChild(item);
        input.value = "";
    }

    addBtn.addEventListener("click", addItem);

    input.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            addItem();
        }
    });
});
