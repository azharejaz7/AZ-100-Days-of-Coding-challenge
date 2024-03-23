function Make_Shirt(size, msg) {
    if (size === void 0) { size = "Madium"; }
    if (msg === void 0) { msg = "I love T-Shirt"; }
    console.log("".concat(size, " T-Shirt size will be best fits you, ").concat(msg));
}
Make_Shirt();
Make_Shirt("Small");
Make_Shirt("Medium", "its good for you.");
