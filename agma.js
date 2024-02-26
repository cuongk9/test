process.setMaxListeners(100)
const WebSocket = require('ws');
const {HttpsProxyAgent} = require('https-proxy-agent');
const puppeteer = require('puppeteer-extra');
const pluginStealth = require('puppeteer-extra-plugin-stealth');
const axios = require('axios');
const fs = require('fs')
const readline = require('readline');
var user=[],bot=[];
const rl = readline.createInterface({
  input: fs.createReadStream('proi.txt'),
  crlfDelay: Infinity
});
rl.on('line', (line) => {
  const username = line.trim().split(":")[2];
  user.push(username)
});
rl.on('close', () => {
  create(100);
});
function create(amount){
  for(let i=0;i<amount;i++){
    bot.push(new Bot('wss://s39.agma.io:5006'))}
}
class Writer {
    constructor(_0x38de83) {
      this.buffer = new DataView(new ArrayBuffer(_0x38de83));
      this.position = 0;
      this.littleEndian = true;
    }
    ["setString"](_0x3ab021) {
      for (let _0x12459f = 0; _0x12459f < _0x3ab021.length; _0x12459f++) {
        this.setUint16(_0x3ab021.charCodeAt(_0x12459f));
      }
      return this;
    }
    ["setInt8"](_0x23782e) {
      this.buffer.setInt8(this.position++, _0x23782e);
      return this;
    }
    ["setUint8"](_0x149ab2) {
      this.buffer.setUint8(this.position++, _0x149ab2);
      return this;
    }
    ["setInt16"](_0x597278) {
      this.buffer.setInt16((this.position += 2) - 2, _0x597278, this.littleEndian);
      return this;
    }
    ["setUint16"](_0x4c679c) {
      this.buffer.setUint16((this.position += 2) - 2, _0x4c679c, this.littleEndian);
      return this;
    }
    ["setInt32"](_0x318f03) {
      this.buffer.setInt32((this.position += 4) - 4, _0x318f03, this.littleEndian);
      return this;
    }
    ["setUint32"](_0x40f204) {
      if (_0x40f204 % 1 != 0 && 88 == _0x40f204.toString().slice(-2)) {
        _0x40f204 += 2;
      }
      this.buffer.setUint32((this.position += 4) - 4, _0x40f204, this.littleEndian);
      return this;
    }
    ["setFloat32"](_0x2a1c74) {
      this.buffer.setFloat32((this.position += 4) - 4, _0x2a1c74, this.littleEndian);
      return this;
    }
    ["setFloat64"](_0x536175) {
      this.buffer.setFloat64((this.position += 8) - 8, _0x536175, this.littleEndian);
      return this;
    }
    ["send"](socket) {
      return socket.send(this.buffer)
    }
  }
class Reader {
    constructor(xd, lol) {
      this.buffer = new DataView(xd.data);
      this.position = lol || 0;
      this.littleEndian = true;
    }
    ["getString"]() {
      let _0x316cb0 = "";
      for (;;) {
        var _0x9c8d41 = this.getUint16();
        if (!_0x9c8d41) {
          break;
        }
        _0x316cb0 += String.fromCharCode(_0x9c8d41);
      }
      return _0x316cb0;
    }
    ["getInt8"]() {
      return this.buffer.getInt8(this.position++);
    }
    ["getUint8"]() {
      return this.buffer.getUint8(this.position++);
    }
    ["getInt16"]() {
      return this.buffer.getInt16((this.position += 2) - 2, this.littleEndian);
    }
    ["getUint16"]() {
      return this.buffer.getUint16((this.position += 2) - 2, this.littleEndian);
    }
    ["getInt32"]() {
      return this.buffer.getInt32((this.position += 4) - 4, this.littleEndian);
    }
    ["getUint32"]() {
      return this.buffer.getUint32((this.position += 4) - 4, this.littleEndian);
    }
    ["getFloat32"]() {
      return this.buffer.getFloat32((this.position += 4) - 4, this.littleEndian);
    }
    ["getFloat64"]() {
      return this.buffer.getFloat64((this.position += 8) - 8, this.littleEndian);
    }
  }
 class Bot{
    PROXYSCRAPE_HOSTNAME = 'rp.proxyscrape.com';
    PROXYSCRAPE_PORT = 6060;
    username = user[Math.floor(Math.random() * user.length)];
    password = "vznvgy8nr2j7a78";
    proxyUrl = `http://${this.username}:${this.password}@${this.PROXYSCRAPE_HOSTNAME}:${this.PROXYSCRAPE_PORT}`;
constructor(ws,user,pass){
this.name;
this.random =1 + ~~(53550 + 6e5 * Math.random());
this.j9 = 50;
this._0x6666d2 = "";
this._0x3831b6 = "";
this.skinarr=[1,2,3,4,5,6,7,8,9,10]
this.count=0;
this._0x3fc49a = false;
this._0x3dd6b5 = false;
this._0x375fb8 = false;
this.key;
this.readytospawn = false;
this.ws = ws;
this.userw=user;
this.passw=pass
this.agent=new HttpsProxyAgent(this.proxyUrl)
this.postClient(ws)
}
async getProxyIP() {
    try {
      const response = await axios.get('https://ifconfig.me/ip', { httpsAgent: this.agent });
      const ipAddress = response.data.trim();
      console.log('Proxy IP Address:', ipAddress);
    } catch (error) {
      console.error('Error retrieving proxy IP:', error.message);
    }
  }
async post(url,formData){
    puppeteer.use(pluginStealth());
    const result = await puppeteer
      .launch({
        args: ['--proxy-server=rp.proxyscrape.com:6060'] 
      })
      .then(async (browser) => {
        const page = await browser.newPage();
        page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36 Edg/123.0.0.0');
        // Navigate to the URL
        await page.authenticate({
          username: this.username,
          password: this.password,
        });
        await page.goto(`https://agma.io/${url}`);
        // Fill and submit the form
        await page.evaluate((postData, url) => {
          const form = document.createElement('form');
     form.method = 'POST';
          form.action = `/${url}`;
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = 'data';
          input.value = postData;
          form.appendChild(input);
      document.body.appendChild(form);
          form.submit();
      }, JSON.stringify(formData), url);
        await page.waitForNavigation({ waitUntil: 'networkidle0' });
        const html = await page.content();
        if(url == 'client.php')this.key= html.match(/(\d+)/)[0];
        if(url=='ag219.php')this._0x6666d2=html.match(/<body>(.*?)<\/body>/)[1];
          await browser.close();
      });
    return result;
  };
    async postClient(ws){
        await this.post('client.php',{cv: 4 * this.random, ch: this.j9, ccv: _0x251aa6, vv: 152})
    var vkx = 'K9BF'
    var xd=119
    var hi=159
    vkx.charCodeAt(1);
    var _0x251aa6 =this.random - 2;
            const s=(d)=> {
			var b = 0;
			if (d && !isNaN(d)) {
				if (7 < (d = d.toString()).length) {
					var x = d.substr(0, 7),
						_ = d.substr(7);
					if (!isNaN(x) && !isNaN(_)) {
						var e = 0;
						for (var t = 0; t < x.length; t++) {
							e += (parseInt(x.substr(t, 1)) + 20 + vkx.charCodeAt(0) + xd - hi) * (t + 1);
						}
						e == parseInt(_) && (b = Math.max(parseInt(x) - 1e6, 0));
					}
				} else {
					b = parseInt(d);
				}
			}
			return b
            }
        this.key = s(this.key);
        this.connectWss(ws)
    }
    async postAg219(_0x14b0ca){
        await this.post('ag219.php',{cv: 2 * this.random, ch: this.j9, ccv2: this.random - 2, abl: 348, cp: 56, vv: 152})
      if(this._0x6666d2){
        this._0x3dd6b5 = true;
      }
    }
    async postAg219idk(_0x14b0ca){
        await this.post('ag219.php',{cv: 2 * this.random, ch: this.j9, ccv2: this.random - 2, abl: 348, cp: 56, vv: 152})
        if(this._0x6666d2){
          this._0x3dd6b5 = true;
          if (!(this._0x3fc49a && !_0x14b0ca)) {
            this._0x81e3fc();
          }
        }
    }
    async connectWss(ws){
     await this.postAg219();
      this.j9=60;
      this.socket = new WebSocket(ws,{
        headers: {
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US,en;q=0.9',
            'Cache-Control': 'no-cache',
            Pragma: 'no-cache',
            Origin: 'https://agma.io',
            'Sec-WebSocket-Extensions': 'permessage-deflate; client_max_window_bits',
            'Sec-Websocket-Version': '13',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36 Edg/123.0.0.0',
        },
        rejectUnauthorized: false,
        agent:this.agent
    });
      this.socket.binaryType = "arraybuffer";
      this.socket.onopen = this.open.bind(this);
      this.socket.onmessage = this.message.bind(this);
      this.socket.onerror = this.error.bind(this);
      this.socket.onclose = this.close.bind(this);
    }
    error(e){console.log('err',e)}
    open() {
        console.log('open')
    const _0x1b1e12 = new Writer(13);
    _0x1b1e12.setUint8(245).setUint16(56).setUint16(152).setUint32(this.random).setUint32(this._0x470053(_0x1b1e12.buffer, 0, 9, 245))
    this.send(_0x1b1e12);
  }
    message(message){
         const _0x4dc362 = new Reader(message, 0);
    if (240 === _0x4dc362.buffer.getUint8(0)) {
      _0x4dc362.position += 5;
    }
        switch (_0x4dc362.getUint8()) {
     case 64:
       _0x4dc362.getUint32()
       _0x4dc362.getUint32()
       _0x4dc362.getUint32()
       _0x4dc362.getUint32()
       _0x4dc362.getInt16();
        var _0x494b0c = _0x4dc362.getUint32();
        var _0x56bb0f = _0x4dc362.getUint32();
        _0x4dc362.getUint8();
        _0x4dc362.getUint32();
        _0x4dc362.getUint32();
        _0x4dc362.getUint16();
        _0x4dc362.getUint16();
        if (_0x494b0c === _0x56bb0f) {
          if (this.j9 < 70) {
            this.j9 += 40;
            this.M_ = _0x494b0c;
            this.M_ += 1;
            this.try64(0);
          }
        }
        break;
              case 244:
                console.log(244,'ready to spawn')
                this.readytospawn = true;
        if (1 === _0x4dc362.buffer.byteLength) {
          this._0x375fb8 = true;
            this._0x81e3fc();
          this._0x272b30(7,1);
          this._0x272b30(8,0);
          this._0x272b30(3,1);
          if (this.socket && this.socket.readyState === this.socket.OPEN && (this._0x375fb8 && this.socket.bufferedAmount < 8192 || undefined)) {
        this.anim(130);
              this.socket.send(new Uint8Array([160,0]))
      }
            this.pingInt = setInterval(()=>{
      this.anim(95);
    }, 18e3);
            this.fpsInt=setInterval(()=>{this.anim(130)}, 1e4);
            this.mouseInt=setInterval(()=>{
            this.mouse(0,0)
            },70)
            if(this.userw&&this.passw){
            this.login(this.userw,this.passw);
            setTimeout(()=>{this.sendChat('/wood');
                           // this.rotatewood()
                                       //setTimeout(()=>{xd123(this.userw,this.passw)},100)
                           },100)}
           this.spawnInt=setInterval(()=>{
            var name = 'My Demon'
            var spawnBuf = new DataView(new ArrayBuffer(4 + 2 * 1 + 2 * name.length));
            spawnBuf.setUint8(0, 1);
            for (var b = 4, x = 0; x < 1; x++) spawnBuf.setUint16(b, 0, true);
            for (x = 0; x < name.length; ++x) spawnBuf.setUint16(b + 2 * x, name.charCodeAt(x), true);
            this.anim(34);
            this.send(spawnBuf);
            },2500)
        }
                break;
                case 101:
				console.log("captcha");
               // AG.showCaptcha();
				break;
			case 104:
				console.log('ag219.php')
				this.postAg219idk(1)
				break;
    }
    var _0x506371;
    var _0x3f1fe6;
    }
    close(e){
        console.log('ws close',e)
    }
    spawninterval(x){
    if(x){this.spawnInt=setInterval(()=>{
            var name = ''
            var spawnBuf = new DataView(new ArrayBuffer(4 + 2 * 1 + 2 * name.length));
            spawnBuf.setUint8(0, 1);
            for (var b = 4, x = 0; x < 1; x++) spawnBuf.setUint16(b, 0, true);
            for (x = 0; x < name.length; ++x) spawnBuf.setUint16(b + 2 * x, name.charCodeAt(x), true);
            this.anim(34);
            this.send(spawnBuf);
            },2500)} else{clearInterval(this.spawnInt)}
    }
    try64(a){
         if (this.socket && this.socket.readyState === this.socket.OPEN && (this._0x375fb8 && this.socket.bufferedAmount < 8192 || true) && -1 != this.M_ && !a) {
      var _0x3a9b3 = 0;
      var _0x42c909=[126, 57, 139, 92, 346, 36];
      var _0x28ddaa =162;
      if (0 < this._0x3831b6.length) {
        _0x3a9b3 = 2 * this._0x3831b6.length;
      }
      const auth = new Writer(14 + _0x3a9b3);
      auth.setUint8(2 * (this.j9 + 30) - (this.M_ - 5) % 10 - 5);
      this._0x41d00a(auth, a, this.key);
      auth.setUint32(this._0x599391(2) + (()=>{
        var _0x3531a1 = 0;
        for (var _0x1b66bd = 1; _0x1b66bd < _0x42c909.length; _0x1b66bd++) {
          _0x3531a1 += ~~(this.M_ / _0x42c909[_0x1b66bd] + _0x42c909[_0x1b66bd] % _0x28ddaa);
        }
        return _0x3531a1;
      })() + _0x28ddaa + 10);
      this._0x9678e2(auth);
      if (0 < this._0x3831b6.length) {
        auth.setString(this._0x3831b6);
      }
      this.send(auth)
    }
    }
    _0x9678e2(_0x3e070d) {
    _0x3e070d.setUint32(this._0x470053(_0x3e070d.buffer, 0, 9, 255));
  }
    _0x470053(_0x57e15e, _0x5b4069, _0x5c5eee, _0x99aef3) {
    if (_0x5b4069 + _0x5c5eee > _0x57e15e.byteLength) {
      _0x5c5eee = 0;
    }
    var _0x2839c7 = 12354678 + _0x99aef3;
    for (var _0x4b14de = 0; _0x4b14de < _0x5c5eee; _0x4b14de++) {
      _0x2839c7 += _0x57e15e.getUint8(_0x5b4069 + _0x4b14de) * (_0x4b14de + 1);
    }
    Math.floor(10 * Math.random());
    _0x99aef3 = Math.floor(10 * Math.random());
    return _0x2839c7 + 3;
  }
    _0x41d00a(_0x1876c2, _0x3f10c9, _0x28c116) {
    this._0x599391(2);
    _0x1876c2.setUint32(1 + ~~(this.M_ / 1.6 + this.j9 / 2 - 2 * (_0x3f10c9 ? 0.5 : 1)) + ~~(~~(22.21 * (~~(this.M_ + 4.81 * this.random + 550) % --_0x28c116 - 36360)) / 4.2 + 0.4));
  }
    _0x599391(_0x49dd32, _0x1d3a97) {
    return 2 == _0x49dd32 && this._0x599391(typeof Event) ? (this._0x41d00a = function () {}, 2 * _0x49dd32 + this.M_ / this.M_ * 1.88) : 2 == _0x49dd32 && 162 == this.M_ ? 2 * _0x49dd32 + this.M_ / this.M_ * 0.48 : 2 == _0x1d3a97 ? 2 * _0x49dd32 + _0x1d3a97 / 2 + this.M_ / this.M_ * 0.68 : 2 * _0x49dd32 + this.M_ / this.M_ * 0.88;
  }
    _0x272b30(_0x2a0bfd, _0x114b95) {
    if (this.socket && this.socket.readyState === this.socket.OPEN && (this._0x375fb8 && this.socket.bufferedAmount < 8192 || undefined)) {
     var packet= new Writer(3).setUint8(4).setUint8(_0x2a0bfd).setUint8(_0x114b95)
     this.send(packet);
    }
  }
    _0x81e3fc() {
    if (this.socket && this.socket.readyState === this.socket.OPEN && (this._0x375fb8 && this.socket.bufferedAmount < 8192 || true)) {
      if (0 < this._0x6666d2.length) {
       var packet= new Writer(3 + 2 * this._0x6666d2.length).setUint8(101).setUint16(this._0x6666d2.length).setString(this._0x6666d2)
       this.send(packet);
        this._0x3fc49a = !(this._0x3dd6b5 = false);
      } else if (!this._0x3dd6b5) {
        setTimeout(()=> {
          this._0x81e3fc();
        }, 3e3);
      }
    }
  }
    anim(_0x269cc5) {
    if (this.socket && this.socket.readyState === this.socket.OPEN && (this._0x375fb8 && this.socket.bufferedAmount < 8192 || undefined)) {
      var packet = new Writer(1).setUint8(_0x269cc5);
      this.send(packet);
    }
  }
    crash(){
    this.mb(81,'agar-1')
       this.mb(82,'agar-1')
      this.mb(83,'agar-1')
    }
    mb(d, b) {
      var x = new DataView(new ArrayBuffer(1 + 2 * b.length));
      var _ = 0;
      x.setUint8(_++, d);
      for (var e = 0; e < b.length; ++e) {
        x.setUint16(_, b.charCodeAt(e), true);
        _ += 2;
      }
      this.send(x);
  }
    sendChat(message) {
        if (this.readytospawn){
		var b = new DataView(new ArrayBuffer(2 + 2 * message.length)),
			x = 0;
		b.setUint8(x++, 98);
		b.setUint8(x++, 1);
		for (var _ = 0; _ < message.length; ++_) b.setUint16(x, message.charCodeAt(_), true), x += 2;
		this.send(b)
        }
	}
    split() {
         if (this.readytospawn){
		this.anim(17)}
	}
    spawn(name) {
		if (this.readytospawn) {
            this.name = name;
			var spawnBuf = new DataView(new ArrayBuffer(4 + 2 * 1 + 2 * name.length));
			spawnBuf.setUint8(0, 1);
			for (var b = 4, x = 0; x < 1; x++) spawnBuf.setUint16(b, 0, true);
			for (x = 0; x < name.length; ++x) spawnBuf.setUint16(b + 2 * x, name.charCodeAt(x), true);
			this.anim(59);
			this.anim(34)
			this.anim(34)
			this.send(spawnBuf);
		}
	}
    closews() {
		if (this.socket) {
			this.socket.onopen = null;
			this.socket.onmessage = null;
			this.socket.onerror = null;
			this.socket.onclose = null;
        try{
       this.socket.close();
        } catch(a){}
        }
         clearInterval(this.spawnInt)
                clearInterval(this.fpsInt)
                clearInterval(this.pingInt)
	}
    mouse(x, y) {
		const packet = new DataView(new ArrayBuffer(9));
		packet.setUint8(0, 0)
		packet.setInt32(1, x, true);
		packet.setInt32(5, y, true);
		this.send(packet);
	}
     wood(x,y){
        this.sendPw(10,x,y)
    }
    rotatewood(){
let x1 = new DataView(new ArrayBuffer(10))
x1.setUint8(0,73)
    x1.setUint8(1,2)
    x1.setUint8(9,10)
this.send(x1)
}
    sendPw(id){
            this.send(new Writer(10).setUint8(72).setInt32(position.x).setInt32(position.y).setUint8(id))
}
    skinChanger(boolean){
       if(boolean){ let interval=setInterval(()=>{
    var n = [""];
		const i = new Writer(4 + 2 * n.length + 2 * ''.length);
		i.setUint8(1).setUint16(this.skinarr[this.count]).setUint8(n.length), i.setUint16(0), i.setString('')
        this.send(i)
        this.skinarr+=1;
        if(this.count > this.skinarr.length){this.count=0}},5100)}
        else{clearInterval(interval)}
    }
    login(user,pass){
      this.send(new Writer(5 + 2 * user.length + 2 * unsafeWindow.md5(pass).length).setUint8(2).setString(user).setUint16(0).setString(unsafeWindow.md5(pass)).setUint16(0))
    }
    send(data){
     if(this.socket && this.socket.readyState === WebSocket.OPEN) this.socket.send(data.buffer);
    }
}