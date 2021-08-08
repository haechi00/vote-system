async function main() {
	const [deployer] = await ethers.getSigners();

	console.log('Deploying contracts with the account:', deployer.address);

	console.log('Account balance:', (await deployer.getBalance()).toString());

	const Token = await ethers.getContractFactory('Ballot');
	const token = await Token.deploy([
		'0x696d70726f76652d64656d6f6372616379000000000000000000000000000000',
		'0x6b6565702d64656d6f6372616379000000000000000000000000000000000000',
		'0x676f6f642d6469746163746f7200000000000000000000000000000000000000',
		'0x616e617263687900000000000000000000000000000000000000000000000000',
	]);

	console.log('Token address:', token.address);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});