import { Grid, Modal, Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import "./Explore.css";
import BasicModal from "../Modal/Modal";
import { Alchemy, Network } from "alchemy-sdk";

const config = {
  apiKey:"jBb1eGN9hpw-LJkN4Vb10qGxq-Gqa-Sr",
  network: Network.ETH_GOERLI,
};
const alchemy = new Alchemy(config);

function Explore() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [permalink, setPermalink] = useState();
  const [tokenId, setTokenId] = useState();
  const [description, setDescription] = useState();
  const [address, setAddress] = useState();
  const [symbol, setSymbol] = useState();
  const [tokenStandards, setTokenStandards] = useState();
  const [supply, setSupply] = useState();

  const [nftsData, setNftsData] = useState([]);

  const handleOpen = (nft) => {
    setOpen(!open);
  };
  const handleClose = () => setOpen(false);

  async function fetchNft() {
    const contractAddress = "0xe29f8038d1a3445ab22ad1373c65ec0a6e1161a4";
    const omitMetadata = false;

    // Get all NFTs
    const { nfts } = await alchemy.nft.getNftsForContract(contractAddress, {
      omitMetadata: omitMetadata,
    });

    // console.log(nfts)
    const allnftsData = await Promise.all(
      nfts.map(function (nft) {
        const address = nft.contract.address;
        const OpenseaUrl = `https://testnets.opensea.io/assets/goerli/${address}/${nft.tokenId}`;
        // console.log(nft);

        const allNfts = {
          Name: nft.contract.name,
          OpenseaUrl,
          Supply: nft.contract.totalSupply,
          tokenId: nft.tokenId,
          Image: nft.media[0].thumbnail,
          Description: nft.rawMetadata.attributes[0].value,
          address,
          tokenStandards: nft.tokenType,
          Symbol: nft.contract.symbol,
        };
        // console.log("this", allNfts);
        return allNfts;
      })
    );
    setNftsData(allnftsData);
    // })
    // );

    // console.log("done truuew", items);
  }

  // Fetch  NFT's from opensea listings
  useEffect(() => {
    fetchNft();
  }, []);

  return (
    <div className="Explore  grid justify-items-stretch ">
      {nftsData.length !== 0 ? (
        <Grid
          container
          maxWidth="xl"
          className="grid  place-content-center justify-self-center"
        >
          {nftsData.map((nft, index) => (
            <Grid
              item
              xs={8}
              sm={6}
              md={4}
              lg={3}
              className="explore-grid flex place-content-center py-4"
              key={index}
            >
              <Box
                className="explore-card"
                onClick={() => {
                  handleOpen(nft);
                  setName(nft.Name);
                  setImage(nft.Image);
                  setAddress(nft.address.slice(0, 8));
                  setDescription(nft.Description);
                  setPermalink(nft.OpenseaUrl);
                  setSymbol(nft.Symbol);
                  setTokenStandards(nft.tokenStandards);
                  setTokenId(nft.tokenId);
                  setSupply(nft.Supply);
                }}
              >
                <div className="explore-card-img">
                  <img src={nft.Image} className="explore-card-img-spec" />
                </div>
                <div className="explore-card-details grid items-center h-full w-full px-1">
                  <div className="flex justify-start w-11/12 px-2">
                    <p className="text-white font-medium text-base sm:text-lg">
                      {nft.Name}
                    </p>
                  </div>
                  <div className="flex justify-between w-full place-content-center px-2">
                    <p>Symbol</p>
                    <p className="font-bold text-white ">{nft.Symbol}</p>
                  </div>
                </div>
              </Box>

              <BasicModal
                open={open}
                handleClose={handleClose}
                selectedItem={""}
                name={name}
                img={image}
                description={description}
                tokenStandards={tokenStandards}
                symbol={symbol}
                address={address}
                permalink={permalink}
                tokenId={tokenId}
                supply={supply}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <div className="flex place-content-center h-full items-center">
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rectangular"
            width={200}
            height={450}
          />
        </div>
      )}
    </div>
  );
}

export default Explore;
