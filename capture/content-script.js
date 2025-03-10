// Function to extract product details
function getProductDetails() {
  const title =
    document.querySelector("h1")?.innerText ||
    document.title ||
    "No title found";
  const price =
    document.querySelector(".price, .product-price, [itemprop='price']")
      ?.innerText || "No price found";
  const imageUrl = document.querySelector("img")?.src || "No image found";

  return { title, price, imageUrl };
}

// Send the data to the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getProductDetails") {
    const productDetails = getProductDetails();
    sendResponse(productDetails);
  }
});
