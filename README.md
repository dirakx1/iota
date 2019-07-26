# Iota
Iota documentation and notes:

IOTA is a distributed ledger technology that allows computers in an IOTA network to transfer immutable data and value among each other.

To send and receive IOTA tokens, clients send packages of transactions called bundles to nodes. The transactions in a bundle instruct the node to transfer IOTA tokens from one address to another. These addresses are derived from a client's unique secret password called a seed.
When the bundle is confirmed in the Tangle, the IOTA tokens are transferred.

## What is the IOTA token?
At its most basic level, the IOTA token is a record of ownership that's held by the nodes in an IOTA network.
Copied

ADDRESS....ENDOFADDRESS;1000

These characters might look cryptic, but let's break it down. On the left of the semicolon is an address. These are unique to each client in the network. On the right of the semicolon is an amount of IOTA tokens that belong to that address, in this case 1,000 tokens.
You own IOTA tokens only when all nodes validate the transaction that sent the tokens to you, and when it's referenced by a milestone.

# Security
IOTA uses quantum-resistant cryptography to secure the network and prevent attackers from stealing IOTA tokens.
IOTA networks are peer-to-peer networks. No central authority controls the ledger of transactions, instead all nodes hold a copy and run the software that contains the IOTA protocol to automate the agreement on its contents.

## References 
* https://docs.iota.org/docs/getting-started/0.1/tutorials/get-started
* https://devnet.thetangle.org/


