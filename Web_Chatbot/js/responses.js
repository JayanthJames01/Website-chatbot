function getBotResponse(input) {
    //grettings
    if (input == "hi") {
        return "hi there";
    } else if (input == "hello") {
        return "hello welcome to our website";
    } else if (input == "bye") {
        return "See you later";
    }

    // Simple responses
    if (input == "Order") {
        return "please enter the product!";
    } else if (input == "report") {
        return "Reported!";
    } else {
        return "Try asking something else!";
    }
}