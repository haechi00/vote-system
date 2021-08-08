const CheckVoterAddress = ({
	voterAddressToCheck,
	setVoterAddressToCheck,
	checkAddressVoter,
	voterStatus,
}) => {
	const handleNewAddressToCheckVote = (e) => {
		setVoterAddressToCheck(e.target.value);
	};
	return (
		<div>
			<h4>Check if an address vote status</h4>
			<div
				style={{
					width: '15em',
					display: 'flex',
					justifyContent: 'space-between',
				}}>
				<input
					value={voterAddressToCheck}
					onChange={handleNewAddressToCheckVote}
				/>
				<button onClick={checkAddressVoter}>Check</button>
			</div>
			{voterStatus !== 'An error has occured' && voterStatus && (
				<div style={{ paddingTop: '2em' }}>
					<h4>Voter Status</h4>
					<p>Account: {voterAddressToCheck}</p>
					<p>Voted: {voterStatus?.voted?.toString()}</p>
					<p>Vote Weight: {Number(voterStatus?.weight?._hex)}</p>
				</div>
			)}{' '}
			{voterStatus === 'An error has occured' && <p>{voterStatus}</p>}
		</div>
	);
};

export default CheckVoterAddress;
