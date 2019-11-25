export interface LoginRequest {
  username: string,
  password: string
}

export interface LoginResponse {
  accessToken: string
}