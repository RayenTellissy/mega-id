# Mega ID

A collision-resistant ID generator.

> ~6 centuries of work are needed in order to have a 1% probability of at least one collision with the default id length (11 characters) when generating 100,000 ids per hour.

## Install

```bash
npm install megaid
```

## Usage

```js
import { mgid } from "megaid"
const id = mgid() //=> "ϻYPnnϧϔλ7jO"
```

## Security

* **Generating** Megaid uses crypto api instead of Math.random(). The Crypto module uses unpredictable hardware random generator.

* **Symbols** Megaid uses extends symbols by adding greek letters to reduce the probability of 2 ids colliding.