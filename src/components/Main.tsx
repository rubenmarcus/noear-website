// Main.tsx
import React from "react";

const Main: React.FC = () => {
  return (
    <main>
      <section>
        <div className="Pattern-module_pattern__Ngp7v">
          <div className="motto" style={{ maxWidth: "648px" }}>
            <div
              className="Flex-module_flex__PTtO8"
              data-align="center"
              data-gap="l"
              data-stack="true"
            >
              <h1 className="Text-module_text__6S3Wr" data-size="text-hero-l">
                Ears, Abstracted.
              </h1>
              <p>
                NOEAR is the ear abstraction stack, empowering builders to
                create memes that scale to billions of users and across NEAR
                Blockchain.
              </p>
              <h2 style={{ fontSize: "24px" }}>noear-324.meme-cooking.near</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="green">
        <div className="container flex flex-col">
          <h1>There's a better way to meme.</h1>
          <div className="content">
            <div>
              <img src="symbol.png" width="250" alt="Symbol" />
            </div>
            <div style={{ padding: "20px" }}>
              <p className="break-words">
                <span>$NOEAR</span> is an organic movement inside NEAR
                Blockchain. <br />
                Is community driven memes, that satirize with the protocol name,
                while still praises its members and qualities.
              </p>
              <p>
                We believe that memes should be community builded and owned.
              </p>
              <p>
                We think NEAR has all the capabilities of be the 1st Chain
                regarding DEGEN adoption
              </p>
              <p>And we are here to fullfill this mission</p>
              <p>While we raid, meme and have fun.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="black">
        <div className="container w-full flex flex-col">
          <h1>100% community driven.</h1>
          <div className="content">
            <div style={{ padding: "20px" }}>
              <p>
                All Memes you see on our Memes Channel are made by community.
              </p>
              <p>
                We are a community of chad holders who just wanna make fun and
                hodl $NOEAR
              </p>
              <p>We are here to make $NOEAR and $NEAR be heard by everyone</p>
            </div>
            <div>
              <img src="illia.gif" width="250" alt="Illia" />
            </div>
          </div>
        </div>
      </section>
      <section className="end">
        <div className="container w-full flex flex-col">
          <h1>tokenomics</h1>
          <div className="content">
            <div style={{ padding: "20px" }}>
              <p>
                <span>ticker: </span>$NOEAR
              </p>
              <p>
                <span>supply:</span> 1.000.000.000
              </p>
              <p>LIQUIDITY 🔥</p>
            </div>
          </div>

          <h1 id="buy">BUY</h1>
          <div className="flex center buy">
            <p>
              <a
                href="https://app.ref.finance/#near|noear-324.meme-cooking.near"
                target="_blank"
                rel="noreferrer"
              >
                <img width="200" src="ref.png" alt="ref" />
              </a>
            </p>
            <p>
              <a
                href="https://meme.cooking/meme/324"
                target="_blank"
                rel="noreferrer"
              >
                <img width="200" src="meme.png" alt="meme" />
              </a>
            </p>
          </div>

          <h1>LINKS</h1>
          <div className="flex center links">
            <p>
              <a
                href="https://dexscreener.com/near/refv1-5574"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  width="100"
                  src="dexscreener-circle.svg"
                  alt="dexscreener"
                />
              </a>
            </p>
            <p>
              <a
                href="https://www.dextools.io/app/en/near/pair-explorer/5574?t=1730339491699"
                target="_blank"
                rel="noreferrer"
              >
                <img width="100" src="dextools.svg" alt="dextools" />
              </a>
            </p>
            <p style={{ marginLeft: "30px" }}>
              <a
                href="https://x.com/noeartoken"
                target="_blank"
                rel="noreferrer"
              >
                <img width="75" src="x.webp" alt="twitter" />
              </a>
            </p>
            <p style={{ marginLeft: "30px" }}>
              <a
                href="https://t.me/noeartoken"
                target="_blank"
                rel="noreferrer"
              >
                <img width="75" src="telegram.webp" alt="telegram" />
              </a>
            </p>
            <p style={{ marginLeft: "30px" }}>
              <a
                href="https://near.social/mob.near/widget/ProfilePage?accountId=noear.near"
                target="_blank"
                rel="noreferrer"
              >
                <img width="140" src="nearsocial.png" alt="nearsocial" />
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
