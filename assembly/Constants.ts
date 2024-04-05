import { Base58 } from "@koinos/sdk-as";

export namespace Constants {
  export const NAME: string = "Fox NFT";
  export const SYMBOL: string = "FOX";
  export const MINT_PRICE: u64 = 0;
  export const MINT_FEE: bool = false;
  export const MAX_SUPPLY: u64 = 10000000;
  export const URI: string =
    "https://kanvas-app.com/api/kanvas_gods/get_metadata"; // TODO : change

  export const OWNER: Uint8Array = Base58.decode(
    "1KANGodsBD74xBuoBVoJE2x2PiRyDbfM2i" // TODO : change
  );

  // token mint
  export const TOKEN_PAY: Uint8Array = Base58.decode(
    "15DJN4a8SgrbGhhGksSBASiSYjGnMU8dGL"
  );
  export const ADDRESS_PAY: Uint8Array = Base58.decode(
    "1KANGodsBD74xBuoBVoJE2x2PiRyDbfM2i"
  );
}
