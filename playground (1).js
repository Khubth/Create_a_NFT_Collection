/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/
const nfts = [];

function mintNFT(name, city, eyeColor) {
    const nft = {
        name: name,
        city: city,
        eyeColor: eyeColor
    };
    nfts.push(nft);
}
function listNFTs() {
    for (let i = 0; i < nfts.length; i++) {
        console.log("Name: " + nfts[i].name);
        console.log("City: " + nfts[i].city);
        console.log("Eye Color: " + nfts[i].eyeColor);
        console.log("--------------------");
    }
}

function getTotalSupply() {
    return nfts.length;
}

mintNFT("Khushi", "Bettiah", "dark Brown");
mintNFT("Abhi", "Bettiah", "Brown");

listNFTs();

console.log("Total Supply: " + getTotalSupply());

