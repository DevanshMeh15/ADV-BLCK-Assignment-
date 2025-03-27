const hre = require("hardhat");

async function main() {
    const candidateNames = ["Devansh", "Hardik", "ION", "Abhishek"]; // Candidate names

    // Get the contract factory
    const Voting = await hre.ethers.getContractFactory("Voting");

    // Deploy the contract
    const voting = await Voting.deploy(candidateNames);
    
    // Wait until the contract is mined
    await voting.waitForDeployment();

    // Get contract address
    const contractAddress = await voting.getAddress();

    console.log(`Voting contract deployed to: ${contractAddress}`);
}

// Run deployment script
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
