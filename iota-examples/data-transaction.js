//IOTA allows you to send data (zero-value) transactions as well as IOTA tokens. 
//These zero-value transactions are useful for applications that want to send and store immutable messages on the Tangle. 
//To send only a zero-value transaction, you don't need any IOTA tokens.

// Require the IOTA libraries
const Iota = require('@iota/core');
const Converter = require('@iota/converter');

// Create a new instance of the IOTA object
// Use the `provider` field to specify which IRI node to connect to
const iota = Iota.composeAPI({
provider: 'https://nodes.devnet.iota.org:443'
});

// You aren't sending any IOTA tokens, so this address does not have to belong to anyone. 
// To be valid, the address just needs to consist of 81 trytes.
const address =
'HELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDD';

// This seed doesn't have to contain any addresses with IOTA tokens. 
//If you enter a seed that consists of less than 81 characters, 
//the library will append 9s to the end of it to make 81 characters.
const seed =
'PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX';

//IOTA networks accept only tryte-encoded messages.
const message = Converter.asciiToTrytes('Hello World!');

// Create a transfer object that specifies the amount of IOTA tokens you want to send, 
//the message that you want to send, and the address to send it to
const transfers = [
{
    value: 0,
    address: address,
    message: message
}
];

// To construct a bundle from your transfers
// object, pass it to the prepareTransfers()
// method. Then, pass the returned bundle trytes to the sendTrytes()
// method to do tip selection, proof of work, and send the bundle to the node
iota.prepareTransfers(seed, transfers)
    .then(trytes => {
        return iota.sendTrytes(trytes, 3/*depth*/, 9/*minimum weight magnitude*/)
    })
    .then(bundle => {
    console.log(`Bundle: ${JSON.stringify(bundle, null, 1)}`)
})
.catch(err => {
        // Catch any errors
    console.log(err);
});

// The depth argument affects tip selection. The greater the depth, 
// the farther back in the Tangle the weighted random walk starts.
// The `minimum weight magnitude` (MWM) argument affects the difficulty of proof of work (PoW). 
// The greater the MWM, the more difficult the PoW.
// Every IOTA network enforces its own MWM. On the Devnet, 
// the MWM is 9. But, on the Mainnet the MWM is 14. 
// If you use a MWM that's too small, your transactions won't be valid and will never be confirmed.
