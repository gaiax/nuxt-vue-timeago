// async function usersShow(access_token, access_token_secret ,user_id) {
// }

//　ツイートの送信
export default ({ app }, inject) => { 
    let submitTweet = async(access_token, access_token_secret, tweet_text) => {    
        const headers = new Headers({
            "Content-Type": "application/json"
        });
    
        let data = { 
            access_token : access_token,
            access_token_secret : access_token_secret,
            message : tweet_text
        }
        const body = JSON.stringify(data);
        const response = await fetch(
            //'https://us-central1-cheerfor-alpha-11c15.cloudfunctions.net/statuses_update',
            "https://us-central1-cheerfor-alpha-test.cloudfunctions.net/statuses_update",
            {method: 'POST', mode:'cors', headers, body}
        );
        const response_text = await response.text();
    }

    inject('submitTweet',submitTweet)
}

