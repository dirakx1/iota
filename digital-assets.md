# IOTA Digital Assets 

(also called Colored Coins) are tokens that are based on IOTA and can be used to tamper-proof represent assets from the real world. 
Basically they remain “normal” IOTA tokens but in a certain context or in a specially created app they can mean different things and may have a higher 
value than the normal IOTA token. For a better understanding you can also imagine this as a kind of label, which is stuck to the token 
when sending it and identifies it as a special token. The regular IOTA token is only used as carrier. 
The term Colored Coin has also been established in the cryptoscene.


## What are Digital Assets?

IOTA Digital Assets (also called Colored Coins) are tokens that are based on IOTA and can be used to tamper-proof represent assets from the real world. Basically they remain “normal” IOTA tokens but in a certain context or in a specially created app they can mean different things and may have a higher value than the normal IOTA token. For a better understanding you can also imagine this as a kind of label, which is stuck to the token when sending it and identifies it as a special token. The regular IOTA token is only used as carrier. The term Colored Coin has also been established in the cryptoscene.

IOTA Colored Coins can only be based on value objects (smallest unit = 1i) because you can’t own message objects (0 value). The “color” is simply an array of 32 bytes and by default tokens have a color of type “IOTA” where all 32 bytes are zero. To create a new color, the special color type “New” must be specified in a transaction output, setting each byte in the color array to 255. This tells GoShimmer to color the specific balance at the specific address of the given output with the hash of the transaction that creates the output. So new colors simply match the transaction hash of the transaction generating the output. Thus the color (the particular meaning) is unique and not reproducible.

Colored Coins never increase or decrease the specified max. IOTA token supply. It is up to the merchants and other systems to give meaning to the Colored Coins. Because of the way coloring works, any owner of Colored Coins can “shrink” the circulating amount of the specific Colored Coins by simply re-creating issues with the specific “New” color type. Of course, this only affects the actual owner of the Colored Coins, but it is something to keep in mind when developing a system / app around Colored Coins.

### Key factors

* The creation of Colored Coins is accomplished with a “one-time” transaction (Genesis or mint transaction) via the Firefly wallet
    This mint transaction instructs GoShimmer to color all tokens in that transaction with the hash of the transaction that creates the output. So new colors simply match the transaction hash of the transaction that generates the output. Thus the color (the special meaning) is unique and not reproducible.
* The name of the Colored Coin (ex. MoonCoin) can be chosen freely.
* The amount of Colored Coins created cannot be increased afterwards by further issues. This would only be possible via a Smart-Contract, which creates new Colored Coins, calculates the new number on the addresses and exchanges the old ones against the new Colored Coins.
    With a new specified issue transaction, the originally created Colored Coins can be overwritten or deleted (original IOTA).
* Colored Coins have no connection to the person who created (minted) the Colored Coin. The person who has access (seed) can overwrite these Colored Coins or restore them to their original state.
* Colored Coins are application specific. This means to recognize Colored Coins as such, the application must know the used Colored Coin value object with the additional Color-ID, otherwise a normal IOTA token aka 1i will be recognized. Example: Let’s say in the computer game XY a Colored Coin based “Gold-Token” is used for buying items, this used “Gold-Token” is only recognized as such by this game. For all other applications / wallets it would remain a normal IOTA token.
* For an automatic recognition of all Colored Coins, a database could be created in the future, in which all Colored Coins can be registered with purpose of use, etc.
 * Due to the game theory around Mana, a Colored Coin will not be able to compete with the regular IOTA token for a value transfer. A Colored Coin will generate too little Mana in the network (with 1i value) no matter what asset is mapped with it. Due to the Mana regulated transaction rate and the minimum Mana requirement of the nodes for transactions, a brisk trade without additional Mana with Colored Coins is prevented. A Colored Coin is therefore not suitable for a replacement of the regular IOTA token for value transfer.
 ^ Dust protection also applies to Colored Coins. A minimum of 1 Mi on an address applies (can also be regular IOTA tokens).
 
## Use cases
### Utility tokens 
### Security Tokens 
### NFTs

