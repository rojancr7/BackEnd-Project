class ApiResponse {
    constructor(statusCode, data, massage = "Sucess"){
        this.statusCode = statusCode
        this.data = data 
        this.massage = massage
        this.sucess = statusCode < 400
    }
}