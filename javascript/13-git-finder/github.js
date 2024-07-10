class Github{

    constructor(){
        this.client_id = "Ov23li6c1ICuSaQnWvBQ",
        this.client_secret = "2fa18b30e0f8e44af3698894053a96c749a07600"
    }

    async getUser(user){

        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return profile;

    }

}