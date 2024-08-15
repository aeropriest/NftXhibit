import Moralis from "moralis";

import { NextResponse } from "next/server";

try {
} catch (error) {
  await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });
  console.error(error);
}

export async function GET(req) {
  const url = new URL(req.url);
  const cursor = parseInt(url.searchParams.get("cursor")) || 1;
  const contract = parseInt(url.searchParams.get("contract")) || 1;

  try {
    await Moralis.start({
      apiKey: process.env.MORALIS_API_KEY,
    });

    const response = await Moralis.EvmApi.nft.getContractNFTs({
      chain: "0x1",
      format: "decimal",
      limit: 10,
      address: "0xed5af388653567af2f388e6224dc7c4b3241c544",
    });

    console.log(response.raw);
    return NextResponse.json(response.raw);
  } catch (e) {
    console.error(e);
    return NextResponse.error(error);
  }
}
