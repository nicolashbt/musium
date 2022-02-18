export class User {
    constructor(
        public id: number,
        public nickname: string,
        public email: string,
        private _role: number,
        private _token: string
    ) { }

    get token() {
        return this._token;
    }

    get role() {
        return this._role;
    }

}