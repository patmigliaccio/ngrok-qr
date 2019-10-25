#!/usr/bin/env node

"use strict";

const ngrok = require("ngrok");
const qrcode = require("qrcode-terminal");
const portfinder = require("portfinder");
const chalk = require("chalk");

async function main() {
  const { argv } = process;
  const args = argv.slice(2);

  const options = {
    port: args && args.length ? args[0] : null
  };

  if (!options.port) {
    options.port = await new Promise(resolve =>
      portfinder.getPort({ port: 3000 }, (err, port) =>
        err ? reject(err) : resolve(port)
      )
    );
  }

  const url = await ngrok.connect(options.port);

  const code = await new Promise(resolve =>
    qrcode.generate(url, { small: true }, qr => resolve(qr))
  );

  const output = [
    `---------------------------`,
    `> ngrok http ${options.port}`,
    `---------------------------`,
    chalk.underline.cyan(url),
    `---------------------------`,
    code
  ].join("\r\n");

  console.log(output);
}

main()
  .then(() => {})
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
