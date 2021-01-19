function showProducts() {
    clear();
    document.getElementById("header").innerHTML = "Products List";

    fetch('https://rohitashavaggarwal768-eval-test.apigee.net/getproducts')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            appendData(data);
        })
        .catch(function (err) {
            console.log('error: ' + err);
        });

    function appendData(data) {
        let mainContainer = document.getElementById("myData");

        let table = document.createElement("table");
        setAttributes(table, {
            "class": "table"
        });
        for (let i = 0; i < data.length; i++) {
            let row = document.createElement("tr");
            for (let j = 0; j < 3; j++) {
                let col = document.createElement("td");
                if (j === 0) {
                    let cellText = document.createTextNode(data[i].id);
                    col.appendChild(cellText);
                } else if (j === 1) {
                    let cellText = document.createTextNode(data[i].name);
                    col.appendChild(cellText);
                } else {
                    let button = document.createElement("button");
                    let buttonTextNode = document.createTextNode("Add to Cart");
                    setAttributes(button, {
                        "class": "btn btn-primary",
                        "onclick": "addProductToCart(" + data[i].id + ")"
                    })
                    button.appendChild(buttonTextNode);
                    col.appendChild(button);
                }
                row.appendChild(col);
            }
            table.appendChild(row);
        }
        mainContainer.appendChild(table);
    }
}

function addProductToCart(data) {
    if (sessionStorage.getItem("apikey") === null) {
        alert("Please login to add products to cart. Please register if you do not have login credentials.");
        return false;
    } else {
        alert("Product " + data + " added to cart.");
        sessionStorage.setItem("cart", data);
        return true;
    }
}

function clear() {
    document.getElementById("myData").innerHTML = "";
}

function setAttributes(elements, attributes) {
    Object.keys(attributes).forEach(function (name) {
        elements.setAttribute(name, attributes[name]);
    })
}