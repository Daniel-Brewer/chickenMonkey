for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    // Divide the current number by 5, and check if the remainder is 0
    if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
        // console.log("Chicken Monkey");
            let node = document.createElement("LI");
            let textnode = document.createTextNode("Chicken Monkey");
            node.appendChild(textnode);
            document.querySelector(".output").appendChild(node);

    }
        else if (currentNumber % 5 === 0) {
            // console.log("Chicken");
            let node = document.createElement("LI");
            let textnode = document.createTextNode("Chicken");
            node.appendChild(textnode);
            document.querySelector(".output").appendChild(node);

        }
            else if (currentNumber % 7 === 0) {
                // console.log("Monkey");  
                let node = document.createElement("LI");
                let textnode = document.createTextNode("Monkey");
                node.appendChild(textnode);
                document.querySelector(".output").appendChild(node);

            } else {
                // console.log(currentNumber); 
                let node = document.createElement("LI");
                let textnode = document.createTextNode(currentNumber);
                node.appendChild(textnode);
                document.querySelector(".output").appendChild(node);
                
            }
}


