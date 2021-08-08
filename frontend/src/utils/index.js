import { ethers } from 'ethers';

export const parseBytes = (bytesProposal) => {
	return ethers.utils.parseBytes32String(bytesProposal);
};

export const parseName = (name) => {
	const newName = name.replace('-', ' ');
	return newName[0].toUpperCase() + newName.substring(1);
};