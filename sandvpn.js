class sandvpn{
    constructor(){
        this.api = "https://api.sandvpn.com"
        this.headers={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0","x-requested-with": "XMLHttpRequest"}
    }
    async free_proxy(){
        let req=await fetch(`${this.api}/fetch-free-proxys`,{method:"GET",headers: this.headers});
        return await req.json();
    }
    async notifs_list(){
        let req=await fetch(`${this.api}/get-notifs`,{method:"GET",headers: this.headers});
        return await req.json();
    }
    async streaming_proxy(){
        let req=await fetch(`${this.api}/streaming`,{method:"GET",headers: this.headers});
        return await req.json();
    }
    async unlock_list(){
        let req=await fetch(`${this.api}/unlock`,{method:"GET",headers: this.headers});
        return await req.json();
    }
}
module.exports = {sandvpn};