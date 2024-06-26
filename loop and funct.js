// Step 1: Create a variable to hold your NFTs
let nftCollection = [];

// Step 2: Create a function to mint NFTs
function mintNFT(name, description, eyeColor, owner) {
    // Create an NFT object using the parameters passed for metadata
    const nft = {
        name: name,
        description: description,
        eyeColor: eyeColor,
        owner: owner
    };

    // Store the NFT object in the nftCollection array
    nftCollection.push(nft);
}

// Step 3: Create a function to list all NFTs
function listNFTs() {
    // Loop through the nftCollection array and print each NFT's metadata
    nftCollection.forEach((nft, index) => {
        console.log(`NFT ${index + 1}:`);
        console.log(`  Name: ${nft.name}`);
        console.log(`  Description: ${nft.description}`);
        console.log(`  Eye Color: ${nft.eyeColor}`);
        console.log(`  Owner: ${nft.owner}`);
        console.log('---------------------------');
    });
}

// Step 4: Create a function to get the total supply of NFTs
function getTotalSupply() {
    // Return the length of the nftCollection array
    return nftCollection.length;
}

// Call your functions below this line

// Mint some NFTs
mintNFT("Cool NFT #1", "This is the first cool NFT", "Blue", "Alice");
mintNFT("Cool NFT #2", "This is the second cool NFT", "Green", "Bob");
mintNFT("Cool NFT #3", "This is the third cool NFT", "Brown", "Charlie");

// List all NFTs
listNFTs();

// Print the total number of NFTs minted
console.log(`Total Supply: ${getTotalSupply()}`);
