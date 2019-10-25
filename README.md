# ngrok-qr

A command-line tool that wraps [`ngrok`](https://ngrok.com/) and generates a QR code for the forwarded URL.

![ngrok-qr Example](example.gif)

## Installation

Using `yarn`:

```bash
yarn global add ngrok-qr
```

-- or --

Using `npm`:

```bash
npm install -g ngrok-qr
```

Now installed globally, `ngrok-qr` can be used directly from the command line.

## Usage

```bash
ngrok-qr [port]
```

By default `[port]` is _optional_ and defaults to `3000`.
