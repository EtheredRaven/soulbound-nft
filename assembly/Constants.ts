import { Base58 } from "@koinos/sdk-as";

export namespace Constants {
  export const NAME: string = "Soulbound NFT";
  export const SYMBOL: string = "SOUL";
  export const MINT_PRICE: u64 = 0; // The price to mint a token
  export const MINT_FEE: bool = false; // Replace with true if you want to charge a fee
  export const MAX_SUPPLY: u64 = 10000000; // The maximum number of tokens that can be minted
  export const URI: string =
    "https://kanvas-app.com/api/kanvas_gods/get_metadata"; // The URI for the token metadata like the image, check Kollection for the format

  export const OWNER: Uint8Array = Base58.decode(
    "1KANGodsBD74xBuoBVoJE2x2PiRyDbfM2i" // The owner of the contract
  );

  export const TOKEN_PAY: Uint8Array = Base58.decode(
    "15DJN4a8SgrbGhhGksSBASiSYjGnMU8dGL"
  ); // The token address to pay for minting (KOIN for example)
  export const ADDRESS_PAY: Uint8Array = Base58.decode(
    "1KANGodsBD74xBuoBVoJE2x2PiRyDbfM2i"
  ); // The address to pay for minting
}
