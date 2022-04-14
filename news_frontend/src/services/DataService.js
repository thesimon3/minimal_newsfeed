import http from '../http-common.js';
class DataService{
	getAll(){
		return http.get("/");
	}
}

export default new DataService();