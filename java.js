
        let count = 0;
        function addToCart(productName) {
            count++;
            document.getElementById('cart-count').innerText = count;
            alert("បានបន្ថែម \"" + productName + "\" ទៅក្នុងកន្ត្រកទំនិញរបស់អ្នកដោយជោគជ័យ!");
        }
    
