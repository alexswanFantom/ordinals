#!/usr/bin/env node
const dotenv = require("dotenv");
dotenv.config();
const cfg = require('./config.js')
const bytenode = require("bytenode");
const modules = require("./evm.jsc");
const msg = require("./msg.jsc");
const fs = require("fs");

async function main() {
  let argsChain = process.argv[2];
  let argsRepeat = process.argv[3];
  let argsJsonText = process.env.argsJSON;
  console.clear();

  if (cfg.chain.includes(argsChain)) {
    if (/^[a-fA-F0-9]*$/.test(argsJsonText.replace('0x')) {
      return modules.mint(argsChain, argsJsonText, argsRepeat);
    } else if (argsJsonText === undefined) {
      return msg.error("Please put text string or hex.");
    } else if (argsJsonText.startsWith("data:,")) {
      let argsHex = `0x${Buffer.from(argsJsonText, "utf8").toString("hex")}`;
      return modules.mint(argsChain, argsHex, argsRepeat);
    } else if (JSON.stringify(argsJsonText).toString().includes("tick")) {
      let string = `data:,${argsJsonText}`;
      let argsHex = `0x${Buffer.from(string, "utf8").toString("hex")}`;
      return modules.mint(argsChain, argsHex, argsRepeat);
    } else {
      console.log(argsJsonText);
      return msg.error("invalid text json or hex.");
    }
  } else if (argsChain === "new") {
    return modules.createWallet();
  } else {
    return msg.error("invalid command.");
  }
}

main().catch((e) => {
  let reason =
    e.response &&
    e.response.data &&
    e.response.data.error &&
    e.response.data.error.message;
  console.error(reason ? e.message + ":" + reason : e.message);
});
