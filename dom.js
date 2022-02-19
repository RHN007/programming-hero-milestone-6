document.getElementById("add-border").addEventListener("click", function() {
    const container = document.getElementById("friend-container");
    container.style.border = "4px solid tomato";
});

function addBackgroundColor() {
    const friends = document.getElementsByClassName("friend");
    for (const friend of friends) {
        friend.style.backgroundColor = "lightBlue";
    }
}

document.getElementById("add-Friend").addEventListener("click", function() {
    const container = document.getElementById("friend-container");
    const friendDiv = document.createElement("div");

    friendDiv.classList.add("friend");
    friendDiv.innerHTML = `
      <h3 class="friend-name">Friend-4</h3>
            <p>
                Itaque repudiandae deserunt enim quisquam totam velit perferendis libero aspernatur.
            </p>
    `;
    container.appendChild(friendDiv);
});