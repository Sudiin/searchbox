document.getElementById("searchInput").addEventListener("keyup", function(event) {
    let searchQuery=event.target.value.toLowerCase()
    let allNameDOMCollection = document.getElementsByClassName("name")

    for (let counter=0; counter<allNameDOMCollection.length; counter++) {
        const currentName =allNameDOMCollection[counter].textContent.toLocaleLowerCase()

        if (currentName.includes(searchQuery)) {
            allNameDOMCollection[counter].style.display="block"
        } else {
            allNameDOMCollection[counter].style.display = "none"
        }
    }
})
