# ngrok-cli

A command-line tool that wraps `ngrok` and generates a QR code for the forwarded URL.

![ngrok-cli Example](example.gif)

## Installation

Using `yarn`:

```bash
yarn global add ngrok-cli
```

-- or --

Using `npm`:

```bash
npm install -g ngrok-cli
```

Now installed globally, `ngrok-cli` can be used directly from the command line.

## Usage

```bash
ngrok-cli [port]
```

By default `[port]` is _optional_ and defaults to `3000`.
