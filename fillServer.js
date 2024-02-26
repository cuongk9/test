const WebSocket = require('ws');
const Buffer = require('./Buffer.js');
const { ProxyAgent } = require('proxy-agent');
const fs = require('node:fs');

let proxies = fs
	.readFileSync('proxies.txt', 'utf-8')
	.replace(/\r\n/g, '\n')
	.split('\n');

let CURPLAYERS = {};
let MAXPLAYERS = {};
let PROXYTYPE = process.argv[2];
let TARGET = process.argv[3];
// console.log(ProxyAgent);
// process.exit();
proxies = proxies.map(a => `${PROXYTYPE}://${a.trim()}`);

const _0x9713x2 = '~9B\\x$';
const v2za0 = [
	_0x9713x2.charCodeAt(0),
	_0x9713x2.charCodeAt(1),
	_0x9713x2.charCodeAt(2) + 73,
	_0x9713x2.charCodeAt(3),
	_0x9713x2.charCodeAt(4) + 227,
	_0x9713x2.charCodeAt(5),
];

class Bot {
	/** @type { WebSocket } */
	ws = null;

	CLIENTPHP_ccv = ~~(5535 + 60000 * Math.random()) + 1;
	CLIENTPHP_ch = 50;
	clientPHPDecodedReturn = 0;
	pkt64Response = -1;
	emgaaEncoded = 5;
	emgaa = 'bbhnf';

	gameversion = 118;
	protocolversion = 22;
	finishedHandshake = false;

	destructed = false;

	/**
	 * @param { number } id
	 * @param { string } server
	 */
	constructor(id, server, serverName) {
		this.id = id;
		this.server = server;
		this.serverName = serverName;
		this.connect();

		this.pingInterval = setInterval(this.ping.bind(this), 18000);
	}

	dtor() {
		this.destructed = true;
		clearInterval(this.pingInterval);
		if (this.ws) this.ws.terminate();
	}

	reset() {
		this.CLIENTPHP_ccv = ~~(5535 + 60000 * Math.random()) + 1;
		this.CLIENTPHP_ch = 50;
		this.clientPHPDecodedReturn = 0;
		this.pkt64Response = -1;
		this.emgaaEncoded = 5;
		this.finishedHandshake = false;
		this.myCellIds = new Set();
		// this.spawned = false;
	}

	get spawned() {
		return this.finishedHandshake;
	}

	/**
	 * @param {number} d
	 * @returns {number}
	 */
	decodeClientPHPReturn(d) {
		var b = 0;
		if (d && !isNaN(d)) {
			if (((d = '' + d), d.length > 5)) {
				var x = d.substr(0, 5),
					_ = d.substr(5);
				if (!isNaN(x) && !isNaN(_)) {
					for (var e = 0, t = 0; t < x.length; t++) {
						e += (parseInt(x.substr(t, 1)) + 30) * (t + 1);
					}
					e == parseInt(_) && (b = Math.max(parseInt(x) - 10000, 0));
				}
			} else {
				b = parseInt(d);
			}
		}
		return b;
	}

	async clientphprequest() {
		let code;
		try {
			throw new Error('');
			code = await (
				await fetch('https://cellcraft.io/client.php', {
					headers: {
						accept: 'text/plain, */*; q=0.01',
						'accept-language':
							'en-CA,en-GB;q=0.9,en-US;q=0.8,en;q=0.7',
						'content-type':
							'application/x-www-form-urlencoded; charset=UTF-8',
						'sec-ch-ua':
							'"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
						'sec-ch-ua-mobile': '?0',
						'sec-ch-ua-platform': '"Windows"',
						'sec-fetch-dest': 'empty',
						'sec-fetch-mode': 'cors',
						'sec-fetch-site': 'same-origin',
						'x-requested-with': 'XMLHttpRequest',
						cookie: 'G_ENABLED_IDPS=google; userFromEEA=false',
						Referer: 'https://cellcraft.io/',
						'Referrer-Policy': 'strict-origin-when-cross-origin',
						'User-Agent':
							'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
					},
					body:
						'data=' +
						encodeURIComponent(
							JSON.stringify({
								cv: this.CLIENTPHP_ccv * 4,
								ch: this.CLIENTPHP_ch,
								cvv: this.CLIENTPHP_ccv,
								vv: this.gameversion,
							})
						),
					method: 'POST',
				})
			).text();
		} catch (e) {
			code = '36873532';
			this.CLIENTPHP_ccv = 52577;
		}
		this.clientPHPDecodedReturn = this.decodeClientPHPReturn(code);

		for (var b = 0; b < this.emgaa.length; b++) {
			this.emgaaEncoded +=
				this.emgaa.charCodeAt(b) * (1 - (!b || b % 2 ? 0 : 2)) -
				1 * (b ? 0 : 1);
		}
		this.emgaaEncoded--;

		this.CLIENTPHP_ch = 60;
	}

	send(buffer) {
		if (this.ws && this.ws.readyState == WebSocket.OPEN) {
			this.ws.send(buffer);
		}
	}

	async connect() {
		this.reset();
		await this.clientphprequest();
		this.ws = new WebSocket(this.server, {
			headers: {
				'accept-language': 'en-CA,en-GB;q=0.9,en-US;q=0.8,en;q=0.7',
				'cache-control': 'no-cache',
				pragma: 'no-cache',
				'sec-websocket-extensions':
					'permessage-deflate; client_max_window_bits',
				'sec-websocket-version': '13',
				// cookie: `session_verify=${
				// 	Math.random().toString(36).substring(2) +
				// 	Math.random().toString(36).substring(2) +
				// 	Math.random().toString(36).substring(2, 6)
				// }; G_ENABLED_IDPS=google; CountryCode=CA; userFromEEA=false`,
				'User-Agent':
					'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
			},
			rejectUnauthorized: false,
			agent: new ProxyAgent(
				proxies[Math.floor(Math.random() * proxies.length)]
			),
		});
		this.ws.on('open', this.open.bind(this));
		this.ws.on('message', this.message.bind(this));
		this.ws.on('error', this.error.bind(this));
		this.ws.on('close', this.close.bind(this));
		this.ws.binaryType = 'arraybuffer';
	}

	open() {
		const buffer = new Buffer(13);
		buffer.writeUint8(245);
		buffer.writeUint16(this.protocolversion);
		buffer.writeUint16(this.gameversion);
		buffer.writeUint32(this.CLIENTPHP_ccv);
		buffer.writeUint32(this.checksum(buffer.finish(false), 0, 9, 245));
		this.send(buffer.finish());
	}

	/**
	 *
	 * @param { ArrayBuffer } buffer
	 * @param { number } start
	 * @param { number } end
	 * @param { number } adder
	 * @returns { number }
	 */
	checksum(buffer, start, end, adder) {
		let d = globalThis.Buffer.from(buffer);
		start + end > d.byteLength && (end = 0);
		for (var e = 12345678 + adder, t = 0; end > t; t++) {
			e += d[start + t] * (t + 1);
		}
		return e;
	}

	do64response(res) {
		this.pkt64Response = res;
		var buffer = new Buffer(13);

		// nx(buffer);
		buffer.writeUint8(
			2 * (this.CLIENTPHP_ch + 30) - ((this.pkt64Response - 5) % 10) - 5
		);

		// kx(buffer, 0, clientPHPDecodedReturn);
		buffer.writeUint32(
			~~(
				this.pkt64Response / 1.84 +
				this.CLIENTPHP_ch / 2 -
				2 * (0 ? 0.5 : 1)
			) +
				~~(
					~~(
						21.2 *
						((~~(
							this.pkt64Response +
							4.42 * this.CLIENTPHP_ccv +
							555
						) %
							(this.clientPHPDecodedReturn - 1)) +
							36360)
					) / 4.2
				)
		);

		// ix(buffer);
		let gx = 0;
		for (var b = 0; b < v2za0.length; b++) {
			gx += ~~(
				this.pkt64Response / v2za0[b] -
				(v2za0[b] % this.emgaaEncoded)
			);
		}
		buffer.writeUint32(gx + this.emgaaEncoded);

		// yx(buffer);
		buffer.writeUint32(this.checksum(buffer.finish(false), 0, 9, 255));

		// sendWSMessage(buffer, true);
		this.send(buffer.finish());
	}

	sendSetting(settingID, value) {
		const buffer = new Buffer(3);
		buffer.writeUint8(4);
		buffer.writeUint8(settingID);
		buffer.writeUint8(value ? 1 : 0);
		this.send(buffer.finish());
	}

	finishHandshake() {
		this.finishedHandshake = true;

		this.sendSetting(7, true);
		this.sendSetting(8, false);
		this.sendSetting(3, true);
	}

	/**
	 * @param {WebSocket.RawData} data
	 * @param {boolean} isBinary
	 */
	message(data, isBinary) {
		if (!isBinary) return;
		let buffer = new Buffer(data, true, false);
		switch (buffer.readUint8()) {
			case 64:
				let left = buffer.readFloat64();
				let top = buffer.readFloat64();
				let right = buffer.readFloat64();
				let bottom = buffer.readFloat64();

				let Un = buffer.readInt16();

				let a = buffer.readUint32();
				let E = buffer.readUint32();

				if (a === E) {
					if (70 > this.CLIENTPHP_ch) {
						// console.log('doing 64');
						this.CLIENTPHP_ch += 40;
						this.do64response(a);
					}
				} else {
					console.log('Failed bot protection!!!!!');
				}
				break;
			case 244:
				this.finishHandshake();
				break;

			case 110: // server list update
				let len = buffer.readUint16();
				for (let i = 0; i < len; i++) {
					let isCurrent = buffer.readUint8();
					let id = buffer.readUint16();
					let name = buffer.readUTF16();
					let description = buffer.readUTF16();
					let address = buffer.readUTF16();
					let location = buffer.readUint8();
					let gamemode = buffer.readUint8();
					let players = buffer.readUint16();
					let maxPlayers = buffer.readUint16();
					if (isCurrent & (1 != 0)) {
						CURPLAYERS[this.serverName] = players;
						MAXPLAYERS[this.serverName] = maxPlayers;
					}
				}
				break;
		}
	}

	ping() {
		if (!this.finishedHandshake) return;

		this.sendSingleByte(95);
	}

	sendSingleByte(byte) {
		const buffer = new Buffer(1);
		buffer.writeUint8(byte);
		this.send(buffer.finish());
	}

	error(err) {
		// console.log('error', err);
	}

	close() {
		if (this.destructed) return;
		this.reset();
		// console.log('close');
		setTimeout(this.connect.bind(this), 2500);
	}
}

/** @type {Bot[]} */
const bots = [];

const serverList = {
	crazy: 'wss://s1.cellcraft.io:451/',
	gigasplit: 'wss://s1.cellcraft.io:452/',
	virusfarm: 'wss://s3.cellcraft.io:2083/',
};

let TARGETS = [];
if (TARGET == 'all') {
	TARGETS = [...Object.keys(serverList)];
} else if (TARGET.includes(',')) {
	let _t = TARGET.split(',');
	for (let target of _t) {
		let tar = Object.keys(serverList).filter(e =>
			e.includes(target.trim().toLowerCase())
		);
		if (tar.length == 0) {
			console.log(TARGET + " doesn't exist in server list!");
			process.exit();
		} else {
			TARGETS.push(tar[0]);
		}
	}
} else {
	let tar = Object.keys(serverList).filter(e =>
		e.includes(TARGET.trim().toLowerCase())
	);
	if (tar.length == 0) {
		console.log(TARGET + " doesn't exist in server list!");
		process.exit();
	} else {
		TARGETS.push(tar[0]);
	}
}

async function updateCount() {
	console.clear();
	let str = `[SERVER FILLER]`;
	str += `\n\tProxy Type: ${PROXYTYPE}`;
	for (let target of TARGETS) {
		let botsForMyTarget = bots.filter(bot => bot.serverName == target);
		let connected = 0;
		let handshaked = 0;
		for (let bot of botsForMyTarget) {
			if (bot.ws && bot.ws.readyState == WebSocket.OPEN) connected++;
			if (
				bot.ws &&
				bot.ws.readyState == WebSocket.OPEN &&
				bot.finishedHandshake
			)
				handshaked++;
		}

		str += `\n\t[${target.toUpperCase()}]`;
		str += `\n\t\tPlayers: ${CURPLAYERS[target] || 0}`;
		str += `\n\t\tMax Players: ${MAXPLAYERS[target] || 0}`;
		str += `\n\t\tConnected Bots: ${connected}`;
		str += `\n\t\tFully Connected Bots: ${handshaked}`;
	}
	console.log(
		// `[SERVER FILLER]` +
		// 	`\n\tTarget: ${TARGET}` +
		// 	`\n\tProxy Type: ${PROXYTYPE}` +
		// 	`\n\tPlayers: ${CURPLAYERS}` +
		// 	`\n\tMax Players: ${MAXPLAYERS}` +
		// 	`\n\tConnected Bots: ${connected}` +
		// 	`\n\tFully Connected Bots: ${handshaked}`
		str
	);
	setTimeout(updateCount, 500);
}
for (let target of TARGETS) {
	for (let i = 0; i < proxies.length; i++) {
		bots.push(new Bot(i, serverList[target], target));
	}
}

updateCount();
// new Bot(0, 'wss://s3.cellcraft.io:2083/');
