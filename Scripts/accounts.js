const hre = require("hardhat");

async function main() {
    const signers = await hre.ethers.getSigners();
    console.log("Available accounts:");
    signers.forEach((signer, index) => {
        console.log(`${index + 1}: ${signer.address}`);
    });
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
