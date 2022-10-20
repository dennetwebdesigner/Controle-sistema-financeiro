export interface data {
  username: string
  password: string
}

export interface iUserRepository {
  findByUsername(username: string): Promise<any>
  save(data: data): Promise<any>
}
