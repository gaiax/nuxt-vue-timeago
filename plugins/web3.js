import Web3 from "web3";
import artifacts from "~~/build/contracts/CHEERToken.json"

export default async function(context, inject) {
    // const wsEndpoint = "wss://bc.cheer-for.com:8546"
    const wsEndpoint = "ws://127.0.0.1:8546"
    const web3 = new Web3(new Web3.providers.WebsocketProvider(wsEndpoint))

    let networkId = await web3.eth.net.getId()
    
    let contract = await new web3.eth.Contract(
        artifacts.abi,
        artifacts.networks[networkId].address
    )

    inject('web3',web3)
    inject('contract',contract)
}