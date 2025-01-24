

// const main=async () => {
//     const Transactions=await hre.ethers.getContractFactory("Transactions")
//     const transactions=await Transactions.deploy;

//     await transactions.deployed();

//     cconsole.log("Transactions deployed to:", transactions.address);
// }

// const runMain=async()=>{
//     try{
//         await main();
//         Process.exit(0);
//     }catch(error){
//         console.error(error);
//         process.exit(1);
//     }
// }

// runMain();
async function main() {
    const [deployer] = await ethers.getSigners(); // Make sure this is working
    console.log("Deploying contracts with the account:", deployer.address);
  
    const MyContract = await ethers.getContractFactory("Transactions");
    const contract = await MyContract.deploy();
    console.log("Contract deployed to:", contract.address);
  }
  
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
  